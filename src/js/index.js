import '../css/components.css';
import { createLogoImage } from "./logo";
import { createTitle } from './title';

const createMainPage = () => {
    const container = document.createElement('div');
    container.classList.add('container','mt-5');

    const image = createLogoImage();
    container.appendChild(image);

    const title = createTitle();
    container.appendChild(title);

    document.body.appendChild(container);
};

export {
    createMainPage as init,
};