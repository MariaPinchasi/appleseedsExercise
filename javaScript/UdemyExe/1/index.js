function validPass(password, userName){
    if (password.length>=8 && password.indexOf(" ")==-1 && password.indexOf(userName)==-1){
        return true;
    }
    return false;
}
console.log(validPass ("maridf moria", "maria"));