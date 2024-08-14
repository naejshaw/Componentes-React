import { IBaseComponent } from "./types";

export default function BaseComponent({children}:IBaseComponent)
{
    return(<>
        {children}
    </>)
}