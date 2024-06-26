let express = require("express");
require("dotenv").config();
let cors = require("cors");
var cookieParser = require("cookie-parser");

const { bookRouter } = require("./routers/book-router");
const dbConnection = require("./db");
const { userRoute } = require("./routers/userRoutes");

let PORT = process.env.PORT;

let app = express();
app.use(cors());
app.use(cookieParser());
app.use(express.json());

// Routes
app.use("/", bookRouter);
app.use("/users", userRoute);

app.listen(`${PORT}`, async () => {
  try {
    await dbConnection();
    console.log(`db connection successful`);
    console.log(`listening on ${PORT}`);
  } catch (error) {
    console.log(error);
  }
});
