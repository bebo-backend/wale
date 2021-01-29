import React, {useState} from 'react'
import Link from 'next/link';
import {sortBy, reverse} from 'lodash'

import {useRouter} from 'next/router'







 const main = ({setSort=f=>f}) => {

    const [state,setState] = useState("")



const click=(e)=>{
    // e.preventDefault()
    
    const sortFilter = e;

setSort(sortFilter)

}


    return (  
        <div class="dropdown ">
											<a class="btn btn-link font-24 p-0 line-height-1  dropdown-toggle" href="#" role="button" data-toggle="dropdown">
											<span className="font-16">Sort</span> <i class="icon-copy dw dw-sort1 fe-16 text-black"></i>
											</a>
											<div class="dropdown-menu dropdown-menu-right dropdown-menu-icon-list">
												<a class="dropdown-item" ><i class="icon-copy dw dw-time-management"></i><span onClick={e=>click("dn2o")}>  By Date (New to Old)</span></a>
                                                <a class="dropdown-item" ><i class="icon-copy dw dw-time-management"></i><span onClick={e=>click("do2n")}>  By Date (Old to New)</span></a>
												<a class="dropdown-item" ><i class="icon-copy dw dw-property"></i> <span onClick={e=>click("name")}> By Name </span></a>
												<a class="dropdown-item" ><i class="icon-copy dw dw-like"></i> <span onClick={e=>click("lv")}> By Likes/Views</span></a>
											</div>
										</div>
);
}

export default main;
