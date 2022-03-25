function comparison(number1, number2){

    if (typeof number1 == "number" && typeof number2 == "number"){
        if (number1 == number2){
            console.log("number1 is equal to number2");
        } else if( number1 < number2){
            console.log("number1 is less than number2");
        } else if ( number1 > number2){
            console.log("number1 is greater than number2");
        }
    } else {
        console.log("Input a valid Number");
    }
    
}

comparison (28, 28);