
import withSession from '../../../lib/session'
import Property,{User,Images} from "../../../models/model"
import dbConnect from "../../../utils/connectDb"



const setImages = (images_id=[])=>{

    

      if (images_id.length >0){
          

          let image_data = []

          images_id.forEach(async image=>{

  if(image){

image_data.push({image_id:String(image)})

console.log('images data=> ', image_data)


  }
          })

          return image_data;

      }


}



export const config = {

  api:{  bodyParser:true}
}


export default withSession(async (req, res) => {


  dbConnect()
  
const {title,status,description,duration,images_id,username,propertyType,
bedrooms,bathrooms,price,street,state,city,yearbuilt,features,requirement
} = req.body

// console.log('body',features);


  try {
    // we check that the user exists and store some data in session
   
    const getUser =  await User.findOne({email:username})

    const proper =  await Property.find()

    console.log('property ',proper);
    
    let createProperty

    if(getUser){



      
createProperty = await Property.create({
        title:title,
        status: status,
        type:propertyType,
        description,
        price,
        duration,
        agentuser:getUser._id,
        images:setImages(images_id)
        
    }, (err,data)=>{

      if (data){
 


if(requirement){

  data.requirement = requirement
}
      // console.log('data yes...........');      
        if (street || state || city){
      
          data.location = {
              street,
              state,
              city
          }
      
      }
      
      if (bedrooms || bathrooms || yearbuilt){
      
          data.details = {
              bedrooms,
              bathrooms,
              yearbuilt
          }}
      
      
      
      if (Object.keys(features).length >0){
        // console.log('feature yes...........');  
      data.features= features
      }

      
      
      data.save(err=>{
      
        if (err){
          throw new Error(err)
      
        } else {
      
          console.log("saved");
        }
      })
      
      
      
      // console.log('saved data',data);
      
      
      }
      
      
      }
)





res.status(200).json({success:true,message:createProperty})

   


    }

    


 
  

  } catch (error) {
 
    res.status(200).json({success:false,error:error.message})
  }
})
