let items = {
    sides: [
        {name: "Miso Glazed Carrots", type: "sides", favorite: false},
        {name: "Garlic Butter Mushrooms", type: "sides", favorite: false},
        {name: "Cripsy Potatoes", type: "sides", favorite: false},
        {name: "Arugula Goat Cheese Salad", type: "sides", favorite: false},
        {name: "Bacon Frend Brussel Sprouts", type: "sides", favorite: false},
        {name: "Edamame", type: "sides", favorite: false},
        {name: "Toast and Jam", type: "sides", favorite: false},
        {name: "Oysters", type: "sides", favorite: false},
        {name: "Caeser Salad", type: "sides", favorite: false},
        {name: "Fries", type: "sides", favorite: false},

    ],
    mains: [
        {name: "18oz Ribeye", type: "mains", favorite: false},
        {name: "California Chicken Burger", type: "mains", favorite: false},
        {name: "Thai Yellow Curry", type: "mains", favorite: false},
        {name: "Panang Curry", type: "mains", favorite: false},
        {name: "Brisket", type: "mains", favorite: false},
        {name: "Tacos", type: "mains", favorite: false},
        {name: "Chilli Cheese Dog", type: "mains", favorite: false},
        {name: "Gulf Shrimp Platter", type: "mains", favorite: false},
        {name: "Gumbo", type: "mains", favorite: false},
        {name: "Ribs", type: "mains", favorite: false},
    ],
    desserts:[
        {name: "Baklava", type: "desserts", favorite: false},
        {name: "Apple Pie", type: "desserts", favorite: false},
        {name: "Lava Cake", type: "desserts", favorite: false},
        {name: "Ice Cream", type: "desserts", favorite: false},
        {name: "Cheesecake", type: "desserts", favorite: false},
        {name: "Key Lime Pie", type: "desserts", favorite: false},
        {name: "Chocolate Mouse", type: "desserts", favorite: false},
        {name: "Spider Man Popsicle", type: "desserts", favorite: false},
        {name: "Fudge", type: "desserts", favorite: false},
        {name: "Donut", type: "desserts", favorite: false},
    ]
}

var currentItem;
var favoriteItems = {
    sides:[],
    mains:[],
    desserts:[]
}

var letsCookBtn = document.querySelector(".lets-cook");
var displayItemBox = document.querySelector(".item-box");
var displayItemInst = document.querySelector(".item");
var displayIcon = document.querySelector(".cookpot");
var favoriteBtn = document.querySelector(".favorite")

letsCookBtn.addEventListener('click', displayItem);
favoriteBtn.addEventListener('click', favoriteItem)

function displayItem() {
    displayItemInst.innerText = "";
    var checkBoxes = document.getElementsByName("food");
    for (var i = 0; i < checkBoxes.length; i++){
        if (checkBoxes[i].checked){
            var typeInstArray = items[(checkBoxes[i].classList.value)];
            currentItem = (typeInstArray[getRandomIndex(typeInstArray)]);
        }
    }
    displayItemInst.innerText = `${currentItem.name}!`;
    displayIcon.classList.add("hidden");
    displayItemBox.classList.remove("hidden");
}

function getRandomIndex(array){
    return Math.floor(Math.random() * array.length);
}

function favoriteItem(){
    let x = currentItem.type
    favoriteItems[x].push(currentItem)
}


// so if i want to see if an item is favorited or not the path
// woudld be 
// object, into key, into array, into index of that array, 
// in to key value. so O,A,O,Boolean

// function getType(itemInst){
//     return // 
// }


