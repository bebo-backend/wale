import { useState } from 'react'
import useUser from '../lib/useUser'
import Layout from '../components/contrib/layout'
import Form from '../components/auth/Form'
import axios from 'axios'
import { useRouter } from 'next/router'
import {NextSeo} from 'next-seo'



const Login = () => {
  const { mutateUser } = useUser({
    redirectTo: '/dashboard/profile',
    redirectIfFound: true,
  })

  const [errorMsg, setErrorMsg] = useState('')
  const [userInput, setUsername] = useState('')
  const [userPass, setPassword] = useState('')
  const [load, setLoad] = useState(false)






  const router = useRouter()

  async function handleSubmit(e) {
    e.preventDefault()
setLoad(true)
    setErrorMsg("")
    const body = {
      email: userInput,
      password:userPass
    }




  try {

    const res = await axios.post('/api/auth/login', body)

if(res.data){
  setLoad(false)
}
    // Throw error with status code in case Fetch API req failed
    if (res.data.error) {
      setErrorMsg(res.data.error)
   
    } else {
      mutateUser();
      router.push('/')
    }

   

  } catch (error) {
    setErrorMsg(error+': Failed to Log in')
    setLoad(false)


  }

  }




const onChange = async (e)=>{
  setLoad(false)

if (e.target.name == "email"){

  setUsername(e.target.value)
} else {

  setPassword(e.target.value)
}

  }

  return (
    <Layout title="Log in">

        <NextSeo title={"Sign in to wale"} titleTemplate='%s | wale.ng'
description="join wale.ng now to list your product" />



      <div className=" flex w-full" style={{'backgroundColor':'whitesmoke'}}>
        <Form isLogin errorMessage={errorMsg} onSubmit={handleSubmit} onChange={onChange} load={load}  />
      </div>
      
      
      

    </Layout>
  )
}

export default Login