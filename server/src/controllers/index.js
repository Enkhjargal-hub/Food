import { userRouter } from "./routes/user.routes.js";
import mongoose from "mongoose";
import { productRouter } from "./routes/product.routes.js";

const app = express();
const port = 3000;

mongoose.connect(process.env.MONGO_CONNECTION_STRING).then(()=> {
    console.log("database connection established");
})

app.use(express.json());

app.use("/user", userRouter);

app.listen(port, ()=> {
    console.log(`Example app listening on port ${port}`);
});