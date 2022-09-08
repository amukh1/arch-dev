[![npm version](https://badge.fury.io/js/arch-dev.svg)](https://www.npmjs.com/package/arch-dev)

# arch-dev

> A small library for making *"arch"* bots, for my own chat application: [Arch](https://arch.amukh1.dev).

## Prerequisites

This project requires NodeJS (version 8 or later) and NPM.
[Node](http://nodejs.org/) and [NPM](https://npmjs.org/) are really easy to install.
To make sure you have them available on your machine,
try running the following command.

```sh
$ npm -v && node -v
6.4.1
v8.16.0
```

## Getting Started


## Installation
<br>

**BEFORE YOU INSTALL:** please read the [prerequisites](#prerequisites)

<br>

To install and set up the library, run:

```sh
$ npm install arch-dev
```

Or if you prefer using Yarn:

```sh
$ yarn add --dev arch-dev
```

## Usage

### First, Start by importing the library

```js
var arch = require('arch-dev');
var client = new arch.client('name', 'room');
var token = 'your token'; // more on how to get this later
```
<br>

## now login with your credentials

```js
client.init(client, token)
 ```
  <br>

### Events

```js
client.on("msg", (ws, data) => {

  if(data.user == client.user){
    return // So the bot doesn't reply to itself
  }

  let msg = data.msg.msg;
  console.log(msg);
});

client.on("ready", (ws, data) => {
  console.log(`${data.user} has joined the application in ${data.room}`)
});
```

### In the msg listener

data is all the data including the room and user. data.msg is the message object, which has more data. data.msg.msg is the acutal message sent as a string

### In the ready listener
data is just data about the user joining and the room they joined in.

<br>

## Sending Messages

```js
client.send(ws, "Hello World!", "room");
```

When responding to specific commands sent from a user that might be in a different channel, I use data.room so the bot responds in the same channel as the user.

```js
client.send(ws, `Hello World, ${data.user}!`, data.room);
```


### Serving the app

```sh
$ npm start
```

## Contributing

You can contribute to the project by making a pull request on [GitHub](https://github.com/arch-dev).

# Credits

## Amukh1.

## Built With

* [Node](https://nodejs.org/)
* [Websockets](https://www.npmjs.com/package/ws)
* [React](https://reactjs.org)
* [Love](https://amukh1.dev)

## Authors

* **Amukh1** - [Github](https://github.com/amukh1)

See also the list of [contributors](https://github.com/amukh1/arch-dev/contributors) who participated in this project.

## License

[MIT License](https://mit-license.org/2022) © Amukh1