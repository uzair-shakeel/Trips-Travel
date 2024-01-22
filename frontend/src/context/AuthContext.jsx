import {createContext, useEffect, useReducer} from 'react'

const initial_state = {
    user: localStorage.getItem('user') !== "undefined" ? JSON.parse(localStorage.getItem('user')) : null,
    token: localStorage.getItem('token') || null,
    role: localStorage.getItem('role') || null,
    
}

export const AuthContext = createContext(initial_state)

const AuthReducer = (state, action) => {
    switch (action.type) {
        case 'LOGIN_START':
          return {
            user: null,
            role: null,
            token: null,
          }
        case 'LOGIN_SUCCESS':
          return {
            user: action.payload.user,
            role: action.payload.role,
            token: action.payload.token,
            
          }
        case 'LOGOUT':
          return {
            user: null,
            role: null,
            token: null,
            
          }
          case 'UPDATE_USER':
            return {
              role: action.payload.role,
              user: action.user,
              token: action.token,
            };
        default:
        return state
    }
}


export const AuthContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(AuthReducer, initial_state)

    useEffect(()=>{
    localStorage.setItem('user', JSON.stringify(state.user))
    localStorage.setItem('token', state.token)
    localStorage.setItem('role', state.role)
    }, [state.user, state.role, state.token])

    return (
    <AuthContext.Provider value={{
        user:state.user,
        error:state.error,
        token:state.token,
        role:state.role,
        dispatch
    }}>
        {children}
    </AuthContext.Provider>

)} 


