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

  return (
    <section>
      <h1>Health Check</h1>

      {error && <p>{error}</p>}

      {health && (
        <div>
          <p>
            <strong>Status:</strong> {health.status}
          </p>

          <p>
            <strong>Service:</strong> {health.service}
          </p>

          <p>
            <strong>Timestamp:</strong> {health.timestamp}
          </p>
        </div>
      )}

      {!health && !error && <p>Checking service health...</p>}
    </section>
  );
}