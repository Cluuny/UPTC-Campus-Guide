import express from "express";
import cors from "cors";
import mainRouter from "./routes/main.route.js";

const app = express();

app.use(cors());
app.set('view engine', 'ejs');
app.use(express.static('src/views'));
app.set('views', 'src/views');

app.get('/', mainRouter);

export default app;