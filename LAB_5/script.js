let rowCount = 1;

// Add new row dynamically
function addRow() {
    const tableBody = document
        .getElementById("empTable")
        .getElementsByTagName("tbody")[0];

    const row = tableBody.insertRow();

    row.innerHTML = `
        <td><input type="text"></td>
        <td><input type="text"></td>
        <td><input type="date"></td>
        <td><input type="date"></td>
        <td>
            <select>
                <option value="">Select Skills</option>
                <option>Java</option>
                <option>Python</option>
                <option>Web Development</option>
                <option>Data Science</option>
            </select>
        </td>
        <td>
            <input type="radio" name="job${rowCount}"> Full Time
            <input type="radio" name="job${rowCount}"> Part Time
        </td>
        <td>
            <span class="delete" onclick="deleteRow(this)">X</span>
        </td>
    `;
    rowCount++;
}

// Delete a row
function deleteRow(element) {
    const tableBody = document
        .getElementById("empTable")
        .getElementsByTagName("tbody")[0];

    if (tableBody.rows.length === 1) {
        alert("Table is empty");
        return;
    }
    element.closest("tr").remove();
}

// Submit validation
function submitForm() {
    const rows = document.querySelectorAll("#empTable tbody tr");
    let validRowFound = false;

    const today = new Date();
    today.setHours(0, 0, 0, 0); // remove time

    for (let row of rows) {
        const company = row.cells[0].querySelector("input").value.trim();
        const designation = row.cells[1].querySelector("input").value.trim();
        const joinDateInput = row.cells[2].querySelector("input").value;
        const endDateInput = row.cells[3].querySelector("input").value;
        const skill = row.cells[4].querySelector("select").value;

        const radios = row.cells[5].querySelectorAll("input[type=radio]");
        const jobSelected = Array.from(radios).some(r => r.checked);

        // Skip empty rows silently
        if (
            company === "" &&
            designation === "" &&
            joinDateInput === "" &&
            endDateInput === "" &&
            skill === "" &&
            !jobSelected
        ) {
            continue;
        }

        // Check all fields filled
        if (
            company === "" ||
            designation === "" ||
            joinDateInput === "" ||
            endDateInput === "" ||
            skill === "" ||
            !jobSelected
        ) {
            alert("Please complete all fields in a row.");
            return;
        }

        const joinDate = new Date(joinDateInput);
        const endDate = new Date(endDateInput);

        // Future date validation
        if (joinDate > today || endDate > today) {
            alert("Joining date and End date cannot be in the future.");
            return;
        }

        // Logical date validation
        if (endDate < joinDate) {
            alert("End date cannot be before Joining date.");
            return;
        }

        // If we reach here → row is fully valid
        validRowFound = true;
    }

    if (!validRowFound) {
        alert("Enter at least one valid row.");
        return;
    }

    // All validations passed
    window.location.href = "nextpage.html";
}
