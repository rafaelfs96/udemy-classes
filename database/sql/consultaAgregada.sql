select 
  regiao as 'Região',
  -- Funcao 'sum' serve para somar a coluna 'populacao', e depois apelidando como 'Total'
  sum(populacao) as Total
from estados
-- Separa a soma total da populacao por regiao. Ex: populacao total do Sudeste, Nordeste, ETC.
-- Obs: Ao usar 'group by ['coluna']', é necessário também selecionar ['coluna'] no 'select'
group by regiao
order by Total desc

-- Nesse caso nao existe um 'group by', sendo assim, a query vai somar todos os registros de 'populacao' sem a separacao por 'regiao'
select
  sum(populacao) as Total
from estados

select 
  -- Funcao 'avg' calcula a media de 'populacao'
  avg(populacao) as Total
from estados