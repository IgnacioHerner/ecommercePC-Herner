import React from "react";
import { useState, useContext } from "react";
import {addDoc, collection, serverTimestamp} from 'firebase/firestore'
import {db} from '../../firebaseConfig'
import { CartContext } from '../../context/CartContext'
import style from './Form.module.css'

const Form = () => {

  const [idCompra, setIdCompra] = useState('');
  const {cart, clearCart, totalPrice} = useContext(CartContext)

  const total = totalPrice();

  const handleId = (id) =>{
    setIdCompra(id)
  }

  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [telefono, setTelefono] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const order = {
      buyer: {nombre: nombre, apellido: apellido, email: email, telefono: telefono},
      items: cart,
      total: total,
      date: serverTimestamp(),
    };

    const ordersCollection = collection(db, 'orders');

    addDoc(ordersCollection, order)
    .then((res) =>{
      handleId(res.id)
      clearCart();

    })

  }

  const handleChangeNombre = (event) => {
    //console.log(event.target.value);
    setNombre(event.target.value);
  };

  const handleChangeApellido = (event) => {
    setApellido(event.target.value);
  };

  const handleChangeEmail = (event) => {
    setEmail(event.target.value)
  }

  const handleChangeTelefono = (event) => {
    setTelefono(event.target.value)
  }

  if (idCompra) {
    return <h1>Gracias por tu compra {idCompra}</h1>
  } 

  return (
    <div className={style.container}>
        <div>
          <form className={style.container_form} action="" onSubmit={handleSubmit}>
            <div className={style.container_input}>
              <input
                className={style.form}
                type="text"
                placeholder="Nombre..."
                name="nombre"
                value={nombre}
                onChange={handleChangeNombre}
              />
            </div>
            <div className={style.container_input}>
              <input
                className={style.form}
                type="text"
                placeholder="Apellido..."
                name="apellido"
                value={apellido}
                onChange={handleChangeApellido}
              />
            </div>
            <div className={style.container_input}>
              <input
                className={style.form}
                type="text" 
                placeholder="E-mail..."
                name="email"
                value={email}
                onChange={handleChangeEmail}
              />
            </div>

            <div className={style.container_input}>
              <input
                className={style.form}
                type="text" 
                placeholder="Telefono..."
                name="telefono"
                value={telefono}
                onChange={handleChangeTelefono}
              />
            </div>
            <button className={style.btn_enviar}>Enviar</button>
          </form>
        </div>
    </div>
  );
};

export default Form;
