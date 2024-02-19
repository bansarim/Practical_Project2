const express = require('express');
const app = express();
app.use(express.json());
const otolithController = require('./controller/otolithController.js');


app.get('/otoliths', otolithController);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));