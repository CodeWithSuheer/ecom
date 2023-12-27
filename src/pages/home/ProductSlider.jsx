"use client";
import { Badge, Button, Card } from "keep-react";
import { Heart, ShoppingCart } from "phosphor-react";
import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";


const ProductSlider = ({ slider }) => {
    const navigate = useNavigate();
    const sliderRef = useRef(null);
    const sliderData = slider;



    const handleItemClick = (product) => {
        navigate(`/singleproduct/${product.id}`);
        window.scroll(0, 0)
    }

    const next = () => {
        if (sliderRef.current) {
            sliderRef.current.slickNext();
        }
    };

    const previous = () => {
        if (sliderRef.current) {
            sliderRef.current.slickPrev();
        }
    };

    const settings = {
        // dots: true,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: false,
    };


    return (
        <section className="my-6">
            <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
                <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:items-stretch">
                    <div className="grid place-content-center rounded bg-gray-100 p-6 sm:p-8">
                        <div className="mx-auto max-w-md text-center lg:text-left">
                            <header>
                                <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">Categories</h2>

                                <p className="mt-4 text-gray-500">
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas rerum quam amet
                                    provident nulla error!
                                </p>
                            </header>

                            <a
                                href="#"
                                className="mt-8 inline-block rounded border border-gray-900 bg-gray-900 px-12 py-3 text-sm font-medium text-white transition hover:shadow focus:outline-none focus:ring"
                            >
                                Shop All
                            </a>
                        </div>
                    </div>

                    <div className="lg:col-span-2 lg:py-8">
                        <ul className="grid grid-cols-1 gap-6">
                            <Slider ref={sliderRef} {...settings}>
                                {sliderData.map((product) => (
                                    <li className="px-2" onClick={() => handleItemClick(product)} key={product.id}>
                                        <a href="#" className="group block">
                                            <img
                                                src={product.images[0]}
                                                alt=""
                                                className="aspect-square w-full rounded object-cover"
                                            />

                                            <div className="mt-3">
                                                <h3
                                                    className="font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4"
                                                >
                                                    Simple Watch
                                                </h3>

                                                <p className="mt-1 text-sm text-gray-700">$150</p>
                                            </div>
                                        </a>
                                    </li>
                                ))}
                            </Slider>
                        </ul>

                        <div className="mt-4" style={{ textAlign: "center" }}>
                            <button className="p-3 text-xl text-center rounded-full mx-3 bg-gray-800 text-gray-100" onClick={previous}>
                                <IoIosArrowBack />
                            </button>
                            <button className="p-3 text-xl text-center rounded-full mx-3 bg-gray-800 text-gray-100" onClick={next}>
                                <IoIosArrowForward />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section >

    );

};



export default ProductSlider
