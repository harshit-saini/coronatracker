const express = require("express");
// require("dotenv").config();
const ejs = require("ejs");
const expressEjsLayouts = require("express-ejs-layouts");
const bodyParser = require("body-parser");

const indexRouter = require("./routes/indexRouter");

const app = express();

// body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// settings to serve static files
app.use(express.static("public"));

// setting for the view engine
app.set("views", "view");
app.set("view engine", "ejs");
app.use(expressEjsLayouts);

//

app.use("/", indexRouter);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`server started...on port ${PORT}`);
});
