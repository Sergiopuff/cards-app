# Welcome to test project Card App

_Follow the instructions below for running the project!_

## Installation

Card App requires [Node.js](https://nodejs.org/) v14+ to run.

### Server

Install the dependencies.

_from the root folder_

```sh
cd server
npm install
```

Run local server.

```sh
npm start
```

Seed Data Base if need so.

**You need to add _uri_ to .env file to access the database**

**Please contact me if I have't sent it yet**

```sh
npm seed-db
```


### Mobile App

Install the dependencies and pods.

_from the root folder_

```sh
cd mobile
yarn
cd ios
pod install
cd ..
```

Run it on IOS or Android.

```sh
yarn ios || yarn android
```

**Done!**
