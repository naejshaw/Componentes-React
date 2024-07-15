export default function SkillsContainer({children}) {
    return (
        <>
            <div className="relative border-[.2rem] border-solid border-[#00abf0] rounded-lg py-2 px-6 z-10 overflow-hidden skills-content">
                    {children}
            </div>
        </>
    );
}
