import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Container } from '@/components/ui'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

const PLATFORM_FEATURES = [
  {
    key: 'pagos',
    titleKey: 'plataforma.pagosTitle',
    descKey:  'plataforma.pagosDesc',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor"
        strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
        <line x1="1" y1="10" x2="23" y2="10" />
      </svg>
    ),
  },
  {
    key: 'seguimiento',
    titleKey: 'plataforma.seguimientoTitle',
    descKey:  'plataforma.seguimientoDesc',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor"
        strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
  },
  {
    key: 'compliance',
    titleKey: 'plataforma.complianceTitle',
    descKey:  'plataforma.complianceDesc',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor"
        strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <polyline points="9 12 11 14 15 10" />
      </svg>
    ),
  },
  {
    key: 'presupuesto',
    titleKey: 'plataforma.presupuestoTitle',
    descKey:  'plataforma.presupuestoDesc',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor"
        strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
  },
]

/* ── Dashboard Mockup ───────────────────────────────────── */
const FREELANCERS = [
  { name: 'Ana Torres',    role: 'Frontend Dev',   hours: 38, status: 'Activo',   pct: 95 },
  { name: 'Carlos Ruiz',   role: 'Backend Dev',    hours: 22, status: 'Activo',   pct: 55 },
  { name: 'Sofía Méndez',  role: 'UX Designer',    hours: 40, status: 'Activo',   pct: 100 },
  { name: 'Diego Parra',   role: 'Data Analyst',   hours: 15, status: 'Pausado',  pct: 37 },
]

function DashboardMockup() {
  return (
    <motion.div
      className="w-full max-w-md rounded-2xl overflow-hidden shadow-2xl"
      style={{ border: '1px solid rgba(0,0,0,0.08)' }}
      initial={{ opacity: 0, y: 30, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* ── Top bar ── */}
      <div
        className="flex items-center justify-between px-5 py-3.5"
        style={{ background: '#0F5C4A' }}
      >
        <div className="flex items-center gap-2">
          <span className="text-white font-bold text-sm tracking-wide">ready</span>
          <span
            className="text-[10px] px-2 py-0.5 rounded-full font-bold"
            style={{ background: 'rgba(232,217,91,0.2)', color: '#F0FAB4' }}
          >
            Dashboard
          </span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-full flex items-center justify-center text-[9px] font-bold"
            style={{ background: 'rgba(232,217,91,0.25)', color: '#F0FAB4' }}>
            AR
          </div>
        </div>
      </div>

      {/* ── Métricas ── */}
      <div
        className="grid grid-cols-3 gap-px"
        style={{ background: '#e5e7eb' }}
      >
        {[
          { label: 'Freelancers', value: '12', icon: '👥' },
          { label: 'Horas / sem',  value: '284', icon: '⏱' },
          { label: 'Pagos USD',    value: '$9.4k', icon: '💳' },
        ].map((m) => (
          <div key={m.label} className="bg-white px-4 py-3 text-center">
            <div className="text-lg mb-0.5">{m.icon}</div>
            <div className="font-bold text-gray-900 text-base leading-none">{m.value}</div>
            <div className="text-gray-400 text-[10px] mt-1">{m.label}</div>
          </div>
        ))}
      </div>

      {/* ── Tabla freelancers ── */}
      <div className="bg-white px-5 pt-4 pb-2">
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-bold text-gray-700">Equipo activo</span>
          <span className="text-[10px] text-[#0F5C4A] font-semibold cursor-pointer">Ver todos →</span>
        </div>

        <div className="flex flex-col gap-2.5">
          {FREELANCERS.map((f, i) => (
            <motion.div
              key={f.name}
              className="flex items-center gap-3"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + i * 0.08 }}
            >
              {/* Avatar */}
              <div
                className="w-7 h-7 rounded-full flex items-center justify-center text-[9px] font-bold shrink-0"
                style={{ background: 'linear-gradient(135deg, #0F5C4A, #0F5C4A)', color: '#F0FAB4' }}
              >
                {f.name.split(' ').map(n => n[0]).join('')}
              </div>

              {/* Info */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[11px] font-semibold text-gray-800 truncate">{f.name}</span>
                  <span className="text-[10px] text-gray-400 ml-2 shrink-0">{f.hours}h</span>
                </div>
                {/* Progress bar */}
                <div className="h-1.5 rounded-full bg-gray-100 overflow-hidden">
                  <motion.div
                    className="h-full rounded-full"
                    style={{
                      background: f.status === 'Pausado'
                        ? 'linear-gradient(to right, #d1d5db, #9ca3af)'
                        : 'linear-gradient(to right, #0F5C4A, #F0FAB4)',
                    }}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${f.pct}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 + i * 0.1, ease: 'easeOut' }}
                  />
                </div>
              </div>

              {/* Status badge */}
              <span
                className="text-[9px] font-bold px-2 py-0.5 rounded-full shrink-0"
                style={f.status === 'Activo'
                  ? { background: 'rgba(26,92,69,0.1)', color: '#0F5C4A' }
                  : { background: 'rgba(156,163,175,0.15)', color: '#6b7280' }
                }
              >
                {f.status}
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ── Footer dashboard ── */}
      <div
        className="flex items-center justify-between px-5 py-3 bg-gray-50 border-t border-gray-100"
      >
        <span className="text-[10px] text-gray-400">Actualizado hace 2 min</span>
        <div className="flex items-center gap-1">
          <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
          <span className="text-[10px] text-gray-500">En vivo</span>
        </div>
      </div>
    </motion.div>
  )
}

