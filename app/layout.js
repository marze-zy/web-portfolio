import './globals.css'

export const metadata = {
  title: 'My Portfolio',
  description: 'Computer Engineering Student | Embedded Systems & Hardware-Software Integration',
  viewport: 'width=device-width, initial-scale=1',
  charset: 'utf-8',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        {children}
      </body>
    </html>
  )
}
