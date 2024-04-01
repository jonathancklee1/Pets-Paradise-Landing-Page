import Hamburger from "../assets/hamburger.svg";
import Logo from "../assets/logo.svg";

const Navbar = () => {
    return (
        <header className="">
            <div className="nav--left">
                {/* icon */}
                <button className="hamburger-button">
                    <img src={Hamburger} alt="hamburger menu" />
                </button>

                {/* Logo */}
                <div className="logo-container">
                    <img src={Logo} alt="logo" />
                </div>
            </div>

            {/* Shopping */}
            <nav>
                <ul>
                    <li>
                        <p className="shopping-bag__text">Shopping Bag (0)</p>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;
