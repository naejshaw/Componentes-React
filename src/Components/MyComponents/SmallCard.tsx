import { ISmallCard } from "./types";

export default function SmallCard({ children }: ISmallCard) {
    return (
        <div className="small-card">
            {children}
        </div>
    );
}