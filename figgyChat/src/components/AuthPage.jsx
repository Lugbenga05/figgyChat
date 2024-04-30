import React, { useState } from 'react'
import axios from 'axios'
import './authPage.css'

const AuthPage = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const authData = await axios.post(
        'https://api.chatengine.io/chats/',
        { userName: username, userSecret: password },
        { headers: { 'Private-Key': '4a6bd48e-540a-43b8-aee1-f1d584751e45' } }
      );
      onLogin(authData.data);
    } catch (error) {
      setError('Incorrect username or password');
      console.error('Login error:', error);
    }
  };

  return (
        <div className="auth-background">
            <form onSubmit={handleSubmit}>
                <div className='figgy-wrap'>
                    <h1 className="figgy-title">Welcome to 👋 </h1>
                    <h2 className='logo-wrap'><img id='logo' src="./src/assets/discord.png" alt="" /> FiggyCHAT</h2>
                
                    <div className="auth">
                        <input className="auth-input" placeholder='Username' 
                            id='username'
                            type='text'
                            name="username" 
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />

                        <input className="auth-input" placeholder='Password'
                            id='password'
                            type='password'
                            name="password" 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    
                        <button className="proceedButton" type="submit" >
                            Proceed
                        </button>
                            {error && <div style={{textAlign: 'center', color: 'red', fontStyle: 'italic'}}>{error}</div>}
                    </div>  
                </div>
            </form>     
        </div>
  )
}

export default AuthPage
