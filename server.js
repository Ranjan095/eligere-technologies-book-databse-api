let express = require("express");

let app = express();
// app.use(express.json());
let PORT = 8080;

app.get("/", (req, res) => {
  return res.status(200).send("<h1>hello world</h1>");
});

app.listen(`${PORT}`, () => {
  console.log(`listening on ${PORT}`);
});
