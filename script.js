// console.log('Add validation!');

let inputFields = document.querySelectorAll(".field") 

let submitButton = document.querySelector("#submit-button")

let parkingForm = document.querySelector("#parking-form")







parkingForm.addEventListener("submit", function(e) {
    e.preventDefault();
    for(let field of inputFields) {
        if (field.value.length > 0) {
        field.parentElement.classList.add("input-valid")
        }
        else {
            field.parentElement.classList.add("input-invalid")
        }
    }
    console.log(e);

});

// let box = document.querySelector("#name-field")

// box.classList.add("input-invalid")
// // turn box red


// let days = document.querySelector("#days-field")


// // turn box green






// check each box to see if there is any input, if there is then it is able to submit

