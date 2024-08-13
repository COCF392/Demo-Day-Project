// This file is used by the home page
const schoolSelector = document.querySelector("select");
const subHeaderText = document.getElementById("sub_header");
const sideBarButton = document.getElementById("side_carrot");
const sideNav = document.getElementById("side_nav");
const welcomeBox = document.getElementById("welcome_box");
let schoolArray = [];

fetch("https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/us-public-schools/records?limit=100&refine=state%3A%22NY%22")
    .then(((response) => {
        return response.json();
    }))
    .then((schoolData) => {

        // storing the schools into an array and sorting them
        for (let i = 0; i < schoolData.results.length; i++) {
            var newSchool = document.createElement("option");
            newSchool.innerText = schoolData.results[i].name;

            //the .innerText is stored so that we can properly sort the array and get the schools to appear alphabetically
            schoolArray.push([newSchool.innerText, newSchool]); 
            schoolArray.sort()
        }

        // adding the sorted school in the selector
        for (let i = 0; i < schoolArray.length; i++) {
            schoolSelector.appendChild(schoolArray[i][1]);
        }
    })

schoolSelector.addEventListener("input", () => {
    subHeaderText.innerText = `You are currently in the ${schoolSelector.value} forum.`
})

// moving the side_bar left and right
sideBarButton.addEventListener("click", () => {
    sideNav.classList.toggle("move_left");
    sideBarButton.classList.toggle("flip_carrot");
})