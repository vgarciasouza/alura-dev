const buscaSlide = () => {
    const buscaMobile = document.querySelector('.busca-mobile');
    const busca = document.querySelector('.busca');
    

       buscaMobile.addEventListener('click' ,()=>{
        busca.classList.toggle('busca-ativo');

    })


}

buscaSlide();