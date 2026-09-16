async function getHealthStatus() {
  const response = await fetch("http://localhost:3000/api/health", {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Health check failed");
  }

  return response.json();
}

export default async function HealthPage() {
  const health = await getHealthStatus();

  return (
    <section>
      <h1>Health Check</h1>

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
    </section>
  );
}