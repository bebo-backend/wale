
import withSession from '../../../lib/session'
import {User} from "../../../models/model"
import dbConnect from "../../../utils/connectDb"


const logUser = async (err,user)=>{

  if (user){

    const {fullname, image,email} = user_data

    const user = { isLoggedIn: true, fullname,email,image:image ? image :null}
  
    req.session.set('user', user)

    await req.session.save()




    res.status(200).json({message:"user logged in"})
  } else {

    res.status(200).json({error:"You have no account"})
  }

}


export default withSession(async (req, res) => {
  dbConnect()
  const { email,password } = req.body




  try {
    // we check that the user exists on GitHub and store some data in session
   const getUser =  await User.findOne({email:email,password:password})

   if (getUser){

    const {fullname, image,email} = getUser
    
        const user = { isLoggedIn: true, fullname,email,image:image ? image :null}
      
        req.session.set('user', user)
    
      await req.session.save()
     
    
    
        res.status(200).json({message:"user logged in"})
        

   }   else {
    
    res.status(200).json({error:"Your username or password do not match "})
  }



 

  } catch (error) {
    const { response: fetchResponse } = error
    res.status(fetchResponse?.status || 500).json(error.data)
  }
})
