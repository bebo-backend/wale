import React, {useState,useRef} from 'react'

import SubmitForm from '../components/submitform'

import {useRouter} from 'next/router'

import axios from 'axios'

import useUser from '../lib/useUser'
import {NextSeo} from 'next-seo'







 const Data = () => {


	const { user,mutateUser } = useUser({
    redirectTo: '/login',
    redirectIfFound: false,
  })


  const router = useRouter()

const [load,setLoad] = useState('');
const [formValue, setFormValue] = useState({status:"For Rent"})
const [feature, setFeature] = useState([])
const [files, setFiles] = useState([])
const [errorMsg, setErrorMsg] = useState({})
const [submit, setSubmit] = useState(false)


const transformData=()=>{


	// console.log('uplofile'  +" : "+Object.values(files))


	let formdata = {}

// ole.log('upload image ',files[image] );

 formdata['images_id']= files




	for (var form in formValue){
	

		formdata[form]= formValue[form]
	   
		   }

 const ftrData= {}

	 for (var ftr in feature){
	
	
		ftrData[feature[ftr].toLowerCase().replace(" ","")] = true

		
		   
			   }

formdata['features'] = ftrData

formdata['username'] = user.email

	return formdata

}


const submitFormUpload= async ()=>{

	setLoad(true)
	setErrorMsg("")

	
  const postData = transformData()
  
   await axios.post("api/submit/upload/", postData).then(res => {
					
  


  if(res.data){
	setLoad(false)
  }


	  if (res.data.error) {
  
  
		const errData={}
  
  const err = res.data.error.split(',').map(data => {
  
   if(data.indexOf("title") >= 0){
	errData.title = data.replace("Property validation failed:","")
  
   } 
  if(data.indexOf("type") >= 0 ){
	errData.type= data.replace("Property validation failed:","").replace("'type'","'Property  Type'")
  }
  
  if(data.indexOf("price") >= 0 ){
	errData.price= data.replace("Property validation failed:","")
  }
  

  errData.error= data.replace("Property validation failed:","")
  
  
  })
  
		  setErrorMsg(errData)
		  // console.log(res.data);
		  // throw new Error()
		} else {
		  setLoad(false)
		

		router.push('/success')

  
		}

  
	
			}).then(err => {
				setLoad(false)
				console.log("error - " + err)
	
			})
   
  
  }

// async function updateImage(file,FileList=[]){


          
// 	const reader = new FileReader()

// 	reader.readAsArrayBuffer(file)


// 	reader.onload=e=>{

// 	  file.thumbUrl=e.target.result
// 	//   return e.target.result;

// console.log('files update ',file);
// return file
	  
// 	  }


// 	}

const setImageId = async (value)=>{



setFiles([...files,value])

console.log('image files == ',files)


}


const removeImageId = async (value)=>{



const data = files.filter(file=> file!==value)

setFiles(data)

console.log('remove files == ',files)


}



  async function onChange(e){


	if (e.target.value){
	
// console.log(e.target.name +" : "+e.target.value);


    if (e.target.name =="files"){

		
		const fileList = []
		

		Object.values(e.target.files).forEach(async file=> {

			
      
			const reader = new FileReader()

			reader.readAsArrayBuffer(file)
		
		
			reader.onload=e=>{
		
			  file.thumbUrl=e.target.result
	
		return fileList.push({file:file.thumbUrl,contentType:file.type})
			  
			  }

			  


// console.log('file data ',fileList);
	


		})
		
		setFiles(fileList)
		
		


     
	} else if (e.target.name == 'features') {

		if(e.target.checked){
			
			// featureArr.push(e.target.value)
			const dataArr = [...feature, e.target.value]

			console.log(e.target.name  +"array : "+dataArr);
setFeature(dataArr)

		} else {

			const data = feature.filter(value => value != e.target.value)
			setFeature(data)

		}
	
	
	
		

	}	else {
 
let data={}

		if (e.target.value == "Property Type"){

			data = {
				...formValue,
				[e.target.name]:"Apartment"
			}

		} else {


			data = {
				...formValue,
				[e.target.name]:e.target.value
			}
		}

    
        
        setFormValue(data)
    }


}

  }









    return (  <>
  <NextSeo noindex={true} />
    	
	
		<SubmitForm onChange={onChange} removeImageId={removeImageId} setImageId={setImageId} onSubmit={submitFormUpload} load={load} data={formValue} errorMsg={errorMsg} />
		
		

</>);
}

export default Data;
