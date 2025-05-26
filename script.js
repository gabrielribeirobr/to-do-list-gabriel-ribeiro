const btnAdd = document.getElementById('btnAdd');

btnAdd.addEventListener("click", () => {
    const inputValue = document.getElementById('txt').value.trim(); // Verifica se o campo está vazio
    if (inputValue === "") return;

    const ul = document.getElementById('ul');

    const li = document.createElement('div');
    li.classList.add('itemLi');

    const wrapper = document.createElement('li');
    wrapper.classList.add('itemWrapper');


    // Cria o span para conter o texto da tarefa
    const span = document.createElement('span');
    span.textContent = inputValue;
    li.appendChild(span);

    const input = document.createElement('input');
    input.value = inputValue;
    li.appendChild(input);


    const btnEdit = document.createElement('button');
    span.appendChild(btnEdit);
    btnEdit.textContent = 'TESTE'
    btnEdit.classList.toggle('open');
    btnEdit.addEventListener("click", () => {
        wrapper.classList.toggle('expanded');
    })


    const buttonsLi = document.createElement('div');
    buttonsLi.classList.add('buttonsLi');

    // botão "salvar"

    const btnSave = document.createElement('button');
    btnSave.classList.add('btnSave');
    btnSave.textContent = "salvar";
    btnSave.addEventListener("click", (e) => {
        const button = e.target;
        const li = button.closest('li');
        const span = li.querySelector('span');
        console.log(span);
        
        
    });
    buttonsLi.appendChild(btnSave);

    // Botão "feito"
    const btnDone = document.createElement('button');
    btnDone.setAttribute('aria-label', 'Marcar como feito');
    btnDone.classList.add('btnDone');
    btnDone.addEventListener("click", () => {
        span.classList.toggle('done'); // Alterna riscado
    });

    // Botão "remover"
    const btnRemove = document.createElement('button');
    btnRemove.setAttribute('aria-label', 'Remover tarefa');
    btnRemove.classList.add('btnRemove');
    btnRemove.addEventListener("click", () => {
        ul.removeChild(wrapper);
    });

    // Montando tudo
    buttonsLi.appendChild(btnDone);
    buttonsLi.appendChild(btnRemove);
    wrapper.appendChild(li);
    wrapper.appendChild(buttonsLi);
    ul.appendChild(wrapper);

    // Limpa o campo
    document.getElementById('txt').value = "";
});
