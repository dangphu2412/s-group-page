import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { getDictionary } from "@/lib/dictionaries"

const inter = Inter({ subsets: ["latin"] })

export async function generateMetadata({
  params,
}: {
  params: { lang: string }
}) {
  const dict = await getDictionary(params.lang)

  return {
    title: "S-Group",
    description: dict.metadata.description,
  }
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { lang: string }
}) {
  const dict = await getDictionary(params.lang)

  return (
    <html lang={params.lang} suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <Navbar dictionary={dict.navigation} lang={params.lang} />
          {children}
          <Footer dictionary={dict.footer} />
        </ThemeProvider>
      </body>
    </html>
  )
}
