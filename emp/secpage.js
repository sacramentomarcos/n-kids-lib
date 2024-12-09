const main = document.getElementsByTagName('main')[0];

function elementoInfo(ti, au, ed, an) {
    const secao = document.createElement('section');
    secao.setAttribute('id', 'secao');
    const titulo = document.createElement('h2');
    titulo.setAttribute('id', 'titulo');
    titulo.innerHTML = ti;
    const autor = document.createElement('h3');
    autor.setAttribute('id', 'autor');
    autor.innerHTML = au;
    const editora = document.createElement('h3');
    editora.setAttribute('id', 'editora');
    editora.innerHTML = ed;
    const ano = document.createElement('h3');
    ano.setAttribute('id', 'ano');
    ano.innerHTML = an;
    for (info of [titulo, autor, editora, ano]) {
        secao.appendChild(info)
    }
    return secao;
}

const url = new URL(window.location.href);

const titulo = url.searchParams.get('titulo');
const autor = url.searchParams.get('autor');
const editora = url.searchParams.get('editora');
const ano = url.searchParams.get('ano');


main.appendChild(elementoInfo(titulo, autor,editora, ano));