
import withSession from '../../lib/session'
import Property,{MessageModel,Reviews,User} from "../../models/model"
import dbConnect from "../../utils/connectDb"


export default withSession(async (req, res) => {


  dbConnect()


 let {propertyId,text,sender} = req.body

 const anonymousUserId = "45357753663576735"

const property = await Property.findOne({_id:propertyId})

sender = await User.findOne({email:sender})



    let response

    const data = {text,sender:sender._id,propertyId}


if (property && sender && text){



  try {


 const createReview = await Reviews.create(data,(err,data)=>{

    if(data){

          response=data
          // console.log(data)

    } else {

        console.log(err)

    }
})


  if (property.reviews){

    await property.reviews.push(data)

  } else {

     property.reviews = [data]
  }


property.save(async (err,data)=>{


    if(!err){

          response= await Reviews.find({})

          // console.log(data.reviews)
          res.status(200).json({success:true,response})
          

    } else {
 response=err
res.status(200).json({success:true,response})


    }



})
      


    } catch (error) {
 
    
    console.log(error.message)
          res.status(200).json({success:true,response:error.message})


  }



}





})
