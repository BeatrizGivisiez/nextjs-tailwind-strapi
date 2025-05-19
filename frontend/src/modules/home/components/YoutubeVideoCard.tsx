// components/Content/YoutubeVideoCard.tsx
import Image from "next/image";
import { YoutubeLogo } from "phosphor-react";
import { YoutubeVideo } from "@/hooks/PaginaPrincipal/usePaginaPrincipal";

interface Props {
  video: YoutubeVideo;
  onClick: (url: string) => void;
}

export const YoutubeVideoCard: React.FC<Props> = ({ video, onClick }) => {
  return (
    <div
      className="h-[200px] w-[300px] cursor-pointer pr-4"
      onClick={() => onClick(video?.YoutubeUrl)}
    >
      <Image
        src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${video?.Thumbnail?.url}`}
        alt={`Thumbnail for ${video.Title}`}
        className="rounded-lg object-cover"
        fill
      />
      <div className="absolute top-0 left-0 z-[1] h-full w-full">
        <div className="flex h-full items-center justify-center">
          <YoutubeLogo weight="fill" color="var(--color-error)" size={80} />
        </div>
      </div>
    </div>
  );
};
