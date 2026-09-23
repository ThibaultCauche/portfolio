import Link from "next/link";

export default function RootNotFound() {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body suppressHydrationWarning style={{ background: "#1c1b21", color: "#fff", display: "flex", minHeight: "100vh", alignItems: "center", justifyContent: "center", fontFamily: "system-ui, sans-serif" }}>
        <div style={{ textAlign: "center" }}>
          <p style={{ fontSize: 64, fontWeight: 800, opacity: 0.3, margin: 0 }}>404</p>
          <h1 style={{ fontSize: 24, fontWeight: 700, margin: "16px 0 8px" }}>Page introuvable</h1>
          <p style={{ opacity: 0.7, marginBottom: 24 }}>La page que vous cherchez n&apos;existe pas ou a été déplacée.</p>
          <Link href="/fr" style={{ color: "#fff", border: "1px solid rgba(255,255,255,0.3)", borderRadius: 999, padding: "10px 20px", textDecoration: "none" }}>
            Retour à l&apos;accueil
          </Link>
        </div>
      </body>
    </html>
  );
}
