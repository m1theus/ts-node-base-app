## Base Project with NodeJS, Express, JWT, TSyringe and TypeORM

---

![Node.js CI](https://github.com/m1theus/ts-node-base-app/workflows/Node.js%20CI/badge.svg)

---

Steps to run this project:

1. Run `yarn install` or `npm install` command
2. Setup database settings inside `ormconfig.json` file
3. run `yarn | npm typeorm migration:generate -n UserMigration` for generate a `User` migration
4. run `yarn migrations` or `npm smigrations` command
5. Run `yarn start` or `npm start` command

### Dependencies

- [Express](https://expressjs.com/)
- [Cors](https://www.npmjs.com/package/cors)
- [BCrypt](https://github.com/kelektiv/node.bcrypt.js)
- [JWT](https://jwt.io/)
- [UUIDv4](https://github.com/thenativeweb/uuidv4)
- [Sentry.io](https://sentry.io/)
- [TypeORM](https://typeorm.io/#/)
- [TSyringe](https://github.com/microsoft/tsyringe)

### Code Patterns

- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [Editor Config](https://editorconfig.org/)
