
// ==================================
// 1. MOBILE HAMBURGER MENU
// ==================================

const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

menuToggle.addEventListener("click", () => {

    const isOpen = navMenu.classList.toggle("active");

    menuToggle.setAttribute("aria-expanded", isOpen);

    menuToggle.innerHTML = isOpen
        ? '<i class="fa-solid fa-xmark"></i>'
        : '<i class="fa-solid fa-bars"></i>';

});

// Close mobile menu after clicking a navigation link

document.querySelectorAll(".nav-menu a").forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("active");

        menuToggle.setAttribute("aria-expanded", "false");

        menuToggle.innerHTML =
            '<i class="fa-solid fa-bars"></i>';

    });

});


// ==================================
// 2. PROJECT MODAL DATA
// ==================================

const projects = {

    "vital-health": {

        title: "Vital Health",

        category: "Full Stack Development",

        description:
            "Vital Health is a health management application. " +
            "It includes user registration, login authentication, " +
            "backend API integration and health-related functionality.",

        technologies: [
            "React",
            "Node.js",
            "Express.js",
            "MongoDB",
            "JWT"
        ],

        github: "https://github.com/nairanjelina-del/Vital-health-tracker"

    },


    "agile-ed": {

        title: "AgileEd",

        category: "Web Development",

        description:
            "AgileEd is a student management application designed " +
            "to support student, teacher and administrator roles. " +
            "It includes role-based login and backend integration.",

        technologies: [
            "HTML",
            "CSS",
            "JavaScript",
            "Node.js",
            "PostgreSQL"
        ],

        github: "https://github.com/nairanjelina-del/AgileEd"

    },


    "geldium": {

        title: "Geldium Credit Analysis",

        category: "Machine Learning",

        description:
            "This project focuses on credit delinquency prediction " +
            "using machine learning. It explores financial features " +
            "and classification algorithms to identify potential " +
            "credit repayment risks.",

        technologies: [
            "Python",
            "Pandas",
            "Scikit-learn",
            "Logistic Regression",
            "Random Forest"
        ],

        github: "https://github.com/nairanjelina-del/Stats-Mini-Project"

    }

};


// ==================================
// 3. MODAL ELEMENTS
// ==================================

const modal = document.getElementById("project-modal");

const modalClose = document.getElementById("modal-close");

const modalTitle = document.getElementById("modal-title");

const modalCategory = document.getElementById("modal-category");

const modalDescription =
    document.getElementById("modal-description");

const modalTechnologies =
    document.getElementById("modal-technologies");

const modalGithub =
    document.getElementById("modal-github");

let lastFocusedElement = null;


// ==================================
// 4. OPEN PROJECT MODAL
// ==================================

document.querySelectorAll(".project-btn").forEach(button => {

    button.addEventListener("click", () => {

        const projectId = button.dataset.project;

        const project = projects[projectId];

        if (!project) return;

        lastFocusedElement = button;

        // Set project information

        modalTitle.textContent = project.title;

        modalCategory.textContent = project.category;

        modalDescription.textContent = project.description;

        // Clear previous technology tags

        modalTechnologies.innerHTML = "";

        // Create technology tags dynamically

        project.technologies.forEach(technology => {

            const tag = document.createElement("span");

            tag.textContent = technology;

            modalTechnologies.appendChild(tag);

        });

        // Set GitHub URL

        modalGithub.href = project.github;

        // Open modal

        modal.classList.add("active");

        modal.setAttribute("aria-hidden", "false");

        document.body.style.overflow = "hidden";

        modalClose.focus();

    });

});


// ==================================
// 5. CLOSE PROJECT MODAL
// ==================================

function closeModal() {

    modal.classList.remove("active");

    modal.setAttribute("aria-hidden", "true");

    document.body.style.overflow = "";

    if (lastFocusedElement) {
        lastFocusedElement.focus();
    }

}


// Close using X button

modalClose.addEventListener("click", closeModal);


// Close when clicking outside the modal content

modal.addEventListener("click", event => {

    if (event.target === modal) {
        closeModal();
    }

});


// Close using Escape key

document.addEventListener("keydown", event => {

    if (event.key === "Escape" &&
        modal.classList.contains("active")) {

        closeModal();

    }

});


// ==================================
// 6. AUTOMATIC COPYRIGHT YEAR
// ==================================

document.getElementById("year").textContent =
    new Date().getFullYear();
