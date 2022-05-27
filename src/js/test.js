import data from "../assets/json/about.json";

const me = data.data;

const createObject = () => {
  const element = document.createElement("div");
  element.innerHTML = `
    <div class="text-white bg-dark about">
        <img src="${me.image.url}" class="rounded profile-pic shadow-lg" alt="...">
        <p class="about">${me.bio.replaceAll('\n','<br>')}</p>
    </div>
    `;

  return element;
};

export { createObject };
