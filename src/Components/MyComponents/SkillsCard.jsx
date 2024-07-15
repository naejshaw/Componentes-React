export default function SkillsCard({ cardText, cardTitle }) {
    return (
        <>
            <div className="py-4 px-0 progress">
                <h3 className="text-2xl flex justify-between">
                    {cardTitle} <span>{cardText}</span>
                </h3>
                <div className="block h-full rounded-md bg-[#00abf0] bar">
                    <span />
                </div>
            </div>
        </>
    );
}
