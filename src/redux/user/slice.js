import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
    users: [],
    loading: false,
}

    export const userSlice = createSlice({
        name: 'user',
        initialState,
        reducers: {
            createUser: (state, action) => {
                
                return {
                    ...state,
                    user: {
                        name: action.payload.name,
                        email: action.payload.email,
                        address: null,
                    }
                }
            },
            logoutUser: (state) => {
                return {
                    ...state,
                    user: null,
                }
            },
            addAddress: (state, action) => {
                if(action.payload.location === '' || action.payload.number === ''){
                    alert('Preencha todos os campos!')
                    return {...state}
                }

                if(state.user == null){
                    alert("Faça o login!")
                    return {...state}
                }

                alert("Endereço Atualizado!")

                return {
                    ...state, 
                    user: {
                        ...state.user,
                        address: {
                            location: action.payload.location,
                            number: action.payload.number
                        }
                    }
                }

            },
            
            removeAddress: (state) => {
                return{
                    ...state,
                    user: {
                        ...state.user,
                        address: {
                            location: null,
                            number: null
                        }
                    }
                }
            },

            fetchUsers: (state) => {
                state.loading = true
            },
            fetchUserSucces: (state, action) => {
                state.users = action.payload
                state.loading = false
                //console.log(action.payload)
            },
            fetchUserFail: (state, action) => {
                alert("falhou")
                alert(action.payload)
                state.loading = false
            }
        }
    })

export const { createUser, logoutUser, addAddress, removeAddress, fetchUsers, fetchUserSucces, fetchUserFail } = userSlice.actions
export default userSlice.reducer
