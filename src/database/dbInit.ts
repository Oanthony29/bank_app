import db from "./dbConnect";


const dbIntialize = async () =>{
    try {
        await db.authenticate();
        console.log('Connection to database has been established successfully.');
    } catch (error) {
        console.log('unable to connect to databse❌', error)
    }
}

export default dbIntialize;
