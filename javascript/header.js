const formSearch = document.querySelector(".form-search")
const glasses = document.querySelector(".fa-magnifying-glass")

const user = document.querySelector(".fa-user")
const ctn = document.querySelector(".ctn")

const icons = document.getElementById("icons")

const barIcon = document.getElementById("bars")
const sidebar = document.getElementById("main")

var checkClick = false

let count = 0
let countSearch = 0

barIcon.addEventListener("click", function() {
    if(count == 0) {
        sidebar.classList.remove("modal")
        count = 1
    } else 
    if(count == 1){
        sidebar.classList.add("modal")
        count = 0
    }
})

glasses.addEventListener("click", function() {
    if(countSearch == 0) {
        formSearch.classList.remove("modal")

        if(checkClick) {
            ctn.classList.add("modal");
            icons.classList.remove("margin");
            user.classList.remove("chocol_color");
            checkClick = false
        }
        countSearch = 1
    } else 
    if(countSearch == 1){
        formSearch.classList.add("modal")
        countSearch = 0
    }
})

user.addEventListener("click", function() {
    if(!checkClick) {
        ctn.classList.remove("modal");
        icons.classList.add("margin");
        user.classList.add("chocol_color");

        if(countSearch == 1){
            formSearch.classList.add("modal")
            countSearch = 0
        }
        checkClick = true
    } else if(checkClick) {
        ctn.classList.add("modal");
        icons.classList.remove("margin");
        user.classList.remove("chocol_color");
        checkClick = false
    }
})
// document.addEventListener("click", function(event) {
//     if (!formSearch.contains(event.target) && event.target !== glasses) {
//         formSearch.classList.add("modal");

//         glasses.classList.remove("chocol_color")
//     }
//     if (!ctn.contains(event.target) && event.target !== user) {
//         ctn.classList.add("modal");

//         icons.classList.remove("margin");

//         user.classList.remove("chocol_color");
//     }
// });


