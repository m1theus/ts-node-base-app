## Base Project with NodeJS, Express, JWT, TSyringe and TypeORM

---

![Node.js CI](https://github.com/m1theus/ts-node-base-app/workflows/Node.js%20CI/badge.svg)

---

Steps to run this project:

1. Install Dependencies

```bash
npm install
```

2. Setup database settings inside `ormconfig.json` file

3. Generate Migrations:&nbsp;&nbsp;`User Example`

```bash
npm run typeorm migration:generate -n UserMigration`
```

4. Run migration on your database

```bash
npm run migrations
```

5. Run a server

```bash
npm run start
```

### Dependencies

- [Express](https://expressjs.com/)
- [Cors](https://www.npmjs.com/package/cors)
- [BCrypt](https://github.com/kelektiv/node.bcrypt.js)
- [JWT](https://jwt.io/)
- [UUIDv4](https://github.com/thenativeweb/uuidv4)
- [Sentry.io](https://sentry.io/)
- [TypeORM](https://typeorm.io/#/)
- [TSyringe](https://github.com/microsoft/tsyringe)
- [Jest](https://jestjs.io/docs/en/getting-started)

### Code Patterns

- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [Editor Config](https://editorconfig.org/)
