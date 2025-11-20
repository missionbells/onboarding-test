"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight, ArrowLeft, CheckCircle2 } from "lucide-react"

interface VerificationStepProps {
  onNext: () => void
  onBack: () => void
}

export function VerificationStep({ onNext, onBack }: VerificationStepProps) {
  const [verificationSent, setVerificationSent] = useState(false)
  const [verified, setVerified] = useState(false)
  const [phoneNumber, setPhoneNumber] = useState("")
  const [phoneVerificationSent, setPhoneVerificationSent] = useState(false)
  const [phoneVerified, setPhoneVerified] = useState(false)

  const handleSendVerification = () => {
    setVerificationSent(true)
    // Simulate verification
    setTimeout(() => setVerified(true), 2000)
  }

  const handleSendPhoneVerification = () => {
    if (!phoneNumber.trim()) return
    setPhoneVerificationSent(true)
    // Simulate verification
    setTimeout(() => setPhoneVerified(true), 2000)
  }

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-3xl font-bold text-foreground">Verify your identity</h2>
        <p className="text-muted-foreground">For your security, we need to verify your identity</p>
      </div>

      <div className="space-y-4">
        <div className="p-6 rounded-xl bg-muted/50 border border-border space-y-4">
          <div className="space-y-2">
            <p className="text-sm font-semibold text-foreground">Email verification</p>
            <p className="text-sm text-muted-foreground">A verification link will be sent to your email address</p>
          </div>

          {!verified ? (
            <Button
              onClick={handleSendVerification}
              disabled={verificationSent}
              variant={verificationSent ? "outline" : "default"}
              className="w-full"
            >
              {verificationSent ? "Check your email" : "Send verification email"}
            </Button>
          ) : (
            <div className="flex items-center gap-2 p-3 rounded-lg bg-primary/10 border border-primary/30">
              <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
              <p className="text-sm font-semibold text-primary">Email verified successfully</p>
            </div>
          )}
        </div>

        <div className="p-6 rounded-xl bg-muted/50 border border-border space-y-4">
          <div className="space-y-2">
            <p className="text-sm font-semibold text-foreground">Phone verification</p>
            <p className="text-sm text-muted-foreground">We&apos;ll send a code to your phone number</p>
          </div>

          {!phoneVerified ? (
            <div className="space-y-3">
              <Input
                type="tel"
                placeholder="+1 (555) 000-0000"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                disabled={phoneVerificationSent}
                className="w-full"
              />
              <Button
                onClick={handleSendPhoneVerification}
                disabled={phoneVerificationSent || !phoneNumber.trim()}
                variant={phoneVerificationSent ? "outline" : "default"}
                className="w-full"
              >
                {phoneVerificationSent ? "Check your phone" : "Send verification code"}
              </Button>
            </div>
          ) : (
            <div className="flex items-center gap-2 p-3 rounded-lg bg-primary/10 border border-primary/30">
              <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
              <p className="text-sm font-semibold text-primary">Phone verified successfully</p>
            </div>
          )}
        </div>
      </div>

      <div className="flex gap-3">
        <Button onClick={onBack} variant="outline" className="flex-1 bg-transparent">
          <ArrowLeft className="mr-2 w-4 h-4" />
          Back
        </Button>
        <Button
          onClick={onNext}
          disabled={!verified}
          className="flex-1 bg-primary hover:bg-primary/90 disabled:opacity-50"
        >
          Continue
          <ArrowRight className="ml-2 w-4 h-4" />
        </Button>
      </div>
    </div>
  )
}