/* ── Componente principal ───────────────────────────────── */
export function FAQ() {
  const { t } = useTranslation()
  const { ref, isInView } = useScrollAnimation()

  return (
    <section
      id="plataforma"
      aria-labelledby="plataforma-heading"
      className="relative py-28 overflow-hidden bg-white"
    >
      {/* Decoración top */}
      <div
        className="absolute top-0 left-0 right-0 h-1"
        style={{ background: 'linear-gradient(to right, transparent, #0F5C4A, #F0FAB4, #0F5C4A, transparent)' }}
      />

      {/* Blob decorativo verde sutil */}
      <div
        className="absolute -right-40 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full blur-3xl pointer-events-none"
        style={{ background: 'rgba(26,92,69,0.06)' }}
        aria-hidden="true"
      />

      <Container className="relative z-10">
        <div ref={ref}>

          {/* ── Header ── */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 28 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <span
              className="inline-block text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5"
              style={{ background: 'rgba(26,92,69,0.08)', color: '#0F5C4A', border: '1px solid rgba(26,92,69,0.15)' }}
            >
              {t('plataforma.badge')}
            </span>
            <h2
              id="plataforma-heading"
              className="font-display text-3xl sm:text-4xl font-bold text-gray-900 mb-4"
            >
              {t('plataforma.title')}
            </h2>
            <p className="text-gray-500 text-base max-w-xl mx-auto leading-relaxed">
              {t('plataforma.subtitle')}
            </p>
          </motion.div>

          {/* ── Split layout ── */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 xl:gap-20 items-center">

            {/* Izquierda: features */}
            <div className="flex flex-col gap-0">
              {PLATFORM_FEATURES.map((feature, i) => (
                <motion.div
                  key={feature.key}
                  className="group flex items-start gap-4 py-5"
                  style={{
                    borderTop: i === 0 ? '1px solid rgba(0,0,0,0.07)' : undefined,
                    borderBottom: '1px solid rgba(0,0,0,0.07)',
                  }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.15 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                >
                  {/* Ícono */}
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 group-hover:scale-110"
                    style={{
                      background: 'rgba(26,92,69,0.08)',
                      color: '#0F5C4A',
                      border: '1px solid rgba(26,92,69,0.12)',
                    }}
                  >
                    {feature.icon}
                  </div>

                  {/* Texto */}
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 text-sm mb-1">
                      {t(feature.titleKey)}
                    </h3>
                    <p className="text-gray-500 text-xs leading-relaxed">
                      {t(feature.descKey)}
                    </p>
                  </div>

                  {/* Check verde */}
                  <div className="shrink-0 mt-1">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                      stroke="rgba(26,92,69,0.4)" strokeWidth={2.5}
                      strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Derecha: dashboard mockup */}
            <div className="flex justify-center lg:justify-end">
              <DashboardMockup />
            </div>

          </div>
        </div>
      </Container>
    </section>
  )
}
