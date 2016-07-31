# ReactJS + Express + RethinkDB Example app

This is an example JavaScript application illustrating implementation of one of the most underused subjects - todo list (just innovation at its finest).

The main idea of this project was to create the realtime application - everytime user adds todo to the list every other user using application should see it in the list without a need to refresh the page or manually call the 'refresh list' operation.
Application **does not** allow to create user accounts - there is only one list for every user (its just for testing purposes and is used as implementation example).

## Tools/libraries:
* **ReactJS**: library for building user interfaces
* **Redux**: application state container
* **Express**: Node.js web framework
* **RethinkDB**: JSON database designed for realtime apps
* **Socket.io**: Library used for realtime, bi-directional communication between web clients and server

## Getting started:
To start application it is required to create **config.js** file in main project directory. Here is the example configuration:

### Configuration
```js
var config = {
    server: {
        port: 9000
    },
    database: {
        host: 'localhost',
        port: 28015,
        db: 'TodoDB'
    }
}
module.exports = config;
```

With this configuration application server will listen on:
```sh
http://localhost:9000
```
and server will connect to the Rethink database (has to be launched manually) on:
```sh
http://localhost:28015
```
with **TodoDB** as its name.
Database should contain **Todo** table.

### Installation
To prepare application
```sh
npm install
```
should be executed.

### Starting
To start application simply execute:
```sh
npm start
```
