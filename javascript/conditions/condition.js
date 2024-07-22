//if-else => are used to execute a code based on some condition
// if (condition) {
//     //if block
// } else {
//     //else block
// }
//condition => true => if-block
//condition => false => else-block
//falsy value => false ,null,undefined, blank string ''
//0 (zero)
//predefined function =>

// alert('hello everyone!')//show popup
// let ans=confirm('is it a nice day ?')
// console.log(ans)

// let name=prompt('what is your name ?')
// console.log(typeof name)

// let age= parseInt(prompt('enter your age'))
// console.log(age,typeof age)

// let discount=parseFloat(prompt('enter no.'))
// console.log(discount)
// document.write('<h1>hello </h1>')

// let isMale=confirm('are you a man ?')
// if (isMale){
//     alert('welcome sir')
// }else{
//     alert('sorry ,this site is only for mens')
// }

//if-else-if =>multiple 
//ask user for their percentage and 
//if percentage is 0-30 show fail
//31-50 grade C 
//51 -70 grade B
// 71-100 grade A
// let p = parseInt(prompt('enter your percentage'))
// if (p > 0 && p <= 30) {
//     alert('you are fail')
// } else if (p > 30 && p <= 50) {
//     alert('you are pass with grade C')
// } else if (p > 50 && p <= 70) {
//     alert('you are pass with grade B')
// } else if (p > 70 && p <= 100) {
//     alert('you are pass with grade A')
// }
// else {
//     alert('invalid value')
// }
//question =>number input =>check positive,negetive,zero
// nested if-else 
// let n=parseInt(prompt('enter a no.'))
// if(n>=0){
//     if(n==0){
//         alert('zero')
//     }else{
//         alert('positive')
//     }
// }else{
//     alert('negetive no.')
// }
//find the maximum of 3 no.s

// let a=parseInt(prompt('enter a no.'))
// let b=parseInt(prompt('enter a no.'))
// let c=parseInt(prompt('enter a no.'))
// if(a>=b && a>=c){
//     alert('a')
// }else if(b>=a && b>=c) alert('b')
// else alert('c')

//ask age => 60 =>senior citizen
//30 => young energetic =>
// 20 => adult =>

//ternary operator
// shorthand of if-else 
//only single code is executed
//max of 2 no.
//positive or negetive
//check if no. is even or odd
// let n=34
// if(n%2==0) console.log('even')
// else console.log('odd')

// condition ? statement1 : statement2
// true => statement1
//false => statement2
// n%2==0 ? console.log('even') : console.log('odd')

// let isMale=confirm('are you a male ?')
// let gender=isMale?'Male':'Female'
// console.log(gender)

let dayNo = parseInt(prompt('enter day no.'))
switch (dayNo) {
    case 1:
        console.log("it's monday")
        break
    case 2:
        console.log("it's tuesday")
        break
    case 3:
        console.log("it's wednessday")
        break
    case 4:
        console.log("it's thursday")
        break
    case 5:
        console.log("it's friday")
        break
    case 6:
        console.log("it's saturday")
        break
    case 7:
        console.log("it's sunday")
        break
    default:
        console.log('invalid day no')
        break
}
//ask month no. from user and show month name


