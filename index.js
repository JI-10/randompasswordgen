
var object="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890~`!@#$%^&*()-_+=[]{}|?>.<,"
function passwordGenerator(elementId){
    let password=""
    for(let i=0;i<15;i++){
    let y=Math.floor(Math.random()*(object.length));
    password+=object[y];
    }
    if(password.length!=15){ alert("check")}
    document.getElementById(elementId).style.display="inline-block";
    document.getElementById(elementId).textContent=password;
}
function fourPasswords(){
    passwordGenerator("s1");
    passwordGenerator("s2");
    passwordGenerator("s3");
    passwordGenerator("s4");
}