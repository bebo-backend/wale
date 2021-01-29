import dbConnect from '../../utils/connectDb'
import Car from "../../models/car"

export default async (req,res) =>{

    const {method,body} = req;
    await dbConnect()
    console.log(req.body);

    switch (method){

        case 'GET':{

            console.log('get method');
            break;
        }

        case 'POST':{

            try {

                const car= await Car.create(
                    req.body
                )

                res.status(200).json({success:true,data:car})
            } catch(err) {

                res.status(200).json({success:false,error:err.message})
            }

            break;
        }

        default:
            res.status(400).json({ success: false })
            break
    }


}