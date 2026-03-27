import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

const FREELANCERS = [
  { name: 'Math Smith',      role: 'Sr DevOps Engineer',     photo: '/images/math.png',            flagCode: 'us', posClass: 'absolute 2xl:right-40 lg:right-10 top-56' },
  { name: 'Carla Molina',    role: 'Sr Frontend Developer',  photo: '/images/carlamolina.png',    flagCode: 'co', posClass: 'absolute 2xl:right-80 lg:right-20 top-10' },
  { name: 'Jorge Gutierrez', role: 'Sr Full-Stack Developer', photo: '/images/jorgegutierrez.png', flagCode: 'pe', posClass: 'absolute 2xl:right-52 lg:right-14 top-80' },
]

function FreelancerCard({ freelancer, cardKey }: { freelancer: typeof FREELANCERS[0]; cardKey: string }) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={cardKey}
        className="flex items-center gap-3 border bg-white p-4 rounded-lg"
        style={{ width: '244px' }}
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -6 }}
        transition={{ duration: 0.35 }}
      >
        <img
          src={freelancer.photo}
          alt={freelancer.name}
          style={{ width: '44px', height: '44px', borderRadius: '50%', objectFit: 'cover', objectPosition: 'top', flexShrink: 0 }}
        />
        <div className="flex-1 min-w-0">
          <div className="flex justify-between items-center gap-1">
            <h5
              className="font-sans font-extrabold truncate"
              style={{ fontSize: '14px', color: '#2B2B2B' }}
            >
              {freelancer.name}
            </h5>
            <div
              className="overflow-hidden flex justify-center items-center rounded-full shrink-0"
              style={{ width: '24px', height: '24px' }}
            >
              <img
                src={`https://flagcdn.com/w40/${freelancer.flagCode}.png`}
                alt="Country"
                style={{ width: '25px', height: '25px', objectFit: 'cover' }}
              />
            </div>
          </div>
          <p style={{ fontSize: '13px', color: '#2B2B2B' }}>{freelancer.role}</p>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}

export function Network() {
  const { t } = useTranslation()
  const { ref, isInView } = useScrollAnimation()
  const [current, setCurrent] = useState(0)

  // Cycle through freelancers every 3s
  useEffect(() => {
    const timer = setInterval(() => setCurrent(prev => (prev + 1) % FREELANCERS.length), 3000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section
      id="network"
      aria-labelledby="network-heading"
      className="relative py-10"
      style={{
        background: '#EAEAEA',
        backgroundImage: 'url(/images/bg-company-pre-footer.svg)',
        backgroundRepeat: 'repeat',
        backgroundSize: 'contain',
        backgroundPosition: 'center',
      }}
    >
      {/* Desktop cards — each at its own map position, only active one shown */}
      {FREELANCERS.map((f, i) => (
        <div key={f.name} className={`hidden xl:block ${f.posClass} transition-opacity duration-500 ${i === current ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
          <FreelancerCard freelancer={f} cardKey={f.name} />
        </div>
      ))}

      <div ref={ref} className="px-3 md:px-10 2xl:px-40">

        {/* Heading */}
        <motion.h2
          id="network-heading"
          className="font-display font-extrabold md:text-start text-center xl:pt-2"
          style={{ fontSize: '30px', color: '#0F5C4A' }}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          {t('network.title')}<br />{t('network.titleLine2')}
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          className="pt-4 md:text-start text-center"
          style={{ fontSize: '16px', color: '#2B2B2B', maxWidth: '560px' }}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          {t('network.subtitle')}
        </motion.p>

        {/* Mobile — solo la card activa con animación */}
        <motion.div
          className="flex xl:hidden justify-center mt-5"
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <AnimatePresence mode="wait">
            <FreelancerCard
              key={FREELANCERS[current].name}
              freelancer={FREELANCERS[current]}
              cardKey={FREELANCERS[current].name}
            />
          </AnimatePresence>
        </motion.div>

        {/* Embedded video */}
        <motion.iframe
          className="rounded-2xl mt-6 md:w-[520px] md:h-[275px] w-full h-52"
          src="https://www.youtube.com/embed/_xH3Z2x1rDg?si=nzJEhWaECER6zu8E"
          title="Ready — Freelancers TI certificados en Latam"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
        />

      </div>
    </section>
  )
}
