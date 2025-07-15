import mongoose from 'mongoose'


let isConnected = false;//variable for connection status

export const connectToDB = async () =>{
    mongoose.set('strictQuery',true);

    if(!process.env.MONGOBD_URI) return console.log('MONGODB_URI is not defined');

    if(isConnected) return console.log('=> using existing database connection');

    try {
        await mongoose.connect(process.env.MONGOBD_URI,)

        isConnected=true;

        console.log('MONGODB Connected');
    } catch (error) {
        console.log(error)
    }
}