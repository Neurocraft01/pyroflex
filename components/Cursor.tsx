'use client'
import { useEffect, useRef } from 'react'

export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let ringX = 0, ringY = 0
    let dotX = 0, dotY = 0
    let animId: number

    const onMove = (e: MouseEvent) => {
      dotX = e.clientX
      dotY = e.clientY
    }
    window.addEventListener('mousemove', onMove)

    const animate = () => {
      ringX += (dotX - ringX) * 0.12
      ringY += (dotY - ringY) * 0.12

      if (dotRef.current) {
        dotRef.current.style.left = `${dotX - 6}px`
        dotRef.current.style.top = `${dotY - 6}px`
      }
      if (ringRef.current) {
        ringRef.current.style.left = `${ringX - 18}px`
        ringRef.current.style.top = `${ringY - 18}px`
      }
      animId = requestAnimationFrame(animate)
    }
    animId = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(animId)
    }
  }, [])

  return (
    <>
      <div ref={dotRef} className="cursor" />
      <div ref={ringRef} className="cursor-ring" />
    </>
  )
}
