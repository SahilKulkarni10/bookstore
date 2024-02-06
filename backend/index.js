import  express, { response }  from "express";
import { PORT, mongoDBURL} from "./config.js";
import mongoose from "mongoose";
import { Book } from "./models/bookModel.js";
import booksRoute from "./routes/booksRoute.js";
import cors from 'cors';

const app =  express();

app.use(express.json());

app.use(cors());

//  app.use(
//     cors ({
//         origin:'http://localhost:3000',
//         methods:['GET','POST','PUT','DELETE'],
//         allowedHeaders:['Content-Type'],
//     })
//  )

app.get('/',(req,res) => {
    console.log(req);
    return res.status(234).send("welcome");
})

app.use("/books", booksRoute);

mongoose.connect(mongoDBURL)
.then(() => {
    console.log('App is connected');
    app.listen(PORT, () => {
        console.log(`app is listening to ${PORT}`);
    });
})
.catch((error) => {
    console.log(error);
})