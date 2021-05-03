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

    const [orderList, setOrderList] = useState([])

    const addItem = (name) => {
        const currentItems = [];

        orderList.forEach((e, i) => {
            currentItems[i] = e.position;
        })
        
        if (currentItems.includes(name)) {
            const i = currentItems.findIndex(item => item === name)
            orderList[i].quantity++
        } else {
            const newItems = {position: name, quantity: 1}
            const newState = [...orderList, newItems];
            setOrderList(newState)
        }        
    }

    const [shopClass, setShopCLass] = useState('shop')
    const shopClassToggle = () => {
        if (shopClass === 'shop') 
            setShopCLass('shop shop-active')
        else
            setShopCLass('shop')
    }

    return (
        <StoreContext.Provider value={{
            count: count,
            addCount,
            list: orderList, addItem,
            shopClass, shopClassToggle
        }}>
            {children}
        </StoreContext.Provider>
    )
}

