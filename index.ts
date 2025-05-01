import express,{ Request, Response,  NextFunction} from 'express';
import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import dbIntialize from './src/database/dbInit';

const app = express();

app.use(
    cors({
        origin: "*",
    })
);

app.use(express.urlencoded( { extended: true}) );
app.use(express.json());

// app.use({ err: TypeError, req: Request, res: Response, next: NextFunction } => {
//     try {
//         if(err) {
//             return res.status(500).json({status: false, message: (err as TypeError).message})
//         }
//     } catch (err) {
        
//     }
// });

app.get("/", (req:Request, res: Response)=>{
    res.send(`welcome to ${process.env.APPNAME}`);
});

const PORT = process.env.PORT || 4000;

const Boostrap = async function () {
    try {
        await dbIntialize();
        app.listen(PORT, () =>{
            console.log(`app is working on ${PORT}✅`);
        })
    } catch (error) {
        console.log('unable to connect to database');
    }
}

Boostrap();
