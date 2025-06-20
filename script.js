const btnAdd = document.getElementById('btnAdd');

btnAdd.addEventListener("click", () => {
    const inputValue = document.getElementById('txt').value.trim(); // Verifica se o campo está vazio
    if (inputValue === "") return;


    const ul = document.getElementById('ul');


    const wrapper = document.createElement('li');
    wrapper.classList.add('itemWrapper');

    const wrapperInputs = document.createElement('div');
    wrapperInputs.classList.add('wrapperInputs');
    wrapper.appendChild(wrapperInputs);

    const li = document.createElement('div');
    li.classList.add('itemLi');
    wrapperInputs.appendChild(li);

    const buttonsLi = document.createElement('div');
    buttonsLi.classList.add('buttonsLi');
    wrapperInputs.appendChild(buttonsLi);

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
        let btnDescription = li.querySelector('.btnDescription');
        if (!btnDescription) {                                      // verifica se já existe um botão para evitar criar o mesmo repetidas vezes
            btnDescription = document.createElement('button');
            btnDescription.classList.add('btnDescription');
            btnDescription.textContent = 'Adicionar descrição';
            li.appendChild(btnDescription);

            btnDescription.addEventListener("click", () => {
                const liExpanded = li.closest('li');
                liExpanded.classList.add('autoExpanded');
                btnDescription.style.display = "none";
                btnSave.style.display = 'none';

                const containerDescription = document.createElement('div');
                containerDescription.classList.add('containerDescription');
                wrapper.appendChild(containerDescription);


                const description = document.createElement('textarea'); // cria o text area para a descrição
                description.type = 'textarea';
                description.classList.add('description');
                description.placeholder = 'Digite uma descrição';
                wrapper.appendChild(description);

                const btnSaveDescription = document.createElement('button'); // criando botão de salvar descrição
                btnSaveDescription.textContent = 'Salvar descrição';
                btnSaveDescription.classList.add('btnSaveDescription');
                li.appendChild(btnSaveDescription);

                btnSaveDescription.addEventListener("click", () => {
                    btnSaveDescription.style.display = 'none';
                    btnDescription.style.display = 'block';
                    btnSave.style.display = "block"
                    

                    containerDescription.style.display = 'block';
                    description.style.display = 'none';

                    containerDescription.innerHTML = wrapper.querySelector('.description').value;
                });
            });
        } else {
            btnDescription.style.display = 'block'; // reexibe se já existe
        }
    });



    // botão "salvar"

    const btnSave = document.createElement('button');
    btnSave.classList.add('btnSave');
    btnSave.addEventListener("click", (e) => {
        const button = e.target;
        const wrapperElement = button.closest('li');
        const span = wrapperElement.querySelector('span');
        const input = wrapperElement.querySelector('input');
        const btnDescriptionElement = wrapperElement.querySelector('.btnDescription'); // crio um elemento para receber o botão criado em outro eventListener


        if (input.value.trim() === "") {
            alert("O nome da tarefa não pode estar vazio.");  // verifica se adicionou uma tarefa em branco
            return;
        };

        span.textContent = input.value;
        btnSave.style.display = 'none';
        btnEdit.style.display = 'inline-block';
        btnRemove.style.display = "inline-block";
        btnDone.style.display = "inline-block";

        if (btnDescriptionElement) {
            btnDescriptionElement.style.display = "none";
        }

        span.style.display = "inline";
        li.querySelector('input').style.display = "none";

        wrapper.classList.remove('expanded');

        


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
    ul.appendChild(wrapper);

    // Limpa o campo
    document.getElementById('txt').value = "";
});