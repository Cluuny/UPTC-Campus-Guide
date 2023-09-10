import app from "./src/app.js";
import { PORT } from "./config/env.config.js";

app.listen(PORT, (err) => {
    console.log(`Listening on port ${PORT}`)
});