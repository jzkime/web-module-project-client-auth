import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import axios from 'axios'
import Friend from './Friend'

class FriendsList extends React.Component {
    state = {
        friends: [],
        selectedFriend: null
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
            <div className='friends-list'>
                <div className='friends-header'>
                    <h2>this is the friends list</h2>
                    <Link to='/friends/add'>Add New Friend</Link>
                </div>
            
                { !!this.state.friends.length && this.state.friends.map(fr => {
                    return <Friend friend={fr} key={fr.id} />
                })}
                {
                    !this.state.friends.length && <p>loading...</p>
                } 
            </div>
        </>
    )}
  
}

export default withRouter(FriendsList);
