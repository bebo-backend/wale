
import withSession from '../../../lib/session'
import Property,{User} from "../../../models/model"
import dbConnect from "../../../utils/connectDb"
import {sortBy, reverse} from 'lodash'

export default withSession(async (req, res) => {


  dbConnect()





  try {
    // we check that the user exists and store some data in session
  let agents
 
const {state,street} = req.query
 
// console.log('state ',state);
// console.log('street ',street);


if (search =="all"){

  agents =  await User.find({},"fullname phone email image address").sort({views:"-1"}).lean()



      
}  else {


  agents =  await User.find({fullname:search},"fullname phone email image address").sort({views:"-1"}).lean()

}


let sortData


 switch(sort){

  case "dn2o":{

    sortData= reverse(sortBy(agents,['_id']))
    break;
  }

  case "do2n":{

    sortData= sortBy(agents,['_id'])

    break;
  }

  case "name":{

    sortData= sortBy(agents,['-fullname'])
    

    break;
  }

  case "lv":{

    sortData= sortBy(agents,['-likes','-views'])
    

    break;
  }

  default :{

    sortData = agents
    break;
  }
 }
  
res.status(200).json({success:true,agents:sortData})

   


    } catch (error) {
 
    res.status(200).json({success:false,error:error.message})
  }
})
