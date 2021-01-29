import { useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import axios from 'axios'
import useUser from '../lib/useUser'
import useSWR from 'swr'

import {More} from './pagination'
import {CLOUDINARY_URL} from "./contrib/config"
import {Rate} from 'antd'



export const GrpPics=({images,step})=>{




 return <div className="p-0 overflow-y-scroll m-0 ">

<ul className="h-screen scrolling-touch">
       
       {images.map((e,index)=>(
    
        <li><img key={index} style={{'height':'85px','width':'90px',
        'border':index==step && '2px solid red'}} className="rounded m-1 p-1  "  
        src={CLOUDINARY_URL+"h_85,w_90,c_scale,f_auto/"+images.image_id}
        ></img>
        { /* src="/vendors/images/no-image.jpg"*/}

        </li>

			
        
    )
        )
    }
       </ul>



</div>

}




export const CarouselImage = ({images=[]}) => {
 
    
// console.log(images)

  return (
  

Object.keys(images).length > 0 ?  


<div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
	<ol class="carousel-indicators">
      { Object.keys(images).map((image,key)=> <li data-target="#carouselExampleIndicators" data-slide-to={String(key)} class={key==0 && "active"}></li>)}
	
	</ol>
	<div class="carousel-inner card-box">

    <div class="carousel-caption  d-none d-md-block">
    <p className="col-4 font-weight-bolder text-warning  " style={{fontSize:'24px'}}>
    <i class="icon-copy dw dw-photo-camera font-weight-bold"></i> {images.length}
       </p> 

			</div>
      {Object.values(images).map((image,key)=> 	<div className={key==0 ? "carousel-item active":"carousel-item"}>
			<img class="d-block " style={{width:'100%'}}  src={CLOUDINARY_URL+`w_${window.innerWidth},w_900,c_scale,f_auto/`+image.image_id} alt={key+image.image_id+" slide"} />
		</div>

	)}
	
		
	</div>
	<a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
		<span class="carousel-control-prev-icon" aria-hidden="true"></span>
		<span class="sr-only">Previous</span>
	</a>
	<a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
		<span class="carousel-control-next-icon" aria-hidden="true"></span>
		<span class="sr-only">Next</span>
	</a>
</div> :


<div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
	{/* <ol class="carousel-indicators">
		<li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
		<li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
		<li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
	</ol>
	
	<a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
		<span class="carousel-control-prev-icon" aria-hidden="true"></span>
		<span class="sr-only">Previous</span>
	</a>
	<a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
		<span class="carousel-control-next-icon" aria-hidden="true"></span>
		<span class="sr-only">Next</span>
	</a> */}
</div>

									



  )
}








export const Details = ({data={},user={},mutateProperty=f=>f}) => {
 
 const [likes,setLikes] = useState(data.likes)
  
	const like = async (e,id)=>{

		e.preventDefault;
	
	
	const data= await axios.get("/api/actions/like/"+String(id),axios).then(res=>{
	
	setLikes(res.data.likes)

		// mutateProperty()
	})
	
	
	}



	return (
	
  <div>
 
	                                  
{data.status == "For Sale" &&    <span className="   py-2 px-2 text-sm mx-2 bg-primary text-white font-weight-bolder text-uppercase text-center" style={{zIndex:'500',fontSize:'15px'}}>{data.status}</span> }
    {data.status == "For Rent" &&    <span className="   py-2 px-2 text-sm mx-2 bg-danger text-white font-weight-bolder text-uppercase" style={{zIndex:'500',fontSize:'15px'}}>{data.status}</span> }
    {data.status == "For Roomates" &&    <span className="px-2   py-2 text-sm mx-2 bg-success text-white font-weight-bolder text-uppercase" style={{zIndex:'500',fontSize:'15px'}}>{data.status}</span> }


		 <span className="col-6 font-weight-bold text-success" style={{fontSize:'29px'}}>
      ₦ {data.price}.0
      {data.duration && <span className="text-secondary" style={{fontSize:'19px'}}> / <span className="font-weight-normal">{data.duration}</span></span>}
       </span> 


<div className="row mb-30">

<div className="col-lg-7 col-sm-12">

<h2 className=" mt-4 mb-2 text-uppercase " style={{fontWeight:'700',
    color: '#111111',    textTransform: 'uppercase',    letterSpacing: '0.5px',	marginBottom: '5px',	fontFamily: "Montserrat, sans-serif", fontSize:'30px'}}>
	{data.title}
</h2>

<div className="text-muted overflow-hidden pt-1" >
                                        <span class="icon-copy ti-location-pin text-success font-weight-bold"></span>
                                        {'location' in data ? <> {data.location.street}, {data.location.city}, {data.location.state} </>:
 "No Location"}
										</div>

</div>

<div className="col-sm-12 col-lg-5 pd-social ">
   <span class=" my-like font-weight-normal mr-1 text-muted" style={{fontSize:'17px'}} >
        <i class="icon-copy dw dw-view mr-2"></i>{data.views}</span>
       <span className=" mx-1 " style={{
 	color:'#e2dddd'
 }}> | </span> 
       <span class="  my-like font-weight-normal mx-1 text-muted " style={{fontSize:'17px'}} >
       <i class="icon-copy dw dw-like mr-1"></i> {likes}</span>
       <span className=" mx-1 " style={{
 	color:'#e2dddd'
 }}> | </span> 

       <a class="icon-copy dw dw-like1  my-like font-weight-bold mx-2 " title="Like Product" style={{fontSize:'20px',color:'black'}} onClick={e=>like(e,data._id)}></a>
    
	
       <a class="icon-copy dw dw-message-1 font-weight-bold file-action
        mx-3" data-toggle="modal" data-target="#modal-message" title="Message seller" style={{fontSize:'20px',color:'black'}}  ></a>
       


</div>

</div>


<div className="pt-30">


<div class="p-2 card-box mb-4">
							
							<div class="tab">
								<ul class="nav nav-tabs customtab " role="tablist">
									<li class="nav-item">
										<a class="nav-link  text-blue font-weight-bold" data-toggle="tab" href="#overview" role="tab" aria-selected="true">OVERVIEW</a>
									</li>
									<li class="nav-item">
										<a class="nav-link active text-blue font-weight-bold" data-toggle="tab" href="#description" role="tab" aria-selected="false">DESCRIPTION</a>
									</li>
										<li class="nav-item">
										<a class="nav-link text-blue font-weight-bold" data-toggle="tab" href="#requirement" role="tab" aria-selected="false">REQUIREMENT</a>
									</li>
									<li class="nav-item">
										<a class="nav-link text-blue font-weight-bold" data-toggle="tab" href="#features" role="tab" aria-selected="false">FEATURES</a>
									</li>
								
								</ul>
								<div class="tab-content">
									<div class="tab-pane fade " id="overview" role="tabpanel">
										<div class="p-0">
											


<OverviewTable data={data} user={user} />




										</div>
									</div>
									<div class="tab-pane fade active" id="description" role="tabpanel">
										<pre class="p-2 text-muted" style={{fontSize:'16px'}}>
										{data.description ? data.description: "No Description provided"}
										</pre>
									</div>

									<div class="tab-pane fade" id="requirement" role="tabpanel">
										<pre class="p-2 text-muted" style={{fontSize:'16px'}}>
										{data.requirement ? data.requirement: "No Requirement provided"}
										</pre>
									</div>


									<div class="tab-pane fade" id="features" role="tabpanel">
										<div class="p-2">
											
											<FeatureTable features={data.features} />
										</div>
									</div>
								</div>
							</div>
						</div>
</div>

     


  </div>
  
									  
  
  
  
	)
  }
  
  

  const OverviewTable =({data={},user={}})=>{

	return (
		
		<div className="pb-20 my-4">

<table class="data-table table  stripe hover ">
					
<tbody > 

<tr > <td className="font-weight-bold" > Upload on</td>  <td className="text-capitalize">{data.date.replace("T00:"," @ ")} </td>   </tr>	
<tr > <td className="font-weight-bold" > Type </td>  <td className="text-capitalize">{data.type} </td>   </tr>	
<tr> <td className="font-weight-bold"> Status</td>  <td className="text-capitalize"> {data.status}</td>   </tr>	
<tr> <td className="font-weight-bold">Bedrooms </td>  <td className="text-capitalize">{data.details.bedrooms} </td>   </tr>	
<tr> <td className="font-weight-bold">Bathrooms </td>  <td className="text-capitalize">{data.details.bathrooms} </td>   </tr>	
{data.details.yearbuilt && <tr> <td className="font-weight-bold">Year Built </td>  <td className="text-capitalize">{data.details.yearbuilt} </td>   </tr>	}





</tbody>

							</table>

		</div>

	)
  }



  const FeatureTable =({features={}})=>{

	return (
		
		<div className="pb-20 my-4 w-100">

<table class="data-table table stripe hover wrap w-100">
					
<tbody > 

{features && Object.keys(features).map((value,key)=> value != "_id" &&	<tr key={key} className="w-100" > <td className="font-weight-bold text-capitalize" > {value} </td>
  <td className="text-capitalize">Available </td>   </tr>	)}





</tbody>

							</table>

		</div>

	)
  }






  export const Message =({user={},cardBox=true})=>{

  	  const { user:account, mutateUser } = useUser()

  	  

const [text,setText] = useState("")
const [load,setLoad] = useState(false);
const [send,setSend] = useState(false);


  	const onChange=(e)=>{

  		setText(e.target.value)
  	}

const sendMessage= async (e)=>{

	setLoad(true)
	setSend(false)

	const data= {text,receiver:user._id,sender:account.email}

  
 await axios.post("/api/send_message", data).then(res => {
					

	setLoad(false)
	setSend(true)
	setText("")


		
			}).then(err => {
				setLoad(false)
				console.log("error - " + err)
	
			})


}


	return (
		
		<div className={`pb-20 my-4 ${cardBox && "card-box"} py-2 px-4`} id="message">

		{account?.isLoggedIn ? <>
 <Link href={"/seller/"+user.email}> 
                    <a class=" text-center" href={"/seller/"+user.email}>


<h5 className="btn btn-link m-0 pd-social font-weight-bold">   {user.image ?
                   <img src={CLOUDINARY_URL+"w_70,h_70,c_crop,g_face,c_thumb,r_max/"+user.image.image_id}  className="avatar-img rounded mx-3" />
                   : <a className="fe fe-user fe-32 avatar-img rounded-circle mx-3"></a>
                  }

                   Message ( { account && account.email == user.email ? "Yourself":user.fullname} ) </h5>
                </a>
                   </Link>

<div class="form-group my-0">
							<textarea onChange={onChange} name="description" class="form-control my-2 mb-4 p-4" rows={8} value={text} placeholder='Write  your message to user ...' ></textarea>
						</div>

							<div>

	<button type="button" class="btn p-2 px-4" onClick={sendMessage} style={{background:"#c32361",color:"#ffffff"}} >
	<i class="icon-copy dw dw-message-1 mx-2"></i> Send</button> {load &&	
											 <span class="spinner-border spinner-border-sm mx-4" role="status" >
												 </span>}
												{send && <span className="mx-4 text-success"> <i class="icon-copy dw dw-check mx-2"></i> Message Send </span>}
		</div>

		</>:

		<h6 className="text-info">Please logged in (to message)  </h6>

	}

		</div>


	)
  }




  export const Reviews =({user={},id,})=>{

  	  

 const { user:account, mutateUser } = useUser()

const [reviewPage,setPage] = useState(1)
  
const {data:review,mutate:mutateReview} = useSWR(()=>"/api/get_review/"+String(id)+'/?page='+reviewPage,axios)


const loadNextReview=()=> setPage(review.data.reviews.nextPage)
const loadPrevReview=()=> setPage(review.data.reviews.prevPage)




const [text,setText] = useState("")
const [load,setLoad] = useState(false);
const [send,setSend] = useState(false);


  	const onChange=(e)=>{

  		setText(e.target.value)
  	}

const sendMessage= async (e)=>{

	setLoad(true)
	setSend(false)

	const data= {text,propertyId:id,sender:account.email}

  
 await axios.post("/api/send_review", data).then(res => {
					

	setLoad(false)
	setSend(true)
	setText("")
	mutateReview()


		
			}).then(err => {
				setLoad(false)
				console.log("error - " + err)
	
			})


}

if (!review) 
	return <div>  </div>


return (
		
		<div className="pb-20 my-4 card-box py-4 px-2 review mx-0" id="message" >


<h4 className=" mt-4 mx-2 mb-2 text-uppercase " style={{fontWeight:'700',
    color: '#111111',    textTransform: 'uppercase',    letterSpacing: '0.5px',	marginBottom: '5px',	fontFamily: "Montserrat, sans-serif"}}>
	{review.data.reviews.totalDocs} Reviews
	<hr />
</h4>


<div className="my-4 mx-0">
{Object.values(review.data.reviews.docs).map((value,key)=>(
	 <div class="row align-items-center mb-4 mr-2">
                        <div class="col-3 col-md-2 text-center ">
                          <a href="profile-posts.html" class="avatar avatar-md">
                            {value && value.sender && value.sender.image ?
                   <img src={CLOUDINARY_URL+"w_65,h_65,c_crop,g_face,r_max,c_thumb/"+value.sender.image.image_id}  className="avatar-img rounded " />
                   : <img src="/vendors/images/no-user-image.jpg"alt="...Image" className=" rounded-circle " style={{width:'65px',height:'65px'}} /> 
                  }
                 

                      
                          </a>
                        </div>
                        <div class="col">
                          <p class="mb-0 text-uppercase font-weight-bolder">{value && value.sender && value.sender.fullname}</p>

                         <small class="badge badge-light text-muted mx-2">{value && value.date.replace("T"," @ ")}</small>
                        
                        </div>
                    

                        <div className="col-12 px-4 my-2 "> 
                          <div class=" text-dark mb-1 mt-2 mx-4 px-3 text-break" style={{fontSize:'16px', lineHeight: "25px"}}>{value.text}</div>
                          </div>
                      </div>

))}



							 <More 
               hasNext={review.data.reviews.hasNextPage} 
                hasPrev={review.data.reviews.hasPrevPage} next={loadNextReview} prev={loadPrevReview} />

</div>

<div className="row review-message">


<span className="btn btn-link m-0 pd-social font-weight-bold ">   {user.image ?
                   <img src={CLOUDINARY_URL+"w_36,h_38,c_crop,g_face,r_max,c_thumb/"+user.image.image_id}  className="avatar-img rounded " />
                   : <a className="fe fe-user fe-32 avatar-img rounded-circle mx-0"></a>
                  }

                   </span>
                 


							<input type="text" onChange={onChange}  class="form-control col-8 my-2 mb-4 p-4 mx-1"  value={text} placeholder='Write a review on property ...' />
						
						<button type="button" class="btn p-2 px-4 mt-2 " onClick={sendMessage} style={{height:'47px',background:"rgb(0, 123, 181)",color:"#ffffff"}} >
	<i class="icon-copy dw dw-message-1 mx-2"></i> Send</button> 
			</div>				

<div>  {load &&	 <span class="spinner-border spinner-border-sm mx-4" role="status" >
	 </span>}
{send && <span className="mx-4 text-success"> 
<i class="icon-copy dw dw-check mx-2"></i> Review  Send </span>}
		
		
</div>
		</div>


	)
  }






  export const Agents =({search="all"})=>{

  	    const {data:agents,mutate:mutateAgents} = useSWR(()=>'/api/agents/'+search+"?limit=12",axios)




if (!agents) {

    return (

        <div className="col-12 mb-30 bg-white p-4">
<div className=" height-100-p ">

<img src="/vendors/images/new-loader.gif" alt="" width='60' /> 

<div className="profile-info">
        <h5 className="mb-20 h5 text-blue">Getting (Top Agent ) data ...</h5>
        </div>
</div>
</div>

    )
} else {



}




	return (
		
	<section>


<div className="list-group mt-3 overflow-scroll top-agents mt-4" >

{Object.values(agents.data.agents.docs).map((value,key)=>(

<>
								<a  className="ml-2 list-group-item-action  
								flex-column align-items-start">
								<Link href={"/search/?agent="+value.email+"&searchfilter=Agents"}> 
									<div className="row">

<div className="col-4">

  {value && value.image ?
  	 <img src={CLOUDINARY_URL+"w_70,h_70,c_crop,g_face,c_thumb/"+value.image.image_id}  className="avatar-img rounded " />
                   
                   : <img src="/vendors/images/no-user-image.jpg"alt="...Image" className="avatar-img rounded " />
                  }

</div>

<div className="col-8">

<h5 className="mb-1 h5 color-black text-capitalize ">{value.fullname}</h5>
<div className="pb-1">
<small className="weight-700 mb-1 text-muted">{value.email}</small>
</div>
 <p className="middle"><span className="badge badge-light text-success">{value.phone} <i className="icon-copy dw dw-phone-call mx-2"></i></span></p>
</div>

									</div>
									</Link>
								</a>
<hr/>
		</>						

	))}
							
							</div>



		</section>

	)
  }




export const SideDetails = ({data={},user={},mutateProperty=f=>f}) => {
 
 const [likes,setLikes] = useState(data.likes)
  //  const [rate,setRate] = useState({rate:data.agentuser.rate,
 	// rate_count:data.agentuser.rate_count})
  
	const like = async (e,id)=>{

		e.preventDefault;
	
	
	const data= await axios.get("/api/actions/like/"+String(id)).then(res=>{
	
	setLikes(res.data.likes)

		// mutateProperty()
	})
	
	
	}


	const rateUser = async (rate,userid)=>{

		// e.preventDefault;
		console.log('rate ',rate)
	
	
	const data= await axios.get("/api/rate/"+String(userid)+"/"+String(rate)).then(res=>{
	
	// setRate(res.data.rate)

		mutateProperty()
	})
	
	
	}







	return (
	
  <div className="w-full pl-4 mr-2" >


  <p className="font-weight-bold ml-4 mb-4 show-mobile"> Upload: {String(data.date).replace("T"," @ ")} </p>
  <h4 className="  " style={{fontSize:'16px'}}>
      <Link href={"/seller/"+user.email}> 
                    <a  class=" text-uppercase text-primary font-weight-bold btn-link" href={"/seller/"+user.email}>

                       {user.fullname}
                       </a>

                       </Link>

       </h4> 
{data.agentuser && 
       <h4 className="mb-4 mt-1" style={{fontSize:'17px'}}>

<p className="" style={{height:'5px'}}>
 ( {data.agentuser.rate_count} )<span className=" mx-1 " style={{
 	color:'#e2dddd'
 }}> | </span> <Rate style={{'fontSize':'19px'}} defaultValue={0} value={data.agentuser.rate}
     allowClear={false} disabled> 


    </Rate> 

    </p>

    </h4>

}

<h2 className=" mt-4 mb-3 pt-3  w-full " style={{
	fontWeight:'400',
    color: '#111111', 
    letterSpacing: '0.5px',	marginBottom: '5px',
    	fontFamily: "Montserrat, sans-serif", 
    	fontSize:'25px',lineHeight:'34px'}}>
	{data.title}
</h2>




 
	                                  
 <p class="badge  badge-pill overflow-hidden   py-2 px-4" style={{background:"#efcf71",fontSize:'15px'}}>
<i class="icon-copy dw dw-share1 font-weight-bold mx-1"></i>{data.status}</p>
 

<h2 className=" mb-1 pt-0  w-full " style={{
	fontWeight:'600',
    color: '#111111', 
    	fontFamily: "Montserrat, sans-serif", 
    	fontSize:'28px'}}>
	NGN {data.price}.0
	{data.duration && <span className="text-secondary" style={{fontSize:'21px'}}> / <span className="font-weight-normal">{data.duration}</span></span>}
</h2>


<div className=" pd-social my-4">

       <span class=" my-like font-weight-normal mr-1 text-muted" style={{fontSize:'17px'}} >
        <i class="icon-copy dw dw-view mr-2"></i>{data.views}</span>
       <span className=" mx-1 " style={{
 	color:'#e2dddd'
 }}> | </span> 
       <span class="  my-like font-weight-normal mx-1 text-muted " style={{fontSize:'17px'}} >
       <i class="icon-copy dw dw-like mr-1"></i> {likes}</span>
       <span className=" mx-1 " style={{
 	color:'#e2dddd'
 }}> | </span> 

       <a class="icon-copy dw dw-like1  my-like font-weight-bold mx-2 " title="Like Product" style={{fontSize:'20px',color:'black'}} onClick={e=>like(e,data._id)}></a>
    
	
       <a class="icon-copy dw dw-message-1 font-weight-bold file-action
        mx-3" data-toggle="modal" data-target="#modal-message" title="Message seller" style={{fontSize:'20px',color:'black'}}  ></a>
       

       <a href="#rate" class="icon-copy dw dw-star font-weight-bold  mx-2 dropdown-toggle" href="#" role="button" data-toggle="dropdown" 
       title="Rate seller" style={{fontSize:'20px',color:'black'}}
        onClick={e=>rateUser(e)} ></a>

        <div class="dropdown-menu dropdown-menu-right dropdown-menu-icon-list mx-0 px-0">


 <p class="dropdown-item font-weight-bold" >
Rate User

 </p>
<p class="dropdown-item" >

<Rate style={{'fontSize':'19px'}} value={1}
   onChange={value=>rateUser(value,data.agentuser._id)} allowClear={false}>     </Rate>      </p>
}


</div>


 
	


</div>

<div className="pt-0 mt-0 text-dark mb-4 address-loc " style={{fontSize:"17px",	fontFamily:"Montserrat, sans-serif"}} >
                                        <p className="text-muted mb-0">   <span class="icon-copy dw dw-pin text-success mr-2 font-weight-bold"></span>  Location </p>
                                      
                                        {'location' in data ? <p> {data.location.street}, {data.location.city}, {data.location.state} </p>:
 "No Location"}
										</div>





<hr />

<div className="pt-10">


<div class="">

<p className="text-muted" style={{fontSize:'16px'}}> Meet your seller </p>
	{data.agentuser && 			
<div className="row px-2 " style={{margin:'0px',padding:'0px'}}>

<p className="col-3">

  { data.agentuser.image ?
                    <img src={CLOUDINARY_URL+"w_70,h_70,g_face,r_max,c_thumb/"+data.agentuser.image.image_id}  className="avatar-img " />
                   : <img src={"/vendors/images/no-image.jpg"} style={{height:'70px',width:'70px'}}  className="avatar-img " />
                    
       }           

              
</p>

<div className="col-9 ">
   <p className="text-capitalize overflow-hidden font-weight-bold
   text-left py-0" style={{height:'17px'}}>
         <Link href={"/seller/"+data.agentuser.email}> 
                    <a class="text-primary  btn-link font-weight-bold text-uppercase" href={"/seller/"+data.agentuser.email}>

                     {data.agentuser.fullname}
                     </a>
                     </Link>
       </p> 

       <p className="text-muted">
Owner of {data.agentuser.email}
       </p>



       </div>

     

                                        </div>

}


  <div className="text-muted my-2" style={{fontSize:'16px'}}> Contact seller </div> 
{ data.agentuser && <>
       <p className="" style={{fontSize:'16px'}}>
        <i class="font-weight-bold icon-copy dw dw-smartphone mr-4"></i>
          {data.agentuser.phone}</p>

           <p className="" style={{fontSize:'16px'}}>
        <i class="font-weight-bold icon-copy dw dw-email mr-4 text-primary"></i>
          {data.agentuser.email}</p> 

          {data.agentuser.whatsappNo && <p className="" style={{fontSize:'16px'}}>
       <i class="icon-copy fa fa-whatsapp mr-4 text-success" aria-hidden="true"></i>

          {data.agentuser.whatsappNo}</p>

      }  

      {data.agentuser.website && <p className="" style={{fontSize:'16px'}}>
     <i class="icon-copy fi-web mr-4"></i>

          {data.agentuser.website}</p>

      }


				</>}			
						</div>


</div>

     <div className="pt-2 mt-4 mr-2">

     {data.agentuser && 
<a  data-toggle="modal" data-target="#modal-message" className="btn btn-success btn-block py-3 mb-4 text-white">
Message {data.agentuser.fullname.split(" ")[0]}
	<i class="icon-copy dw dw-message-1 mx-2 "></i>

</a>


 
}



     </div>

     	<a  class="list-group-item list-group-item-action mb-4  flex-column align-items-start text-center mb-2 " style={{
				background:'#f6f7f78c'
			}}>
			<h5 className="text-center my-3 text-muted"> Upload property like this </h5>
<Link href="/submitproperty">
<button type="button" class="btn  mx-4 py-2 mb-4" style={{background:"rgb(0, 123, 181)",color:"#ffffff"}}><span class="fe fe-plus fe-16 mr-1 text-gray"></span> SUBMIT PROPERTY</button>
</Link>

			</a>	


  </div>
  
									  
  
  
  
	)
  }
  