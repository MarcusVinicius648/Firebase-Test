import { useAuth } from "../hooks/useAuth"

export function CustomeProfile() {
    const {user,signInWithGoogle} = useAuth()

    return (
        <h1 style={{display:"flex",alignSelf:'center',justifyContent:'center'}}> 
           {user?.nome} <br />
           {user?.id}
        </h1>
    )
}