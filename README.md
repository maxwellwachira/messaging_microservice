<h1 align="center"><b>Africa's Talking Messaging MicroService</b></h1>

[![Project Status: WIP – Initial development is in progress, but there has not yet been a stable, usable release suitable for the public.](https://www.repostatus.org/badges/latest/wip.svg)](https://github.com/maxwellwachira/messaging_microservice.git)

# Description

This is a messaging microservice built on top of Africa's Talking SDK.<br>
This microservices takes care of sending sms to one or many recipients, stores sent messages to a database, handles data validation and much more. The app is made using NodeJS, Express and TypeScript

# Demo

I have a deployed the application on [Netlify](https://www.netlify.com/)<br>
click the following link to check my solution [https://vehicle-shifter.netlify.app/](https://vehicle-shifter.netlify.app/)

# Table of contents

- [Prerequisites](#Prerequisites)
- [Directory Structure](#Directory-Structure)
- [Running Locally](#Setting-up-Local-Environment)
- [Acknowledgement](#Acknowledgement)
- [License](#License)

# Prerequisites

- [Node JS Installed ](https://nodejs.org/en/download/)

- Yarn Package Manager installed. Can be installed using the command below:

```bash
npm install --global yarn
```

# Directory-Structure

    messaging_microservice
    ├── src
    |   ├── config/             #Application Configurations e.g. database config
    |   ├── docs/               #Swagger UI documentation
    |   ├── messages/           #Messaging routes, controller, service, middleware and validator
    |   └── security/           #DDOS Mitigation
    ├── .env                    #Environment Variables
    ├── .gitignore              #git ignore file
    ├── index.ts                #Application entry point
    ├── package.json            #Application properties including dependencies
    ├── README.md
    └── tsconfig.json           #TypeScript Configuration

# Setting-up-Local-Environment

## Without Docker

### Step 1

clone the repository and navigate to the project directory

```bash
git clone https://github.com/maxwellwachira/messaging_microservice.git
cd messaging_microservice/
```

### Step 2

Check package.json file and ensure scripts are notated as below:

```bash
"scripts": {
    "build": "npx tsc",
    "start": "node dist/index.js",
    "dev": "concurrently \"npx tsc --watch\" \"nodemon -q dist/index.js\""
},
```

### Step 3

Delete the node_modules folder and any 'lock' files such as yarn.lock or package-lock.json if present.

### Step 4

Run yarn install to install project dependencies

```bash
yarn install
```

### Step 5

final step

```bash
npm run dev
```

# Acknowledgement

Special thanks to FedhaPap Team - Humprey Shikunzi & Jackline Tum

## <b>License</b>

[![license](https://img.shields.io/github/license/mashape/apistatus.svg?style=for-the-badge)](LICENSE)
