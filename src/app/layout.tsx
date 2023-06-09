import './globals.css'

export const metadata = {
  title: 'Spotify',
  description: 'Listen to Music',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='bg-zinc-900 text-white'>{children}</body>
    </html>
  )
}
