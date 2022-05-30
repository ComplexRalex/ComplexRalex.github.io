import { init } from "./js/index";
import { welcome } from "./js/motd";
import { getParallaxTools } from "./js/parallax";
import "./styles.css";

init();

// Don't look at me, I'm just a product of rush coding!
window.parallaxTools = getParallaxTools();

// Welcome message in console!
welcome();