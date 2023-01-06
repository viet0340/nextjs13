import '../styles/globals.css'
import Header from './Header'
import { Roboto } from '@next/font/google'

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head />
      <body>
        <main className={roboto.className}>
          <Header />
          {children}
        </main>
      </body>
    </html>
  );
}
