import React, {useState} from 'react'

import {useRouter} from 'next/router'

import axios from 'axios'
import gistfile1 from './contrib/gistfile1'

import SearchComponent,{bigSearchComponent} from './searchComponent'





 const Search = ({orientation="row"}) => {
const [minRange,setMinRange] = useState(100);
const [maxRange,setMaxRange] = useState(10000);

const [state,setMoreState] = useState(false);
const router = useRouter()

const [status,setStatus] = useState('For Rent');

const [search, setSearch] = useState("")

const [filter, setSearchFilter] = useState('')

const setFilter=(data)=> setSearchFilter(data)


const housingType = ["Apartment","Office","House","Hotel","Restaurant","Rooms","Warehouse"]
const option = (value)=>{

	return <option value={value}>{value}</option>
}


const change=(e)=>{


 // console.log(e.target.name," : ", e.target.value);


setStatus(e.target.value)

// const    data = {
//       ...searchForm,
//       [e.target.name]:e.target.value
//     }
  
// console.log(data);
  
      
//       setSearchForm(data)


}

const submitFormUpload= async ()=>{


if (search){


 const postData = {status,search_data:search,searchFilter:filter,minRange,maxRange}

   let string_url=""

  Object.keys(postData).map(obj=>{

  string_url+=obj+'='+postData[obj]+'&'

})



  
router.push("/search/?"+string_url)

      

}
 		
   
  
  }



    return (  
    <>
{ orientation == "row" ? <section className="" id="bg-img" >
        <div class="container grp-main-content  " >
            <div class="row "  style={{paddingTop:'14px',paddingBottom:'40px'}}>
                <div class="col-12  mt-0 text-center ">
                    <div class="section-title mb-2">
                        <h1 className="  px-4 py-2  text-white" style={{borderLeft:'0px solid gold'}}>WHERE WILL YOUR RATHER LIVE ?</h1>
                    </div>
                </div>
          
                </div>

               
                </div>

                <div className="container main-search card-box p-4  " style={{borderRadius:'0px'}}>

                <div class="row ">

<div className="col-sm-12 col-md-8 col-lg-9 ">
<h5 className=" text-left w-100 ">

  <div class="btn-group btn-group-toggle  " data-toggle="buttons">
                <label class="btn  btn-primary  text-white  " >
                  <input type="radio" name="status" id="option1" onClick={change}  value="For Sale" autocomplete="off" checked/> FOR SALE
                </label>
                <label class="btn btn-primary active text-white">
                  <input type="radio" name="status" value="For Rent" onClick={change}  id="option2" autocomplete="off"/> FOR RENT
                </label>
                <label class="btn  btn-primary text-white">
                  <input type="radio" name="status" onClick={change}  value="For Roomates" id="option3" autocomplete="off"/> FOR ROOMATE
                </label>
              </div>
        




         </h5>
</div>

<div className="col-sm-12 col-md-4 col-lg-3 show-laptop ">
<h5 className="text-capitalize text-right w-100  status font-14 "
 > <b>Offer :</b> <i>{status}</i> </h5>
</div>


                

                </div>

<div className="row mt-3">
<div className="col-12  my-2">
<SearchComponent setSearch={setSearch} filter={true} setFilter={setFilter} searchFilter={filter} />
</div>
</div>



					
						<div class="row mt-2">

            <div class="col-md-4 ">

          
<form>
<div class="form-group text-black">
<label for="formControlRange">Min. Price [10-10000]: <span className="text-black font-weight-bold">₦ {minRange}.0</span></label>
<input type="range" class="form-control-range" id="formControlRange"
min={10} max={10000} value={minRange} onChange={e=> setMinRange(e.target.value)}/>
</div>
</form>
</div>

							<div class="col-md-4">

          
							<form>
  <div class="form-group text-black">
    <label for="formControlRange">Max. Price [10000-100000]: <span className="text-black font-weight-bold">₦ {maxRange}.0</span></label>
    <input type="range" class="form-control-range" id="formControlRange"
     min={10000} max={100000} value={maxRange} onChange={e=> setMaxRange(e.target.value)}/>
  </div>
</form>
							</div>

      

              <div class="col-md-4" onClick={submitFormUpload}>
              <button style={{width:'100%',height:'52px',borderRadius:'0px'}} type="button"  class=" btn btn-lg btn-success text-white  py-2">
              SEARCH HOUSING <i class="icon-copy dw dw-search2 mx-2 font-weight-bold"></i> </button>
							</div>



						</div>
				


                </div>

                </section> :
<section className="mt-8 pt-8">
<div class="container-fluid ml-4 " >
    <div class="row "  style={{marginTop:'50px',marginBottom:'30px'}}>


    </div></div></section>

              }
</>
);
}

export default Search;
