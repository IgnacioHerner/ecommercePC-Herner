import CartWidget from './CartWidget';
import style from './Navbar.module.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className={style.NavContainer}>

        <Link className={style.txt_none} to="/">
          <h1 className={style.h1_ContainerNav}>House <span className={style.span_ContainerNav}>Bit</span> </h1>
        </Link>
        
        <div>
          <Link className={style.a_ContainerNav} to="/category/ram">Memorias Ram</Link>
          <Link className={style.a_ContainerNav} to="/category/placa_de_video">Placas de video</Link>
          <Link className={style.a_ContainerNav} to="/category/motherboard">Motherboards</Link>
          <Link className={style.a_ContainerNav} to="/">Home</Link>
          {/* <Link className={style.a_ContainerNav} to="/">Shop</Link>
          <Link className={style.a_ContainerNav} to="/">About</Link>
          <Link className={style.a_ContainerNav} to="/">Contact</Link> */}
        </div>
        <Link to="/cart">
          <CartWidget />
        </Link>

    </nav>
  )
}

export default Navbar;  