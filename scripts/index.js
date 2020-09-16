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
        var finished = this.classList.toggle("done")                    // set 'finished' var toogle class func, toggles "done" class on target element
        var removeButton = document.createElement("button");            // set 'removeButton' var as new button element
        removeButton.classList.add("deleteButton");                     // add 'deleteButton' class attribute to removeButton's button element 
        if (finished) {                                                 // if finished var exists
            removeButton.appendChild(document.createTextNode("remove"))     // set removeButtons element value as "remove"
            removeButton.classList = "deleteButton"                         // set removeButtons element class as "deleteButton"
            li.appendChild(removeButton)                                    // add removeButton var's element to li var's element
            removeButton.addEventListener("click", function () {
                this.parentElement.remove()
            })
        } else {
            this.getElementsByClassName("deleteButton")[0].remove();
        }
    });
    input.value = ""
}

function addListAfterClick() {
    if (inputLength() > 0) {
        createListElemnet()
    }
}

function addListAfterPress(event) {
    if (inputLength() > 0 && event.keyCode === 13) {
        createListElemnet()
    }
}

button.addEventListener("click", addListAfterClick)

input.addEventListener("keypress", addListAfterPress)