# TOODLEDO

Hackathon 2nd place winner: A React and Springboot project using Twilio API to send SMS reminders for tasks. Includes OAuth and CORS.

---

## Table of contents

- [Introduction](#introduction)
- [Competencies](#competencies)
- [Demo](#demo)
- [Technologies](#technologies)
- [Setup](#setup)
- [Features](#features)
- [Contact](#contact)

---

## Introduction

The idea behind ToodleDo comes from integrating an interactive To Do list with an SMS based reminder system.

---

## Competencies

#JF 2.3

- Applies logical thinking. For example, uses clear and valid reasoning when making decisions related to undertaking work
  instructions

#JF 3.1

- Knows how to design software approaches and patterns, to identify reusable solutions to commonly occurring problems

#JF 6.7

- Communicates effectively in a variety of situations to both a technical and nontechnical audience.

---

## Demo

![Demo] ()

---

## Technologies

- React - version 16.8.6
- Material UI - version 5.2.3
- Node.js - version 14.15.4
- Express.js - version 4.16.4
- AuthO-react - version 1.2.0
- Java - version 18
- Springboot - version 2.1.2.RELEASE
- Twilio API - version 7.34.0
- Docker

---

## Setup

After cloning, need to add files that are in gitignore:

- In src/main, create new folder named resources, inside of that add application.yml
- In src/main/ui, add api-server.js
- In src/main/ui/src, add auth_config.json

Also:

- Change phone number in NewTask.js

To run the project, you need to run in 2 places.

- Run Springboot backend using Maven tab > Plugins > springboot:run command on DemoApplication file
- Run React front end by cd src/main/ui
- `npm install`
- `npm run dev`

---

## Features

Users should be able to:

- login with a Google account via AuthO
- create a new task with a timed reminder
- receive a text reminder when it's time to do a task

Stretch Goals:

- Add a snooze to the reminder
- Text back "COMPLETE" to remove the task reminder text
- Add a history of completed tasks
- Add ability to prioritize tasks
- Add ability to send text reminders to other phone numbers/users
- Add login functionality with different platforms (Microsoft, Github, Facebook, etc)

---

## Contact

- [Judith Liem](https://github.com/jjliem)
- [Afreen Safdar](https://github.com/afreensafdar)
- [Ricardo Salcido](https://github.com/RSalcido2019)
