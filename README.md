## :beginner: About

This is Text Editor build with React.js

## :page_facing_up: Features

-   Convert to Lower Case.
-   Convert to Upper Case.
-   Dark mode / Light mode / Primary mode.
-   Clear and Copy text.
-   Real time preview feature.
-   Alert timeout.
-   Alert message whenever you change mode.

## :zap: Usage

-   However you get the code, you can install dependencies and run the project in development mode with:

```bash
$ npm install # or yarn
$ npm start # For development
$ npm run build # For production or hosting
```

-   Open up localhost:3000 and start clicking around.

## :zap: Alternatively you can run project using Dockerfile

-   After installing Docker on your desktop follow the below steps:

```bash
$ docker build -t text-editor .
$ docker run -p <HOST_PORT>:3000 text-editor
```

Now you can Access the application on `http://localhost:<HOST_PORT>`

## :file_folder: File Structure

-   Add a file structure here with the basic details about files, below is current file structure.

```
├── package.json
├── package-lock.json
├── public
│   ├── index.html
│   ├── manifest.json
│   └── robots.txt
├── README.md
└── src
    ├── App.css
    ├── App.js
    ├── App.test.js
    ├── components
    │   ├── About.js
    │   ├── Alert.js
    │   ├── Navbar.js
    │   └── TextForm.js
    ├── index.css
    ├── index.js
    ├── logo.svg
    ├── reportWebVitals.js
    └── setupTests.js
```
