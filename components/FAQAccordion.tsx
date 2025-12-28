"use client";

import { useState } from "react";

type FAQItem = {
  question: string;
  answer: string;
};

type FAQAccordionProps = {
  items: FAQItem[];
};

export default function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-4">
      {items.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <div key={item.question} className="card p-5">
            <button
              type="button"
              className="flex w-full items-center justify-between text-left text-sm font-semibold text-charcoal-900"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              aria-expanded={isOpen}
            >
              <span>{item.question}</span>
              <span className="text-charcoal-400">{isOpen ? "-" : "+"}</span>
            </button>
            {isOpen ? (
              <p className="mt-3 text-sm text-charcoal-600">{item.answer}</p>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
