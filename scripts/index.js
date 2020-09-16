var button = document.getElementById("enter")                   // set 'button' var as element with 'enter' id
var input = document.getElementById("input")                    // set 'input' var as element with 'input' id
var ul = document.querySelector("ul")                           // set 'ul' var as first listed ul element

function inputLength() {                                        // create inputLength func
    return input.nodeValue.length;                                  //return length of input vars element value
}

function createListElemnet() {                                  // create createListElement func
    var li = document.createElement("li");                          // set 'li' var as a new li element 
    li.appendChild(document.createTextNode(input.value));           // adds value of input var's element to li vars element value
    ul.appendChild(li);                                             // adds li var's element to ul vars element's value
    li.addEventListener("click", function () {                      // listen for click event on li element
        var finished = this.classList.toggle("done")
        var removeButton = document.createElement("button");
        removeButton.classList.add("deleteButton");
        if (finished) {
            removeButton.appendChild(document.createTextNode("remove"))
            removeButton.classList = "deleteButton"
            li.appendChild(removeButton)
            removeButton.addEventListener("click", function () {
                this.parentElement.remove()
            })
        } else {
            this.getElementsByClassName("deleteButton")[0].remove();
        }
    });
    input.value = ""
}