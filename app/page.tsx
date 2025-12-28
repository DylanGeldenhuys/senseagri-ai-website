import type { Metadata } from "next";
import Link from "next/link";
import Button from "@/components/Button";
import CTASection from "@/components/CTASection";
import FeatureCard from "@/components/FeatureCard";
import FAQAccordion from "@/components/FAQAccordion";
import SectionHeader from "@/components/SectionHeader";
import TestimonialCard from "@/components/TestimonialCard";
import {
  AlertIcon,
  BoltIcon,
  CameraIcon,
  ChartIcon,
  CloudIcon,
  LeafIcon,
  SignalIcon
} from "@/components/Icons";

export const metadata: Metadata = {
  title: "Home",
  description:
    "SenseAgri AI delivers IoT and AI decision support for poultry farms. Monitor welfare, prevent losses, and act on ROI-focused insights."
};

const faqs = [
  {
    question: "What hardware is installed on site?",
    answer:
      "A LoRaWAN gateway, environmental sensors, optional PoE cameras, and an edge AI box for local processing. Exact kits are tailored per house."
  },
  {
    question: "Does it work with limited connectivity?",
    answer:
      "Yes. Edge processing keeps core alerts running, and data buffers offline until connectivity is restored."
  },
  {
    question: "Who owns the data?",
    answer:
      "Your farm retains ownership of all operational data. We only process it to provide the service."
  },
  {
    question: "How long does installation take?",
    answer:
      "Most pilot installs are completed in 1-2 days, including baseline calibration."
  },
  {
    question: "How is pricing structured?",
    answer:
      "Hardware plus a monthly platform subscription. We start with a 30-day pilot to prove value."
  },
  {
    question: "How do you handle power outages?",
    answer:
      "Critical components include UPS options and edge buffering to protect continuity during outages."
  },
  {
    question: "What about privacy and farm security?",
    answer:
      "Role-based access, encrypted transport, and configurable camera zones protect sensitive areas."
  },
  {
    question: "What support is included?",
    answer:
      "Remote monitoring, alert tuning, and weekly performance reviews during the pilot."
  }
];

