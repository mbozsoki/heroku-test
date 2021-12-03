import express from "express";
import * as path from "path";

const app = express();
const port = process.env.PORT || 8080;

// This will create a middleware.
// When you navigate to the root page, it would use the built react-app
app.use(express.static(path.resolve(path.dirname(""), "./client/build")));

app.get("/api", (req, res) => {
  res.json({ message: "👋 from Expresss!" });
});

app.get("*", (req, res) => {
  res.sendFile(path.resolve(path.dirname(""), "../client/build", "index.html"));
});

app.listen(port, () => console.log(`Server started at port: ${port}`));
