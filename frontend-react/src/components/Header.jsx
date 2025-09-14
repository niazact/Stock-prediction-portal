import React from 'react'
import Button from './Button'
import { Link,Navigate, useNavigate } from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux'
import { setLogout } from '../features/authSlicer'


const Header = () => {
    const user = useSelector(state => state.auth.user)
    const dispatch = useDispatch() ;
    const navigate = useNavigate() ;

    const handleLogout = (e)=> {
        e.preventDefault() ;
        dispatch(setLogout(''));
        localStorage.removeItem('accessToken');
        localStorage.removeItem('resfeshToken');
        navigate('/Login')
        


    }
    
    return (
        <>
            <nav className='navbar container pt-2 pb-3 align-items-start'>
                <Link to="/" className='navbar-brand text-light' > Stock Prediction Portal</Link>

                <div>
                    {user && <Button text={user} class='btn-warning disabled'/> } 
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    {user? (<button className='btn btn-danger' onClick={handleLogout}> Logout</button>)
                         : <div> (<Button text='Login' class='btn-outline-info' url='/Login' />  
                            &nbsp;
                    <Button text="Register" class="btn-info" url='/register' />) </div>}

                </div>

            </nav>
        </>

    )
}

export default Header