import './globals.css'

export const metadata = {
  title: 'Sound Rank',
  description: 'Professional Audio Solutions',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}