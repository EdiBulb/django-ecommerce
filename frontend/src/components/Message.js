// src/components/Message.jsx
import React from 'react'
export default function Message({ variant = 'info', children }) {
  return (
    <div className={`alert alert-${variant}`} role="alert">
      {children}
    </div>
  )
}
