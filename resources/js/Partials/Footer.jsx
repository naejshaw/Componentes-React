export default function Footer() {
    return (
        <>
            <footer className="flex justify-between items-center flex-wrap py-8 px-[9%] bg-[#112e42] footer">
                <div className="relative footer-text">
                    <p className="text-2xl">
                        Copyright © 2023 by NaejShaw | All Rights Reserved.
                    </p>
                    <span className="animate scroll" />
                </div>
                <div className="relative footer-iconTop">
                    <a
                        className="relative inline-flex justify-center items-center p-3 bg-[#00abf0] border-[.2rem] border-solid border-[#00abf0] rounded-lg z-10 overflow-hidden"
                        href="#header"
                    >
                        <i className="bx bx-up-arrow-alt">↑</i>
                    </a>
                    <span className="animate scroll" />
                </div>
            </footer>
        </>
    );
}
