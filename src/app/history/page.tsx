const analyses = [
  {
    title: "User authentication middleware",
    language: "TypeScript",
    score: "92",
    date: "Today",
    status: "Completed",
  },
  {
    title: "API response handler",
    language: "JavaScript",
    score: "86",
    date: "Yesterday",
    status: "Completed",
  },
  {
    title: "Data processing utility",
    language: "Python",
    score: "78",
    date: "Sep 14, 2026",
    status: "Completed",
  },
];

export default function HistoryPage() {
  return (
    <div className="space-y-8">
      <section>
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#297373]">
          <span className="h-2 w-2 rounded-full bg-[#297373]" />
          Analysis History
        </div>

        <div className="mt-3 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-[#0d3b3e] sm:text-4xl">
              Your analyses
            </h1>

            <p className="mt-3 max-w-2xl text-sm leading-6 text-gray-500 sm:text-base">
              Review previous code analyses and keep track of your improvement
              journey.
            </p>
          </div>

          <a
            href="/analyze"
            className="inline-flex w-fit items-center rounded-xl bg-[#0d3b3e] px-5 py-3 text-sm font-bold text-white shadow-md transition hover:-translate-y-0.5 hover:bg-[#297373]"
          >
            New Analysis →
          </a>
        </div>
      </section>

      <section className="grid gap-4 sm:grid-cols-3">
        {[
          ["03", "Total analyses"],
          ["85", "Average score"],
          ["03", "Languages"],
        ].map(([value, label]) => (
          <div
            key={label}
            className="rounded-2xl border border-[#d9e1e1] bg-white p-5 shadow-sm"
          >
            <p className="text-2xl font-bold text-[#0d3b3e]">{value}</p>
            <p className="mt-1 text-xs font-medium text-gray-400">{label}</p>
          </div>
        ))}
      </section>

      <section className="overflow-hidden rounded-2xl border border-[#d9e1e1] bg-white shadow-sm">
        <div className="border-b border-[#d9e1e1] px-5 py-5 sm:px-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="font-bold text-[#0d3b3e]">Recent analyses</h2>
              <p className="mt-1 text-xs text-gray-400">
                Your latest code review sessions
              </p>
            </div>

            <select className="rounded-lg border border-[#d9e1e1] bg-[#f5f7f7] px-3 py-2 text-xs font-medium text-[#0d3b3e] outline-none focus:border-[#297373]">
              <option>All languages</option>
              <option>TypeScript</option>
              <option>JavaScript</option>
              <option>Python</option>
            </select>
          </div>
        </div>

        <div className="divide-y divide-[#edf1f1]">
          {analyses.map((analysis) => (
            <div
              key={analysis.title}
              className="flex flex-col gap-4 px-5 py-5 transition hover:bg-[#f8fafa] sm:flex-row sm:items-center sm:justify-between sm:px-6"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#e8f5f3] text-lg">
                  ✦
                </div>

                <div>
                  <h3 className="font-bold text-[#0d3b3e]">
                    {analysis.title}
                  </h3>

                  <div className="mt-2 flex flex-wrap items-center gap-2 text-xs text-gray-400">
                    <span className="rounded-md bg-[#f5f7f7] px-2 py-1 font-medium">
                      {analysis.language}
                    </span>
                    <span>•</span>
                    <span>{analysis.date}</span>
                    <span>•</span>
                    <span className="text-[#297373]">
                      {analysis.status}
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between gap-6 sm:justify-end">
                <div className="text-left sm:text-right">
                  <p className="text-2xl font-bold text-[#0d3b3e]">
                    {analysis.score}
                  </p>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400">
                    Quality score
                  </p>
                </div>

                <button
                  type="button"
                  className="rounded-lg border border-[#d9e1e1] px-4 py-2 text-xs font-bold text-[#0d3b3e] transition hover:border-[#297373] hover:text-[#297373]"
                >
                  View
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-2xl bg-[#0d3b3e] p-6 text-white sm:p-8">
        <div className="max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#9fd0ca]">
            Keep improving
          </p>

          <h2 className="mt-3 text-2xl font-bold">
            Turn every analysis into better code.
          </h2>

          <p className="mt-3 text-sm leading-6 text-white/60">
            Run another analysis and compare your code quality over time.
          </p>

          <a
            href="/analyze"
            className="mt-6 inline-flex rounded-xl bg-white px-5 py-3 text-sm font-bold text-[#0d3b3e] transition hover:bg-[#e8f5f3]"
          >
            Analyze New Code
          </a>
        </div>
      </section>
    </div>
  );
}