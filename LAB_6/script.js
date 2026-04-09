// ============================================
// CALCULATOR FUNCTIONS (Task 1)
// ============================================

function calculate(operation) {
    const num1 = parseFloat(document.getElementById('number1').value);
    const num2 = parseFloat(document.getElementById('number2').value);
    const resultDiv = document.getElementById('result');

    // Validation
    if (isNaN(num1) || isNaN(num2)) {
        resultDiv.style.display = 'block';
        resultDiv.className = 'alert alert-danger text-center';
        resultDiv.innerHTML = '⚠️ Please enter valid numbers in both fields!';
        return;
    }

    let result;
    let operationSymbol;

    switch(operation) {
        case 'add':
            result = num1 + num2;
            operationSymbol = '+';
            break;
        case 'subtract':
            result = num1 - num2;
            operationSymbol = '-';
            break;
        case 'multiply':
            result = num1 * num2;
            operationSymbol = '×';
            break;
        case 'divide':
            if (num2 === 0) {
                resultDiv.style.display = 'block';
                resultDiv.className = 'alert alert-danger text-center';
                resultDiv.innerHTML = '⚠️ Cannot divide by zero!';
                return;
            }
            result = num1 / num2;
            operationSymbol = '÷';
            break;
    }

    resultDiv.style.display = 'block';
    resultDiv.className = 'alert alert-success text-center';
    resultDiv.innerHTML = `
        <h4>Result</h4>
        <p style="font-size: 24px; margin: 0;">
            ${num1} ${operationSymbol} ${num2} = <strong>${result.toFixed(2)}</strong>
        </p>
    `;
}


// ============================================
// MARKS CARD FUNCTIONS (Task 2)
// ============================================

function calculateMarks(event) {
    event.preventDefault();

    const subject1 = parseFloat(document.getElementById('subject1').value);
    const subject2 = parseFloat(document.getElementById('subject2').value);
    const subject3 = parseFloat(document.getElementById('subject3').value);
    const subject4 = parseFloat(document.getElementById('subject4').value);
    const subject5 = parseFloat(document.getElementById('subject5').value);
    const subject6 = parseFloat(document.getElementById('subject6').value);

    const marks = [subject1, subject2, subject3, subject4, subject5, subject6];

    // Validation
    for (let i = 0; i < marks.length; i++) {
        if (isNaN(marks[i]) || marks[i] < 0 || marks[i] > 100) {
            alert('Please enter valid marks between 0 and 100 for all subjects!');
            return;
        }
    }

    // Calculate total and average
    const total = marks.reduce((sum, mark) => sum + mark, 0);
    const average = total / marks.length;

    // Determine result
    let result;
    let resultClass;
    if (marks.every(mark => mark >= 33) && average >= 40) {
        result = 'PASS ✅';
        resultClass = 'text-success';
    } else {
        result = 'FAIL ❌';
        resultClass = 'text-danger';
    }

    // Display marks table
    const subjectNames = ['English', 'Mathematics', 'Science', 'Social Studies', 'Computer Science', 'Hindi'];
    const tableBody = document.getElementById('marksTableBody');
    tableBody.innerHTML = '';
    
    marks.forEach((mark, index) => {
        const row = tableBody.insertRow();
        row.innerHTML = `
            <td>${subjectNames[index]}</td>
            <td>${mark}</td>
        `;
    });

    document.getElementById('totalMarks').textContent = total;
    document.getElementById('average').textContent = average.toFixed(2) + '%';
    document.getElementById('finalResult').innerHTML = `<span class="${resultClass}"><strong>${result}</strong></span>`;
    
    document.getElementById('marksResult').style.display = 'block';
}

// ============================================
// MOVIE TICKET BOOKING FUNCTIONS (Task 3)
// ============================================

// Toggle Movie Gallery
function toggleMovieGallery() {
    const gallery = document.getElementById('movieGallery');
    if (gallery.style.display === 'none') {
        gallery.style.display = 'block';
    } else {
        gallery.style.display = 'none';
    }
}

// Select Movie from Gallery
function selectMovie(movieName, posterImage) {
    document.getElementById('movieSelect').value = movieName;
    document.getElementById('selectedMovie').value = movieName;
    document.getElementById('movieGallery').style.display = 'none';
    
    console.log('Movie selected: ' + movieName);
    alert('Great choice! You selected: ' + movieName);
}

// Event Handler: Click
function handleButtonClick() {
    console.log('Button clicked! Processing booking...');
}

// Event Handler: Submit
function submitMovieForm(event) {
    event.preventDefault();

    const name = document.getElementById('customerName').value;
    const email = document.getElementById('email').value;
    const movie = document.getElementById('selectedMovie').value;
    const tickets = document.getElementById('numTickets').value;
    const seatType = document.getElementById('seatType').selectedOptions[0].text;
    const showTime = document.getElementById('showTime').value;
    const totalPrice = document.getElementById('totalPrice').textContent;

    // Validation
    if (!name || !movie) {
        alert('Please fill in all required fields!');
        return;
    }

    // Email validation (only if email is provided)
    if (email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address!');
            return;
        }
    }

    // Display confirmation
    let confirmationDetails = `
        <p><strong>Name:</strong> ${name}</p>
        ${email ? `<p><strong>Email:</strong> ${email}</p>` : ''}
        <p><strong>Movie:</strong> ${movie}</p>
        <p><strong>Tickets:</strong> ${tickets}</p>
        <p><strong>Seat Type:</strong> ${seatType}</p>
        <p><strong>Show Time:</strong> ${showTime}</p>
        <p><strong>Total Amount:</strong> ₹${totalPrice}</p>
    `;

    if (email) {
        confirmationDetails += `<p style="margin-top: 15px;">A confirmation email has been sent to <strong>${email}</strong></p>`;
    }

    document.getElementById('confirmationDetails').innerHTML = confirmationDetails;
    document.getElementById('bookingConfirmation').style.display = 'block';
    
    // Hide form
    document.getElementById('movieForm').style.display = 'none';
}

// Event Handler: Mouseover on Movie Poster
function handlePosterMouseover(card) {
    console.log('Mouse over the movie poster!');
}

// Event Handler: Mouseout on Movie Poster
function handlePosterMouseout(card) {
    console.log('Mouse left the movie poster!');
}

function updateTicketPrice() {
    const tickets = parseInt(document.getElementById('numTickets').value);
    const seatPrice = parseInt(document.getElementById('seatType').value);
    const total = tickets * seatPrice;
    document.getElementById('totalPrice').textContent = total;
}

// Event Handler: Contextmenu (Right-click)
document.addEventListener('DOMContentLoaded', function() {
    if (document.getElementById('movieForm')) {
        document.getElementById('movieForm').addEventListener('contextmenu', function(event) {
            event.preventDefault();
            const contextDiv = document.getElementById('contextMessage');
            contextDiv.textContent = '⚠️ Right-click is disabled on this form for security purposes!';
            contextDiv.style.display = 'block';
            
            setTimeout(() => {
                contextDiv.style.display = 'none';
            }, 3000);
        });
    }
});