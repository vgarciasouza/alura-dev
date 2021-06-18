
const carregaProjeto = () => {
const projetos = document.querySelector('[data-projetos-salvos]');

const projetosSalvos = JSON.parse(localStorage.getItem('projeto'))||[];

projetosSalvos.forEach((projeto) => {
    const conteudo = document.createElement('div')
    

    conteudo.innerHTML =  
        `<div class="projeto data-projeto">
            <pre><code class="codigo-salvo hljs ${projeto.linguagem}" contenteditable="false" aria-label="editor" data-codigo-salvo>${projeto.codigo}</code><pre>
            <div class="card-content">
                <h3 class="nome-salvo">${projeto.nome}</h3>
                <h4 class="descricao-salvo">${projeto.descricao}</h4>
            </div>
            <div class="rodape-card">
                <div class="social">
                    <img src="/img/comentarios.svg" alt="botão comentar" class="comentario">
                    <img src="/img/curtidas.svg" alt="botão curtir" class="curtidas">
                </div>
                <img src="author.png" alt="autor do projeto" class="autor">
            </div>
        </div>`
      
    projetos.appendChild(conteudo);

    let codigo = document.querySelector('[data-codigo-salvo]');
    codigo.innerHTML = hljs.highlight(codigo.innerText, {language: projeto.linguagem}).value;
    codigo.style.borderColor = projeto.cor
    

});

   


}

carregaProjeto();



