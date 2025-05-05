import db from "./dbConnect";
import Users from "../models/users";

const dbIntialize = async () => {
    try {
        await db.authenticate();
        Users.sync({ alter: false });
        console.log('Connection to database has been established successfully.');
    } catch (error) {
        console.log('unable to connect to databse❌', error)
    }
}

export default dbIntialize;
