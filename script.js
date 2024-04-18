function somaFunc(a, b) {
  return Number(a) + Number(b);
}
function subtrFunc(a, b) {
  return Number(a) - Number(b);
}
function multiFunc(a, b) {
  return Number(a) * Number(b);
}
function divFunc(a, b) {
  if (Number(a) >= Number(b) && Number(b) !== 0) {
    return a / b;
  } else {
    return 'A operação não pode ser realizada!';
  }
}

let visorCalc = document.getElementById('display');
const teclasCalc = document.querySelectorAll('.tecla');

function entradaFunc() {
  for (let i = 0; i < teclasCalc.length; i++) {
    const tecla = teclasCalc[i];
    tecla.addEventListener('click', () => {
      let valorTecla = tecla.innerText;
      visorCalc.value += valorTecla;

      // Tecla del para limpar o valor do visor da calculadora (visorCalc.value)
      if (valorTecla === 'del') visorCalc.value = '';
      /* Ao pressionar o botão =, inicia-se o processo para identificar qual a expressão matemática
        está sendo solicitado pelo usuário na operação*/ else if (valorTecla === '=') {
        let expreMat = visorCalc.value;
        if (expreMat.includes('+')) {
          let arrNum = expreMat.split('+');
          visorCalc.value = somaFunc(parseInt(arrNum[0]), parseInt(arrNum[1]));
        } else if (expreMat.includes('-')) {
          let arrNum = expreMat.split('-');
          visorCalc.value = subtrFunc(parseInt(arrNum[0]), parseInt(arrNum[1]));
        } else if (expreMat.includes('*')) {
          let arrNum = expreMat.split('*');
          visorCalc.value = multiFunc(parseInt(arrNum[0]), parseInt(arrNum[1]));
        } else if (expreMat.includes('/')) {
          let arrNum = expreMat.split('/');
          visorCalc.value = divFunc(parseInt(arrNum[0]), parseInt(arrNum[1]));
        }
        return visorCalc.value;
      }
    });
  }
}

// Chamada da função entradaFunc para que o processo de identificação seja realizado com sucesso.
entradaFunc();
