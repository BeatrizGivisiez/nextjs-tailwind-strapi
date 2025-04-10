export default function SingleProjectPageSkeleton() {
  return (
    <div className="custom-container mt-12">
      <div className="grid grid-cols-6 gap-16">
        <div className="col-span-full lg:col-span-4 flex flex-col gap-4">
          <div className="skeleton h-8 w-80"></div>
          <div className="skeleton h-32 w-full"></div>
          <div className="flex gap-4 justify-between items-center">
            <div className="skeleton h-4 w-full"></div>
            <div className="skeleton h-8 w-80"></div>
          </div>
          <div>
            <div className="skeleton h-30 w-full"></div>
          </div>
          <div className="skeleton h-64 w-full"></div>
        </div>
        <div className="col-span-full lg:col-span-2 ">
          <div className="skeleton h-80 w-full"></div>
        </div>
      </div>
    </div>
  );
}
