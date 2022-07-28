import axios from 'axios'
// proxy localhost 3000 or anything to the server
const API_URL = '/api/user/'

// Register user ## POST /api/user
const register = async (userData) => {
    const response = await axios.post(API_URL, userData)
    if (response.data) {
        localStorage.setItem('user', JSON.stringify(response.data))
    }
    return response.data
}
// Login user
const login = async (userData) => {
    const response = await axios.post(API_URL + '/login', userData)
    if (response.data) {
        localStorage.setItem('user', JSON.stringify(response.data))
    }
    return response.data
}

// Logout user

const logout = async () => {
    localStorage.removeItem('user')
}

const authService = { 
    register, 
    login, 
    logout 
}

export default authService