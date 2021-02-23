console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const breedUrl = 'https://dog.ceo/api/breeds/list/all';

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
        data.message.forEach(breed => renderBreed(breed));
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
    li.innerHTML = breeds
    ul.appendChild(li)
};

document.addEventListener("DOMContentLoaded", function () {
    
    fetchImage();
    fetchBreed();
    
})
