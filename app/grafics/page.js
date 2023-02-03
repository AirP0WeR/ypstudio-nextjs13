import Image from "next/image";
import apolon from "/public/images/grafics/apolon.jpg";
import stelvio from "/public/images/grafics/Stelvio.jpg";
import khokhloma from "/public/images/grafics/khokhloma.jpg";

export default function Page() {
  return (
    <div className="container">
      <div className="mt-4">
        <Image className="img-fluid" src={apolon} alt="apolon" />
      </div>
      <div className="mt-4">
        <Image className="img-fluid" src={stelvio} alt="Stelvio" />
      </div>
      <div className="mt-4 text-center">
        <Image className="img-fluid" src={khokhloma} alt="khokhloma" />
      </div>
    </div>
  );
}
