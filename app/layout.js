
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./header";
import Footer from "./footer";
import { NextAuthProvider } from "../config/providers";


export default function RootLayout({ children }) {
  return (

    <html lang="ru" className="h-100">
      <body className="d-flex flex-column h-100">

          <NextAuthProvider>
            <Header />
            <main>
              {children}
            </main>
            <Footer />
          </NextAuthProvider>

      </body>
    </html>

  );
}
