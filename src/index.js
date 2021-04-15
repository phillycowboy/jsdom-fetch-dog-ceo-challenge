const imgUrl = "https://dog.ceo/api/breeds/image/random/4";

function fetchImage(){
    return fetch(imgUrl)
    .then(res =>  res.json())
    .then(data => console.log(data));
}












