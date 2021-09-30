const scrollToSection = (id) => {
    var element = document.getElementById(id);
    element.scrollIntoView();
};

const scrollToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
};

export {
    scrollToSection,
    scrollToTop,
};