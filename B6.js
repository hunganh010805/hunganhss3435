let input = document.getElementById("input");
let buton = document.getElementById("click");
let ul = document.createElement("list");
buton.onclick = function(){
    let item = document.createElement("li");
    item.innerHTML = document.getElementById("input").value;
    document.getElementById("list").appendChild(item);
    document.getElementById("input").value = "";
}