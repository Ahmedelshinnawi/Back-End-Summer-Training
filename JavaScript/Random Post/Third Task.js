let Data = async () => {
    let response = await fetch('https://jsonplaceholder.typicode.com/posts');
    let data = await response.json();
    let random = data[Math.floor(Math.random() * data.length)];
    document.getElementById('Post').innerText = random.body;
}
Data();
setInterval(Data, 60000);