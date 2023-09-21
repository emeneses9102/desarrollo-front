const express = require("express");
const path = require("path");
const app = express();
const { API_URL } = process.env;

const buildFolder = "../";
app.set("views", path.join(__dirname, buildFolder));
app.engine("html", require("ejs").renderFile);

app.use(express.static(path.join(__dirname, `${buildFolder}`)));

app.use(
  "/static",
  express.static(path.join(__dirname, `${buildFolder}/static`)),
);

app.get("*", function (req, res) {
  res.render("index.html", { API_URL });
});

app.listen(process.env.PORT, () => {
  console.log(
    `${process.env.NAME} disponible en el puerto ${process.env.PORT}`,
  );
});
