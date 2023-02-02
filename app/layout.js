
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Head from "next/head";
import Header from "./header";
import Footer from "./footer";


export default function RootLayout({ children }) {

  return (
    <html lang="ru">
      <Head />

      <body>
        <Header />

        <main> {children}</main>

        <Footer />
      </body>
    </html>
  );
}
