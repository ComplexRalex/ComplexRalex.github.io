const createTitle = () => {
  const title = document.createElement("p");
  title.innerHTML = `
    <p class="page-title mt-5">
      Página de presentación en mantenimiento...
    </p>`;

  return title;
};

export {
    createTitle,
}