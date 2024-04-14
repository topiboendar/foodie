const loginBtn = document.querySelector('.login-btn');
const loginCard = document.querySelector('.login-card');
const closeBtnLogin = document.getElementById('closeBtnLogin')
loginBtn.addEventListener('click', ()=>{
    loginCard.classList.toggle('d-flex');
});
closeBtnLogin.addEventListener('click', ()=>{
    loginCard.classList.toggle('d-flex');
})