document.addEventListener('DOMContentLoaded', () => {
    fetchImage();
    fetchBreed();
})
const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const breedUrl = "https://dog.ceo/api/breeds/list/all";
// const dogList = document.getElementsByTagName('li');
// const dropDown = document.querySelectorAll('#breed-dropdown');
const options = document.getElementsByTagName('option')
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
        .then((json) => {
            breeds = Object.keys(json.message)
            breeds.forEach(breed => renderBreed(breed))
        
        });
}

function renderBreed(breed) {
    const li = document.createElement('li');
    const ul = document.querySelector('#dog-breeds');
    li.innerText = breed;
    ul.append(li);
    li.addEventListener('click', () => {
        li.style.color = 'blue';
        // if(li.style.color === 'blue'){
        //     li.style.color;
        // }
    })
}

// dogList.addEventListener('click', () =>{
//     li.style.color = 'blue';
// })

// dropDown.addEventListener('click', () => {
//     alert('hi!');
// })

options.addEventListener('click', () => {
    alert('hi!');
})





