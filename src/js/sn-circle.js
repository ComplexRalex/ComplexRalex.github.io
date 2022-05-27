import snInfo from "../assets/json/social-networks.json";
import defaultSN from "../assets/img/sn/default.png";

const socialNetworks = snInfo.data;
const dummySNName = "$dummy";
const dummySN = {
  name: "Something",
  title: "Something website",
  image: defaultSN,
  url: "#",
};

const mapIcons = (social, sizeType, shapeType) => {
  let allIcons = "";
  social.forEach((s) => {
    const sn = s === dummySNName ? dummySN : socialNetworks[s];
    allIcons += `<a
        class="circle-link"
        href="${sn.url}"
        target="_blank"
      ><img
        src="${sn.image}"
        title="${sn.title}"
        alt="${sn.name} logo"
        class="${sizeType ?? 'circle-sn'} ${shapeType ?? 'rounded-circle'}"
      ></a>`;
  });
  return allIcons;
};

export { socialNetworks, dummySNName, dummySN, mapIcons };
