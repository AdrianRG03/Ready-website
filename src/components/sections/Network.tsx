import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Container } from '@/components/ui'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

/* ── Freelancers — posición como % de la imagen real ─────── */
const FREELANCERS = [
  { name: 'María González',   role: 'UX Designer',        country: 'México',    flagCode: 'mx', initials: 'MG', xPct: 26, yPct: 35, side: 'right' },
  { name: 'Carlos Rodríguez', role: 'Backend Developer',  country: 'Colombia',  flagCode: 'co', initials: 'CR', xPct: 47, yPct: 46, side: 'right' },
  { name: 'Valentina Ruiz',   role: 'AI / ML Engineer',   country: 'Brasil',    flagCode: 'br', initials: 'VR', xPct: 66, yPct: 60, side: 'left'  },
  { name: 'Sofía Pérez',      role: 'DevOps Engineer',    country: 'Perú',      flagCode: 'pe', initials: 'SP', xPct: 44, yPct: 56, side: 'right' },
  { name: 'Andrés Morales',   role: 'Product Manager',    country: 'Ecuador',   flagCode: 'ec', initials: 'AM', xPct: 42, yPct: 50, side: 'right' },
  { name: 'Ana Martínez',     role: 'Data Analyst',       country: 'Chile',     flagCode: 'cl', initials: 'AM', xPct: 46, yPct: 76, side: 'right' },
  { name: 'Luis Fernández',   role: 'Frontend Developer', country: 'Argentina', flagCode: 'ar', initials: 'LF', xPct: 50, yPct: 83, side: 'right' },
  { name: 'Diego Torres',     role: 'Full Stack Dev',     country: 'Uruguay',   flagCode: 'uy', initials: 'DT', xPct: 57, yPct: 79, side: 'left'  },
]

