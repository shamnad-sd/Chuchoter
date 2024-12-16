import products from "../Products/Products";
import Aos from "aos";
import 'aos/dist/aos.css'
import '../styles/productlist.css';
import { useEffect } from "react";

const ProductList = () => {

    useEffect(()=>{
        Aos.init({
            duration: 1000,
            easing: "ease-in-out",
        });
    })

    return (
        <section className="py-10 bg-white">
            <div className="featured__products mx-auto">
                <h2 className="text-gray-800 mb-8">
                    FEATURED PRODUCTS IN CHOCOLATES
                </h2>

                <div className="product__list grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6" data-aos="fade-up">
                    {products.map((product) => (
                        <div
                            key={product.id}
                            className="relative group p-4 rounded-lg cursor-pointer"
                        >
                            <div className="product__img relative overflow-hidden rounded-lg">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-35 object-cover transition-transform duration-300 hover:scale-105"
                                />
                                <button className="add__button">
                                    <span><i className="bi bi-cart-fill"></i></span>
                                    <span className="btn__title">ADD</span>
                                </button> 
                            </div>

                            <div className="product__details mt-4">
                                <h3>{product.name}</h3>
                                <p>{product.category}</p>

                                <div className="flex items-center text-start mt-1 text-sm">
                                    <span className="star"><i className="bi bi-star-fill"></i></span> <span className="reviews">{product.reviews} Reviews</span>
                                </div>

                                <div className="price mt-2 text-sm">
                                    <span className="line-through text-gray-400 mr-2">
                                        {product.originalPrice}
                                    </span>
                                    <span className="text-gray-800 font-bold">
                                        {product.discountedPrice}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProductList;