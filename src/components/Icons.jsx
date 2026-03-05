import React from 'react'

// Reusable chevron icons. Use stroke=currentColor so CSS can control color.
export function ChevronLeft(props) {
  // Filled left triangle for maximum contrast
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M15 18 L9 12 L15 6 Z" />
    </svg>
  )
}

export function ChevronRight(props) {
  // Filled right triangle for maximum contrast
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M9 18 L15 12 L9 6 Z" />
    </svg>
  )
}

export default ChevronRight
