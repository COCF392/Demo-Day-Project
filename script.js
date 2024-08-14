// references and other vars
const schoolSelector = document.querySelector("select");
const subHeaderText = document.getElementById("sub_header");
const sideBarButton = document.getElementById("side_carrot");
const sideNav = document.getElementById("side_nav");
const welcomeBox = document.getElementById("welcome_box");
const forumHeader = document.getElementById("current_forum_header");
const titleInput = document.getElementById("title_input_box");
const bodyInput = document.getElementById("body_input_box");
const titleResult = document.getElementById("title_text_box");
const bodyResult = document.getElementById("body_text_box");
const submitButton = document.getElementById("submit_button");
const answerHeader = document.getElementById("answer_header");
let schoolArray = [];

// fetching the school API for names
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

// listening for selections in the homepage
if (subHeaderText) {
    schoolSelector.addEventListener("input", () => {
        subHeaderText.innerText = `You are currently in the ${schoolSelector.value} forum.`;
        localStorage.setItem("storedSchool", schoolSelector.value);
        
    });
}

// moving the side bar left and right
sideBarButton.addEventListener("click", () => {
    sideNav.classList.toggle("move_left");
    sideBarButton.classList.toggle("flip_carrot");
});

// submitting text to answer page
try {
    submitButton.addEventListener("click", () => {
        localStorage.setItem("storedTitle", titleInput.value);
        localStorage.setItem("storedBody", bodyInput.value);
    })
}
catch {
    console.log("Button not in page")
}

// for the answer page after text has been input
if (bodyResult && titleResult) {
    titleResult.innerText = localStorage.getItem("storedTitle");
    bodyResult.innerText = localStorage.getItem("storedBody");
}

// for the question page
if (forumHeader) {
    forumHeader.innerText = `Posting in ${localStorage.getItem("storedSchool")}`;
}

if (answerHeader) {
    answerHeader.innerText = `${localStorage.getItem("storedSchool")} Forum`
}