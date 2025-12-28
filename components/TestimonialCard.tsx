export default function TestimonialCard({
  quote,
  name,
  role,
  company
}: {
  quote: string;
  name: string;
  role: string;
  company: string;
}) {
  return (
    <div className="card flex h-full flex-col gap-5 p-6">
      <p className="text-sm text-charcoal-700">“{quote}”</p>
      <div>
        <p className="text-sm font-semibold text-charcoal-900">{name}</p>
        <p className="text-xs text-charcoal-500">
          {role} · {company}
        </p>
      </div>
    </div>
  );
}
