import type React from "react"

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline"
  size?: "default" | "icon" | "large"
  children: React.ReactNode
}

export function Button({ variant = "default", size = "default", className = "", children, ...props }: ButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none"

  const variantClasses = {
    default: "bg-gray-900 text-white hover:bg-gray-800 focus:ring-gray-500",
    
    outline: "border border-gray-300 bg-white text-gray-900 hover:bg-gray-50 focus:ring-gray-500",

  }

  const sizeClasses = {
    default: "h-10 px-4 py-2",
    icon: "h-10 w-10",
    large: "h-14 px-8 py-4 text-lg",
  }

  return (
    <button className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`} {...props}>
      {children}
    </button>
  )
}
