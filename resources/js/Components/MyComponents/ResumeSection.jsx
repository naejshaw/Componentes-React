import { Accordion } from "flowbite-react";

export default function ResumeSection({children, title}) {
    return (
        <>
            <Accordion.Title>
                <h2 className="m-0 text-2xl text-start">{title}</h2>
            </Accordion.Title>

            <Accordion.Content>
                {children}
            </Accordion.Content>
        </>
    );
}
