let num = Number(prompt("Enter A Positive Number :-"));
let arr = [];

for (i=0;i<=num;i++){
    arr.push(i);
}
let odd = arr.filter(items => items % 2 != 0);
let oddCubes = odd.map(items => items * items * items);
// console.log(arr);
 console.log("Odd Numbers Array = ",odd);
console.log("Cube's of Odd Number's Array = ",oddCubes);
