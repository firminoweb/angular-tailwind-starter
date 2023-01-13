# The Cat API (FrontEnd)
Dashboard utilizando Angular 15 e Tailwind CSS. Este projeto foi gerado com [Angular CLI](https://github.com/angular/angular-cli) version 15.0.5.

O projeto está disponível no endereço https://angular-cat-front.vercel.app que corresponde á [Vercel](https://vercel.com/) onde está hospedado e também é feito o processo de deploy.

### **IMPORTANTE**: Para localhost, é necessário executar primeiro o BackEnd para que o FrontEnd funcione corretamente.
---
## Especificações
A seguir, especificações do projeto de FrontEnd, feito com Angular 15:

* Angular 15 (JS framework)
* Tailwind 3 (CSS Lib)
* Karma + Jasmine (Test)
* RXJS
* Swiper (Photo Carousel)

## Iniciando
Com o repositório em seu computador e já no diretório frontend $ `angular-cat-api/frontend` execute o comando `npm install` para a instalação de todos os módulos do Node.

## Desenvolvimento
Execute `ng serve` ou `npm start` para executar o projeto em modo de desenvolvimento e navegue através da URL `http://localhost:4200/`. A aplicação irá reiniciar automaticamente quando efetuar qualquer alteração nos sources files.

## Build
Execute `ng build` ou `npm run build` para gerar um pacote de produção. Os artefatos da Build para produção, estação armazenados na pasta `dist/`.

## Executar a Build em localhost
Para isso, é necessário instalar globalmente o módulo `http-server` executando o comando `npm i http-server -g` e depois no diretório de frontend, execute `npm run build` e em seguida `npm run serve`, para encurtar esse processo, basta executar `npm run local:prod` que vai executar ambos os comandos citados.

## Testes
Apesar de não haver no momento testes mais elaborados, execute `ng test` para testes unitários via [Karma](https://karma-runner.github.io).

## Deploy
Por estar conectado com a Vercel, processo do qual segue a esteira ágil do CI/CD, a aplicação deles se conecta diretamente com o repositório do projeto, por autorização via token do Github, basta apenas fazer o commit das alterações, para que automaticamente sejam atualizados.
