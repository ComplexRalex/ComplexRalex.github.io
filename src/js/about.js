import generalData from "../assets/json/general.json";
import personalData from "../assets/json/about.json";

const info = generalData.data;
const me = personalData.data;

const createAbout = () => {
    const element = document.createElement("div");
    element.innerHTML = `
      <p class="fs-2 section-title">${info["title-about"].replaceAll('\n','<br>')}</p>
      <div class="text-white bg-dark div-content">
          <img src="${me.image.url}" class="rounded profile-pic" alt="...">
          ${me.bio.replaceAll('\n','<br>').replaceAll('<p>','<p class="div-content">')}
      </div>
      `;
  
    return element;
};

export { createAbout };