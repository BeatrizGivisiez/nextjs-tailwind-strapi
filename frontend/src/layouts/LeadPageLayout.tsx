import Image, { StaticImageData } from "next/image";

export default function LeadPageLayout({
  title,
  banner,
  children,
}: Readonly<{
  title: string;
  banner: StaticImageData;
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="bg-cover bg-center relative bg-black/40">
        <div className="custom-container ">
          <h1 className="heading-5xl z-10 relative font-extrabold py-5 text-end text-base-100">
            {title}
          </h1>
        </div>
        <Image
          src={banner}
          alt=""
          className="w-full h-full object-cover object-center absolute top-0 z-0 brightness-50"
          priority
        />
      </div>
      <div className="custom-container">{children}</div>
    </>
  );
}
