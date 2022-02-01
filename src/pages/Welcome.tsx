import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

import googleIcon from '../assets/google-icon.svg';
import welcomeImage from '../assets/welcome_image.png';

import '../styles/welcome.scss';

export function Welcome(){
    const {user, signInWithGoogle} = useAuth()
    const navigate = useNavigate();

    async function handleNextPage(){
       
        if(!user){
           await signInWithGoogle();
        }
        navigate('/rooms/profile');
    }

    return (
        <div className='container'>
            <div className='sideContainer'>
                <img src={welcomeImage} alt="Imagem da tela inicial" id='firstImage' />
                <strong>
                    Converse sobre o que <br /> você mais gosta.
                </strong>
                <p>
                    Conecte-se com pessoas que tenha os <br /> mesmos gostos que você
                </p>
            </div>

            <main className='loginContainer'>
                <h1>
                    Odyssey Talk
                </h1>
                <button onClick={handleNextPage} className='googleButton'>
                    <img src={googleIcon} alt="Icone do Google" id='googleImage'/>
                    Crie seu Perfil com o Google
                </button>
            </main>
        </div>
    )
};