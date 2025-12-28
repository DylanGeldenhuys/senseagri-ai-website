import type { Metadata } from "next";
import SectionHeader from "@/components/SectionHeader";
import ContactForm from "@/components/ContactForm";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Book a pilot call with SenseAgri AI. Share your farm details and we will schedule a 30-day pilot review."
};

export default function ContactPage() {
  return (
    <div>
      <section className="section-padding bg-hero-glow">
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            eyebrow="Contact"
            title="Book a pilot call."
            subtitle="Tell us about your farm and we will respond within one business day."
          />
        </div>
      </section>

      <section className="section-padding">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="card p-6">
            <h3 className="text-xl font-semibold text-charcoal-900">Start the conversation</h3>
            <p className="mt-2 text-sm text-charcoal-600">
              Fields marked with * are required. We use this to scope a pilot that fits your operation.
            </p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>
          <div className="space-y-6">
            <div className="card p-6">
              <h3 className="text-xl font-semibold text-charcoal-900">Book a call</h3>
              <p className="mt-2 text-sm text-charcoal-600">
                Add your scheduling link below. Replace with your calendar URL.
              </p>
              <a
                className="link-underline mt-4"
                href="https://cal.com/placeholder"
                target="_blank"
                rel="noreferrer"
              >
                Schedule a time (placeholder)
              </a>
            </div>
            <div className="card p-6">
              <h3 className="text-xl font-semibold text-charcoal-900">Contact details</h3>
              <p className="mt-2 text-sm text-charcoal-600">Replace with your current contact details.</p>
              <div className="mt-4 space-y-2 text-sm text-charcoal-600">
                <p>Email: {siteConfig.links.email}</p>
                <p>Phone: {siteConfig.links.phone}</p>
                <p>Address: {siteConfig.links.address}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
