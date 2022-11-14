import {useRef, useState} from 'react';
import {auth} from '../utils/firebaseConfig'

function SignUp() {

    const registerEmail = useRef();
    const registerPassword = useRef();
    const [displayName, setDisplayName] = useState("")

const handleRegister= (e) =>{
    e.preventDefault()
    try{
     auth.createUserWithEmailAndPassword(
         registerEmail.current.value,
         registerPassword.current.value)
         .then(async(userAuth)=>{
            await userAuth.user.updateProfile({
                displayName,
            })
            console.log(userAuth)
            window.location.reload()
         })
    }catch(e){
        console.log(e.message)
    }

}

  return (
    <div className="signup-container">
        <div className="signup">
            <form onSubmit={e => handleRegister(e)}>
                S'inscrire
                <input type="text" placeholder='Pseudo' onChange={(e)=>setDisplayName(e.target.value)} required/>
                <input type="email" placeholder='Votre e-mail' required ref={registerEmail}/>
                <input type="password" placeholder='Mot de passe' required ref={registerPassword} />
                <input type="submit" value="Valider l'inscription"  />
            </form> 
        </div>
    </div>
  )
}

export default SignUp