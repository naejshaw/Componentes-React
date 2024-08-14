import { ReactElement } from "react";

export interface ISection{
    children: ReactElement|ReactElement[], 
    className: string, 
    id: string, 
    title?: string, 
    titleSpan?: string, 
}