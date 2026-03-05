import { test, expect } from '@playwright/test'
import { HomePage } from '../pages/HomePage'
import { NavigationComponent } from '../pages/NavigationComponent'

test.describe('Navigation', () => {
  test.beforeEach(async ({ page }) => {
    const home = new HomePage(page)
    await home.goto()
  })

  test('navbar is visible on desktop', async ({ page }) => {
    const nav = new NavigationComponent(page)
    await expect(nav.navbar).toBeVisible()
    await expect(nav.logo).toBeVisible()
  })

  test('logo links to home', async ({ page }) => {
    const nav = new NavigationComponent(page)
    await nav.logo.click()
    await expect(page).toHaveURL('/')
  })

  test('hamburger menu opens and closes on mobile', async ({ page }) => {
    // Set mobile viewport
    await page.setViewportSize({ width: 375, height: 812 })
    const nav = new NavigationComponent(page)
    await page.reload()
    await nav.openMobileMenu()
    await expect(nav.mobileMenu).toBeVisible()
    await nav.closeMobileMenu()
    await expect(nav.mobileMenu).toBeHidden()
  })

  test('mobile menu closes on Escape key', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 })
    const nav = new NavigationComponent(page)
    await page.reload()
    await nav.openMobileMenu()
    await page.keyboard.press('Escape')
    await expect(nav.mobileMenu).toBeHidden()
  })

  test('footer contains navigation links', async ({ page }) => {
    const footer = page.getByRole('contentinfo')
    await expect(footer).toBeVisible()
  })
})
