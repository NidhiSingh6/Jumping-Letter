const container =document.querySelectorAll('span')

container.forEach((e)=>{
    e.addEventListener('click',()=>{
        e.classList.toggle("active")
    })
})