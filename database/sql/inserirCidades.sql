-- É possível fazer um select para obter um valor de uma outra tabela, nesse caso, a coluna 'id' da tabela 'estados'
-- O valor obtido servirá como a 'foreign key'
insert into cidades
  (nome, area, estado_id)
values
  ('Campinas', 795, (select id from estados where sigla = 'SP')),
  ('Niterói', 133.9, (select id from estados where sigla = 'RJ')),
  ('Caruaru', 920, (select id from estados where sigla = 'PE'))
