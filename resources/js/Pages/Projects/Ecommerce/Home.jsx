import ProductCard from "@/Components/MyComponents/ProductCard";
import Site from "@/Layouts/SiteLayout";
import { Head, Link } from "@inertiajs/react";

export default function Home()
{
    return(<>
        <Head title="E-commerce" />
        <Site>
            <div className="mt-36 text-[#999898] container mx-auto">

                <header className="fixed z-40 top-24 left-0 w-full bg-[#fff]">
                    <div className="flex items-center justify-between py-5 px-4 nav container">
                        <Link href="#" className="text-[#171427] text-2xl font-medium logo">Ecommerce</Link>
                        <svg className='max-w-8 max-h-8 text-3xl cursor-pointer right-3 bx bx-shopping-bag' id="cart-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M160 112c0-35.3 28.7-64 64-64s64 28.7 64 64v48H160V112zm-48 48H48c-26.5 0-48 21.5-48 48V416c0 53 43 96 96 96H352c53 0 96-43 96-96V208c0-26.5-21.5-48-48-48H336V112C336 50.1 285.9 0 224 0S112 50.1 112 112v48zm24 48a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm152 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z"/></svg>
                        <div className="fixed top-0 -right-full w-80 min-h-screen p-5 bg-[#fff] active:right-0 cart">
                            <h2 className="text-center text-2xl font-semibold mt-8 cart-title">Your Cart</h2>
                            <div className="cart-content">

                            </div>
                            <div className="flex justify-end mt-6 border border-solid border-[#171427] total">
                                <div className="text-base font-semibold total-title">Total</div>
                                <div className="ml-2 total-price" id="valor">$0</div>
                            </div>
                            <button type="button" className="flex mt-6 mb-0 mx-auto py-3 px-5 text-[#fff] bg-[#140a36] text-base font-medium cursor-pointer hover:bg-[#171427] btn-buy">Buy Now</button>
                            <i className='absolute top-4 right-3 text-3xl text-[#171427] cursor-pointer bx bx-x' id="close-cart"></i>

                        </div>
                    </div>
                </header>
                <section className="bg-[#fff] py-20 px-12 mt-8 shop container">
                    <h2 className="text-2xl font-semibold text-center mb-6 section-title">Shop Products</h2>
                    <div className="flex flex-col items-center md:grid md:grid-cols-3 gap-6 shop-content">
                        <ProductCard img={"product1"} price={25} product={"AEROREADY SHIRT"}/>
                        <ProductCard img={"product2"} price={100} product={"WIRELESS EARBUDS"}/>
                        <ProductCard img={"product3"} price={45} product={"HOODED PARKA"}/>
                        <ProductCard img={"product4"} price={24.04} product={"STRAW METAL BOTTLE"}/>
                        <ProductCard img={"product5"} price={50} product={"METAL Sunglasses"}/>
                        <ProductCard img={"product6"} price={50} product={"BACK HAT"}/>
                        <ProductCard img={"product7"} price={70} product={"BACKPACK"}/>
                        <ProductCard img={"product8"} price={45} product={"ULTRABOOS 22"}/>
                    </div>
                </section>
            </div>
        </Site>
    </>);
}
