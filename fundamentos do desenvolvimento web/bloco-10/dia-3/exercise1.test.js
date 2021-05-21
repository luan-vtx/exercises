const exercise1 = require('./exercise1');

test('Testar se a função getRandomNumber foi chamada, qual o seu retorno e quantas vezes foi chamada', () => {
  exercise1.getRandomNumber = jest.fn().mockReturnValue(10);

  expect(exercise1.getRandomNumber()).toBe(10);
  expect(exercise1.getRandomNumber).toHaveBeenCalled();
  expect(exercise1.getRandomNumber).toHaveBeenCalledTimes(1);
});