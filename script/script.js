const mainCourse = document.getElementById("maincouse");
const dessert = document.getElementById("desserts");
const beverages = document.getElementById("beverages");
const titles = document.getElementsByClassName("title");
function chooseMainCourse() {
    mainCourse.style.display = "flex";
    mainCourse.style.transition = "all 0.3s ease-in-out";
    beverages.style.display = "none";
    dessert.style.display = "none";
    titles[1].style.color = "black";
    titles[1].style.fontSize = "2rem";
    titles[1].style.lineHeight = "2.5rem";
    titles[0].style.color = "#E6890B";
    titles[0].style.fontSize = "2.5rem";
    titles[0].style.lineHeight = "3rem";
    titles[2].style.color = "black";
    titles[2].style.fontSize = "2rem";
    titles[2].style.lineHeight = "2.5rem";
}

function chooseDessert() {
    mainCourse.style.display = "none";
    beverages.style.display = "none";
    dessert.style.display = "flex";
    dessert.style.transition = "all 0.3s ease-in-out";
    titles[0].style.color = "black";
    titles[0].style.fontSize = "2rem";
    titles[0].style.lineHeight = "2.5rem";
    titles[1].style.color = "#E6890B";
    titles[1].style.fontSize = "2.5rem";
    titles[1].style.lineHeight = "3rem";
    titles[2].style.color = "black";
    titles[2].style.fontSize = "2rem";
    titles[2].style.lineHeight = "2.5rem";
}

function chooseBeverage() {
    mainCourse.style.display = "none";
    beverages.style.display = "flex";
    dessert.style.display = "none";
    beverages.style.transition = "all 0.3s ease-in-out";
    titles[0].style.color = "black";
    titles[0].style.fontSize = "2rem";
    titles[0].style.lineHeight = "2.5rem";
    titles[2].style.color = "#E6890B";
    titles[2].style.fontSize = "2.5rem";
    titles[2].style.lineHeight = "3rem";
    titles[1].style.color = "black";
    titles[1].style.fontSize = "2rem";
    titles[1].style.lineHeight = "2.5rem";
}

function burger() {
    const menu = document.getElementById("container");
    const more = document.getElementById("burger");
    menu.classList.toggle("new");
    more.classList.toggle("change");
}