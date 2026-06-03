"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FiChevronDown } from "react-icons/fi"
import type { ServiceFAQ } from "@/data/services"

export default function ServicePageClient({ faqs }: { faqs: ServiceFAQ[] }) {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <div className="flex flex-col gap-2">
      {faqs.map((faq, i) => (
        <div key={i} className="bg-card border border-border rounded-xl overflow-hidden">
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
          >
            <h3 className="font-semibold text-text-primary text-sm leading-snug">{faq.q}</h3>
            <motion.div
              animate={{ rotate: open === i ? 180 : 0 }}
              transition={{ duration: 0.2 }}
              className="shrink-0"
            >
              <FiChevronDown className="w-4 h-4 text-text-muted" />
            </motion.div>
          </button>
          <AnimatePresence initial={false}>
            {open === i && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.25, ease: "easeInOut" }}
              >
                <div className="px-5 pb-5 text-text-muted text-sm leading-relaxed border-t border-border pt-4">
                  {faq.a}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  )
}
