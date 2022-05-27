import data from "../assets/json/about.json";
import { mapIcons } from "./sn-circle";

const me = data.data;

const createContact = () => {
    const element = document.createElement("div");
    element.innerHTML = `
      <div class="text-white bg-dark about text-center">
          <p class="fs-3">${me.contact.replaceAll('\n','<br>')}</p>
          <p class="fs-5 text-break">Email: <a href="mailto:${me.email}">${me.email}</a></p>
          <div class="mt-4">
            ${mapIcons(me.social,'circle-sn-m','rounded-3')}
          </div>
      </div>
      `;
  
    return element.firstElementChild;
};

export { createContact };