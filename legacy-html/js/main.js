// js/main.js
document.addEventListener("DOMContentLoaded", () => {
    console.log("HireFlow UI Loaded Successfully!");

    const authLinks = document.querySelectorAll('.nav-actions a');
    authLinks.forEach(link => {
        if (link.innerText.includes('Logout')) {
            link.addEventListener('click', (e) => {
                if(!confirm("Do you want to logout?")) {
                    e.preventDefault();
                }
            });
        }
    });
});