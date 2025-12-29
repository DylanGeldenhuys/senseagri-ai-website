import type { Metadata } from "next";
import SectionHeader from "@/components/SectionHeader";
import PricingCard from "@/components/PricingCard";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Tiered pricing for SenseAgri AI. Start with a 30-day pilot and scale based on verified ROI."
};

export default function PricingPage() {
  return (
    <div>
      <section className="section-padding bg-hero-glow">
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            eyebrow="Pricing"
            title="POC-first pricing with clear upgrade paths."
            subtitle="Hardware plus a monthly platform subscription. Final pricing depends on barn count, connectivity, and module mix."
          />
          <p className="mt-4 text-sm text-charcoal-500">
            Replace pricing ranges with your actual ranges. Keep the “from” structure for transparency.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="mx-auto max-w-6xl grid gap-6 lg:grid-cols-3">
          <PricingCard
            title="Starter Monitoring"
            price="From ZAR XXk-XXk / month"
            description="Sensors + dashboard for continuous visibility."
            features={[
              "Environmental sensors",
              "Farm dashboard",
              "Baseline alerts",
              "Weekly summary report"
            ]}
          />
          <PricingCard
            title="Smart Alerts"
            price="From ZAR XXk-XXk / month"
            description="Edge AI with incident tracking and response workflows."
            features={[
              "Edge AI processing",
              "Incident timeline",
              "Priority alerting",
              "Pilot support"
            ]}
            highlight
          />
          <PricingCard
            title="Full Decision Support"
            price="From ZAR XXk-XXk / month"
            description="AI, benchmarking, and what-if simulations for ROI leadership."
            features={[
              "Benchmarking and forecasting",
              "What-if simulations",
              "ROI tracking",
              "Executive reporting"
            ]}
          />
        </div>

        <div className="mx-auto mt-10 max-w-6xl">
          <div className="card grid gap-6 p-6 lg:grid-cols-[1.3fr_0.7fr]">
            <div>
              <h3 className="text-xl font-semibold text-charcoal-900">Pilot / POC offer</h3>
              <p className="mt-2 text-sm text-charcoal-600">
                Start with a 30-day pilot to validate KPIs and ROI before committing to a longer rollout.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-charcoal-600">
                <li>Hardware + monthly platform</li>
                <li>On-site installation and calibration</li>
                <li>Weekly report and review</li>
              </ul>
            </div>
            <div className="flex flex-col items-start justify-between gap-4">
              <p className="badge">Limited pilot slots</p>
              <Button href="/contact">Book a Pilot Call</Button>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-forest-50">
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            eyebrow="Comparison"
            title="Compare tiers at a glance."
            subtitle="Choose the level of intelligence and automation your team needs today."
          />
          <div className="mt-10 overflow-x-auto">
            <table className="min-w-full border-separate border-spacing-0 overflow-hidden rounded-2xl border border-charcoal-100 text-sm">
              <thead className="bg-forest-50 text-charcoal-700">
                <tr>
                  <th className="px-4 py-3 text-left">Feature</th>
                  <th className="px-4 py-3 text-left">Starter</th>
                  <th className="px-4 py-3 text-left">Smart Alerts</th>
                  <th className="px-4 py-3 text-left">Full Decision</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Environmental sensors", "Yes", "Yes", "Yes"],
                  ["Edge AI alerts", "-", "Yes", "Yes"],
                  ["Computer vision", "Optional", "Optional", "Yes"],
                  ["Benchmarking", "-", "Optional", "Yes"],
                  ["What-if simulations", "-", "-", "Yes"],
                  ["Weekly ROI report", "Yes", "Yes", "Yes"]
                ].map((row) => (
                  <tr key={row[0]} className="border-t border-charcoal-100">
                    {row.map((cell, index) => (
                      <td key={cell} className={`px-4 py-3 ${index === 0 ? "font-semibold" : ""}`}>
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}
