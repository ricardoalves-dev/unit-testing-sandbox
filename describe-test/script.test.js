const fizzBuzz = require('./script.js');

// o describe cria um bloco de testes a serem executados em sequência...
describe('fizzbuzz', () => {
  // it() é equivalente a test() e funciona de forma semelhante...
  it('deveria ser uma função', () => {
    expect(typeof fizzBuzz).toEqual('function');
  });

  it('deveria retornar o próprio número se o mesmo não for divisível por 3 || 5', () => {
    expect(fizzBuzz(7)).toEqual(7);
    expect(fizzBuzz(14)).toEqual(14);
    expect(fizzBuzz(11)).toEqual(11);
    expect(fizzBuzz(1)).toEqual(1);
  });

  it('deveria retornar fizzbuzz se o número for divisível por 3 && 5', () => {
    expect(fizzBuzz(15)).toEqual('fizzbuzz');
    expect(fizzBuzz(45)).toEqual('fizzbuzz');
    expect(fizzBuzz(30)).toEqual('fizzbuzz');
    expect(fizzBuzz(75)).toEqual('fizzbuzz');
  });

  it('deveria retornar fizz se o número for divisível por 3', () => {
    expect(fizzBuzz(3)).toEqual('fizz');
    expect(fizzBuzz(9)).toEqual('fizz');
    expect(fizzBuzz(12)).toEqual('fizz');
    expect(fizzBuzz(21)).toEqual('fizz');
  });

  it('deveria retornar buzz se o número for divisível por 5', () => {
    expect(fizzBuzz(5)).toEqual('buzz');
    expect(fizzBuzz(25)).toEqual('buzz');
    expect(fizzBuzz(35)).toEqual('buzz');
    expect(fizzBuzz(20)).toEqual('buzz');
  });
});
