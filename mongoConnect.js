import dotenv from "dotenv"; //imported library

dotenv.config(); //invoked library
const MONGOURI = process.env.MONGOURI;

import { MongoClient } from "mongodb";

export const client = new MongoClient(MONGOURI); //use the URI path
const database = client.db('products')

export const fruitsCollection = database.collection('fruits')
export const toyCollection = database.collection('toys')

//create instance of Mongo
//connects the client to where? (MONGOURI) - VC

//the following was cut and pasted from index
//connect to db - or create if there is none


//connect to collection - or create if none