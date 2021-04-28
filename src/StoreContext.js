import React, {useState, useContext} from 'react'

const StoreContext = React.createContext()

export const useStore = () => {
   return useContext(StoreContext)
}

export const StoreProvider = ({ children }) => {
   
    const [count, setCount] = useState(0);
    const addCount = () => {
        setCount(count => count + 1)
    }

    const initialState = []
    const [orderList, setOrderList] = useState(initialState)

    const addItem = (name) => {
        const newState = [...orderList, {position: name, quantity: 1}];
        setOrderList(newState)
    }

    return (
        <StoreContext.Provider value={{
            count: count,
            addCount,
            list: orderList, addItem
        }}>
            {children}
        </StoreContext.Provider>
    )
}

