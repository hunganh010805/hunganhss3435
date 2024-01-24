let deletes = document.querySelectorAll(".click");
deletes.forEach(function(button) {
    button.onclick = function() {
        let row = this.parentNode.parentNode; 
        row.parentNode.removeChild(row);
    };
});