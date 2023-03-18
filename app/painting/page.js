import Image from "next/image";
import Link from "next/link";
import Dolomiti_1 from "/public/images/painting/Dolomiti_1.jpg";
import Dolomiti_2 from "/public/images/painting/Dolomiti_2.jpg";
import mak1 from "/public/images/painting/mak1.jpg";
import mak2 from "/public/images/painting/mak1.jpg";
import flower1 from "/public/images/painting/flower1.jpg";
import flower2 from "/public/images/painting/flower2.jpg";

export default function Page() {
  return (
    <div className="container">
      <div className="row row-cols-1 g-4">
        <div className="col-sm-7 mh-100">
          <Image className="img-fluid mh-100" src={Dolomiti_1} alt="Dolomiti_1" />
        </div>
        <div className="col-sm-5" style={{ maxHeight: "730px" }}>
          <div className="row h-75" style={{ color: "aquamarine" }}>
            <Image className="img-fluid mh-100" src={Dolomiti_2} alt="Dolomiti_2" />
          </div>
          <div
            className="row h-25"
            style={{ paddingLeft: "3%", paddingTop: "5%", paddingRight: "3%" }}
          >
            <div
              className="d-flex align-items-center justify-content-center"
              style={{ backgroundColor: "#F3F5F0" }}
            >
              <p className="card-text" style={{ textAlign: "center" }}>
                картина
                <br />
                {"Доломиты"}, материал: холст/ масло, размер: диаметр 40см, 2020
                год.
                <br />
                <Link href="/contacts" className="link-secondary">
                  узнать цену
                </Link>
              </p>
            </div>
          </div>
        </div>

        <div className="col-sm-7 mh-100">
          <Image className="img-fluid mh-100" src={mak1} alt="mak1" />

        </div>
        <div className="col-sm-5" style={{ maxHeight: "730px" }}>
          <div className="row h-75" style={{ color: "aquamarine" }}>
            <Image className="img-fluid mh-100" src={mak2} alt="mak2" />
          </div>
          <div
            className="row h-25"
            style={{ paddingLeft: "3%", paddingTop: "5%", paddingRight: "3%" }}
          >
            <div
              className="d-flex align-items-center justify-content-center"
              style={{ backgroundColor: "#F3F5F0" }}
            >
              <p className="card-text" style={{ textAlign: "center" }}>
                картина
                <br />
                {"Мак"}, материал: холст/ масло, размер: 80х70 см, 2005 год.
                <br />
                <a href="/contacts" className="link-secondary">
                  узнать цену
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="col-sm-7 mh-100">
          <Image className="img-fluid mh-100" src={flower1} alt="flower1" />

        </div>
        <div className="col-sm-5" style={{ maxHeight: "730px" }}>
          <div className="row h-75" style={{ color: "aquamarine" }}>
            <Image className="img-fluid mh-100" src={flower2} alt="flower2" />
          </div>
          <div
            className="row h-25"
            style={{ paddingLeft: "3%", paddingTop: "5%", paddingRight: "3%" }}
          >
            <div
              className="d-flex align-items-center justify-content-center"
              style={{ backgroundColor: "#F3F5F0" }}
            >
              <p className="card-text" style={{ textAlign: "center" }}>
                картина
                <br />
                {"Цветы"} , материал: холст/ масло, размер: 25х35 см, 2004 год.
                <br />
                <Link href="/contacts" className="link-secondary">
                  узнать цену
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
