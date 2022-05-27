import data from "../assets/json/about.json";
import cardInfo from "../assets/json/cards.json";

import { createSocialMediaCard } from './sm-card';

const me = data.data;
const cards = cardInfo["data"];

const createSocialContents = () => {
    const element = document.createElement('div');
    element.innerHTML = `<p class="fs-2 section-title">${me["contents-msg"].replaceAll('\n','<br>')}</p>`;
    cards.forEach(c => element.appendChild(createSocialMediaCard(c)));

    return element;
};

export {
    createSocialContents,
};