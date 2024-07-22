//starting =>

// let i=1
// while(i<11) {//end condition
//   //code
//   document.write('hello<br>')
//   //update condition
//   i++
// }

//print 1-100 
// let i=1
// while(i<=100){
//     document.write(i,"<br>")
//     i++
// }
// print 100-1
// let i=100
// while(i>=1){
//     document.write(i,"<br>")
//     i--
// }
//print 1-100 skipping 2 no.
// let i=1
// while(i<=100){
//     document.write(i,"<br>")
//     i+=3
// }
//print 1-100 ,dont print nos that divisible by 4
// let i=1
// while(i<=100){
//     if(i%4!=0) document.write(i,"<br>")
//     i++
// }
//ask user for a no. and print the table of a that no.
// let n=parseInt(prompt('enter a no.'))
// let i=1
// while(i<11){
//     document.write(i*n,"<br>")
//     i++
// }

// for (let i = 1; i <= 10; i++) {
//     document.write(i,"<br>")
// }
//print no. 1-100 that either divides by 5 or 7 

// for(let i=1;i<=100;i++){
//     if(i%5==0 || i%7==0) document.write(i,"<br>")
// }

//do-while

// 1-10
// let i=1
// do{
//     document.write(i,"<br>")
//     i++

// }while(i==10)


//break => exit the loop
//1-100 but exit the loop when no is divisible by 11 and 7
// for(let i=1;i<=100;i++){
//     if(i%11==0 && i%7==0) break        
//     document.write(i,"<br>")    
// }

// continue => go to next iteration
//print 1-100 ,dont print nos that divisible by 3
// for (let i = 1; i <= 100; i++) {
//     if (i % 3 == 0) continue
//     document.write(i, "<br>")
// }

//find no. is prime no.
// let n = parseInt(prompt('enter a no.'))
// for (let i = 2; i < n; i++) {
//     if (n % i == 0) {
//         document.write('not prime no.')
//         break
//     }
//     if (i == n - 1 && n % i != 0) {
//         document.write('prime no.')
//     }
// }

// let prime=true
// for (let i = 2; i < n; i++) {
//     if (n % i == 0) {
//         prime=false
//         break
//     }
// }
// prime?document.write('prime no.'):document.write('not prime no.')

// *
// **
// ***
// ****
// for (let i = 1; i < 5; i++) {
//     for (let j = 1; j < 5; j++) {
//         document.write('*')
//     }
//     document.write('<br>')
// }

// for (let i = 1; i < 5; i++) {
//     for (let j = 1; j <= i; j++) {
//         document.write('*')
//     }
//     document.write('<br>')
// }

// for (let i = 4; i >= 1; i--) {
//     for (let j = 1; j <= i; j++) {
//         document.write('*')
//     }
//     document.write('<br>')
// }
//1
//12
//123
//1234
// for (let i = 1; i < 5; i++) {
//     for (let j = 1; j <= i; j++) {
//         document.write(j)
//     }
//     document.write('<br>')
// }
//1
//23
//456
//78910
// let x=1
// for (let i = 1; i < 5; i++) {
//     for (let j = 1; j <= i; j++) {
//         document.write(x)
//         x++
//     }
//     document.write('<br>')
// }

//   *
//  ***
// *****
//*******








