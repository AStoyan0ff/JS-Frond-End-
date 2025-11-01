function passValid(pass) {

    let isFound = true;

    if (pass.length < 6 || pass.length > 10) {

        console.log("Password must be between 6 and 10 characters");
        isFound = false;
    }

    if (!/^[A-Za-z0-9]+$/.exec(pass)) {

        console.log("Password must consist only of letters and digits");
        isFound = false;
    }
   
    
    let digitCnt = (pass.match(/\d/g) || []).length;

    if (digitCnt < 2) {

        console.log("Password must have at least 2 digits");
        isFound = false;
    }
    
    if (isFound) {
        console.log("Password is valid");
    }
}

passValid('logIn');
passValid('MyPass123');
passValid('Pa$s$s');