import './globals.css'
import Navbar from '../components/Navbar'

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
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  )
}