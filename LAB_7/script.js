// ============================================
// TASK 1: Mouse Hover Background Color Change
// ============================================

function changeColor(boxId, color) {
    const box = document.getElementById(boxId);
    box.classList.add('hovered');
    box.style.backgroundColor = color;
    box.style.borderColor = color;
    console.log(`Mouse entered ${boxId}: Color changed to ${color}`);
}

function resetColor(boxId) {
    const box = document.getElementById(boxId);
    box.classList.remove('hovered');
    box.style.backgroundColor = '#f5f5dc';
    box.style.borderColor = '#8d6e63';
    console.log(`Mouse left ${boxId}: Color reset`);
}


// ============================================
// TASK 2: Form Validation
// ============================================

function validateForm(event) {
    event.preventDefault();
    
    // Clear previous error messages
    document.querySelectorAll('.error-message').forEach(el => el.textContent = '');
    document.getElementById('successMessage').style.display = 'none';
    
    let isValid = true;
    
    // Validate Full Name
    const fullName = document.getElementById('fullName').value.trim();
    if (fullName === '') {
        document.getElementById('nameError').textContent = '⚠ Full name is required';
        isValid = false;
    }
    
    // Validate Email
    const email = document.getElementById('email').value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === '') {
        document.getElementById('emailError').textContent = '⚠ Email address is required';
        isValid = false;
    } else if (!emailRegex.test(email)) {
        document.getElementById('emailError').textContent = '⚠ Please enter a valid email address';
        isValid = false;
    }
    
    // Validate Phone
    const phone = document.getElementById('phone').value.trim();
    const phoneRegex = /^[0-9]{10}$/;
    if (phone === '') {
        document.getElementById('phoneError').textContent = '⚠ Phone number is required';
        isValid = false;
    } else if (!phoneRegex.test(phone)) {
        document.getElementById('phoneError').textContent = '⚠ Please enter a valid 10-digit phone number';
        isValid = false;
    }
    
    // Validate Subject
    const subject = document.getElementById('subject').value.trim();
    if (subject === '') {
        document.getElementById('subjectError').textContent = '⚠ Subject is required';
        isValid = false;
    }
    
    // Validate Message
    const message = document.getElementById('message').value.trim();
    if (message === '') {
        document.getElementById('messageError').textContent = '⚠ Message is required';
        isValid = false;
    } else if (message.length < 10) {
        document.getElementById('messageError').textContent = '⚠ Message must be at least 10 characters long';
        isValid = false;
    }
    
    // Show success message if valid
    if (isValid) {
        document.getElementById('successMessage').style.display = 'block';
        document.getElementById('validationForm').reset();
        console.log('Form submitted successfully!');
    } else {
        console.log('Form validation failed');
    }
}


// ============================================
// TASK 3: Image Slideshow
// ============================================

let currentSlide = 0;

const slides = [
    {
        image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&h=500&fit=crop',
        caption: 'Ancient Library Collection'
    },
    {
        image: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=800&h=500&fit=crop',
        caption: 'Modern Reading Space'
    },
    {
        image: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=800&h=500&fit=crop',
        caption: 'Classic Book Collection'
    },
    {
        image: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=800&h=500&fit=crop',
        caption: 'Study Corner'
    }
];

function changeSlide(direction) {
    // Update current slide index
    currentSlide += direction;
    
    // Loop back to start/end
    if (currentSlide >= slides.length) {
        currentSlide = 0;
    } else if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    }
    
    // Update image and caption
    document.getElementById('slideImage').src = slides[currentSlide].image;
    document.getElementById('slideCaption').textContent = slides[currentSlide].caption;
    
    // Update indicators
    updateIndicators();
    
    console.log(`Slide changed to: ${currentSlide + 1}`);
}

function updateIndicators() {
    // Remove active class from all indicators
    document.querySelectorAll('.indicator').forEach((indicator, index) => {
        indicator.classList.remove('active');
        if (index === currentSlide) {
            indicator.classList.add('active');
        }
    });
}

// Initialize indicators on page load
document.addEventListener('DOMContentLoaded', function() {
    updateIndicators();
});


// ============================================
// TASK 4: Progress Bar
// ============================================

function updateProgress() {
    const checkboxes = document.querySelectorAll('.task-item input[type="checkbox"]');
    const totalTasks = checkboxes.length;
    let completedTasks = 0;
    
    checkboxes.forEach(checkbox => {
        if (checkbox.checked) {
            completedTasks++;
        }
    });
    
    const percentage = (completedTasks / totalTasks) * 100;
    
    // Update progress bar width
    document.getElementById('progressBar').style.width = percentage + '%';
    
    // Update percentage text
    document.getElementById('overallPercentage').textContent = Math.round(percentage) + '%';
    
    console.log(`Progress: ${completedTasks}/${totalTasks} tasks completed (${Math.round(percentage)}%)`);
}