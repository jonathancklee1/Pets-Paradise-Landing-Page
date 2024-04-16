import { useEffect, useRef, useState } from "react";
import Footer from "./Footer";
import { useSwipeable } from "react-swipeable";

const Slide = ({ slideData, isActiveSlide }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isScrolling, setIsScrolling] = useState(false);
    const slideList = useRef();

    // For mobile vertical swipe
    const handlers = useSwipeable({
        onSwipedUp: () => {
            scrollDown();
        },
        onSwipedDown: () => {
            scrollUp();
        },
    });

    function scrollUp() {
        if (activeIndex === 0) return;
        console.log("scrolling up");
        setActiveIndex((prevActiveIndex) => prevActiveIndex - 1);
    }
    function scrollDown() {
        if (activeIndex === slideData.subCategory.length) return;
        console.log("scrolling down");
        setActiveIndex((prevActiveIndex) => prevActiveIndex + 1);
    }

    useEffect(() => {
        if (isActiveSlide) {
            const onScroll = (event) => {
                if (isScrolling === false) {
                    if (event.deltaY < 0) {
                        scrollUp();
                    } else if (event.deltaY > 0) {
                        scrollDown();
                    }
                    setIsScrolling(true);
                    setTimeout(() => {
                        setIsScrolling((isScrolling) => !isScrolling);
                    }, 1000);
                }
                console.log(activeIndex);
            };
            if (slideList && slideList.current) {
                slideList.current.addEventListener("wheel", onScroll);
                return () => {
                    slideList.current?.removeEventListener("wheel", onScroll);
                };
            }
        }
    }, [activeIndex, isScrolling, isActiveSlide]);

    return (
        <>
            {activeIndex < slideData.subCategory.length && (
                <div
                    className="slide-item--category"
                    key={slideData.subCategory[activeIndex].id}
                >
                    {slideData.subCategory[activeIndex].collectionName}
                </div>
            )}

            <ul {...handlers} ref={slideList}>
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
                                    srcSet={`/public/${collection.img.imgSrcMobile}.jpg`}
                                    media="(max-width: 769px)"
                                />
                                <img
                                    src={`/public/${collection.img.imgSrc}.jpg`}
                                    alt={`/public/${collection.img.imgAlt}.jpg`}
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
