const userProfile = {
    name: "Darkhan",
    birthYear: 2008,
    isDev: true,
    hobbies: ["Poker", "Pool"]
};

let curYear = 2026;
let age = curYear - userProfile.birthYear;

let hobbies = userProfile.hobbies.length;

console.log("Name of uesr: ", userProfile.name);
console.log("Current age of user: ", age);
console.log("Amount of hobbies: ", hobbies)

const btn = document.getElementById("btn");
const nameInput = document.getElementById("name");
const yearInput = document.getElementById("year");

btn.addEventListener("click", (event) => {
    event.preventDefault();

    userProfile.name = nameInput.value;
    userProfile.birthYear = Number(yearInput.value);
    
    console.log("Updated userProfile: ", userProfile);
    console.log("Current age: ", curYear - userProfile.birthYear)
});

const addItembtn = document.getElementById("addHobby");
const newHobby = document.getElementById("newHobby");
const list = document.getElementById("listOfHobbies");

addItembtn.addEventListener("click", (event) => {
    event.preventDefault();
    
    const text = newHobby.value.trim();

    if (text !== "") {
        const newLi = document.createElement("li");

        newLi.textContent = text;

        list.appendChild(newLi);

        newHobby.value = "";
    } else {
        alert("Enter a hobby")
    }
})

const del = document.getElementById("removeitem");

del.addEventListener("click", (event) => {
    event.preventDefault();

    const lastItem = list.lastElementChild;

    if (lastItem) {
        lastItem.remove();
    } else {
        alert("No element in list")
    }
})