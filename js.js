const simBtn = document.getElementById('simBtn');
const naoBtn = document.getElementById('naoBtn');
const message = document.getElementById('message');

simBtn.addEventListener('click', function() {
  // Desabilita os botões
  simBtn.disabled = true;
  naoBtn.disabled = true;


  message.textContent = 'És linda!';
});

naoBtn.addEventListener('mouseover', function() {
  if (!simBtn.disabled) {
    // Apenas move o botão "Não" se o botão "Sim" não estiver desabilitado
    const randomX = Math.floor(Math.random() * 100); 
    const randomY = Math.floor(Math.random() * 100); 
    naoBtn.style.position = 'relative';
    naoBtn.style.left = randomX + 'px'; 
    naoBtn.style.top = randomY + 'px'; 
  }
});
