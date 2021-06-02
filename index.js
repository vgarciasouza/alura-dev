const areaDoCodigo = document.querySelector('.codigo-wrapper');
const linguagem = document.querySelector('.seletor-linguagem');
const botao = document.querySelector('.botao-highlight');


function mudaLinguagem() {
    const codigo = {conteudo: areaDoCodigo.querySelector('code').innerText};
    areaDoCodigo.innerHTML = `<code class="campo-editavel hljs ${linguagem.value}" contenteditable="true" aria-label="editor" id="code"></code>`
    areaDoCodigo.querySelector('code').innerText = code.conteudo;
}

linguagem.addEventListener('change', () => {
    mudaLinguagem()
})

botao.addEventListener('click', () => {
    const codigo = areaDoCodigo.querySelector('code')
    hljs.highlightBlock(codigo)
})

