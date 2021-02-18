//String reverse
function reverseString(str) {
    var reverse = "";
    for (var i = 0; i < str.length; i++) {
        var element = str[i];
        reverse = element + reverse;
    }
    return reverse;
}

var reverseMe = reverseString ("I am hero programmer.");
console.log (reverseMe);