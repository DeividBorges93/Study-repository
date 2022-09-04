const { expect } = require('chai');
const fs = require('fs');
const sinon = require('sinon');

const writeFile = require('../exercise5');

describe('Executa a função writeFile', () => {
  before(() => {
    sinon.stub(fs, 'writeFileSync');
  });

  after(() => {
    fs.writeFileSync.restore();
  });
  describe('a resposta', () => {
    it('é uma "string"', () => {
      const resposta = writeFile('writeFile.txt', 'testes são demais');

      expect(resposta).to.be.a('string');
    });

    it('é igual a "ok"', () => {
      const resposta = writeFile('writeFile.txt', 'testes são demais');

      expect(resposta).to.be.equals('ok');
    });
  });
});