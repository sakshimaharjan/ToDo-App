const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');
const todoRoutes = require("./routes/todoRoutes");
require("dotenv").config();

const app = express();

app.use(bodyParser.json());
app.use('/api/users', userRoutes);
app.use("/todos", todoRoutes);

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
