import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'
import style from './Cart.module.css'

const Cart = () => {

  const {cart, removeItem, clearCart , totalPrice} = useContext(CartContext)


  const total = totalPrice();

  
  if(cart.length === 0){
    return <div className={style.containerVacio}>
            <h3>Tu carrito está vacío</h3>
            <p>¿No sabés qué comprar? <Link to="/">Volver a comprar</Link></p>
          </div>
  }


  return (
    <div className={style.bg_white}>
      {cart.map((prod) => (
        <div className={`${style.containerCartItems} ${style.border}`} key={prod.id}>
          <img className={style.img} src={prod.img} alt={prod.title} />
          <h2 className={style.h2} >{prod.title}</h2>
          <h3 className={style.h3}>Cantidad: {prod.qty}</h3>
          <h3 className={style.price}>${prod.price}.</h3>

          <ul className={style.list_style}>
            <li>
                <button className={style.btn_eliminar} onClick={() => removeItem(prod.id)}>Eliminar Producto</button>
            </li>
          </ul>
        </div>
      ))}
      <div className={style.containerTotal}>
          <button className={style.btn_clear} onClick={clearCart}> ClearCart</button>
        <h4 className={style.total}>Total: ${total}</h4>
      </div>
      <div className={style.form}>
        <Link to="/form">
          <button className={style.btn_Continue}>Continuar con tu compra</button>
        </Link>
      </div>

    </div>
  )
}

export default Cart