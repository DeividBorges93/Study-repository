const { expect } = require('chai');
const { oqueEONumero } = require('../exercise2');

describe('testando função oqueEONumero', function () {
  describe('se um número', function () {
    describe('maior que 0', function () {
      it('é uma string', function () {
        const resposta = oqueEONumero(5);

        expect(resposta).to.be.a('string');
      })
      it('é igual a "positivo"', function () {
        const resposta = oqueEONumero(5);

        expect(resposta).to.be.equal('positivo');
      })
    });
    
    describe('menor que 0', function () {
      it('é uma string', function () {
        const resposta = oqueEONumero(-1);

        expect(resposta).to.be.a('string');
      })
      it('é igual a "negativo"', function () {
        const resposta = oqueEONumero(-1);

        expect(resposta).to.be.equal('negativo');
      })
    });
    
    describe('igual a 0', function () {
      it('é uma string', function () {
        const resposta = oqueEONumero(0);

        expect(resposta).to.be.a('string');
      })
      it('é igual a "neutro"', function () {
        const resposta = oqueEONumero(0);

        expect(resposta).to.be.equal('neutro');
      })
    });
  })
  describe('se não for um número', function () {
    it('é igual a: "Tem que ser um número"', function () {
      const resposta = oqueEONumero('não é um número');
      
      expect(resposta).to.be.equals('Tem que ser um número');
    })
      });
})