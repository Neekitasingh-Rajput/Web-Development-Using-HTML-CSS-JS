// Select / Unselect All
function toggleSelectAll() {
    let master = document.getElementById("selectAll").checked;
    let items = document.getElementsByClassName("item");

    for (let i = 0; i < items.length; i++) {
        items[i].checked = master;
    }
}

// If one item unchecked, master unchecks
function checkMaster() {
    let master = document.getElementById("selectAll");
    let items = document.getElementsByClassName("item");

    for (let i = 0; i < items.length; i++) {
        if (!items[i].checked) {
            master.checked = false;
            return;
        }
    }
    master.checked = true;
}

// Add selected to wishlist
function addToWishlist() {
    let items = document.getElementsByClassName("item");
    let table = document.getElementById("wishlistTable");

    for (let i = 0; i < items.length; i++) {
        if (items[i].checked) {
            let row = table.insertRow(-1);
            let cell = row.insertCell(0);
            cell.innerHTML = items[i].value;
        }
    }
}
