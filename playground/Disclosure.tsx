"use client";

import { useId, useState, type ReactNode } from "react";

type DisclosureProps = {
  title: string;
  children: ReactNode;
};

export default function Disclosure({
  title,
  children,
}: DisclosureProps) {
  const [isOpen, setIsOpen] = useState(false);
  const contentId = useId();

  return (
    <div className="overflow-hidden rounded-xl border border-gray-200">
      <h3>
        <button
          type="button"
          aria-expanded={isOpen}
          aria-controls={contentId}
          onClick={() => setIsOpen((current) => !current)}
          className="flex w-full items-center justify-between bg-white px-5 py-4 text-left font-bold text-[#0d3b3e] hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#297373]"
        >
          <span>{title}</span>

          <span aria-hidden="true" className="text-xl">
            {isOpen ? "−" : "+"}
          </span>
        </button>
      </h3>

      {isOpen && (
        <div
          id={contentId}
          className="border-t border-gray-200 bg-white px-5 py-4 text-sm leading-6 text-gray-600"
        >
          {children}
        </div>
      )}
    </div>
  );
}