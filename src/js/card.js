import "../css/components.css";
import snInfo from "../assets/json/social-networks.json";

import defaultImg from "../assets/img/card/default.png";
import defaultSN from "../assets/img/sn/default.png";

const socialNetworks = snInfo.data;
const dummySNName = "$dummy";
const dummySN = {
  name: "Something",
  title: "Something website",
  image: defaultSN,
  url: "#",
};

const createCard = ({
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

const mapIcons = (social) => {
  let allIcons = "";
  social.forEach((s) => {
    const sn = (s === dummySNName ? dummySN : socialNetworks[s]);
    allIcons += `<a
      class="circle-link"
      href="${sn.url}"
      target="_blank"
    ><img
      src="${sn.image}"
      title="${sn.title}"
      alt="${sn.name} logo"
      class="circle-sn rounded-circle"
    ></a>`;
  });
  return allIcons;
};

export { createCard };
