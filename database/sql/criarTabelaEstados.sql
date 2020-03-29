create table if not exists estados (
  id int unsigned not null auto_increment primary key,
  nome varchar(45) not null,
  sigla varchar(2) not null,
  regiao ENUM('Norte', 'Nordeste', 'Centro-Oeste', 'Sudeste', 'Sul') not null,
  populacao decimal(5, 2) not null,
  unique key (nome),
  unique key (sigla)
);