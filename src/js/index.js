import "../css/components.css";

import { createLogoImage } from "./logo";
import { createTitle } from "./title";
import { createAbout } from "./about";
import { createContact } from "./contact";
import { createViewportSection } from "./viewport-section";
import { createSocialContents } from "./social-contents";

const header = document.body.querySelector('header');
const main = document.body.querySelector('main');
const footer = document.body.querySelector('footer');

const createMainPage = () => {
  // Header

  // Main

  // Logo and title
  const image = createLogoImage();
  const title = createTitle();
  const headVP = createViewportSection(createContainer([image, title]));
  headVP.classList.add('vp-head', 'parallax');
  main.appendChild(headVP);

  // About
  const about = createAbout();
  const aboutVP = createViewportSection(createContainer([about]));
  aboutVP.classList.add('vp-about');
  main.appendChild(aboutVP);
  
  // Contents
  const cards = createSocialContents();
  const contentsVP = createViewportSection(createContainer([cards]));
  contentsVP.classList.add('vp-contents', 'parallax');
  main.appendChild(contentsVP);
  
  // Contact
  const contact = createContact();
  const contactVP = createViewportSection(createContainer([contact]));
  contactVP.classList.add('vp-contact');
  main.appendChild(contactVP);

};

const createContainer = (elements) => {
  const container = document.createElement("div");
  container.classList.add("container","align-middle");
  elements.forEach((element) => container.appendChild(element));

  return container;
};

export { createMainPage as init };
