import { useState } from 'react'

import Layout from './contrib/layout'
import axios from 'axios'
import useSWR from 'swr'
import { useRouter } from 'next/router'
import Link from 'next/link'
import {GrpPics,CarouselImage,Details,Message,Reviews,Agents,SideDetails} from './DetailComponents'
import useUser from '../lib/useUser'



const Detail =  ({title="",id="5664",type="All categories"}) => {

   
    const router = useRouter()
  
     const {user} = useUser()

     const [reviewPage,setPage] = useState(1)
     const [step, setStep] = useState(0)

  
const {data:property,mutate:mutateProperty} = useSWR(()=>"/api/actions/view/"+String(id),axios)

const loadNextReview=()=> setPage(property.data.property.prevPage)
const loadPrevReview=()=> setPage(property.data.property.prevPage)


if(!property){

	return    <div className="col-12 mb-30">
    <div class="pd-20 card-box height-100-p width-100-p ">

    <img src="/vendors/images/new-loader.gif" alt="" width='60' />
    
    <div class="profile-info">
            <h5 class="mb-20 h5 text-blue">Getting Data ...</h5>
            </div>
    </div>
    </div>
} else  return (

<>

				   <div class="mt-4 detail-bcrumb">
					<div class="row mt-3" >
						<div class=" col-sm-12">
						<Link href={"/search/?agent="+property && user?.email+"&searchfilter=Agents"}>
								 <a className="btn btn-link font-weight-bold"> <i class="icon-copy dw dw-user-12 mx-2 "></i> Agent - ( {property && user?.email} ) 
								  </a></Link>
						
							<nav aria-label="breadcrumb" role="navigation" className="py-0">
								<ol class="breadcrumb px-2">
									<li class="breadcrumb-item">
									<Link href="/"><a href="/"> <i class="icon-copy dw dw-house1 mx-2 text-uppercase"></i> Home</a></Link></li>
									<li class="breadcrumb-item active " aria-current="page">

									{property.data.detail ? property.data.detail.type :type}</li>
									<li class="breadcrumb-item active text-muted" aria-current="page">{title}</li>
								</ol>
							</nav>
						</div>
					
					</div>

                  
				</div>





<div className="mx-2">

{ property.data.detail &&

<CarouselImage images={property.data.detail.images} />

}

<div class="row bg-white " style={{paddingLeft:'4%',paddingTop:'4%',paddingBottom:'4%',paddingRight:'2%'}}>
	

<div className="col-xl-8 col-lg-8 col-md-12 col-sm-12 ">

{ property.data.detail && <>

<Details data={property.data.detail} user={property.data.owner} mutateProperty={mutateProperty} />

<Reviews  id={property.data.detail._id} user={property.data.owner} />

</>

}
</div>




<div class="col-xl-4 col-lg-4 col-md-12 col-sm-12">
					
<h4 className="  px-4 py-2 border-primary text-black mt-3" style={{borderLeft:'4px solid rgb(0, 123, 181)'}}>TOP AGENTS</h4>
					
<Agents />
						</div> 
	
	 </div>






</div>

       
</>
  
  )
                    
}

export default Detail