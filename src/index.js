document.addEventListener('DOMContentLoaded', () => {
    fetchImage();
})
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
    
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
    















