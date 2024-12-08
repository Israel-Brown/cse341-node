const express = require("express");
const app = express();

const port = process.env.PORT || 3000;

app.use("/", require("./routes")); // reachs index.js

app.listen(port);
console.log(`→ Web Server is listening at port ${port} ☺`);
console.log(`→ Open at: http://localhost:${port}`);