import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Site from "../../../Layouts/SiteLayout";
import ProductCard from "../../../Components/MyComponents/ProductCard";

export default function Ecommerce() {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch("http://localhost:4016/api/products")
            .then(res => res.json())
            .then(data => setProducts(data))
            .catch(err => console.error("Failed to fetch products:", err));
    }, []);

    function addToCart(product) {
        setCart(prevCart => {
            const existing = prevCart.find(item => item.id === product.id);
            if (existing) {
                return prevCart.map(item =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            } else {
                return [...prevCart, { ...product, quantity: 1 }];
            }
        });
    }

    function removeFromCart(productId) {
        setCart(prevCart => prevCart.filter(item => item.id !== productId));
    }

    function getTotal() {
        return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
    }

    function placeOrder() {
        if (cart.length === 0) {
            alert("Your cart is empty.");
            return;
        }
        fetch("http://localhost:4016/api/orders", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(cart),
        })
            .then(res => {
                if (res.ok) {
                    alert("Order placed successfully!");
                    setCart([]);
                } else {
                    alert("Failed to place order.");
                }
            })
            .catch(() => alert("Failed to place order."));
    }

    return (
        <Site>
            <div className="mt-36 text-[#999898] container mx-auto">
                <header className="fixed z-40 top-24 left-0 w-full bg-[rgba(255,_255,_255,_0.2)] rounded-[16px] shadow-lg backdrop-filter backdrop-blur-[5px] border border-[rgba(255,255,255,0.3)]">
                    <div className="flex items-center justify-between py-5 px-4 nav container">
                        <Link to="#" className="text-tertiary text-2xl font-medium logo">Ecommerce</Link>
                        <svg className='max-w-8 max-h-8 text-3xl cursor-pointer' id="cart-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                            <path d="M160 112c0-35.3 28.7-64 64-64s64 28.7 64 64v48H160V112zm-48 48H48c-26.5 0-48 21.5-48 48V416c0 53 43 96 96 96H352c53 0 96-43 96-96V208c0-26.5-21.5-48-48-48H336V112C336 50.1 285.9 0 224 0S112 50.1 112 112v48zm24 48a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm152 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z"/>
                        </svg>
                        <div className="fixed top-0 -right-full w-80 min-h-screen p-5 bg-text-w active:right-0 cart">
                            <h2 className="text-center text-2xl font-semibold mt-8 cart-title">Your Cart</h2>
                            <div className="cart-content">
                                {cart.length === 0 ? (
                                    <p className="text-center mt-4">Your cart is empty.</p>
                                ) : (
                                    cart.map(item => (
                                        <div key={item.id} className="flex justify-between items-center border-b py-2">
                                            <span>{item.product}</span>
                                            <span>${item.price.toFixed(2)}</span>
                                            <span>Qty: {item.quantity}</span>
                                            <button onClick={() => removeFromCart(item.id)} className="text-red-600 hover:text-red-800 ml-2">Remove</button>
                                        </div>
                                    ))
                                )}
                            </div>
                            <div className="flex justify-end mt-6 border border-solid border-tertiary total">
                                <div className="text-base font-semibold total-title">Total</div>
                                <div className="ml-2 total-price" id="valor">${getTotal()}</div>
                            </div>
                            <button type="button" onClick={placeOrder} className="flex mt-6 mb-0 mx-auto py-3 px-5 text-text-w bg-[#140a36] text-base font-medium cursor-pointer hover:bg-tertiary btn-buy">Buy Now</button>
                            <i className='absolute top-4 right-3 text-3xl text-tertiary cursor-pointer bx bx-x' id="close-cart"></i>
                        </div>
                    </div>
                </header>
                <section className="bg-text-w py-20 px-12 mt-8 shop container">
                    <h2 className="text-2xl font-semibold text-center mb-6 section-title">Shop Products</h2>
                    <div className="flex flex-col items-center md:grid md:grid-cols-3 gap-6 shop-content">
                        {products.map((product, index) => (
                            <ProductCard key={index} img={product.img} price={product.price} product={product.product} addToCart={() => addToCart(product)} />
                        ))}
                    </div>
                </section>
            </div>
        </Site>
    );
}

// export default function Ecommerce() {
//     return (
//         <Site>
//             <div className="mt-36 text-[#999898] container mx-auto">
//                 <header className="fixed z-40 top-24 left-0 w-full bg-[rgba(255,_255,_255,_0.2)] rounded-[16px] shadow-lg backdrop-filter backdrop-blur-[5px] border border-[rgba(255,255,255,0.3)]">
//                     <div className="flex items-center justify-between py-5 px-4 nav container">
//                         <Link to="#" className="text-tertiary text-2xl font-medium logo">Ecommerce</Link>
//                         <svg className='max-w-8 max-h-8 text-3xl cursor-pointer' id="cart-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
//                             <path d="M160 112c0-35.3 28.7-64 64-64s64 28.7 64 64v48H160V112zm-48 48H48c-26.5 0-48 21.5-48 48V416c0 53 43 96 96 96H352c53 0 96-43 96-96V208c0-26.5-21.5-48-48-48H336V112C336 50.1 285.9 0 224 0S112 50.1 112 112v48zm24 48a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm152 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z"/>
//                         </svg>
//                         <div className="fixed top-0 -right-full w-80 min-h-screen p-5 bg-text-w active:right-0 cart">
//                             <h2 className="text-center text-2xl font-semibold mt-8 cart-title">Your Cart</h2>
//                             <div className="cart-content"></div>
//                             <div className="flex justify-end mt-6 border border-solid border-tertiary total">
//                                 <div className="text-base font-semibold total-title">Total</div>
//                                 <div className="ml-2 total-price" id="valor">$0</div>
//                             </div>
//                             <button type="button" className="flex mt-6 mb-0 mx-auto py-3 px-5 text-text-w bg-[#140a36] text-base font-medium cursor-pointer hover:bg-tertiary btn-buy">Buy Now</button>
//                             <i className='absolute top-4 right-3 text-3xl text-tertiary cursor-pointer bx bx-x' id="close-cart"></i>
//                         </div>
//                     </div>
//                 </header>
//                 <section className="bg-text-w py-20 px-12 mt-8 shop container">
//                     <h2 className="text-2xl font-semibold text-center mb-6 section-title">Shop Products</h2>
//                     <div className="flex flex-col items-center md:grid md:grid-cols-3 gap-6 shop-content">
//                         {products.map((product, index) => (
//                             <ProductCard key={index} img={product.img} price={product.price} product={product.product} />
//                         ))}
//                     </div>
//                 </section>
//             </div>
//         </Site>
//     );
// }