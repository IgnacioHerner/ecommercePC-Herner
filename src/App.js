import Navbar from "./components/Nav/Navbar";
import ItemListContainer from "./components/ItemListCointainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
// import ItemCount from "./components/Count/ItemCount";

const App = () => {

    return(
        <>
            <Navbar/>
            <ItemListContainer />
            <ItemDetailContainer />
            {/* <ItemCount stock ={10} initial={1} onAdd={onAdd}/> */}
        </>
    );
};

export default App;
