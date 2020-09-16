var button = document.getElementById("enter")
var input = document.getElementById("input")
var ul = document.querySelector("ul")

function inputLength() {
    return input.nodeValue.length;
}

function createListElemnet() {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    li.addEventListener("Click", function () {
        var finished = this.classList.toggle("done")
        var removeButton = document.createElement("button");
        removeButton.classList.add("deleteButton");
        if(finished) {
            removeButton.appendChild(document.createTextNode("remove"))
        }
    })
}