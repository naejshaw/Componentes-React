import { Link } from "react-router-dom";

export default function ToTop() {
    return (
        <Link
            className="relative inline-flex justify-center items-center p-3 bg-secondary hover:bg-primary rounded-lg z-10 overflow-hidden"
            to={'#header'}
            onClick={(e) => {
                e.preventDefault();
                window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                });
            }}
        >
            <i className="fa fa-arrow-up"></i>
        </Link>
    )
}