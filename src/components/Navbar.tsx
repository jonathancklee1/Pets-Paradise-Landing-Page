import { useEffect, useState } from "react";
import Hamburger from "../assets/hamburger.svg";
import XMark from "../assets/xmark-solid.svg";
import Logo from "../assets/logo.svg";
import MobileMenu from "./MobileMenu";
import DesktopMenu from "./DesktopMenu";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    function toggleMenu() {
        setIsMenuOpen((prevIsMenuOpen) => !prevIsMenuOpen);
    }
    useEffect(() => {
        console.log(isMenuOpen);
    }, [isMenuOpen]);
    return (
        <>
            <header className="header">
                <div className="nav--left">
                    {/* icon */}
                    {!isMenuOpen && (
                        <button
                            className="hamburger-button"
                            onClick={toggleMenu}
                        >
                            <img src={Hamburger} alt="hamburger menu" />
                        </button>
                    )}
                    {isMenuOpen && (
                        <button className="xmark-button" onClick={toggleMenu}>
                            <img src={XMark} alt="xmark menu" />
                        </button>
                    )}

                    {/* Logo */}
                    <div className="logo-container">
                        <img src={Logo} alt="logo" />
                        <DesktopMenu isOpen={isMenuOpen} />
                    </div>
                </div>

                {/* Shopping */}
                <div className="nav--right">
                    <ul className="nav--right__list">
                        <li>
                            <p className="login__text">Login</p>
                            <div className="search-bar">
                                <input type="text" placeholder="search" />
                            </div>
                        </li>
                        <li>
                            <p className="help__text">Help</p>
                        </li>
                        <li>
                            <p className="shopping-bag__text">
                                Shopping Bag (0)
                            </p>
                        </li>
                    </ul>
                </div>
            </header>
            <MobileMenu isOpen={isMenuOpen} handleToggle={toggleMenu} />
        </>
    );
};

export default Navbar;
