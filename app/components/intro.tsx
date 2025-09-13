'use client'
import { motion } from 'framer-motion'
import { socials } from '../lib/data'
import { useSectionInView } from '../lib/hooks'
import { RiDownloadLine } from 'react-icons/ri'
import Button from './ui/button'
import Link from 'next/link'

export default function Intro() {
  const { ref } = useSectionInView('Home', 0.75)

  const renderedSocials = socials.map(({ name, icon: Icon, href }) => {
    return (
      <Link
        key={name}
        href={href}
        target="_blank"
        rel="noreferrer"
        className="text-white/50 hover:text-sjsu-gold transition-all"
      >
        <Icon className="md:text-3xl text-2xl" />
      </Link>
    )
  })

  return (
    <section
      ref={ref}
      id="home"
      className="scroll-mt-96 mb-24 flex flex-col items-center justify-center min-h-screen"
    >
      <motion.div
        initial={{ opacity: 0, x: -25 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4, delay: 0.5 }}
        viewport={{ once: true }}
      >
        <h1 className="md:text-2xl text-xl sm:mb-6 mb-3 font-light tracking-wider text-gray-400">
          Welcome! I&apos;m
        </h1>
        <h1 className="md:text-7xl text-5xl font-bold sm:mb-2 mb-1 text-center">
          Sankha Subhra Moitra{' '}
        </h1>
        <h2 className="lg:text-3xl font-medium text-2xl text-white/50 mb-8 text-center">
          Software Engineer
        </h2>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, delay: 0.6 }}
        viewport={{ once: true }}
        className="mb-8"
      >
        <img
          src="/Resume pic.jpeg"
          alt="Profile Picture"
          className="w-80 h-80 rounded-full object-cover mx-auto"
        />
      </motion.div>
      <motion.p
        initial={{ opacity: 0, x: -25 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4, delay: 0.75 }}
        viewport={{ once: true }}
        className="text-gray-400 text-lg mb-8 lg:w-[55%] md:w-[65%] text-center"
      >
        🚀 Dedicated Software Engineer specializing in React.js, Next.js, and full-stack development. Skilled in crafting responsive UIs, building scalable backends, and delivering end-to-end solutions across the software development lifecycle.{' '}
        Passionate about problem-solving, real-time applications, and creating impactful digital experiences.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, x: -25 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4, delay: 1 }}
        viewport={{ once: true }}
        className="flex items-center justify-center lg:gap-2"
      >
        <Button
          href="/Sankha_Subhra_Moitra_Resumenew.pdf"
          className="md:text-lg group"
        >
          Resume
          <RiDownloadLine className="transition-transform group-hover:translate-y-1" />
        </Button>
        <ul className="flex md:gap-4 gap-3 items-center">{renderedSocials}</ul>
      </motion.div>
    </section>
  )
}
