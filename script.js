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

    li.textContent = document.getElementById('txt').value;

    /* criando o botão de remover a li */

    const btnRemove = document.createElement('button');
    li.appendChild(btnRemove);
    btnRemove.setAttribute('aria-label', 'Remover tarefa');
    btnRemove.classList.add('btnRemove');
    btnRemove.addEventListener("click", () => {
        ul.removeChild(wrapper);
    });


    
    wrapper.appendChild(li);
    wrapper.appendChild(btnRemove)
    ul.appendChild(wrapper);
    
    document.getElementById('txt').value = "";
});
