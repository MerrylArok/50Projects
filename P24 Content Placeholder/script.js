const header = document.getElementById('header');
const title = document.getElementById('title');
const excerpt = document.getElementById('excerpt');
const profile_img = document.getElementById('profile_img');
const profileName = document.getElementById('name');
const date = document.getElementById('date');
const animated_bg = document.querySelectorAll('.animated-bg');
const animated_bg_text = document.querySelectorAll('.animated-bg-text');
function getData() {
    header.innerHTML = '<img src="https://source.unsplash.com/random/400x400" alt="image">';
    title.innerHTML = 'Lorem ipsum dolor sit amet.';
    excerpt.innerHTML = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum optio deleniti dicta provident ulla magni!';
    profile_img.innerHTML = '<img src="https://randomuser.me/api/portraits/women/15.jpg" alt="">';
    profileName.innerHTML = 'Janice Dopile';
    date.innerHTML = 'April 1, 2021';
    animated_bg.forEach(bg => bg.classList.remove('animated-bg'));
    animated_bg_text.forEach(bg => bg.classList.remove('animated-bg-text'));
}
setTimeout(getData, 2500);
