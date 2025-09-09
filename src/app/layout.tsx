import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Deploy",
  description: "Your description here",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        style={{
          backgroundColor: "#000",
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.15) 2px, transparent 2px)",
          backgroundSize: "30px 30px",
          minHeight: "100vh",
        }}
      >
        {children}
      </body>
    </html>
  );
}
