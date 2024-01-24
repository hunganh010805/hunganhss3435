let names = ["Nguyễn Đức Hùng Anh", "Nguyễn Thị Xuân", "Phan Đình Cao Hoàng"];
let ul = document.createElement("ul");
for(let key in names){
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(names[key]));
    ul.appendChild(li);
}
document.body.appendChild(ul);
