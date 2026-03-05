import React from 'react'
import { motion } from 'framer-motion'

const ToggleButton = ({ open, setOpen }) => {
  return (
    <button
      className={`nav-toggle ${open ? 'open' : ''}`}
      aria-controls="primary-navigation"
      aria-expanded={open}
      onClick={() => setOpen((prev) => !prev)}
      aria-label={open ? 'Close menu' : 'Open menu'}
    >
      <svg width="26" height="26" viewBox="0 0 23 23" aria-hidden>
        <motion.path
          strokeWidth="3"
          stroke="currentColor"
          strokeLinecap="round"
          variants={{
            closed: { d: 'M 2 2.5 L 20 2.5', transition: { duration: 0.35 } },
            open: { d: 'M 3 16.5 L 17 2.5', transition: { duration: 0.35 } },
          }}
          animate={open ? 'open' : 'closed'}
        />
        <motion.path
          strokeWidth="3"
          stroke="currentColor"
          strokeLinecap="round"
          d="M 2 9.423 L 20 9.423"
          variants={{
            closed: { opacity: 1, transition: { duration: 0.2 } },
            open: { opacity: 0, transition: { duration: 0.2 } },
          }}
          animate={open ? 'open' : 'closed'}
        />
        <motion.path
          strokeWidth="3"
          stroke="currentColor"
          strokeLinecap="round"
          variants={{
            closed: { d: 'M 2 16.346 L 20 16.346', transition: { duration: 0.35 } },
            open: { d: 'M 3 2.5 L 17 16.346', transition: { duration: 0.35 } },
          }}
          animate={open ? 'open' : 'closed'}
        />
      </svg>
    </button>
  )
}

export default ToggleButton
