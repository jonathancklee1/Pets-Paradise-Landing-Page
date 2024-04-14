import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import Slide from "./Slide";
import mainCategories from "../data/MainCategoriesData";
import SwiperMenu from "./SwiperMenu";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
const Main = () => {
    return (
        <>
            <main className="main">
                <Swiper navigation={true} modules={[Navigation]}>
                    {mainCategories.map((category, index) => {
                        return (
                            <SwiperSlide key={index}>
                                {({ isActive }) => (
                                    <Slide
                                        slideData={category}
                                        isActiveSlide={isActive}
                                    ></Slide>
                                )}
                            </SwiperSlide>
                        );
                    })}
                    <div className="category-menu">
                        <ul>
                            {mainCategories.map((category, index) => {
                                return (
                                    <SwiperMenu
                                        categoryName={category.categoryName}
                                        index={index}
                                        key={index}
                                    ></SwiperMenu>
                                );
                            })}
                        </ul>
                    </div>
                </Swiper>
            </main>
            <div className="search-bar search-position">
                <input type="text" placeholder="search" />
            </div>
        </>
    );
};

export default Main;
