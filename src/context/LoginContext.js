import { createContext, useState } from "react";


export const LoginContext = createContext()

const MOCK_USERS = [{
    id:1,
    email: 'admin@coder.com',
    password: 'proyectofinal'
},
{
    id: 2,
    email: 'tutor@coder.com',
    password: 'coder2'
},
{
    id: 3,
    email: 'profesor@coder.com',
    password: 'coder3'
}
]

export const LoginProvider = ({children}) => {
    const [user, setUser] = useState({
        email: 'admin@coder.com',
        logged: true
    })
    

    const tryLogin = (values) => {
        const match = MOCK_USERS.find((user) => user.email === values.email)

        if (match && match.password === values.password){
            setUser({
                logged: true,
                email: match.email
            })
        }
    }

    const logout =  () =>{
        setUser({
            email: null,
            logged: false
        })
    }

    return(
        <LoginContext.Provider value={{
            user,
            tryLogin,
            logout
            }}>
            {children}
        </LoginContext.Provider>
    )
}