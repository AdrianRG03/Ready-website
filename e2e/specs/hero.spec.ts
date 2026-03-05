import { test, expect } from '@playwright/test'
import { HomePage } from '../pages/HomePage'

test.describe('Hero Section', () => {
  test.beforeEach(async ({ page }) => {
    const home = new HomePage(page)
    await home.goto()
  })

  test('H1 heading is visible and unique', async ({ page }) => {
    const h1s = page.getByRole('heading', { level: 1 })
    await expect(h1s).toBeVisible()
    await expect(h1s).toHaveCount(1)
  })

  test('primary CTA button is present and clickable', async ({ page }) => {
    const home = new HomePage(page)
    await expect(home.ctaButton).toBeVisible()
    await expect(home.ctaButton).toBeEnabled()
  })

  test('hero is responsive on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 })
    await page.reload()
    const h1 = page.getByRole('heading', { level: 1 })
    await expect(h1).toBeVisible()
    // Text should not overflow
    const box = await h1.boundingBox()
    expect(box?.width).toBeLessThanOrEqual(375)
  })

  test('stats section is visible', async ({ page }) => {
    // Look for the 500+ stat
    await expect(page.getByText('500+')).toBeVisible()
  })
})
