export default function SkillsContainer({ children }) {
    return (
      <div
        className="relative border-2 border-solid border-primary rounded-lg py-2 px-6 z-10 overflow-hidden skills-content"
        aria-label="Skills container"
      >
        {children}
      </div>
    );
  }