import generalData from "../assets/json/general.json";
import personalData from "../assets/json/about.json";

const info = generalData.data.sections['about'];
const me = personalData.data;

const createAbout = () => {
    const element = document.createElement("div");
    element.innerHTML = `
      <p class="fs-2 section-title text-shadow">${info["title"].replaceAll('\n','<br>')}</p>
      <div class="text-white bg-dark div-content box-shadow">
          <img src="${me.image.url}" class="rounded profile-pic" alt="...">
          ${me.bio.replaceAll('\n','<br>').replaceAll('<p>','<p class="div-content">')}
      </div>
      `;
  
    return element;
};

export { createAbout };