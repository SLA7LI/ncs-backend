const express = require("express");

const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require('cors');
const errorHandler = require("./middleware/errorHandler");

const authRoute = require("./routes/v1/authRoute");
const serviceRequestRoute = require("./routes/v1/serviceRequestRoute");
const kafkaRoute = require("./routes/v1/kafkaRoute");
const app = express();
app.use(express.json());


app.use('/api/v1/auth', authRoute);
app.use('/api/v1/servicerequests', serviceRequestRoute);
app.use('/api/v1/kafka', kafkaRoute);
app.use(errorHandler)

module.exports = app;