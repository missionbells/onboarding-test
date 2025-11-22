import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-background via-background to-muted px-4 py-12">
      <div className="mx-auto flex max-w-3xl flex-col gap-8 rounded-2xl border border-border/60 bg-background/80 p-10 backdrop-blur">
        <div className="space-y-3">
          <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">Dashboard</p>
          <h1 className="text-4xl font-semibold text-foreground">Welcome back</h1>
          <p className="text-base text-muted-foreground">
            This is a placeholder dashboard screen. Hook it up to your product analytics, account overview, or portfolio
            insights once your backend is ready.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-xl border border-border/70 bg-muted/40 p-5">
            <p className="text-sm text-muted-foreground">Net worth</p>
            <p className="text-2xl font-semibold text-foreground">₹2.4M</p>
            <p className="text-xs text-emerald-500">+4.2% this month</p>
          </div>
          <div className="rounded-xl border border-border/70 bg-muted/40 p-5">
            <p className="text-sm text-muted-foreground">Investments</p>
            <p className="text-2xl font-semibold text-foreground">12</p>
            <p className="text-xs text-muted-foreground">Diversified portfolio</p>
          </div>
          <div className="rounded-xl border border-border/70 bg-muted/40 p-5">
            <p className="text-sm text-muted-foreground">Cash balance</p>
            <p className="text-2xl font-semibold text-foreground">₹186k</p>
            <p className="text-xs text-muted-foreground">Ready to deploy</p>
          </div>
        </div>

        <Button
          asChild
          variant="outline"
          className="w-fit border-border/70 bg-background text-muted-foreground hover:text-foreground"
        >
          <Link href="/" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to onboarding
          </Link>
        </Button>
      </div>
    </main>
  )
}
