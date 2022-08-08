var ddMain = document.getElementById("dropdownMain");
var ddOne = document.getElementById("dropdownOption1");
var ddTwo = document.getElementById("dropdownOption2");
var ddThree = document.getElementById("dropdownOption3");
var ddFour = document.getElementById("dropdownOption4");
var searchbar = document.getElementById("homepageSearch");
var submitBtn = document.getElementById("homepageSubmit");

function ddReplace1() {
    ddMain.textContent = ddOne.textContent
    searchbar.setAttribute("placeholder", "Ex. Akita, Shiba Inu, Terrier")
    ddMain.setAttribute("data-search", "breed=")
};
function ddReplace2() {
    ddMain.textContent = ddTwo.textContent
    searchbar.setAttribute("placeholder", "Ex. Energetic, Calm, Lots of Activity")
    ddMain.setAttribute("data-search", "energy_level_category=")
};
function ddReplace3() {
    ddMain.textContent = ddThree.textContent
    searchbar.setAttribute("placeholder", "Ex. Daily, Occasional, Weekly")
    ddMain.setAttribute("data-search", "grooming_frequency_category=")
};
function ddReplace4() {
    ddMain.textContent = ddFour.textContent
    searchbar.setAttribute("placeholder", "Ex. Clever, Loyal, Playful")
    ddMain.setAttribute("data-search", "temperament=")
};

function search() {
    console.log(searchbar.textContent)
    window.location.replace(window.location.href + "search?" + ddMain.dataset.search + searchbar.value)
}

submitBtn.addEventListener("click", search)
ddOne.addEventListener("click", ddReplace1);
ddTwo.addEventListener("click", ddReplace2);
ddThree.addEventListener("click", ddReplace3);
ddFour.addEventListener("click", ddReplace4);
