const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.menu-opcoes');
    const navLinks =document.querySelectorAll('.menu-opcoes li')

       burger.addEventListener('click' ,()=>{
        nav.classList.toggle('menu-ativo');

        navLinks.forEach((link, index ) =>{
            if(link.style.animation){
                link.style.animation = ''
            }else{
                link.style.animation = `fadeMenu 0.5s ease forwards ${index / 7 + 0.5}s`}
        })

        burger.classList.toggle('toggle')

    })


}

navSlide();