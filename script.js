// Отримуємо посилання на кнопку "Відкрити вікно" та спливаючі вікна
let openLogModalButton = document.getElementById('loginOpenModal');
let openRegModalButton = document.getElementById('registrationOpenModal');
let openMoreModalButton = document.getElementById('learnMoreOpenModal');
let loginModal = document.getElementById('loginModal');
let regModal = document.getElementById('regModal');
let moreModal = document.getElementById('moreModal');

// Отримуємо посилання на кнопку "х" для закриття
let closeModalButton = document.getElementsByClassName('close');

// Функція для відкриття спливаючого вікна
openLogModalButton.addEventListener('click', function() {
    loginModal.style.display = 'block';
});
openRegModalButton.addEventListener('click', function() {
    regModal.style.display = 'block';
});
openMoreModalButton.addEventListener('click', function() {
    moreModal.style.display = 'block';
});
// Функція для закриття спливаючих вікон
for (let i = 0; i < closeModalButton.length; i++) {
    closeModalButton[i].addEventListener('click', function() {
        regModal.style.display = 'none';
        loginModal.style.display = 'none';
        moreModal.style.display = 'none';
    });
}

