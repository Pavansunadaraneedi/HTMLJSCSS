// function display()
// {
//     console.log("Hello world")
// }
// display()
// // sum of 2 numbers 
// function sum ()
// {
//     let a = 10, b = 20;
//     console.log(a + b);
// }
// sum()
// // sum of 2 numbers with parameters
// function sum1 (a, b)
// {
//     console.log(a + b);
// }
// sum1(5, 6)
// sum1("Pavan", "sandy")

// //task - create a function that accepts a string as parameter and print its in console
//  function printlen(a)
//  {
//     console.log(a.length);
//  }
//  printlen("PAVAN")

//  // Sum with default value 
//  function sum2 (a, b=20)
//  {
//     console.log(a+b)
//  }
//  sum2(10,50)
//  sum2(10);

//  //sum with rest 
//  function sum3(...b)
//  {
//     let sum = 0;
//     for(let i of b)
//     {
//         sum = sum + 1
//     }
//     console.log(sum);
//  }
//  sum3(10,5,4,6,3)

//  // Take an array and pass the multiple values to function and print their product 
//  function sum3(...b)
//  {
//     let sum = 0;
//     for(let i of b)
//     {
//         sum = sum * 1
//     }
//     console.log(sum)
//  }
//  sum3(10,5,4,6,3)

//  function sum4(a,...b)
//  {
//     console.log(a,b)
//     let c = [a,...b];
//     console.log(c.length)
//  }
//  sum4(5,4,3,2)

//  let [a,...c]=[6,7,8,9,10]
//  let b=[5,...[4,3],...[5,4],3]
//  console.log(b)

//  // add to arrays
//  let arr=[5,4,6], arr2 = [1,2,3];
//  let arr3 = [...arr,...arr2]
//  console.log(arr3)

// function sum(a,b)
// {
// return a+b;
// }
// let res = sum(4,5)
// console.log(res)

// // function expression 
// const x = 2;
// const sum2 = function(a, b)
// {
//     return a + b
// }
// console.log(sum2)
// let res2 = sum2(4, 5)
// console.log(res)

// function display()
// {
//     console.log("Hello World")
// }

// const x = function ()
// {
//     console.log("Hello world")
// }
// console.log(x)
// x()

// function sum (a, b)
// {
//     return(a + b);
// }
// console.log(sum)

// //function expression 
// let x = function (a, b)
// {
//     return a + b;
// }
// console.log(x)

// //arrow function 
// let y = (a, b) => a+b

// console.log(y)


// function strLen (a)
// {
//     return a.length;
// }
// console.log(strLen("prasad"))
// //arrow function
// const z = (a) => a.length;
// console.log(z("prasad"))

//  function x()
//     {
//         console.log(" i'm X + (p+q)")
            
//     }

//  function doPrint (a)
//     {
//      a(5,3)
//     }
// doPrint(x) // x is callback and doPrint is higher order function

 //// closure
// function outer ()
//     {
//         let x = 10;
//         function inner(){
//             x++;
//             console.log(x)
//         }
//         return inner;
//     }
//     let z = outer ()
//     console.log(z)
//     z()
//     z()
//     z()

// // funny closure
// function rani()
// {
//     let msg = "bye bye"
//     function letter ()
//     {
//         console.log(msg)
//     }
//     return letter;
// }
// let y = rani()
// /* let y = function letter()
// {
// console.log(msg)
// }*/
// y()
  
 





