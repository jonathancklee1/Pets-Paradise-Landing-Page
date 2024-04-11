import { useEffect, useState } from "react";
import Hamburger from "../assets/hamburger.svg";
import Logo from "../assets/logo.svg";
import MobileMenu from "./MobileMenu";

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
            {" "}
            <header className="header">
                <div className="nav--left">
                    {/* icon */}
                    <button className="hamburger-button" onClick={toggleMenu}>
                        <img src={Hamburger} alt="hamburger menu" />
                    </button>

                    {/* Logo */}
                    <div className="logo-container">
                        <img src={Logo} alt="logo" />
                    </div>
                </div>

                {/* Shopping */}
                <div>
                    <ul>
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
