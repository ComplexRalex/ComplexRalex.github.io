import generalData from "../assets/json/general.json";
import personalData from "../assets/json/about.json";

import { mapIcons } from "./sn-circle";

const info = generalData.data;
const me = personalData.data;

const createContact = () => {
    const element = document.createElement("div");
    element.innerHTML = `
      <p class="fs-2 section-title">${info["title-contact"].replaceAll('\n','<br>')}</p>
      <div class="text-white bg-dark div-content text-center">
          <p class="fs-5 text-break">Email: <a href="mailto:${me.email}">${me.email}</a></p>
          <div class="mt-4">
            ${mapIcons(me.social,'circle-sn-m','rounded-3')}
          </div>
      </div>
      `;
  
    return element;
};

export { createContact };