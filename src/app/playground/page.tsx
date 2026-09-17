"use client";

import { useState } from "react";
import Modal from "../../../playground/Modal";
import Tabs from "../../../playground/Tabs";
import Disclosure from "../../../playground/Disclosure";

export default function PlaygroundPage() {
  const [isOpen, setIsOpen] = useState(false);

  const tabs = [
    {
      id: "overview",
      label: "Overview",
      content: (
        <p>
          The overview tab contains general information about the project.
        </p>
      ),
    },
    {
      id: "details",
      label: "Details",
      content: (
        <p>
          The details tab contains additional information and implementation
          details.
        </p>
      ),
    },
    {
      id: "accessibility",
      label: "Accessibility",
      content: (
        <p>
          This component supports keyboard navigation using Arrow keys, Home,
          and End.
        </p>
      ),
    },
  ];

  return (
    <main className="min-h-screen bg-[#f5f7f7] p-8">
      <div className="mx-auto max-w-3xl space-y-10">
        <section>
          <h1 className="text-3xl font-bold text-[#0d3b3e]">
            Accessibility Playground
          </h1>

          <p className="mt-3 text-gray-500">
            Manual accessible component experiments.
          </p>
        </section>

        <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold text-[#0d3b3e]">
            Modal Dialog
          </h2>

          <button
            type="button"
            onClick={() => setIsOpen(true)}
            className="mt-5 rounded-xl bg-[#0d3b3e] px-6 py-3 font-bold text-white hover:bg-[#297373] focus:outline-none focus:ring-2 focus:ring-[#297373] focus:ring-offset-2"
          >
            Open Modal
          </button>

          <Modal
            isOpen={isOpen}
            title="Example Modal"
            onClose={() => setIsOpen(false)}
          >
            <p>
              This modal is built manually with React and TypeScript following
              accessible dialog behavior.
            </p>
          </Modal>
        </section>

        <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <h2 className="mb-5 text-xl font-bold text-[#0d3b3e]">
            Tabs
          </h2>

          <Tabs tabs={tabs} />
        </section>

        <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <h2 className="mb-5 text-xl font-bold text-[#0d3b3e]">
            Disclosure
          </h2>

          <Disclosure title="What is this component?">
            <p>
              This disclosure component follows accessible button behavior
              using aria-expanded and aria-controls.
            </p>
          </Disclosure>
        </section>
      </div>
    </main>
  );
}