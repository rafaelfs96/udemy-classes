-- Mudando tipo de dado do campo cnpj para varchar
alter table empresas modify cnpj varchar(14);

insert into empresas
  (nome, cnpj)
values
  ('Bradesco', 12345678901234),
  ('Vale', 23456789012345),
  ('Cielo', 34567890123456);

-- descreve as colunas da tabela
desc empresas;

insert into empresas_unidades
  (empresa_id, cidade_id, sede)
values
  (1, 1, 1),
  (1, 2, 0),
  (2, 1, 0),
  (2, 2, 1);