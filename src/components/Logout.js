import React, {useEffect} from 'react'
import axios from 'axios'

const Logout = () => {
    useEffect(() => {
        axios.post("http://localhost:9000/api/logout", null, {headers: {authorization: localStorage.getItem("token")}})
            .then(() => {
                localStorage.removeItem("token")
            }).then(() => setTimeout(() => {window.location.href = '/'}, 1000))
            .catch(err => console.error(err))
    }, [])
    return(<h3>Logging out...</h3>)
}

export default Logout;