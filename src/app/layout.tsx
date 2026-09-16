import type { Metadata } from "next";
import ThemeToggle from "./components/ThemeToggle";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI Developer Assistant",
  description: "AI-powered developer code analysis assistant",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header>
          <nav>
            <Link href="/">AI Developer Assistant</Link>

            <div>
              <Link href="/analyze">Analyze</Link>
              <Link href="/history">History</Link>
              <Link href="/settings">Settings</Link>
              <Link href="/health">Health</Link>
              <ThemeToggle />
            </div>
          </nav>
        </header>

        <main>{children}</main>
      </body>
    </html>
  );
}