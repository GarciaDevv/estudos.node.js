function calculadora() {
  // Solicita o primeiro número ao usuário
  const num1 = parseFloat(prompt("Digite o primeiro número:"));

  // Validação para garantir que o número é válido
  if (isNaN(num1)) {
    alert("Por favor, insira um número válido!");
    return;
  }

  // Solicita o segundo número ao usuário
  const num2 = parseFloat(prompt("Digite o segundo número:"));

  // Validação para garantir que o número é válido
  if (isNaN(num2)) {
    alert("Por favor, insira um número válido!");
    return;
  }

  // Solicita a operação ao usuário
  const operacao = prompt("Escolha a operação (+, -, *, /):");

  // Variável para armazenar o resultado
  let resultado;

  // Realiza a operação baseada na entrada do usuário
  switch (operacao) {
    case "+":
      resultado = num1 + num2;
      break;
    case "-":
      resultado = num1 - num2;
      break;
    case "*":
      resultado = num1 * num2;
      break;
    case "/":
      if (num2 === 0) {
        alert("Não é possível dividir por zero!");
        return;
      }
      resultado = num1 / num2;
      break;
    default:
      alert("Operação inválida! Escolha entre +, -, *, /.");
      return;
  }

  // Exibe o resultado para o usuário
  alert(`O resultado da operação ${num1} ${operacao} ${num2} é: ${resultado}`);
}

// Executa a função calculadora
calculadora();
