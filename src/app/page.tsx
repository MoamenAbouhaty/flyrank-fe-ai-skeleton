import Link from "next/link";

const features = [
  {
    number: "01",
    icon: "⌁",
    title: "Smart Code Analysis",
    description:
      "Analyze your code and identify opportunities to improve quality, readability, and maintainability.",
  },
  {
    number: "02",
    icon: "✦",
    title: "AI-Powered Insights",
    description:
      "Turn complex code into practical recommendations with an AI-assisted development workflow.",
  },
  {
    number: "03",
    icon: "↗",
    title: "Better Engineering",
    description:
      "Make clearer technical decisions with focused feedback designed for modern developers.",
  },
];

const codeLines = [
  'function analyzeCode(source) {',
  '  const result = await ai.analyze({',
  '    code: source,',
  '    focus: "quality",',
  '  });',
  '',
  '  return result.suggestions;',
  '}',
];

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden rounded-[2rem] bg-[#071f21] px-6 py-14 text-white shadow-2xl sm:px-10 lg:px-14 lg:py-20">
        {/* Background glow */}
        <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[#297373]/30 blur-[100px]" />
        <div className="pointer-events-none absolute -bottom-40 left-1/3 h-96 w-96 rounded-full bg-[#35aaa5]/20 blur-[120px]" />
        <div className="pointer-events-none absolute left-0 top-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-[#0d3b3e]/80 blur-3xl" />

        {/* Decorative grid */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.4) 1px, transparent 1px)",
            backgroundSize: "42px 42px",
          }}
        />

        <div className="relative grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          {/* Hero copy */}
          <div>
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.07] px-4 py-2 text-xs font-medium tracking-wide text-white/80 backdrop-blur-md">
              <span className="flex h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,.8)]" />
              AI-POWERED DEVELOPER WORKSPACE
            </div>

            <h1 className="max-w-3xl text-4xl font-bold leading-[1.05] tracking-[-0.04em] sm:text-5xl lg:text-6xl">
              Write better code.
              <span className="mt-2 block bg-gradient-to-r from-white via-[#b8eeea] to-[#58c7c1] bg-clip-text text-transparent">
                Build with confidence.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-7 text-white/65 sm:text-lg">
              An intelligent workspace for developers to analyze code,
              discover improvement opportunities, and turn AI insights into
              better engineering decisions.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/analyze"
                className="group inline-flex items-center justify-center gap-3 rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-[#0d3b3e] shadow-xl shadow-black/20 transition duration-200 hover:-translate-y-0.5 hover:bg-[#e8f5f3]"
              >
                Start analyzing
                <span className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </Link>

              <Link
                href="/health"
                className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/[0.06] px-6 py-3.5 text-sm font-semibold text-white/90 backdrop-blur transition hover:bg-white/10"
              >
                System status
              </Link>
            </div>

            <div className="mt-9 flex flex-wrap gap-x-7 gap-y-3 text-xs text-white/45">
              <span className="flex items-center gap-2">
                <span className="text-[#62d8d2]">✓</span>
                AI-assisted analysis
              </span>
              <span className="flex items-center gap-2">
                <span className="text-[#62d8d2]">✓</span>
                Developer focused
              </span>
              <span className="flex items-center gap-2">
                <span className="text-[#62d8d2]">✓</span>
                Built with Next.js
              </span>
            </div>
          </div>

          {/* Code preview */}
          <div className="relative lg:pl-4">
            <div className="absolute -inset-5 rounded-[2rem] bg-[#297373]/10 blur-2xl" />

            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0a292b]/90 shadow-2xl backdrop-blur-xl">
              {/* Window bar */}
              <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
                <div className="flex gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                  <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                  <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                </div>

                <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-white/30">
                  ai-analysis.ts
                </span>

                <span className="rounded-md bg-emerald-400/10 px-2 py-1 text-[10px] font-medium text-emerald-300">
                  ANALYZING
                </span>
              </div>

              {/* Code */}
              <div className="p-5 font-mono text-xs leading-7 sm:p-7 sm:text-sm">
                {codeLines.map((line, index) => (
                  <div key={index} className="flex">
                    <span className="mr-5 w-5 select-none text-right text-white/20">
                      {index + 1}
                    </span>
                    <span
                      className={
                        line.includes("await") || line.includes("return")
                          ? "text-[#79ddd7]"
                          : line.includes("function")
                            ? "text-[#d6b7ff]"
                            : "text-white/70"
                      }
                    >
                      {line || "\u00A0"}
                    </span>
                  </div>
                ))}
              </div>

              {/* AI result */}
              <div className="mx-5 mb-5 rounded-xl border border-[#58c7c1]/15 bg-[#58c7c1]/[0.06] p-4 sm:mx-7 sm:mb-7">
                <div className="flex items-start gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#58c7c1]/10 text-[#78e2dc]">
                    ✦
                  </div>

                  <div>
                    <p className="text-xs font-semibold text-white/90">
                      AI Insight
                    </p>
                    <p className="mt-1 text-xs leading-5 text-white/45">
                      Code structure looks good. Consider extracting the
                      analysis configuration into a reusable service.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating score card */}
            <div className="absolute -bottom-5 -left-3 hidden rounded-xl border border-white/10 bg-[#102f31]/95 px-4 py-3 shadow-xl backdrop-blur-xl sm:block">
              <p className="text-[9px] uppercase tracking-widest text-white/35">
                Code quality
              </p>
              <div className="mt-1 flex items-end gap-2">
                <span className="text-2xl font-bold text-white">94</span>
                <span className="mb-1 text-xs text-[#69d8d1]">/ 100</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="grid gap-4 sm:grid-cols-3">
        {[
          {
            value: "01",
            label: "Analyze",
            text: "Understand your code",
          },
          {
            value: "02",
            label: "Improve",
            text: "Discover better solutions",
          },
          {
            value: "03",
            label: "Build",
            text: "Ship with confidence",
          },
        ].map((item) => (
          <div
            key={item.value}
            className="group rounded-2xl border border-[#d9e1e1] bg-white p-6 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="flex items-start justify-between">
              <span className="text-xs font-bold tracking-widest text-[#297373]">
                {item.value}
              </span>
              <span className="text-lg text-gray-300 transition group-hover:translate-x-1 group-hover:text-[#297373]">
                →
              </span>
            </div>

            <h2 className="mt-7 text-xl font-bold text-[#0d3b3e]">
              {item.label}
            </h2>

            <p className="mt-1 text-sm text-gray-500">{item.text}</p>
          </div>
        ))}
      </section>

      {/* Features */}
      <section>
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#297373]">
              The workspace
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#0d3b3e] sm:text-4xl">
              Everything you need to reason about your code.
            </h2>
          </div>

          <p className="max-w-xl text-sm leading-7 text-gray-500 lg:justify-self-end">
            Designed as a focused developer workspace where AI supports your
            workflow without getting in the way.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {features.map((feature) => (
            <article
              key={feature.number}
              className="group relative overflow-hidden rounded-2xl border border-[#d9e1e1] bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="absolute right-0 top-0 h-32 w-32 translate-x-1/2 -translate-y-1/2 rounded-full bg-[#e8f5f3] blur-2xl transition group-hover:bg-[#cdebea]" />

              <div className="relative">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold tracking-widest text-gray-300">
                    {feature.number}
                  </span>

                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#e8f5f3] text-xl text-[#0d3b3e]">
                    {feature.icon}
                  </span>
                </div>

                <h3 className="mt-10 text-xl font-bold text-[#0d3b3e]">
                  {feature.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-gray-500">
                  {feature.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="relative overflow-hidden rounded-[2rem] bg-[#e8f5f3] px-6 py-12 text-center sm:px-10 sm:py-16">
        <div className="absolute left-1/2 top-0 h-48 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#297373]/10 blur-3xl" />

        <div className="relative mx-auto max-w-2xl">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0d3b3e] text-xl text-white shadow-lg">
            ✦
          </div>

          <h2 className="mt-6 text-3xl font-bold tracking-tight text-[#0d3b3e] sm:text-4xl">
            Your next improvement starts here.
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-gray-600 sm:text-base">
            Explore the analysis workspace and see how AI-assisted development
            can fit into your workflow.
          </p>

          <Link
            href="/analyze"
            className="mt-8 inline-flex items-center gap-3 rounded-xl bg-[#0d3b3e] px-7 py-3.5 text-sm font-bold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-[#297373]"
          >
            Open Analysis Workspace
            <span>→</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
