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
            prod.id === item.id 
            ? {...prod, qty: cantidad} 
            : prod
        );
        setCart(updateCart)
    }

    // Cuantos productos tengo en stock
    const getProductQuantity = (id) => {
        const product = cart.find((prod) => prod.id === id)
        return product?.qty
    }

    // borrar producto
    const removeItem = (id) => {
        const deleteItem = cart.filter((item) => item.id !== id)
        setCart(deleteItem)
    }

    const totalPrice = () => {
        let acumulador = 0
        cart.forEach((prod) => {
            acumulador = acumulador + (prod.price * prod.qty)
        })
        return acumulador
    }

    const totalProducts = () => {
        let totalDeProductos = 0
        cart.forEach((prod) => {
            totalDeProductos = totalDeProductos + prod.qty
        })
    }



    return  <CartContext.Provider value={{cart, clearCart, addToCart, removeItem, getProductQuantity, totalPrice, totalProducts }}>
                {children}
            </CartContext.Provider>
}

export default CartProvider; 