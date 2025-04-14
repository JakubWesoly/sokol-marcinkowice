'use client'

import React, { useState } from 'react'
import './QuantityCounter.scss'

export default function ScssCounter({ count, setCount, minCount = 1, maxCount = 99 }: { count: number, setCount: Function, minCount?: number, maxCount?: number }) {

  const increment = () => {
    setCount((prevCount: number) => Math.min(prevCount + 1, maxCount))
  }

  const decrement = () => {
    setCount((prevCount: number) => Math.max(prevCount - 1, minCount))
  }

  return (
    <div className="scss-counter">
      <button 
        className="counter-button"
        onClick={decrement}
        disabled={count <= minCount}
        aria-label="Decrease quantity"
      >
        <span>-</span>
      </button>
      <div className="counter-display">
        <span aria-live="polite" aria-label="Item quantity">
          {count}
        </span>
      </div>
      <button 
        className="counter-button"
        onClick={increment}
        disabled={count >= maxCount}
        aria-label="Increase quantity"
      >
        <span>+</span>
      </button>
    </div>
  )
}