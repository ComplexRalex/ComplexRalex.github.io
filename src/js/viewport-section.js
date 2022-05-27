const createViewportSection = (child) => {
  const viewport = document.createElement("section");
  viewport.classList.add("viewport");
  viewport.appendChild(child);

  return viewport;
};

export { createViewportSection };
