import React from "react";
import axios from 'axios'

class Login extends React.Component {
    state = {
        username: '',
        password: ''
    }

    handleChange = (e) => {
        const {name, value} = e.target
        this.setState({
            ...this.state,
            [name]: value
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        axios.post('http://localhost:9000/api/login', this.state)
            .then(res => {
                localStorage.setItem("token", res.data.token);
                this.props.history.push('/friends')
            })
            .catch(err => console.error(err))
    }

render() {
    return(
    <section>
        <form onSubmit={this.handleSubmit}>
            <label>Username
                <input type='text' name='username' onChange={this.handleChange} />
            </label>
            <label>Password
                <input type='password' name='password' onChange={this.handleChange} />
            </label>
            <input type='submit'/>
        </form>
    </section>
    )
}
}

export default Login;