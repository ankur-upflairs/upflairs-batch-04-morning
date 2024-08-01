let buttons=document.querySelectorAll('.button')
let display=document.querySelector('.display-content')
buttons.forEach(el=>{
    el.addEventListener('click',function(){
        // alert(this.innerText)
        let text=display.innerText
        let btnText=this.innerText
        if(this.innerText=='AC'){
            display.innerText='0';
            return
        }
        if(this.innerText=='DE'){
            text =text.slice(0,text.length-1)
            display.innerText=text;
            return
        }
        if(el.classList.contains('equals')){
            let result = eval(text)
            display.innerText=result
            return
        }
        text+=btnText
        if(!(text.includes('*') || text.includes('/') ||text.includes('+') ||text.includes('-') )) text=String(Number(text))
        
        display.innerText=text
    })
})
