# Prime numbers api

## Objetive
The objetive of this api is to provide an api which upon a greater than 2 integer input can return an array of the prime numbers between that number and 2.

## Methodology
In order to do so, the algorithm in charge of finding those numbers is the defined by the Sieve of Eratosthenes method. https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes
Algorithm complexity can be found in the article attached.

## How to use
1. git clone this repo
2. npm install (check your node and npm versions)
3. npm run start 

You can also pull the docker image from igcodinap/prime-calculator and run `docker run -p 3000:3000 -d igcodinap/prime-calculator:latest`

## Folder order
```
├──src
    prime
        └── prime.controller.ts
        └── prime.routes.ts
        └── prime.validation.ts
    └── app.ts
    └── routes.ts
├──tests
    └── prime
        └── prime.controller.ts
├──nodemon.json
├──package-lock.json
├──package.json
├──jest.config.js
├──tsconfig.json
├──README.md
```

## Performance Overview 
Running on local
Proc: i3 8th gen
Ram: 12gb

```
Prime number  |  Time
- 10          |     .013ms
- 100         |      .027ms
- 1000        |      .045ms
- 10000       |      .428ms
- 100000      |      10.797ms
- 1000000     |      668.47ms
```