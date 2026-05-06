'use client'

import { useEffect, useRef, useState } from 'react'

export default function PageLoader({ visible }: { visible: boolean }) {
  const loaderRef = useRef<HTMLDivElement>(null)
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!visible) return
    let start = 0
    const id = setInterval(() => {
      start += Math.random() * 7 + 2
      if (start >= 100) {
        start = 100
        clearInterval(id)
      }
      setCount(Math.floor(start))
    }, 80)
    return () => clearInterval(id)
  }, [visible])

  useEffect(() => {
    if (!visible && loaderRef.current) {
      loaderRef.current.style.transform = 'translateY(-100%)'
      loaderRef.current.style.transition = 'transform 0.9s cubic-bezier(0.83, 0, 0.17, 1)'
    }
  }, [visible])

  return (
    <div
      ref={loaderRef}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-travertine"
      style={{ willChange: 'transform' }}
    >
      <div className="absolute inset-0 grain animate-grain-shift" />

      <div className="relative flex flex-col items-center gap-10">
        <div className="relative">
          <div
            className="w-24 h-24 rounded-full flex items-center justify-center relative overflow-hidden"
            style={{
              background:
                'linear-gradient(135deg, #C9B8A4 0%, #E8DDD0 25%, #B8A089 50%, #E8DDD0 75%, #C9B8A4 100%)',
              boxShadow:
                'inset 0 1px 2px rgba(255,255,255,0.4), inset 0 -1px 2px rgba(0,0,0,0.2), 0 4px 12px rgba(0,0,0,0.15)',
            }}
          >
            <span
              className="font-display text-3xl font-light tracking-widest"
              style={{
                background: 'linear-gradient(135deg, #B8A089 0%, #E8DDD0 50%, #C9B8A4 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                filter:
                  'drop-shadow(1px 1px 1px rgba(255,255,255,0.4)) drop-shadow(-1px -1px 1px rgba(0,0,0,0.2))',
              }}
            >
              HDC
            </span>
          </div>
          <svg className="absolute inset-0 w-24 h-24" viewBox="0 0 112 112">
            <circle
              cx="56"
              cy="56"
              r="54"
              fill="none"
              stroke="#8B6F47"
              strokeWidth="1"
              strokeDasharray="339.292"
              strokeDashoffset="339.292"
              style={{
                animation: visible
                  ? 'drawStroke 1.5s cubic-bezier(0.16, 1, 0.3, 1) forwards'
                  : 'none',
              }}
            />
          </svg>
        </div>

        <div className="flex flex-col items-center gap-3">
          <div className="font-mono text-[10px] tracking-[0.4em] uppercase text-concrete">
            Hiatt Development Co.
          </div>
          <div className="relative h-px w-[220px] bg-concrete/20">
            <div
              className="absolute inset-y-0 left-0 bg-pivot-black"
              style={{ width: `${count}%`, transition: 'width 80ms linear' }}
            />
          </div>
          <div className="font-mono text-[10px] tracking-[0.3em] text-pivot-black tabular-nums">
            {String(count).padStart(3, '0')} / 100
          </div>
        </div>
      </div>

      <style>{`
        @keyframes drawStroke { to { stroke-dashoffset: 0; } }
      `}</style>
    </div>
  )
}
