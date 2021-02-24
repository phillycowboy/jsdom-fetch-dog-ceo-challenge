console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const breedUrl = 'https://dog.ceo/api/breeds/list/all';
const ulArea = document.getElementById("ul");
let dropDown = document.getElementById('breed-dropdown');
console.log("hi")
let breeds = [];


// dropDown.addEventListener("onchange", handleDropdown);

function fetchImage(){
    return fetch(imgUrl)
    .then(response => response.json())
    .then(data => {
        data.message.forEach(image => renderImage(image));
        
    });
}

function fetchBreed() {
    return fetch(breedUrl)
    .then(response => response.json())
    .then(data => {
        // data.message.forEach(breed => renderBreed(breed));
         breeds = Object.keys(data.message)
         breeds.forEach(breed => renderBreed(breed))
         
    });
}


function renderImage(images){
    const container = document.getElementById("dog-image-container")
    const img = document.createElement('img')
    img.src = images 
    container.appendChild(img)
};

function renderBreed(breeds) {
    const ul = document.getElementById("dog-breeds")
    const li = document.createElement('li')
    li.setAttribute('id', 'li')
    li.addEventListener("click", handleClickEvent)
    li.innerHTML = breeds
    ul.appendChild(li)
   
};

function handleClickEvent(e) {
    e.target.style.color = "red";

}

// dropDown.addEventListener("onchange", handleDropDown)

function handleDropDown(e) {
    
}

document.addEventListener("DOMContentLoaded", function () {
    
    fetchImage();
    fetchBreed();
    dropDown = document.getElementById('breed-dropdown');
})
