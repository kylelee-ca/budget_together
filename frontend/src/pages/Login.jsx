import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {login, reset} from '../features/auth/authSlice'


const Login = () => {
    const [formData, setFormData] = useState({
        userId: '',
        password: ''
    })
    const { userId, password } = formData
    const dispatch = useDispatch()
    const { user, isLoading, isSuccess, isError, message } = useSelector((state) => state.auth)
    
    const onSubmit = (e) => {
        e.preventDefault()
        dispatch(login(formData))
    }

    const onChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

  return (
    <>
        <section className='heading'>
            <h1>Login</h1>
            <p>Please sign in</p>
        </section>
        <section className='form'>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <input 
                        type="text" 
                        className="form-control" 
                        id="userId"
                        name="userId"
                        value={userId}
                        placeholder="Enter your ID"
                        onChange={onChange}
                    />
                </div>
                <div className="form-group">
                    <input 
                        type="password" 
                        className="form-control" 
                        id="password"
                        name="password"
                        value={password}
                        placeholder="Enter your password"
                        onChange={onChange}
                    />
                </div>
                <div className="form-group">
                    <button type="submit" className='btn btn-block'>Login</button>
                </div>

            </form>
        </section>
    </>
    
  )
}

export default Login
