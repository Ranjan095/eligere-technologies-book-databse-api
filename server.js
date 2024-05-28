let express = require("express");
require("dotenv").config();
const { bookRouter } = require("./routers/book-router");
const dbConnection = require("./db");

let PORT = process.env.PORT;

let app = express();
app.use(express.json());

// Routes
app.use("/", bookRouter);

app.listen(`${PORT}`, async () => {
  try {
    await dbConnection();
    console.log(`db connection successful`);
    console.log(`listening on ${PORT}`);
  } catch (error) {
    console.log(error);
  }
});
