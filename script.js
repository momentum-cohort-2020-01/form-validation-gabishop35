let inputFields = document.querySelectorAll("input")

// let submitButton = document.querySelector("#submit-button")

let parkingForm = document.querySelector("#parking-form")

let input = document.querySelectorAll(".input-field")



parkingForm.addEventListener("submit", function (e) {
    e.preventDefault();
    for (let field of inputFields) {
        if (field.value.length > 0) {
            field.parentElement.classList.add("input-valid")
            let lastChild = field.parentElement.lastElementChild
                if (lastChild.classList.contains("error")) {
                    // console.log("error")
                    lastChild.remove() 
                }
        }
        else {
            field.parentElement.classList.remove("input-valid")
            field.parentElement.classList.add("input-invalid")
            let lastChild = field.parentElement.lastElementChild
            if (lastChild.classList.contains("error")) {}
            else {
            let newEl = document.createElement("div")
            newEl.classList.add("error")
            let text = document.createTextNode("Required field")
            let parent = field.parentNode
            newEl.appendChild(text)
            parent.appendChild(newEl)
        }
    }
    }

})



// ***** parseInt *******

// name.getAttribute()

// name.attribute.required = true

// let box = document.querySelector("#name-field")

// let days = document.querySelector("#days-field")

// check each box to see if there is any input, if there is then it is able to submit
