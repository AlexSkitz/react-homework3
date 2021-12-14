import React, { Fragment, Component, useState } from "react";

// class LoginPassword extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             username: '',
//             password: '',
//             message: '',
//         }
//     }

//     onSubmit = (e) => {
//         e.preventDefault();
//         if ((this.state.username === '') || (this.state.password === '')) {
//             this.setState({ ...this.state, message: alert(`Fill ${!this.state.username ? 'username' : 'password'} field`) });
//             return;
//         } else {
//             console.log('username is ', this.state.username);
//             console.log('password is ', this.state.password);
//         }
//     }

//     render() {
//         return (
//             <Fragment>
//                 <div className='container'>
//                     <form className='form' id='logInForm' onSubmit={event => this.onSubmit(event)}>
//                         <div className='username'>
//                             <label htmlFor='login'>
//                                 User Name
//                             </label>
//                             <input type='text' id='login' value={this.state.username} onChange={event => this.setState({ ...this.state, username: event.target.value })} placeholder='Type your username'></input>
//                         </div>
//                         <div className='password'>
//                             <label htmlFor='password'>
//                                 Password
//                             </label>
//                             <input type='password' id='password' value={this.state.password} onChange={event => this.setState({ ...this.state, password: event.target.value })} placeholder='Type your password'></input>
//                         </div>
//                         <button type='submit' form='logInForm'>Log In</button>
//                     </form>
//                     <div>{this.state.message}</div>
//                 </div>
//             </Fragment>
//         )
//     }



// };

const LoginPassword = () => {
    const [myState, setMyState] = useState({ username: '', password: '', message: '' });
    const OnSubmit = (e) => {
        e.preventDefault();
        if ((myState.username === '') || (myState.password === '')) {
            setMyState({ ...myState, message: alert(`Fill ${!myState.username ? 'username' : 'password'} field`) });
        } else {
            console.log('username is ', myState.username);
            console.log('password is ', myState.password);
        }
    }
    return (
        <Fragment>
            <div className='container'>
                <form className='form' id='logInForm' onSubmit={event => OnSubmit(event)}>
                    <div className='username'>
                        <label htmlFor='login'>
                            User Name
                        </label>
                        <input type='text' id='login' value={myState.username} onChange={event => setMyState({ ...myState, username: event.target.value })} placeholder='Type your username'></input>
                    </div>
                    <div className='password'>
                        <label htmlFor='password'>
                            Password
                        </label>
                        <input type='password' id='password' value={myState.password} onChange={event => setMyState({ ...myState, password: event.target.value })} placeholder='Type your password'></input>
                    </div>
                    <button type='submit' form='logInForm'>Log In</button>
                </form>
                <div>{myState.message}</div>
            </div>
        </Fragment>
    )
}

export default LoginPassword;