import { useEffect, useState } from "react";
import Hamburger from "../assets/hamburger.svg";
import XMark from "../assets/xmark-solid.svg";
import Logo from "/public/images/logo-petsparadise.jpg";
import MobileMenu from "./MobileMenu";
import DesktopMenu from "./DesktopMenu";
import { useMediaQuery } from "react-responsive";

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isDesktopMenuOpen, setIsDesktopMenuOpen] = useState(false);
    const isMobile = useMediaQuery({ query: `(max-width: 769px)` });
    function toggleMenu() {
        isMobile
            ? setIsMobileMenuOpen(
                  (prevIsMobileMenuOpen) => !prevIsMobileMenuOpen
              )
            : setIsDesktopMenuOpen(
                  (prevIsDesktopMenuOpen) => !prevIsDesktopMenuOpen
              );
    }
    useEffect(() => {
        console.log(isMobile);
    }, [isMobile]);
    return (
        <>
            <header className="header">
                <div className="nav--left">
                    {/* icon */}
                    {!isMobileMenuOpen && isMobile && (
                        <button
                            className="hamburger-button"
                            onClick={toggleMenu}
                        >
                            <img src={Hamburger} alt="hamburger menu" />
                        </button>
                    )}
                    {isMobileMenuOpen && isMobile && (
                        <button className="xmark-button" onClick={toggleMenu}>
                            <img src={XMark} alt="xmark menu" />
                        </button>
                    )}
                    {!isDesktopMenuOpen && !isMobile && (
                        <button
                            className="hamburger-button"
                            onClick={toggleMenu}
                        >
                            <img src={Hamburger} alt="hamburger menu" />
                        </button>
                    )}
                    {isDesktopMenuOpen && !isMobile && (
                        <button className="xmark-button" onClick={toggleMenu}>
                            <img src={XMark} alt="xmark menu" />
                        </button>
                    )}

                    {/* Logo */}
                    <div className="logo-container">
                        <img src={Logo} alt="logo" />
                        <DesktopMenu isOpen={isDesktopMenuOpen} />
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
            <MobileMenu isOpen={isMobileMenuOpen} handleToggle={toggleMenu} />
        </>
    );
};

export default Navbar;
