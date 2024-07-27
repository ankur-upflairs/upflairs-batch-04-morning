
// async function getData(){
//     let res=await fetch('https://jsonplaceholder.typicode.com/users')
//     let data=await res.json()
//     let box=document.createElement('div')
//     let details=''
//     data.forEach((v,i)=>{
//         details+=`<p>Name- ${v.name} and email- ${v.email}</p>`
//     })
//     box.innerHTML=details
//     document.body.append(box)
// }

async function getData(){
    try {
        let res=await fetch('https://jsonplaceholder.typicode.com/users')
        let data=await res.json()
        let box=document.createElement('div')
        let details=''
        data?.forEach((v,i)=>{
            details+=`<p>Name- ${v.name} and email- ${v.email}</p>`
        })
        box.innerHTML=details
        document.body.append(box)

    } catch (error) {
        console.log(error)
    }      
}
getData()

