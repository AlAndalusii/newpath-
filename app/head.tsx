// app/head.tsx
export default function Head() {
  return (
    <>
      <title>BestFlightAlerts</title>
      <meta name="description" content="Get the best flight deals from Chicago" />
      {/* This tells the browser to load your favicon from the API route */}
      <link rel="icon" href="/api/favicon" type="image/png" />
    </>
  );
}
