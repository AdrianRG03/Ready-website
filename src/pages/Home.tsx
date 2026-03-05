import { useTranslation } from 'react-i18next'
import { Helmet } from 'react-helmet-async'
import { Hero } from '@/components/sections/Hero'
import { HowItWorks } from '@/components/sections/HowItWorks'
import { Profiles } from '@/components/sections/Profiles'
import { Benefits } from '@/components/sections/Benefits'
import { SocialProof } from '@/components/sections/SocialProof'
import { WizardForm } from '@/components/sections/WizardForm/WizardForm'
import { About } from '@/components/sections/About'
import { FAQ } from '@/components/sections/FAQ'

export function Home() {
  const { t, i18n } = useTranslation()
  const locale = i18n.language.startsWith('en') ? 'en' : 'es'
  const canonicalBase = 'https://www.joinready.com'
  const canonical = locale === 'en' ? `${canonicalBase}/en/` : `${canonicalBase}/`

  return (
    <>
      <Helmet>
        <html lang={locale} />
        <title>{t('meta.title')}</title>
        <meta name="description" content={t('meta.description')} />
        <link rel="canonical" href={canonical} />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonical} />
        <meta property="og:title" content={t('meta.title')} />
        <meta property="og:description" content={t('meta.description')} />
        <meta property="og:locale" content={locale === 'en' ? 'en_US' : 'es_MX'} />
        <meta property="og:site_name" content="Ready" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={t('meta.title')} />
        <meta name="twitter:description" content={t('meta.description')} />

        {/* hreflang for i18n SEO */}
        <link rel="alternate" hrefLang="es" href={`${canonicalBase}/`} />
        <link rel="alternate" hrefLang="en" href={`${canonicalBase}/en/`} />
        <link rel="alternate" hrefLang="x-default" href={`${canonicalBase}/`} />

        {/* Schema.org Organization */}
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'Ready',
            url: canonicalBase,
            description: t('meta.description'),
            sameAs: [
              'https://www.linkedin.com/company/joinready',
              'https://twitter.com/joinready',
            ],
          })}
        </script>
      </Helmet>

      <Hero />
      <HowItWorks />
      <Profiles />
      <Benefits />
      <SocialProof />
      <FAQ />
      <WizardForm />
      <About />
    </>
  )
}
