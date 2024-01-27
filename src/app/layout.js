import { Roboto_Flex } from "next/font/google"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import NavBar from "@/components/NavBar"
import NavBarTop from "@/components/NavBarTop"
import "./globals.css"

const roboto = Roboto_Flex({ subsets: ["latin"] })

export const metadata = {
  title: "Nelios App",
  description: "Made with love by Alexandros Polymeros",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <NavBarTop />
        <Header />
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
