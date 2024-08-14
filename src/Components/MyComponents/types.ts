import { ReactElement } from "react"

export interface IBaseComponent {
    children: ReactElement
}

export interface IBigCard {
    children: ReactElement
}

export interface IBlogCard {
    className: string, 
    content?:string, 
    date: string, 
    id: string, 
    imgPath: string, 
    height?: string, 
    title: string
}

export interface IButton {
    className: string, 
    children?:ReactElement, 
    link?:string, 
    social?:string, 
    title?:string, 
    type?:string
}

export interface ICard {
    cardDate: string, 
    cardText:string, 
    cardTitle: string
}

export interface IDiscordSection {
    className: string, 
    content:string, 
    contentClass:string, 
    id:string, 
    title:string, 
    titleClass:string
}
export interface IGalleryCard{
    imgPath: string, 
    id: string, 
    text: string, 
    title: string
}
export interface IHboCard{
    buttonTitle?: string, 
    cardValue?: string,
    children?: ReactElement | ReactElement[], 
    imgPath?: string, 
    title?: string
}

export interface IProductCard{
    img: string, 
    price: string,
    product: string
}

export interface IQuizCard {
    description: string,
    id: string,
    img: string, 
    title: string,
    alt?: string
}
export interface IResumeSection{
    children: ReactElement, 
    title: string
}

export interface ISkillsCard {
    cardText:number, 
    cardTitle: string
}

export interface ISmallCard{
    children: ReactElement
}

export interface ISubject{
    children: ReactElement|ReactElement[],
    containerClass?: string,
    title: string
}

export interface IYoutubeCard{
    avatar: string,
    thumb: string,
    title: string,
    transmission: string,
    views: string,
}
export interface IYoutubeNavitem{
    navIcon: string,
    path?: string,
    title: string,
}

export interface IYoutubeRow{
    children: ReactElement| ReactElement[]
}