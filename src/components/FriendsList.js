import React from 'react'
import axios from 'axios'
import Friend from './Friend'

class FriendsList extends React.Component {
    state = {
        friends: []
    }

    componentDidMount() {
        if(!this.state.friends.length){
            axios.get("http://localhost:9000/api/friends", {headers: {authorization: localStorage.getItem("token")}})
                .then(res => {
                    this.setState({...this.state, friends: res.data})
                })
                .catch(err => console.error(err))
        }
    }
        
    render() {
        return(
        <>
            <h1>this is the friends lsit</h1>
            <div className='friends-list'>
                { !!this.state.friends.length && this.state.friends.map(fr => {
                    return <Friend friend={fr} key={fr.id}/>
                })}
                {
                    !this.state.friends.length && <p>loading...</p>
                } 
            </div>
        </>
    )}
  
}

export default FriendsList;
