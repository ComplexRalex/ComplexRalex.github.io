import '../css/components.css';
import cardInfo from '../assets/json/cards.json';

import { createLogoImage } from "./logo";
import { createTitle } from './title';
// import { createObject } from './test';
import { createCard } from './card';

const createMainPage = () => {
    const container = document.createElement('div');
    container.classList.add('container','mt-5');

    const image = createLogoImage();
    container.appendChild(image);

    const title = createTitle();
    container.appendChild(title);

    const cards = cardInfo['data'];
    cards.forEach(c => container.appendChild(createCard(c)));

    // const object = createObject();
    // container.appendChild(object);

    document.body.appendChild(container);
};

export {
    createMainPage as init,
};