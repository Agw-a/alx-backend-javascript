import express from 'express';
import mapRoutes from './routes';

const app = express();
const listen_port = 1245;

mapRoutes(app);
app.listen(listen_port, () => {
  console.log(`Server listening on PORT ${listen_port}`);
});

export default app;
module.exports = app;