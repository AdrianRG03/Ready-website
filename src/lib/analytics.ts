/**
 * Google Analytics 4 — event tracking helpers.
 * GA4 script is loaded via GTM in index.html (when VITE_GA4_MEASUREMENT_ID is set).
 */

type GtagCommand = 'event' | 'config' | 'js' | 'set'

declare global {
  interface Window {
    gtag?: (command: GtagCommand, ...args: unknown[]) => void
    dataLayer?: unknown[]
  }
}

function gtag(command: GtagCommand, ...args: unknown[]) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag(command, ...args)
  }
}

export const analytics = {
  /**
   * Track a CTA button click (e.g. "Contratar ahora")
   */
  trackCTAClick(label: string) {
    gtag('event', 'cta_click', {
      event_category: 'engagement',
      event_label: label,
    })
  },

  /**
   * Track wizard step completion
   */
  trackWizardStep(step: number, stepName: string) {
    gtag('event', 'wizard_step', {
      event_category: 'wizard',
      step_number: step,
      step_name: stepName,
    })
  },

  /**
   * Track wizard form submission
   */
  trackWizardSubmit(profile: string) {
    gtag('event', 'wizard_submit', {
      event_category: 'conversion',
      profile_type: profile,
    })
  },

  /**
   * Track language switch
   */
  trackLanguageSwitch(locale: string) {
    gtag('event', 'language_switch', {
      event_category: 'engagement',
      locale,
    })
  },
}
