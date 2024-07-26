// let count=0
// let display=()=>{console.log(count,'hello');count++}

// setInterval(display,1000)
let box=document.querySelector('.box1')
let btn=document.querySelector('button')
let degree=0
let rotate=setInterval(()=>{
    box.style.transform=`rotate(${degree}deg)`
    degree++
},1)
btn.addEventListener('click',function(){
    clearInterval(rotate)
    clearTimeout(timeout)
})

let timeout=setTimeout(()=>{
    console.log('hello')
},5000)

// make a bouncing ball using setinterval 

//make a send button and after click on this 
//button changes to undo and reverse timer
// if user clicks on undo then cancel sending
//if doesn't then show an alert after timer stops

