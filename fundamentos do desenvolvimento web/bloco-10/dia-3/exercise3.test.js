const exercise1 = require('./exercise1');

describe('Testar implementações', () => {
  test('Testar a função getRandomNumber com implementação modificada via mock para retornar produto de 3 números', () => {
    exercise1.getRandomNumber = jest.fn().mockImplementationOnce((a, b, c) => a * b * c);
    
    expect(exercise1.getRandomNumber(2, 4, 10)).toBe(80);
    expect(exercise1.getRandomNumber).toHaveBeenCalled();
    expect(exercise1.getRandomNumber).toHaveBeenCalledTimes(1);
    expect(exercise1.getRandomNumber).toHaveBeenCalledWith(2, 4, 10);
  });

  test('Testar a função getRandomNumber com implementação modificada via mock para retornar o dobro de um número', () => {
    exercise1.getRandomNumber.mockReset();

    expect(exercise1.getRandomNumber).toHaveBeenCalledTimes(0);

    exercise1.getRandomNumber = jest.fn().mockImplementationOnce((a) => 2 * a);

    expect(exercise1.getRandomNumber(7)).toBe(14);
    expect(exercise1.getRandomNumber).toHaveBeenCalledTimes(1);
    expect(exercise1.getRandomNumber).toHaveBeenCalledWith(7);
  });
});