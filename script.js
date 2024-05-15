async function fetchRandomJoke() {
    var joke = await fetch('https://v2.jokeapi.dev/joke/Any')
        .then(response => response.json());

    if (joke.type == "twopart") document.getElementById('joke').innerHTML = joke.setup + "<br>" + joke.delivery;
    else document.getElementById('joke').innerHTML = joke.joke;
}

function setBackground() {
    document.body.style.backgroundImage = "url(https://picsum.photos/" + window.innerWidth + "/" + window.innerHeight + ")";
}

function loadContent()  {
    setBackground();
    fetchRandomJoke();
}