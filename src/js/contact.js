import generalData from "../assets/json/general.json";
import personalData from "../assets/json/about.json";

import { mapIcons } from "./sn-circle";

const info = generalData.data.sections['contact'];
const me = personalData.data;

const createContact = () => {
    const element = document.createElement("div");
    element.innerHTML = `
      <p class="fs-2 section-title text-shadow">${info["title"].replaceAll('\n','<br>')}</p>
      <div class="text-white bg-dark div-content text-center box-shadow">
          <p class="fs-5 text-break"><a href="mailto:${me.email}">${me.email}</a></p>
          <div class="mt-4 mb-1">
            ${mapIcons(me.social,'circle-sn-m','rounded-3')}
          </div>
      </div>
      `;
  
    return element;
};

export { createContact };