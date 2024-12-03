const reISBN = new RegExp(String.raw`^(?=(?:\D*\d){10}(?:(?:\D*\d){3})?$)[\d-]+$`);
const main = document.getElementsByTagName('main')[0]
const inputText = document.getElementById('laele');
const igual = document.querySelector('.alberto');

async function resgataDado(valor) {
    const resp = await fetch(`https://brasilapi.com.br/api/isbn/v1/${valor}`)
    if (resp.status >= 200 && resp.status < 300) {
        return resp
    } else {
        return [resp.status, 'Houve um erro na requisição. Tente novamente']
    }
};

function elementoInfo(ti, au, ed, an){
    const secao = document.createElement('section')
    const titulo = document.createElement('h2')
    titulo.setAttribute('id', 'titulo')
    titulo.innerHTML = ti
    const autor = document.createElement('h3')
    autor.setAttribute('id', 'autor')
    autor.innerHTML = au
    const editora = document.createElement('h3')
    editora.setAttribute('id', 'editora')
    editora.innerHTML = ed
    const ano = document.createElement('h3')
    ano.setAttribute('id', 'ano')
    ano.innerHTML = an
    for (info of [titulo, autor, editora, ano]) {
        secao.appendChild(info)
    }
    return secao}

async function checkISBN(e) {
    valor = e.target.value;

    console.log('mudou mudou mudou');
    if (!reISBN.test(valor)) {
        console.log('deu ruim, famiglia');
        return;
    }

    const response = await resgataDado(valor);

    
    console.log(response);
    const obj = await response.json();
    const secao = elementoInfo(obj.title, obj.authors[0], obj.publisher, obj.year)
    main.appendChild(secao);
    /* titulo, autor, editora e ano*/
}


inputText.addEventListener('input', checkISBN);
