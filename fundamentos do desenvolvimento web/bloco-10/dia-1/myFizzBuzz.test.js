// A função myFizzBuzz(num) recebe um número num e retorna "fizzbuzz" se o número for divisível por 3 e 5 , retorna "fizz" se for divisível apenas por 3 , retorna "buzz" se divisível apenas por 5 , retorna o próprio número caso não seja divisível por 3 ou 5 e retorna false caso num não seja um número

// Faça uma chamada com um número divisível por 3 e 5 e verifique se o retorno é o esperado
// Faça uma chamada com um número divisível por 3 e verifique se o retorno é o esperado
// Faça uma chamada com um número divisível por 5 e verifique se o retorno é o esperado
// Faça uma chamada com um número que não é divisível por 3 ou 5 e verifique se o retorno é o esperado
// Faça uma chamada com um parâmetro que não é um número e verifique se o retorno é o esperado

const myFizzBuzz = require('./myFizzBuzz');

describe('Testes da função "myFizzBuzz"', () => {
  test('Faça uma chamada com um número divisível por 3 e 5 e verifique se o retorno é "fizzBuzz"', () => {
    expect(myFizzBuzz(15)).toEqual('fizzbuzz');
  });

  test('Faça uma chamada com um número divisível por 3 e verifique se o retorno é "fizz"', () => {
    expect(myFizzBuzz(9)).toEqual('fizz');
  });

  test('Faça uma chamada com um número divisível por 5 e verifique se o retorno é "buzz"', () => {
    expect(myFizzBuzz(10)).toEqual('buzz');
  });

  test('Faça uma chamada com um número que não é divisível por 3 ou 5 e verifique se o retorno é o próprio número', () => {
    expect(myFizzBuzz(7)).toEqual(7);
  });

  test('Faça uma chamada com um parâmetro que não é um número e verifique se o retorno é "false"', () => {
    expect(myFizzBuzz('xablau')).toEqual(false);
  });  
});