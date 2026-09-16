export default function SettingsPage() {
  return (
    <div className="space-y-8">
      <section>
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#297373]">
          <span className="h-2 w-2 rounded-full bg-[#297373]" />
          Preferences
        </div>

        <h1 className="mt-3 text-3xl font-bold tracking-tight text-[#0d3b3e] sm:text-4xl">
          Settings
        </h1>

        <p className="mt-3 max-w-2xl text-sm leading-6 text-gray-500 sm:text-base">
          Manage your assistant preferences and application configuration.
        </p>
      </section>

      <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-6">
          {/* General */}
          <div className="rounded-2xl border border-[#d9e1e1] bg-white p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#e8f5f3]">
                ⚙️
              </div>

              <div>
                <h2 className="font-bold text-[#0d3b3e]">General</h2>
                <p className="text-xs text-gray-400">
                  Basic assistant preferences
                </p>
              </div>
            </div>

            <div className="mt-6 space-y-5">
              <div>
                <label className="text-sm font-bold text-[#0d3b3e]">
                  Assistant name
                </label>

                <input
                  type="text"
                  defaultValue="AI Developer Assistant"
                  className="mt-2 w-full rounded-xl border border-[#d9e1e1] bg-[#f8fafa] px-4 py-3 text-sm text-gray-700 outline-none transition focus:border-[#297373]"
                />
              </div>

              <div>
                <label className="text-sm font-bold text-[#0d3b3e]">
                  Default language
                </label>

                <select
                  defaultValue="TypeScript"
                  className="mt-2 w-full rounded-xl border border-[#d9e1e1] bg-[#f8fafa] px-4 py-3 text-sm text-gray-700 outline-none transition focus:border-[#297373]"
                >
                  <option>TypeScript</option>
                  <option>JavaScript</option>
                  <option>Python</option>
                  <option>Java</option>
                  <option>C++</option>
                </select>
              </div>
            </div>
          </div>

          {/* Analysis */}
          <div className="rounded-2xl border border-[#d9e1e1] bg-white p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#e8f5f3]">
                ✦
              </div>

              <div>
                <h2 className="font-bold text-[#0d3b3e]">
                  Analysis preferences
                </h2>
                <p className="text-xs text-gray-400">
                  Configure what the assistant focuses on
                </p>
              </div>
            </div>

            <div className="mt-6 space-y-3">
              {[
                ["Code quality", "Identify potential quality issues"],
                ["Readability", "Suggest clearer code structures"],
                ["Maintainability", "Highlight long-term improvements"],
                ["Best practices", "Check common development patterns"],
              ].map(([title, description]) => (
                <label
                  key={title}
                  className="flex cursor-pointer items-center justify-between gap-4 rounded-xl bg-[#f5f7f7] p-4"
                >
                  <div>
                    <p className="text-sm font-bold text-[#0d3b3e]">
                      {title}
                    </p>
                    <p className="mt-1 text-xs text-gray-400">
                      {description}
                    </p>
                  </div>

                  <input
                    type="checkbox"
                    defaultChecked
                    className="h-4 w-4 accent-[#0d3b3e]"
                  />
                </label>
              ))}
            </div>
          </div>
        </div>

        {/* Right column */}
        <div className="space-y-6">
          <div className="rounded-2xl border border-[#d9e1e1] bg-white p-6 shadow-sm">
            <p className="text-xs font-bold uppercase tracking-wider text-[#297373]">
              AI configuration
            </p>

            <h2 className="mt-2 text-xl font-bold text-[#0d3b3e]">
              API connection
            </h2>

            <p className="mt-3 text-sm leading-6 text-gray-500">
              AI provider configuration will be connected in a later
              development stage.
            </p>

            <div className="mt-5 rounded-xl border border-dashed border-[#cbd8d7] bg-[#f8fafa] p-4">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#e8f5f3]">
                  🔒
                </span>

                <div>
                  <p className="text-sm font-bold text-[#0d3b3e]">
                    Secure configuration
                  </p>
                  <p className="mt-1 text-xs text-gray-400">
                    API keys will be stored through environment variables.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl bg-[#0d3b3e] p-6 text-white shadow-lg">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#9fd0ca]">
              Project status
            </p>

            <h2 className="mt-3 text-xl font-bold">
              Foundation is ready
            </h2>

            <p className="mt-3 text-sm leading-6 text-white/60">
              Your application structure, navigation, health check, and
              deployment foundation are in place.
            </p>

            <div className="mt-6 space-y-3">
              {[
                "Next.js App Router",
                "Tailwind CSS",
                "Responsive layout",
                "Health check",
                "Vercel deployment",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 text-sm text-white/80"
                >
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/10 text-xs">
                    ✓
                  </span>
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-end">
            <button
              type="button"
              className="rounded-xl bg-[#0d3b3e] px-6 py-3 text-sm font-bold text-white shadow-md transition hover:-translate-y-0.5 hover:bg-[#297373]"
            >
              Save Preferences
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}