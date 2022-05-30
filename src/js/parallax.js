// I know this is not a good implementation, but whatever...
export const getParallaxTools = () => {
  const root = document.querySelector(".vp-root");
  const about = document.querySelector(".vp-about");
  const contents = document.querySelector(".vp-contents");
  // const contact = document.querySelector('.vp-contact'); // Not necessary

  const handleScrollParallax = () => {
    let rootHeight = root.clientHeight;
    let aboutHeight = about.clientHeight;
    let contentsHeight = contents.clientHeight;
    // let contactHeight = contact.clientHeight

    let value = window.scrollY;
    let maxHeight = rootHeight;
    let minHeight = 0;

    // vp-root parallax
    if (value <= maxHeight) {
      root.style.backgroundPosition = `50% ${value * 0.25}px`;
    }

    // Adds vp-about height's
    maxHeight += aboutHeight;

    // vp-contents parallax
    minHeight = maxHeight - aboutHeight;
    maxHeight += contentsHeight;
    if (value > minHeight && value <= maxHeight) {
      contents.style.backgroundPosition = `50% ${(value - maxHeight + contentsHeight) * 0.25}px`;
    }
  };

  const enableScrollParallax = () => {
    window.addEventListener("scroll", handleScrollParallax);
    console.warn("Parallax scrolling turned %con", "color: green");
  };

  const disableScrollParallax = () => {
    window.removeEventListener("scroll", handleScrollParallax);
    root.style.backgroundPosition = "50% 50%";
    contents.style.backgroundPosition = "50% 50%";
    console.warn("Parallax scrolling turned %coff", "color: red");
  };

  return { enableScrollParallax, disableScrollParallax };
};
