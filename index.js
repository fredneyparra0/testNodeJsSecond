const express = require('express')
const app = express();

const port = 3000;

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

app.use(express.static(__dirname + '/public'));

app.use('/', require('./router/routesPages'));

app.listen(port, () => {
  console.log('server run in port ' + port);
})