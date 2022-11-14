import {useState} from 'react'
import SignUp from './SignUp';
import Login from './Login'

function ConnectModal() {
    const[signUp, setSignUp] = useState(true)
  return (
    <div className="connect-modal">
        <div className="header-btn">
            <button onClick={() => setSignUp(true)} style ={{background : signUp? "rgb(83,83,83)" :"rgb(28,28,28)" } }>S'inscrire</button>
            <button onClick={() => setSignUp(false)} style ={{background : signUp? "rgb(28,28,28)" : "rgb(83,83,83)"} }>Se connecter</button>
        </div>
        {signUp ? <SignUp/> : <Login/>}
    </div>
  );
};

export default ConnectModal