var roll = [25, 2, 34, 27, 2, 25, 22, 11, 22];
var uniqueRoll = [];

for (var i = 0; i < roll.length; i++) {
    var element = roll[i];
    
    var index = uniqueRoll.indexOf (element);
    if (index == -1) {
        uniqueRoll.push (element);
    }
}
console.log (uniqueRoll);