const jokes = [
    "Почему программисты всегда путают Хэллоуин и Рождество? Потому что Oct 31 == Dec 25!",
    "Студент приходит на экзамен по программированию. Преподаватель спрашивает: - Ну что, готов? Студент: - Да, я весь код в блокнотик поместил!",
    "Идет программист по лесу. Видит – дерево в огне. Подходит, спрашивает: - Что, горят дрова?",
    "Почему программисты ненавидят природу? Потому что у нее слишком много багов."
];

const jokeText = document.getElementById('joke-text');
const nextJokeBtn = document.getElementById('next-joke-btn');

function getRandomJoke() {
    const randomIndex = Math.floor(Math.random() * jokes.length);
    return jokes[randomIndex];
}

function updateJoke() {
    jokeText.textContent = getRandomJoke();
}

nextJokeBtn.addEventListener('click', updateJoke);

// Показываем первый анекдот при загрузке страницы
updateJoke();