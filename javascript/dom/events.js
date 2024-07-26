let paragraph=document.getElementById('a')

function changeText(){
    paragraph.innerText='changed text'
}

//change background color and fontsize on event mouseenter

function change(){
    paragraph.style.background='yellowgreen'
    paragraph.style.fontSize='40px'
}

let btn=document.getElementById('btn')
let unorderedList=document.querySelector('ul')
let removeBtn=document.getElementById('remove')
btn.addEventListener('mouseenter',function (){
    let newListItem=document.createElement('li')
    newListItem.innerText='hello everyone'
    unorderedList.append(newListItem)
})
removeBtn.addEventListener('contextmenu',function(){
    this.style.backgroundColor='tan'
    unorderedList.lastElementChild.remove()
})
removeBtn.addEventListener('mouseenter',function(){
    this.style.backgroundColor='tan'
    unorderedList.lastElementChild.remove()
})

// button hide when user clicks on that button
// it removes the box from html and text changes to show 
// and user clicks again then text changes to hide and display 
// box again 






