import React from "react";
import { useState, useContext } from "react";
import {addDoc, collection, serverTimestamp} from 'firebase/firestore'
import {db} from '../../firebaseConfig'
import { CartContext } from '../../context/CartContext'

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
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nombre..."
          name="nombre"
          value={nombre}
          onChange={handleChangeNombre}
        />
        <input
          type="text"
          placeholder="Apellido..."
          name="apellido"
          value={apellido}
          onChange={handleChangeApellido}
        />
        <input
          type="text" 
          placeholder="E-mail..."
          name="email"
          value={email}
          onChange={handleChangeEmail}
        />
        <input
          type="text" 
          placeholder="Telefono..."
          name="telefono"
          value={telefono}
          onChange={handleChangeTelefono}
        />

        <button>Enviar</button>
      </form>
    </div>
  );
};

export default Form;
