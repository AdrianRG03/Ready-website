import { type Page, type Locator } from '@playwright/test'

export class WizardPage {
  readonly page: Page
  readonly wizardForm: Locator
  readonly progressBar: Locator
  readonly nextButton: Locator
  readonly backButton: Locator
  readonly submitButton: Locator
  readonly successMessage: Locator
  readonly errorMessage: Locator

  constructor(page: Page) {
    this.page = page
    this.wizardForm = page.locator('[data-testid="wizard-form"]')
    this.progressBar = this.wizardForm.getByRole('progressbar')
    this.nextButton = this.wizardForm.getByRole('button', { name: /siguiente|next/i })
    this.backButton = this.wizardForm.getByRole('button', { name: /atrás|back/i })
    this.submitButton = this.wizardForm.getByRole('button', { name: /enviar|send|submit/i })
    this.successMessage = this.wizardForm.getByRole('heading', { name: /éxito|success/i })
    this.errorMessage = this.wizardForm.getByRole('alert')
  }

  async selectProfile(profile: string) {
    // 'ux-ui' translates to "UX/UI Designer" / "Diseñador UX/UI" — slash ≠ hyphen
    const nameMap: Record<string, RegExp> = {
      'ux-ui': /ux.{0,3}ui/i,
    }
    const regex = nameMap[profile] ?? new RegExp(profile, 'i')
    await this.wizardForm.getByRole('radio', { name: regex }).check({ force: true })
  }

  async selectHours(hours: 'part-time' | 'full-time' | 'per-project') {
    const labels: Record<string, RegExp> = {
      'part-time': /part.?time/i,
      'full-time': /full.?time/i,
      'per-project': /proyecto|project/i,
    }
    await this.wizardForm.getByRole('radio', { name: labels[hours] }).check({ force: true })
  }

  async fillContact({
    name,
    email,
    company,
    message,
  }: {
    name: string
    email: string
    company: string
    message?: string
  }) {
    await this.wizardForm.getByLabel(/nombre|name/i).fill(name)
    await this.wizardForm.getByLabel(/correo|email/i).fill(email)
    await this.wizardForm.getByLabel(/empresa|company/i).fill(company)
    if (message) {
      // Label text varies by locale ("¿Algo más...?" / "Anything else...?") — use stable id
      await this.wizardForm.locator('#wizard-message').fill(message)
    }
  }

  async completeWizard(data: {
    profile: string
    hours: 'part-time' | 'full-time' | 'per-project'
    name: string
    email: string
    company: string
    message?: string
  }) {
    // Step 1: Profile
    await this.selectProfile(data.profile)
    await this.nextButton.click()

    // Step 2: Hours
    await this.selectHours(data.hours)
    await this.nextButton.click()

    // Step 3: Contact
    await this.fillContact(data)
    await this.submitButton.click()
  }
}
