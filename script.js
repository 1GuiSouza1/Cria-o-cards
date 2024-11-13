document.addEventListener("DOMContentLoaded", function() {
    // Abrir e fechar popup para criar andar
    const btnAdicionarAndar = document.getElementById("btn-adicionar-andar");
    const popupAndar = document.getElementById("popup");
    const btnFecharAndar = document.getElementById("btn-fechar");
    const btnCriarAndar = document.querySelector(".criar");
    const btnCancelarAndar = document.querySelector(".cancelar");
    const containerAndares = document.getElementById("andares-container");

    const inputNome = document.getElementById("input-nome");
    const inputCor = document.getElementById("input-cor");

    // Abrir o pop-up de criação de andar
    btnAdicionarAndar.addEventListener("click", function() {
        popupAndar.style.display = "flex";
    });

    // Fechar pop-up de andar
    btnFecharAndar.addEventListener("click", function() {
        popupAndar.style.display = "none";
    });

    btnCancelarAndar.addEventListener("click", function() {
        popupAndar.style.display = "none";
    });

    // Função para adicionar um novo andar e gerar o carrossel de laboratórios
    btnCriarAndar.addEventListener("click", function() {
        const nomeAndar = inputNome.value;
        const corSelecionada = inputCor.textContent;

        if (nomeAndar && corSelecionada !== "Selecione uma cor") {
            // Cria o container do novo andar
            const novoAndarContainer = document.createElement("div");
            novoAndarContainer.classList.add("andar-container");

            // Cria o título do andar com a cor selecionada
            const tituloAndar = document.createElement("div");
            tituloAndar.classList.add("titulo-andar");

            // Aplica a cor de fundo selecionada no título do andar
            tituloAndar.style.backgroundColor = getCorSelecionada(corSelecionada);
            tituloAndar.textContent = nomeAndar;

            // Adiciona o título ao container do andar
            novoAndarContainer.appendChild(tituloAndar);

            // Cria o carrossel de laboratórios
            const laboratorioCarrossel = document.createElement("div");
            laboratorioCarrossel.classList.add("laboratorio-carrossel");

            // Adiciona um card "Adicionar laboratório"
            const cardAdicionar = document.createElement("div");
            cardAdicionar.classList.add("card-laboratorio");

            const imgAdicionar = document.createElement("img");
            imgAdicionar.src = "imagens/mais.png";  // Caminho da imagem "Adicionar"
            imgAdicionar.alt = "Adicionar laboratório";

            cardAdicionar.appendChild(imgAdicionar);
            laboratorioCarrossel.appendChild(cardAdicionar);

            // Adiciona o carrossel ao container do andar
            novoAndarContainer.appendChild(laboratorioCarrossel);

            // Insere o novo andar no container principal
            containerAndares.appendChild(novoAndarContainer);

            // Limpa os inputs do formulário
            inputNome.value = "";
            inputCor.textContent = "Selecione uma cor";

            // Fecha o popup de andar
            popupAndar.style.display = "none";

            // Adiciona evento para abrir o pop-up de adicionar laboratório
            imgAdicionar.addEventListener("click", function() {
                const popupLaboratorio = document.getElementById("popup-laboratorio");
                popupLaboratorio.style.display = "flex"; // Exibe o pop-up
            });
        } else {
            alert("Por favor, preencha o nome do andar e selecione uma cor.");
        }
    });

    // Função para obter a cor correspondente ao texto selecionado
    function getCorSelecionada(corTexto) {
        const cores = {
            "Rosa": "#EB6E8E",
            "Azul": "#337BC3",
            "Amarelo": "#FFB303",
            "Roxo": "#5A3168",
            "Verde": "#2D854E",
            "Vermelho": "#eb1f2c",
            "Laranja": "#ff8324",
            "Cinza": "#575757",
            "Marrom": "rgb(147, 37, 37)",
            "Preto": "black"
        };
        return cores[corTexto] || "#d9d9d9"; // Cor padrão cinza
    }

    // Controlar a seleção de cor
    const customSelect = document.querySelector(".custom-select");
    const selectedOption = customSelect.querySelector(".selected-option");
    const optionsList = customSelect.querySelector(".options-list");
    const optionsListItems = optionsList.querySelectorAll("li");

    customSelect.addEventListener("click", function() {
        customSelect.classList.toggle("active");
    });

    optionsListItems.forEach(function(option) {
        option.addEventListener("click", function() {
            const selectedColor = this.style.color;
            const selectedText = this.innerText;

            // Define o texto e a cor no "selected-option"
            selectedOption.innerText = selectedText;
            selectedOption.style.color = selectedColor; // Cor do texto selecionado
            selectedOption.style.backgroundColor = "white"; // Mantém o fundo branco

            // Também atualiza a cor do input de seleção
            inputCor.textContent = selectedText; // Atualiza o texto de cor
            inputCor.style.color = selectedColor; // Define a cor correspondente
        });
    });

    document.addEventListener("click", function(event) {
        if (!customSelect.contains(event.target)) {
            customSelect.classList.remove("active");
        }
    });
});

// Pop-up para criação de laboratório
const btnFecharLaboratorio = document.getElementById('btn-fechar-laboratorio');

btnFecharLaboratorio.addEventListener('click', function() {
    const popupLaboratorio = document.getElementById('popup-laboratorio');
    popupLaboratorio.style.display = 'none'; // Esconde o pop-up
});
