import "../css/components.css";
import cardInfo from "../assets/json/cards.json";

import { createLogoImage } from "./logo";
import { createTitle } from "./title";
import { createObject } from "./test";
import { createSocialMediaCard } from "./sm-card";
import { createAbout } from "./about";
import { createContact } from "./contact";
import { createViewportSection } from "./viewport-section";

const main = document.body.querySelector('main');

const createMainPage = () => {
  const image = createLogoImage();
  const title = createTitle();
  const headVP = createViewportSection(createContainer([image, title]));
  headVP.classList.add('vp-head', 'parallax');
  main.appendChild(headVP);

  const about = createAbout();
  const aboutVP = createViewportSection(createContainer([about]));
  aboutVP.classList.add('vp-about');
  main.appendChild(aboutVP);
  
  const cards = cardInfo["data"];
  const contentsVP = createViewportSection(createContainer(cards.map(c => createSocialMediaCard(c))));
  contentsVP.classList.add('vp-contents', 'parallax');
  main.appendChild(contentsVP);
  
  const contact = createContact();
  const contactVP = createViewportSection(createContainer([contact]));
  contactVP.classList.add('vp-contact');
  main.appendChild(contactVP);

  // document.body.appendChild(container);
};

const createContainer = (elements) => {
  const container = document.createElement("div");
  container.classList.add("container","align-middle");
  elements.forEach((element) => container.appendChild(element));

  return container;
};

export { createMainPage as init };
