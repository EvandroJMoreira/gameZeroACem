// Sorteia um número aleatório entre 0 e 100
const secretNumber = Math.floor(Math.random() * 101);
let attempts = 0; // Contador de tentativas
let lowerBound = 0; // Limite inferior do intervalo
let upperBound = 100; // Limite superior do intervalo

// Referências aos elementos HTML
const lowerBoundSpan = document.getElementById('lowerBound');
const upperBoundSpan = document.getElementById('upperBound');
const guessInput = document.getElementById('guessInput');
const guessButton = document.getElementById('guessButton');
const messageDiv = document.getElementById('message');

// Permite que o usuário pressione "Enter" para enviar a tentativa
guessInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        guessButton.click(); // Simula o clique no botão
    }
});

// Atualiza os limites no texto da página
function updateBounds() {
    lowerBoundSpan.textContent = lowerBound;
    upperBoundSpan.textContent = upperBound;
}

// Adiciona o evento de clique ao botão
guessButton.addEventListener('click', () => {
    const guess = parseInt(guessInput.value, 10); // Converte o valor do input para número
    attempts++;

    if (isNaN(guess)) {
        messageDiv.textContent = 'Por favor, insira um número válido!';
        return;
    }

    if (guess === secretNumber) {
        messageDiv.innerHTML = `<strong>Parabéns!</strong> Você acertou o número secreto (${secretNumber}) em ${attempts} tentativa(s).`;
        guessButton.disabled = true; // Desativa o botão após o acerto
        guessInput.disabled = true; // Desativa o campo de entrada
        return;
    }

    if (guess < secretNumber) {
        messageDiv.textContent = 'O número é maior!';
        lowerBound = Math.max(lowerBound, guess);
    } else {
        messageDiv.textContent = 'O número é menor!';
        upperBound = Math.min(upperBound, guess);
    }

    updateBounds();
    guessInput.value = ''; // Limpa o campo de entrada
});

// Inicializa os limites na interface
updateBounds();