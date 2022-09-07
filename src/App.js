import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import { BrowserRouter } from "react-router-dom";
// import ItemCount from "./components/Count/ItemCount";

const App = () => {

    return(
        <BrowserRouter>
            <Header/>
            <Main/>
        </BrowserRouter>
    );
};

export default App;

/* <ItemCount stock ={10} initial={1} onAdd={onAdd}/> */