import logo from "../assets/img/logo.png";

const createLogoImage = () => {
  const img = document.createElement("img");
  img.classList.add('logo','drop-shadow');
  img.alt = 'Avatar de Ralex';
  img.title = 'Ralex';
  img.src = logo;

  return img;
};

export { createLogoImage };
