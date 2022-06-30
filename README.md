# hackernews-api
A small app  that is based on nestjs and typesecript and make a call to a public API of  HackerNews

## Description

[Hacker News API Search] (https://github.com/melitus/hackernews-api-search.git) A search api with nest.

# Tools

- NodeJS
- Express
- Nestjs
- Typescript
- Axios
- Swagger

## Getting Started

The easiest way to get started is to clone the repository:

# clone the repository

```
git clone https://github.com/melitus/hackernews-api-search.git
```

## Change directory

```
cd hackernews-api-search
```

## Install NPM dependencies

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
The app will be live on http://[::1]:3001/api, 
 Open this link on your browser and access the endpoints using swagger.
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

1. Top 10 most occurring words in the titles of the last 25 stories - `http://[::1]:3001/news/getTopTenMostOccurringWordsInLast25Stories`

2. Top 10 most occurring words in the titles of the post of exactly the last week - `http://[::1]:3001/news/getTopTenMostOccurringWordsInLast600StoriesOfUsers`

3.  Top 10 most occurring words in titles of the last 600 stories of users with at least 10.000 karma - `http://[::1]:3001/news/getTopTenMostOccurringWordsInStoryOfLastWeek31934135`


## Stay in touch

- Author - [Aroh Sunday](asmelitus@gmail.com)
## License

Nest is [MIT licensed](LICENSE).
