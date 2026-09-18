document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.day-btn');
    const contents = document.querySelectorAll('.day-content');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const targetDay = button.getAttribute('data-day');

            // Oculta todas as seções
            contents.forEach(content => {
                content.classList.remove('active');
            });

            // Desativa todos os botões
            buttons.forEach(btn => {
                btn.classList.remove('active');
            });

            // Ativa o dia e o botão clicados
            document.getElementById(targetDay).classList.add('active');
            button.classList.add('active');
        });
    });
});