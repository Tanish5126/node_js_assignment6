const express = require('express')
const app = express();
const apirouter = require('./router/apirouter.js');
app.use("/api", apirouter);
const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running at localhost:${PORT}`);
});