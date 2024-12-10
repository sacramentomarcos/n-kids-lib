import { resgataDado, createSection, transformValue } from '../src/elements';

const reISBN = new RegExp(String.raw`^(?=(?:\D*\d){10}(?:(?:\D*\d){3})?$)[\d-]+$`);
const main = document.getElementsByTagName('main')[0];
const inputText = document.getElementById('laele');
const inputNome = document.getElementById('nomeemp');
const igual = document.querySelector('.alberto');
const form = document.getElementById('ola');
const nomes = [
    "Ana", "Bruno", "Carla", "Daniel", "Eduardo", "Fernanda", "Gabriel", "Helena", "Igor", "Juliana",
    "Kaique", "Luana", "Marcelo", "Natália", "Otávio", "Paula", "Renato", "Sabrina", "Thiago", "Vanessa",
    "André", "Bianca", "Camila", "Diego", "Elaine", "Felipe", "Gisele", "Henrique", "Inês", "João",
    "Karla", "Larissa", "Maurício", "Nayara", "Osvaldo", "Patrícia", "Raquel", "Samuel", "Tatiana", "Victor",
    "Alice", "Bernardo", "Clara", "Davi", "Ester", "Fábio", "Giovana", "Hugo", "Isabela", "Júlio",
    "Karen", "Lucas", "Manuela", "Nicolas", "Olivia", "Pedro", "Rafaela", "Sérgio", "Tânia", "Vinícius",
    "Alessandra", "Benício", "Cássio", "Débora", "Éverton", "Fabiana", "Gabriela", "Heitor", "Iara", "Joaquim",
    "Kátia", "Leonardo", "Milena", "Natanael", "Oscar", "Priscila", "Ruan", "Simone", "Túlio", "Valéria",
    "Alex", "Beatriz", "Cristiano", "Danilo", "Edna", "Fernando", "Glória", "Hélio", "Ivana", "José",
    "Kauã", "Lorena", "Miriam", "Natirê", "Orlando", "Paulo", "Rita", "Silvio", "Tiago", "Vânia"
  ];

// async function resgataDado(valor) {
//     const resp = await fetch(`https://brasilapi.com.br/api/isbn/v1/${valor}`)
//     if (resp.status >= 200 && resp.status < 300) {
//         return resp
//     } else {
//         return [resp.status, 'Houve um erro na requisição. Tente novamente']
//     }
// };

// function elementoInfo(ti, au, ed, an) {
//     const secao = document.createElement('section')
//     secao.setAttribute('id', 'secao')
//     const titulo = document.createElement('h2')
//     titulo.setAttribute('id', 'titulo')
//     titulo.innerHTML = ti
//     const autor = document.createElement('h3')
//     autor.setAttribute('id', 'autor')
//     autor.innerHTML = au
//     const editora = document.createElement('h3')
//     editora.setAttribute('id', 'editora')
//     editora.innerHTML = ed
//     const ano = document.createElement('h3')
//     ano.setAttribute('id', 'ano')
//     ano.innerHTML = an
//     for (info of [titulo, autor, editora, ano]) {
//         secao.appendChild(info)
//     }
//     return secao
// }


async function checkISBN(e) {
    const valor = e.target.value
    const evitaLetra = new RegExp('[A-Za-z]')
    if (evitaLetra.test(valor)) {
        console.log('não pode digitar letra')
        e.target.value = (e.target.value).slice(0, -1)
    };

    e.target.value = transformValue(valor)

    if (!reISBN.test(valor)) {
        console.log('deu ruim, famiglia');
        return;
    };

    const response = await resgataDado(valor);

    const obj = await response.json();
    const secao = createSection(obj.title, obj.authors[0], obj.publisher, obj.year)
    main.appendChild(secao);
};

inputText.addEventListener('input', checkISBN);

