// Verifica se já existe um contador no LocalStorage
let playerCount = localStorage.getItem('playerCount') || 0;
let confirmations = JSON.parse(localStorage.getItem('confirmations')) || [];

// Atualiza o contador na tela
document.getElementById('playerCount').textContent = playerCount;

// Adiciona interatividade ao botão de confirmação
document.getElementById('confirmButton').addEventListener('click', function() {
    // Incrementa o contador
    playerCount++;
    // Adiciona uma nova confirmação
    confirmations.push({ id: Date.now(), timestamp: new Date().toLocaleString() });

    // Atualiza o LocalStorage
    localStorage.setItem('playerCount', playerCount);
    localStorage.setItem('confirmations', JSON.stringify(confirmations));

    // Atualiza o contador na tela
    document.getElementById('playerCount').textContent = playerCount;

    // Exibe o GIF
    const gifContainer = document.getElementById('gifContainer');
    gifContainer.style.display = 'block';

    // Exibe uma mensagem
    alert('Presença confirmada! Veja você na sexta-feira às 14:30 no Bloco 2. 🎉');
});

// Adiciona interatividade ao botão de baixar confirmações
document.getElementById('downloadButton').addEventListener('click', function() {
    // Cria um arquivo JSON com as confirmações
    const data = JSON.stringify(confirmations, null, 2);
    const blob = new Blob([data], { type: 'application/json' });
    const url = URL.createObjectURL(blob);

    // Cria um link para download
    const a = document.createElement('a');
    a.href = url;
    a.download = 'confirmations.json';
    a.click();

    // Libera o objeto URL
    URL.revokeObjectURL(url);
});