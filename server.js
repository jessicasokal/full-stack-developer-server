import express from 'express';
import cors from 'cors';
import userController from "./controllers/user-controller.js";
import tuitsController from "./controllers/tuits-controller.js";

const app = express();
app.use(cors());
app.use(express.json());
app.listen(process.env.PORT || 4000);

userController(app);
tuitsController(app);
//app.get('/hello', (req, res) => {res.send('Hello World!')})
//app.get('/', (req, res) => {res.send('Welcome to Full Stack Development!')})
app.listen(4000);