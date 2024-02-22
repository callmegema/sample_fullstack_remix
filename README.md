# Welcome to Fullstack Remix Sample(Remix + Vite + Prisma)!

📖 See the docs  for details on supported features.
- [Remix docs](https://remix.run/docs)
- [Remix Vite docs](https://remix.run/docs/en/main/future/vite)
- [Prisma docs](https://www.prisma.io/docs/orm)

## Test

Setup Database
```sh
docker compose -f docker-compose.local.yml up
```

DB migrate
```sh
NODE_ENV=test DATABASE_URL=mysql://root:@localhost:3307/eden_test npx prisma migrate reset --force
```

Run Test
```sh
NODE_ENV=test DATABASE_URL=mysql://root:@localhost:3307/eden_test npm test
```

## Development

Setup Database
```sh
docker compose -f docker-compose.local.yml up
```

DB migrate
```sh
npx prisma migrate dev --name init
```

Run the Vite dev server:

```shellscript
npm run dev
```

## Deployment

First, build your app for production:

```sh
npm run build
```

Then run the app in production mode:

```sh
npm start
```

Now you'll need to pick a host to deploy it to.

### DIY

If you're familiar with deploying Node applications, the built-in Remix app server is production-ready.

Make sure to deploy the output of `npm run build`

- `build/server`
- `build/client`
