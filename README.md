# hackernews-api
A small app  that is based on nestjs and typesecript and make a call to a public API of  HackerNews

## Description

[Hacker News API Search] (https://github.com/melitus/hackernews-api-search.git) A search api with nest.

## Installation

Ensure you have a stable internet connection, open the application via your terminal and punch the following commands:

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```
The app will be live on http://localhost:5000, Open on your browser and access the endpoints using swagger.
## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Endpoints


This app has the following  three endpoints:

1. Top 10 most occurring words in the titles of the last 25 stories

2. Top 10 most occurring words in the titles of the post of exactly the last week

3.  Top 10 most occurring words in titles of the last 600 stories of users with at least 10.000 karma


## Stay in touch

- Author - [Aroh Sunday](asmelitus@gmail.com)
## License

Nest is [MIT licensed](LICENSE).
