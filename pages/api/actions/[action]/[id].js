
import withSession from '../../../../lib/session'
import Property,{User} from "../../../../models/model"
import dbConnect from "../../../../utils/connectDb"


export default withSession(async (req, res) => {


  dbConnect()


 const {id,action } = req.query


  try {
    // we check that the user exists and store some data in session
   
    let property, user
    property = await Property.findOne({_id:id})
    


    if (property){

       switch (action){

        case "like":{
const addLikes = property.likes+=1
           
const update =  await Property.findOneAndUpdate({_id:id}, {likes:addLikes}, data=>{


        
            })
                   
        
            if (update){
                res.status(200).json({success:true,message:"like updated",likes:update.likes})
            } else {
                res.status(200).json({success:false})
            }

            

break;
        }


        case "view":{

            user = await User.findOne({_id:property.agentuser})

            const addView = property.views

           
const update =  await Property.findOneAndUpdate({_id:id}, {views:addView}, data=>{


        
            }).select("views likes title status type description location price duration features agentuser images details date").populate("agentuser")
// .populate({
//     path: 'reviews',
//     // Get friends of friends - populate the 'friends' array for every friend
//     populate: { path: 'sender' }
//   })
                   
        
            if (update){
                res.status(200).json({success:true,message:"views updated",detail:update,owner:user})
            } else {
                res.status(200).json({success:false})
            }

            break;
        }




        case "rate":{

            user = await User.findOne({_id:property.agentuser})

            rating = id.split("__")[1]

            const rateCount = user.rate_count+=1
          
           
const update =  await User.findOneAndUpdate({_id:id}, {rate:rating,rate_count:rateCount}, data=>{


        
            }).select("rate rate_count ")
// .populate({
//     path: 'reviews',
//     // Get friends of friends - populate the 'friends' array for every friend
//     populate: { path: 'sender' }
//   })
                   
        
            if (update){
                res.status(200).json({success:true,rate:{rate:update.rate,
                    rate_count:update.rate_count} })

            } else {
                res.status(200).json({success:false})
            }

            break;
        }

          case "setview":{

            user = await User.findOne({_id:property.agentuser})

            const addView = property.views+=1

           
const update =  await Property.findOneAndUpdate({_id:id}, {views:addView}, data=>{


        
            }).select("date")
// .populate({
//     path: 'reviews',
//     // Get friends of friends - populate the 'friends' array for every friend
//     populate: { path: 'sender' }
//   })
                   
        
            if (update){
                res.status(200).json({success:true,user})
            } else {
                res.status(200).json({success:false})
            }

            break;
        }


        
       }
    }
   







    } catch (error) {
 
    res.status(200).json({success:false,error:error.message})
  }
})
