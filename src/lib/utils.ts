import mongoose from "mongoose";

interface Connection {
    isConnected?: number;
}

const connection: Connection = {};

export const connectToDb = async (): Promise<void> => {
    try {
        if (connection.isConnected) {
            console.log("Using existing connection");
            return;
        }
        if (!process.env.MONGO) throw new Error("Mongo URL is missing");
        
        const db = await mongoose.connect(process.env.MONGO);
        connection.isConnected = db.connections[0].readyState;
    } catch (error) {
        console.log(error);
        throw new Error("Error connecting to database");
    }
};