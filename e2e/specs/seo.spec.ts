import { test, expect } from '@playwright/test'
import { HomePage } from '../pages/HomePage'

test.describe('SEO', () => {
  test.beforeEach(async ({ page }) => {
    const home = new HomePage(page)
    await home.goto()
  })

  test('meta title is present', async ({ page }) => {
    await expect(page).toHaveTitle(/Ready/)
  })

  test('meta description is present', async ({ page }) => {
    // react-helmet-async adds a second meta[name="description"] with data-rh="true"
    // Use .first() to avoid strict-mode error when both static + dynamic tags are present
    const desc = page.locator('meta[name="description"]').first()
    await expect(desc).toHaveAttribute('content', /.{10,}/)
  })

  test('Open Graph tags are present', async ({ page }) => {
    const ogTitle = page.locator('meta[property="og:title"]')
    const ogDesc = page.locator('meta[property="og:description"]')
    const ogType = page.locator('meta[property="og:type"]')
    await expect(ogTitle).toHaveCount(1)
    await expect(ogDesc).toHaveCount(1)
    await expect(ogType).toHaveAttribute('content', 'website')
  })

  test('canonical URL is set', async ({ page }) => {
    const canonical = page.locator('link[rel="canonical"]')
    await expect(canonical).toHaveAttribute('href', /joinready\.com/)
  })

  test('H1 is unique per page', async ({ page }) => {
    const h1s = page.getByRole('heading', { level: 1 })
    await expect(h1s).toHaveCount(1)
  })

  test('sitemap.xml is accessible', async ({ page }) => {
    const response = await page.goto('/sitemap.xml')
    expect(response?.status()).toBe(200)
    const content = await page.content()
    expect(content).toContain('<urlset')
  })

  test('robots.txt is accessible', async ({ page }) => {
    const response = await page.goto('/robots.txt')
    expect(response?.status()).toBe(200)
    const content = await page.content()
    expect(content).toContain('User-agent')
  })

  test('all images have alt text', async ({ page }) => {
    await page.goto('/')
    const images = page.getByRole('img')
    const count = await images.count()
    for (let i = 0; i < count; i++) {
      const alt = await images.nth(i).getAttribute('alt')
      expect(alt).not.toBeNull()
      expect(alt?.trim().length).toBeGreaterThan(0)
    }
  })

  test('hreflang tags are present', async ({ page }) => {
    const esLink = page.locator('link[hreflang="es"]')
    const enLink = page.locator('link[hreflang="en"]')
    await expect(esLink).toHaveCount(1)
    await expect(enLink).toHaveCount(1)
  })
})
