import React, {useState} from 'react'

const ItemCount = ({stock, initial, onAdd}) => {

    const [count, setCount] = useState(initial);

    const sumar = () => {
        count < stock && setCount(count + 1);
    }

    const restar = () => {
        setCount(count - 1);
        
    }

    const agregar = () => {
        onAdd(count)
    }


    return (
        <div>
            <p>{count}</p>
            <button onClick={sumar}>+</button>
            <button onClick={restar}>-</button>
            <button onClick={agregar}>Agregar al carrito</button>
        </div>

    )
}

export default ItemCount;