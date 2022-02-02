import { createContext, useEffect, useState, ReactNode } from 'react'
import { getAuth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged } from 'firebase/auth'

type User = {
    id: string;
    nome: string;
    avatar: string | null
}

type AuthContextType = {
    user: User | undefined;
    signInWithGoogle: () => Promise<void>
}

type authContextProvider = {
    children: ReactNode
}

export const AuthContext = createContext({} as AuthContextType)

export function AuthContextProvider(props: authContextProvider) {

    const [user, setUser] = useState<User>();
    const provider = new GoogleAuthProvider();
    const auth = getAuth()

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, main => {
            if (main) {
                const { displayName, photoURL, uid } = main

                if (!displayName || !photoURL) {
                    throw new Error('Missinh Information from Google Account.')
                }

                setUser({
                    id: uid,
                    nome: displayName,
                    avatar: photoURL
                })
            }
        })
        return () => {
            unsubscribe()
        }
    }, [])

    async function signInWithGoogle() {
        const result = await signInWithPopup(auth, provider);
        if (result.user) {
            const { displayName, photoURL, uid } = result.user

            if (!displayName) {
                throw new Error('Missing Datas about the profile!!')
            }
            setUser({
                id: uid,
                nome: displayName,
                avatar: photoURL
            })
        }
    }

    return (
        <AuthContext.Provider value={{ user, signInWithGoogle }}>
            {props.children}
        </AuthContext.Provider>
    );
}