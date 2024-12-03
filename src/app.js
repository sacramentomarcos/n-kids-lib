const listbtn = document.getElementsByClassName('menubtn');
for (botao of listbtn) {
    botao.addEventListener('click', (e) =>{
        const href = e.target.getAttribute('data-href');
        if (href){
            window.location.href = href
            console.log(href)
        }
    });
};