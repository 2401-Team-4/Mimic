const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const app = express();

const config = require("./utils/config.js");

const middleware = require("./utils/middleware.js");

const logger = require("./utils/logger.js");

morgan.token("body", (req) => {
  return JSON.stringify(req.body);
});

app.use(cors());
app.use(express.json());

app.use(morgan(":method :url :status :body"));

const testRouter = require("./controllers/test.js");
const recordRouter = require("./controllers/record.js");
const sessionRouter = require("./controllers/session.js")

app.use("/api/record", recordRouter);

app.use("/api/test", testRouter);

app.use("/api/project", sessionRouter)

app.use(middleware.errorHandler);

module.exports = app;
