import React, { useCallback, useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

type Props = {};

type Project = {
  videoUrl: string;
  title: string;
  description: React.ReactNode;
  link?: string;
};

const projectsList: Project[] = [
  {
    videoUrl: "/project_thumbnails/fayva_demo.mp4",
    title: "Digital Ordering Platform (Fayva)",
    description: (
      <>
        Architected Fayva&apos;s QR-powered ordering platform with real-time
        menus, payments, dashboards, and AI-driven personalization.
      </>
    ),
    link: "https://fayvanow.com/",
  },
  {
    videoUrl: "/project_thumbnails/chasegpt_demo.mp4",
    title: "ChatGPT Clone (ChaseGPT)",
    description:
      "Full-stack UI inspired by ChatGPT with clean UX; built fast using AI tooling.",
    link: "https://www.chasegpt.com/",
  },
  {
    videoUrl: "/project_thumbnails/image_generator.mp4",
    title: "ChatGPT AI Image Generator",
    description:
      "AI image generator that turns user prompts into visuals through a full-stack microservices architecture.",
    link: "https://chasegpt-ai-image-generator.vercel.app/",
  },
  {
    videoUrl: "/project_thumbnails/weather_app.mp4",
    title: "ChatGPT Powered Weather App",
    description:
      "A comprehensive weather app with AI-powered weather forecasts.",
    link: "https://chasegpt-ai-weather-app.vercel.app/",
  },
  {
    videoUrl: "/project_thumbnails/flippyhop_demo.mp4",
    title: "FlippyHop",
    description:
      "Original React/Next.js web game built with AI Agentic development, featuring grid-based play, procedural levels, and unlockable characters.",
    link: "https://gikoyo.com/",
  },
  {
    videoUrl: "/project_thumbnails/chunespot_demo.mp4",
    title: "Spotify Clone (ChuneSpot)",
    description:
      "Full-stack music app: auth, audio player, uploads, likes, search, payments, and subscriptions.",
    link: "https://www.chunespot.com/",
  },
  {
    videoUrl: "/project_thumbnails/tweepia_demo.mp4",
    title: "Twitter Clone (Tweepia)",
    description:
      "A full-stack Twitter-inspired clone with authentication, real-time posts, image uploads, and hot toast notifications.",
    link: "https://www.tweepia.com/",
  },
  {
    videoUrl: "/project_thumbnails/ngflix_demo.mp4",
    title: "Netflix-Inspired Site",
    description:
      "Movie and TV discovery site with live data, search, video playback, related titles, and pagination built with Angular.",
    link: "https://ng-flix-jade.vercel.app/",
  },
  {
    videoUrl: "/project_thumbnails/spacex_clone_demo.mp4",
    title: "SpaceX Clone",
    description:
      "A detailed replication of the official SpaceX website, created using pure HTML, CSS, and JavaScript.",
    link: "https://spacex-clone-kappa.vercel.app/",
  },
  {
    videoUrl: "/project_thumbnails/instagramapp_demo.mp4",
    title: "Instagram Clone",
    description:
      "Full-stack Instagram-inspired app with real-time updates, image uploads, and guest login.",
    link: "https://instagramapp-mauve.vercel.app/",
  },
  {
    videoUrl: "/project_thumbnails/golang_bookings_demo.mp4",
    title: "Go Web App for Bookings (Bookings)",
    description:
      "Go booking and reservation app with server-rendered pages and no front-end framework.",
    // link: "https://golangbookings.jayzhou.work/",
  },
  {
    videoUrl: "/project_thumbnails/supabolo_demo.mp4",
    title: "E-commerce Site (Supabolo Clothing)",
    description:
      "Minimal e-commerce storefront with authentication, state management, and Stripe payments.",
    link: "https://supabolo.com/",
  },
];

const resolveMediaUrl = (path: string) => {
  try {
    if (typeof window !== "undefined") {
      return new URL(path, window.location.origin).toString();
    }
    return path;
  } catch {
    return path;
  }
};

const isVideoSourceReady = (video: HTMLVideoElement, videoUrl: string) => {
  const expectedSrc = resolveMediaUrl(videoUrl);
  const attributeSrc = video.getAttribute("src");
  const hasRealSource =
    video.currentSrc === expectedSrc || attributeSrc === videoUrl;
  const hasDimensions = video.videoWidth > 0 && video.videoHeight > 0;

  return hasRealSource && hasDimensions;
};

function Projects({}: Props) {
  const projects = projectsList;
  const shouldReduceMotion = useReducedMotion();
  const projectListRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const [queuedIndexes, setQueuedIndexes] = useState<Set<number>>(
    () => new Set([0, 1]),
  );
  const [visibleIndexes, setVisibleIndexes] = useState<Set<number>>(
    () => new Set(),
  );
  const [failedIndexes, setFailedIndexes] = useState<Set<number>>(
    () => new Set(),
  );
  const [activeIndex, setActiveIndex] = useState(0);
  const [isCarouselInView, setIsCarouselInView] = useState(false);

  useEffect(() => {
    const container = projectListRef.current;
    if (!container) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting || entry.intersectionRatio < 0.6) {
            return;
          }

          const indexAttribute = entry.target.getAttribute("data-index");
          if (indexAttribute === null) {
            return;
          }

          const index = Number(indexAttribute);

          setActiveIndex((previousActive) =>
            previousActive === index ? previousActive : index,
          );

          setQueuedIndexes((previousQueue) => {
            const next = new Set(previousQueue);
            const initialSize = next.size;

            next.add(index);

            const lookAheadIndex = index + 1;
            if (lookAheadIndex < projects.length) {
              next.add(lookAheadIndex);
            }

            if (next.size === initialSize) {
              return previousQueue;
            }

            return next;
          });
        });
      },
      {
        root: container,
        threshold: 0.6,
      },
    );

    cardRefs.current.forEach((card) => {
      if (card) {
        observer.observe(card);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [projects.length]);

  useEffect(() => {
    const container = projectListRef.current;
    if (!container) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry) {
          return;
        }

        setIsCarouselInView(
          entry.isIntersecting && entry.intersectionRatio >= 0.35,
        );
      },
      {
        threshold: [0, 0.35, 0.6, 1],
      },
    );

    observer.observe(container);

    return () => {
      observer.disconnect();
    };
  }, []);

  const markVideoReady = useCallback(
    (index: number, video: HTMLVideoElement) => {
      const project = projects[index];
      if (
        !project ||
        video.error ||
        !isVideoSourceReady(video, project.videoUrl)
      ) {
        return;
      }

      setFailedIndexes((prev) => {
        if (!prev.has(index)) {
          return prev;
        }

        const next = new Set(prev);
        next.delete(index);
        return next;
      });

      setVisibleIndexes((prev) => {
        if (prev.has(index)) {
          return prev;
        }

        const next = new Set(prev);
        next.add(index);
        return next;
      });
    },
    [projects],
  );

  const markVideoFailed = useCallback((index: number, video: HTMLVideoElement) => {
    video.pause();

    setVisibleIndexes((prev) => {
      if (!prev.has(index)) {
        return prev;
      }

      const next = new Set(prev);
      next.delete(index);
      return next;
    });

    setFailedIndexes((prev) => {
      if (prev.has(index)) {
        return prev;
      }

      const next = new Set(prev);
      next.add(index);
      return next;
    });
  }, []);

  useEffect(() => {
    queuedIndexes.forEach((index) => {
      if (visibleIndexes.has(index) || failedIndexes.has(index)) {
        return;
      }

      const video = videoRefs.current[index];
      if (!video) {
        return;
      }

      if (video.error) {
        markVideoFailed(index, video);
        return;
      }

      markVideoReady(index, video);
    });
  }, [failedIndexes, markVideoFailed, markVideoReady, queuedIndexes, visibleIndexes]);

  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (!video) {
        return;
      }

      const shouldPlay =
        isCarouselInView &&
        index === activeIndex &&
        queuedIndexes.has(index) &&
        !failedIndexes.has(index);

      video.muted = true;
      video.defaultMuted = true;
      video.playsInline = true;

      if (shouldPlay) {
        const playAttempt = video.play();
        if (playAttempt !== undefined) {
          playAttempt.catch(() => {
            // Autoplay can be rejected before the file is ready; a later effect retries.
          });
        }
        return;
      }

      if (!video.paused) {
        video.pause();
      }
    });
  }, [
    activeIndex,
    failedIndexes,
    isCarouselInView,
    queuedIndexes,
    visibleIndexes,
  ]);

  const scrollProjectList = (direction: "left" | "right") => {
    if (projectListRef.current) {
      projectListRef.current.scrollBy({
        top: 0,
        left: direction === "left" ? -window.innerWidth : window.innerWidth,
        behavior: shouldReduceMotion ? "auto" : "smooth",
      });
    }
  };

  const mediaMotion = shouldReduceMotion
    ? {
        initial: { opacity: 1 },
        animate: { opacity: 1 },
      }
    : {
        initial: { y: -100, opacity: 0 },
        whileInView: { y: 0, opacity: 1 },
        transition: { duration: 1 },
        viewport: { once: true },
      };

  return (
    <motion.div
      initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0 }}
      whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1 }}
      transition={shouldReduceMotion ? { duration: 0 } : { duration: 1.5 }}
      className="h-screen relative flex flex-col overflow-hidden text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0 "
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] mr-[-20px] text-gray-500 text-2xl">
        Projects
      </h3>

      <button
        onClick={() => scrollProjectList("left")}
        className="absolute left-20 z-30 text-white text-4xl hidden md:block"
      >
        &lt;
      </button>

      <div
        ref={projectListRef}
        className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#D1FE17]/80"
      >
        {projects.map((project, i) => {
          const isActiveCard = activeIndex === i;
          const isVideoQueued = queuedIndexes.has(i);
          const isVideoVisible = visibleIndexes.has(i);
          const isVideoFailed = failedIndexes.has(i);
          const previewState = isVideoFailed
            ? "failed"
            : isVideoVisible
              ? "ready"
              : isVideoQueued
                ? "loading"
                : "idle";
          const shouldShowFallback = isVideoFailed;
          const shouldShowLoader =
            isVideoQueued && !isVideoVisible && !isVideoFailed;
          const shouldShowPoster =
            shouldShowFallback || shouldShowLoader || !isVideoVisible;
          const shouldLoadVideo = isVideoQueued;
          const hasLink = Boolean(project.link);
          const basePosterClasses =
            "absolute inset-0 rounded-xl flex items-center justify-center bg-gray-950/40 transition-opacity";
          const posterClasses =
            shouldShowLoader || shouldShowFallback
              ? basePosterClasses
              : `${basePosterClasses} animate-pulse`;
          const imageWrapperClass =
            "relative flex items-center justify-center min-w-[150px] min-h-[150px]";
          const mediaContent = (
            <>
              {shouldShowPoster && (
                <div
                  className={posterClasses}
                  aria-hidden={shouldShowFallback ? undefined : !shouldShowLoader}
                  role={shouldShowFallback ? "status" : undefined}
                >
                  {shouldShowFallback ? (
                    <span className="px-3 text-center text-sm text-gray-400">
                      Preview unavailable
                    </span>
                  ) : (
                    shouldShowLoader && (
                      <>
                        <span className="sr-only">Loading project preview…</span>
                        <span
                          aria-hidden="true"
                          className="h-12 w-12 rounded-full border-4 border-[#D1FE17]/70 border-t-transparent animate-spin"
                        />
                      </>
                    )
                  )}
                </div>
              )}
              <motion.video
                {...mediaMotion}
                ref={(element) => {
                  videoRefs.current[i] = element;
                  if (element) {
                    element.muted = true;
                    element.defaultMuted = true;
                    element.playsInline = true;
                  }
                }}
                src={shouldLoadVideo ? project.videoUrl : undefined}
                muted
                loop
                playsInline
                controls={false}
                autoPlay={
                  isActiveCard && isCarouselInView && !isVideoFailed
                }
                preload={isActiveCard ? "auto" : "metadata"}
                disablePictureInPicture
                aria-hidden="true"
                onLoadedData={(event) => {
                  markVideoReady(i, event.currentTarget);
                }}
                onCanPlay={(event) => {
                  markVideoReady(i, event.currentTarget);
                }}
                onError={(event) => {
                  markVideoFailed(i, event.currentTarget);
                }}
                className={`max-w-[200px] max-h-[200px] portrait:max-w-[350px] portrait:max-h-[300px] sm:max-w-[150px] sm:max-h-[150px] md:max-w-[300px] md:max-h-[300px] lg:max-w-[400px] lg:max-h-[400px] xl:max-w-[500px] xl:max-h-[500px] 2xl:max-w-[600px] 2xl:max-h-[600px] object-cover ${
                  isVideoVisible && !isVideoFailed ? "" : "opacity-0"
                }`}
              />
            </>
          );

          return (
            <div
              key={i}
              data-index={i}
              data-active={isActiveCard ? "true" : undefined}
              data-preview-state={previewState}
              ref={(el) => {
                cardRefs.current[i] = el;
              }}
              className="w-screen flex-shrink-0 snap-center flex flex-col space-y-3 sm:space-y-5 items-center justify-center p-4 sm:p-8 md:p-20 lg:p-44 h-screen"
            >
              {hasLink ? (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={imageWrapperClass}
                >
                  {mediaContent}
                </a>
              ) : (
                <div className={imageWrapperClass} aria-disabled="true">
                  {mediaContent}
                </div>
              )}
              <div className="space-y-3 sm:space-y-5 px-2 sm:px-4 md:px-10 max-w-6xl">
                {hasLink ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <h4 className="text-lg sm:text-xl md:text-2xl lg:text-4xl font-semibold text-center">
                      <span className="underline decoration-[#D1FE17]/50">
                        Project {i + 1} of {projects.length}:
                      </span>{" "}
                      {project.title}
                    </h4>
                  </a>
                ) : (
                  <div aria-hidden className="cursor-default">
                    <h4 className="text-lg sm:text-xl md:text-2xl lg:text-4xl font-semibold text-center">
                      <span className="underline decoration-[#D1FE17]/50">
                        Project {i + 1} of {projects.length}:
                      </span>{" "}
                      {project.title}
                    </h4>
                  </div>
                )}

                <p
                  className="text-sm sm:text-base md:text-lg text-center max-h-32 overflow-y-auto scrollbar-thin scrollbar-thumb-white/40 scrollbar-track-transparent focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D1FE17]/60 sm:max-h-none sm:overflow-visible"
                  tabIndex={0}
                >
                  {project.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <button
        onClick={() => scrollProjectList("right")}
        className="absolute right-20 z-30 text-white text-4xl hidden md:block"
      >
        &gt;
      </button>

      {/* Background stripe */}
      <div className="absolute w-full 12pro:top-[30%] sm:top-[25%] bg-[#D1FE17]/10 left-0 s8:h-[300px] 12pro:h-[400px] sm:h-[500px] -skew-y-12" />
    </motion.div>
  );
}

export default Projects;
