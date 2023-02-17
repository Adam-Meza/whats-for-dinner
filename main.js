let items = {
    sides: [
        {name: 'Garlic Butter Mushrooms', type: 'sides', favorite: false},
        {name: 'Arugula Goat Cheese Salad', type: 'sides', favorite: false},
        {name: 'Bacon Frend Brussel Sprouts', type: 'sides', favorite: false},
        {name: 'Miso Glazed Carrots', type: 'sides', favorite: false},
        {name: 'Cripsy Potatoes', type: 'sides', favorite: false},
        {name: 'Toast and Jam', type: 'sides', favorite: false},
        {name: 'Caeser Salad', type: 'sides', favorite: false},
        {name: 'Oysters', type: 'sides', favorite: false},
        {name: 'Edamame', type: 'sides', favorite: false},
        {name: 'Fries', type: 'sides', favorite: false},

    ],
    mains: [
        {name: '18oz Ribeye', type: 'mains', favorite: false},
        {name: 'California Chicken Burger', type: 'mains', favorite: false},
        {name: 'Thai Yellow Curry', type: 'mains', favorite: false},
        {name: 'Panang Curry', type: 'mains', favorite: false},
        {name: 'Brisket', type: 'mains', favorite: false},
        {name: 'Tacos', type: 'mains', favorite: false},
        {name: 'Chilli Cheese Dog', type: 'mains', favorite: false},
        {name: 'Gulf Shrimp Platter', type: 'mains', favorite: false},
        {name: 'Gumbo', type: 'mains', favorite: false},
        {name: 'Ribs', type: 'mains', favorite: false},
    ],
    desserts:[
        {name: 'Baklava', type: 'desserts', favorite: false},
        {name: 'Apple Pie', type: 'desserts', favorite: false},
        {name: 'Lava Cake', type: 'desserts', favorite: false},
        {name: 'Ice Cream', type: 'desserts', favorite: false},
        {name: 'Cheesecake', type: 'desserts', favorite: false},
        {name: 'Key Lime Pie', type: 'desserts', favorite: false},
        {name: 'Chocolate Mouse', type: 'desserts', favorite: false},
        {name: 'Spider Man Popsicle', type: 'desserts', favorite: false},
        {name: 'Fudge', type: 'desserts', favorite: false},
        {name: 'Donut', type: 'desserts', favorite: false},
    ]
}

var currentItem;
var favoriteItems = {
    sides:[],
    mains:[],
    desserts:[]
}
var mainBox = document.querySelector('.main-box');
var suggestionBox = document.querySelector('.suggestion-box');
var favoritesBox = document.querySelector('.favorites-box');
var suggestionDisplay = document.querySelector('.suggestion-display');
var favoritesDisplay = document.querySelector('.favorites-display');
var displayItemInst = document.querySelector('.item');
var displayIcon = document.querySelector('.cookpot');

var letsCookBtn = document.querySelector('.lets-cook');
var favoriteBtn = document.querySelector('.add-favorite');
var viewFavoritesBtn = document.querySelector('.view-favorites');
var mainMenuBtn = document.querySelector('.main-menu');

// add an eventlistner to favorites display
// make it wait for double click,
// then it runs remove favorite() adn then render favorites()
// revmoe favorite () is going to take the event.target.closest('li').remove()


letsCookBtn.addEventListener('click', displayItem);
favoriteBtn.addEventListener('click', favoriteItem);
viewFavoritesBtn.addEventListener('click', renderFavorites);
mainMenuBtn.addEventListener('click', navBackToMain);
favoritesDisplay.addEventListener('dblclick', function(){
    removeFavorite()
    renderFavorites()
    viewFavorites()
})

function renderFavorites(){
    favoritesDisplay.innerHTML = '';
    var sides = formatFavorites(favoriteItems.sides);
    var mains = formatFavorites(favoriteItems.mains);
    var desserts = formatFavorites(favoriteItems.desserts);
    favoritesDisplay.innerHTML = `
        <div><h2>Sides</h2>
        ${sides}</div>
        <div><h2>Mains</h2>
        ${mains}</div>
        <div><h2>Desserts</h2>
        ${desserts}</div>
    `
    viewFavorites()
}
function viewFavorites(){
    favoritesBox.classList.remove('hidden');
    mainBox.classList.add('hidden');
    suggestionBox.classList.add('hidden');
    viewFavoritesBtn.classList.add('hidden');
    mainMenuBtn.classList.remove('hidden');
}

function formatFavorites(typeInst){
    var HTMLString = ""
    if (typeInst.length > 0) {
        for (var i = 0; i < typeInst.length; i++) {
            var itemName = typeInst[i].name
            HTMLString += `<li>${itemName}</li>`
            return HTMLString
            } 
        } else {
            return "Nothing here, yet!"
    }
} 


function navBackToMain(){
    favoritesBox.classList.add('hidden');
    mainBox.classList.remove('hidden');
    suggestionBox.classList.remove('hidden');
    viewFavoritesBtn.classList.remove('hidden');
    mainMenuBtn.classList.add('hidden')
    displayIcon.classList.remove('hidden');
    suggestionDisplay.classList.add('hidden');
}

function displayItem() {
    displayItemInst.innerText = '';
    var checkBoxes = document.getElementsByName('food');
    for (var i = 0; i < checkBoxes.length; i++){
        if (checkBoxes[i].checked){
            var typeInstArray = items[(checkBoxes[i].classList.value)];
            currentItem = (typeInstArray[getRandomIndex(typeInstArray)]);
        }
    }
    displayItemInst.innerText = `${currentItem.name}!`;
    displayIcon.classList.add('hidden');
    suggestionDisplay.classList.remove('hidden');
}

function getRandomIndex(array){
    return Math.floor(Math.random() * array.length);
}

function favoriteItem(){
    let x = currentItem.type
    currentItem.favorite = true
    favoriteItems[x].push(currentItem)
}