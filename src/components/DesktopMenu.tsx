import Logo from "/public/images/logo-petsparadise.jpg";
import SwiperMenu from "./SwiperMenu";
import mainCategories from "../data/MainCategoriesData";
import { Swiper } from "swiper/react";

const DesktopMenu = ({ isOpen }) => {
    const extraCategoryData = mainCategories[0].extraCategories;
    const subCategoryData = mainCategories[0].furtherSubCategories;
    return (
        <div className={`desktop-menu ${isOpen ? "open" : ""}`}>
            {/* Logo */}
            <div className="logo-container">
                <img src={Logo} alt="logo" />
            </div>

            <div className="category-menu--desktop">
                <ul>
                    <Swiper>
                        {mainCategories.map((category, index) => {
                            return (
                                <SwiperMenu
                                    categoryName={category.categoryName}
                                    index={index}
                                    key={index}
                                ></SwiperMenu>
                            );
                        })}
                    </Swiper>
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
            </div>
        </div>
    );
};

export default DesktopMenu;
