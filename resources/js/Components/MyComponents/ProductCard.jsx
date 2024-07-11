export default function ProductCard({img, price, product})
{
    return(<>
        <div className="relative md:max-w-48 lg:max-w-full hover:p-2.5 hover:border-[#171427] hover:border hover:border-solid product-box">
            <img src={"https://raw.githubusercontent.com/naejshaw/Portfolio-7/main/img/" + img + ".jpg"} alt="" className="h-auto mb-2 w-full product-img"/>
            <h2 className="text-lg font-semibold uppercase mb-2 product-title">{product}</h2>
            <span className="font-medium price">${price}</span>
            <svg className='max-w-10 max-h-10 absolute bottom-1 right-1  text-[#fff] p-2.5 cursor-pointer hover:scale-110 bx bx-shopping-bag add-cart' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M160 112c0-35.3 28.7-64 64-64s64 28.7 64 64v48H160V112zm-48 48H48c-26.5 0-48 21.5-48 48V416c0 53 43 96 96 96H352c53 0 96-43 96-96V208c0-26.5-21.5-48-48-48H336V112C336 50.1 285.9 0 224 0S112 50.1 112 112v48zm24 48a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm152 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z"/></svg>
        </div>
    </>)
}