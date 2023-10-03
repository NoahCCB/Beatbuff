import '../styles/globals.css'
import type { Metadata } from 'next'
import { Lora } from 'next/font/google'
import Header from "../components/header"

const myFont = Lora({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'group11_website',
  description: 'Rate and share albums',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
        <body className={myFont.className}>
            <Header></Header>
            {children}
        </body>
    </html>
  )
}