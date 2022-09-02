import React, {useState} from 'react'

const ItemCount = ({stock, initial, onAdd}) => {

    const [count, setCount] = useState(initial);

    const sumar = () => {
        if (count < stock){
            setCount(count + 1);
        }   else {
            alert("Limite de stock disponible")
        }
    }

    const restar = () => {
        if (count === 1) {
            alert ("No puedes dejar el carrito vacio")
        } else {
            setCount(count - 1);
        }
    }


    return (
        <div>
            <p>{count}</p>
            <button onClick={sumar}>+</button>
            <button onClick={restar}>-</button>
            <button onClick={onAdd}>Agregar al carrito</button>
        </div>

    )
}

export default ItemCount;