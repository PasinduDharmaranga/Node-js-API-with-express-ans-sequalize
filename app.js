const express = require("express");
const cors = require("cors");
const app = express();
const db = require("./models");

var corsOptions = {
  origin: "http://localhost:8081"
};
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

db.sequelize.sync()
  .then(() => {
    console.log("Sync successfull.");
  })
  .catch((err) => {
    console.log("Sync not successfull: " + err.message);
  });


require("./routes/employees")(app);
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});