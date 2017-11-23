This project was meant as exercice for integrating Angular 4 with spring boot.

This exercice is divided into two parts: 
1. The **frontend** which is written in Java using the [SpringBoot](https://projects.spring.io/spring-boot/) framwork.
2. The **backend** which is written in typescript and uses the [Angular](https://angular.io) 4 framework. 

The project is a simple e-commerce website that is used to sell robots online. The functionlaity of the store is limited to the following:
- List product categories. Example Cleaning, indestrial robots or what have you.
- The ability to list, add, delete robots. `The update functionality has not been implemented.`
- Login is required in order to delete or add a new product.
- Robot browsing does not require authentication.

Here is a screen print that shows the landing page of the application

![](https://github.com/osenouci/robotStoreExpressServer/blob/master/screenshots/home.png)

# Project repositories and demo 
The project is divided into two layers, **`frontend`** and **`backend`**. There exists a Github repo for each of the layers and an additional one for a Node Express server that has been used to serve the frontend on the heroku cloud.

### 1. Backend API - Spring Boot based.
- [Github repo](https://github.com/osenouci/RobotStore)
- [Heroku demo] (https://peaceful-ravine-78348.herokuapp.com)

### 2. Frontend (single page application) - Angular 4 based.
- Angular app Github repo -> The repo you are currently visiting
- [Express server Github repo](https://github.com/osenouci/robotStoreExpressServer)
- [Heroku demo] (https://shielded-hollows-40663.herokuapp.com)


> Please visit the other repos for information about their code. 

# Project design
- The project is powered by Angular 4.
- The UI in powered by Angular's Material design library.
- The CSS grid used for responsive design is powered by [Unsemantic CSS Framwork](https://unsemantic.com).





## Running the project on your local machine

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.5.0.

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
