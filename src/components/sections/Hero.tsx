import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
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
      style={{ minHeight: '680px', background: '#0f2d20' }}
    >
      {/* ── Glows de fondo ── */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {/* Glow verde — esquina inferior izquierda */}
        <div className="absolute -bottom-24 -left-24 w-[500px] h-[500px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(26,92,69,0.45) 0%, transparent 70%)' }} />
        {/* Glow coral — esquina superior derecha */}
        <div className="absolute -top-16 right-0 w-[420px] h-[420px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(255,77,46,0.18) 0%, transparent 65%)' }} />
      </div>

      {/* ── Grid texture ── */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      {/* ── Imagen de fondo derecha ── */}
      <div className="absolute inset-y-0 right-0 w-full pointer-events-none" aria-hidden="true">
        <img
          src="/images/hero-tech.png"
          alt=""
          className="absolute right-0 top-0 h-full w-auto max-w-none object-cover"
          style={{ opacity: 0.42, minWidth: '55%' }}
        />
        {/* Fade izquierdo */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to right, #0f2d20 0%, #0f2d20 28%, rgba(8,15,12,0.88) 42%, rgba(8,15,12,0.55) 58%, rgba(8,15,12,0.12) 78%, transparent 100%)',
          }}
        />
        {/* Fade inferior */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to top, rgba(8,15,12,0.75) 0%, transparent 35%)',
          }}
        />
      </div>

      <Container className="relative z-10 py-20 lg:py-28">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-2xl"
        >
          {/* Badge */}
          <motion.div variants={itemVariants} className="mb-6">
            <span
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wide"
              style={{ background: 'rgba(255,77,46,0.15)', color: '#ff7a5e', border: '1px solid rgba(255,77,46,0.25)' }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#ff4d2e] animate-pulse" />
              {t('hero.badge')}
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={itemVariants}
            className="font-display font-extrabold text-white leading-[1.08] tracking-tight"
            style={{ fontSize: 'clamp(2rem, 4.5vw, 3.25rem)' }}
          >
            {t('hero.title')}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="mt-6 text-base text-white/60 leading-relaxed max-w-md font-normal"
          >
            {t('hero.subtitle')}
          </motion.p>

          {/* CTAs */}
          <motion.div variants={itemVariants} className="mt-10 flex items-center gap-4 flex-wrap">
            <a
              href="https://wa.me/34624607445"
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleCTAClick}
              className="btn-shimmer inline-flex items-center gap-2.5 px-8 py-4 rounded-xl font-bold text-base text-white transition-all duration-200 focus-visible:outline-none group"
              style={{ background: '#ff4d2e', boxShadow: '0 4px 24px rgba(255,77,46,0.38)' }}
            >
              {t('hero.cta')}
              <svg
                width="16" height="16" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round"
                className="transition-transform duration-200 group-hover:translate-x-1"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </motion.div>

          {/* Stats inline */}
          <motion.div
            variants={itemVariants}
            className="mt-14 flex flex-wrap gap-8"
          >
            {[
              { value: '+200', label: t('hero.stat1') },
              { value: '+50',  label: t('hero.stat2') },
              { value: '+12',  label: t('hero.stat3') },
            ].map(stat => (
              <div key={stat.value}>
                <p className="font-display font-bold text-2xl" style={{ color: '#c8f500' }}>{stat.value}</p>
                <p className="text-xs text-white/45 mt-0.5">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </Container>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.6 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2"
        aria-hidden="true"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-6 h-10 rounded-full flex items-start justify-center p-1.5"
          style={{ border: '1.5px solid rgba(255,255,255,0.18)' }}
        >
          <div className="w-1 h-2.5 rounded-full" style={{ background: 'rgba(255,77,46,0.7)' }} />
        </motion.div>
      </motion.div>
    </section>
  )
}
