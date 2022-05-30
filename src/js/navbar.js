import generalData from "../assets/json/general.json";

const data = generalData.data;
const avatar = data["avatar-navbar"];
const github = data["img-navbar"];

const createNavbar = () => {
    const div = document.createElement('div');
    div.innerHTML = `
    <nav class="navbar navbar-dark navbar-expand-sm fixed-top box-shadow">
      <div class="container">
        <a class="navbar-brand" href="#${data.sections.root.id}">
          <img class="avatar" src="${avatar.url}" title="${avatar.title}" alt="${avatar.alt}" />
          ${data["title-navbar"]}
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#someNavbar" aria-controls="someNavbar" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="someNavbar">
          <div class="navbar-nav me-auto">
            ${generateNavs()}
          </div>
          <a href="${data["img-navbar-url"]}"><img class="github rounded" src="${github.url}" title="${github.title}" alt="${github.alt}" /></a>
        </div>
      </div>
    </nav>
    `;

    return div.firstElementChild;
};

const generateNavs = () => {
    let allHTML = "";
    const sections = data.sections;

    for (let s in sections) {
        allHTML += `<a class="nav-link" href="#${sections[s].id}">${sections[s].name}</a>`;
    }

    return allHTML;
};

export {
    createNavbar,
};