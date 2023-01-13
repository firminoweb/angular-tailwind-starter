# The Cat API (BackEnd)
Dashboard utilizando Angular 15 e Tailwind CSS. Este projeto foi gerado com [Angular CLI](https://github.com/angular/angular-cli) version 15.0.5.

O projeto está disponível na [Vercel](https://vercel.com/) onde está hospedado e também é feito o processo de deploy.

## Especificações
A seguir, especificações do projeto de BackEnd (BFF), feito com NodeJS + ExpressJS:
* Node.js 18 (JS framework)
* Express.js 4 (Web Application)
* Axios (Http Request)
* Nodemon (Monitor and Restarter Server)

## Iniciando
Com o repositório em seu computador e já no diretório frontend $ `angular-cat-api/backend` execute o comando `npm install` para a instalação de todos os módulos do Node.

## Desenvolvimento
Execute `node start.js` ou `npm start` para executar o projeto em modo de desenvolvimento e navegue através da URL `http://localhost:3000/`. para visualizar um 'Olá' e se certificar que está rodando normalmente.

## Build
Não há necessidade de geração de uma build, por se tratar de uma aplicação auto-executável.

## Auto-Restart
Em produção, é aconselhável executar o projeto através dos comandos `nodemon start.js` ou `npm run dev`, pois ele o fará utilizando o Nodemon, que é um monitor de execução do projeto que restarta automaticamente em caso de queda ou reinício do server.

## Deploy
Por estar conectado com a Vercel, processo do qual segue a esteira ágil do CI/CD, a aplicação deles se conecta diretamente com o repositório do projeto, por autorização via token do Github, basta apenas fazer o commit das alterações, para que automaticamente sejam atualizados.
