import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "./components/theme-provider";

export const metadata: Metadata = {
  title: "TeleHealth",
  description: "A healthcare management system",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("font antialiased min-h-screen")}>
        <ThemeProvider
        attribute="class"
        defaultTheme="light"
        >{children}</ThemeProvider>
      </body>
    </html>
  );
}
