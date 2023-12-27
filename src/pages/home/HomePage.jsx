"use client";
import { Badge, Button, Card } from "keep-react";
import { Heart, ShoppingCart } from "phosphor-react";
import productData from "../../features/ProductData";
import { Link, useNavigate } from "react-router-dom";
import ProductSlider from "./ProductSlider";



const HomePage = () => {
    const navigate = useNavigate();
    const products = productData.slice(0, 15);
    const slider = productData.slice(13, 20);
    console.log('products', products);


    const handleItemClick = (product) => {
        navigate(`/singleproduct/${product.id}`);
        window.scroll(0, 0)
    }

    return (
        <>
            {/* -------------- HERO SECTION -------------- */}
            <section class="container px-6 py-16 mx-auto" style={{ minHeight: '90vh' }}>
                <div class="items-center lg:flex justify-center">
                    <div class="w-full">
                        <div class="lg:max-w-xl">
                            <h1 class="text-3xl font-bold text-gray-800 lg:text-6xl">Best place to choose your <span class="text-blue-500 ">clothes</span></h1>

                            <p class="mt-3 text-gray-600 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro beatae error laborum ab amet sunt recusandae? Reiciendis natus perspiciatis optio.</p>

                            <div className="button mt-8">
                                <a href="#home_products" class="w-full px-5 py-2 mt-20text-sm tracking-wider text-white uppercase transition-colors duration-300 transform bg-blue-600 rounded-lg lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500">Shop Now</a>
                            </div>

                        </div>
                    </div>

                    <div class="flex items-center justify-center w-full mt-6 lg:mt-0">
                        <img class="w-full h-full lg:max-w-1xl" src="https://merakiui.com/images/components/Catalogue-pana.svg" alt="Catalogue-pana.svg" />
                    </div>
                </div>
            </section>

            {/* -------------- PRODUCTS SECTION -------------- */}
            <section id="home_products">
                <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-3 sm:py-12 lg:px-8">
                    <header className="text-center">
                        <h2 className="text-xl font-bold text-gray-900 sm:text-3xl lg:text-5xl">Product Collection</h2>

                        <div class="flex justify-center mx-auto mt-4">
                            <span class="inline-block w-40 h-1 bg-blue-500 rounded-full"></span>
                            <span class="inline-block w-3 h-1 mx-1 bg-blue-500 rounded-full"></span>
                            <span class="inline-block w-1 h-1 bg-blue-500 rounded-full"></span>
                        </div>
                    </header>

                    <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
                        {/*=== PRODUCT CARD ONE=== */}
                        {products.map((product) => (
                            <Card onClick={() => handleItemClick(product)} key={product.id} className="max-w-sm overflow-hidden rounded-md bg-gray-100 cursor-pointer"
                                imgSrc={product.images[0]}
                                imgSize="xl">
                                <Card.Container className="absolute right-3.5 top-3.5 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-metal-50/50">
                                    <Heart size={20} weight="bold" color="white" />
                                </Card.Container>
                                <Card.Container className="p-4">
                                    <Card.Container className="flex items-center justify-between">
                                        <Badge size="xs" colorType="light" color="gray">
                                            For Sale
                                        </Badge>
                                        <Card.Title>${product.price}</Card.Title>
                                    </Card.Container>
                                    <Card.Container className="my-3">
                                        <Card.Title>{product.category.name}</Card.Title>
                                        <Card.Description>
                                            {product.description.slice(0, 25)}...
                                        </Card.Description>
                                    </Card.Container>
                                </Card.Container>
                            </Card>
                        ))}

                    </ul>
                </div>
            </section>

            {/* -------------- PRODUCTS SLIDER SECTION -------------- */}
            <ProductSlider slider={slider} />


            {/* <section>
                <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
                    <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:items-stretch">
                        <div className="grid place-content-center rounded bg-gray-100 p-6 sm:p-8">
                            <div className="mx-auto max-w-md text-center lg:text-left">
                                <header>
                                    <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">Watches</h2>

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
                            <ul className="grid grid-cols-2 gap-4">
                                <li>
                                    <a href="#" className="group block">
                                        <img
                                            src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1598&q=80"
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

                                <li>
                                    <a href="#" className="group block">
                                        <img
                                            src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1598&q=80"
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
                            </ul>
                        </div>
                    </div>
                </div>
            </section> */}

        </>
    )
}

export default HomePage
