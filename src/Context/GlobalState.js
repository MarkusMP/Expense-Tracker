import React, { createContext, useReducer, useEffect } from 'react'
import {setLocalStorage, getLocalStorage} from '../hooks/useLocalStorage'
import AppReducer from './AppReducer'


const initialstate = {
    transactions: []
}


export const GlobalContext = createContext(initialstate)

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialstate)

    useEffect(() => {
        dispatch({type: 'SET_TRANSACTION', payload: getLocalStorage('transactions', [])})
    }, [])

    useEffect(() => {
        setLocalStorage('transactions', state.transactions)
    }, [state.transactions])

 
    function deleteTransaction(id) {
        dispatch({ type: 'DELETE_TRANSACTION', payload: id })
    }

    function addTransaction(transaction) {
        dispatch({ type: 'ADD_TRANSACTION', payload: transaction })
    }

    return (<GlobalContext.Provider value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction

    }}>
        {children}
    </GlobalContext.Provider>)
}