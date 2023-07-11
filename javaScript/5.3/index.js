function validPassword1(password){
    if (password.length > 7){
        return 'strong';
    } 
    else{
        return 'weak';
    }
}
function validPassword2(password){
        return password.length > 7 ? 'strong' : 'weak';
}
function validPassword3(password){
    (password.length > 7) && console.log('strong');
    (password.length <= 7) &&console.log('weak'); 
}
function validPassword4(password){
    return password.length > 7 && /[A-Z]/.test(password) ? 'Very Strong' 
    : password.length > 7 ? 'Strong' : 'weak';
}

console.log(validPassword1('hkjghggh'));
console.log(validPassword2('hkjhfggh'));
validPassword3('hkggh');
console.log(validPassword4('hkjfgggh'));
