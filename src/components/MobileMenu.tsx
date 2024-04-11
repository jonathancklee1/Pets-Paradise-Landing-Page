import xmark from "../assets/xmark-solid.svg";
const MobileMenu = ({ isOpen, handleToggle }) => {
    return (
        <>
            <div className={`mobile-menu ${isOpen && "open"}`}>
                <div className="menu-top-section">
                    <button
                        className="menu-close-button"
                        onClick={handleToggle}
                    >
                        <img src={xmark} alt="close button" />
                    </button>
                    <div className="menu-shopping-cart">Shopping Bag (0)</div>
                </div>
                <div className="menu-category-list__container">
                    <ul className="menu-category-list menu-container">
                        <li>Woman</li>
                        <li>Man</li>
                        <li>Kid</li>
                        <li>Perfume</li>
                    </ul>
                </div>

                <ul className="menu-sub-category-list menu-container">
                    <li>Woman</li>
                    <li>Man</li>
                    <li>Kid</li>
                    <li>Perfume</li>
                    <li>Perfume</li>
                    <li>Perfume</li>
                    <li>Perfume</li>
                    <li>Perfume</li>
                </ul>

                <div className="search-footer">
                    <input type="text" placeholder="search" />
                </div>
                <div className="menu-external-links menu-container">
                    <a>Home</a>
                    <a>My Account</a>
                </div>
            </div>
        </>
    );
};

export default MobileMenu;
