document.addEventListener('DOMContentLoaded', () => {
    const projectList = document.getElementById('project-list');

    const projects = [
        { title: "Project 1", description: "Description of project 1." },
        { title: "Project 2", description: "Description of project 2." },
        { title: "Project 3", description: "Description of project 3." }
    ];

    projects.forEach(project => {
        const projectItem = document.createElement('div');
        projectItem.innerHTML = `<h3>${project.title}</h3><p>${project.description}</p>`;
        projectList.appendChild(projectItem);
    });

    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert("Thank you for your message!");
        contactForm.reset();
    });
});