const uppercase = (str, callback) => {
  callback(str.toUpperCase());
};

it(`A chamada da função uppercase com o parâmetro 'test' deve retornar 'TEST'`, (done) => {
    uppercase('test', (str) => {
      expect(str).toBe('TEST');
      done();
  });
});