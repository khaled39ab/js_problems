var numbers = [12, 52, 4, 95, 38, 66];
var sum = 0;

for (var i = 0; i < numbers.length; i++) {
    var element = numbers[i];
    sum = sum + element;
}

console.log("Total of the numbers is: ", sum);


//with function
function arraySum(numbers) {
    var sum = 0;
    for (var i = 0; i < numbers.length; i++) {
        var element = numbers[i];
        sum = sum + element;
    }
    return sum;
}
var result = arraySum([12, 52, 4, 95, 38, 66]);
console.log("Total of the numbers is: ", result);
