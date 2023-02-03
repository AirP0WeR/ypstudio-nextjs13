import Image from "next/image";

const cache = {};
function importAll(r) {
  r.keys().forEach((key) => (cache[key] = r(key)));
}

importAll(
  require.context("/public/images/logo", false, /\.\/.*\.(png|jpe?g|svg)$/)
);

const images = Object.entries(cache).map((module) => module[1].default);

export default function Page() {
  return (
    <div className="container">
      <div className="row row-cols-1 row-cols-sm-2 g-4">
        {images.map((image) => (
          <div className="col" key={image.src}>
            <Image className="img-fluid" src={image} alt={image.src} />
          </div>
        ))}
      </div>
    </div>
  );
}
