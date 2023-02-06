
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./header";
import Footer from "./footer";
import GAnalitycs from '/components/gAnalitycs';


export default function RootLayout({ children }) {



  return (
    <html lang="ru">

      <body>
        <Header />

        <main> {children}</main>

        <Footer />
        <GAnalitycs/>
      </body>
    </html>
  );
}
