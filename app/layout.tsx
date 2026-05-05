import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Slack Thread Auto-Archiver — Keep Channels Clean Automatically",
  description: "Automatically archive Slack threads when keywords like resolved, done, or fixed are detected. Built for engineering managers and team leads."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="5ad00c48-dbea-4459-b8e4-c4bbbb916370"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
