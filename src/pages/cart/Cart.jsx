// import { Heart, Trash } from 'lucide-react'
import React, { useEffect } from 'react'
import { useState } from "react";
import { NumberInput } from "keep-react";
import { useDispatch, useSelector } from 'react-redux';
import { decreaseQuantity, getCartTotal, increaseQuantity, removeFromCart } from '../../features/ActionsSlice';
import { Link } from 'react-router-dom';

const Cart = () => {
    const dispatch = useDispatch();
    const { cart, totalPrice, totalQuantity } = useSelector((state) => state.action);
    // Get cart data
    console.log('cart', cart);


    useEffect(() => {
        dispatch(getCartTotal());
    }, [cart]);

    return (
        <>
            <section>
                {cart && cart.length > 0 ? (
                    <div className="mx-auto max-w-7xl px-2 lg:px-0">
                        <div className="mx-auto max-w-2xl py-8 lg:max-w-6xl">
                            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                                Shopping Cart
                            </h1>
                            <form className="mt-12 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16">
                                <section aria-labelledby="cart-heading" className="rounded-lg bg-white lg:col-span-8">
                                    <h2 id="cart-heading" className="sr-only">
                                        Items in your shopping cart
                                    </h2>
                                    <ul role="list" className="divide-y divide-gray-200">
                                        {cart.map((product) => (
                                            <div key={product.id} className="">
                                                <li className="flex py-6 sm:py-6 ">
                                                    <div className="flex-shrink-0">
                                                        <img
                                                            src={product.images[0]}
                                                            alt={product.title}
                                                            className="sm:h-38 sm:w-38 h-36 w-36 rounded-md object-contain object-center"
                                                        />
                                                    </div>

                                                    <div className="ml-4 flex flex-1 flex-col justify-between sm:ml-6">
                                                        <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                                                            <div>
                                                                <div className="flex justify-between">
                                                                    <h3 className="text-lg">
                                                                        <a href={product.href} className="font-semibold text-black">
                                                                            {product.title}
                                                                        </a>
                                                                    </h3>
                                                                </div>
                                                                <div className="mt-1 flex text-sm">
                                                                    <p className="text-lg text-gray-500">{product.category.name}</p>
                                                                </div>
                                                                <div className="mt-1 flex items-end">
                                                                    <p className="text-xs font-medium text-gray-500 line-through">
                                                                        {/* {product.originalPrice} */}
                                                                    </p>
                                                                    <p className="text-lg font-medium text-gray-900">
                                                                        ${product.price}
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <div className="mb-2 flex">
                                                    <div className="min-w-24 flex">
                                                        <button onClick={() => dispatch(decreaseQuantity(product.id))} type="button" className="text-2xl mx-2 text-gray-800">
                                                            -
                                                        </button>
                                                        <input
                                                            type="text"
                                                            className="mx-1 h-8 w-10 rounded-md border border-gray-400 text-center bg-transparent text-black"
                                                            value={product.quantity}
                                                        />
                                                        <button onClick={() => dispatch(increaseQuantity(product.id))} type="button" className="flex text-2xl mx-2 text-gray-800 items-center justify-center">
                                                            +
                                                        </button>

                                                    </div>
                                                    <div className="ml-6 flex text-sm">
                                                        <button onClick={() => dispatch(removeFromCart(product.id))} type="button" className="flex items-center space-x-1 px-2 py-1 pl-0">
                                                            {/* <Trash size={12} className="text-red-500" /> */}
                                                            <span className="text-xs font-medium text-red-500">Remove</span>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </ul>
                                </section>
                                {/* Order summary */}
                                <section
                                    aria-labelledby="summary-heading"
                                    className="mt-16 rounded-md bg-white lg:col-span-4 lg:mt-0 lg:p-0"
                                >
                                    <h2
                                        id="summary-heading"
                                        className=" border-b border-gray-200 px-4 py-3 text-lg font-medium text-gray-900 sm:p-4"
                                    >
                                        Price Details
                                    </h2>
                                    <div>
                                        <dl className=" space-y-1 px-2 py-4">
                                            <div className="flex items-center justify-between">
                                                <dt className="text-sm text-gray-800">Items</dt>
                                                <dd className="text-sm font-medium text-gray-900">{totalQuantity}</dd>
                                            </div>
                                            <div className="flex items-center justify-between pt-4">
                                                <dt className="flex items-center text-sm text-gray-800">
                                                    <span>Discount</span>
                                                </dt>
                                                <dd className="text-sm font-medium text-green-700">Rs .0</dd>
                                            </div>
                                            <div className="flex items-center justify-between py-4">
                                                <dt className="flex text-sm text-gray-800">
                                                    <span>Delivery Charges</span>
                                                </dt>
                                                <dd className="text-sm font-medium text-green-700">Free</dd>
                                            </div>
                                            <div className="flex items-center justify-between border-y border-dashed py-4 ">
                                                <dt className="text-base font-medium text-gray-900">Total Amount</dt>
                                                <dd className="text-base font-medium text-gray-900">{totalPrice.toFixed(2)}</dd>
                                            </div>
                                        </dl>

                                        <div className="checkout_button flex justify-center my-2">
                                            {/* <div data-tooltip="Price:-$20" class="button-checkout">
                                                <div class="button-wrapper">
                                                    <div class="text-checkout tracking-wide">Checkout</div>
                                                    <span class="icon-checkout">
                                                        <svg viewBox="0 0 16 16" class="bi bi-cart2" fill="currentColor" height="16" width="16" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"></path>
                                                        </svg>
                                                    </span>
                                                </div>
                                            </div> */}
                                            <Link to="/checkout" class="bg-gray-800 hover:bg-gray-900 text-white px-4 py-2 rounded-lg">Checkout</Link>
                                        </div>


                                        <div className="continue_shopping flex justify-center mt-8">
                                            <Link to="/" className="px-2 pb-4 font-medium text-gray-900">
                                                Continue Shopping
                                            </Link>
                                        </div>
                                    </div>
                                </section>
                            </form>
                        </div>
                    </div>
                ) : (
                    <div className="container text-gray-800">
                        <div className="mx-0 text-center">
                            <div className="py-5">
                                {/* <img src={cartImg} alt="No Item In Cart" width="170px" height="170px" /> */}
                                <h3 className="no-item-in-cart ">
                                    No Item In Cart: <br />
                                    <span>Shop Now</span>
                                    <Link to="/">
                                        <i className="fa-solid fa-bag-shopping px-3 py-4"></i>
                                    </Link>
                                </h3>
                            </div>
                        </div>
                    </div>
                )}
            </section>
        </>
    )
}

export default Cart;
