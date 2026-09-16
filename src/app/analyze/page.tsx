"use client";

import { useState } from "react";

export default function AnalyzePage() {
  const [code, setCode] = useState("");
  const [language, setLanguage] = useState("TypeScript");

  return (
    <div className="space-y-8">
      {/* Header */}
      <section>
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#297373]">
          <span className="h-2 w-2 rounded-full bg-[#297373]" />
          Analysis Workspace
        </div>

        <h1 className="mt-3 text-3xl font-bold tracking-tight text-[#0d3b3e] sm:text-4xl">
          Analyze your code
        </h1>

        <p className="mt-3 max-w-2xl text-sm leading-6 text-gray-500 sm:text-base">
          Paste your code below and prepare it for AI-powered analysis and
          improvement suggestions.
        </p>
      </section>

      {/* Workspace */}
      <section className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        {/* Editor */}
        <div className="overflow-hidden rounded-2xl border border-[#d9e1e1] bg-white shadow-sm">
          <div className="flex flex-col gap-4 border-b border-[#d9e1e1] px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-bold text-[#0d3b3e]">Source code</p>
              <p className="mt-1 text-xs text-gray-400">
                Enter the code you want to analyze
              </p>
            </div>

            <select
              value={language}
              onChange={(event) => setLanguage(event.target.value)}
              className="rounded-lg border border-[#d9e1e1] bg-[#f5f7f7] px-3 py-2 text-xs font-medium text-[#0d3b3e] outline-none focus:border-[#297373]"
            >
              <option>TypeScript</option>
              <option>JavaScript</option>
              <option>Python</option>
              <option>Java</option>
              <option>C++</option>
            </select>
          </div>

          <div className="bg-[#071f21] p-1">
            <textarea
              value={code}
              onChange={(event) => setCode(event.target.value)}
              placeholder={`// Paste your ${language} code here...\n\nfunction example() {\n  // Your code\n}`}
              className="min-h-[390px] w-full resize-y bg-[#071f21] p-5 font-mono text-sm leading-7 text-[#b9d8d5] outline-none placeholder:text-white/20"
              spellCheck={false}
            />
          </div>

          <div className="flex flex-col gap-3 border-t border-[#d9e1e1] p-4 sm:flex-row sm:items-center sm:justify-between">
            <span className="text-xs text-gray-400">
              {code.length} characters
            </span>

            <button
              type="button"
              className="rounded-xl bg-[#0d3b3e] px-6 py-3 text-sm font-bold text-white shadow-md transition hover:-translate-y-0.5 hover:bg-[#297373]"
            >
              Analyze Code →
            </button>
          </div>
        </div>

        {/* Analysis panel */}
        <div className="space-y-5">
          <div className="rounded-2xl border border-[#d9e1e1] bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-[#297373]">
                  AI Analysis
                </p>
                <h2 className="mt-2 text-xl font-bold text-[#0d3b3e]">
                  Ready when you are
                </h2>
              </div>

              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#e8f5f3] text-xl">
                ✦
              </div>
            </div>

            <p className="mt-5 text-sm leading-6 text-gray-500">
              Submit your code to receive AI-assisted insights about quality,
              readability, structure, and potential improvements.
            </p>

            <div className="mt-6 space-y-3">
              {[
                ["01", "Code quality"],
                ["02", "Readability"],
                ["03", "Maintainability"],
              ].map(([number, label]) => (
                <div
                  key={number}
                  className="flex items-center gap-3 rounded-xl bg-[#f5f7f7] px-4 py-3"
                >
                  <span className="text-xs font-bold text-[#297373]">
                    {number}
                  </span>
                  <span className="text-sm font-medium text-gray-600">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Tips */}
          <div className="rounded-2xl bg-[#0d3b3e] p-6 text-white shadow-lg">
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10">
                💡
              </span>
              <h3 className="font-bold">Analysis tips</h3>
            </div>

            <ul className="mt-5 space-y-3 text-xs leading-5 text-white/60">
              <li>• Keep related code together for better context.</li>
              <li>• Include the relevant function or component.</li>
              <li>• Specify the language before starting analysis.</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}