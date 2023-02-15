let items = {
    sides: [
        {name: "Miso Glazed Carrots", type: "sides", favorite: false},
        {name: "Garlic Butter Mushrooms", type: "sides", favorite: false},
        {name: "Cripsy Potatoes", type: "sides", favorite: false},
        {name: "Arugula Goat Cheese Salad", type: "sides", favorite: false},
        {name: "Bacon Friend Brussel prouts", type: "sides", favorite: false},
    ],
    mains: [
        {name: "18oz Ribeye", type: "mains", favorite: false},
        {name: "California Chicken Burger", type: "mains", favorite: false},
        {name: "Thai Yellow Curry", type: "mains", favorite: false},
        {name: "Panang Curry", type: "mains", favorite: false},
        {name: "Brisket", type: "mains", favorite: false},
    ],

    desserts:[
        {name: "Baklava", type: "desserts", favorite: false},
        {name: "Apple Pie", type: "desserts", favorite: false},
        {name: "Lava Cake", type: "desserts", favorite: false},
        {name: "Ice Cream", type: "desserts", favorite: false},
        {name: "Cheesecake", type: "desserts", favorite: false},
    ]
}

var letsCookBtn = document.querySelector(".lets-cook")
var displayItemBox = document.querySelector(".item")
var displayIcon = document.querySelector(".cookpot")

letsCookBtn.addEventListener('click', displayItem)

function displayItem() {
    displayItemBox.innerText = "";
    displayItemBox.innerText = "test";
    displayIcon.classList.add("hidden");
    displayItemBox.classList.remove("hidden");
}

function getRandomIndex(array){
    return Math.floor(Math.random() * array.length)
}

// so if i want to see if an item is favorited or not the path
// woudld be 
// object, into key, into array, into index of that array,
// in to key value. so O,A,O,Boolean


// maybe I make a seperate "favorite items" array that
// i can update and generate


