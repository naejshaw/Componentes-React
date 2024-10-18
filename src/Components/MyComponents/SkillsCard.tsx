import { ISkillsCard } from "./types";

export default function SkillsCard({ cardText, cardTitle }: ISkillsCard) {
  // Calculate the width as a decimal (0 to 1) for the progress bar
  const width = cardText / 100;

  return (
    <div className="py-4 px-0 progress">
      <h3 className="text-lg md:text-xl lg:text-2xl flex justify-between">
        {cardTitle}
        <span>{cardText}%</span>
      </h3>
      <progress
        className="w-full h-2 appearance-none [&::-webkit-progress-bar]:rounded-lg [&::-webkit-progress-value]:rounded-lg [&::-webkit-progress-bar]:bg-slate-300 [&::-webkit-progress-value]:bg-primary"
        value={width}
        max={1}
        aria-label={`Skill level for ${cardTitle}: ${cardText}%`}
      />
    </div>
  );
}