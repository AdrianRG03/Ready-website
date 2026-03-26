import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTranslation, Trans } from 'react-i18next'
import { Container } from '@/components/ui'
import { analytics } from '@/lib/analytics'

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.13 },
  },
}

const itemVariants = {
  hidden:   { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
  },
}

const PROFILES = [
  {
    name: 'Jose Montana',
    role: 'Backend Developer Lead',
    flag: 'mx',
    photo: '/images/jose-montana.png',
    company: 'Walmart',
    companyColor: '#0071CE',
    logo: '/images/walmart.webp',
  },
  {
    name: 'Alberto Jaramillo',
    role: 'Ingeniero DevOps Senior',
    flag: 'ar',
    photo: '/images/alberto-jaramillo.png',
    company: 'Microsoft',
    companyColor: '#737373',
    logo: '/images/microsoft.webp',
    logoHeight: '28px',
  },
  {
    name: 'Adriana Sánchez',
    role: 'Scrum Master Senior',
    flag: 'pe',
    photo: '/images/adriana-sanchez.png',
    company: 'AT&T',
    companyColor: '#00A8E0',
    logo: '/images/att.webp',
  },
]

function HeroProfile() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex(i => (i + 1) % PROFILES.length)
    }, 3500)
    return () => clearInterval(timer)
  }, [])

  const profile = PROFILES[index]

  return (
    // Contenedor derecho: replica xl:absolute md:top-[200px] xl:right-44 max-w-lg md:h-[460px]
    <div
      className="absolute hidden md:block"
      style={{ top: '200px', right: '430px', width: '512px', height: '460px', zIndex: 15 }}
    >
      <div className="relative w-full h-full">

        {/* Foto grande: replica absolute xl:left-32 top-0 md:h-[400px] */}
        <AnimatePresence mode="wait">
          <motion.img
            key={`photo-${index}`}
            src={profile.photo}
            alt={profile.name}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            style={{
              position: 'absolute',
              left: '128px',
              top: 0,
              height: '400px',
              width: 'auto',
              objectFit: 'cover',
              objectPosition: 'top center',
            }}
          />
        </AnimatePresence>

        {/* Tarjeta: replica absolute md:top-52 md:-left-28 */}
        <div style={{ position: 'absolute', top: '208px', left: '-62px', zIndex: 20 }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={`card-${index}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
              className="bg-white rounded-lg p-3"
              style={{ width: '290px', boxShadow: '0 4px 20px rgba(0,0,0,0.15)' }}
              aria-live="polite"
            >
              {/* Nombre + Verificado + Bandera */}
              <div className="flex items-center justify-between mb-1">
                <div className="flex items-center gap-1.5 flex-wrap">
                  <span className="font-extrabold" style={{ fontSize: '18px', color: '#0F5C4A' }}>{profile.name}</span>
                  <span className="flex items-center gap-0.5" style={{ fontSize: '16px', color: '#0996EE' }}>
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="#0996EE">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
                    </svg>
                    Verificado
                  </span>
                </div>
                <img
                  src={`https://flagcdn.com/${profile.flag}.svg`}
                  alt={profile.flag}
                  className="rounded-sm shrink-0"
                  style={{ width: '30px', height: '20px', objectFit: 'cover' }}
                />
              </div>

              {/* Rol */}
              <p className="mb-3" style={{ fontSize: '16px', color: '#2B2B2B' }}>{profile.role}</p>

              {/* Trabajó para */}
              <div className="flex items-center gap-2">
                <span style={{ fontSize: '14px', color: '#9ca3af' }}>Trabajó para:</span>
                {profile.logo ? (
                  <img src={profile.logo} alt={profile.company} style={{ height: (profile as any).logoHeight ?? '40px', width: 'auto' }} />
                ) : (
                  <span className="font-bold" style={{ fontSize: '14px', color: profile.companyColor }}>
                    {profile.company}
                  </span>
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </div>
  )
}

export function Hero() {
  const { t } = useTranslation()

  function handleCTAClick() {
    analytics.trackCTAClick('hero-primary-cta')
  }

  return (
    <section
      id="inicio"
      aria-label="Sección hero"
      className="relative flex items-center overflow-hidden"
      style={{
        minHeight: '590px',
        backgroundColor: '#0F5C4A',
        backgroundImage: "url('/images/hero.svg')",
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'right center',
      }}
    >
      <Container className="relative z-10 pt-8 pb-20 lg:pt-32 lg:pb-28">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Headline */}
          <motion.h1
            variants={itemVariants}
            className="font-display font-semibold text-white leading-[1.24] mb-6"
            style={{ fontSize: 'clamp(1.75rem, 2.5vw, 2.3125rem)' }}
          >
            <Trans i18nKey="hero.title" components={{ br: <br /> }} />
          </motion.h1>

          {/* Subtítulo + CTA */}
          <div className="max-w-[550px]">
            {/* Subtitle */}
            <motion.p
              variants={itemVariants}
              className="text-base text-white leading-relaxed mb-10 font-normal"
            >
              {t('hero.subtitle')}
            </motion.p>

            {/* CTA — full width */}
            <motion.div variants={itemVariants}>
              <a
                href="https://wa.me/34624607445"
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleCTAClick}
                className="btn-shimmer w-full flex items-center justify-center rounded-[6px] font-semibold text-[18px] transition-all duration-200 focus-visible:outline-none"
                style={{ background: '#F0FAB4', color: '#0F5C4A', height: '48px', boxShadow: '0 4px 24px rgba(200,250,180,0.38)' }}
              >
                {t('hero.cta')}
              </a>
            </motion.div>
          </div>
        </motion.div>
      </Container>

      {/* Foto grande + tarjeta de perfil */}
      <HeroProfile />
    </section>
  )
}
