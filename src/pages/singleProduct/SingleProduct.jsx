import React from 'react'
import { Dropdown } from "keep-react";
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import productData from "../../features/ProductData";
import { addToCart } from '../../features/ActionsSlice';
import { toast } from 'react-toastify';
// import { Star, ChevronDown } from 'lucide-react'

const SingleProduct = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { id } = useParams();


    const products = productData;
    const itemId = parseInt(id, 10);

    const selectedItem = products.filter((item) => item.id === itemId);
    console.log('selectedItem', selectedItem);

    const handleAddToCart = () => {
        dispatch(addToCart(selectedItem));
        toast.success("Item added to cart");
        // navigate('/cart');
    };

    return (
        <section className="overflow-hidden">
            {selectedItem.map((product) => (
                <div className="mx-auto max-w-5xl px-5 py-24">
                    <div className="mx-auto flex flex-wrap items-center lg:w-4/5">
                        <img
                            alt="Nike Air Max 21A"
                            className="h-64 w-full rounded object-cover lg:h-96 lg:w-1/2"
                            src={product.images[0]}
                        />
                        <div className="mt-6 w-full lg:mt-0 lg:w-1/2 lg:pl-10">
                            <h2 className="text-sm font-semibold tracking-widest text-gray-500">Nike</h2>
                            <h1 className="my-4 text-3xl font-semibold text-black">{product.title}</h1>
                            <div className="my-4 flex items-center">
                            </div>
                            <p className="leading-relaxed">
                                {product.description}
                            </p>
                            <div className="mb-5 mt-6 flex items-center border-b-2 border-gray-100 pb-5">
                                <div className="flex items-center">
                                    <span className="mr-3 text-sm font-semibold">Color</span>
                                    <button className="h-6 w-6 rounded-full border-2 border-gray-300 focus:outline-none"></button>
                                    <button className="ml-1 h-6 w-6 rounded-full border-2 border-gray-300 bg-gray-700 focus:outline-none"></button>
                                    <button className="ml-1 h-6 w-6 rounded-full border-2 border-gray-300 bg-green-200 focus:outline-none"></button>
                                </div>
                                <div className="ml-auto flex items-center">
                                    <Dropdown
                                        label="Sizes"
                                        className='w-28'
                                        size="sm"
                                        dismissOnClick={true}
                                    >
                                        <Dropdown.Item className='px-12'>S</Dropdown.Item>
                                        <Dropdown.Item className='px-12'>M</Dropdown.Item>
                                        <Dropdown.Item className='px-12'>L</Dropdown.Item>
                                        <Dropdown.Item className='px-12'>XL</Dropdown.Item>
                                    </Dropdown>
                                </div>
                            </div>
                            <div onClick={handleAddToCart} className="flex items-center justify-between">
                                <span className="title-font text-xl font-bold text-gray-900">₹{product.price}</span>
                                <button
                                    type="button"
                                    className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                                >
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            ))}

        </section>
    )
}

export default SingleProduct
