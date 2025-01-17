export const getNavbarTools = (navbar) => {
    const title = navbar.querySelector(".navbar-brand .title");
    
    const handleTitleAnimation = () => {
        if (window.scrollY <= window.innerHeight * 0.65) {
            if (title.classList.contains('shown')) {
                title.classList.add('hidden');
                title.classList.remove('shown');
            }
        } else {
            title.classList.add('shown');
            title.classList.remove('hidden');
        }
    }

    const enableTitleAnimation = () => {
        window.addEventListener('scroll', handleTitleAnimation);
        title.style.opacity = '0';
        title.style.fontSize = '0';
        title.style.marginLeft = '0';
        console.warn("Navbar title animation %con", "color: green");
    }

    const disableTitleAnimation = () => {
        window.removeEventListener('scroll', handleTitleAnimation);
        title.style.opacity = '1';
        title.style.fontSize = 'inherit';
        title.style.marginLeft = '0.5rem';
        title.classList.remove('shown');
        title.classList.remove('hidden');
        console.warn("Navbar title animation %coff", "color: red");
    }

    return { enableTitleAnimation, disableTitleAnimation };
};
