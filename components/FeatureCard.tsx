import type { ReactNode } from "react";
import { IconWrapper } from "@/components/Icons";

export default function FeatureCard({
  title,
  description,
  icon
}: {
  title: string;
  description: string;
  icon: ReactNode;
}) {
  return (
    <div className="card group flex h-full flex-col gap-4 p-6">
      <IconWrapper className="icon-animate">{icon}</IconWrapper>
      <div>
        <h3 className="text-lg font-semibold text-charcoal-900">{title}</h3>
        <p className="mt-2 text-sm text-charcoal-600">{description}</p>
      </div>
    </div>
  );
}
