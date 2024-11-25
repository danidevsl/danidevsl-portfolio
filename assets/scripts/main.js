// Mostra informações do projeto ao clicar
function showProjectInfo(projectName) {
    const projectInfo = document.getElementById('project-info');
    projectInfo.textContent = `Você clicou no ${projectName}. Mais informações estarão disponíveis em breve!`;
    projectInfo.style.color = '#1E90FF'; // Destaca o texto
}

document.addEventListener('DOMContentLoaded', function () {
    // Seleciona todas as imagens dos projetos
    const projectImages = document.querySelectorAll('.project-image');

    // Seleciona o modal e o conteúdo da imagem
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    const closeBtn = document.querySelector('.close-btn');

    // Adiciona um evento de clique a cada imagem do projeto
    projectImages.forEach(image => {
        image.addEventListener('click', function () {
            // Define o src da imagem modal com o src da imagem clicada
            modalImage.src = image.getAttribute('data-image');
            // Exibe o modal
            modal.style.display = 'flex';
        });
    });

    // Fecha o modal quando o botão de fechar for clicado
    closeBtn.addEventListener('click', function () {
        modal.style.display = 'none';
    });

    // Fecha o modal clicando fora da imagem
    window.addEventListener('click', function (event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Modal de Currículo
    var modalCurriculo = document.getElementById("modalCurriculo");
    var btnAbrirModalCurriculo = document.getElementById("abrirModalCurriculo");
    var btnFecharModalCurriculo = document.getElementById("fecharModalCurriculo");

    // Certifique-se de que o modal está oculto ao carregar a página
    modalCurriculo.style.display = "none"; // Garante que o modal está oculto

    // Quando o usuário clicar no botão para abrir o modal, exibe o modal
    if (btnAbrirModalCurriculo) {
        btnAbrirModalCurriculo.onclick = function () {
            modalCurriculo.style.display = "flex"; // Torna o modal visível
        }
    }

    // Quando o usuário clicar no "x" para fechar o modal
    if (btnFecharModalCurriculo) {
        btnFecharModalCurriculo.onclick = function () {
            modalCurriculo.style.display = "none"; // Oculta o modal
        }
    }

    // Fecha o modal clicando fora dele
    window.addEventListener('click', function (event) {
        if (event.target === modalCurriculo) {
            modalCurriculo.style.display = "none"; // Oculta o modal se clicar fora
        }
    });
});

