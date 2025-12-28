type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
};

export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "left"
}: SectionHeaderProps) {
  const alignment = align === "center" ? "text-center" : "text-left";

  return (
    <div className={`max-w-3xl ${alignment}`}>
      {eyebrow ? <p className="badge mb-4">{eyebrow}</p> : null}
      <h2 className="text-3xl font-semibold sm:text-4xl">{title}</h2>
      {subtitle ? (
        <p className="mt-4 text-base text-charcoal-600 sm:text-lg">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
