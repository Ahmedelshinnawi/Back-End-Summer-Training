let index = 0;
let Displayphotos = async () => {
    let response = await fetch('https://jsonplaceholder.typicode.com/photos');
    let photos = await response.json();
    let image = document.getElementById('Photo');
    let id = document.getElementById("title")
    image.src = photos[index].url;
    id.textContent = photos[index].id;
    index = (index + 1) % photos.length;


}
Displayphotos();
setInterval(Displayphotos, 60000);