import "../styles/globals.css";
import React from "react";

import { ThemeProvider } from "@/context/ThemeContext";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider>
      <html lang="en">
        <body>
          <main className="mt-16">{children}</main>
        </body>
      </html>
    </ThemeProvider>
  );
}
