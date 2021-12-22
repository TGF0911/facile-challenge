## Instalação

- Instale as dependencias do projeto

```
cd facile-challenge
yarn install
```

- Para rodar localmente

```
yarn dev
```

- Faça um arquivo na raiz pro projeto chamado `.env`, siga o exemplo que está em `.env.example`

---

## Funcionamento

Sugiro que utilize alguma destas estas ferramentas:

- [Postman](https://www.postman.com/)
- [Insomnia](https://insomnia.rest/download)

---

- Para salvar o mensagem, utilize este endereço junto a um corpo JSON:

```
 http://localhost:3333/encrypts
```

Exemplo:
`{ "name": "Olá, eu sou a Thais!" }`

---

- Para ler a mensagem salva, utilize este endereço junto com o id da mensagem:

```
http://localhost:3333/encrypts/1234ab
```

---

## Tecnologias utilizadas

- [TypeScript](https://www.typescriptlang.org/)
- [TypeORM](https://typeorm.io/)
- [Express](https://expressjs.com/pt-br/)
