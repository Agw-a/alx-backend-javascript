const express = require('express');

const app = express();
const listen_port = 1245;

app.get('/', (_, res) => {
  res.send('Hello Holberton School!');
});

app.listen(listen_port, () => {
  console.log(`Server listening on PORT ${listen_port}`);
});

module.exports = app;