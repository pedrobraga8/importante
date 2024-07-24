document.getElementById('showMessageBtn').addEventListener('click', function() {
    var messageDiv = document.getElementById('message');
    if (messageDiv.classList.contains('hidden')) {
        messageDiv.classList.remove('hidden');
        this.textContent = 'Esconder Mensagem';
    } else {
        messageDiv.classList.add('hidden');
        this.textContent = 'Mostrar Mensagem';
    }
});
