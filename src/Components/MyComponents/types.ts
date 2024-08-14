import { ReactElement } from "react"

export interface IButton {
    className: string, 
    children:ReactElement, 
    link:string, 
    social:string, 
    title:string, 
    type:string
}

export interface IBlogCard {
    className: string, 
    content:string, 
    date: string, 
    id: string, 
    imgPath: string, 
    height: number, 
    title: string
}