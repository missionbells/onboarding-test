"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight, ArrowLeft } from "lucide-react"

interface ProfileStepProps {
  onNext: (data: Record<string, any>) => void
  onBack: () => void
  initialData: Record<string, any>
}

export function ProfileStep({ onNext, onBack, initialData }: ProfileStepProps) {
  const [formData, setFormData] = useState({
    name: initialData.name || "",
    email: initialData.email || "",
    country: initialData.country || "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onNext(formData)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-3xl font-bold text-foreground">Tell us about you</h2>
        <p className="text-muted-foreground">We need a few details to set up your account</p>
      </div>

      <div className="space-y-4">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-semibold text-foreground">
            Full Name
          </label>
          <Input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="John Doe"
            className="h-11"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-semibold text-foreground">
            Email Address
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="john@example.com"
            className="h-11"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="country" className="text-sm font-semibold text-foreground">
            Country
          </label>
          <Input
            id="country"
            name="country"
            value={formData.country}
            onChange={handleChange}
            placeholder="United States"
            className="h-11"
          />
        </div>
      </div>

      <div className="flex gap-3">
        <Button type="button" onClick={onBack} variant="outline" className="flex-1 bg-transparent">
          <ArrowLeft className="mr-2 w-4 h-4" />
          Back
        </Button>
        <Button type="submit" className="flex-1 bg-primary hover:bg-primary/90">
          Continue
          <ArrowRight className="ml-2 w-4 h-4" />
        </Button>
      </div>
    </form>
  )
}
