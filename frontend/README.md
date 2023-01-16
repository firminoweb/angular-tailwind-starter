# Angular + Tailwind CSS Starter with Cat API (FrontEnd)
Dashboard using Angular 15 and Tailwind CSS. This project was created with [Angular CLI](https://github.com/angular/angular-cli) version 15.0.5.

The project is available via URL https://angular-tailwind-front.vercel.app at [Vercel](https://vercel.com/) .

### **IMPORTANT**: For localhost, you need to run BFF first for FrontEnd works properly.
---
## Specifications
Follow below, the specifications of the FrontEnd:

* Angular 15 (JS framework)
* Tailwind 3 (CSS Lib)
* Karma + Jasmine (Test)
* RXJS
* Swiper (Photo Carousel)

## Starting
With the repository on your computer and already in the frontend directory `$ angular-tailwind-starter/frontend` run the `npm install` command to install all Node modules.

## Development
Run `ng serve` or `npm start` to the project in development mode and browse through the URL `http://localhost:4200/`. The application will restart automatically when making any changes to the source files.

## Build
Run `ng build` or `npm run build` to generate a production package. Build artifacts for production, station stored in folder `dist/`.

## Run Build in localhost
For this, it is necessary to install the module globally `http-server` running the command `npm i http-server -g` and then in the frontend directory, run `npm run build` and then `npm run serve`, to shorten this process, just run `npm run local:prod` which will run both commands mentioned.

## Testes
Although there are currently no more elaborate tests, run `ng test` for unit tests via [Karma](https://karma-runner.github.io).

## Deploy
As it is connected to Vercel, a process which follows the agile CI/CD path, their application connects directly to the project repository, via authorization via a Github token, all you have to do is commit the changes, so that they are automatically updated.
