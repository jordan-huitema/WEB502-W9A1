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
            removeButton.addEventListener("click", function () {            // listen for click on removeButton's element, if click registered
                this.parentElement.remove()                                     //remove parent li element
            })
        } else {                                                        //else
            this.getElementsByClassName("deleteButton")[0].remove();        //remove first element with 'deleteButton' class name
        }
    });
    input.value = ""                                                // set value of input vars element as "" (nothing)
}

function addListAfterClick() {                                  // create addListAfterClick function
    if (inputLength() > 0) {                                        //if click is more than 0
        createListElemnet()                                             // run createListElement func
    }
}

function addListAfterPress(event) {                             // create addListAfterPress func and pass press event as first param
    if (inputLength() > 0 && event.keyCode === 13) {                //if input length is greater than 0 and key press is ENTER
        createListElemnet()                                             // run createListElement func
    }
}

button.addEventListener("click", addListAfterClick)             // listen for click on button elements, run addListAfterClick func

input.addEventListener("keypress", addListAfterPress)           // listen for key press, run addListAfterClick func