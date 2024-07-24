//function is a reusable block of code to perform some specific task
//without parametes and without return
// function printHello(){
//     console.log('hello')
// }
// //calling of function
// printHello()
// printHello()

// //with parameters and without return
// function sum(a,b){
//     //code
//     console.log(a+b)
// }
// sum(12,14)
// sum(90,23)

// //with parameters and with return

// function sumOf3(a,b,c){
//     return a+b+c
// }

// let add=sumOf3(23,12,90)
// console.log(add)

// something()
// function something(){
//     console.log('hello world')
//     return
// }
// something()

//function expression =>does not allow hoisting
// sum(4,5)//not allowed
// let sum=function(a,b=23){
//     console.log(a,b)
// }
// sum(4,45)

//arrow function=>
//does not allow hoisting
//does not have own this keyword

// let cube=(a)=>{
//     return a**3
// }
//single line code is always returned and curly brackets can
//be ommitted
// let cube=(a)=>a**3
// console.log(cube(5))

//in case of one parameter than ( ) can be ommitted
// let cube=a=>a**3
// console.log(cube(6))

//callback functions
// a function that is passed as a parameter to other fn and 
//call inside that function
// let square=a=>a*a

// function cube(someFunction,a){
//         let s=someFunction(a)
//         return s*a
// }

// console.log(cube(square,9))
// console.log(cube((x)=>x+5,9))

//make a function to calculate factorial of a no.
// function factorial(n){
//     let fact=1;
//     for(let i=1;i<=n;i++){
//         fact*=i
//     }
//     return fact
// }

// console.log(factorial(6))












