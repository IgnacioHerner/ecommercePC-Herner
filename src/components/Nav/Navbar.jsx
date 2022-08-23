import CartWidget from './CartWidget';
import style from './Navbar.module.css'

const Navbar = () => {
  return (
    <nav className={style.NavContainer}>
        <h2 className={style.h2_ContainerNav}>House <span className={style.span_ContainerNav}>Bit</span> </h2>
        <div>
          <a className={style.a_ContainerNav} href="/">Home</a>
          <a className={style.a_ContainerNav} href="/">Shop</a>
          <a className={style.a_ContainerNav} href="/">About</a>
          <a className={style.a_ContainerNav} href="/">Contact</a>
        </div>
        <CartWidget />
    </nav>
  )
}

export default Navbar;