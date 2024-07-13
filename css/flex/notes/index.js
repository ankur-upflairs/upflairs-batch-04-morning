let direction=document.querySelectorAll('.direction li')
// let dirctionRowReverse=document.querySelector('.direction li:nth-child(2)')
let directionContainer=document.querySelector('.direction .container')

direction.forEach(element => {
    element.addEventListener('click',function() {        
        directionContainer.style.flexDirection=this.innerText  
        direction.forEach(el=>el.style.backgroundColor='')
        this.style.backgroundColor='green'    
    })
});
let jusityContainer=document.querySelector('.justify .container')
let justifyContent=document.querySelectorAll('.justify li')

justifyContent.forEach(element => {
    console.log(element)
    element.addEventListener('click',function() {        
        jusityContainer.style.justifyContent=this.innerText  
        justifyContent.forEach(el=>el.style.backgroundColor='')
        this.style.backgroundColor='green'    
    })
});

let wrapContainer=document.querySelector('.wrap .container')
let flexWrap=document.querySelectorAll('.justify li')

flexWrap.forEach(element => {
    console.log(element)
    element.addEventListener('click',function() {        
        wrapContainer.style.flexWrap=this.innerText  
        flexWrap.forEach(el=>el.style.backgroundColor='')
        this.style.backgroundColor='green'    
    })
});