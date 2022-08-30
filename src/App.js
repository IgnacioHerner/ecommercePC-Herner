import Navbar from "./components/Nav/Navbar";
import ItemListContainer from "./components/ItemList/ItemListContainer";
import ItemCount from "./components/ItemCount/ItemCount";

const App = () => {

    const onAdd = () => {
        console.log("Este boton sirve para agregar al carrito")
    }

    return(
        <>
            <Navbar/>
            <ItemListContainer saludo = "Hola Fede!"/>
            <ItemCount stock ={10} initial={1} onAdd={onAdd}/>
        </>
    );
};

export default App;
