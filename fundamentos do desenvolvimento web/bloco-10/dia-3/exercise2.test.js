const exercise1 = require('./exercise1');

test('Testar a função getRandomNumber com implementação modificada via mock para retornar a divisão entre 2 numeros', () => {
  exercise1.getRandomNumber = jest.fn().mockImplementationOnce((a, b) => a / b);

  expect(exercise1.getRandomNumber(20, 10)).toBe(2);
  expect(exercise1.getRandomNumber).toHaveBeenCalled();
  expect(exercise1.getRandomNumber).toHaveBeenCalledTimes(1);
  expect(exercise1.getRandomNumber).toHaveBeenCalledWith(20, 10);
});