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

    // botão "editar"
    
    const btnEdit = document.createElement('button');
    btnEdit.classList.add('btnEdit');
    btnEdit.addEventListener("click", () => {

        btnEdit.style.display = 'none';
        li.querySelector('input').style.display = "inline-block";
        btnRemove.style.display = "none";
        btnDone.style.display = "none";
        btnSave.style.display = 'inline-block';
        li.querySelector('span').style.display = "none";

        // botão adicionar descrição
        const btnDescription = document.createElement('button');
        btnDescription.classList.add('btnDescription');
        li.appendChild(btnDescription);
        btnDescription.textContent = 'Adicionar descrição';
        btnDescription.addEventListener("click", () =>{
            
        const liExpanded = li.closest('li');
        liExpanded.classList.add('expanded'); 
        })


        // expansão da LI desativada temporariamente

       
    });

    const buttonsLi = document.createElement('div');
    buttonsLi.classList.add('buttonsLi');

    // botão "salvar"

    const btnSave = document.createElement('button');
    btnSave.classList.add('btnSave');
    btnSave.addEventListener("click", (e) => {
        const button = e.target;
        const wrapperElement = button.closest('li');
        const span = wrapperElement.querySelector('span');
        const input = wrapperElement.querySelector('input');

        if (input.value.trim() === "") {
            alert("O nome da tarefa não pode estar vazio.");  // verifica se adicionou uma tarefa em branco
            return;
        };

        span.textContent = input.value;
        btnSave.style.display = 'none';
        btnEdit.style.display = 'inline-block';
        btnRemove.style.display = "inline-block";
        btnDone.style.display = "inline-block";
        span.style.display = "inline";
        li.querySelector('input').style.display = "none";
        wrapperElement.classList.remove('expanded');

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
    buttonsLi.appendChild(btnEdit);
    buttonsLi.appendChild(btnDone);
    buttonsLi.appendChild(btnRemove);
    wrapper.appendChild(li);
    wrapper.appendChild(buttonsLi);
    ul.appendChild(wrapper);

    // Limpa o campo
    document.getElementById('txt').value = "";
});
