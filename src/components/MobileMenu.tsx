import xmark from "../assets/xmark-solid.svg";
import mainCategories from "../data/MainCategoriesData";

const MobileMenu = ({ isOpen, handleToggle }) => {
    const categoryData = mainCategories.map((category) => {
        return category.categoryName;
    });

    const extraCategoryData = mainCategories[0].extraCategories;
    const subCategoryData = mainCategories[0].furtherSubCategories;
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
                        {categoryData.map((item, index) => {
                            return <li key={index}>{item}</li>;
                        })}
                    </ul>
                </div>
                <div className="menu-sub-category__container">
                    <ul className="menu-sub-category-list menu-container">
                        {subCategoryData.map((item, index) => {
                            return <li key={index}>{item}</li>;
                        })}
                        <div className="menu-extra-category-list">
                            {extraCategoryData.map((item, index) => {
                                return <div key={index}>{item}</div>;
                            })}
                        </div>
                    </ul>
                    <div className="search-bar">
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
