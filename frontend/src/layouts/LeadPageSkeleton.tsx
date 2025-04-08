import Image, { StaticImageData } from "next/image";

export default function LeadPageSkeleton() {
  return (
    <>
      <div className="bg-cover bg-center relative ">
        <div className="skeleton h-32 w-full"></div>
      </div>
      <div className="custom-container mt-8">
        <div className="flex justify-end">
          <div className="flex gap-2">
            <div className="skeleton h-4 w-32"></div>
            <div className="skeleton h-4 w-4"></div>
            <div className="skeleton h-4 w-4"></div>
            <div className="skeleton h-4 w-4"></div>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-4 gap-5">
          {Array.from({ length: 8 }).map((_, index) => (
            <div className="flex w-full flex-col gap-4" key={index}>
              <div className="skeleton h-32 w-full"></div>
              <div className="skeleton h-4 w-28"></div>
              <div className="skeleton h-4 w-full"></div>
              <div className="skeleton h-4 w-full"></div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
