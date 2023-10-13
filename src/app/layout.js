import './globals.css'
import { Poppins, Roboto } from 'next/font/google'

const poppins = Poppins({
  weight: ['400', '700'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
});

const roboto = Roboto({
  weight: ['400', '700'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
});


export const metadata = {
  title: 'Principal | Repositorio',
  description: 'Paginal principal del repositorio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${ poppins.variable } ${ roboto.variable }`}>
        <body>{children}</body>
    </html>
  )
}
