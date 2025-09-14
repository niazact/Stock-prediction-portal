import React, { useState } from 'react'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import {useNavigate} from 'react-router-dom'
import { setLogin } from '../features/authSlicer'
import { useSelector,useDispatch } from 'react-redux'




const Login = () => {
    const [username, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const [loading,setLoading]= useState(false)
    const navigate=useNavigate() ;
    const dispatch=useDispatch() 


    async function handleLogin(e) {
    e.preventDefault()
    setLoading(true)
    const userData = {
      username,
      password
    }
    const url = 'http://127.0.0.1:8000/api/v1/'
    console.log('Userdata===>', userData);

    try {
      const response = await axios.post('http://127.0.0.1:8000/api/v1/token/', userData)
      //console.log('responseData ==>', response.data)
      localStorage.setItem('accessToken',response.data.acess)
      localStorage.setItem('resfeshToken',response.data.refresh)
      dispatch(setLogin(username))
      //console.log('Login Successfull');
      
      navigate('/') 
      } catch (error) {
        console.log('Login Failed :', error.response.data)
    }finally {
        setLoading(false)
    }
  }

    return (
   <>
     <div className='container'>
             <div className='row justify-content-center'>
               <div className='col-md-6 bg-light-dark p-3 rounded'>
                 <h3 className='text-light text-center '> Login To Our Portal </h3>
                 <form onSubmit={handleLogin} >
                   <div className='mb-3'>
     
                     <input type='text'
                       name='username'
                       placeholder='User Name'
                       className='form-control'
                       value={username}
                       onChange={(e) => setUserName(e.target.value)} />
                   </div>
   
                       
                   <div className='mb-3'>
                     <input type='password'
                       name='password'
                       placeholder='Password'
                       className='form-control'
                       value={password}
                       onChange={(e) => setPassword(e.target.value)} />
                   </div>
       
                      {loading ? ( <button className='btn btn-info d-block  mx-auto' disabled >
                     <FontAwesomeIcon icon={faSpinner} spin/> Logging In...  </button>)
                            : ( <button className='btn btn-info d-block  mx-auto' type='submit' >Login  </button>)}
     
                 </form>
     
               </div>
     
             </div>
     
           </div>
    </>
    )
}

export default Login