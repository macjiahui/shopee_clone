/*
1. Clicking Sign Up / Log In button shows form and hide form ✔
1.1 Switch the forms ✔
2. Search history box needs to stay when focus property disappear
3. Translate
4. Dark theme
5. Help link to other page
6. Search function
7. Add item in shopping cart
8. Inside Shop / Outside Shop function
9. Page numbers
10. List product items by map()
*/ 

// Two forms button
const signUpFormBtn = document.querySelector('.js-app__header__navbar-sign-up-forms-btn');
const logInFormBtn = document.querySelector('.js-app__header__navbar-log-in-forms-btn');
// Modal, forms
const modal = document.querySelector('.js-modal');
// Two forms
const signUpForm = document.querySelector('.js-auth-form__sign-up-form');
const logInForm = document.querySelector('.js-auth-form__log-in-form');
// Current year
const date = new Date();
const currentYear = date.getFullYear();
document.querySelector('.js-app__footer__copyright-year').innerHTML = currentYear;
// Switch Button in two forms
const switchBtnOfSignUpForm = document.querySelector('.js-auth-form__switch-btn-show-log-in');
const switchBtnOfLogInForm = document.querySelector('.js-auth-form__switch-btn-show-sign-up');

/* FUNCTIONS */
function showOverlayAndSignUpForm() {
    modal.classList.add('show__overlay');
    signUpForm.classList.add('open__form');
}

function showOverlayAndLogInForm() {
    modal.classList.add('show__overlay');
    logInForm.classList.add('open__form');
}

function hideOverlayAndAllForms() {
    modal.classList.remove('show__overlay');
    signUpForm.classList.remove('open__form');
    logInForm.classList.remove('open__form');
}

// Show and hide when click in switch button in two forms
function showLogInHideSignUpForms() {
    logInForm.classList.add('open__form');
    signUpForm.classList.remove('open__form');
}

function showSignUpHideLogInForms() {
    logInForm.classList.remove('open__form');
    signUpForm.classList.add('open__form');
}

/* EVENTS */
signUpFormBtn.addEventListener('click', showOverlayAndSignUpForm);

logInFormBtn.addEventListener('click', showOverlayAndLogInForm);

modal.addEventListener('click', hideOverlayAndAllForms);

signUpForm.addEventListener('click', function (event) {
    event.stopPropagation();
});

logInForm.addEventListener('click', function (event) {
    event.stopPropagation();
});

// Switch Button in two forms
switchBtnOfLogInForm.addEventListener('click', showSignUpHideLogInForms);

switchBtnOfSignUpForm.addEventListener('click', showLogInHideSignUpForms);