export default function HomePage() {
  return (
    <div>
      <section className="section-padding bg-hero-glow">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <p className="badge">Built for South African poultry farms</p>
            <h1 className="mt-6 text-4xl font-semibold sm:text-5xl">
              AI + IoT for measurable poultry farm performance.
            </h1>
            <p className="mt-5 text-base text-charcoal-600 sm:text-lg">
              SenseAgri AI delivers real-time telemetry, welfare monitoring, and decision support that helps farms lower losses, improve feed conversion, and protect profit margins.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/contact">Book a Pilot Call</Button>
              <Button href="/how-it-works" variant="secondary">
                See How It Works
              </Button>
            </div>
            <div className="mt-10 flex flex-wrap items-center gap-6 text-xs text-charcoal-500">
              <span className="flex items-center gap-2">
                <SignalIcon className="h-4 w-4" />
                LoRaWAN + edge AI
              </span>
              <span className="flex items-center gap-2">
                <BoltIcon className="h-4 w-4" />
                Offline resilient alerts
              </span>
              <span className="flex items-center gap-2">
                <ChartIcon className="h-4 w-4" />
                ROI-focused reporting
              </span>
            </div>
          </div>
          <div className="glass-panel p-6">
            <div className="grid gap-4">
              <div className="rounded-2xl border border-charcoal-100 bg-white p-4">
                <p className="text-xs font-semibold text-charcoal-500">Live Barn Snapshot</p>
                <p className="mt-2 text-sm font-semibold text-charcoal-900">
                  House 3 - Broilers
                </p>
                <div className="mt-4 grid gap-3 text-xs text-charcoal-600">
                  <div className="flex items-center justify-between">
                    <span>Temp stability</span>
                    <span className="font-semibold text-forest-700">96%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Mortality risk</span>
                    <span className="font-semibold text-amber-600">Low</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>FCR delta</span>
                    <span className="font-semibold text-forest-700">-4.2%</span>
                  </div>
                </div>
              </div>
              <div className="rounded-2xl border border-forest-100 bg-forest-50 p-4">
                <p className="text-xs font-semibold text-forest-700">Active alert</p>
                <p className="mt-2 text-sm text-charcoal-800">
                  Ventilation drop detected. Recommended action: adjust fan speed within 10 minutes.
                </p>
              </div>
              <div className="rounded-2xl border border-charcoal-100 bg-white p-4">
                <p className="text-xs font-semibold text-charcoal-500">Weekly report</p>
                <p className="mt-2 text-sm text-charcoal-700">
                  2.8% energy savings and 1.6% mortality reduction in the pilot window.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="mx-auto flex max-w-6xl flex-col gap-6">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-charcoal-400">
            Built for South African farms
          </p>
          <div className="grid gap-3 text-sm text-charcoal-500 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-xl border border-charcoal-100 bg-white p-4">Agripak (placeholder)</div>
            <div className="rounded-xl border border-charcoal-100 bg-white p-4">LNX (placeholder)</div>
            <div className="rounded-xl border border-charcoal-100 bg-white p-4">PoultryCo (placeholder)</div>
            <div className="rounded-xl border border-charcoal-100 bg-white p-4">VitaFeed (placeholder)</div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-section-fade">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeader
            eyebrow="The operational reality"
            title="The cost of small issues adds up fast."
            subtitle="Feed price volatility, temperature swings, power outages, and labor pressure all stack up. Without continuous visibility, farms absorb the losses."
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              "Feed cost inefficiency",
              "Mortality spikes",
              "Welfare compliance pressure",
              "Power outages and load shedding",
              "Temperature and humidity swings",
              "Biosecurity blind spots",
              "Labor constraints",
              "Delayed response to anomalies"
            ].map((item) => (
              <div key={item} className="card p-4 text-sm text-charcoal-700">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            eyebrow="Solution pillars"
            title="From sensing to decision support in one platform."
            subtitle="A resilient stack that captures the right signals, processes them on-site, and turns them into actions you can verify."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <FeatureCard
              title="Sensing & Monitoring"
              description="LoRaWAN gateways, environmental sensors, and camera feeds capture continuous barn conditions and welfare indicators."
              icon={<SignalIcon className="h-6 w-6" />}
            />
            <FeatureCard
              title="Edge AI & Alerts"
              description="Jetson-based processing delivers fast anomaly detection and resilient alerts even during connectivity gaps."
              icon={<AlertIcon className="h-6 w-6" />}
            />
            <FeatureCard
              title="Decision Support"
              description="Dashboards, benchmarking, and what-if simulations guide farm teams to the next best action."
              icon={<ChartIcon className="h-6 w-6" />}
            />
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            eyebrow="Measured outcomes"
            title="Operational gains you can quantify."
            subtitle="Our pilots focus on tangible KPIs within 30 days so you can validate ROI before scaling."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {[
              "Reduce mortality",
              "Improve FCR",
              "Early disease signals",
              "Lower energy waste",
              "Compliance-ready reporting"
            ].map((item) => (
              <div key={item} className="card p-4 text-center text-sm font-semibold text-charcoal-800">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            eyebrow="Closed-loop workflow"
            title="Install, calibrate, and verify improvements."
            subtitle="We keep pilots focused and transparent, with shared milestones and farm team involvement."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {[
              "Install",
              "Calibrate",
              "Monitor",
              "Recommend",
              "Verify"
            ].map((step, index) => (
              <div key={step} className="card p-4">
                <p className="text-xs font-semibold text-charcoal-500">Step {index + 1}</p>
                <p className="mt-2 text-sm font-semibold text-charcoal-900">{step}</p>
                <p className="mt-2 text-xs text-charcoal-600">
                  {index === 0 && "Hardware setup and baseline capture."}
                  {index === 1 && "Threshold tuning with your team."}
                  {index === 2 && "Live telemetry and anomaly tracking."}
                  {index === 3 && "Actionable insights and next steps."}
                  {index === 4 && "ROI review and scale plan."}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            eyebrow="Modules"
            title="Focused product modules for poultry teams."
            subtitle="Each module can stand alone or combine for full decision intelligence."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <FeatureCard
              title="Environmental Monitoring"
              description="Temperature, humidity, and optional NH3/CO2 sensors with barn-level trends."
              icon={<LeafIcon className="h-6 w-6" />}
            />
            <FeatureCard
              title="Water & Feed Signals"
              description="Detect flow deviations and consumption drops before they become losses."
              icon={<CloudIcon className="h-6 w-6" />}
            />
            <FeatureCard
              title="Computer Vision"
              description="Camera-based counting, activity scoring, and welfare anomaly detection."
              icon={<CameraIcon className="h-6 w-6" />}
            />
            <FeatureCard
              title="Alerts & Incident Timeline"
              description="Structured incident tracking keeps teams aligned on response and outcomes."
              icon={<AlertIcon className="h-6 w-6" />}
            />
            <FeatureCard
              title="Farm Dashboard"
              description="Multi-house overview with benchmarking and weekly summaries."
              icon={<ChartIcon className="h-6 w-6" />}
            />
            <FeatureCard
              title="Weekly ROI Report"
              description="Action list plus financial impact estimates and compliance-ready exports."
              icon={<BoltIcon className="h-6 w-6" />}
            />
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            eyebrow="Pilot stories"
            title="Early partners are using SenseAgri AI to validate impact."
            subtitle="Join the pilot program to measure improvements before scaling across the farm group."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <TestimonialCard
              quote="We finally have one source of truth for barn conditions and response actions."
              name="Pilot Manager"
              role="Operations"
              company="Large Poultry Group"
            />
            <TestimonialCard
              quote="The alerts helped our team respond to ventilation drops before bird stress escalated."
              name="Farm Owner"
              role="Director"
              company="Broiler Farm"
            />
            <TestimonialCard
              quote="Weekly ROI reports helped us quantify energy and mortality improvements within a month."
              name="Production Lead"
              role="Layer Division"
              company="Regional Agribusiness"
            />
          </div>
          <div className="mt-8 text-sm text-charcoal-600">
            Pilot program available now. <Link className="link-underline" href="/contact">Book a call</Link> to reserve a slot.
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            eyebrow="FAQ"
            title="Answers for farm owners and integrators."
            subtitle="Short, direct responses to the questions we hear most often."
          />
          <div className="mt-10">
            <FAQAccordion items={faqs} />
          </div>
        </div>
      </section>

      <CTASection
        title="Start with a 30-day pilot."
        subtitle="Get a focused deployment, shared KPIs, and a clear ROI review so you can decide on the next phase with confidence."
        primaryHref="/contact"
        primaryLabel="Start a Pilot"
        secondaryHref="/how-it-works"
        secondaryLabel="See the process"
      />
    </div>
  );
}
