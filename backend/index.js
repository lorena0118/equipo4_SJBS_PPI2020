const express = require('express');
const cors = require('cors')
const app = express();


app.use(cors())
app.use(express.json());

const routes = require('./src/routes/routes');

app.use('/api/',routes);
app.use(express.urlencoded({extended: false}));


app.listen(3001, () => {
  console.log('server started');
});