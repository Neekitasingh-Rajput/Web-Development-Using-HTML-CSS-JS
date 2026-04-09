function addRow(){

let table=document.getElementById("studentTable");

let row=table.insertRow();

row.innerHTML=
"<td><input type='text' placeholder='Student Name'></td>"+
"<td><input type='number' placeholder='USN/ID'></td>"+
"<td><select><option>Select Course</option><option>BScDM</option><option>BScDS</option></select></td>"+
"<td><input type='number' placeholder='Marks'></td>";
}

