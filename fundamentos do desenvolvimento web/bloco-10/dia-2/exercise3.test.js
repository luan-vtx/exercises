const users = {
    4: { name: 'Mark' },
    5: { name: 'Paul' },
  };
  
const findUserById = (id) => {
  return new Promise((resolve, reject) => {
    if (users[id]) {
      return resolve(users[id]);
    };
      return reject({ error: 'User with ' + id + ' not found.' });
   });
};
  
const getUserName = (userID) => {
  return findUserById(userID).then(user => user.name);
};

describe('Testes para a função getUserName - async/await', () => {
  describe('Quando o id do usuário é encontrado', () => {
    it('Retorna o nome do usuário', async () => {
      expect.assertions(1);
      const data = await getUserName(4);
      expect(data).toEqual('Mark');
    });
  });

  describe('Quando o id do usuário não existe' , () => {
    it('Retorna um error', async () => {
      expect.assertions(1);
      try{
        await getUserName(0);
      } catch (error) {
        expect(error).toEqual({ error: 'User with 0 not found.' })
      }
    });
  });
});