document.querySelectorAll('.container-faqs dt').forEach(item => {
    item.addEventListener('click', function() {
        const answer = this.nextElementSibling;
        const toggle = this.querySelector('.toggle');
        
        // Alternar a exibição da resposta
        answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
        
        // Alterar o símbolo de "+" para "-" e vice-versa
        toggle.textContent = toggle.textContent === '+' ? '-' : '+';
    });
});