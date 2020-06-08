# Drink A Smoothie

[![Generic badge](https://img.shields.io/badge/VERSION-1.1.1-ORANGE.svg)](https://shields.io/)

[Repo: Drink A Smoothie](https://github.com/Jones-M12/Drink-A-Smoothie.git)

[Deployed Site: Drink A Smoothie](https://notes-application-jones.herokuapp.com/)


## Overview

In this project, I have created a smoothie logger with MySQL, Express, Handlebars and a homemade Object Relational Mapper (ORM).

Utilizing the Model View Controller (MVC), I has the project follows a basic deisng strucure that easy to follow.


## User Story

As a USER.

I WANT to be able to add smoothies a uneaten list and move them a eaten list once I have drank them.

SO THAT I can keep track of the smoothies that I have tried before.

## Development 

I have designed this project from start to finish, gaining a better understanding of the importance of file stuctures, how they are connected, and how they cna help with organization.

You will see the file it setup similiar to the structure below:

```
.
├── config
│   ├── connection.js
│   └── orm.js
│ 
├── controllers
│   └── burgers_controller.js
│
├── db
│   ├── schema.sql
│   └── seeds.sql
│
├── models
│   └── burger.js
│ 
├── node_modules
│ 
├── package.json
│
├── public
│   └── assets
│       ├── css
│       │   └── burger_style.css
│       └── img
│           └── burger.png
│   
│
├── server.js
│
└── views
    ├── index.handlebars
    └── layouts
        └── main.handlebars
```


In implementing the application, restful API's were used to establish ways to update, delete, and create information with the database. Representational State Transfers (REST) work alongside handlders to deliver dynamic to the user interface. Together, with the help of (ORM), useable methods are used to send and retrieve information between systems.


Below is an example of what your application may look like:

![Drink A Smoothie Demo](../Assets/DemoView.png)


## Future Development: 

The future development of this project would involve focusing on the visual display to make it more appealing for the user.

## Contact Information

* Github: [Jones-M12](https://github.com/Jones-M12) 

* Email: malesharj@gmail.com 

* LindedIn: [m-jones89](https://www.linkedin.com/in/m-jones89/)



