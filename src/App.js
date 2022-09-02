import Navbar from "./components/Nav/Navbar";
import ItemListContainer from "./components/ItemListCointainer/ItemListContainer";
import ItemCount from "./components/Count/ItemCount";

const App = () => {

    const onAdd = () => {
        console.log("Este boton sirve para agregar al carrito")
    }

    return(
        <>
            <Navbar/>
            <ItemListContainer />
            <ItemCount stock ={10} initial={1} onAdd={onAdd}/>
        </>
    );
};

export default App;
