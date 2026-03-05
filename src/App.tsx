import { Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { Layout } from '@/components/layout/Layout'
import { Home } from '@/pages/Home'
import '@/i18n/config'

function LoadingFallback() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-brand-950" aria-label="Cargando...">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 border-4 border-brand-400 border-t-transparent rounded-full animate-spin" role="status" />
        <span className="text-white/60 text-sm">Cargando...</span>
      </div>
    </div>
  )
}

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Suspense fallback={<LoadingFallback />}>
          <Layout>
            <Routes>
              {/* ES (default) */}
              <Route path="/" element={<Home />} />
              {/* EN locale */}
              <Route path="/en/*" element={<Home />} />
              {/* Catch-all → home */}
              <Route path="*" element={<Home />} />
            </Routes>
          </Layout>
        </Suspense>
      </BrowserRouter>
    </HelmetProvider>
  )
}
