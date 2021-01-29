import mongoose from 'mongoose'

const card = new mongoose.Schema({
    name:{type:String},
    size:{
      type:String,
    required:[true,"enter a value"]}
})



let model = null

try{
  model =  mongoose.models.Card ||  mongoose.model('Card', card);

  
} catch {
 model =  mongoose.model('Card', card);


}

export default model