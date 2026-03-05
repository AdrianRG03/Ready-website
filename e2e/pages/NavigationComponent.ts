import { type Page, type Locator } from '@playwright/test'

export class NavigationComponent {
  readonly page: Page
  readonly navbar: Locator
  readonly logo: Locator
  readonly hamburgerButton: Locator
  readonly mobileMenu: Locator
  readonly closeMenuButton: Locator

  constructor(page: Page) {
    this.page = page
    this.navbar = page.getByRole('banner')
    this.logo = this.navbar.getByRole('link', { name: /ready/i })
    this.hamburgerButton = this.navbar.getByRole('button', { name: /abrir menú|open menu/i })
    this.mobileMenu = page.getByRole('dialog', { name: /menú|navigation/i })
    this.closeMenuButton = this.mobileMenu.getByRole('button', { name: /cerrar|close/i })
  }

  async openMobileMenu() {
    await this.hamburgerButton.click()
    await this.mobileMenu.waitFor({ state: 'visible' })
  }

  async closeMobileMenu() {
    await this.closeMenuButton.click()
    await this.mobileMenu.waitFor({ state: 'hidden' })
  }

  async navigateTo(section: string) {
    await this.navbar.getByRole('link', { name: new RegExp(section, 'i') }).click()
  }
}
