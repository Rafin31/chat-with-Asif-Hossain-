"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { services } from "@/data/services"
import { HiArrowRight } from "react-icons/hi"

export default function ServicesTeaser() {
  return (
    <section id="services" className="py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-accent-yellow font-mono text-sm tracking-widest uppercase mb-3">
            What I offer
          </p>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-text-primary section-title-underline">
            Services
          </h2>
          <p className="text-text-muted mt-6 text-base max-w-2xl leading-relaxed">
            Web development, AI integration, and workflow automation for businesses
            across Australia — Sydney, Melbourne, Brisbane, Perth, and beyond.
          </p>
        </motion.div>

        {/* Service cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service, index) => (
            <motion.div
              key={service.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <Link
                href={`/services/${service.slug}`}
                className="group flex flex-col h-full bg-card border border-border rounded-2xl p-5 hover:border-accent-yellow/40 transition-colors duration-300"
              >
                <span className="text-2xl mb-3">{service.icon}</span>
                <h3 className="font-heading font-semibold text-text-primary text-base mb-2 group-hover:text-accent-yellow transition-colors duration-300">
                  {service.shortTitle}
                </h3>
                <p className="text-text-muted text-sm leading-relaxed line-clamp-2 flex-grow">
                  {service.tagline}
                </p>
                <span className="inline-flex items-center gap-1 text-accent-cyan text-sm mt-4 group-hover:gap-2 transition-all duration-200">
                  Learn more <HiArrowRight className="w-3.5 h-3.5" />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12"
        >
          <Link
            href="/services"
            className="px-6 py-3 rounded-lg bg-accent-yellow text-background font-semibold text-sm hover:opacity-90 transition-opacity duration-200"
          >
            View All Services
          </Link>
          <Link
            href="/hire-me"
            className="px-6 py-3 rounded-lg border border-border text-text-primary font-semibold text-sm hover:border-accent-cyan/40 hover:text-accent-cyan transition-colors duration-200"
          >
            Get a Free Quote
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
