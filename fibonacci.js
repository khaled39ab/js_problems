//fibonacci series is
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233.....................
// n-th = (n-1) + (n-2)


function fibonacci (){
    var fibo = [0, 1,];
    for (let i = 2; i < 14; i++) {
        fibo[i] = fibo[i-1] + fibo[i-2]
    }
    return fibo;
}

console.log(fibonacci());