/* ── Video Player ───────────────────────────────────────── */
function VideoPlayer() {
  const [playing, setPlaying] = useState(false)
  const VIDEO_ID = '_xH3Z2x1rDg'
  return (
    <motion.div
      className="relative w-full rounded-2xl overflow-hidden"
      style={{ aspectRatio: '16/9', boxShadow: '0 20px 60px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.08)' }}
      initial={{ opacity: 0, x: -24 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      {!playing ? (
        <div className="relative w-full h-full cursor-pointer group" onClick={() => setPlaying(true)}>
          <img
            src={`https://img.youtube.com/vi/${VIDEO_ID}/maxresdefault.jpg`}
            alt="Video Ready"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 transition-opacity duration-300 group-hover:opacity-50"
            style={{ background: 'rgba(10,46,34,0.5)' }} />
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              className="flex items-center justify-center rounded-full"
              style={{ width: 56, height: 56, background: '#ff4d2e', boxShadow: '0 6px 24px rgba(255,77,46,0.5)' }}
              whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                <polygon points="5,3 19,12 5,21" />
              </svg>
            </motion.div>
          </div>
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2">
            <span className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full"
              style={{ background: 'rgba(0,0,0,0.55)', color: 'rgba(255,255,255,0.8)', backdropFilter: 'blur(8px)' }}>
              Ver video
            </span>
          </div>
        </div>
      ) : (
        <iframe
          className="w-full h-full"
          src={`https://www.youtube.com/embed/${VIDEO_ID}?start=5&autoplay=1&rel=0&modestbranding=1`}
          title="Ready — Freelancers TI certificados en Latam"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      )}
    </motion.div>
  )
}

/* ── Mapa real + dots interactivos ──────────────────────── */
function LatamMap({ active }: { active: typeof FREELANCERS[0] }) {
  return (
    // overflow: visible → tooltips no se recortan
    <div className="relative w-full" style={{ aspectRatio: '975/998' }}>

      {/* Imagen con fade radial en los bordes → desaparece el "cuadro" */}
      <img
        src="/images/latam-map.png"
        alt="Mapa de Latinoamérica"
        className="absolute inset-0 w-full h-full object-cover"
        draggable={false}
        style={{
          WebkitMaskImage: 'radial-gradient(ellipse 82% 82% at 50% 50%, black 45%, transparent 100%)',
          maskImage:        'radial-gradient(ellipse 82% 82% at 50% 50%, black 45%, transparent 100%)',
        }}
      />

      {/* ── Dots de países ── */}
      {FREELANCERS.map((f) => {
        const isActive = active.country === f.country
        return (
          <div
            key={f.country}
            className="absolute"
            style={{
              left: `${f.xPct}%`,
              top: `${f.yPct}%`,
              transform: 'translate(-50%, -50%)',
            }}
          >
            {/* Anillo de pulso — solo activo */}
            {isActive && (
              <>
                <motion.div
                  className="absolute rounded-full"
                  style={{
                    width: 28, height: 28,
                    top: '50%', left: '50%',
                    transform: 'translate(-50%, -50%)',
                    border: '1.5px solid rgba(200,245,0,0.5)',
                  }}
                  animate={{ scale: [1, 2.2], opacity: [0.7, 0] }}
                  transition={{ duration: 1.6, repeat: Infinity, ease: 'easeOut' }}
                />
                <motion.div
                  className="absolute rounded-full"
                  style={{
                    width: 20, height: 20,
                    top: '50%', left: '50%',
                    transform: 'translate(-50%, -50%)',
                    border: '1.5px solid rgba(200,245,0,0.35)',
                  }}
                  animate={{ scale: [1, 1.8], opacity: [0.5, 0] }}
                  transition={{ duration: 1.6, repeat: Infinity, ease: 'easeOut', delay: 0.3 }}
                />
              </>
            )}

            {/* Dot principal */}
            <motion.div
              className="rounded-full relative z-10"
              animate={{
                width: isActive ? 12 : 7,
                height: isActive ? 12 : 7,
                background: isActive ? '#c8f500' : 'rgba(200,245,0,0.45)',
                boxShadow: isActive ? '0 0 12px rgba(200,245,0,0.8)' : 'none',
              }}
              transition={{ duration: 0.35 }}
              style={{ transform: 'translate(-50%, -50%)', position: 'absolute', top: '50%', left: '50%' }}
            />
            {/* Centro oscuro */}
            <motion.div
              className="absolute rounded-full z-20"
              animate={{
                width: isActive ? 4 : 0,
                height: isActive ? 4 : 0,
                opacity: isActive ? 1 : 0,
              }}
              transition={{ duration: 0.35 }}
              style={{
                top: '50%', left: '50%',
                transform: 'translate(-50%, -50%)',
                background: '#0f3d2e',
              }}
            />
          </div>
        )
      })}

      {/* ── Tooltip flotante junto al dot activo ── */}
      <AnimatePresence mode="wait">
        <motion.div
          key={active.country}
          className="absolute z-30 pointer-events-none"
          style={{
            ...(active.side === 'right'
              ? { left: `calc(${active.xPct}% + 16px)` }
              : { right: `calc(${100 - active.xPct}% + 16px)` }),
            top: `${active.yPct}%`,
            transform: 'translateY(-50%)',
          }}
          initial={{ opacity: 0, scale: 0.82, x: active.side === 'right' ? -10 : 10 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          exit={{ opacity: 0, scale: 0.82, x: active.side === 'right' ? -10 : 10 }}
          transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Línea conectora */}
          <div
            className="absolute top-1/2 -translate-y-px"
            style={{
              [active.side === 'right' ? 'left' : 'right']: -12,
              width: 12, height: 1,
              background: 'linear-gradient(to right, transparent, rgba(200,245,0,0.5))',
            }}
          />

          {/* Card */}
          <div
            className="flex items-center gap-3 px-3 py-2.5 rounded-xl whitespace-nowrap"
            style={{
              background: 'linear-gradient(135deg, rgba(26,80,58,0.97), rgba(12,48,34,0.97))',
              border: '1px solid rgba(200,245,0,0.28)',
              boxShadow: '0 8px 28px rgba(0,0,0,0.55)',
              backdropFilter: 'blur(14px)',
            }}
          >
            {/* Avatar */}
            <div
              className="w-8 h-8 rounded-full flex items-center justify-center font-bold text-[10px] shrink-0"
              style={{
                background: 'linear-gradient(135deg, #2a7a5a, #0f3d2e)',
                color: '#c8f500',
                border: '1.5px solid rgba(200,245,0,0.35)',
              }}
            >
              {active.initials}
            </div>

            {/* Info */}
            <div>
              <div className="flex items-center gap-1.5 mb-0.5">
                <span className="font-bold text-white text-xs leading-none">{active.name}</span>
                <img
                  src={`https://flagcdn.com/w20/${active.flagCode}.png`}
                  alt={active.country}
                  className="w-5 h-auto rounded-sm"
                />
              </div>
              <p className="text-white/50 text-[10px] leading-none mb-0.5">{active.role}</p>
              <p className="text-[10px] font-semibold leading-none" style={{ color: 'rgba(200,245,0,0.7)' }}>
                {active.country}
              </p>
            </div>

            {/* Badge Cert */}
            <div
              className="flex items-center gap-1 px-2 py-0.5 rounded-full text-[9px] font-bold ml-1 shrink-0"
              style={{
                background: 'rgba(200,245,0,0.12)',
                color: '#c8f500',
                border: '1px solid rgba(200,245,0,0.22)',
              }}
            >
              <svg width="7" height="7" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                strokeWidth={3} strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              Cert.
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

/* ── Componente principal ───────────────────────────────── */
export function Network() {
  const { t } = useTranslation()
  const { ref, isInView } = useScrollAnimation()
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => setCurrent(prev => (prev + 1) % FREELANCERS.length), 3200)
    return () => clearInterval(timer)
  }, [])

  return (
    <section
      id="network"
      aria-labelledby="network-heading"
      className="relative py-28 overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #0a2e22 0%, #0f3d2e 50%, #0a2e22 100%)' }}
    >
      {/* Textura hexagonal */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hex-network" x="0" y="0" width="56" height="48" patternUnits="userSpaceOnUse">
              <polygon points="14,2 42,2 56,24 42,46 14,46 0,24"
                fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hex-network)" />
        </svg>
      </div>

      <Container className="relative z-10">
        <div ref={ref}>

          {/* Header */}
          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: 28 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <span
              className="inline-block text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5"
              style={{ background: 'rgba(255,77,46,0.15)', color: '#ff7a5e', border: '1px solid rgba(255,77,46,0.25)' }}
            >
              {t('network.badge')}
            </span>
            <h2 id="network-heading" className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">
              {t('network.title')}
            </h2>
            <p className="text-white/55 text-base max-w-xl mx-auto leading-relaxed">
              {t('network.subtitle')}
            </p>
          </motion.div>

          {/* Split layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* Izquierda: Video */}
            <div className="w-full max-w-lg mx-auto lg:mx-0">
              <VideoPlayer />
            </div>

            {/* Derecha: Mapa */}
            <motion.div
              className="w-full max-w-sm mx-auto"
              initial={{ opacity: 0, x: 24 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <LatamMap active={FREELANCERS[current]} />

            </motion.div>
          </div>

          {/* Tagline */}
          <motion.p
            className="text-center text-white/30 text-sm mt-14"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            {t('network.tagline')}
          </motion.p>
        </div>
      </Container>
    </section>
  )
}
