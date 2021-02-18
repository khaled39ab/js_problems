var quote = "The greatest glory in living  lies not in  never falling, but in rising every time we fall.";
var count = 0;

for (var i = 0; i < quote.length; i++) {
    var element = quote[i];
    
    if ((element == " " ||  element == ".") && quote [i-1] != " ") {
        count++;
    }
}
console.log (count);
