const createTitle = () => {
  const title = document.createElement("p");
  title.innerHTML = `
    <p class="js mt-5">
      Página de presentación en mantenimiento...
    </p>`;

  return title;
};

export {
    createTitle,
}