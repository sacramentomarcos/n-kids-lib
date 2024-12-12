import { resgataDado, createSection, transformValue } from '../src/elements.js';

const reISBN = new RegExp(String.raw`^(?=(?:\D*\d){10}(?:(?:\D*\d){3})?$)[\d-]+$`);
const main = document.getElementsByTagName('main')[0];
const inputText = document.getElementById('laele');
const inputNome = document.getElementById('nomeemp');
const igual = document.querySelector('.alberto');
const form = document.getElementById('ola');


function checkISBN(valor) {
    const evitaLetra = new RegExp('[A-Za-z]');
    if (valor == '') return;
    if (evitaLetra.test(valor)) {
        console.log('não pode digitar letra');
        valor = (valor).slice(0, -1);
        return;
    };
    if (valor.length >= 10){
        if (!reISBN.test(valor)) {
            console.log('deu ruimno 10zao, famiglia');
            return;
        };
    }    
    return valor;
};

async function imprimeInfo(cod) {
    const response = await resgataDado(cod);
    const obj = await response.json();
    const secao = createSection(obj.title, obj.authors[0], obj.publisher, obj.year)
    main.appendChild(secao);
}

inputText.addEventListener('input', (e) => {
    const codigo = checkISBN(e.target.value)
    
    if (!codigo) return;

    imprimeInfo(codigo)    
});

