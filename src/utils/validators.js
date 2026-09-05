// Funções puras de validação. "Puras" significa: recebem um valor,
// devolvem um resultado, e não dependem de nada da tela (nada de
// useState aqui). Isso facilita muito testar e reutilizar.

export function validarNomeCompleto(nome) {
  return nome.trim().length >= 2;
}

export function validarEmail(email) {
  // Regex simples: algo@algo.algo
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email.trim());
}

export function validarSenha(senha) {
  return senha.length > 0;
}

export function senhasConferem(senha, repetirSenha) {
  return senha === repetirSenha && senha.length > 0;
}


// Validação de CPF com dígitos verificadores (é isso que o PDF
// pede: "aceitar apenas um CPF válido, dígitos verificadores conferem").

// Como funciona, passo a passo:
// 1. Remove tudo que não é número (pontos, traços).
// 2. Descarta CPFs com todos os dígitos iguais (111.111.111-11 é
//    matematicamente "válido" pela fórmula, mas não é um CPF real).
// 3. Calcula o 1º dígito verificador a partir dos 9 primeiros números.
// 4. Calcula o 2º dígito verificador a partir dos 10 primeiros
//    (os 9 originais + o 1º dígito que acabamos de calcular).
// 5. Compara os dígitos calculados com os dois últimos números do CPF.
export function validarCPF(cpf) {
  const numeros = cpf.replace(/\D/g, '');

  if (numeros.length !== 11) return false;
  if (/^(\d)\1{10}$/.test(numeros)) return false; // todos os dígitos iguais

  const calcularDigito = (base) => {
    let soma = 0;
    let peso = base.length + 1;
    for (let i = 0; i < base.length; i++) {
      soma += parseInt(base[i], 10) * peso;
      peso--;
    }
    const resto = soma % 11;
    return resto < 2 ? 0 : 11 - resto;
  };

  const primeiros9 = numeros.slice(0, 9);
  const digito1 = calcularDigito(primeiros9);
  const primeiros10 = primeiros9 + digito1;
  const digito2 = calcularDigito(primeiros10);

  return numeros === primeiros10 + digito2;
}

// Formata CPF para exibição: 12345678900 -> 123.456.789-00
export function formatarCPF(cpf) {
  const numeros = cpf.replace(/\D/g, '');
  return numeros.replace(
    /(\d{3})(\d{3})(\d{3})(\d{2})/,'$1.$2.$3-$4'
  );
}
