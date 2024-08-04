// toggle icon navbar

let menuIcon = document.querySelector('#menu-icon');
let navBar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navBar.classList.toggle('active');
};


// active page on NavBar

let sections = document.querySelectorAll('section');
let NavLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY
        let offset = sec.offsetTop -150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            NavLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

// Sticky NavBar

let header = document.querySelector('header');

header.classList.toggle('sticky', window.scrollY > 100);

menuIcon.classList.remove('bx-x');
navBar.classList.remove('active');

};

// scroll reveal
ScrollReveal({ 
    // reset: true,
    distance: '800px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { orgin: 'top' });
ScrollReveal().reveal('.home-img, .certificates-container, .portfolio-box, .contact form', { orgin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { orgin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { orgin: 'right' });

//types js

// const typed = new Typed('.multiple-text', {
//     strings: ['Frontend Developer', 'Content writer','Reader', 'Student'],
//     typeSpeed: 100,
//     backSpeed: 100,
//     backDelay: 1000,
//     loop:true
// });

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var fullName = document.getElementById('fullName').value;
    var emailAddress = document.getElementById('emailAddress').value;
    var mobileNumber = document.getElementById('mobileNumber').value;
    var emailSubject = document.getElementById('emailSubject').value;
    var message = document.getElementById('message').value;

    var formData = {
        fullName: fullName,
        emailAddress: emailAddress,
        mobileNumber: mobileNumber,
        emailSubject: emailSubject,
        message: message
    };

    // Send data to server
    fetch('your_server_script_url', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
    })
    .catch((error) => {
        console.error('Error:', error);
    });
});
