import React, {useEffect} from 'react'
import axios from 'axios'

const Logout = () => {
    useEffect(() => {
        axios.post("http://localhost:9000/api/logout", null, {headers: {authorization: localStorage.getItem("token")}})
            .then(res => localStorage.removeItem("token"))
            .catch(err => console.error(err))
    }, [])
    return(<h2>Logged out</h2>)
}

export default Logout;