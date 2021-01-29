import React, {useState} from 'react'
import Link from 'next/link';
import Layout from "../components/contrib/layout"
import Search from "../components/search"
import LatestProperty from "../components/latestproperty"

import Agents from "../components/agents"

import {useRouter} from 'next/router'
import dbConnect from '../utils/connectDb';

import {NextSeo} from 'next-seo'





 const main = ({cars}) => {




    return (  
        <Layout >


<NextSeo title={"Find a new home, apartment, roomates etc."} titleTemplate='%s | wale.ng'
description="Meet agents who know what you want on wale.ng " />


<main id="main" >

<Search />
<LatestProperty/>

<Agents/>



    </main>

</Layout>

);
}

export default main;

