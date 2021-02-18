//finding max & min value
var marks = [69, 45, 98, 75, 91, 99, 85];
var max = marks[0];
var min = marks[0];
for (var i = 0; i < marks.length; i++) {
    var element = marks[i];
    if (element > max) {
        max = element;
    } 
    if (element < min) {
        min = element;
    }
}
console.log ("Highest value is: ", max);
console.log ("Lowest value is: ", min);


//another way
var numbers = [69, 45, 98, 75, 91, 99, 85];
var max = Math.max.apply(null, numbers) 
console.log (max);
var min = Math.min.apply(null, numbers);
console.log (min);
