# Angular + Tailwind CSS Starter with Cat API (BackEnd)
Dashboard using Angular 15 and Tailwind CSS. This project was created with [Angular CLI](https://github.com/angular/angular-cli) version 15.0.5.

## Specifications
Follow below, the specifications of the BackEnd:

* Node.js 18 (JS framework)
* Express.js 4 (Web Application)
* Axios (Http Request)
* Nodemon (Monitor and Restarter Server)

## Starting
With the repository on your computer and already in the backend directory `$ angular-tailwind-starter/backend` run the `npm install` command to install all Node modules.

## Development
Run `node start.js` or `npm start` to run the project in development mode and navigate through the URL `http://localhost:3000/`. to display a 'Hello World!' and make sure it is running normally.

## Build
There is no need to generate a build, as it is a self-executing application.

## Auto-Restart
In production, it is advisable to run the project through the commands `nodemon start.js` or `npm run dev`, as it will do so using Nodemon, which is a project execution monitor that restarts automatically in case of crash or restart of the server.

## Deploy
As it is connected to Vercel, a process which follows the agile CI/CD path, their application connects directly to the project repository, via authorization via a Github token, all you have to do is commit the changes, so that they are automatically updated.
