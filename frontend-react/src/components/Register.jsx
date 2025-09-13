import React, { useState } from 'react'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'



const Register = () => {

  const [username, setUserName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [errors, setErrors] = useState({})
  const [success,setSuccess]=useState(false)
  const [loading,setLoading]= useState(false)

  async function handleSubmit(e) {
    e.preventDefault()
    setLoading(true)
    const userData = {
      username,
      email,
      password
    }
    const url = 'http://127.0.0.1:8000/api/v1/'
    console.log('Userdata===>', userData);

    try {
      const response = await axios.post('http://127.0.0.1:8000/api/v1/register/', userData)
      console.log('responseData ==>', response.data)
      console.log('Registeration Successfull');
       setErrors({})
       setSuccess(true)

    } catch (error) {
      setErrors(error.response.data)
      console.log('Registeration Error  ==>', error.response.data)
    }finally {
        setLoading(false)
    }

  }


  return (
    <>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-md-6 bg-light-dark p-3 rounded'>
            <h3 className='text-light text-center '> Create an Account </h3>
            <form onSubmit={handleSubmit} >
              <div className='mb-3'>

                <input type='text'
                  name='username'
                  placeholder='User Name'
                  className='form-control'
                  value={username}
                  onChange={(e) => setUserName(e.target.value)} />
                <small> {errors.username && <div className='text-danger'> {errors.username} </div>}</small>
              </div>

              <div className='mb-3'>
                <input type='email'
                  name='email'
                  placeholder='Email Address'
                  className='form-control'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)} />
                <small> {errors.email && <div className='text-danger'> {errors.email} </div>}</small>
              </div>

              <div className='mb-3'>
                <input type='password'
                  name='password'
                  placeholder='Set Password'
                  className='form-control'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)} />
                  <small> {errors.password && <div className='text-danger'> {errors.password} </div>}</small>
              </div>


              {success && <div className='alert alert-success'> 'Registeration done Successfully </div>}

              {loading ? ( <button className='btn btn-info d-block  mx-auto' disabled >
                <FontAwesomeIcon icon={faSpinner} spin/> Please wait..  </button>)
                       : ( <button className='btn btn-info d-block  mx-auto' type='submit' >Register  </button>)}

            </form>

          </div>

        </div>

      </div>
    </>
  )
}

export default Register