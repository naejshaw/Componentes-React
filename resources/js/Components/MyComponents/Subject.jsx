export default function Subject({containerClass, children, title}) {
    return (
        <>
            <div className="flex-1 education-column">
                <h3 className="relative inline-block text-2xl md:text-3xl lg:text-4xl mt-0 mr-0 mb-6 ml-8 title">
                    {title}
                </h3>
                <div className={containerClass}>
                    {children}
                </div>
            </div>
        </>
    );
}
