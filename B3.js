let h1 = document.getElementById("demo");
let buton = document.getElementById("click");
buton.onclick = function(){
    h1.innerText = "Text after change";
}
buton.style.backgroundColor = "blue";
buton.style.height = "35px";
buton.style.width = "147px";
buton.style.borderRadius = "5px";