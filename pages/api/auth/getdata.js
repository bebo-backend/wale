import {getFetch} from '../../../lib/ax-fetch'

import {BASE_URL} from '../../../settings'
import axios from 'axios';

export default async (req, res) => {
//   const { username,password } = await req.body
  // console.log('username '+Object.keys(JSON.parse(req.body)))
  const url = BASE_URL+req.body.url
  try {
    // we check that the user exists on GitHub and store some data in session
    const res_data = await getFetch(url)

      if (res_data.error){
        // console.log('res '+Object.keys(res_data))
      res.json(res_data)

  } else {

    console.log('res '+Object.keys(res_data))

    res.json({"data":res_data})



}
  

  } catch (error) {
    const { response: fetchResponse } = error
    res.status(fetchResponse?.status || 500).json(error.data)
  }
}
