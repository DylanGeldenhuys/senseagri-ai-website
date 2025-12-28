import Button from "@/components/Button";

export default function CTASection({
  title,
  subtitle,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel
}: {
  title: string;
  subtitle: string;
  primaryHref: string;
  primaryLabel: string;
  secondaryHref?: string;
  secondaryLabel?: string;
}) {
  return (
    <section className="section-padding">
      <div className="glass-panel px-6 py-10 sm:px-10">
        <div className="flex flex-col items-start gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold sm:text-4xl">{title}</h2>
            <p className="mt-3 text-sm text-charcoal-600 sm:text-base">
              {subtitle}
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button href={primaryHref}>{primaryLabel}</Button>
            {secondaryHref && secondaryLabel ? (
              <Button href={secondaryHref} variant="secondary">
                {secondaryLabel}
              </Button>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
