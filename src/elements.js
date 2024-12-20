export function createSection(ti, au, ed, an) {
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
    for (let info of [titulo, autor, editora, ano]) {
        secao.appendChild(info)
    }
    return secao;
};



export function retiraLetra(texto) {
    const checkNumber = '1234567890';
    const letras = Array.from(texto)
    for (let index = 0; index <= texto.length; index++){
        if (![...checkNumber].includes(texto[index])){
            letras.splice(index, 1);
        };
    };
    const filtrado = letras.join('');
    console.log(filtrado);
    return filtrado;
};

export function toObj(titulo, autor, editora, ano) {
    const obj = {
        titulo: titulo,
        autor: autor,
        editora: editora,
        ano: ano,
    };
    return obj
} 


export async function resgataDado(valor) {
    const resp = await fetch(`https://brasilapi.com.br/api/isbn/v1/${valor}`);
    if (resp.ok) {
        console.log(resp);
        (resp.status >= 200 && resp.status < 300);
        return resp;
    } else {
        console.log(resp);
        throw new Error (`Erro ${resp.status}: Houve um erro na requisição. Tente novamente.`);
    };
};

export function transformValue(e){
    const refNums = [2, 5, 10, 14];
    const indice = (e.target.value).length - 1;
    if (refNums.includes(indice)) {
        e.target.value += '-';
    };
    return e.target.value;
};