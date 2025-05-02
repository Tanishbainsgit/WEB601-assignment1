# WEB601-assignment1\

# Book Management API – Node.js + Express

This project uses Node.js and Express.js to create a RESTful API for managing a book library. It supports all CRUD operations and integrates AJV for JSON schema checking. The API demonstrates key server-side web features such as routing, middleware integration, validation, and error handling.


## Project Setup


- Node.js installed
- npm (Node package manager)

### Installation Steps

1. Open terminal and initialize the project:
```bash
npm init -y

2. Install required dependencies:

npm install express ajv dotenv
npm install nodemon --save-dev

3. Add this to package.json scripts section:

"scripts": {
  "start": "nodemon app.js" }


4. Start the server:

npm start
