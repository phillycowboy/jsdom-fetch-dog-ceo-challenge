document.addEventListener('DOMContentLoaded', () => {
    fetchImage();
    fetchBreed();
})
const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const breedUrl = "https://dog.ceo/api/breeds/list/all";
let breeds = [];
    
function fetchImage(){
    return fetch(imgUrl).then((res) =>  res.json())
    .then((json) => json.message.forEach(image => renderImage(image)));
        
}
    
function renderImage(image) {
    const img = document.createElement('img');
    img.src = image; 
    const imgContainer = document.querySelector('#dog-image-container');
    imgContainer.append(img);
}

function fetchBreed() {
    return fetch(breedUrl).then((res) => res.json())
        .then((json) => {json.message.forEach(breed => renderBreed(breed))
        // breeds = Object.keys(json.message)
        // breeds.forEach(breed => renderBreed(breed))
        })
    }

function renderBreed(breed) {
    const li = document.createElement('li');
    const ul = document.querySelector('#dog-breeds');
    li.innerText = breed;
    ul.append(li);
}
    





