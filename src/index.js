import { init } from "./js/index";
import { welcome } from "./js/motd";
import { getParallaxTools } from "./js/parallax";
import "./styles.css";

const {
    navbarTools,
} = init();

// Don't look at me, I'm just a product of rush coding!
window.parallaxTools = getParallaxTools();
window.navbarTools = navbarTools;

// Welcome message in console!
welcome();