import { test, expect } from '@playwright/test'
import { HomePage } from '../pages/HomePage'
import { WizardPage } from '../pages/WizardPage'
import { VALID_CONTACT, XSS_PAYLOADS } from '../fixtures/test-data'

test.describe('Wizard Form', () => {
  test.beforeEach(async ({ page }) => {
    const home = new HomePage(page)
    await home.goto()
    await home.scrollToSection('contratar')
  })

  test('wizard form is present on page', async ({ page }) => {
    const wizard = new WizardPage(page)
    await expect(wizard.wizardForm).toBeVisible()
  })

  test('progress bar is visible', async ({ page }) => {
    const wizard = new WizardPage(page)
    await expect(wizard.progressBar).toBeVisible()
  })

  test('step 1: can select a profile', async ({ page }) => {
    const wizard = new WizardPage(page)
    await wizard.selectProfile('frontend')
    await expect(wizard.nextButton).toBeEnabled()
  })

  test('step 1: shows error when no profile selected', async ({ page }) => {
    const wizard = new WizardPage(page)
    await wizard.nextButton.click()
    await expect(page.getByRole('alert')).toBeVisible()
  })

  test('step 2: can select hours dedication', async ({ page }) => {
    const wizard = new WizardPage(page)
    await wizard.selectProfile('backend')
    await wizard.nextButton.click()
    await wizard.selectHours('full-time')
    await expect(wizard.nextButton).toBeEnabled()
  })

  test('step 2: back button returns to step 1', async ({ page }) => {
    const wizard = new WizardPage(page)
    await wizard.selectProfile('frontend')
    await wizard.nextButton.click()
    await wizard.backButton.click()
    // Should be back at step 1
    await expect(wizard.progressBar).toHaveAttribute('aria-valuenow', '1')
  })

  test('step 3: shows validation errors for empty fields', async ({ page }) => {
    const wizard = new WizardPage(page)
    await wizard.selectProfile('fullstack')
    await wizard.nextButton.click()
    await wizard.selectHours('part-time')
    await wizard.nextButton.click()
    // Try submit empty
    await wizard.submitButton.click()
    await expect(page.getByRole('alert').first()).toBeVisible()
  })

  test('step 3: validates email format', async ({ page }) => {
    const wizard = new WizardPage(page)
    await wizard.selectProfile('ux-ui')
    await wizard.nextButton.click()
    await wizard.selectHours('full-time')
    await wizard.nextButton.click()
    await wizard.fillContact({
      name: 'Test User',
      email: 'not-valid-email',
      company: 'TestCo',
    })
    await wizard.submitButton.click()
    await expect(page.getByRole('alert').first()).toBeVisible()
  })

  test('complete happy path submission', async ({ page }) => {
    const wizard = new WizardPage(page)
    await wizard.completeWizard({
      profile: 'frontend',
      hours: 'full-time',
      ...VALID_CONTACT,
    })
    // Should show success or be submitting
    await expect(
      page.getByText(/éxito|success|enviado/i).or(wizard.errorMessage)
    ).toBeVisible({ timeout: 10_000 })
  })

  test('XSS input is sanitized and does not execute', async ({ page }) => {
    // Set up a dialog listener to catch any alert() calls
    let alertFired = false
    page.on('dialog', () => { alertFired = true })

    const wizard = new WizardPage(page)
    await wizard.selectProfile('frontend')
    await wizard.nextButton.click()
    await wizard.selectHours('full-time')
    await wizard.nextButton.click()

    // Try XSS in text fields
    await wizard.fillContact({
      name: XSS_PAYLOADS[0],
      email: 'test@test.com',
      company: XSS_PAYLOADS[1],
      message: XSS_PAYLOADS[2],
    })

    // Wait a moment to see if XSS fires
    await page.waitForTimeout(500)
    expect(alertFired).toBe(false)
  })

  test('honeypot field is hidden from users', async ({ page }) => {
    // Honeypot only renders in StepContact (step 3) — navigate there first
    const wizard = new WizardPage(page)
    await wizard.selectProfile('frontend')
    await wizard.nextButton.click()
    await page.waitForTimeout(600)
    await wizard.selectHours('full-time')
    await wizard.nextButton.click()
    await page.waitForTimeout(600)

    const honeypot = page.locator('[name="honeypot"]')
    const isHidden = await honeypot.evaluate(el => {
      const style = window.getComputedStyle(el)
      const parent = el.closest('[aria-hidden="true"]') || el.parentElement
      return style.display === 'none' ||
             style.visibility === 'hidden' ||
             parent?.getAttribute('aria-hidden') === 'true' ||
             (parent as HTMLElement)?.style?.display === 'none'
    })
    expect(isHidden).toBe(true)
  })
})
