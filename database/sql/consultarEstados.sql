-- Seleciona todas as colunas da tabela 'estado'
select * from estados

-- Seleciona as colunas 'nome' e 'sigla', caso queira dar apelido à uma coluna, basta digitar '[nome da coluna] AS ['apelido']'
select nome, sigla from estados

-- O 'est' serve como um apelido para a tabela 'estados', pode ser usado quando a consulta é 
-- feita em mais de uma tabela ao mesmo tempo, evitando conflito em colunas com o mesmo nome
select est.nome, est.sigla from estados est

-- Para filtrar a busca, basta digitar 'WHERE [nome da coluna] = ['valor']'
select nome, sigla from estados where regiao = 'Sul'

-- Também é possível filtrar a partir de um valor numérico, nesse caso, se populacao for igual ou maior que 10
select nome, sigla from estados where populacao >= 10

-- Para ordenar de forma crescente, basta digitar 'ORDER BY ['coluna']'.
-- Para ordenar de forma decrescente, basta digitar 'DESC' após o comando 'ORDER BY ['coluna']'
select nome, sigla from estados where populacao >= 10 order by populacao desc