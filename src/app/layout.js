import { Roboto_Flex } from "next/font/google"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import NavBar from "@/components/NavBar"
import NavBarTop from "@/components/NavBarTop"
import MobileMenu from "@/components/MobileMenu"
import { AppWrapper } from "@/context"
import "./globals.css"

const robotoFlex = Roboto_Flex({ subsets: ["latin", "greek"] })

export const metadata = {
  title: "Nelios App",
  description: "Made with love by Alexandros Polymeros",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={robotoFlex.className}>
        <AppWrapper>
          <NavBarTop />
          <Header />
          <NavBar />
          {children}
          <Footer />
          <MobileMenu />
        </AppWrapper>
      </body>
    </html>
  )
}
