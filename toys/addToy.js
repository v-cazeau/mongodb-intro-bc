import {client, toyCollection} from '../mongoConnect.js'

client.connect()

const addToy = async () => {
// get collection? 
    const myToy = {
        name: 'Optimus Prime', 
        type: 'Transformer', 
        cool: true, 
        price: 40, 
        description: 'Leader Autobot, real cool blue semi truck, with sword', 
    }

   await toysCollection.insertOne(myToy)
   console.log(addedToy)
}

addToy()


//edit a toy and get toy