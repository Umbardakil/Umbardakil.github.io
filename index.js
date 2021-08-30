const btn = document.querySelector('.hamburger')
const navigation = document.querySelector('.navigation')
const container = document.querySelector('.container')
const links = document.querySelectorAll('.links')



btn.addEventListener('click', ()=> {
navigation.classList.toggle('show')
})

links.forEach(link =>{
    link.addEventListener('click', ()=>{
    navigation.classList.remove('show')
    })
})
window.addEventListener('resize', function(){
    if(container.clientWidth > 800){
        navigation.classList.remove('show')  
    }
} )


