export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-background via-background to-muted px-4 py-16">
      <div className="mx-auto flex w-full max-w-3xl flex-col items-center rounded-3xl border border-border bg-background/80 p-12 text-center shadow-2xl shadow-primary/10 backdrop-blur">
        <p className="text-sm font-semibold uppercase tracking-[0.4em] text-primary">
          Welcome back
        </p>
        <h1 className="mt-3 text-4xl font-bold text-foreground">Your dashboard is ready</h1>
        <p className="mt-4 max-w-2xl text-base text-muted-foreground">
          This is a placeholder dashboard screen. Hook it up to your product data or replace it with your actual
          application once onboarding is complete.
        </p>
      </div>
    </main>
  )
}
