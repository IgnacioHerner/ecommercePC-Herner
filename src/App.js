import Navbar from "./components/Nav/Navbar";
import ItemListContainer from "./components/ItemList/ItemListContainer";

const App = () => {
    return(
        <>
            <Navbar/>
            <ItemListContainer saludo = "Hola Fede!"/>
        </>
    );
};

export default App;
