-- Vamos lá! Faça uma consulta que retorne todas as peças que começam com as letras GR.
USE PecasFornecedores;
SELECT * FROM Pecas
WHERE name LIKE 'GR%';

-- Agora, escreva uma query para mostrar todos os fornecimentos que contenham a peça com code 2. Organize o resultado por ordem alfabética de fornecedor.
USE PecasFornecedores;
SELECT * FROM Fornecimentos
WHERE peca = 2 ORDER BY fornecedor;

-- Em seguida, faça uma consulta para exibir as peças, preço e fornecedor de todos os fornecimentos em que o código do fornecedor tenha a letra N.
USE PecasFornecedores;
SELECT peca, preco, fornecedor FROM Fornecimentos
WHERE fornecedor LIKE '%N%';

-- Avante, falta pouco! Escreva uma query para exibir todas as informações dos fornecedores que são empresas limitadas (LTDA). Ordene esses resultados em ordem alfabética decrescente.
USE PecasFornecedores;
SELECT * FROM Fornecedores
WHERE name LIKE '%LTDA' ORDER BY name DESC;

-- Agora, faça uma consulta para exibir o número de empresas (fornecedores) que contém a letra F no código.
USE PecasFornecedores;
SELECT COUNT(*) FROM Fornecedores
WHERE code LIKE '%F%';

-- Quase lá! Agora escreva uma query para exibir os fornecimentos onde as peças custam mais de R$15,00 e menos de $40,00. Ordene os resultados por ordem crescente.
USE PecasFornecedores;
SELECT * FROM Fornecimentos
WHERE preco BETWEEN 15 AND 40 ORDER BY preco;

-- Ufa! Por fim, faça uma query para exibir o número de vendas feitas entre o dia 15/04/2018 e o dia 30/07/2019.
USE PecasFornecedores;
SELECT COUNT(*) FROM Vendas
WHERE DATE(order_date) BETWEEN '2018-04-15' AND '2019-07-30';