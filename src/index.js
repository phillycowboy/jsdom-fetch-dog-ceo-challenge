document.addEventListener('DOMContentLoaded', () => {
    fetchImage();
    fetchBreed();
    options = document.getElementById('breed-dropdown');
    changeDropDown();
})
const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const breedUrl = "https://dog.ceo/api/breeds/list/all";
let options = 'hello';
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


// const dropDown = () => {options.addEventListener('change', (e) => {
//     console.log(e.target.value);
//     filterBreed(e.target.value);
//     console.log(options);
//  })
// };
function changeDropDown() {
    options.addEventListener('change', (e) => {
        let value = e.target.value
        // console.log(e.target.value);
        if(value === "a"){
            filterBreed("a");
        }else if(value === "b"){
            filterBreed("b");
        }else if(value === "c"){
            filterBreed("c");
        }else if(value === "d"){
            filterBreed("d");
        }
    });
}


function updateBreed(breed) {
    console.log(breed);
    const ul = document.querySelector('#dog-breeds');
    const lis = ul.getElementsByTagName('li');
    let child = ul.lastElementChild;
    while (child) {
        child.remove();
        child = ul.lastElementChild;
    }
    // for(let el of lis){
    //     console.log(el);
    //     el.remove();
    // }
    breed.forEach(b => renderBreed(b));
    
}

function filterBreed(letter) {
    updateBreed(breeds.filter(breed => breed.startsWith(letter)))
}




