"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, ArrowLeft } from "lucide-react"

interface PreferencesStepProps {
  onNext: (data: Record<string, any>) => void
  onBack: () => void
  initialData: Record<string, any>
}

export function PreferencesStep({ onNext, onBack, initialData }: PreferencesStepProps) {
  const [investmentGoal, setInvestmentGoal] = useState(initialData.investmentGoal || "")

  const goals = [
    {
      id: "wealth",
      title: "Build wealth",
      description: "Long-term growth and investments",
    },
    {
      id: "income",
      title: "Generate income",
      description: "Regular income and dividends",
    },
    {
      id: "save",
      title: "Save for goal",
      description: "Save for a specific purchase",
    },
    {
      id: "retire",
      title: "Retire early",
      description: "Plan your retirement",
    },
  ]

  const handleSubmit = () => {
    onNext({ investmentGoal })
  }

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-3xl font-bold text-foreground">What&apos;s your main goal?</h2>
        <p className="text-muted-foreground">We&apos;ll customize your experience based on your objectives</p>
      </div>

      <div className="grid grid-cols-1 gap-3">
        {goals.map((goal) => (
          <button
            key={goal.id}
            onClick={() => setInvestmentGoal(goal.id)}
            className={`p-4 rounded-xl border-2 text-left transition-all ${
              investmentGoal === goal.id
                ? "border-primary bg-primary/5"
                : "border-border hover:border-muted-foreground/50 hover:bg-muted/30"
            }`}
          >
            <p className="font-semibold text-foreground">{goal.title}</p>
            <p className="text-sm text-muted-foreground">{goal.description}</p>
          </button>
        ))}
      </div>

      <div className="flex gap-3">
        <Button onClick={onBack} variant="outline" className="flex-1 bg-transparent">
          <ArrowLeft className="mr-2 w-4 h-4" />
          Back
        </Button>
        <Button
          onClick={handleSubmit}
          disabled={!investmentGoal}
          className="flex-1 bg-primary hover:bg-primary/90 disabled:opacity-50"
        >
          Continue
          <ArrowRight className="ml-2 w-4 h-4" />
        </Button>
      </div>
    </div>
  )
}
