import React, {useState} from 'react'
import { useEffect } from 'react';
import style from './ItemCount.module.css'

const ItemCount = ({stock, initial = 1, onAdd}) => {

    const [count, setCount] = useState(initial);

    useEffect(() => {
        setCount(initial)
    }, [initial])

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
            <button className={style.btn_carrito} onClick={agregar}>Agregar al carrito</button> 
            <button className={style.sumar} onClick={sumar}>+</button>
            <button className={style.restar} onClick={restar}>-</button>
        </div>

    )
}

export default ItemCount;