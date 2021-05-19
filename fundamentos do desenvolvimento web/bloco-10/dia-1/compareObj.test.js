const {obj1, obj2, obj3} = require('./compareObj');

describe('Testar se os objetos são iguais', () => {

    test('Compare dois objetos (JSON) para verificar se são idênticos ou não - 1 e 3', () => {
      expect(obj1).not.toEqual(obj3);
    });
  
    test('Compare dois objetos (JSON) para verificar se são idênticos ou não - 1 e 2', () => {
      expect(obj1).toEqual(obj2);
    });
  
    test('Compare dois objetos (JSON) para verificar se são idênticos ou não - 2 e 3', () => {
      expect(obj1).not.toEqual(obj3);
    });
  });