import {client} from './mongoConnect.js' //'./ _____.js' <- imports file from another file 

//connect to client
// client.connect(); //connects to MONGOURI

//connect to db - or create if there is none
const database = client.db("products");

//connect to collection - or create if none
const collection = database.collection("fruits");

const addFruit = async () => {
  const myFruit = {
    name: "Pear",
    taste: "Juicy",
    price: 2,
    stock: 100,
  };

  try {
    await client.connect()
      const addedFruit = await collection.insertOne(myFruit);
      console.log(addedFruit);
    
  } catch (error) {
    console.log(error)    
  } finally {
    await client.close()
  } 
};

addFruit()

const editFruit = async () => {
  // collection.findOne({ name: 'Pear' })
  const updatedFruit = await collection.findOneAndUpdate(
    { name: "Pineapple" },
    { $set: { name: "Grape", special: true } }
  ); //shift + option + F ; wrap the second {} and add $set to add the setting to switch the fruit name

  console.log(updatedFruit);
};

// editFruit()

const getAllFruits = async () => {
    try {                           //try catch is to catch errors 
        await client.connect()
        const allFruits = await collection.find().toArray() //with find by itself, a bunch of data is brought back by with .toArray we convert that to an array
          console.log(allFruits);

    } catch (error) {
        console.log(error)
    } finally {
        await client.close()
    }

  /**** using .then .catch */
//   collection
//     .find()
//     .toArray()
//     .then(() => console.log(items))
//     .catch((err) => console.log(err));
};

// getAllFruits()

const deleteFruit = async () => {
    try {
        const itemDeleted = await collection.deleteOne({ name: "Pear" });
        console.log(itemDeleted);
        
    } catch (error) {
        console.log(error);
    } finally {
        await client.close
    }
};

// deleteFruit()
