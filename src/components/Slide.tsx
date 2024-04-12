import { useEffect, useState } from "react";
import Footer from "./Footer";

const Slide = ({ slideData }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isScrolling, setIsScrolling] = useState(false);

    useEffect(() => {
        const onScroll = (event) => {
            if (isScrolling === false) {
                if (event.deltaY < 0) {
                    if (activeIndex === 0) return;
                    console.log("scrolling up");
                    setActiveIndex((prevActiveIndex) => prevActiveIndex - 1);
                } else if (event.deltaY > 0) {
                    if (activeIndex === slideData.subCategory.length) return;
                    console.log("scrolling down");
                    setActiveIndex((prevActiveIndex) => prevActiveIndex + 1);
                }
                setIsScrolling(true);
                setTimeout(() => {
                    setIsScrolling((isScrolling) => !isScrolling);
                }, 1000);
            }
            console.log(activeIndex);
        };
        window.addEventListener("wheel", onScroll);
        return () => {
            window.removeEventListener("wheel", onScroll);
        };
    }, [activeIndex, isScrolling]);

    return (
        <>
            {slideData.subCategory.length == activeIndex - 1 && (
                <div
                    className="slide-item--category"
                    key={slideData.subCategory[activeIndex].id}
                >
                    {slideData.subCategory[activeIndex].collectionName}
                </div>
            )}

            <ul>
                {slideData.subCategory.map((collection) => {
                    return (
                        <li
                            className={`slide-item ${
                                collection.id <= activeIndex
                                    ? "slide-item--active"
                                    : ""
                            }`}
                            key={collection.id}
                        >
                            <picture>
                                <source
                                    srcSet={collection.img.imgSrcMobile}
                                    media="(max-width: 769px)"
                                />
                                <img
                                    src={collection.img.imgSrc}
                                    alt={collection.img.imgAlt}
                                />
                            </picture>
                        </li>
                    );
                })}
                <li
                    className={`slide-item slide-item__footer ${
                        activeIndex == slideData.subCategory.length
                            ? "slide-item--active"
                            : ""
                    }`}
                >
                    <Footer />
                </li>
            </ul>
        </>
    );
};

export default Slide;
