var express = require("express");
const cors = require('cors');
const app = express()
const Yasmin = require("./Server/Yasmin")
const Omaima = require("./Server/Omaima")
const Ahmad = require("./Server/Ahmad")
const Tamimi = require("./Server/Tamimi")

app.use(express.json());

app.use(cors());
app.use("/Yasmin", Yasmin);
app.use("/Omaima", Omaima);
app.use("/Ahmad", Ahmad);
app.use("/Tamimi", Tamimi);


const PORT = process.env.PORT || 9000;



app.listen(PORT, () => console.log(`Server listening to ${PORT}`));