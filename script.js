// Menu
const menuBtn = document.querySelector('#menu-icon');
// Navbar Mobile
const navMobile = document.querySelector('#menu-navigation');

navMobile.classList.add('menu-closed');


// Function | Open Navigation:
function openNavbar() {
    navMobile.classList.replace('menu-closed', 'menu-active');
    navMobile.style.display = 'grid';
    menuBtn.classList.replace('fi-rr-menu-burger', 'fi-br-cross');
};
// Function | Closed Navigation:
function closeNavbar() {
    navMobile.classList.replace('menu-active', 'menu-closed')
    navMobile.style.display = 'grid';
    menuBtn.classList.replace('fi-br-cross', 'fi-rr-menu-burger');
}

// Event | Open & Closed -> Menu Navigation:
menuBtn.addEventListener('click', () => {
    if (navMobile.classList.contains('menu-closed')) {
        openNavbar();
        formLoginOf();
    } else {
        closeNavbar();
    }
});






// Field Login

// Button | Config user:
const btnConfigUser = document.querySelector('#icon-config-user');
// Widget | Login user:
const menuConfigUser = document.querySelector('#menu-config-user');


// Funções | Open e close Menu Config. User
function formLoginActive() {
    menuConfigUser.classList.replace('menu-login-of','menu-login-active');
    menuConfigUser.style.display = "flex";
    btnConfigUser.classList.replace('fi-rr-circle-user','fi-sr-circle-user');
}
function formLoginOf() {
    menuConfigUser.classList.replace('menu-login-active','menu-login-of');
    menuConfigUser.style.display = "none";
    btnConfigUser.classList.replace('fi-sr-circle-user','fi-rr-circle-user');
}

btnConfigUser.addEventListener('click', () => {
    if(menuConfigUser.classList.contains('menu-login-of')){
        formLoginActive();
        closeNavbar();
    }else{
        formLoginOf();
    }
});






// Field Cadastro

// Button cadastrar:
const btnCadastrar = document.querySelector('#btn-open-cadastro');
// Widget cadastro:
const widgetCadastro = document.querySelector('#widget-cadastro');
// Button | Close Widget cadastro:
const btnCloseCadastro = document.querySelector('#btn-close-cadastro');


// Event | Click button cadastrar:
btnCadastrar.addEventListener('click', () => {
    menuConfigUser.style.display = "none";
    widgetCadastro.style.display = "flex";
    btnConfigUser.classList.replace('fi-sr-circle-user','fi-rr-circle-user');

});
// Event | Click button close (X) cadastro:
btnCloseCadastro.addEventListener('click', () => {
    widgetCadastro.style.display = "none";
    formLoginOf();
});










