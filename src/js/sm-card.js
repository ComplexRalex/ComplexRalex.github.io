import { dummySNName, mapIcons } from "./sn-circle";

import defaultImg from "../assets/img/card/default.png";

const createSocialMediaCard = ({
  title = "Card title",
  desc = "Card description",
  image = { url: defaultImg, title: "None", alt: "None" },
  social = [dummySNName],
}) => {
  const card = document.createElement("div");
  card.innerHTML = `
    <div class="card text-white bg-dark">
        <div class="row g-0">
            <div class="col-md-4">
                <img
                    src="${image.url}"
                    class="img-fluid rounded-start img-thumb"
                    title="${image.title}"
                    alt="${image.alt}"
                >
            </div>
            <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title">${title}</h5>
                    <p class="card-text">${desc}</p>
                    <div class="card-text">
                        ${mapIcons(social)}
                    </div>
                </div>
            </div>
        </div>
    </div>
    `;

  return card.firstElementChild;
};

export { createSocialMediaCard };
