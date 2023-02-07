
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./header";
import Footer from "./footer";


export default function RootLayout({ children }) {



  return (
    <html lang="ru">

      <body>
        <Header />

        <main> {children}</main>

        <Footer />
      </body>
    </html>
  );
}
