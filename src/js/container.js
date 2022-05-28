const createContainer = (elements) => {
    const container = document.createElement("div");
    container.classList.add("container","align-middle");
    elements.forEach((element) => container.appendChild(element));
  
    return container;
};

export {
    createContainer,
};
