# Mongoose Express Template

## Introduction

>This is a basic template for mongoose express projects ready for deploy on Heroku. 

>I used mainly ES6 syntax but the examples are straight to the point if you aren't acquainted with ES6.

## Code Samples

>Example model

```javascript
const exampleSchema = new Schema({
    name: {
        type: String,
        default: 'example'
    },
    number: {
        type: Number,
        default: 0
    }
});

```

## Installation

>Enter the following commands into your terminal
```sh
$ git clone https://github.com/boxpositron/heroku-node-express-mongoose project-name
$ cd project-name
$ npm install
$ echo MONGODB_URI='your mongodb uri' >> .env
$ node server.js
```

## Debugging

>This template is optimized for debugging with vscode and nodemon.
>If you do not have nodemon installed, you can enter the following command in your terminal application 

```sh
$ npm i -g nodemon
```

