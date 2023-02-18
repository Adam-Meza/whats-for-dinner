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

var displayItemInst = document.querySelector('.item');
var displayIcon = document.querySelector('.cookpot');
var sidesList = document.querySelector('.sides-list')
var mainsList = document.querySelector('.mains-list')
var dessertsList = document.querySelector('.desserts-list')
var favoriteList = document.querySelectorAll('.favorite-list')

var letsCookBtn = document.querySelector('.lets-cook');
var favoriteBtn = document.querySelector('.add-favorite');
var viewFavoritesBtn = document.querySelector('.view-favorites');
var mainMenuBtn = document.querySelector('.main-menu');

letsCookBtn.addEventListener('click', displayItem);
favoriteBtn.addEventListener('click', favoriteItem);
viewFavoritesBtn.addEventListener('click', renderFavorites);
mainMenuBtn.addEventListener('click', navBackToMain);

for (i=0;i< favoriteList.length; i++)
    favoriteList[i].addEventListener('dblclick', function(){
    removeFavorite(event)
})

function removeFavorite(event) {
    var typeArrayInst = favoriteItems[event.target.closest('.favorite-list').id]
    for (var i = 0; i < typeArrayInst.length; i++){
        if (typeArrayInst[i].name === event.target.innerText)
        typeArrayInst[i].favorite = false
        typeArrayInst.splice(i,1)
    }
    renderFavorites()
}

function renderFavorites() {
    sidesList.innerHTML = '';
    mainsList.innerHTML = '';
    dessertsList.innerHTML = '';
    var sides = formatFavorites(favoriteItems.sides, 'Sides');
    var mains = formatFavorites(favoriteItems.mains, 'Mains');
    var desserts = formatFavorites(favoriteItems.desserts, 'Desserts');
    sidesList.innerHTML = `${sides}`
    mainsList.innerHTML = `${mains}`
    dessertsList.innerHTML = `${desserts}`
    viewFavorites()
}

function viewFavorites(){
    favoritesBox.classList.remove('hidden');
    mainBox.classList.add('hidden');
    suggestionBox.classList.add('hidden');
    viewFavoritesBtn.classList.add('hidden');
    mainMenuBtn.classList.remove('hidden');
}

function formatFavorites(typeArrayInst, type){
    var HTMLString = ""
    if (typeArrayInst.length > 0) {
        for (var i = 0; i < typeArrayInst.length; i++) {
            var itemName = typeArrayInst[i].name
            HTMLString += `<li class="favorite-inst">${itemName}</li>`
            } 
        } else {
            return `<h2>${type}</h2><li>Nothing here, yet!<li>`
    }
    return `<h2>${type}</h2>${HTMLString}`
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
    if (currentItem.favorite === true) {
        return
    } else { 
        currentItem.favorite = true
        let typeInst = currentItem.type
        favoriteItems[typeInst].push(currentItem)
    }
}