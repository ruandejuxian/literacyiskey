const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        // Toggle Nav
        nav.classList.toggle('nav-active');

        // Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });

        // Burger Animation
        burger.classList.toggle('toggle');
    });
}

// Gọi hàm khi load trang
navSlide();

// Đóng menu khi click vào một link (trên mobile)
const navLinks = document.querySelectorAll('.nav-links li a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        const nav = document.querySelector('.nav-links');
        const burger = document.querySelector('.burger');
        if (nav.classList.contains('nav-active')) {
             nav.click(); // Kích hoạt lại sự kiện click của burger để đóng
             burger.click();
        }
    });
});