const num = [14, 25, 36, 47, 58, 69]; //declare an array
console.log(num.length);  //number of elements

num[4] = 30; // update 4th position in array
console.log(num[4]);
console.log(num);


num.push(10);  //add a num
console.log(num);
num.pop() //remove a num
console.log(num);

num.unshift(100); //add number from first
console.log(num);
num.shift(); //remove number from first
console.log(num);


function isExist(number){
    if (num.indexOf (number) !== -1){
        console.log(number + " is exist in array");
    } else {
        console.log(number + " is not exist in array");
    }
}

isExist(25);

function isBigger(compareNumber){
    const bigger = []

    for (let i = 0; i < num.length; i++) {
        const element = num[i];
        if (element > compareNumber){
            bigger.push (element);
        }
    }
    return bigger;
}

console.log(isBigger(35));