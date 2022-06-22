import React from 'react'
import { Link } from 'react-router-dom'

const Friend = ({friend}) => {
   const {name, age, email, id} = friend;

    return (
        <div className='friend-container' >
            <Link to={`/friends/${id}`}>
                <h3>{name}</h3>
            </Link>
        </div>
    )
}

export default Friend