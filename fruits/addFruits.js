import {client, fruitsCollection} from '../mongoConnect'  //the double dot steps out of fruits folder and autoconnects to the mongoConnects.js when selected

client.connect()

const addFruit = async () => {
    const myFruit = {
      name: "Pear",
      taste: "Juicy",
      price: 2,
      stock: 100,
    };
  
    try {
      await client.connect()
        const addedFruit = await fruitsCollection.insertOne(myFruit);
        console.log(addedFruit);
      
    } catch (error) {
      console.log(error)    
    } finally {
      await client.close()
    }
  };
  
  addFruit()