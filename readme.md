# API RocketNotes

Essa é uma API para gerenciar notas pessoais desenvolvida por Felipe Diego.

## Instalação

Certifique-se de ter o Node.js instalado. Clone este repositório e, em seguida, execute o seguinte comando para instalar as dependências necessárias:

```
npm install
```

## Configuração

Antes de iniciar a API, você precisa configurar algumas variáveis de ambiente. Crie um arquivo `.env` na raiz do projeto e defina as seguintes variáveis:

```
DATABASE_URL=<URL_DO_BANCO_DE_DADOS>
SECRET_KEY=<CHAVE_SECRETA>
```

## Uso

Para iniciar a API em modo de desenvolvimento, execute o seguinte comando:

```
npm run dev
```

Isso iniciará o servidor localmente e você poderá acessar a API em `http://localhost:3000`.


## Endpoints

A API RocketNotes oferece os seguintes endpoints:

- `GET /notes`: Retorna todas as notas.
- `GET /notes/:id`: Retorna uma nota específica com base no ID.
- `POST /notes`: Cria uma nova nota.
- `PUT /notes/:id`: Atualiza uma nota existente com base no ID.
- `DELETE /notes/:id`: Exclui uma nota específica com base no ID.

## Dependências

- bcryptjs: ^2.4.3
- cors: ^2.8.5
- dotenv: ^16.0.3
- express: ^4.18.2
- express-async-errors: ^3.1.1
- jsonwebtoken: ^9.0.0
- knex: ^2.4.2
- multer: ^1.4.5-lts.1
- pm2: ^5.3.0
- sqlite: ^4.1.2
- sqlite3: ^5.1.6

## Dev Dependencies

- nodemon: ^2.0.22

## Licença

Este projeto está licenciado sob a Licença ISC.