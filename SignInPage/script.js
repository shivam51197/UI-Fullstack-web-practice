let signUpBtn = document.querySelector('.signupbtn');
let signInBtn = document.querySelector('.signinbtn');
let title = document.querySelector('.title');
let underline = document.querySelector('.underline');


signInBtn.addEventListener('click', () => {
    console.log("Signin button clicked")
    title.innerHTML = 'Sign In';
    // text.innerHTML = "Lost Passward";
    signUpBtn.classList.add('disable');
    signInBtn.classList.remove('disable');
    underline.style.transform = 'translateX(35px)';
});

signUpBtn.addEventListener('click', () => {
    console.log("Signup button clicked")
    // nameField.style.maxHeight = '60px';
    title.innerHTML = 'Sign Up';
    //text.innerHTML = " Passward Suggestion";
    signUpBtn.classList.remove('disable');
    signInBtn.classList.add('disable');
    underline.style.transform = 'translateX(0)';
});