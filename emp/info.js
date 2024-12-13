import { retiraLetra, resgataDado, createSection, transformValue } from '../src/elements.js';

const reISBN = new RegExp(String.raw`^(?=(?:\D*\d){10}(?:(?:\D*\d){3})?$)[\d-]+$`);
const main = document.getElementsByTagName('main')[0];
const inputText = document.getElementById('laele');
const inputNome = document.getElementById('nomeemp');
const igual = document.querySelector('.alberto');
const form = document.getElementById('ola');


function checkISBN(valor) {
    console.log(valor)
    if (valor == '') return;
    const novoValor = retiraLetra(valor);
    console.log('valor dpss do retiraLetra', novoValor)
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
    try{
        const antigaSecao = document.getElementById(secao)

    } catch (e){
        console.log(e)
    }
    const response = await resgataDado(cod);
    const obj = await response.json();
    const secao = createSection(obj.title, obj.authors[0], obj.publisher, obj.year)
    
    main.appendChild(secao);
}

inputText.addEventListener('input', (e) => {
    const codigo = checkISBN(e.target.value)
    
    if (!codigo) return;

    imprimeInfo(codigo);
});
