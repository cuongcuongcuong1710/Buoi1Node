let car=["xe","xe1","BMW","Honda"];
let number=[1,2,3,5];

// car.forEach(function(i){
//     console.log(i);
// })

// for(let a of car){
//     console.log(a);
// }

// const newnumber = number.map(function(i){
//     return i+2;
// })
// console.log(number);
// console.log(newnumber);

// number.forEach(function(i){
//     i+10;
    
// })
// console.log(number);

let temp=number.filter(function(i){
    return i%2==0;
})
console.log(temp);


