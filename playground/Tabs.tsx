"use client";

import { useId, useState, type ReactNode } from "react";

type Tab = {
  id: string;
  label: string;
  content: ReactNode;
};

type TabsProps = {
  tabs: Tab[];
};

export default function Tabs({ tabs }: TabsProps) {
  const [activeTab, setActiveTab] = useState(0);
  const baseId = useId();

  function handleKeyDown(
    event: React.KeyboardEvent<HTMLButtonElement>,
    index: number
  ) {
    let nextIndex = index;

    if (event.key === "ArrowRight") {
      nextIndex = (index + 1) % tabs.length;
    } else if (event.key === "ArrowLeft") {
      nextIndex = (index - 1 + tabs.length) % tabs.length;
    } else if (event.key === "Home") {
      nextIndex = 0;
    } else if (event.key === "End") {
      nextIndex = tabs.length - 1;
    } else {
      return;
    }

    event.preventDefault();
    setActiveTab(nextIndex);

    const nextTab = document.getElementById(
      `${baseId}-tab-${nextIndex}`
    );

    nextTab?.focus();
  }

  const activePanelId = `${baseId}-panel-${tabs[activeTab].id}`;

  return (
    <div>
      <div
        role="tablist"
        aria-label="Example tabs"
        className="flex gap-2 border-b border-gray-200"
      >
        {tabs.map((tab, index) => {
          const tabId = `${baseId}-tab-${index}`;
          const panelId = `${baseId}-panel-${tab.id}`;

          return (
            <button
              key={tab.id}
              id={tabId}
              type="button"
              role="tab"
              aria-selected={activeTab === index}
              aria-controls={panelId}
              tabIndex={activeTab === index ? 0 : -1}
              onClick={() => setActiveTab(index)}
              onKeyDown={(event) => handleKeyDown(event, index)}
              className={`rounded-t-lg px-4 py-3 text-sm font-bold transition focus:outline-none focus:ring-2 focus:ring-[#297373] ${
                activeTab === index
                  ? "bg-[#0d3b3e] text-white"
                  : "text-gray-500 hover:bg-gray-100"
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      <div
        id={activePanelId}
        role="tabpanel"
        aria-labelledby={`${baseId}-tab-${activeTab}`}
        tabIndex={0}
        className="mt-4 rounded-xl border border-gray-200 bg-white p-5 text-sm leading-6 text-gray-600 focus:outline-none focus:ring-2 focus:ring-[#297373]"
      >
        {tabs[activeTab].content}
      </div>
    </div>
  );
}