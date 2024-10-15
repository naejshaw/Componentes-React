import ToTop from "../Components/MyComponents/ToTop";

export default function Footer() 
{
    return (
        <>
            <footer className="flex justify-between items-center flex-wrap py-8 px-[9%] bg-secondary footer" id="footer">
                <div className="relative footer-text">
                    <p className="text-2xl">
                        Copyright © 2023 by NaejShaw | All Rights Reserved.
                    </p>
                    <span className="animate scroll" />
                </div>
                <div className="relative footer-iconTop">
                    <ToTop />
                    <span className="animate scroll" />
                </div>
            </footer>
        </>
    );
}
