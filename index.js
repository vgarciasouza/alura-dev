const areaDoCodigo = document.querySelector('.codigo-wrapper');
const linguagem = document.querySelector('.seletor-linguagem');
const botao = document.querySelector('.botao-highlight');


function mudaLinguagem() {
    let codigo = areaDoCodigo.querySelector('code').innerText
    areaDoCodigo.innerHTML = `<code class="campo-editavel hljs ${linguagem.value}" contenteditable="true" aria-label="editor" id="code"></code>`
    areaDoCodigo.firstChild.innerText = codigo
}

linguagem.addEventListener('change', () => {
    mudaLinguagem()
})

botao.addEventListener('click', () => {
    let codigo = areaDoCodigo.querySelector('code');
    codigo.innerHTML = hljs.highlight(codigo.innerText, {language: linguagem.value}).value;
})
