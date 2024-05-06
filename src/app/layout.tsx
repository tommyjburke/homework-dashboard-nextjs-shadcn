import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
   title: 'Homework NextJS',
   description: 'Homework Styling With NextJS',
}

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode
}>) {
   return (
      <html lang='en'>
         <body className={inter.className}>
            <nav>
               <h1>HOMEWORK</h1>
            </nav>

            {children}
         </body>
      </html>
   )
}
