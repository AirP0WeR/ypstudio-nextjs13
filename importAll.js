function importAll(r) {
  let images = {};
  r.keys().map((item) => { images[item.replace('./', '')] = r(item); });
  return images;
}

const images = importAll(require.context('../../public/images/brandbook', false, /\.(png|jpe?g|svg)$/));
// src={images['ecolifter.jpg'].default}


for (i = 0; i < images.length; i++) {
  
}