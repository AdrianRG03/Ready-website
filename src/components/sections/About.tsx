import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Container } from '@/components/ui'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

/* ── Datos ─────────────────────────────────────────────── */
const STATS = [
  { value: '+200', labelKey: 'hero.stat1' },
  { value: '+50',  labelKey: 'hero.stat2' },
  { value: '+12',  labelKey: 'hero.stat3' },
]

const SELLO_ITEMS = [
  {
    titleKey: 'selloReady.calidadTitle',
    descKey:  'selloReady.calidadDesc',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
        strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
  },
  {
    titleKey: 'selloReady.garantiaTitle',
    descKey:  'selloReady.garantiaDesc',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
        strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <polyline points="9 12 11 14 15 10" />
      </svg>
    ),
  },
  {
    titleKey: 'selloReady.flexibilidadTitle',
    descKey:  'selloReady.flexibilidadDesc',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
        strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
  },
  {
    titleKey: 'selloReady.pagoLocalTitle',
    descKey:  'selloReady.pagoLocalDesc',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
        strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
        <line x1="1" y1="10" x2="23" y2="10" />
      </svg>
    ),
  },
]

/* ── Badge SVG ──────────────────────────────────────────── */
function SelloBadge() {
  // Diamond ornament positions (on the outer ring r=128)
  const ornaments = [0, 60, 120, 180, 240, 300].map((deg) => {
    const rad = ((deg - 90) * Math.PI) / 180
    return { x: 140 + 128 * Math.cos(rad), y: 140 + 128 * Math.sin(rad) }
  })

  return (
    <div className="relative flex items-center justify-center">
      {/* Ambient glow */}
      <div
        className="absolute rounded-full blur-3xl"
        style={{
          width: 220, height: 220,
          background: 'radial-gradient(circle, rgba(200,245,0,0.18) 0%, transparent 70%)',
        }}
      />

      <svg width="280" height="280" viewBox="0 0 280 280" fill="none" aria-hidden="true">
        <defs>
          <radialGradient id="badgeInner" cx="50%" cy="35%" r="65%">
            <stop offset="0%" stopColor="#1e6347" />
            <stop offset="100%" stopColor="#091f17" />
          </radialGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
          {/* Arc paths for text */}
          <path id="arcTop"    d="M 32,140 A 108,108 0 0,1 248,140" />
          <path id="arcBottom" d="M 36,140 A 104,104 0 0,0 244,140" />
        </defs>

        {/* ── Outer rotating dashed ring ── */}
        <motion.g
          animate={{ rotate: 360 }}
          transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
          style={{ transformOrigin: '140px 140px' }}
        >
          <circle cx="140" cy="140" r="128"
            stroke="rgba(200,245,0,0.22)" strokeWidth="1.5" strokeDasharray="5 7" />
          {ornaments.map((pt, i) => (
            <rect
              key={i}
              x={pt.x - 3.5} y={pt.y - 3.5} width={7} height={7}
              fill="#c8f500" opacity={0.6}
              transform={`rotate(45 ${pt.x} ${pt.y})`}
            />
          ))}
        </motion.g>

        {/* ── Mid ring ── */}
        <circle cx="140" cy="140" r="108"
          stroke="rgba(200,245,0,0.12)" strokeWidth="1" />

        {/* ── Inner filled circle ── */}
        <circle cx="140" cy="140" r="92"
          fill="url(#badgeInner)"
          stroke="rgba(200,245,0,0.35)" strokeWidth="1.5" />

        {/* ── Arc text top: CERTIFICADO · READY · ── */}
        <text fontSize="9.5" letterSpacing="3.5" fill="rgba(200,245,0,0.65)"
          fontFamily="system-ui, sans-serif" fontWeight="700">
          <textPath href="#arcTop" startOffset="5%">CERTIFICADO · READY ·</textPath>
        </text>

        {/* ── Arc text bottom: LATAM · TECH · TALENT ── */}
        <text fontSize="8.5" letterSpacing="2.5" fill="rgba(255,255,255,0.28)"
          fontFamily="system-ui, sans-serif">
          <textPath href="#arcBottom" startOffset="14%">LATAM · TECH · TALENT</textPath>
        </text>

        {/* ── Central shield icon ── */}
        <g transform="translate(140,140)" filter="url(#glow)">
          {/* Shield shape */}
          <path
            d="M0,-38 L26,-24 L26,8 C26,24 0,36 0,36 C0,36 -26,24 -26,8 L-26,-24 Z"
            fill="rgba(200,245,0,0.10)"
            stroke="#c8f500" strokeWidth="1.6"
          />
          {/* Checkmark */}
          <polyline
            points="-10,1 -2,11 13,-10"
            stroke="#c8f500" strokeWidth="2.8"
            strokeLinecap="round" strokeLinejoin="round"
            fill="none"
          />
        </g>

        {/* ── Pulse ring (animated) ── */}
        <motion.circle
          cx="140" cy="140" r="92"
          stroke="rgba(200,245,0,0.15)"
          strokeWidth="6" fill="none"
          animate={{ r: [92, 108], opacity: [0.2, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeOut' }}
        />
      </svg>
    </div>
  )
}

/* ── Componente principal ───────────────────────────────── */
export function About() {
  const { t } = useTranslation()
  const { ref, isInView } = useScrollAnimation()

  return (
    <section
      id="atributos"
      aria-labelledby="sello-ready-heading"
      className="relative py-28 overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #0a2e22 0%, #0f3d2e 50%, #0a2e22 100%)' }}
    >
      {/* Textura hexagonal */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hex-about" x="0" y="0" width="56" height="48" patternUnits="userSpaceOnUse">
              <polygon points="14,2 42,2 56,24 42,46 14,46 0,24"
                fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hex-about)" />
        </svg>
      </div>

      {/* Glow top-left */}
      <div
        className="absolute -top-24 -left-24 w-96 h-96 rounded-full blur-3xl pointer-events-none"
        style={{ background: 'rgba(200,245,0,0.05)' }}
        aria-hidden="true"
      />

      <Container className="relative z-10">
        <div ref={ref} className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-center">

          {/* ══ COLUMNA IZQUIERDA — texto + features + CTAs ══ */}
          <div>
            {/* Tag */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
            >
              <span
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6"
                style={{ background: 'rgba(255,77,46,0.15)', color: '#ff7a5e', border: '1px solid rgba(255,77,46,0.25)' }}
              >
                <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
                {t('selloReady.title')}
              </span>
            </motion.div>

            {/* Título */}
            <motion.h2
              id="sello-ready-heading"
              className="font-display text-3xl sm:text-4xl font-bold text-white leading-tight mb-4"
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              {t('selloReady.subtitlePre')}
              <span style={{ color: '#ff4d2e' }}> {t('selloReady.subtitleHighlight')} </span>
              {t('selloReady.subtitlePost')}
            </motion.h2>

            {/* Subtítulo */}
            <motion.p
              className="text-white/55 text-sm leading-relaxed mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.18 }}
            >
              {t('selloReady.description')}
            </motion.p>

            {/* Feature rows */}
            <div className="flex flex-col mb-10">
              {SELLO_ITEMS.map((item, i) => (
                <motion.div
                  key={item.titleKey}
                  className="group flex items-start gap-4 py-5"
                  style={{
                    borderTop: i === 0 ? '1px solid rgba(255,255,255,0.07)' : undefined,
                    borderBottom: '1px solid rgba(255,255,255,0.07)',
                  }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.09, ease: [0.22, 1, 0.36, 1] }}
                >
                  {/* Ícono */}
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 mt-0.5 transition-transform duration-300 group-hover:scale-110"
                    style={{
                      background: 'rgba(200,245,0,0.12)',
                      color: '#c8f500',
                      border: '1px solid rgba(200,245,0,0.2)',
                    }}
                  >
                    {item.icon}
                  </div>

                  {/* Texto */}
                  <div>
                    <h3 className="font-bold text-white text-sm mb-1">
                      {t(item.titleKey)}
                    </h3>
                    <p className="text-white/55 text-xs leading-relaxed">
                      {t(item.descKey)}
                    </p>
                  </div>

                  {/* Check amarillo */}
                  <div className="ml-auto shrink-0 mt-1">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                      stroke="rgba(200,245,0,0.45)" strokeWidth={2.5}
                      strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTAs */}
            <motion.div
              className="flex flex-col sm:flex-row gap-3"
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.65 }}
            >
              <a
                href="https://calendly.com/montse-thu/30min?month=2026-03"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-shimmer inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm transition-all duration-200 hover:scale-105 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff4d2e]"
                style={{ background: '#ff4d2e', color: '#fff', boxShadow: '0 4px 20px rgba(255,77,46,0.38)' }}
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                  strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.49 2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.37a16 16 0 0 0 6 6l1.27-.9a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 15.92z" />
                </svg>
                {t('selloReady.ctaCall')}
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm transition-all duration-200 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                style={{ border: '1px solid rgba(255,255,255,0.2)', color: 'white' }}
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                {t('selloReady.ctaWhatsapp')}
              </a>
            </motion.div>
          </div>

          {/* ══ COLUMNA DERECHA — badge + stats ══ */}
          <motion.div
            className="flex flex-col items-center gap-10"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          >
            <SelloBadge />

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 w-full max-w-xs">
              {STATS.map((stat, i) => (
                <motion.div
                  key={stat.value}
                  className="text-center"
                  initial={{ opacity: 0, y: 16 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                >
                  <div
                    className="text-2xl font-display font-bold mb-1"
                    style={{ color: '#c8f500' }}
                  >
                    {stat.value}
                  </div>
                  <div className="text-white/45 text-[10px] leading-tight">
                    {t(stat.labelKey)}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Divider decorativo */}
            <div
              className="w-full max-w-xs h-px"
              style={{ background: 'linear-gradient(to right, transparent, rgba(200,245,0,0.2), transparent)' }}
            />

            {/* Tagline */}
            <p className="text-white/30 text-xs text-center tracking-wide -mt-4">
              {t('selloReady.tagline')}
            </p>
          </motion.div>

        </div>
      </Container>
    </section>
  )
}
