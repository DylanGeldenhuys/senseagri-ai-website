import type { Metadata } from "next";
import SectionHeader from "@/components/SectionHeader";
import { CloudIcon, ShieldIcon, SignalIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "How It Works",
  description:
    "See the SenseAgri AI architecture, pilot timeline, and reliability model for poultry farm decision support."
};

export default function HowItWorksPage() {
  return (
    <div>
      <section className="section-padding bg-hero-glow">
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            eyebrow="How it works"
            title="Architecture built for resilient farm operations."
            subtitle="Edge-first design ensures data capture and alerts continue even when connectivity drops."
          />
        </div>
      </section>

      <section className="section-padding">
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            eyebrow="Architecture"
            title="Edge to cloud, always-on visibility."
            subtitle="A simple three-layer model that keeps farmers in control of response time."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="card p-6">
              <SignalIcon className="h-6 w-6 text-forest-700" />
              <h3 className="mt-4 text-lg font-semibold text-charcoal-900">Edge</h3>
              <p className="mt-2 text-sm text-charcoal-600">
                Sensors and cameras capture local telemetry, with Jetson-based AI processing for immediate alerts.
              </p>
            </div>
            <div className="card p-6">
              <CloudIcon className="h-6 w-6 text-forest-700" />
              <h3 className="mt-4 text-lg font-semibold text-charcoal-900">Cloud</h3>
              <p className="mt-2 text-sm text-charcoal-600">
                Data syncs when connectivity is available, enabling benchmarking and longer-term analytics.
              </p>
            </div>
            <div className="card p-6">
              <ShieldIcon className="h-6 w-6 text-forest-700" />
              <h3 className="mt-4 text-lg font-semibold text-charcoal-900">Dashboard</h3>
              <p className="mt-2 text-sm text-charcoal-600">
                Farm teams get alerts, insights, and weekly ROI summaries in one secure view.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            eyebrow="Pilot timeline"
            title="A four-week pilot plan with clear checkpoints."
            subtitle="Each week builds toward an ROI review and go-forward decision."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {[
              {
                week: "Week 1",
                title: "Install + baseline",
                desc: "Deploy sensors and cameras, confirm connectivity, and capture baseline conditions."
              },
              {
                week: "Week 2",
                title: "Calibration + thresholds",
                desc: "Tune alert thresholds and align with farm operating procedures."
              },
              {
                week: "Week 3",
                title: "Insights + reporting",
                desc: "Deliver weekly report with insights, actions, and measurable impacts."
              },
              {
                week: "Week 4",
                title: "ROI review + next steps",
                desc: "Quantify impact, review outcomes, and propose scaling options."
              }
            ].map((item) => (
              <div key={item.week} className="card p-6">
                <p className="text-xs font-semibold text-charcoal-500">{item.week}</p>
                <h3 className="mt-3 text-lg font-semibold text-charcoal-900">{item.title}</h3>
                <p className="mt-2 text-sm text-charcoal-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            eyebrow="Security + reliability"
            title="Built for tough environments."
            subtitle="We protect uptime and data integrity with layered safeguards."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              "Offline buffering with local storage",
              "Role-based access for farm teams",
              "Encrypted transport and audit trails",
              "UPS options for critical hardware",
              "Incident escalation workflows",
              "Structured data retention"
            ].map((item) => (
              <div key={item} className="card p-5 text-sm text-charcoal-600">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
