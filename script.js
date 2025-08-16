// Aguarda o carregamento completo do DOM antes de executar o script
document.addEventListener('DOMContentLoaded', function() {
  // Seleciona todos os elementos com a classe 'command'
  document.querySelectorAll('.command').forEach(function(cmd) {
    // Adiciona um evento de clique para cada bloco de comando
    cmd.addEventListener('click', function() {
      // Obtém o texto do comando (conteúdo do <h2>)
      const commandText = cmd.querySelector('h2').textContent;
      // Copia o texto do comando para a área de transferência do usuário
      navigator.clipboard.writeText(commandText);

      // Salva a cor de fundo original do bloco
      const originalBg = cmd.style.backgroundColor;
      // Altera a cor de fundo para dar feedback visual de cópia
      cmd.style.backgroundColor = '#d1ffdfff';
      // Após 800ms, retorna a cor de fundo original
      setTimeout(() => {
        cmd.style.backgroundColor = originalBg || '';
      }, 800);
    });
  });
});