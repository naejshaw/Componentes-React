export default function Footer() {
    return (
        <>
            <footer className="flex justify-between items-center flex-wrap py-8 px-[9%] bg-[#112e42] footer">
                <div className="relative footer-text">
                    <p className=" text-lg md:text-xl lg:text-2xl">
                        Copyright © 2023 by NaejShaw | All Rights Reserved.
                    </p>
                </div>
                <div className="relative footer-iconTop">
                    <a
                        className="relative inline-flex justify-center items-center p-3 bg-[#00abf0] border-[.2rem] border-solid border-[#00abf0] rounded-lg z-10 overflow-hidden"
                        href="#header"
                    >
                        <i className="fa fa-arrow-up text-[#112e42] hover:text-white"></i>
                    </a>
                </div>
            </footer>
        </>
    );
}
