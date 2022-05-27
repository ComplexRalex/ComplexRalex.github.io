const createTitle = () => {
  const title = document.createElement("p");
  title.innerHTML = `
    <h1 class="page-title mt-3">
      Alejandro Batres
    </h1>`;

  return title;
};

export {
    createTitle,
}