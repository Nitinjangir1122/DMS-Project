var formWrapper = document.querySelector(".form-wrapper");
var signUp = document.querySelector("#signup-btn");
var signIn = document.querySelector("#signin-btn");


signIn.onclick = function(){
    formWrapper.style.transform = "translateX(-350px)";
}
signUp.onclick = function(){
    formWrapper.style.transform = "translateX(0px)";
}