let table = document.getElementById("table");
let buton = document.getElementById("click");
let rowCount = 2;
buton.onclick = function () {
    let row = table.insertRow(-1);
    let item1 = row.insertCell(0);
    let item2 = row.insertCell(1);
    let item3 = row.insertCell(2);
    item1.innerHTML ='cell 1 row 1';
    item2.innerHTML = 'Cell 2 row ' + rowCount;
    item3.innerHTML = 'Cell 3 row ' + rowCount;
    rowCount++;
}