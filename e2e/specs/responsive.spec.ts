import { test, expect } from '@playwright/test'
import { HomePage } from '../pages/HomePage'
import { NavigationComponent } from '../pages/NavigationComponent'

const BREAKPOINTS = [
  { name: 'mobile', width: 375, height: 812 },
  { name: 'tablet', width: 768, height: 1024 },
  { name: 'desktop', width: 1280, height: 800 },
]

for (const bp of BREAKPOINTS) {
  test.describe(`Responsive — ${bp.name} (${bp.width}px)`, () => {
    test.beforeEach(async ({ page }) => {
      await page.setViewportSize({ width: bp.width, height: bp.height })
      const home = new HomePage(page)
      await home.goto()
    })

    test('H1 heading is visible and fits viewport', async ({ page }) => {
      const h1 = page.getByRole('heading', { level: 1 })
      await expect(h1).toBeVisible()
      const box = await h1.boundingBox()
      expect(box?.width).toBeLessThanOrEqual(bp.width)
    })

    test('images do not overflow viewport', async ({ page }) => {
      const images = page.getByRole('img')
      const count = await images.count()
      for (let i = 0; i < count; i++) {
        const box = await images.nth(i).boundingBox()
        if (box) {
          expect(box.x + box.width).toBeLessThanOrEqual(bp.width + 1)
        }
      }
    })

    test('wizard form is visible', async ({ page }) => {
      const wizard = page.locator('[data-testid="wizard-form"]')
      await page.evaluate(() => {
        document.getElementById('contratar')?.scrollIntoView({ behavior: 'instant' })
      })
      await expect(wizard).toBeVisible()
    })

    if (bp.name === 'mobile') {
      test('hamburger menu is visible on mobile', async ({ page }) => {
        const nav = new NavigationComponent(page)
        await expect(nav.hamburgerButton).toBeVisible()
      })

      test('desktop nav links are hidden on mobile', async ({ page }) => {
        // Desktop nav is hidden via CSS md:flex
        const desktopNav = page.locator('nav ul.hidden')
        await expect(desktopNav.first()).toBeHidden()
      })
    }

    if (bp.name === 'desktop') {
      test('hamburger menu is NOT visible on desktop', async ({ page }) => {
        const nav = new NavigationComponent(page)
        await expect(nav.hamburgerButton).toBeHidden()
      })
    }
  })
}
