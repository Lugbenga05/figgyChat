
import { useState } from 'react';
import { ChatEngine , getOrCreateChat} from 'react-chat-engine';
import ChatPage from './components/ChatPage';
import AuthPage from './components/AuthPage';

function App() {
	const [user, setUser] = useState(true);

  		const handleLogin = (userData) => {
    		setUser(userData);
  		};

  return (
    <>
		<div>

			{
				!user ? (
        				<AuthPage onLogin={handleLogin} />

     				 ) : (

        				<ChatPage/>

      				)
			}


		</div>

    </>
  );

}

export default App
