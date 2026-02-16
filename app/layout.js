import './globals.css'

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
        {children}
      </body>
    </html>
  )
}
