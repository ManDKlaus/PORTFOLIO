import './globals.css'
import { Varela_Round } from 'next/font/google'
import Script from 'next/script'

const varelaRound = Varela_Round({ subsets: ['latin'], weight: ["400"] })

export const metadata = {
  title: 'Nicolás Daniel Mansilla | Full Stack Developer',
  description: 'Portfolio profesional de Nicolás Daniel Mansilla - Desarrollador Full Stack.',
  openGraph: {
    title: 'Nicolás Daniel Mansilla | Full Stack Developer',
    description: 'Descubre mis proyectos y habilidades en desarrollo web.',
    images: ['/img/NDM-Portfolio.png'],
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link href="./output.css" rel="stylesheet" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
      </head>
      <body className={`${varelaRound.className} tracking-wider  `} >
        {children}
        <Script 
          src="https://www.googletagmanager.com/gtag/js?id=G-CZYCJMVZQX" 
          strategy="afterInteractive" 
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-CZYCJMVZQX');
          `}
        </Script>
      </body>
    </html>
  )
}
