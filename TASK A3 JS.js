document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting normally

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Here you could add functionality to send the form data to a server
    alert(Thank you, ${name}! Your message has been sent.);
    
    // Optionally, clear the form after submission
    document.getElementById('contactForm').reset();
});