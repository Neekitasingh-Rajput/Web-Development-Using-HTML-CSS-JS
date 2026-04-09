// Show specific section
function showSection(sectionId) {
    // Hide all sections
    const sections = document.querySelectorAll('.form-section');
    sections.forEach(section => {
        section.classList.remove('active');
    });

    // Remove active class from all tabs
    const tabs = document.querySelectorAll('.tab-btn');
    tabs.forEach(tab => {
        tab.classList.remove('active');
    });

    // Show selected section
    document.getElementById(sectionId).classList.add('active');

    // Add active class to clicked tab
    event.target.classList.add('active');
}

// Validation for Personal Information
function validatePersonal() {
    const name = document.getElementById('studentName').value.trim();
    const dob = document.getElementById('dob').value;
    const gender = document.querySelector('input[name="gender"]:checked');
    const category = document.getElementById('category').value;

    if (name === '') {
        alert('Please enter student name');
        document.getElementById('studentName').focus();
        return false;
    }

    if (dob === '') {
        alert('Please select date of birth');
        document.getElementById('dob').focus();
        return false;
    }

    if (!gender) {
        alert('Please select gender');
        return false;
    }

    if (category === '') {
        alert('Please select category');
        document.getElementById('category').focus();
        return false;
    }

    return true;
}

// Validation for Academic Details
function validateAcademic() {
    const schoolName = document.getElementById('schoolName').value.trim();
    const classApplying = document.getElementById('classApplying').value;
    const percentage = document.getElementById('previousPercentage').value;

    if (schoolName === '') {
        alert('Please enter current school name');
        document.getElementById('schoolName').focus();
        return false;
    }

    if (classApplying === '') {
        alert('Please select class applying for');
        document.getElementById('classApplying').focus();
        return false;
    }

    if (percentage === '' || percentage < 0 || percentage > 100) {
        alert('Please enter valid percentage (0-100)');
        document.getElementById('previousPercentage').focus();
        return false;
    }

    return true;
}

// Validation for Parent Details
function validateParent() {
    const parentName = document.getElementById('parentName').value.trim();
    const contact = document.getElementById('parentContact').value.trim();
    const serviceQuota = document.querySelector('input[name="serviceQuota"]:checked');

    if (parentName === '') {
        alert('Please enter parent/guardian name');
        document.getElementById('parentName').focus();
        return false;
    }

    if (contact === '' || contact.length !== 10 || !/^\d+$/.test(contact)) {
        alert('Please enter valid 10-digit contact number');
        document.getElementById('parentContact').focus();
        return false;
    }

    if (!serviceQuota) {
        alert('Please select service quota eligibility');
        return false;
    }

    return true;
}

// Validate and move to next section
function validateAndNext(currentSection, nextSection) {
    let isValid = false;

    if (currentSection === 'personal') {
        isValid = validatePersonal();
    } else if (currentSection === 'academic') {
        isValid = validateAcademic();
    }

    if (isValid) {
        showSectionByName(nextSection);
    }
}

// Show section by name (for button navigation)
function showSectionByName(sectionName) {
    // Hide all sections
    const sections = document.querySelectorAll('.form-section');
    sections.forEach(section => {
        section.classList.remove('active');
    });

    // Remove active class from all tabs
    const tabs = document.querySelectorAll('.tab-btn');
    tabs.forEach(tab => {
        tab.classList.remove('active');
    });

    // Show selected section
    document.getElementById(sectionName).classList.add('active');

    // Add active class to corresponding tab
    const targetTab = Array.from(tabs).find(tab => 
        tab.getAttribute('onclick').includes(sectionName)
    );
    if (targetTab) {
        targetTab.classList.add('active');
    }
}

// Submit form
function submitForm() {
    if (!validateParent()) {
        return;
    }

    // Show success page instead of alert
    showSectionByName('success');
}