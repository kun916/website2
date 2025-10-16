// Toggle floating popup menu with a class
function toggleMenu() {
  const menu = document.getElementById("menu");
  menu.classList.toggle("open");
}

// Contact Form Submission with SMTP.js
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  
  const name = this.name.value;
  const email = this.email.value;
  const message = this.message.value;
  
  // Show loading state
  const submitBtn = this.querySelector('button[type="submit"]');
  const originalText = submitBtn.textContent;
  submitBtn.textContent = 'Sending...';
  submitBtn.disabled = true;

  // Send email using SMTP.js
  Email.send({
    SecureToken: "YOUR_SECURE_TOKEN_HERE", // You'll get this from SMTPJS.com
    To: 'your-client-email@gmail.com', // Your client's email
    From: 'your-client-email@gmail.com', // Same as To email
    Subject: `${name} - message from website`,
    Body: `
      <h3>New Message from Website</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, '<br>')}</p>
      <hr>
      <p><em>Sent from website contact form</em></p>
    `
  }).then(
    response => {
      // Reset button
      submitBtn.textContent = originalText;
      submitBtn.disabled = false;
      
      if (response === 'OK') {
        // Success
        showSuccessPopup();
        this.reset(); // Clear form
      } else {
        // Error
        alert('Sorry, there was an error sending your message. Please try again.');
        console.error('SMTP.js Error:', response);
      }
    }
  );
});

// Success Popup Functions
function showSuccessPopup() {
  const popup = document.getElementById('successPopup');
  popup.classList.add('active');
}

// Close popup when X is clicked
document.querySelector('.close-popup').addEventListener('click', function() {
  document.getElementById('successPopup').classList.remove('active');
});

// Close popup when clicking outside
document.getElementById('successPopup').addEventListener('click', function(e) {
  if (e.target === this) {
    this.classList.remove('active');
  }
});

// Keep your existing hamburger menu function
function toggleMenu() {
  const menu = document.getElementById('menu');
  menu.classList.toggle('open');
}
