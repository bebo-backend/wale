import React, {useState} from 'react'

import {useRouter} from 'next/router'
import useUser from '../lib/useUser'
import axios from 'axios'
import {More} from './pagination'
import useSWR from 'swr'
import {CLOUDINARY_URL} from "./contrib/config"

 const PropertyData = ({search_data="all",sort="",query=""}) => {

   const [page,setPage] = useState(1)

   const [prevData,setPrevData] = useState([])



    const {data:property,mutate:mutateProperty} = useSWR(()=>'/api/search/'+search_data+"?page="+page+"&sort="+sort+"&"+query,axios)
  

const loadMoreNext=async ()=> {

  const data = [...prevData,...property.data.property.docs]

setPrevData(data);

  setPage(property.data.property.nextPage); 

}


const loadNext=()=> setPage(property.data.property.nextPage)


const loadPrev=()=> setPage(property.data.property.prevPage)





const [data,setData] = useState('');

const router = useRouter()


const like = async (e,id)=>{

    e.preventDefault;


const data= await axios.get("/api/actions/like/"+String(id),axios).then(res=>{


    mutateProperty()
})


}

const itemClick = (title,id)=>{

    router.push('details/'+title+'/'+id)
    
    }
    


if (!property) {
    return (

        <div className="col-12 mb-30 bg-white p-4">
<div className=" height-100-p ">

<img src="/vendors/images/new-loader.gif" alt="" width='60' />

<div className="profile-info">
        <h5 className="mb-20 h5 text-blue">Getting ( {search_data} ) data ...</h5>
        </div>
</div>
</div>

    )
}



    return (  
    

<section className="my-12 bg-white " style={{marginTop:'20px',
paddingTop:'8px',paddingBottom:'8px',paddingRight:'2%',paddingLeft:'2%'}}>
       

       <div className="product-wrap">
					<div className="product-list contact-directory-list py-4">
						<ul className="row">



{prevData.map((data,key) => <li className="col-lg-4  col-md-6 col-sm-12 cursor-pointer" onClick={e=>itemClick(data.title,data._id)}  key={key}>
                                <div className="product-box contact-directory-box" >
                                    
    {data.status == "For Sale" &&    <div className=" position-absolute px-2 py-1 text-sm m-2  text-white font-weight-bolder text-uppercase" style={{zIndex:'500',fontSize:'13px',background:"rgb(0, 123, 181)"}}>{data.status}</div> }
    {data.status == "For Rent" &&    <div className=" position-absolute px-2 py-1 text-sm m-2 bg-danger text-white font-weight-bolder text-uppercase" style={{zIndex:'500',fontSize:'13px'}}>{data.status}</div> }
    {data.status == "For Roomates" &&    <div className=" position-absolute px-2 py-1 text-sm m-2 bg-success text-white font-weight-bolder text-uppercase" style={{zIndex:'500',fontSize:'13px'}}>{data.status}</div> }
                 

                  <div className="producct-img">
                                       { data.images.length  > 0 ? 
                                       <img src={CLOUDINARY_URL+"w_300,h_300,f_auto/"+data.images[0].image_id} style={{width:'100%',height:"240px"}} alt={data.images[0].image_id}  />
                                    : <img src="vendors/images/no-image.jpg" style={{width:'100%',height:"240px"}} alt=""/>} 
                                        
                                        </div>
                  <div className="product-caption">
<div className="row " >

<h4 className="col-10  text-black font-weight-bold" style={{fontSize:'18px'}}>
      ₦ {data.price}.0
      {data.duration && <span className="text-secondary" style={{fontSize:'17px'}}> / <span className="font-weight-normal">{data.duration}</span></span>}
       </h4>

       <h4 className="col-2 text-right text-success font-weight-bold" style={{fontSize:'25px'}}>
       <i class="icon-copy dw dw-like1  my-like" onClick={e=>like(e,data._id)}></i>
       </h4> 
</div>

                    <h4 className=" overflow-hidden mt-0" style={{height:'22px'}}>{data.title}</h4>
                    <div className="text-muted overflow-hidden mb-0" style={{height:'20px'}}>
                                        <span class="icon-copy ti-location-pin text-success font-weight-bold"></span>
                                        {'location' in data ? <> {data.location.street}, {data.location.city}, {data.location.state} </>:
 "No Location"}
                    </div>

                                        


                                   <div className="row mt-2 pt-2 " style={{border:'0px solid',
                                    padding:'0px',height:'28px'}} >

   <p className="col-4  " style={{fontSize:'17px'}}>
   <i class="icon-copy dw dw-view "></i> {data.views}
       </p> 

       <p className="col-4 " style={{fontSize:'17px'}} >
       <i class="icon-copy dw dw-photo-camera "></i> {data.images.length}
       </p> 

       <p className="col-4 " style={{fontSize:'17px'}} >
       <i class="icon-copy dw dw-like "></i> {data.likes}
       </p>
</div>   
                   
                  </div>

                                    
                                    <div className="view-contact " >
                  <a> <p className="row px-2 " style={{margin:'0px',padding:'0px'}}>


    
       <p className="col-12 text-capitalize overflow-hidden text-left py-2" style={{height:'40px'}}>
       { data.agentuser.image ?
                    <img src={CLOUDINARY_URL+"w_38,h_38,g_face,r_max,c_thumb/"+data.agentuser.image.image_id}  className="avatar-img " />
                   : <i class="icon-copy dw dw-user font-weight-bold avatar-img rounded-circle"
                    style={{fontSize:'28px'}}></i>
                  }   {data.agentuser.fullname}
       </p> 



                                        </p>
                                        </a>
                  </div>
                </div>
              </li>)}





{property.data.property.docs.map((data,key) => <li className="col-lg-4  col-md-6 col-sm-12 cursor-pointer" onClick={e=>itemClick(data.title,data._id)}  key={key}>
                                <div className="product-box contact-directory-box" >
                                    
    {data.status == "For Sale" &&    <div className=" position-absolute px-2 py-1 text-sm m-2  text-white font-weight-bolder text-uppercase" style={{zIndex:'500',fontSize:'13px',background:"rgb(0, 123, 181)"}}>{data.status}</div> }
    {data.status == "For Rent" &&    <div className=" position-absolute px-2 py-1 text-sm m-2 bg-danger text-white font-weight-bolder text-uppercase" style={{zIndex:'500',fontSize:'13px'}}>{data.status}</div> }
    {data.status == "For Roomates" &&    <div className=" position-absolute px-2 py-1 text-sm m-2 bg-success text-white font-weight-bolder text-uppercase" style={{zIndex:'500',fontSize:'13px'}}>{data.status}</div> }
									<div className="producct-img">
                                       { data.images.length  > 0 ? 
                                       <img src={CLOUDINARY_URL+"w_320,h_320,f_auto/"+data.images[0].image_id} style={{width:'100%',height:"240px"}} alt={data.images[0].image_id}  />
                                    : <img src="vendors/images/no-image.jpg" style={{width:'100%',height:"240px"}} alt=""/>} 
                                        
                                        </div>
									<div className="product-caption">
<div className="row " >

<h4 className="col-10  text-black font-weight-bold" style={{fontSize:'18px'}}>
      ₦ {data.price}.0
      {data.duration && <span className="text-secondary" style={{fontSize:'17px'}}> / <span className="font-weight-normal">{data.duration}</span></span>}
       </h4> 

       <h4 className="col-2 text-right text-success font-weight-bold" style={{fontSize:'25px'}}>
       <i class="icon-copy dw dw-like1  my-like" onClick={e=>like(e,data._id)}></i>
       </h4> 
</div>

										<h4 className=" overflow-hidden mt-0" style={{height:'22px'}}>{data.title}</h4>
										<div className="text-muted overflow-hidden mb-0" style={{height:'20px'}}>
                                        <span class="icon-copy dw dw-pin-7 text-success font-weight-bold mr-2"></span>
                                        {'location' in data ? <> {data.location.street}, {data.location.city}, {data.location.state} </>:
 "No Location"}
										</div>

                                        

 <div className="row mt-2 pt-2 " style={{border:'0px solid',
                                    padding:'0px',height:'28px'}} >

   <p className="col-4  " style={{fontSize:'17px'}}>
   <i class="icon-copy dw dw-view "></i> {data.views}
       </p> 

       <p className="col-4 " style={{fontSize:'17px'}} >
       <i class="icon-copy dw dw-photo-camera "></i> {data.images.length}
       </p> 

       <p className="col-4 " style={{fontSize:'17px'}} >
       <i class="icon-copy dw dw-like "></i> {data.likes}
       </p>
</div>   
          
									
									</div>
<hr />
                                    
         <p className="col-12 text-capitalize overflow-hidden text-left pb-2" style={{height:'40px'}}>
       { data.agentuser.image ?
                    <img src={CLOUDINARY_URL+"w_30,h_30,g_face,r_max,c_thumb/"+data.agentuser.image.image_id}  className="avatar-img " />
                   : <i class="icon-copy dw dw-user font-weight-bold avatar-img rounded-circle"
                    style={{fontSize:'28px'}}></i>
                  }   {data.agentuser.fullname}
       </p> 
								</div>
							</li>)}

							
							
						</ul>
					</div>


				 <More more={true} hasNext={property.data.property.hasNextPage} 
                hasPrev={property.data.property.hasPrevPage} next={loadMoreNext} prev={loadPrev} />
				</div>
                
                </section>

);
}

export default PropertyData;
