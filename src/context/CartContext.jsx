import { useState } from "react";
import { createContext } from "react";  

export const CartContext = createContext();

const CartProvider = ({children}) => {

    const [cart, setCart] = useState([])

    const addToCart = (item, cantidad) => {
        if (isInCart(item.id)) {
            addQty(item, cantidad)
        } else {
            setCart([...cart, {...item, qty: cantidad}])
        }
    }

    console.log(cart)

    // Lipiar Carrito
    const clearCart = () => {
        setCart([])
    }

    // Si esta en el carrito
    const isInCart = (id) => {
        return cart.some((prod) => prod.id === id)
    }

    // Agregar cantidad
    const addQty = (item, cantidad) => {
        const updateCart = cart.map((prod) =>
            prod.id === item.id ? {...prod, qty: prod.cantidad + cantidad} : prod
        );
        setCart(updateCart)
    }

    // borrar producto
    const removeItem = (id) => {
        const deleteItem = cart.filter((item) => item.id !== id)
        setCart(deleteItem)
    }



    return  <CartContext.Provider value={{cart, clearCart, addToCart, removeItem }}>
                {children}
            </CartContext.Provider>
}

export default CartProvider; 