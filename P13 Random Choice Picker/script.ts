const tagsEl = document.getElementById('tags');
const textarea = document.getElementById('textarea') as HTMLTextAreaElement;

textarea.focus();

textarea.addEventListener('keyup', (event) => {
    createTags(textarea.value);

    if (event.key == "Enter") {
        setTimeout(() => { textarea.value = ''; }, 10);
        randomSelect();
    }
})

function createTags(input) {
    const tags = input.split(',').filter(tag => tag.trim() != '').map(tag => tag.trim());

    tagsEl.innerHTML = '';

    tags.forEach(tag => {
        const newTag = document.createElement('span');
        newTag.classList.add('tag');
        newTag.innerText = tag;
        tagsEl.appendChild(newTag);
    })
}

function randomSelect() {
    const times = 30;

    const interval = setInterval(() => {
        const randomTag = pickRandomTag() as HTMLElement;

        highlightTag(randomTag);

        setTimeout(() => {
            unhighlightTag(randomTag);
        }, 100);
    }, 100);

    setTimeout(() => {
        clearInterval(interval);

        setTimeout(() => {
            const tagToSelect = pickRandomTag() as HTMLElement;

            highlightTag(tagToSelect);
        }, 100)
    }, times * 100)
}

function pickRandomTag() {
    const allTags = document.querySelectorAll('.tag');
    return allTags[Math.floor(Math.random() * allTags.length)];
}

function highlightTag(tag: HTMLElement) {
    tag.classList.add('highlight');
}

function unhighlightTag(tag) {
    tag.classList.remove('highlight');
}