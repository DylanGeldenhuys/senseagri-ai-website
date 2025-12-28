import { CheckIcon } from "@/components/Icons";

export default function PricingCard({
  title,
  price,
  description,
  features,
  highlight
}: {
  title: string;
  price: string;
  description: string;
  features: string[];
  highlight?: boolean;
}) {
  return (
    <div className={`card flex h-full flex-col p-6 ${highlight ? "ring-2 ring-forest-500" : ""}`}>
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-charcoal-900">{title}</h3>
        {highlight ? <span className="badge">Most chosen</span> : null}
      </div>
      <p className="mt-3 text-2xl font-semibold text-charcoal-900">{price}</p>
      <p className="mt-2 text-sm text-charcoal-600">{description}</p>
      <ul className="mt-5 space-y-2 text-sm text-charcoal-600">
        {features.map((feature) => (
          <li key={feature} className="flex items-start gap-2">
            <CheckIcon className="mt-0.5 h-4 w-4 text-forest-600" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
