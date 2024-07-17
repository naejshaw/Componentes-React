import Button from "./Button";

export default function HboCard({buttonTitle, cardValue, children, imgPath, title})
{
    return(<>
        {imgPath ?
        <div className="rounded-2xl bg-no-repeat bg-cover bg-center border-spacing-0.5 border-solid border-transparent hover:border-tertiary content__card">
            <img src={"https://raw.githubusercontent.com/naejshaw/hbomax/master/assets/images/" + imgPath + ".webp"} alt="" className="w-7/12 mx-auto md:w-full object-cover object-center content__img"/>
        </div>
        :
        <div className="bg-flipCardBg rounded-lg flex flex-col justify-between gap-8 py-16 px-8 card">
            <div className="flex flex-col gap-4">
                <div className="flex px-6 text-xl mb-4 justify-around card-header">
                    <h3>{title}</h3>
                    <p className="font-raleway text-secondary font-bold text-3xl subscription__price">{cardValue} <span className="text-white text-base font-light text-small">/mês</span></p>
                </div>
                <ul className="flex flex-col gap-4 text-left card-benefits">
                    {children}
                </ul>
            </div>
            <Button className={"outline-3 outline-transparent hover:bg-transparent hover:bg-cover hover:outline-2 hover:outline-secondary  hover:bg-white hover:text-black button button-gradient py-2 px-10 bg-tertiary rounded-3xl"} title={buttonTitle}/>
        </div>
        }
    </>)
}
