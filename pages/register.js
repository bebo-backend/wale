import { useState } from 'react'
import useUser from '../lib/useUser'
import Layout from '../components/contrib/layout'
import RegisterForm from '../components/auth/RegisterForm'
import { useRouter } from 'next/router'
import axios from 'axios'
import {NextSeo} from 'next-seo'




const Signup = () => {
  const { mutateUser } = useUser({
    redirectTo: '/dashboard/profile',
    redirectIfFound: true,
  })

  const [errorMsg, setErrorMsg] = useState()
  const [userForm, setForm] = useState({})
  const [load, setLoad] = useState(false)

  







  const router = useRouter()

  async function handleSubmit(e) {
    e.preventDefault()
    setErrorMsg("")
  
    setLoad(true)


    try {


    const res = await axios.post("/api/auth/signup", userForm)
    
if(res.data){
  setLoad(false)
}
    if (res.data.error) {


      const errData={}

const err = res.data.error.split(',').map(data => {

 if(data.indexOf("email") >= 0){
  errData.email = data.indexOf("duplicate") ? "This email already exists, change it": data.replace("User validation failed:","")

 } 
if(data.indexOf("phone") >= 0 ){
  errData.phone= data.replace("User validation failed:","")
}

if(data.indexOf("fullname") >= 0 ){
  errData.fullname= data.replace("User validation failed:","")
}

if(data.indexOf("password") >= 0 ){
  errData.password= data.replace("User validation failed:","")
}
  


})

        setErrorMsg(errData)
        // console.log(res.data);
        // throw new Error()
      } else {
        setLoad(false)
        mutateUser();
        router.push('dashboard/profile')

      }
  
     


  
   
    } catch (error) {
      setLoad(false)
         
      setErrorMsg(error.message)
    }
  }


  async function onChange(e){

const data = {
    ...userForm,
    [e.target.name]:e.target.value
}

setForm(data)

  }

  return (
    <Layout title="Register" >
   



      <div className="" 
      style={{'backgroundColor':'whitesmoke'}}>

    <NextSeo title={"Register account on wale.ng"} titleTemplate='%s | wale.ng'
description="Welcome to wale" />


        <RegisterForm  errorMessage={errorMsg} onSubmit={handleSubmit} onChange={onChange} load={load} />


      


      </div>      

    </Layout>
  )
}

export default Signup