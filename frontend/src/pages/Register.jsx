import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { register } from '../features/auth/authSlice'
const Register = () => {
    const [formData, setFormData] = useState({
        userId: '',
        name: '',
        password: '',
        password2: ''
        
    })
    const { userId, name, password, password2 } = formData 
    const { user, isLoading, isSuccess, isError, message } = useSelector(state => state.auth)
    const dispatch = useDispatch()
    const onSubmit = (e) => {
        e.preventDefault()
        dispatch(register(formData))
        
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
            <h1>Sign up</h1>
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
                        type="text" 
                        className="form-control" 
                        id="name"
                        name="name"
                        value={name}
                        placeholder="Enter your name"
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
                    <input 
                        type="password2" 
                        className="form-control" 
                        id="password2"
                        name="password2"
                        value={password2}
                        placeholder="Confirm your password"
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

export default Register
