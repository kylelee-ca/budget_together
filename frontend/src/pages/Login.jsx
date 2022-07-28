
import { useState } from 'react'
const Login = () => {

    const [formData, setFormData] = useState({
        id: '',
        password: ''
    })

    const { id, password } = formData
    const onSubmit = (e) => {
        e.preventDefault()
        console.log(formData)
        // To add login functionality
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
                        id="id"
                        name="id"
                        value={id}
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
