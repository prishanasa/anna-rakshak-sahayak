import { cn } from "@/lib/utils"
import { ReactNode } from "react"

interface AlertCardProps {
  type: 'success' | 'warning' | 'danger'
  title: string
  children: ReactNode
  className?: string
}

export function AlertCard({ type, title, children, className }: AlertCardProps) {
  const alertStyles = {
    success: "bg-gradient-to-r from-success to-success/80 text-success-foreground border-success/20",
    warning: "bg-gradient-to-r from-warning to-warning/80 text-warning-foreground border-warning/20", 
    danger: "bg-gradient-to-r from-destructive to-destructive/80 text-destructive-foreground border-destructive/20"
  }

  const iconStyles = {
    success: "🟢",
    warning: "🟡", 
    danger: "🔴"
  }

  return (
    <div className={cn(
      "rounded-lg border-2 p-4 shadow-md",
      alertStyles[type],
      className
    )}>
      <div className="flex items-center gap-3 mb-2">
        <span className="text-lg">{iconStyles[type]}</span>
        <h3 className="font-semibold text-lg">{title}</h3>
      </div>
      <div className="text-sm opacity-95">
        {children}
      </div>
    </div>
  )
}