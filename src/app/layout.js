import {Inter, Roboto, Bebas_Neue, Raleway} from 'next/font/google'
import './globals.css'

export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const roboto = Roboto({
  subsets: ['latin'],
  display: 'swap',
  weight: ['100', '300', "400", "500", "700", "900"],
  variable: '--font-roboto',
})

export const raleway = Raleway({
  subsets: ['latin'],
  display: 'swap',
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: '--font-raleway',
})

export const bebasNeue = Bebas_Neue({
  subsets: ['latin'],
  display: 'swap',
  weight: ["400"],
  variable: '--font-bebasNeue',
})


export const metadata = {
  title: 'Blue Prospect Studio',
  description: 'Video production studio',
}

export default function RootLayout({ children }) {
  return (
      <html lang="en" className={`${inter.variable} ${roboto.variable} ${bebasNeue.variable} ${raleway.variable}`}>
      <body>{children}</body>
    </html>
  )
}
