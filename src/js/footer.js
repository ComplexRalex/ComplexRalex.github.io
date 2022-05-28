import generalData from "../assets/json/general.json";

import { createContainer } from "./container";

const data = generalData.data;
const img = data["img-footer"];

const createFooter = () => {
  const footer = document.createElement("footer");
  footer.classList.add("viewport", "vp-footer");

  const container = createContainer([]);
  container.classList.add("text-center");

  container.innerHTML = `
        <p class="m-0">${data["title-footer"]}</p>
        <a
          href="${data["img-footer-url"]}"
          target="_blank"
        ><img
          class="footer-img"
          src="${img.url}"
          title="${img.title}"
          alt="${img.alt}" 
        /></a>
    `;

  footer.appendChild(container);
  return footer;
};

export { createFooter };
