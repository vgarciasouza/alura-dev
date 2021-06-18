const salvar = document.querySelector ('[data-salvar]');


salvar.addEventListener ('click', () => {
    const projetosSalvos = JSON.parse(localStorage.getItem('projeto'))||[];
    const nome = document.querySelector('[data-project-name]').value;
    const descricao = document.querySelector ('[data-project-description]').value;
    const cor = document.querySelector ('[data-color]').value;
    const linguagem = document.querySelector('.seletor-linguagem').value;
    const codigo = areaDoCodigo.querySelector('code').innerText;



    const dados = {
        nome,
        descricao,
        cor,
        linguagem, 
        codigo
    }

    const salvosProjetos = [...projetosSalvos, dados]
    
    
    localStorage.setItem ('projeto', JSON.stringify(salvosProjetos));

    

   
    

})
