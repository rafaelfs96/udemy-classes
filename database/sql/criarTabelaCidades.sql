create table if not exists cidades (
  id int unsigned not null auto_increment primary key,
  nome varchar(255) not null,
  estado_id int unsigned not null,
  area decimal(10,2),
  foreign key (estado_id) references estados (id)
);