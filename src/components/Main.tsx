import { useEffect, useState } from "react";
import Portrait1 from "../assets/portrait_1.jpg";
import Portrait2 from "../assets/portrait_2.jpg";
import Portrait3 from "../assets/portrait_3.jpg";
import Footer from "./Footer";

const Main = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isScrolling, setIsScrolling] = useState(false);
    const collections = [
        {
            collectionName: "New",
            img: {
                imgSrcMobile: Portrait1,
                imgSrc: Portrait2,
                imgAlt: "image of portrait-1",
            },
            id: 0,
        },
        {
            collectionName: "Coats",
            img: {
                imgSrcMobile: Portrait2,
                imgSrc: Portrait2,
                imgAlt: "image of portrait-2",
            },
            id: 1,
        },
        {
            collectionName: "Suits",
            img: {
                imgSrcMobile: Portrait3,
                imgSrc: Portrait2,
                imgAlt: "image of portrait-3",
            },
            id: 2,
        },
    ];

    useEffect(() => {
        const onScroll = (event) => {
            if (isScrolling === false) {
                if (event.deltaY < 0) {
                    if (activeIndex === 0) return;
                    console.log("scrolling up");
                    setActiveIndex((prevActiveIndex) => prevActiveIndex - 1);
                } else if (event.deltaY > 0) {
                    if (activeIndex === collections.length) return;
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
            <main className="main">
                {collections.length == activeIndex - 1 && (
                    <div
                        className="slide-item--category"
                        key={collections[activeIndex].id}
                    >
                        // {collections[activeIndex].collectionName}
                    </div>
                )}

                <ul>
                    {collections.map((collection) => {
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
                            activeIndex == collections.length
                                ? "slide-item--active"
                                : ""
                        }`}
                    >
                        <Footer />
                    </li>
                </ul>
            </main>
            <div className="search-footer search-position">
                <input type="text" placeholder="search" />
            </div>
        </>
    );
};

export default Main;
