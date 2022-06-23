import React, {useEffect} from 'react'
import { axiosWithAuth } from '../axiosAuth'

const Logout = () => {
    useEffect(() => {
        axiosWithAuth().post("http://localhost:9000/api/logout")
            .then((res) => {
                localStorage.removeItem("token")
            }).then(() => setTimeout(() => {window.location.href = '/'}, 1000))
            .catch(err => console.error(err))
    }, [])
    return(<h3>Logging out...</h3>)
}

export default Logout;