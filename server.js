const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 8080;

//This will create a middleware.
//When you navigate to the root page, it would use the built react-app
app.use(express.static(path.resolve(__dirname, "./client/build")));

app.listen(port, () => console.log(`Server started at port: ${port}`));
