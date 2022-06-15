//Importaciones
const express = require("express");
const exphbs = require("express-handlebars");
const bodyParser = require("body-parser");
const app = express();

//middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(__dirname + "/public"));
app.use("/css", express.static(__dirname + "/node_modules/bootstrap/dist/css"));
app.use(
  "/bootstrapJs",
  express.static(__dirname + "/node_modules/bootstrap/dist/js")
);
app.engine(
  "handlebars",
  exphbs.engine({
    defaultLayout: "main",
    layoutsDir: `${__dirname}/views/mainLayout`,
  })
);
app.set("view engine", "handlebars");

//Servidor
app.listen(3001, () => console.log("Servidor a la escucha en el puerto 3001"));

//Rutas
app.get("/", async (req, res) => {
    try {
      res.render("index");
    } catch (err) {
      res.status(500).send({
        error: `Algo salio mal : ${err}`,
        code: 500,
      });
    }
  });