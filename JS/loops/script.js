// // loops
// let i=2
// while(i<10){
// console.log(i);
//   i++;
// }

// // do while 
// let j = 2;
// do
// {
//     console.log(j);
//     j++;
// }while (j > 10);

// let i = 25;
// while(i >= 1){
//     if (i % 2 == 0)
//     {
//         console.log(i)
//     }
//     i--
// }

// //i = 11
//  let i = 10;
// (i % 2 == 0) ? i : i--;








// //print number from 10 to 1 using for 

// for (let i = 10; i >= 1; i--)
// {
//   console.log(i)
// }

let arr = [5, 4, 9, 8, 1];
for (let i = 0; i <= arr.length-1; i++){
  console.log (arr[i])
}

//for of 
for (let i of arr)
{
  console.log(i)
}
let obj ={
  name: "pavan",age: 22
}

//for in 
for (let i in arr)
{
  console.log(arr[i], i)
}
