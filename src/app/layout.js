import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'TazasTérmicas - E-commerce de Tazas Térmicas',
  description: 'Encuentra las mejores tazas térmicas para mantener tus bebidas a la temperatura perfecta',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="min-h-screen flex flex-col bg-gray-50">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
