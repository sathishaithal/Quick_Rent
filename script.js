

// function scrollToGadgets() {
//     const gadgetsSection = document.getElementById("gadgets");
//     gadgetsSection.scrollIntoView({ behavior: "smooth" });
// }
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navbar = document.querySelector('.navbar ul');

    // Add event listener to toggle the navigation menu
    hamburger.addEventListener('click', () => {
        navbar.classList.toggle('active');
    });
});

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: "smooth" });
}
