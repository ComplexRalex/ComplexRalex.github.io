import generalData from "../assets/json/general.json";
import personalData from "../assets/json/about.json";
import cardInfo from "../assets/json/cards.json";

import { createSocialMediaCard } from './sm-card';

const info = generalData.data.sections['contents'];
const me = personalData.data;

const cards = cardInfo["data"];

const createSocialContents = () => {
    const element = document.createElement('div');
    element.innerHTML = `<p class="fs-2 section-title text-shadow">${info["title"].replaceAll('\n','<br>')}</p>`;
    cards.forEach(c => element.appendChild(createSocialMediaCard(c)));

    return element;
};

export {
    createSocialContents,
};