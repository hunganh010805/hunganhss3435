let h1 = document.getElementById("demo");
let buton = document.getElementById("click");
buton.onclick = function(){
    h1.style.backgroundColor = "yellow";
    h1.style.color = "red";
}
buton.style.backgroundColor = "blue";
buton.style.height = "35px";
buton.style.width = "150px";
buton.style.borderRadius = "5px";