import Footer from "@/Partials/Footer";
import Header from "@/Partials/Header";

export default function Site({ children })
{
    return(<>
        <div className="bg-[#081b29] text-[#ededed] p-0 m-0 box-border text-decoration-none border-none outline-none scroll-smooth font-sans overflow-x-hidden">
            <Header />
            <div className="min-h-screen">
                {children}
            </div>
            <Footer />
        </div>
    </>);
}
