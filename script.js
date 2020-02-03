let inputFields = document.querySelectorAll("input") 

// let submitButton = document.querySelector("#submit-button")

let parkingForm = document.querySelector("#parking-form")

let input = document.querySelectorAll(".input-field")



parkingForm.addEventListener("submit", function(e) {
    e.preventDefault();
    for(let field of inputFields) {
        if (field.value.length > 0) {
            field.parentElement.classList.contains("input-valid")
            
        //  if  (field.parentElement.classList.add("input-valid"))
        //         {}
            }
        else {
            field.parentElement.classList.add("input-invalid")

            
            let newEl = document.createElement("div")
            let text = document.createTextNode("Required field")
            let parent = field.parentNode 
            newEl.appendChild(text)
            parent.appendChild(newEl)
               
                
                }

            // else {
            // newEl.remove()
}})


// parkingForm.addEventListener("submit", function(e) {
//     e.preventDefault();
//     for(let field of inputFields) {
//         if (field.value.length === 0) {
//         name.setAttribute("required", "")
        // inputFields.innerText = "required"
//         }
//         // }
//         //     field.parentElement.classList.add("input-invalid")  
//         //     name.innerText = "required"
//     }
            
// })

// name.getAttribute()

// name.attribute.required = true

// inputFields.addEventListener("submit", function(){
//     alert("is required")
// })

// let box = document.querySelector("#name-field")

// box.classList.add("input-invalid")
// // turn box red


// let days = document.querySelector("#days-field")


// // turn box green






// check each box to see if there is any input, if there is then it is able to submit

