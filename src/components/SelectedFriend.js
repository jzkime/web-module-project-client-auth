import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { axiosWithAuth } from '../axiosAuth';

const SelectedFriend = () => {
    const [friend, setFriend] = useState();
    const { friendId } = useParams();

useEffect(() => {
    axiosWithAuth().get(`http://localhost:9000/api/friends/${friendId}`)
        .then(res => setFriend(res.data))
        .catch(err => console.error(err))
}, [friendId])

    if(!friend) return(<h1>Loading...</h1>)

    return(
        <div className='friend-page'>
        {
            friend && 
                <>
                    <h2>{friend.name}</h2>
                    <p>{friend.age}</p>
                    <p>{friend.email}</p>
                </>
        }
        </div>
    )
}

export default SelectedFriend;
