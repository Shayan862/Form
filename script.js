document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registrationForm');

    form.addEventListener('submit', function(event) {
        // Prevent form from submitting
        event.preventDefault();

        // Get form values
        const fullName = document.getElementById('fullName').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;
        const gender = document.querySelector('input[name="gender"]:checked');
        const feedback = document.getElementById('feedback').value;
        const resume = document.getElementById('resume').files[0];

        // Clear previous errors
        clearErrors();

        // Validation checks
        let valid = true;

        // Full Name Validation
        if (fullName.length < 5) {
            showError('nameError', 'Name must be at least 5 characters long.');
            valid = false;
        }

        // Email Validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            showError('emailError', 'Enter a valid email address.');
            valid = false;
        }

        // Phone Number Validation
        const phoneRegex = /^\d{10}$/;
        if (!phoneRegex.test(phone) || phone === '1234567890') {
            showError('phoneError', 'Enter a valid 10-digit phone number (not 1234567890).');
            valid = false;
        }

        // Password Validation
        if (password.length < 8 || password === 'password' || password === fullName) {
            showError('passwordError', 'Password must be at least 8 characters long and cannot be "password" or your name.');
            valid = false;
        }

        // Confirm Password Validation
        if (password !== confirmPassword) {
            showError('confirmPasswordError', 'Passwords do not match.');
            valid = false;
        }

        // Gender Validation
        if (!gender) {
            showError('genderError', 'Please select your gender.');
            valid = false;
        }

        // Feedback Validation (optional)
        if (feedback.trim() === '') {
            showError('feedbackError', 'Please provide your feedback.');
            valid = false;
        }

        // Resume Upload Validation
        if (!resume || !resume.name.match(/\.(pdf|doc|docx)$/)) {
            showError('resumeError', 'Please upload a valid resume file (.pdf, .doc, .docx).');
            valid = false;
        }

        // If valid, show success message and reset form
        if (valid) {
            alert('Form submitted successfully!');
            form.reset();  // Reset form fields
        }
    });

    function showError(id, message) {
        document.getElementById(id).textContent = message;
    }

    function clearErrors() {
        document.getElementById('nameError').textContent = '';
        document.getElementById('emailError').textContent = '';
        document.getElementById('phoneError').textContent = '';
        document.getElementById('passwordError').textContent = '';
        document.getElementById('confirmPasswordError').textContent = '';
        document.getElementById('genderError').textContent = '';
        document.getElementById('feedbackError').textContent = '';
        document.getElementById('resumeError').textContent = '';
    }
});
