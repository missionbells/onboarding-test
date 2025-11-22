import { Button } from "@/components/ui/button"
import { CheckCircle2, ArrowRight } from "lucide-react"

interface CompletionStepProps {
  userData: Record<string, any>
}

export function CompletionStep({ userData }: CompletionStepProps) {
  return (
    <div className="space-y-8 text-center">
        <div className="space-y-4">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent animate-pulse">
          <CheckCircle2 className="w-8 h-8 text-primary-foreground" />
        </div>
        <div className="space-y-2">
            <h1 className="text-4xl font-bold text-foreground">Thank you</h1>
          <p className="text-lg text-muted-foreground">Welcome to your investment journey, {userData.name}</p>
        </div>
      </div>

      <div className="space-y-3 p-6 rounded-xl bg-muted/50 border border-border text-left">
        <h3 className="font-semibold text-foreground text-center mb-4">What&apos;s next?</h3>
        <div className="space-y-2">
          <p className="text-sm text-foreground flex items-start gap-2">
            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-primary text-xs text-primary-foreground flex-shrink-0 mt-0.5">
              1
            </span>
            <span>Complete your KYC verification</span>
          </p>
          <p className="text-sm text-foreground flex items-start gap-2">
            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-primary text-xs text-primary-foreground flex-shrink-0 mt-0.5">
              2
            </span>
            <span>Fund your account</span>
          </p>
          <p className="text-sm text-foreground flex items-start gap-2">
            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-primary text-xs text-primary-foreground flex-shrink-0 mt-0.5">
              3
            </span>
            <span>Start investing in your goals</span>
          </p>
        </div>
      </div>

      <Button size="lg" className="w-full bg-primary hover:bg-primary/90 group">
        Go to dashboard
        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
      </Button>

      <p className="text-xs text-muted-foreground">Your account is secure and ready to use</p>
    </div>
  )
}
