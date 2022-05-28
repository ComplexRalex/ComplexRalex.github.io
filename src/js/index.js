import "../css/components.css";

import { createLogoImage } from "./logo";
import { createContainer } from "./container.js";
import { createTitle } from "./title";
import { createAbout } from "./about";
import { createContact } from "./contact";
import { createViewportSection } from "./viewport-section";
import { createSocialContents } from "./social-contents";
import { createFooter } from "./footer";

const main = document.body.querySelector('main');

const createMainPage = () => {
  // Header

  // Main

  // Logo and title
  const image = createLogoImage();
  const title = createTitle();
  const headVP = createViewportSection(createContainer([image, title]));
  headVP.id = 'head';
  headVP.classList.add('vp-head', 'parallax');
  main.appendChild(headVP);

  // About
  const about = createAbout();
  const aboutVP = createViewportSection(createContainer([about]));
  aboutVP.id = 'about';
  aboutVP.classList.add('vp-about');
  main.appendChild(aboutVP);
  
  // Contents
  const cards = createSocialContents();
  const contentsVP = createViewportSection(createContainer([cards]));
  contentsVP.id = "contents";
  contentsVP.classList.add('vp-contents', 'parallax');
  main.appendChild(contentsVP);
  
  // Contact
  const contact = createContact();
  const contactVP = createViewportSection(createContainer([contact]));
  contactVP.id = "contact";
  contactVP.classList.add('vp-contact');
  main.appendChild(contactVP);
  
  // Footer
  
  const footer = createFooter();
  main.appendChild(footer);
};

export { createMainPage as init };
