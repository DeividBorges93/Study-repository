function oqueEONumero(num) {
  if (num > 0) {
    return 'positivo';
  };
  if (num < 0) {
    return 'negativo';
  };
  if (num === 0) {
    return 'neutro';
  };
  if (typeof num !== 'number') {
    return 'Tem que ser um número'
  }
}

module.exports = { oqueEONumero };
