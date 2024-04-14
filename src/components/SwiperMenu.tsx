import { useState } from "react";
import { useSwiper } from "swiper/react";
const SwiperMenu = ({ categoryName, index }) => {
    const swiper = useSwiper();
    const [activeIndex, setActiveIndex] = useState(0);

    swiper.on("slideChange", function () {
        setActiveIndex(swiper.activeIndex);
    });

    return (
        <li
            onClick={() => {
                swiper.slideTo(index, 400);
            }}
            className={`${activeIndex == index ? "active-category" : ""}`}
        >
            {categoryName}
        </li>
    );
};

export default SwiperMenu;
