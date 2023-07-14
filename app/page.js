import Image from "next/image";
import Link from "next/link";


export default function Home() {
  return (
    <>
    <div className="album py-2">
      <div className="container">
        <div className="row row-cols-1 row-cols-sm-2 g-4">
          <Link href="/shop">
            <div className="col">
              <div className="card border-0">
                <Image
                  className="card-img-top"
                  src="/images/home/block-1-1.jpg"
                  width={650}
                  height={550}
                  style={{
                    objectFit: "contain",
                    width: "100%",
                    height: "100%",
                  }}
                  alt="stickers"
                />
                <div className="card-img-overlay">
                  <h1 className="card-title">stickers</h1>
                  <h1 className="card-title">shop</h1>
                </div>
                <div className="overlay">
                  <Image
                    className="card-img-top"
                    width={650}
                    height={550}
                    style={{
                      objectFit: "contain",
                      width: "100%",
                      height: "100%",
                    }}
                    src="/images/home/block-1-2.jpg"
                    alt="stickers"
                  />
                </div>
              </div>
            </div>
          </Link>

          <Link href="/kids">
            <div className="col">
              <div className="card border-0">
                <Image
                  className="card-img-top"
                  width={650}
                  height={550}
                  style={{
                    objectFit: "contain",
                    width: "100%",
                    height: "100%",
                  }}
                  src="/images/home/block-2-1.jpg"
                  alt="kids"
                />{" "}
                <div className="card-img-overlay">
                  <h1 className="card-title">kids</h1>
                </div>
                <div className="overlay">
                  <Image
                    className="card-img-top"
                    width={650}
                    height={550}
                    style={{
                      objectFit: "contain",
                      width: "100%",
                      height: "100%",
                    }}
                    src="/images/home/block-2-2.jpg"
                    alt="kids"
                  />{" "}
                </div>
              </div>
            </div>
          </Link>

          <Link href="/logo">
            <div className="col">
              <div className="card border-0">
                <Image
                  className="card-img-top"
                  width={650}
                  height={550}
                  style={{
                    objectFit: "contain",
                    width: "100%",
                    height: "100%",
                  }}
                  src="/images/home/block-3-1.jpg"
                  alt="logo"
                />{" "}
                <div className="card-img-overlay">
                  <h1 className="card-title">logo</h1>
                </div>
                <div className="overlay">
                  <Image
                    className="card-img-top"
                    width={650}
                    height={550}
                    style={{
                      objectFit: "contain",
                      width: "100%",
                      height: "100%",
                    }}
                    src="/images/home/block-3-2.jpg"
                    alt="logo"
                  />{" "}
                </div>
              </div>
            </div>
          </Link>

          <Link href="/brandbook">
            <div className="col">
              <div className="card border-0">
                <Image
                  className="card-img-top"
                  width={650}
                  height={550}
                  style={{
                    objectFit: "contain",
                    width: "100%",
                    height: "100%",
                  }}
                  src="/images/home/block-4-1.jpg"
                  alt="brand paper"
                />
                <div className="card-img-overlay">
                  <h1 className="card-title">brand paper</h1>
                </div>
                <div className="overlay">
                  <Image
                    className="card-img-top"
                    width={650}
                    height={550}
                    style={{
                      objectFit: "contain",
                      width: "100%",
                      height: "100%",
                    }}
                    src="/images/home/block-4-2.jpg"
                    alt="brand paper"
                  />
                </div>
              </div>
            </div>
          </Link>

          <Link href="/grafics">
            <div className="col">
              <div className="card border-0">
                <Image
                  className="card-img-top"
                  width={650}
                  height={550}
                  style={{
                    objectFit: "contain",
                    width: "100%",
                    height: "100%",
                  }}
                  src="/images/home/block-5-1.jpg"
                  alt="grafics"
                />
                <div className="card-img-overlay">
                  <h1 className="card-title">grafics</h1>
                </div>
                <div className="overlay">
                  <Image
                    className="card-img-top"
                    width={650}
                    height={550}
                    style={{
                      objectFit: "contain",
                      width: "100%",
                      height: "100%",
                    }}
                    src="/images/home/block-5-2.jpg"
                    alt="grafics"
                  />
                </div>
              </div>
            </div>
          </Link>

          <Link href="/painting">
            <div className="col">
              <div className="card border-0">
                <Image
                  className="card-img-top"
                  width={650}
                  height={550}
                  style={{
                    objectFit: "contain",
                    width: "100%",
                    height: "100%",
                  }}
                  src="/images/home/block-6-1.jpg"
                  alt="painting"
                />
                <div className="card-img-overlay">
                  <h1 className="card-title">painting</h1>
                </div>
                <div className="overlay">
                  <Image
                    className="card-img-top"
                    width={650}
                    height={550}
                    style={{
                      objectFit: "contain",
                      width: "100%",
                      height: "100%",
                    }}
                    src="/images/home/block-6-2.jpg"
                    alt="painting"
                  />
                </div>
              </div>
            </div>
          </Link>

        </div>
      </div>
    </div>
    </>
  );
}
