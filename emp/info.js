import { toObj, retiraLetra, resgataDado, createSection, transformValue } from '../src/elements.js';

const reISBN = new RegExp(String.raw`^(?=(?:\D*\d){10}(?:(?:\D*\d){3})?$)[\d-]+$`);
const main = document.getElementsByTagName('main')[0];
const inputText = document.getElementById('laele');
const inputNome = document.getElementById('nomeemp');
const igual = document.querySelector('.alberto');
const envio = document.querySelector('.atag')


function checkISBN(valor) {
    console.log(valor)
    if (valor == '') return;
    const novoValor = retiraLetra(valor);
    if (novoValor.length >= 10){
        if (!reISBN.test(novoValor)) {
            console.log('deu ruimno 10zao, famiglia');
            return;
        };
    } else {
        console.log('não tem 10 dígitos')
        return;
    }
    return novoValor;
};

async function imprimeInfo(cod) {
    const response = await resgataDado(cod);
    const obj = await response.json();
    const dados = toObj(obj.title, obj.authors[0], obj.publisher, obj.year)
    const secao = createSection(obj.title, obj.authors[0], obj.publisher, obj.year)
    
    main.appendChild(secao);
    console.log(dados.titulo)
    return dados
}

inputText.addEventListener('input', async (e) => {
    const codigo = checkISBN(e.target.value)
    if (!codigo) return;
    if (document.querySelector('#secao')){
        const main = document.getElementsByTagName('main')[0];
        main.removeChild(document.querySelector('#secao'));
    };
    const dados = await imprimeInfo(codigo);
    const href = document.querySelector('.atag').href
    const novoEnd = new URL(href)
    console.log(dados['titulo'])
    for (let chave in dados) {
        novoEnd.searchParams.set(`${chave}`, dados.chave)
    }
    if (inputNome.innerText == ''){
        igual.innerText = 'coloca o nome ai'
        envio.style.pointerEvents = 'none';
        envio.style.color = 'grey'
        return;
    } else {
        envio.style.pointerEvents = ''
        envio.style.color = 'blue'
    }
    console.log(novoEnd)
});


