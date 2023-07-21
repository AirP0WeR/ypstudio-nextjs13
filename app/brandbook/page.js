import Image from "next/image";
import ecolifter from "../../public/images/brandbook/ecolifter.jpg"
import ecolifter1 from "../../public/images/brandbook/ecolifter2.jpg"
import ecolifter2 from "../../public/images/brandbook/ecolifter3.jpg"
import ecolifter3 from "../../public/images/brandbook/ecolifter4.jpg"

export default function Page() {

  return (
    <div className="container-fluid">
      <div className="container">
        <div className="row row-cols-1 justify-content-center">
          <div className="col g-4 mt-0">
            <Image
              className="card-img-top"
              src={ecolifter}
              style={{
                objectFit: "contain",
                width: "100%",
                height: "100%",
              }}
              alt="Logo"
            />
          </div>
          <div className="col g-4">
            <Image
              className="card-img-top"
              src={ecolifter1}
              style={{
                objectFit: "contain",
                width: "100%",
                height: "100%",
              }}
              alt="Logo"
            />
          </div>
        </div>

        <div className="row row-cols-1 row-cols-sm-2">
          <div className="col g-4">
            <Image
              className="card-img-top"
              src={ecolifter2}
              style={{
                objectFit: "contain",
                width: "100%",
                height: "100%",
              }}
              alt="Logo"
            />
          </div>
          <div className="col g-4">
            <Image
              className="card-img-top"
              src={ecolifter3}
              style={{
                objectFit: "contain",
                width: "100%",
                height: "100%",
              }}
              alt="Logo"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
