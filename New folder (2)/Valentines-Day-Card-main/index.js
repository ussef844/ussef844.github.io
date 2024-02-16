
const heart = document.querySelector('.heart_button');
const envelopeWrapper = document.querySelector('.envelope-wrapper');

heart.addEventListener('click', () => {
    envelopeWrapper.classList.toggle('open');
});

