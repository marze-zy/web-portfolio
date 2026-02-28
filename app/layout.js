import './globals.css'
import Script from 'next/script'
import ChatWidget from '@/components/ChatWidget'
import IntroLoader from '@/components/IntroLoader'

export const metadata = {
  title: 'My Portfolio',
  description: 'Computer Engineering Student | Embedded Systems & Hardware-Software Integration',
  viewport: 'width=device-width, initial-scale=1',
  charset: 'utf-8',
  icons: {
    icon: '/icon.png',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Blanka&display=swap" rel="stylesheet" />
      </head>
      <body>
        <IntroLoader />

        {children}

        {/* Global floating robot */}
        <Script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js" strategy="lazyOnload" />

        <ChatWidget />
      </body>
    </html>
  )
}
