import { DotsThreeOutline } from "phosphor-react";

interface Props {
  nSlides: number;
}

const CarouselSkeletonLayout: React.FC<Props> = ({ nSlides = 1 }) => {
  return (
    <div>
      <div className="flex gap-4">
        {Array.from({ length: nSlides }).map((_, index) => (
          <div key={index} className="skeleton h-80 w-full"></div>
        ))}
      </div>
      <div className="flex mt-5 justify-center w-full">
        <DotsThreeOutline size={32} weight="fill" />
      </div>
    </div>
  );
};

export default CarouselSkeletonLayout;
