import React, {useState} from 'react'
import { axiosWithAuth } from '../axiosAuth'

const initialForm = {
    name: '',
    age: '',
    email: ''
}

const AddFriend = () => {
    const [ input, setInput ] = useState(initialForm)

    const handleInput = e => {
        const {name, value} = e.target;
        setInput({...input, [name]: value})
    }

    const handleSubmit = e => {
        e.preventDefault();
        axiosWithAuth().post("http://localhost:9000/api/friends", input)
                .then(res => {
                    window.location.href = '/friends'
                }).catch(err => console.error(err))
    }
    return(
    <form onSubmit={handleSubmit} className='add-friend'>
        <label>Name
            <input type='text' name='name' onChange={handleInput} value={input.name}/>
        </label>
        <label>Age
            <input type='text' name='age' onChange={handleInput} value={input.age}/>
        </label>
        <label>Email
            <input type='text' name='email' onChange={handleInput} value={input.email} />
        </label>
        <input type='submit' id='addNew-button' />
    </form>
    )
}

export default AddFriend;