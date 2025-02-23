import Image from "next/image";
import { Badge } from "../shadcn/Badge";
import SendmessageIcon from "../lottie-ui/send-message";
import CardWrapper from "./card-wrapper";

interface ProjectCardProps {
  projectImage: string;
  projectAlt: string;
  companyLogo: string;
  companyName: string;
  companyAlt: string;
  projectTitle: string;
  projectLink?: string;
  badges?: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  projectImage,
  projectAlt,
  companyLogo,
  companyName,
  companyAlt,
  projectTitle,
  projectLink,
  badges = [],
}) => {
  return (
    <CardWrapper>
      <div className="relative h-full flex flex-col justify-center gap-6 py-4 sm:py-6 px-4 sm:px-8 overflow-hidden">
        <div className="relative flex justify-between w-full h-full items-stretch flex-col">
          <div className="absolute h-full w-full aspect-[578/443] shadow-2xl rounded-lg">
            <Image
              src={projectImage}
              alt={projectAlt}
              fill
              style={{
                objectFit: "cover",
                objectPosition: "top",
                borderRadius: "8px",
              }}
            />
          </div>
        </div>
        <div className="flex flex-col items-start gap-1">
          <h4 className="text-xs font-medium opacity-80 uppercase flex flex-wrap gap-2 items-center">
            <span>Project at</span>
            <span className="flex gap-1 items-center">
              <Image
                src={companyLogo}
                alt={companyAlt}
                height={12}
                width={16}
              />
              {companyName}
            </span>
          </h4>
          <div className="w-full flex gap-2 items-center">
            <h1 className="text-2xl font-medium dark:text-white text-black uppercase opacity-90">
              {projectTitle}
            </h1>
            {projectLink && (
              <SendmessageIcon link={projectLink} lottieName={`${projectTitle}Icon`} />
            )}
          </div>
          <div className="flex gap-2 flex-wrap mt-1">
            {badges.map((badge, index) => (
              <Badge key={index} variant="default" className="text-xs">
                {badge}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </CardWrapper>
  );
};

export default ProjectCard;
