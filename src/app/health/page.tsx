"use client";

import { useEffect, useState } from "react";

type HealthData = {
  status: string;
  service: string;
  timestamp: string;
};

export default function HealthPage() {
  const [health, setHealth] = useState<HealthData | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchHealth() {
      try {
        const response = await fetch("/api/health", {
          cache: "no-store",
        });

        if (!response.ok) {
          throw new Error("Health check failed");
        }

        const data: HealthData = await response.json();
        setHealth(data);
      } catch {
        setError("Unable to fetch health status");
      }
    }

    fetchHealth();
  }, []);

  const isHealthy = health?.status === "ok";

  return (
    <div className="space-y-8">
      {/* Header */}
      <section>
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#297373]">
          <span
            className={`h-2 w-2 rounded-full ${
              isHealthy ? "bg-emerald-500" : "bg-gray-300"
            }`}
          />
          System Status
        </div>

        <h1 className="mt-3 text-3xl font-bold tracking-tight text-[#0d3b3e] sm:text-4xl">
          Health Check
        </h1>

        <p className="mt-3 max-w-2xl text-sm leading-6 text-gray-500 sm:text-base">
          Monitor the availability of the AI Developer Assistant service.
        </p>
      </section>

      {/* Main status */}
      <section className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="overflow-hidden rounded-2xl border border-[#d9e1e1] bg-white shadow-sm">
          <div className="border-b border-[#d9e1e1] px-6 py-5">
            <p className="text-xs font-bold uppercase tracking-wider text-[#297373]">
              Service health
            </p>

            <h2 className="mt-2 text-xl font-bold text-[#0d3b3e]">
              Current service status
            </h2>
          </div>

          <div className="p-6">
            {error ? (
              <div className="rounded-2xl border border-red-200 bg-red-50 p-6">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-100 text-xl">
                    !
                  </div>

                  <div>
                    <p className="font-bold text-red-700">
                      Service unavailable
                    </p>

                    <p className="mt-1 text-sm text-red-500">
                      {error}
                    </p>
                  </div>
                </div>
              </div>
            ) : health ? (
              <div className="space-y-6">
                <div className="flex flex-col gap-5 rounded-2xl bg-[#f5f7f7] p-6 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex items-center gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-50 text-2xl">
                      ✓
                    </div>

                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-gray-400">
                        Status
                      </p>

                      <p className="mt-1 text-2xl font-bold text-[#0d3b3e]">
                        {health.status}
                      </p>
                    </div>
                  </div>

                  <span className="w-fit rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-bold text-emerald-700">
                    Operational
                  </span>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-xl border border-[#d9e1e1] p-5">
                    <p className="text-xs font-bold uppercase tracking-wider text-gray-400">
                      Service
                    </p>

                    <p className="mt-2 text-sm font-bold text-[#0d3b3e]">
                      {health.service}
                    </p>
                  </div>

                  <div className="rounded-xl border border-[#d9e1e1] p-5">
                    <p className="text-xs font-bold uppercase tracking-wider text-gray-400">
                      Last checked
                    </p>

                    <p className="mt-2 break-all text-sm font-bold text-[#0d3b3e]">
                      {new Date(health.timestamp).toLocaleString()}
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex min-h-[250px] items-center justify-center">
                <div className="text-center">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#e8f5f3] text-xl">
                    ↻
                  </div>

                  <p className="mt-4 font-bold text-[#0d3b3e]">
                    Checking service health...
                  </p>

                  <p className="mt-2 text-sm text-gray-400">
                    Connecting to the health endpoint.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Status summary */}
        <div className="space-y-5">
          <div className="rounded-2xl bg-[#0d3b3e] p-6 text-white shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-[#9fd0ca]">
                  System
                </p>

                <h2 className="mt-2 text-xl font-bold">
                  {isHealthy ? "All systems ready" : "Checking systems"}
                </h2>
              </div>

              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-xl">
                {isHealthy ? "✓" : "↻"}
              </div>
            </div>

            <p className="mt-5 text-sm leading-6 text-white/60">
              This page verifies that the deployed application can reach its
              health endpoint successfully.
            </p>
          </div>

          <div className="rounded-2xl border border-[#d9e1e1] bg-white p-6 shadow-sm">
            <p className="text-xs font-bold uppercase tracking-wider text-[#297373]">
              Health endpoint
            </p>

            <div className="mt-4 flex items-center justify-between rounded-xl bg-[#f5f7f7] px-4 py-3">
              <code className="text-sm font-bold text-[#0d3b3e]">
                /api/health
              </code>

              <span className="rounded-md bg-white px-2 py-1 text-[10px] font-bold text-gray-500 shadow-sm">
                GET
              </span>
            </div>

            <p className="mt-4 text-xs leading-5 text-gray-400">
              The endpoint returns the service status, service name, and
              current timestamp.
            </p>
          </div>
        </div>
      </section>

      {/* Footer status */}
      <section className="rounded-2xl border border-[#d9e1e1] bg-white p-6 shadow-sm">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-bold text-[#0d3b3e]">
              Deployment health monitoring
            </p>

            <p className="mt-1 text-sm text-gray-400">
              The health check is available on the deployed application.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-bold text-emerald-600">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            Endpoint configured
          </div>
        </div>
      </section>
    </div>
  );
}