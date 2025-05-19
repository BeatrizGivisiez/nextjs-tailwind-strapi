"use client";

import { useState, useEffect } from "react";
import { YoutubeLogo } from "phosphor-react";
import image1 from "@/assets/HeroBG.jpg";
import Image from "next/image";
import ReactPlayer from "react-player";
import CustomButton from "@/components/Buttons/CustomButton";
import { YoutubeVideo } from "@/hooks/PaginaPrincipal/usePaginaPrincipal";
import ContentItemListCarousel from "@/components/Carousel/ContentItemListCarousel";
import { YoutubeVideoCard } from "./YoutubeVideoCard";
import ImageCarousel from "@/components/Carousel/ImageCarousel";

type IntroProps = {
  cedemaAbout: string;
  ondeEstamos: string;
  youtube_video_urls: YoutubeVideo[];
  googleMaps: string;
  mensagemPresidente: {
    content: string,
    media: { url: string, alternativeText: string, caption: string }
  }
  aboutMedia: {
    media: {
      url: string, alternativeText: string, caption: string
    }[]
  }
};

export const Intro = ({
  cedemaAbout,
  ondeEstamos,
  youtube_video_urls,
  googleMaps,
  mensagemPresidente,
  aboutMedia
}: IntroProps) => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const getYouTubeId = (url: string) => {
    const match = url.match(
      /(?:youtu\.be\/|youtube\.com.*(?:v=|\/embed\/))([^\&\?\/]+)/
    );
    return match ? match[1] : null;
  };

  const handleVideoClick = (videoUrl: string) => {
    const videoId = getYouTubeId(videoUrl);
    setSelectedVideo(videoId);
  };

  const closeVideo = () => {
    setSelectedVideo(null);
    const modal = document.getElementById("my_modal_2") as HTMLDialogElement;
    if (modal) modal.close();
  };

  useEffect(() => {
    if (selectedVideo) {
      const modal = document.getElementById("my_modal_2") as HTMLDialogElement;
      if (modal) modal.showModal();
    }
  }, [selectedVideo]);

  return (
    <div className="min-h-screen" id="CedemaIntro">
      <section className="custom-container h-full py-24">
        {/* Top Section */}
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-full md:col-span-7">
            <p className="body-xl">
              <span className="heading-8xl font-header text-primary font-extrabold uppercase">
                CEDEMA
              </span>
              <span className="text-neutral ml-0.5"> {cedemaAbout}</span>
            </p>
          </div>
          <div className="col-span-full md:col-span-5">
            <div className="mt-3">
              <ImageCarousel
                aspectRatio="4/3"
                images={aboutMedia.media}
              />
            </div>
          </div>
        </div>

        {/* Onde Estamos Section */}
        <div className="mt-16 grid grid-cols-12 gap-6">
          <div className="col-span-full md:order-2 md:col-span-7">
            <h3 className="text-primary heading-6xl font-extrabold md:text-right">
              ONDE ESTAMOS
            </h3>
            <p className="body-xl m-2 md:text-right">
              <span className="text-neutral">{ondeEstamos}</span>
            </p>
          </div>
          <div className="col-span-full md:order-1 md:col-span-5">
            <iframe
              src={googleMaps}
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Map"
            />
            <p className="text-neutral mt-2 text-center text-sm">
              Rua Varela Silva, Lote 8 – Loja A
            </p>
          </div>
        </div>

        {/* YouTube Section */}
        <div className="mt-16">
          <h3 className="text-primary heading-6xl font-extrabold">
            Conheça o nosso trabalho
          </h3>
          <ContentItemListCarousel
            items={youtube_video_urls}
            renderItem={(video, i) => (
              <YoutubeVideoCard
                key={i}
                video={video}
                onClick={handleVideoClick}
              />
            )}
          />
          <div className="flex justify-end mt-5">
            <CustomButton
              label="Ver Vídeos"
              color="primary"
              icon={<YoutubeLogo size={32} />}
              size="lg"
              path="https://www.youtube.com/@CEDEMAipss"
            />
          </div>
        </div>

        {/* Modal for Video Player */}
        <dialog id="my_modal_2" className="modal">
          <div className="modal-box p-0">
            {selectedVideo && (
              <ReactPlayer
                url={`https://www.youtube.com/watch?v=${selectedVideo}`}
                playing={true}
                controls={true}
                width="100%"
                height="25rem"
              />
            )}
          </div>
          <form method="dialog" className="modal-backdrop">
            <button onClick={closeVideo}>Close</button>
          </form>
        </dialog>
      </section>
    </div>
  );
};
