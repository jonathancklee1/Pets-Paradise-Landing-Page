import xmark from "../assets/xmark-solid.svg";
const MobileMenu = ({ isOpen, handleToggle }) => {
    const categoryData = ["Woman", "Man", "Kid", "Perfume"];
    const extraCategoryData = [
        "Special edition",
        "summer collection",
        "Gift card",
        "Join Life",
    ];
    const subCategoryData = [
        "// New",
        "",
        "The Originals",
        "",
        "Woman",
        "Man",
        "Kid",
        "Perfume",
        "Woman",
        "Man",
        "Kid",
        "Perfume",
        "Woman",
        "Man",
        "Kid",
        "Perfume",
    ];
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
                        {categoryData.map((item) => {
                            return <li>{item}</li>;
                        })}
                    </ul>
                </div>
                <div className="menu-sub-category__container">
                    <ul className="menu-sub-category-list menu-container">
                        {subCategoryData.map((item) => {
                            return <li>{item}</li>;
                        })}
                        <div className="menu-extra-category-list">
                            {extraCategoryData.map((item) => {
                                return <div>{item}</div>;
                            })}
                        </div>
                    </ul>
                    <div className="search-footer">
                        <input type="text" placeholder="search" />
                    </div>
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
