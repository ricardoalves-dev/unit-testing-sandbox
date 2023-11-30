// o arquivo de teste sempre será o nome original seguido de .test

const sum = require('./script.js');

// Para fazer o teste:
//    1 - Usamos o método test() que recebe como parâmetros:
//       a) Descrição do teste
//       b) Uma função a ser executada. Dentro dessa função chamamos o método expect() que é o que queremos testar e depois linkamos ele com o .toEqual()
//          para comparar o valor o valor obtido com o esperado
test('Soma 1 e 2 e valida se é igual a 3', () => {
  expect(sum(1, 2)).toEqual(3);
});
