/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_GA4_MEASUREMENT_ID: string
  readonly VITE_INTEGRATION_ENDPOINT: string
  readonly VITE_FIREBASE_PROJECT_ID: string
  readonly VITE_FIREBASE_API_KEY: string
  readonly VITE_ENABLE_RECAPTCHA: string
  readonly VITE_RECAPTCHA_SITE_KEY: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
