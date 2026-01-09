document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('nav a');
    const sections = document.querySelectorAll('section');

    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();

            // Deactivate all links
            navLinks.forEach(navLink => {
                navLink.classList.remove('active');
            });

            // Activate the clicked link
            link.classList.add('active');

            // Hide all sections
            sections.forEach(section => {
                section.classList.add('hidden');
            });

            // Show the target section
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.classList.remove('hidden');
            }
        });
    });
});