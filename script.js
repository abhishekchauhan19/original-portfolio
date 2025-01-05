document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


const typingText = document.getElementById('change'); // This is where the text will be typed out
const words = ['Web Developer', 'Software Developer', 'Script Writer','Accountant']; // List of words to type
let wordIndex = 0;
let charIndex = 0;


function type() {
    if (charIndex < words[wordIndex].length) {
        typingText.textContent += words[wordIndex][charIndex]; // Add one character at a time
        charIndex++;
        setTimeout(type, 100); // Repeat every 100ms
    } else {
        setTimeout(deleteWord, 1000); // Wait for 1 second before deleting the word
    }
}


function deleteWord() {
    if (charIndex > 0) {
        typingText.textContent = words[wordIndex].substring(0, charIndex - 1); // Remove one character at a time
        charIndex--;
        setTimeout(deleteWord, 50); // Repeat every 50ms
    } else {
        wordIndex = (wordIndex + 1) % words.length; // Move to the next word in the array
        setTimeout(type, 500); // Wait for 0.5s before typing the next word
    }
}

type();


document.querySelector('.menu-toggle').addEventListener('click', () => {
    document.querySelector('.menu').classList.toggle('active');
});

document.addEventListener('DOMContentLoaded', () => {
    const certificates = document.querySelectorAll('.certificate img');
    const popup = document.getElementById('popup');
    const popupImg = document.getElementById('popup-img');

    certificates.forEach(cert => {
        cert.addEventListener('click', () => {
            popupImg.src = cert.src;
            popup.classList.add('active');
        });
    });

    popup.addEventListener('click', () => {
        popup.classList.remove('active');
    });
});

document.addEventListener('DOMContentLoaded', () => {
    emailjs.init('chauhanabhishek2819@gmail.com'); // Replace 'YOUR_USER_ID' with your EmailJS user ID

    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const formData = {
            name: this.name.value,
            email: this.email.value,
            phone: this.phone.value
        };

        emailjs.send('service_jjstvf3', 'template_u9ckq58', formData)
            .then(() => {
                alert('Your message has been sent successfully!');
                contactForm.reset();
            })
            .catch((error) => {
                console.error('Error sending email:', error);
                alert('There was an error sending your message. Please try again later.');
            });
    });
});