import React from 'react'

const Friend = ({friend}) => {
   const {name, age, email} = friend
    return (
        <div className='friend-container'>
            <h3>{name}</h3>
            <p>{age}</p>
            <p>{email}</p>
        </div>
    )
}

export default Friend