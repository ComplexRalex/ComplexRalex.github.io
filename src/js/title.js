import me from "../assets/json/about.json";

const createTitle = () => {
  const title = document.createElement("p");
  title.innerHTML = `
    <h1 class="page-title mt-3">
      ${me.data.name}
    </h1>`;

  return title;
};

export {
    createTitle,
}