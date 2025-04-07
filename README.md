# reverie

AI powered journalling, in style.

### Setup

To setup the local development environment:

1. Clone the repository.

```sh
git clone https://github.com/shravanasati/reverie.git
```

2. Install dependencies.

```sh
pnpm i
```

3. Create a `.env` file.

```
BETTER_AUTH_SECRET=
BETTER_AUTH_URL=http://localhost:3000 #Base URL of your app
DATABASE_URL=postgres://postgres:password@localhost:5432/reverie
API_KEY=

GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
```

The `BETTER_AUTH_SECRET` should be a random string, and is used to secure sessions.
Keep `BETTER_AUTH_URL` as it is.

reverie uses postgres as its primary database. The `DATABASE_URL` should be configured as shown: 
`postgres://[username]:[password]@[host]:[port]/reverie`. 

The `API_KEY` is used to make requests to the main Spring [backend](https://github.com/shravanasati/reverie-backend), and should be set accordingly.

Finally, for social sign in, `GOOGLE_CLIENT_ID` and `GOOGLE_CLIENT_SECRET` can be obtained from the [Google Cloud Console](https://console.cloud.google.com/). Create a new project > Configure OAuth Consent Screen > Create a Web app > Create credentials.

4. Create database migrations.

```
pnpm exec drizzle-kit push
```

5. Run the development server.

```sh
pnpm dev
```