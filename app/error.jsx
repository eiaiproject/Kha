"use client";

export default function Error({ error, reset }) {
  return (
    <main
      style={{
        display: "grid",
        placeItems: "center",
        minHeight: "100vh",
        padding: "20px",
        textAlign: "center",
        fontFamily: "var(--font-space-grotesk), sans-serif",
      }}
    >
      <div>
        <h1
          style={{
            fontFamily: "var(--font-anton), sans-serif",
            fontSize: "clamp(36px, 10vw, 72px)",
            lineHeight: 1,
            textTransform: "uppercase",
            margin: 0,
            color: "#004AAD",
          }}
        >
          Ups!
        </h1>
        <p
          style={{
            fontSize: "18px",
            fontWeight: 600,
            margin: "16px 0 32px",
            color: "#111111",
            maxWidth: "400px",
          }}
        >
          Ada yang salah. Mungkin kopinya tumpah di server.
        </p>
        <button
          onClick={reset}
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "44px",
            padding: "12px 24px",
            color: "#004AAD",
            background: "#ffffff",
            border: "3px solid #111111",
            boxShadow: "4px 4px 0 #111111",
            fontWeight: 700,
            fontSize: "14px",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            cursor: "pointer",
            transition: "transform 180ms ease, box-shadow 180ms ease",
          }}
        >
          Coba Lagi
        </button>
      </div>
    </main>
  );
}
