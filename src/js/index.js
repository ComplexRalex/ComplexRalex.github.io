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

const body = document.body;
const sectionInfo = data.data.sections;

const createMainPage = () => {
  // Header
  const header = document.createElement("header");
  const navbar = createNavbar();
  header.appendChild(navbar);
  body.appendChild(header);

  // Main

  // Logo and title
  const image = createLogoImage();
  const title = createTitle();
  const rootVP = createViewportSection(createContainer([image, title]));
  rootVP.id = sectionInfo.root.id;
  rootVP.classList.add("vp-head");
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
};

const addEvents = () => {
  const root = document.querySelector(".vp-head");
  const about = document.querySelector(".vp-about");
  const contents = document.querySelector(".vp-contents");
  // const contact = document.querySelector('.vp-contact'); // Not necessary

  window.addEventListener("scroll", () => {
    let viewportHeight = window.innerHeight;
    let rootHeight = root.clientHeight;
    let aboutHeight = about.clientHeight;
    let contentsHeight = contents.clientHeight;
    // let contactHeight = contact.clientHeight

    let value = window.scrollY;
    let maxHeight = rootHeight;
    let minHeight = 0;

    // vp-head parallax
    if (value <= maxHeight) {
      root.style.backgroundPosition = `50% ${value * 0.25}px`;
    }

    // Adds vp-about height's
    maxHeight += aboutHeight;

    // vp-head parallax
    minHeight = maxHeight - aboutHeight;
    maxHeight += contentsHeight;
    let delta = contentsHeight - viewportHeight;
    if (value > minHeight && value <= maxHeight) {
      contents.style.backgroundPosition = `50% ${(value - maxHeight + contentsHeight) * 0.25}px`;
    }
  });
};

const init = () => {
  createMainPage();
  addEvents();
};

export { createMainPage, init };
