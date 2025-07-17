import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Victor - AI Assistant",
  description: "A stunning AI chatbot powered by Google Gemini with beautiful dark/light themes",
  keywords: ["AI", "chatbot", "Gemini", "Google AI", "Next.js", "dark mode", "beautiful UI"],
  authors: [{ name: "Your Name" }],
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Victor Chat",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
}

// Move viewport and themeColor to their own exports
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: "no",
}

export const themeColor = "#2563eb"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} text-rendering-optimized`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
