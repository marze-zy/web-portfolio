import './globals.css'

export const metadata = {
  title: 'Andrei Zyrish C. Manuel | Portfolio',
  description: 'Computer Engineering Student | Embedded Systems & Hardware-Software Integration',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
