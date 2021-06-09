var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const jokeEl = document.getElementById('joke');
const jokeBtn = document.getElementById('jokeBtn');
generateJoke();
function generateJoke() {
    return __awaiter(this, void 0, void 0, function* () {
        const config = {
            headers: {
                'Accept': 'application/json'
            }
        };
        const res = yield fetch('https://icanhazdadjoke.com', config);
        const data = yield res.json();
        jokeEl.innerText = data.joke;
        //     fetch('https://icanhazdadjoke.com', config)
        //         .then(response => response.json())
        //         .then(data => {
        //             jokeEl.innerText = data.joke
        //         })
    });
}
;
jokeBtn.addEventListener('click', generateJoke);
