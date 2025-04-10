import { ApoiarHero } from "../components/Hero";
import { ApoiarProjects } from "../components/Projects";

interface ApoiarPageProps {}

export const ApoiarPage: React.FC<ApoiarPageProps> = ({}) => {
  return (
    <>
      <ApoiarHero />
      <ApoiarProjects />
    </>
  );
};
