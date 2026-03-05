import { expect, type Page, type Locator } from '@playwright/test'

export class HomePage {
  readonly page: Page
  readonly heroTitle: Locator
  readonly ctaButton: Locator
  readonly languageSwitcher: Locator
  readonly navLinks: Locator
  readonly wizardForm: Locator
  readonly skipToContent: Locator

  constructor(page: Page) {
    this.page = page
    this.heroTitle = page.getByRole('heading', { level: 1 })
    this.ctaButton = page.getByRole('button', { name: /contratar|hire/i }).first()
    // CSS attribute selector instead of getByRole() — the desktop LanguageSwitcher lives inside
    // a `hidden md:flex` wrapper on mobile, making it display:none and absent from the a11y tree.
    // CSS selectors query the DOM directly and find display:none elements without issue.
    this.languageSwitcher = page.locator('[role="group"][aria-label*="idioma"]').first()
    this.navLinks = page.getByRole('navigation').first().getByRole('link')
    this.wizardForm = page.locator('[data-testid="wizard-form"]')
    this.skipToContent = page.getByText(/saltar al contenido|skip to content/i)
  }

  async goto(locale: 'es' | 'en' = 'es') {
    const path = locale === 'en' ? '/en/' : '/'
    await this.page.goto(path)
    await this.page.waitForLoadState('networkidle')
  }

  async switchLanguage(to: 'es' | 'en') {
    // On mobile, the desktop LanguageSwitcher sits inside a `hidden md:flex` div (display:none).
    // Playwright's locator.click() — even with force:true — cannot dispatch on an element whose
    // CSS computed style is display:none (parent hides it).
    // Solution: page.evaluate() calls the native DOM .click() method directly, which fires the
    // React onClick handler regardless of computed visibility.
    await this.page.evaluate((lang: string) => {
      const groups = document.querySelectorAll<HTMLElement>('[role="group"]')
      for (const group of groups) {
        const buttons = group.querySelectorAll<HTMLButtonElement>('button')
        for (const btn of buttons) {
          if (btn.textContent?.trim() === lang) {
            btn.click()
            return
          }
        }
      }
    }, to.toUpperCase())
    // Use expect().toHaveURL() (polling assertion) instead of waitForURL()
    // waitForURL waits for a 'load' event that never fires on SPA pushState/replaceState nav
    // 15s timeout — mobile CPU emulation is significantly slower than desktop
    if (to === 'en') {
      await expect(this.page).toHaveURL(/\/en\//, { timeout: 15_000 })
    } else {
      await expect(this.page).toHaveURL(/^(?!.*\/en\/).*$/, { timeout: 15_000 })
    }
  }

  async scrollToSection(id: string) {
    await this.page.evaluate(sectionId => {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'instant' })
    }, id)
    await this.page.waitForTimeout(300)
  }

  async clickCTA() {
    await this.ctaButton.click()
    await this.scrollToSection('contratar')
  }
}
