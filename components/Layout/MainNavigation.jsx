import { useRouter } from "next/router";
import classes from "./MainNavigation.module.css";
import { AiFillApple } from "react-icons/ai";
import Link from "next/link";
import { BsBag } from "react-icons/bs";
import { MdManageAccounts, MdAccountCircle } from "react-icons/md";
import { useContext } from "react";
import { signOut } from "next-auth/react";
import Cart from "../Cart/Cart";
import { CartContext } from "../../store/cart-context";
import { NavContext } from "../../store/nav-context";

const MainNavigation = () => {
  const router = useRouter();

  const cartCtx = useContext(CartContext)
  const navCtx = useContext(NavContext)

  const cartLength = cartCtx.cartItems.length

  if (router.pathname === "/") {
    return;
  }

  const logoutHandler = async () => {
    const result = await signOut()
    router.push('')
  }

  return (
    <header className={classes.header}>
      <nav>
        <Link
          className={router.pathname === "/home" ? classes.activeLink : ""}
          href="/home"
          onClick={navCtx.hideNav}
        >
          <AiFillApple />
        </Link>
        <Link
          className={router.pathname === "/store" ? classes.activeLink : ""}
          href="/store"
          onClick={navCtx.hideNav}
        >
          Store
        </Link>
        <Link
          className={router.pathname === "/iphone" ? classes.activeLink : ""}
          href="/iphone"
          onClick={navCtx.hideNav}
        >
          iPhone
        </Link>
        <Link
          className={router.pathname === "/airpods" ? classes.activeLink : ""}
          href="/airpods"
          onClick={navCtx.hideNav}
        >
          AirPods
        </Link>
        <Link
          className={router.pathname === "/watch" ? classes.activeLink : ""}
          href="/watch"
          onClick={navCtx.hideNav}
        >
          Watch
        </Link>
        <Link
          className={
            router.pathname === "/accessories" ? classes.activeLink : ""
          }
          href="/accessories"
          onClick={navCtx.hideNav}
        >
          Accessories
        </Link>
        <Link
          className={router.pathname === "/support" ? classes.activeLink : ""}
          href="/support"
          onClick={navCtx.hideNav}
        >
          Support
        </Link>
        <div className={classes.cart}>
          <div onClick={navCtx.toggleNav} className={classes.cartIcon} >
            <BsBag
              className={`${classes.shoppingBag} ${
                navCtx.isNavShowed ? classes.cartActive : ""
              }`}
              />
            {cartLength !== 0 && <p className={classes.cartLength}>{cartLength}</p>}
          </div>
          <div className={`${classes['cart-content']} ${ navCtx.isNavShowed ? classes.active : ""}`}>
            <div className={classes.bleed}>
              <Cart />

              <p className={classes.myProfile}>My Profile</p>
              <div className={classes.cartIcon}>
                <MdManageAccounts /> Account
              </div>
              <div onClick={logoutHandler} className={classes.cartIcon}>
                <MdAccountCircle /> Sign out
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default MainNavigation;
