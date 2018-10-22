# first-non-repeating-character #
A NodeJS server which accepts a string via an http POST request and returns the first non repeating character in it.

## Installation ##
To install, first clone the repository and install the npm modules.
```bash
git clone https://bitbucket.org/kshitijjain/first-non-repeating-character.git
npm install
```

## Getting Started ##
Start the server using `npm start` command
```bash
npm start
```
The server will start on port 3001.  

  
Navigate to http://localhost:3001/ in the browser to proceed. A form will open. Type the string whose first non repeating character needs to be found and press submit. The corresponding character will be shown in the browser.  

In case all the characters are repeating, appropriate message will be shown.

In case where no string is typed, error will be thrown.

## Unit Testing ##
Unit test cases are written in mocha and chai. They are located in `test` directory.
To start the testing environment:
```bash
npm test
```