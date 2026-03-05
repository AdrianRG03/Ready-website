import { test, expect, type Page } from '@playwright/test'
import { HomePage } from '../pages/HomePage'

/** Navigate wizard to step 3, using force on radio checks to bypass fixed navbar. */
async function navigateWizardToStep3(page: Page) {
  await page.evaluate(() => {
    document.getElementById('contratar')?.scrollIntoView({ behavior: 'instant' })
  })
  await page.waitForTimeout(500)
  const wizard = page.locator('[data-testid="wizard-form"]')
  // Step 1 → Step 2 (wait for Framer Motion AnimatePresence transition)
  await wizard.getByRole('radio').first().check({ force: true })
  await wizard.getByRole('button', { name: /siguiente|next/i }).click()
  await page.waitForTimeout(600)
  // Step 2 → Step 3
  await wizard.getByRole('radio').first().check({ force: true })
  await wizard.getByRole('button', { name: /siguiente|next/i }).click()
  await page.waitForTimeout(600)
  return wizard
}

test.describe('Security', () => {
  test('no mixed content (HTTP resources on HTTPS page)', async ({ page }) => {
    const mixedContent: string[] = []
    page.on('response', response => {
      const url = response.url()
      if (url.startsWith('http://') && !url.startsWith('http://localhost')) {
        mixedContent.push(url)
      }
    })
    const home = new HomePage(page)
    await home.goto()
    await page.waitForLoadState('networkidle')
    expect(mixedContent).toHaveLength(0)
  })

  test('no critical JS errors on page load', async ({ page }) => {
    const errors: string[] = []
    page.on('console', msg => {
      if (msg.type() === 'error') errors.push(msg.text())
    })
    const home = new HomePage(page)
    await home.goto()
    await page.waitForLoadState('networkidle')
    const critical = errors.filter(
      e =>
        !e.includes('favicon') &&
        !e.includes('net::ERR') &&
        !e.includes('i18next') &&
        !e.includes('Warning') &&
        !e.includes('localhost') &&
        !e.includes('Failed to load resource')
    )
    expect(critical).toHaveLength(0)
  })

  test('honeypot field is not visible to users', async ({ page }) => {
    const home = new HomePage(page)
    await home.goto()
    await navigateWizardToStep3(page)

    const honeypot = page.locator('[name="honeypot"]')
    const isHidden = await honeypot.evaluate(el => {
      const parent = el.parentElement
      return (
        el.tabIndex === -1 ||
        parent?.getAttribute('aria-hidden') === 'true' ||
        window.getComputedStyle(el).display === 'none' ||
        (parent as HTMLElement)?.style?.display === 'none'
      )
    })
    expect(isHidden).toBe(true)
  })

  test('form does not execute XSS from name field', async ({ page }) => {
    let alertFired = false
    page.on('dialog', async dialog => {
      alertFired = true
      await dialog.dismiss()
    })

    const home = new HomePage(page)
    await home.goto()
    const wizard = await navigateWizardToStep3(page)

    await wizard.getByLabel(/nombre|name/i).fill('<script>alert("xss")</script>')
    await wizard.getByLabel(/correo|email/i).fill('test@test.com')
    await wizard.getByLabel(/empresa|company/i).fill('<img src=x onerror=alert(1)>')

    await page.waitForTimeout(1000)
    expect(alertFired).toBe(false)
  })

  test('external links have rel="noopener noreferrer"', async ({ page }) => {
    const home = new HomePage(page)
    await home.goto()
    const externalLinks = page.locator('a[target="_blank"]')
    const count = await externalLinks.count()
    for (let i = 0; i < count; i++) {
      const rel = await externalLinks.nth(i).getAttribute('rel')
      expect(rel).toContain('noopener')
      expect(rel).toContain('noreferrer')
    }
  })
})
