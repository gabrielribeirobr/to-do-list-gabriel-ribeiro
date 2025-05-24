/* criando o botão para adicionar tarefas */
const btnAdd = document.getElementById('btnAdd');

btnAdd.addEventListener("click", () => {

    const wrapper = document.createElement('div');
    wrapper.classList.add('itemWrapper');


    const inputValue = document.getElementById('txt').value.trim(); // verificando se o campo está vazio
    if (inputValue === "") return;


    /*  criando a li da ul */
    const li = document.createElement('li');
    li.classList.add('itemLi');
    const ul = document.getElementById('ul');
    ul.appendChild(li);

    const buttonsLi = document.createElement('div');
    buttonsLi.classList.add('buttonsLi');
    li.appendChild(buttonsLi);

    li.textContent = document.getElementById('txt').value;

    /* criando o botão de remover a li */

    const btnRemove = document.createElement('button');
    buttonsLi.appendChild(btnRemove);
    btnRemove.setAttribute('aria-label', 'Remover tarefa');
    btnRemove.classList.add('btnRemove');
    btnRemove.addEventListener("click", () => {
        ul.removeChild(wrapper);
    });

    const btnDone = document.createElement('button');
    buttonsLi.appendChild(btnDone);
    btnDone.setAttribute('arial-label', 'Marcar como feito');
    btnDone.classList.add('btnDone');
    btnDone.addEventListener("click", () =>{
        
    })


    
    wrapper.appendChild(li);
    wrapper.appendChild(buttonsLi);
    ul.appendChild(wrapper);
    
    document.getElementById('txt').value = "";
});
