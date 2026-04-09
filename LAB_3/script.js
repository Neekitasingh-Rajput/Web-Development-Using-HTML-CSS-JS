// Q1
function addAndAlert() {
    let x = 10;
    let y = 20;
    let z = x + y;
    alert("Result (z = x + y): " + z);
}

// Q2
let firstName = "Christ";
let lastName = "University";
let pinCode = 560029;

// Q3
function swapNumbers() {
    let a = Number(document.getElementById("num1").value);
    let b = Number(document.getElementById("num2").value);

    let temp = a;
    a = b;
    b = temp;

    document.getElementById("swapResult").innerHTML =
        "After swapping:<br>a = " + a + "<br>b = " + b;
}

// Q4
function calculateFactorial() {
    let n = Number(document.getElementById("factNum").value);
    let fact = 1;

    for (let i = 1; i <= n; i++) {
        fact *= i;
    }

    document.getElementById("factorialResult").innerHTML =
        "Factorial of " + n + " is: " + fact;
}

// Q5
function showDateTime() {
    const days = ["Sunday","Monday","Tuesday","Wednesday",
                  "Thursday","Friday","Saturday"];

    let now = new Date();
    let day = days[now.getDay()];

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    let period = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;

    document.getElementById("dateTimeResult").innerHTML =
        "Today is: " + day + ".<br>" +
        "Current time is: " + hours + " " + period +
        " : " + minutes + " : " + seconds;
}
