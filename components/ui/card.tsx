import type React from "react"

interface CardProps {
  children: React.ReactNode
  className?: string
}

export function Card({ children, className = "" }: CardProps) {
  return <div className={`bg-white border border-gray-200 rounded-lg shadow-sm ${className}`}>{children}</div>
}

export function CardHeader({ children, className = "" }: CardProps) {
  return <div className={`px-6 py-4 border-b border-gray-200 ${className}`}>{children}</div>
}

export function CardTitle({ children, className = "" }: CardProps) {
  return <h3 className={`text-lg font-semibold text-black ${className}`}>{children}</h3>
}

export function CardContent({ children, className = "" }: CardProps) {
  return <div className={`px-6 py-4 text-black ${className}`}>{children}</div>
}
