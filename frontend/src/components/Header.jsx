import { Link } from 'react-router-dom'

const Header = () => {

    const onLogout = () => {
        console.log('Logout requested')
    }
    const user = false
  return (
    <div className='header'>
      <div className='logo'>
        <Link to='/'>BudgetTogether</Link>
      </div>
      <ul>
        {user ? (
            <li>
                <button className="btn" onClick={onLogout}>
                    Logout
                </button>
            </li>
        ) : (
            <li>
                <Link to='/login'>
                    Login
                </Link>
            </li>
        )}
        <li>
            <Link to='/register'>
                Register
            </Link>
        </li>
      </ul>
    </div>
  )
}

export default Header
