import Link from "next/link";

export default function NotFound() {
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
            fontSize: "clamp(48px, 15vw, 120px)",
            lineHeight: 1,
            textTransform: "uppercase",
            margin: 0,
            color: "#004AAD",
          }}
        >
          404
        </h1>
        <p
          style={{
            fontSize: "18px",
            fontWeight: 600,
            margin: "16px 0 32px",
            color: "#111111",
          }}
        >
          Halaman ini nggak ketemu. Mungkin kopinya udah habis.
        </p>
        <Link
          href="/"
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
            textDecoration: "none",
            transition: "transform 180ms ease, box-shadow 180ms ease",
          }}
        >
          Balik ke Beranda
        </Link>
      </div>
    </main>
  );
}
