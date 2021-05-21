const exercise4 = require('./exercise4');

jest.mock('./exercise4');

describe('Testar implementações nas funções do arquivo "exercise.4"', () => {
  test('Modificar a primeira função via mock para retornar uma string em caixa baixa', () => {
    exercise4.firstFunction.mockImplementationOnce((string) => string.toLowerCase());

    expect(exercise4.firstFunction('XABLAU')).toBe('xablau');
    expect(exercise4.firstFunction).toHaveBeenCalled();
    expect(exercise4.firstFunction).toHaveBeenCalledWith('XABLAU');
  });

  test('Modificar a segunda função via mock para retornar a última letra da string', () => {
    exercise4.secondFunction.mockImplementationOnce((string) => string.charAt(string.length - 1));

    expect(exercise4.secondFunction('Australopithecus')).toBe('s');
    expect(exercise4.secondFunction).toHaveBeenCalledTimes(1);
    expect(exercise4.secondFunction).toHaveBeenCalledWith('Australopithecus');
  });

  test('Modificar a terceira função via mock para concatenar 3 strings', () => {
    exercise4.thirdFunction.mockImplementationOnce((str1, str2, str3) => str1.concat(str2).concat(str3));

    expect(exercise4.thirdFunction('para', 'lele', 'pípedo')).toBe('paralelepípedo');
    expect(exercise4.thirdFunction).toHaveBeenCalledTimes(1);
    expect(exercise4.thirdFunction).toHaveBeenCalledWith('para', 'lele', 'pípedo');
  });
});