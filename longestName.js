const friends = ["Atik", "Sabit", "Delowar", "Tajimul", "Roma kanto kamar", "Ronggon"];

let longest = friends[0].length;
let longestName;
for (let i = 0; i < friends.length; i++) {
    const element = friends[i].length;
    if(element > longest){
       longest = element;
       longestName = friends[i];
    };
}

console.log(longestName);