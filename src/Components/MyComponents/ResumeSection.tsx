import { Accordion } from "flowbite-react";
import { IResumeSection } from "./types";

export default function ResumeSection({children, title}:IResumeSection) {
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
