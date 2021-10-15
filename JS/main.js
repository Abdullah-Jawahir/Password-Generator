const passwordDisplay = document.querySelector('.password');
const copyIcon = document.querySelector('.fa-copy');
const btn = document.querySelector('.btn');
const copiedMsg = document.querySelector('.copied-msg');

let completeLetters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789[]{}^*,./()';
let letters = completeLetters.split('');
let password = '';

btn.addEventListener('click', () => {

    password = '';

    for (let count = 0; count < 16; count++) {
        password += letters[Math.floor(Math.random() * letters.length)];
    }

    passwordDisplay.value = password;

});


copyIcon.addEventListener('click', () => {

    if (passwordDisplay.value.length >= 16) {
        passwordDisplay.select();
        if (document.execCommand('copy')) {
            passwordDisplay.focus();
            
            copiedMsg.style.opacity = 1;
            copiedMsg.style.marginLeft = '10px';
            copiedMsg.style.pointerEvents = 'auto';

            setTimeout(() => {
                copiedMsg.style.opacity = 0;
            }, 1200);
            
        }
    }
    else{
        alert('Password is too short to copy!');
    }
});
