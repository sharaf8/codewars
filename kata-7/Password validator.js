function password(str) {
    if(str.length > 7){
        let hasUpperCase = false;
        let hasLowerCase = false;
        let hasNumber = false;

        for(let i = 0; i< str.length; i++){
            if (str[i] >= "A" && str[i] <= "Z"){
                hasUpperCase = true;
            }
            else if (str[i] >= "a" && str[i] <= "z"){
                hasLowerCase = true;
            }
            else if (!isNaN(str[i])){
                hasNumber = true;
            }
        }

        if(hasUpperCase && hasLowerCase && hasNumber){
            return true;
        }
    }
    return false;
}
