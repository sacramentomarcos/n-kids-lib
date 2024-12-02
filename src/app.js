const listbtn = document.getElementsByClassName('menubtn');
for (botao of listbtn) {
    botao.addEventListener('click', (e) =>{
        console.log(e.type)
        console.log(e.target)
        
    });
};
