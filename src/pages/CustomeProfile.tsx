import { useAuth } from "../hooks/useAuth";
import { Button } from "../components/button";

import welcomeImage from '../assets/welcome_image.png'

import '../styles/welcome.scss';


export function CustomeProfile() {
    const { user, signInWithGoogle } = useAuth()

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
                <div id="divImg" ></div>
                <strong id="userName">
                    {user?.nome}
                </strong>
                <p className="bioText">
                    Adicione uma Bio:
                </p>
                <textarea
                    name="bioArea"
                    rows={4}
                />
                <Button type="submit">
                    Confirmar Usuário
                </Button>
            </main>
        </div>
    )
};