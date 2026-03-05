import type { WizardFormData } from '@/types'

/**
 * Sends wizard form data to the configured integration endpoint.
 * Configure VITE_INTEGRATION_ENDPOINT in .env.local.
 * Supports any REST endpoint (EmailJS, Formspree, Make.com, n8n, etc.)
 */
export async function submitWizardForm(data: Omit<WizardFormData, 'honeypot'>): Promise<void> {
  const endpoint = import.meta.env.VITE_INTEGRATION_ENDPOINT

  if (!endpoint) {
    // In development without endpoint, log to console for testing
    if (import.meta.env.DEV) {
      console.warn('[integrations] VITE_INTEGRATION_ENDPOINT not set. Form data:', data)
      // Simulate network delay in dev
      await new Promise(resolve => setTimeout(resolve, 1000))
      return
    }
    throw new Error('Integration endpoint not configured.')
  }

  const response = await fetch(endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      ...data,
      source: 'ready-website-wizard',
      timestamp: new Date().toISOString(),
    }),
  })

  if (!response.ok) {
    throw new Error(`Submission failed: ${response.status} ${response.statusText}`)
  }
}
