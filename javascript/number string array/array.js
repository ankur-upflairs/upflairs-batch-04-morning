// let arr=[34,'pawan',true,[4,5]]
// console.log(arr[1])
//indexing
// console.log(arr.length)
// let arr=[1,2,3,5]
// console.log(arr.concat([3,4]))
// console.log(arr.includes(13))
// console.log(arr.pop())//remove lase element
// console.log(arr.push(34,45,2))//add elements at last
// console.log(arr.shift())//remove first element
// console.log(arr.unshift(12,14))
// console.log(arr.indexOf(5))
// console.log(arr.lastIndexOf(3))
// console.log(typeof arr.join(''))//'1235'
// console.log(arr.reverse())
// console.log(arr.slice(1))
// console.log(arr.splice(1,0,23,12,56))
// arr[10]=9
// console.log(arr)

// for(let i in arr){
//     console.log(i,arr[i])
// }
// for(let i of arr){
//     //i= element
//     console.log(i)
// }
// let arr2d=[
//     [1,2,3],
//     [4,5,6],
//     [7,8,9]
// ]
//ask no. from user and their friends name
//print them in list
// print 2d array in table 
// let arr=[1,2,3,4,5,6]
// arr.forEach((value,index,array)=>{
//     console.log(value)
// })

// document.write('<ul>')
// arr.forEach((value,index,array)=>{
// document.write(`<li>${value}</li>`)
    
// })
// document.write('</ul>')

// let doubleArr=arr.map((v,i)=>{
//     return v*2
// })
// console.log(doubleArr)
// let a=arr.every((v,i)=>v<5)
// console.log(a)
// let a=arr.some((v,i)=>v<5)
// console.log(a)

// console.log(arr.find(v=>v>4))
// find return element that satify condition 
// console.log(arr.findIndex(function(v){return v>2}))
// findIndex return index of element that satify condition

// let newArray=arr.filter((v,i)=>v>=3)
// filter return an array of elements that satify condition 
// console.log(newArray)

// make an array of friends and filter friends that have 5 or more 
//characters in theirs name and find if all names starts with 's'
//find if any name starts with 's'
// let friends=['pawan','gagan kumar','aman','sunil']

// let filterFriends=friends.filter(v=>{
//     return v.length>=5
// })
// console.log(filterFriends)
// console.log(friends.every(v=>{
//     return v.startsWith('s')
// }))
// console.log(friends.some(v=>{
//     return v.startsWith('s')
// }))
// let arr1=[1,20,3,45]
// // console.log(arr1.sort((a,b)=>b-a))

// let sum=arr1.reduce((accumalator,v,i,arr)=>{
//     return accumalator+v
// },0)
// //v=1 acc=0 => 1
// //20  1   =>21
// //3  21  => 24
// //45 24 => 69
// // console.log(sum)


