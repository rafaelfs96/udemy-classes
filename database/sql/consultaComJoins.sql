-- Consulta com trazendo todos os dados relacionados entre as tabelas
select * from cidades c inner join prefeitos p on c.id = p.cidade_id;

-- Consulta relacionando as duas tabelas, trazendo dados apenas da tabela 'cidades' (que é a tabela da esquerda/left)
select * from cidades c left join prefeitos p on c.id = p.cidade_id;

-- Consulta relacionando as duas tabelas, trazendo dados apenas da tabela 'prefeitos' (que é a tabela da direita/right)
select * from cidades c right join prefeitos p on c.id = p.cidade_id;
