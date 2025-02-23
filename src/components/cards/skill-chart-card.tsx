import CardWrapper from "./card-wrapper";

const SkillChartCard = () => {
  return (
    <CardWrapper>
      <div className="flex justify-center items-center h-full w-full">
        <a href="https://holopin.me/devesh711" target="_blank" rel="noopener noreferrer">
          <img
            src="https://holopin.me/devesh711"
            alt="holopin"
            className="rounded-2xl object-cover w-full"
          />
        </a>
      </div>
    </CardWrapper>
  );
};

export default SkillChartCard;
