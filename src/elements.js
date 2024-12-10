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
    for (info of [titulo, autor, editora, ano]) {
        secao.appendChild(info)
    }
    return secao;
};

export async function resgataDado(valor) {
    const resp = await fetch(`https://brasilapi.com.br/api/isbn/v1/${valor}`)
    if (resp.status >= 200 && resp.status < 300) {
        return resp
    } else {
        return [resp.status, 'Houve um erro na requisição. Tente novamente']
    }
};

export function transformValue(str){
    if (str.length != 13) return 'número menor do que o esperado'
    
    const ar = Array.from(str)
    for (let num of [3, 6, 10, 15]) {
        ar.splice(num, 0, '-')
    }
    return ar.join('')
};

console.log(transformValue('471230471263'));