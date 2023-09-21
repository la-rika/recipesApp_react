const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.static('./my-app/src/style.css'))

app.get("/api", (req, res) => {
    res.json({message:'ciao'})
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});