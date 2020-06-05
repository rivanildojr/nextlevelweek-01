## Rotas e Recursos

Rota: Endereço completo da requisição
Recurso: Qual entidade estamos acessando do sistema

## Métodos HTTP

GET: Buscar um ou mais informações do back-end
POST: Criar uma nova informação no back-end
PUT: Atualizar uma informação existente no back-end
DELETE: Remover uma informação do back-end

## Parâmetros de Requisição

Request Param: Parâmetros que vem na própria rota que identificam um recurso
Query Param: Parâmetros que vem na própria rota geralmente opcionais para filtros, paginação ...
Request Body: Parâmetros para criação/atualização de informações

## Utilização do SQL tradicional vs Knexjs

SELECT _ FROM users WHERE name = "Rivanildo"
knex('users').where('name', 'Rivanildo').select('_')

## Migrations

Migrations: Histórico do banco de dados

Método Up: Cria a tabela
Método down: Deleta a tabela
