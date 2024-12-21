// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
    // Get all the FAQ question buttons
    const faqQuestions = document.querySelectorAll('.faq-question');

    // Add event listener to each question button
    faqQuestions.forEach((question) => {
        question.addEventListener('click', () => {
            // Toggle the icon between '+' and '-'
            const icon = question.querySelector('.icon');
            const answer = question.nextElementSibling;

            // Toggle the answer visibility with smooth animation
            answer.classList.toggle('open');

            // Toggle the icon rotation
            question.classList.toggle('active');
        });
    });
});

// for burger nav
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const menu = document.querySelector('.navbar');

    menuToggle.addEventListener('change', () => {
        menu.style.display = menuToggle.checked ? 'block' : 'none';
    });
});


document.addEventListener('DOMContentLoaded', () => {
    // Select all FAQ question buttons
    const faqButtons = document.querySelectorAll('.faq-question-product');

    faqButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Find the corresponding answer
            const answer = button.nextElementSibling;

            // Toggle the display of the answer
            if (answer.style.display === 'none' || !answer.style.display) {
                answer.style.display = 'block';
                button.querySelector('.icon').textContent = '-'; // Change icon to "-"
            } else {
                answer.style.display = 'none';
                button.querySelector('.icon').textContent = '+'; // Change icon to "+"
            }
        });
    });
});

