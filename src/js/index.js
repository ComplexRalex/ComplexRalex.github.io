import "../css/components.css";
import data from "../assets/json/general.json";

import { createLogoImage } from "./logo";
import { createContainer } from "./container";
import { createTitle } from "./title";
import { createAbout } from "./about";
import { createContact } from "./contact";
import { createViewportSection } from "./viewport-section";
import { createSocialContents } from "./social-contents";
import { createFooter } from "./footer";
import { createNavbar } from "./navbar";
import { getNavbarTools } from "./navbar-tools";

const body = document.body;
const sectionInfo = data.data.sections;

const createMainPage = () => {
  // Header
  const header = document.createElement("header");
  const navbar = createNavbar();
  const {
    enableTitleAnimation,
    disableTitleAnimation
  } = getNavbarTools(navbar);

  header.appendChild(navbar);
  body.appendChild(header);

  // Main

  // Logo and title
  const image = createLogoImage();
  const title = createTitle();
  const rootVP = createViewportSection(createContainer([image, title]));
  rootVP.id = sectionInfo.root.id;
  rootVP.classList.add("vp-root");
  body.appendChild(rootVP);

  // About
  const about = createAbout();
  const aboutVP = createViewportSection(createContainer([about]));
  aboutVP.id = sectionInfo.about.id;
  aboutVP.classList.add("vp-about");
  body.appendChild(aboutVP);

  // Contents
  const cards = createSocialContents();
  const contentsVP = createViewportSection(createContainer([cards]));
  contentsVP.id = sectionInfo.contents.id;
  contentsVP.classList.add("vp-contents");
  body.appendChild(contentsVP);

  // Contact
  const contact = createContact();
  const contactVP = createViewportSection(createContainer([contact]));
  contactVP.id = sectionInfo.contact.id;
  contactVP.classList.add("vp-contact");
  body.appendChild(contactVP);

  // Footer

  const footer = createFooter();
  body.appendChild(footer);

  // Activating listeners
  enableTitleAnimation();

  return {
    navbarTools: {
      enableTitleAnimation,
      disableTitleAnimation,
    }
  }
};

const init = () => {
  return createMainPage();
};

export { init };
