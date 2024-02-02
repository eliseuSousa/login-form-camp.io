(() => {
  const visualizarSenha = document.getElementById('visualizar-senha');
  const inputSenha = document.getElementById('senha');

  visualizarSenha.addEventListener('click', () => {
    if(inputSenha.type == 'password') {
      inputSenha.type = 'text';
      visualizarSenha.classList.remove('fa-eye');
      visualizarSenha.classList.add('fa-eye-slash');
    } else {
      inputSenha.type = 'password';
      visualizarSenha.classList.remove('fa-eye-slash');
      visualizarSenha.classList.add('fa-eye');
    }
  });

})();