import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header>
      <div className="collapse bg-dark" id="navbarHeader">
        <div className="container">
          <div className="row justify-content-end">
            <div className="col-sm-2 offset-md-1 py-4">
              <h4 className="text-white">Контакты</h4>
              <ul className="list-unstyled">
                <li>
                  <Link
                    href="https://www.instagram.com/yulia_perezhogina/"
                    className="text-white"
                    target="_blank"
                  >
                    Instagram
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.facebook.com/yulia.perezhogina"
                    className="text-white"
                    target="_blank"
                  >
                    Facebook
                  </Link>
                </li>
                <li>
                  <Link href="/contacts" className="text-white">
                    Написать мне
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="navbar navbar-light">
        <div className="container">
          <Link href="/" className="navbar-brand d-flex py-5">
            <Image
              src="/images/YP-logo.svg"

              width={75}
              height={75}
              style={{
                objectFit: "contain",
                width: "75px",
                // height: "100%",
              }}
              alt="YPStudio logo"
            />
          </Link>
          <div className="site-name">
            <Link href="/" className="text-white">
              <h1>
                design studio
                <br />
                Yulia Perezhogina
              </h1>
            </Link>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarHeader"
            aria-controls="navbarHeader"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
      </div>
    </header>
  );
}
