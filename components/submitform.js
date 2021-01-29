import React, {useState,useCallback} from 'react'
import Layout from '../components/contrib/layout'
import Upload from '../components/contrib/upload'
import gistfile1 from '../components/contrib/gistfile1'
import Link from 'next/link';
import sha1 from 'crypto-js/sha1'

import Dropzone from 'react-dropzone-uploader'





export const CloudinaryUpload = ({title="demo",setImageId=f=>f,removeImageId=f=>f,maxLength=10,multiple=true, finishUpload})=>{


const [public_id,setPublicId] = useState("")


const SignKey = (eager,public_id,timestamp)=>{

const api_secret = "fDWINmYw_Q4v3xN86uOFKIq2Phw"

const eag = `eager=${eager}`
const pub_id = "public_id="+public_id
const timestm = "timestamp="+timestamp

const params = `${eag}&${pub_id}&${timestm}`

const hash = sha1(params+api_secret).toString()

console.log(hash)

	return hash
}


const getUploadParams= ()=>{

// const url = "http://localhost:3000/api/submitp" 
const api_key="634365759713568",timestamp=Math.floor(new Date().getTime()/1000),eager="q_auto:good"
const signature=SignKey(eager,public_id,timestamp)

const url = "https://api.cloudinary.com/v1_1/bebo-vercel/image/upload"

	return {fields:{public_id,api_key,timestamp,eager,signature},
		url
	}
}

const handleChangeStatus = ({meta,file},status)=>{


const metaName = meta.name.replace(".jpg","").replace(".png","").replace(" ","_")
const titleName= title.replace(' ',"_")

// console.log('title999 ',titleName)

if (status === 'headers_received'){

if (finishUpload) finishUpload(titleName+"_"+metaName)

console.log("picture uploaded")
}

if (status === 'preparing'){

setPublicId(titleName+"_"+metaName)

}

if (status === "getting_upload_params"){

setImageId(titleName+"_"+metaName)

// if (finishUpload) finishUpload(titleName+"_"+metaName)

}

if (status === "removed"){

removeImageId(titleName+"_"+metaName)

}
	// console.log(meta)
	
	console.log(status)
}

// const handleSubmit = ({files,allFiles})=>{

// console.log(files.map(f=>f.meta))
// allFiles.forEach(f=> f.remove())

// }

	return (

	<div>

<Dropzone 
getUploadParams={getUploadParams}
onSubmit={null}
onChangeStatus={handleChangeStatus}
multiple={multiple} 
maxFiles={maxLength}
accept={"image/*"}
styles={{dropzone:{
	overflow:'hidden',minHeight:'200px',
	border:'0px solid'
},
 dropzoneReject: { borderColor: 'red', backgroundColor: '#DAA' },
 inputLabel:(files,extra)=>(extra.reject ? {color:'red'}:{})

 }} 
inputContent= {(files,extra)=>{

	return extra.reject ? <p className="w-100 text-center">
	<i class="icon-copy dw dw-warning text-center  " style={{
		fontWeight:'bold',fontSize:'45px'
	}}></i><p className="my-2">Upload Image files only</p>
	</p>
	:<p className="w-100 text-center">
	<i class="icon-copy dw dw-upload text-center  " style={{
		fontWeight:'bold',fontSize:'45px'
	}}></i><p className="my-2">Drag Files or Click to Browse</p>
	</p>
}}

inputWithFilesContent={files=> <p className="pt-2 text-uppercase"> <i class="icon-copy dw dw-add mx-2 font-weight-bold"></i> Add Picture </p>}

 />

	</div>)
}





 const Data = ({onSubmit=f=>f, load, onChange, data={},errorMsg,setImageId=f=>f,removeImageId=f=>f}) => {




console.log('stat ', data.status);

const propertyType = ["Apartment","Office","House","Hotel","Restaurant","Rooms"]
const option = (value)=>{

	return <option value={value}>{value}</option>
}


const checkbox = (value,label)=>{

	return <span class="custom-control custom-checkbox m-2">
	<input type="checkbox" onChange={onChange} class="custom-control-input" id={value} value={label ? label:value} name="features" />
	<label class="custom-control-label px-4" for={value}>{label ? label:value}</label>
</span>
}

    return (  
    
        <Layout title="Submit Housing ">
        
<section className=" " style={{marginTop:'20px'}}  >
	<div class="row my-2 mx-2 div1" >
						<div class=" col-sm-12">
						
							<nav aria-label="breadcrumb" role="navigation">
								<ol class="breadcrumb px-2">
									<li class="breadcrumb-item"><Link href="/">
									<a href="/"> <i class="icon-copy dw dw-house1 mx-2 text-uppercase"></i>  Home</a>
									</Link></li>
									<li class="breadcrumb-item active" aria-current="page">Upload product</li>
								</ol>
							</nav>
						</div>
					
					</div>

               

                <div class="page-header  card-box submit-padding" style={{marginLeft:'4%',marginRight:'4%'}}  >


<div className="px-4 " >

<div class="form-group row my-4">
							<h4 class="col-sm-12 col-md-12 col-form-label text-black my-4 ">TITLE</h4>
							<div class="col-sm-12 col-md-12 mb-2">
								<input class="form-control " onChange={onChange} name="title" style={{height:'45px'}} type="text" placeholder="3 Bedroom Flats in Agege etc." />
							</div>

							{errorMsg && errorMsg.title && <div class="alert w-100 alert-danger" role="alert"> {errorMsg.title} </div> }
						</div>

                        <div class="form-group my-4">
							<span className="text-black h4 my-4">DESCRIPTION</span>
							<textarea onChange={onChange} name="description" class="form-control my-4 p-4" rows={8} placeholder="Write a few words on your housing ..." ></textarea>
						</div>
                        

						<div className="" style={{marginTop:'50px',marginBottom:'40px'}}>
<p className="text-black h4 my-4">HOUSING STATUS</p>
<div className="row mx-4">

<span class="custom-control custom-radio">
					<input type="radio" checked={data.status=="For Rent"} value="For Rent" name="status" class="custom-control-input" id="customCheck1-1" onChange={onChange}/>
					<label class="custom-control-label px-4" for="customCheck1-1">For Rent</label>
				</span>

                <span class="custom-control custom-radio ">
					<input type="radio" value="For Sale" checked={data.status=="For Sale"} name="status" class="custom-control-input" id="customCheck1-3" onChange={onChange}/>
					<label class="custom-control-label px-4" for="customCheck1-3">For Sale</label>
				</span>

                <span class="custom-control custom-radio ">
					<input type="radio" value="For Roomates" checked={data.status=="For Roomates"} name="status" class="custom-control-input" id="customCheck1-2" onChange={onChange}/>
					<label class="custom-control-label px-4" for="customCheck1-2">For Roomates</label>
				</span>

</div>
</div>


                        <div className="" >


                        <p className="text-black h4 my-4" >LOCATION</p>

<div className="row">




<div className="col-md-4">

<div class="input-group custom">
<input type="text" class="form-control form-control-lg" name="street" onChange={onChange} placeholder="Enter Street" />
<div class="input-group-append custom">
<span class="input-group-text"><i class="icon-copy fe fe-map-pin"></i></span>
</div>
</div>
</div>




<div class="col-md-4">

<div class="form-group">

<select class="custom-select2 form-control text-lg" name="state" onChange={onChange}
style={{width:'100%',height: '48px'}}>
<option>Choose State</option>
{gistfile1 && Object.values(gistfile1).map((e,index)=>(
<option key={index} value={e.state.name}>{e.state.name}</option>


))}
  </select>
</div>
</div>


<div class="col-md-4">

<div class="form-group">

<select class="custom-select2 form-control text-lg" name="city" onChange={onChange}
style={{width:'100%',height: '48px'}}>
<option>Choose City  {data.state && " - "+ data.state } </option>


     { !data.state ? gistfile1 && Object.values(gistfile1).map((e,index)=>(
  <>
    
<optgroup key={e.state.name} label={e.state.name} >


{Object.values(e.state.locals).map((city,index)=>(

    
<option key={index} value={city.name}>{city.name}</option>

))}


      

</optgroup>

</>



)): gistfile1 && Object.values(gistfile1).map((e,index)=>(
e.state.name == data.state &&  Object.values(e.state.locals).map((city,index)=>(

    
<option key={index} value={city.name}>{city.name}</option>

))





))



}
  </select>
</div>
</div>

</div>


</div>


<div className="" >


<p className="text-black h4 my-4" >FEATURED PRICE</p>

<div className="row">


<div className="col-md-6">

<div class="input-group custom">
<input type="number" class="form-control form-control-lg" name="price" onChange={onChange} placeholder="Price" />
<div class="input-group-append custom">
<span class="input-group-text">NGN</span>
</div>
</div>
</div>

{data.status == "For Roomates" && 
<div class="col-md-6">

<div class="form-group">

<select class="custom-select2 form-control text-lg" name="duration" onChange={onChange}
style={{width:'100%',height: '48px'}}>
<option value="None above" >After price label</option>

<option value="daily">Daily</option>
<option value="monthly">Monthly</option>
<option value="yearly">Yearly</option>
<option value="None above" >None above</option>

</select>
</div>


{errorMsg && errorMsg.price && <div class="alert alert-danger" role="alert"> {errorMsg.price} </div> }
</div>

	}


{data.status == "For Rent" && 
<div class="col-md-6">

<div class="form-group">

<select class="custom-select2 form-control text-lg" name="duration" onChange={onChange}
style={{width:'100%',height: '48px'}}>
<option value="" >After price label</option>

<option value="daily">Daily</option>
<option value="monthly">Monthly</option>
<option value="yearly">Yearly</option>
<option value="" >None of the above</option>

</select>
</div>
</div>

	}








</div>


</div>




<div className="">
<p className="text-black h4 my-4">FEATURED IMAGES</p>
<div className="row ">
<div class="col-md-12">
                  <div class="card mb-4">
                    <div class="card-header">
                      <p className="">Upload your housing image(s)  ...</p>
                    </div>
                    <div class="card-body center">


<div class="dropzone">


<CloudinaryUpload title={data.title} setImageId={setImageId} removeImageId={removeImageId} />


</div>

					
                  
                    </div> 
                  </div> 
                </div>
        
</div>
</div>


<div className="">


<p className="text-black h4 my-4">HOUSING DETAILS</p>

<div className="row">

<div class="col-md-6">
<div class="input-group custom">
<input type="number" class="form-control form-control-lg" onChange={onChange} name="yearbuilt" placeholder="Year built" min={1960} />
<div class="input-group-append custom">
<span class="input-group-text"><i class="icon-copy fe fe-box"></i></span>
</div>
</div>
</div>




<div class="col-md-6">
<div class="form-group">

<select class="custom-select2 form-control text-lg" name="propertyType" onChange={onChange}
style={{width:'100%',height: '48px'}}>
<option>Housing Type</option>

{propertyType.map(val => option(val))}

  </select>
</div>

{errorMsg && errorMsg.type && <div class="alert alert-danger" role="alert"> {errorMsg.type} </div> }
</div>




</div>
</div>



<div className="">

<div className="row">


<div class="col-md-6">
<div class="form-group">

<select class="custom-select2 form-control text-lg" name="bedrooms" onChange={onChange}
style={{width: "100%", height: '48px'}}>
<option value="0">No of Bedrooms</option>
<option value="0">None</option>
<option value="1">One</option>
<option value="2">Two</option>
<option value="3">Three</option>
<option value="4">Four</option>
<option value="5">Five or more</option>
  </select>
</div>
</div>

<div class="col-md-6">
<div class="form-group">

<select class="custom-select2 form-control text-lg" name="bathrooms" onChange={onChange}
style={{width: "100%", height: '48px'}}>
	<option value="0">No of Bathrooms</option>
	<option value="0">None</option>
<option value="1">One</option>
<option value="2">Two</option>
<option value="3">Three</option>
<option value="4">Four</option>
<option value="5">Five or more</option>




  </select>
</div>
</div>


</div>
</div>


{data.status == "For Rent" && 
  <div class="form-group my-4">
							<span className="text-black h4 my-4">RENT REQUIREMENTS</span>
							<textarea onChange={onChange} name="requirement" class="form-control my-4 p-4" rows={8} placeholder="Write a needed requirement for your rent ..." ></textarea>
						</div>
}

{data.status == "For Roomates" && 
  <div class="form-group my-4">
							<span className="text-black h4 my-4">ROOMATE REQUIREMENTS</span>
							<textarea onChange={onChange} name="requirement" class="form-control my-4 p-4" rows={8} placeholder="Write a needed requirement for your roomate ..." ></textarea>
						</div>
}




<div className="">
<p className="text-black h4 my-4">HOUSING FEATURES</p>
<div className="row mx-4">

{checkbox("ac","Air Condition")}
{checkbox("gym","Gym")}
{checkbox("Laundry")}
{checkbox("Refrigerator")}
{checkbox("Watcher")}
{checkbox("Wifi")}
{checkbox("swimmingpool","Swimming Pool")}
{checkbox("tvcable","Tv Cable")}
{checkbox("Dryer")}
{checkbox("Barbeque")}
{checkbox("Generator")}
{checkbox("Lawn")}

        
</div>
</div>




<div className="col-md-12 d-flex justify-content-center mt-6" style={{marginTop:'50px',marginBottom:'40px'}}>




<div class="input-group mb-0 w-50 ">
										{/* <!--
											use code for form submit
											<input class="btn btn-primary btn-lg btn-block" type="submit" value="Sign In"/>
										--> */}
										<a class="btn btn-primary btn-lg  text-white"
										 onClick={onSubmit}> <i className="fe fe-24 mx-2 fe-upload"></i> SUBMIT HOUSING
										 	{load &&	
											 <span class="spinner-border spinner-border-sm mx-4" role="status" >
												 </span>}</a>
								

									</div>

									</div>

</div>
                    </div>
                </section>
                </Layout>

);
}

export default Data;


