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
    console.log(dados)
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
    console.log(dados)
    const elemHref = document.querySelector('.atag')
    const novoEnd = new URL(elemHref.href)
    novoEnd.searchParams.set('titulo', dados.titulo)
    novoEnd.searchParams.set('autor', dados.autor)
    novoEnd.searchParams.set('editora', dados.editora)
    novoEnd.searchParams.set('ano', dados.ano)
    novoEnd.searchParams.set('emprestante', inputNome.value)
    elemHref.href = novoEnd.toString()
    console.log(elemHref.href)
});


