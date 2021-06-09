const jokeEl = document.getElementById('joke');
const jokeBtn = document.getElementById('jokeBtn');

generateJoke();

async function generateJoke() {

    const config = {
        headers: {
            'Accept': 'application/json'
        }
    };

    const res = await fetch('https://icanhazdadjoke.com', config);
    const data = await res.json();
    jokeEl.innerText = data.joke;

    //     fetch('https://icanhazdadjoke.com', config)
    //         .then(response => response.json())
    //         .then(data => {
    //             jokeEl.innerText = data.joke
    //         })
};

jokeBtn.addEventListener('click', generateJoke);
