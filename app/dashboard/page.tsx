import Link from "next/link"

import { Button } from "@/components/ui/button"
import { ArrowLeft, Sparkles } from "lucide-react"

const stats = [
  { label: "Portfolio value", value: "$48,500", trend: "+4.2% this month" },
  { label: "Active goals", value: "3", trend: "Retirement, Home, Education" },
  { label: "Next task", value: "Upload KYC", trend: "Required to start investing" },
  { label: "Cash to invest", value: "$5,000", trend: "Ready to deploy" },
]

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted text-foreground">
      <div className="max-w-4xl mx-auto px-4 py-16 space-y-10">
        <div className="flex flex-col gap-6">
          <div className="inline-flex items-center gap-3 self-start rounded-full border border-border bg-muted/40 px-4 py-2 text-sm font-medium">
            <Sparkles className="h-4 w-4 text-primary" />
            Welcome back
          </div>
          <div className="space-y-3">
            <h1 className="text-4xl font-semibold tracking-tight">Your dashboard</h1>
            <p className="text-muted-foreground max-w-2xl">
              Track your progress, finalize verification, and start investing when you&apos;re ready. This is a simple
              placeholder dashboard that you can wire up to real data later.
            </p>
          </div>
          <Button asChild variant="outline" className="w-fit bg-background">
            <Link href="/" className="flex items-center">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to onboarding
            </Link>
          </Button>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {stats.map((item) => (
            <div key={item.label} className="rounded-2xl border border-border bg-card/80 p-6 shadow-sm">
              <p className="text-sm font-medium text-muted-foreground">{item.label}</p>
              <p className="mt-3 text-3xl font-semibold">{item.value}</p>
              <p className="mt-2 text-sm text-emerald-500">{item.trend}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
