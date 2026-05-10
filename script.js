const menuBtn = document.getElementById('menuBtn');
const sidebar = document.getElementById('sidebar');

menuBtn.addEventListener('click', () => {
    sidebar.classList.toggle('active');
});


// EMAILJS

document.getElementById("contact-form")
.addEventListener("submit", function(event){

    event.preventDefault();

    emailjs.sendForm(
        "service_f2xn9ia",
        "template_y4mth3r",
        this
    )

    .then(function(){

        alert("Message Sent Successfully 🚀");

    }, function(error){

        alert("FAILED...", error);

    });

});


// Simple typing effect

const title = document.querySelector('.hero-text h1');

setInterval(() => {

    title.style.opacity = '0.7';

    setTimeout(() => {

        title.style.opacity = '1';

    }, 500);

}, 1500);


// Smooth scroll effect

const links = document.querySelectorAll('a');

links.forEach(link => {

    link.addEventListener('click', function(e){

        const href = this.getAttribute('href');

        if(href.startsWith('#')){

            e.preventDefault();

            document.querySelector(href).scrollIntoView({
                behavior:'smooth'
            });

        }

    });

});