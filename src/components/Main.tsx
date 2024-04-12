import Portrait1 from "../assets/portrait_1.jpg";
import Portrait2 from "../assets/portrait_2.jpg";
import Portrait3 from "../assets/portrait_3.jpg";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import Slide from "./Slide";

const Main = () => {
    const mainCategories = [
        {
            categoryName: "women",
            subCategory: [
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
            ],
        },
        {
            categoryName: "men",
            subCategory: [
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
            ],
        },
        {
            categoryName: "kids",
            subCategory: [
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
            ],
        },
        {
            categoryName: "perfume",
            subCategory: [
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
            ],
        },
    ];

    return (
        <>
            <main className="main">
                <Swiper>
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
                </Swiper>
            </main>
            <div className="search-footer search-position">
                <input type="text" placeholder="search" />
            </div>
        </>
    );
};

export default Main;
