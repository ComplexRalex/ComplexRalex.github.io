import "../css/components.css";
import cardInfo from "../assets/json/cards.json";

import { createLogoImage } from "./logo";
import { createTitle } from "./title";
import { createObject } from './test';
import { createSocialMediaCard } from "./sm-card";
import { createAbout } from "./about";
import { createContact } from "./contact";

const createMainPage = () => {
  const container = document.createElement("div");
  container.classList.add("container", "mt-5");

  const image = createLogoImage();
  container.appendChild(image);

  const title = createTitle();
  container.appendChild(title);

  const about = createAbout();
  container.appendChild(about);

  const cards = cardInfo["data"];
  cards.forEach((c) => container.appendChild(createSocialMediaCard(c)));

//   const object = createObject();
//   container.appendChild(object);

    const contact = createContact();
    container.appendChild(contact);

  document.body.appendChild(container);
};

export { createMainPage as init };
