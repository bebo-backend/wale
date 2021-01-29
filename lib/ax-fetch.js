import axios from 'axios'
// import fetch from "isomorphic-unfetch";

export async function getFetch(url){

const response = await axios.get(url)
const data =  response.data;
// console.log('axios get data '+Object.keys(data))

if (data.error) {
    const error = new Error(data.error)
    error.response = response
    error.data = data
    throw error


} else {

    return data
}

}



export async function postFetch(url,data){


    try {

        const response = await axios.post(url,data)
        const res =  response.data;
    // console.log('axios post data '+Object.values(res))
    
    if (res.error) {
    
// console.log(res.statusText)
//         const error = new Error(res.statusText)
//         error.response = response
//         error.data = res
//         throw error

return res;


    
    } else {
    
        return res;

    }


    }
     catch(error){

        if (!error.data) {
            error.data = { message: error.message }
          }
          


     }
   
    
    }



export const myfetcher= async url=>{

    return await axios.get(url)
  }


export function fetcher(...args) {
  return fetch(...args).then(response => response.json());
}

