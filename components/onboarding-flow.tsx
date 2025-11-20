"use client"

import { useState } from "react"
import { WelcomeStep } from "./steps/welcome-step"
import { ProfileStep } from "./steps/profile-step"
import { VerificationStep } from "./steps/verification-step"
import { PreferencesStep } from "./steps/preferences-step"
import { CompletionStep } from "./steps/completion-step"

export function OnboardingFlow() {
  const [currentStep, setCurrentStep] = useState(0)
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    country: "",
    investmentGoal: "",
  })

  const steps = [
    { id: "welcome", label: "Welcome" },
    { id: "profile", label: "Profile" },
    { id: "verification", label: "Verify" },
    { id: "preferences", label: "Preferences" },
    { id: "completion", label: "Complete" },
  ]

  const handleNext = (data?: Record<string, any>) => {
    if (data) {
      setUserData({ ...userData, ...data })
    }
    setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1))
  }

  const handleBack = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 0))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted">
      {/* Progress bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-muted">
        <div
          className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-500"
          style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
        />
      </div>

      {/* Step indicator */}
      <div className="pt-8 px-4">
        <div className="max-w-md mx-auto">
          <div className="flex justify-between items-center">
            {steps.map((step, index) => (
              <div key={step.id} className="flex items-center flex-1">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold transition-all ${
                    index <= currentStep ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                  }`}
                >
                  {index + 1}
                </div>
                {index < steps.length - 1 && (
                  <div
                    className={`flex-1 h-0.5 mx-2 transition-all ${index < currentStep ? "bg-primary" : "bg-muted"}`}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">
          {currentStep === 0 && <WelcomeStep onNext={handleNext} />}
          {currentStep === 1 && <ProfileStep onNext={handleNext} onBack={handleBack} initialData={userData} />}
          {currentStep === 2 && <VerificationStep onNext={handleNext} onBack={handleBack} />}
          {currentStep === 3 && <PreferencesStep onNext={handleNext} onBack={handleBack} initialData={userData} />}
          {currentStep === 4 && <CompletionStep userData={userData} />}
        </div>
      </div>
    </div>
  )
}
