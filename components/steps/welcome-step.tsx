"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

interface WelcomeStepProps {
  onNext: () => void
}

export function WelcomeStep({ onNext }: WelcomeStepProps) {
  return (
    <div className="space-y-8 text-center">
      <div className="space-y-4">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent">
          <span className="text-2xl font-bold text-primary-foreground">₹</span>
        </div>
        <h1 className="text-4xl font-bold tracking-tight text-foreground">Hello finances</h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Start your journey to financial freedom with intelligent investing tools designed for everyone.
        </p>
      </div>

      <div className="space-y-3">
        <div className="flex items-start gap-3">
          <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center mt-1 flex-shrink-0">
            <div className="w-2 h-2 rounded-full bg-primary" />
          </div>
          <p className="text-sm text-foreground text-left">
            <span className="font-semibold">Smart investing</span> tailored to your goals
          </p>
        </div>
        <div className="flex items-start gap-3">
          <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center mt-1 flex-shrink-0">
            <div className="w-2 h-2 rounded-full bg-primary" />
          </div>
          <p className="text-sm text-foreground text-left">
            <span className="font-semibold">Secure platform</span> with industry-leading security
          </p>
        </div>
        <div className="flex items-start gap-3">
          <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center mt-1 flex-shrink-0">
            <div className="w-2 h-2 rounded-full bg-primary" />
          </div>
          <p className="text-sm text-foreground text-left">
            <span className="font-semibold">Zero fees</span> to get started investing
          </p>
        </div>
      </div>

      <Button onClick={onNext} size="lg" className="w-full group bg-primary hover:bg-primary/90">
        Get started
        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
      </Button>

      <p className="text-xs text-muted-foreground">Takes less than 5 minutes</p>
    </div>
  )
}
