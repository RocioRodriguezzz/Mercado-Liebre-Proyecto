let express = require ("express");
let path = require ("path");

let app = express();
let publicPath = path.resolve(__dirname, "./public");
app.use(express.static(publicPath));

app.listen(3060, () => {
    console.log("servidor corriendo en el puerto 3060")
})
