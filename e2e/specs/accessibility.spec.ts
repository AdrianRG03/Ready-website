import { test, expect } from '@playwright/test'
import { HomePage } from '../pages/HomePage'
import { NavigationComponent } from '../pages/NavigationComponent'

test.describe('Accessibility', () => {
  test.beforeEach(async ({ page }) => {
    const home = new HomePage(page)
    await home.goto()
  })

  test('skip-to-content link is present and focusable', async ({ page }) => {
    // Tab once — skip link should be focused
    await page.keyboard.press('Tab')
    const focused = page.locator(':focus')
    const text = await focused.textContent()
    expect(text?.toLowerCase()).toMatch(/saltar|skip/i)
  })

  test('all interactive elements are keyboard-focusable', async ({ page }) => {
    const nav = new NavigationComponent(page)
    // Tab through nav links
    await expect(nav.logo).toBeVisible()
    // Focus logo via keyboard
    await page.keyboard.press('Tab')
    await page.keyboard.press('Tab')
    const focused = page.locator(':focus')
    await expect(focused).toBeVisible()
  })

  test('focus is visible on interactive elements', async ({ page }) => {
    // Press Tab to move focus, then check that focus ring is visible
    await page.keyboard.press('Tab')
    await page.keyboard.press('Tab')
    const focused = await page.evaluate(() => {
      const el = document.activeElement as HTMLElement | null
      if (!el) return null
      const style = window.getComputedStyle(el)
      return {
        outlineStyle: style.outlineStyle,
        outlineWidth: style.outlineWidth,
        boxShadow: style.boxShadow,
      }
    })
    // Either outline or box-shadow should be present
    const hasFocusStyle =
      (focused?.outlineStyle !== 'none' && focused?.outlineWidth !== '0px') ||
      focused?.boxShadow !== 'none'
    expect(hasFocusStyle).toBe(true)
  })

  test('ARIA roles are correct on navigation', async ({ page }) => {
    const banner = page.getByRole('banner')
    const nav = page.getByRole('navigation').first()
    const main = page.getByRole('main')
    const contentinfo = page.getByRole('contentinfo')
    await expect(banner).toBeVisible()
    await expect(nav).toBeVisible()
    await expect(main).toBeVisible()
    await expect(contentinfo).toBeVisible()
  })

  test('form inputs have associated labels', async ({ page }) => {
    await page.evaluate(() => {
      document.getElementById('contratar')?.scrollIntoView({ behavior: 'instant' })
    })
    await page.waitForTimeout(300)
    // Navigate to step 3 (force: true bypasses fixed navbar interception)
    const wizard = page.locator('[data-testid="wizard-form"]')
    await wizard.getByRole('radio').first().check({ force: true })
    await wizard.getByRole('button', { name: /siguiente|next/i }).click()
    await wizard.getByRole('radio').first().check({ force: true })
    await wizard.getByRole('button', { name: /siguiente|next/i }).click()

    // Check that all inputs have labels
    const inputs = wizard.locator('input[type="text"], input[type="email"], textarea')
    const count = await inputs.count()
    for (let i = 0; i < count; i++) {
      const input = inputs.nth(i)
      const id = await input.getAttribute('id')
      if (id) {
        const label = page.locator(`label[for="${id}"]`)
        await expect(label).toHaveCount(1)
      }
    }
  })

  test('wizard progress bar has ARIA attributes', async ({ page }) => {
    await page.evaluate(() => {
      document.getElementById('contratar')?.scrollIntoView({ behavior: 'instant' })
    })
    const progressBar = page.getByRole('progressbar')
    await expect(progressBar).toHaveAttribute('aria-valuenow')
    await expect(progressBar).toHaveAttribute('aria-valuemin')
    await expect(progressBar).toHaveAttribute('aria-valuemax')
  })
})
