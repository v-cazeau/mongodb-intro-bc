import {client, fruitsCollection} from '../mongoConnect.js'

client.connect()

const editFruit = async () => {
    // collection.findOne({ name: 'Pear' })
    const updatedFruit = await collection.findOneAndUpdate(
      { name: "Pear" },
      { $set: { name: "Grape", special: true } }
    ); //shift + option + F ; wrap the second {} and add $set to add the setting to switch the fruit name
  
    console.log(updatedFruit);
  };
  
  editFruit()