import data from "../assets/json/about.json";

const me = data.data;

const createAbout = () => {
    const element = document.createElement("div");
    element.innerHTML = `
      <p class="fs-2 section-title">${me["about-msg"].replaceAll('\n','<br>')}</p>
      <div class="text-white bg-dark div-content">
          <img src="${me.image.url}" class="rounded profile-pic" alt="...">
          ${me.bio.replaceAll('\n','<br>').replaceAll('<p>','<p class="div-content">')}
      </div>
      `;
  
    return element;
};

export { createAbout };