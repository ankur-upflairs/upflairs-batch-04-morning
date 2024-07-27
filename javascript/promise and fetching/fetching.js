//promise is a way to deal with async task / non-block task

//pending,fulfilled, rejected
//method = get,post, delete ,put ,patch

// let res=fetch('https://jsonplaceholder.typicode.com/posts')
// //cb fn inside then executes when state is fulfill
// //json => java script object notation
// let resdata=res.then((res)=>res.json())
// //if rejected then cb inside catch is executed
// res.catch((err)=>console.log(err))

// resdata.then((data)=>console.log(data))
// resdata.catch((err)=>console.log(err))
// // console.log(res)

// fetch('https://jsonplaceholder.typicode.com/posts')
// .then(res=>res.json())
// .then(data=>data)
// .catch(err=>console.log(err))
let ol=document.querySelector('ol')
// fetch('https://jsonplaceholder.typicode.com/posts')
// .then(res=>res.json())
// .then(data=>{
//    data.forEach((v,i)=>{
//     let li=document.createElement('li')
//     li.innerText=v.title
//     ol.append(li)
//    })

// })
// .catch(err=>console.log(err))
// let list=''
// fetch('https://jsonplaceholder.typicode.com/posts')
// .then(res=>res.json())
// .then(data=>{
//    data.forEach((v,i)=>{
//     list+=`<li>${v.title}</li>`
//    })
//    ol.innerHTML=list
// })
// .catch(err=>console.log(err))


// fetch('https://icanhazdadjoke.com/',{
//     method:'GET',
//     headers:{
//         'Accept':'application/json',
       
//     },
   
// }).then(res=>res.json())
// .then(data=>console.log(data))




