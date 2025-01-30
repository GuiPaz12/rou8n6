// Verifica se já existe um contador no LocalStorage
let playerCount = localStorage.getItem('playerCount') || 0;

// Atualiza o contador na tela
document.getElementById('playerCount').textContent = playerCount;

// Adiciona interatividade ao botão de confirmação
document.getElementById('confirmButton').addEventListener('click', function() {
    // Incrementa o contador
    playerCount++;
    // Atualiza o contador no LocalStorage
    localStorage.setItem('playerCount', playerCount);
    // Atualiza o contador na tela
    document.getElementById('playerCount').textContent = playerCount;

    // Exibe o GIF
    const gifContainer = document.getElementById('gifContainer');
    gifContainer.style.display = 'block';

    // Exibe uma mensagem
    alert('Presença confirmada! Veja você na sexta-feira às 14:30 no Bloco 2. 🎉');
});

// Adiciona interatividade ao botão de reiniciar contador
document.getElementById('resetButton').addEventListener('click', function() {
    // Reinicia o contador
    playerCount = 0;
    // Atualiza o contador no LocalStorage
    localStorage.setItem('playerCount', playerCount);
    // Atualiza o contador na tela
    document.getElementById('playerCount').textContent = playerCount;

    // Exibe uma mensagem
    alert('Contador reiniciado com sucesso!');
});