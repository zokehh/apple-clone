import { useRouter } from "next/router";
import classes from "./MainNavigation.module.css";
import { AiFillApple } from "react-icons/ai";
import Link from "next/link";
import { BsBag } from "react-icons/bs";
import { useContext } from "react";
import { CartContext } from "../../../store/cart-context";
import { NavContext } from "../../../store/nav-context";
import { FiMenu } from "react-icons/fi";
import Cart from "../../Cart/Cart";

const MainNavigation = () => {
  const router = useRouter();

  const cartCtx = useContext(CartContext);
  const navCtx = useContext(NavContext);

  const cartLength = cartCtx.cartItems.length;

  if (router.pathname === "/auth") {
    return;
  }

  return (
    <nav className={classes.header}>
      <Link
        href="/"
        className={`${router.pathname === "/" ? classes.activeLink : ""} ${
          classes.logo
        }`}
        onClick={navCtx.hideNav}
      >
        <AiFillApple />
      </Link>

      <ul className={navCtx.isNavShowed ? classes.showed : ""}>
        <li>
          <Link
            className={router.pathname === "/store" ? classes.activeLink : ""}
            href="/store"
            onClick={navCtx.hideNav}
          >
            Store
          </Link>
        </li>
        <li>
          <Link
            className={router.pathname === "/iphone" ? classes.activeLink : ""}
            href="/iphone"
            onClick={navCtx.hideNav}
          >
            iPhone
          </Link>
        </li>
        <li>
          <Link
            className={router.pathname === "/airpods" ? classes.activeLink : ""}
            href="/airpods"
            onClick={navCtx.hideNav}
          >
            AirPods
          </Link>
        </li>
        <li>
          <Link
            className={router.pathname === "/watch" ? classes.activeLink : ""}
            href="/watch"
            onClick={navCtx.hideNav}
          >
            Watch
          </Link>
        </li>
        <li>
          <Link
            className={
              router.pathname === "/accessories" ? classes.activeLink : ""
            }
            href="/accessories"
            onClick={navCtx.hideNav}
          >
            Accessories
          </Link>
        </li>
        <li>
          <Link
            className={router.pathname === "/support" ? classes.activeLink : ""}
            href="/support"
            onClick={navCtx.hideNav}
          >
            Support
          </Link>
        </li>
      </ul>

      <div className={classes.rightSideIcons}>
        <FiMenu className={classes.menu} onClick={navCtx.toggleNav} />
        <BsBag className={classes.bag} onClick={navCtx.toggleNavCart} />
        {cartLength > 0 && <span onClick={navCtx.toggleNavCart} className={classes.quantity}>
          {cartLength}
        </span>}
      </div>
      <div className={`${classes.cart} ${navCtx.isNavCartShowed ? classes.active : ''}`}>
          <Cart />
      </div>
    </nav>
  );
};

export default MainNavigation;
