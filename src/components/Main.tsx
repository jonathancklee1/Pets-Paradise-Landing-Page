import { useEffect, useState } from "react";
import Portrait1 from "../assets/portrait_1.jpg";
import Portrait2 from "../assets/portrait_2.jpg";

const Main = () => {
    const [activeIndex, setActiveIndex] = useState(1);
    const images = [
        {
            source: Portrait1,
            id: 1,
        },
        {
            source: Portrait2,
            id: 2,
        },
        {
            source: Portrait1,
            id: 3,
        },
    ];

    useEffect(() => {
        const onScroll = (event) => {
            if (event.deltaY < 0) {
                if (activeIndex === 1) return;
                console.log("scrolling up");
                setActiveIndex((prevActiveIndex) => prevActiveIndex - 1);
            } else if (event.deltaY > 0) {
                if (activeIndex === images.length) return;
                console.log("scrolling down");
                setActiveIndex((prevActiveIndex) => prevActiveIndex + 1);
            }
            console.log(activeIndex);
        };
        window.addEventListener("wheel", onScroll);
        return () => {
            window.removeEventListener("wheel", onScroll);
        };
    }, [activeIndex]);
    return (
        <>
            <main className="main">
                <ul>
                    {images.map((image) => {
                        return (
                            <li
                                className={`slide-item ${
                                    image.id === activeIndex
                                        ? "slide-item--active"
                                        : ""
                                }`}
                                key={image.id}
                            >
                                <img src={image.source} alt="" />
                            </li>
                        );
                    })}
                </ul>
            </main>
            <footer className="search-footer">
                <input type="text" placeholder="search" />
            </footer>
        </>
    );
};

export default Main;
