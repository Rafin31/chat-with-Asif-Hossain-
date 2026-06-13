"use client"

import { motion } from "framer-motion"
import { HiArrowUp } from "react-icons/hi"

export default function BackToTopButton() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <motion.button
      onClick={scrollToTop}
      whileHover={{ scale: 1.1, y: -2 }}
      whileTap={{ scale: 0.95 }}
      className="w-9 h-9 rounded-lg border border-border bg-card flex items-center justify-center text-text-muted hover:text-accent-yellow hover:border-accent-yellow/40 transition-all duration-200"
      aria-label="Back to top"
    >
      <HiArrowUp className="w-4 h-4" />
    </motion.button>
  )
}
