// ============================
// Hamburger Menu Toggle
// ============================
const hamburgerBtn = document.getElementById('hamburgerBtn');
const mainNav = document.getElementById('mainNav');

hamburgerBtn.addEventListener('click', () => {
    hamburgerBtn.classList.toggle('active');
    mainNav.classList.toggle('active');
});

// Cerrar menú al hacer click en un enlace
const navLinks = document.querySelectorAll('.header__nav-link');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburgerBtn.classList.remove('active');
        mainNav.classList.remove('active');
    });
});

// Cerrar menú al hacer click fuera
document.addEventListener('click', (e) => {
    if (!mainNav.contains(e.target) && !hamburgerBtn.contains(e.target)) {
        hamburgerBtn.classList.remove('active');
        mainNav.classList.remove('active');
    }
});

// ============================
// Smooth scroll offset para header fijo
// ============================
// document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//     anchor.addEventListener('click', function (e) {
//         e.preventDefault();
//         const target = document.querySelector(this.getAttribute('href'));
//         if (target) {
//             const headerHeight = document.querySelector('.header').offsetHeight;
//             const targetPosition = target.offsetTop - headerHeight;
//             window.scrollTo({
//                 top: targetPosition,
//                 behavior: 'smooth'
//             });
//         }
//     });
// });