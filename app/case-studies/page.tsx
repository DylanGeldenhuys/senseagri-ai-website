import type { Metadata } from "next";
import SectionHeader from "@/components/SectionHeader";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Pilot case studies for SenseAgri AI with placeholders for farm type, deployment, and measurable outcomes."
};

const caseStudies = [
  {
    location: "Western Cape",
    farmType: "Broiler farm",
    problem: "Heat stress and inconsistent ventilation across houses.",
    deployment: "LoRaWAN sensors + edge AI alerts across 4 houses.",
    outcome: "3.1% mortality reduction and improved ventilation response time."
  },
  {
    location: "KwaZulu-Natal",
    farmType: "Layer operation",
    problem: "Feed conversion drift and delayed anomaly response.",
    deployment: "Water + feed monitoring with weekly ROI reports.",
    outcome: "2.4% FCR improvement and fewer daily interventions."
  },
  {
    location: "Gauteng",
    farmType: "Integrated poultry group",
    problem: "Limited visibility across multiple sites.",
    deployment: "Dashboard rollout with benchmarking and alert tuning.",
    outcome: "Standardized response playbooks across 6 houses."
  }
];

export default function CaseStudiesPage() {
  return (
    <div>
      <section className="section-padding bg-hero-glow">
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            eyebrow="Case studies"
            title="Pilot outcomes from South African farms."
            subtitle="These examples show the types of challenges we solve and the metrics we track. Replace with real data as pilots complete."
          />
        </div>
      </section>

      <section className="section-padding">
        <div className="mx-auto max-w-6xl grid gap-6 md:grid-cols-3">
          {caseStudies.map((item) => (
            <div key={item.location} className="card flex h-full flex-col p-6">
              <p className="text-xs font-semibold text-charcoal-500">{item.location}</p>
              <h3 className="mt-3 text-lg font-semibold text-charcoal-900">{item.farmType}</h3>
              <div className="mt-4 space-y-3 text-sm text-charcoal-600">
                <p>
                  <span className="font-semibold text-charcoal-800">Problem:</span> {item.problem}
                </p>
                <p>
                  <span className="font-semibold text-charcoal-800">Deployment:</span> {item.deployment}
                </p>
                <p>
                  <span className="font-semibold text-charcoal-800">Outcome:</span> {item.outcome}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section-padding bg-forest-50">
        <div className="mx-auto max-w-6xl card p-8 md:flex md:items-center md:justify-between">
          <div>
            <h3 className="text-2xl font-semibold text-charcoal-900">Interested in becoming a pilot site?</h3>
            <p className="mt-3 text-sm text-charcoal-600">
              We onboard a small number of farms each quarter to keep pilots high-touch and measurable.
            </p>
          </div>
          <Button href="/contact" className="mt-6 md:mt-0">
            Register pilot interest
          </Button>
        </div>
      </section>
    </div>
  );
}
