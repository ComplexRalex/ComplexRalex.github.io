import generalData from "../assets/json/general.json";
import personalData from "../assets/json/about.json";

import { mapIcons } from "./sn-circle";

const info = generalData.data.sections['contact'];
const me = personalData.data;

const createContact = () => {
    const element = document.createElement("div");
    element.innerHTML = `
      <p class="fs-2 section-title text-shadow">${info["title"].replaceAll('\n','<br>')}</p>
      <div class="text-white bg-dark div-content div-content-contact text-center box-shadow">
          <div class="div-content-email">
            <p class="fs-5 text-break" style='font-family: monospace;'><a href="mailto:${me.email}">${me.email}</a></p>
          </div>
          <div class="mt-3 mb-1">
            ${mapIcons(me.social,'circle-sn-m','rounded-3')}
          </div>
      </div>
      `;
  
    return element;
};

export { createContact };