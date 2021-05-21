const exercise2 = require('./exercise1');

test('Testar a função getRandomNumber com implementação modificada via mock', () => {
  exercise2.getRandomNumber = jest.fn().mockImplementationOnce((a, b) => a / b);

  expect(exercise2.getRandomNumber(20, 10)).toBe(2);
  expect(exercise2.getRandomNumber).toHaveBeenCalled();
  expect(exercise2.getRandomNumber).toHaveBeenCalledTimes(1);
  expect(exercise2.getRandomNumber).toHaveBeenCalledWith(20, 10);
});