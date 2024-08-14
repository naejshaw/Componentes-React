import { Link } from "react-router-dom";
import { ISmallCard } from "./types";

export default function SmallCard({children}:ISmallCard) {
    return (
        <>
            {children}
        </>
    );
}
