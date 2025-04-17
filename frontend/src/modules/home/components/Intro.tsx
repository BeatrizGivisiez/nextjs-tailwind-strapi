"use client";
import { useState, useEffect } from "react";
import { YoutubeLogo } from "phosphor-react";
import image1 from "@/assets/HeroBG.jpg";
import Image from "next/image";
import ReactPlayer from "react-player";
import CustomButton from "@/components/Buttons/CustomButton";
import { YoutubeVideo } from "@/hooks/PaginaPrincipal/usePaginaPrincipal";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

type IntroProps = {
  cedemaAbout: string;
  ondeEstamos: string;
  youtube_video_urls: YoutubeVideo[];
  googleMaps: string;
};

export const Intro = ({
  cedemaAbout,
  ondeEstamos,
  youtube_video_urls,
  googleMaps,
}: IntroProps) => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  // Utility to extract YouTube ID from URL
  const getYouTubeId = (url: string) => {
    const match = url.match(
      /(?:youtu\.be\/|youtube\.com.*(?:v=|\/embed\/))([^\&\?\/]+)/
    );
    return match ? match[1] : null;
  };

  // Handle opening the video player and modal
  const handleVideoClick = (videoUrl: string) => {
    const videoId = getYouTubeId(videoUrl);
    setSelectedVideo(videoId);
  };

  // Close video and modal
  const closeVideo = () => {
    setSelectedVideo(null);
    const modal = document.getElementById("my_modal_2") as HTMLDialogElement;
    if (modal) {
      modal.close(); // Close the modal
    }
  };

  // Ensure the modal opens immediately when a video is selected
  useEffect(() => {
    if (selectedVideo) {
      const modal = document.getElementById("my_modal_2") as HTMLDialogElement;
      if (modal) {
        modal.showModal(); // Show modal
      }
    }
  }, [selectedVideo]); // This effect runs whenever selectedVideo changes

  return (
    <div className="min-h-screen">
      <section className="custom-container h-full py-24">
        {/* Top Section */}
        <div className="grid grid-cols-12">
          <div className="col-span-full md:col-span-7">
            <p className="body-2xl">
              <span className="heading-8xl font-header text-primary font-extrabold uppercase">
                CEDEMA
              </span>
              <span className="text-neutral ml-0.5"> {cedemaAbout}</span>
            </p>
          </div>
          <div className="col-span-full md:col-span-5">
            <div className="mt-3 grid grid-cols-2 gap-3 md:mt-0 md:grid-cols-2">
              {[1, 2, 3, 4].map((_, index) => (
                <Image
                  key={index}
                  src={image1}
                  alt="Image"
                  className="h-64 cursor-pointer rounded-lg object-cover lg:h-auto"
                  onClick={
                    () => handleVideoClick("YOUR_YOUTUBE_URL") // Replace with actual YouTube URL
                  }
                />
              ))}
            </div>
          </div>
        </div>

        {/* Onde Estamos Section */}
        <div className="mt-16 grid grid-cols-12">
          <div className="col-span-full md:order-2 md:col-span-7">
            <h3 className="text-primary heading-6xl font-extrabold md:text-right">
              ONDE ESTAMOS
            </h3>
            <p className="body-2xl m-2 md:text-right">
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

        {/* YouTube Section with Swiper */}
        <div className="mt-16">
          <h3 className="text-primary heading-6xl font-extrabold">
            Conheça o nosso trabalho
          </h3>
          <Swiper
            slidesPerView={5}
            spaceBetween={15}
            pagination={{ clickable: true }}
            modules={[Pagination]}
            className="mySwiper mt-10 pb-10"
            breakpoints={{
              0: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 5,
              },
            }}
          >
            {Array.isArray(youtube_video_urls) &&
            youtube_video_urls.length > 0 ? (
              youtube_video_urls.map((video, i) => {
                return (
                  <SwiperSlide key={i} className="pb-10">
                    <div
                      className="h-[200px] w-[300px] cursor-pointer pr-10"
                      onClick={() => handleVideoClick(video.YoutubeUrl)}
                    >
                      <Image
                        src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${video.Thumbnail.url}`}
                        alt={`Thumbnail for ${video.Title}`}
                        className="rounded-lg object-cover"
                        fill
                      />
                      <div className="absolute top-0 left-0 z-[1] h-full w-full">
                        <div className="flex h-full items-center justify-center">
                          <YoutubeLogo
                            weight="fill"
                            color="var(--color-error)"
                            size={80}
                          />
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })
            ) : (
              <div>No videos available</div>
            )}
          </Swiper>
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

        {/* Modal with ReactPlayer */}
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
