/** Inline recorded demo. One mounted <video> serves every state, so play, loading and retry never remount it. */
import { useRef, useState } from "react";

type Phase = "idle" | "loading" | "playing" | "paused" | "error";

export default function RecordedDemo({
  name,
  image,
  compact = false,
}: {
  name: string;
  image: string;
  compact?: boolean;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [phase, setPhase] = useState<Phase>("idle");

  // Called straight from the click/key handler so the browser counts it as the user's gesture.
  const start = () => {
    const video = videoRef.current;
    if (!video) return;
    setPhase("loading");
    const attempt = video.play();
    if (attempt) {
      attempt.catch((error: unknown) => {
        // An interrupted request (pause or reload) is not a failure.
        if (error instanceof DOMException && error.name === "AbortError") return;
        setPhase("error");
      });
    }
  };

  const retry = () => {
    const video = videoRef.current;
    if (!video) return;
    video.load();
    start();
  };

  return (
    <div
      className={`recorded-demo${compact ? " recorded-demo-compact" : ""}`}
      data-phase={phase}
    >
      <video
        ref={videoRef}
        src={`/project_thumbnails/${image}.mp4`}
        poster={`/project_stills/${image}.jpg`}
        controls
        playsInline
        preload="none"
        aria-label={`${name} recorded demonstration`}
        onPlay={() => setPhase((p) => (p === "idle" || p === "paused" ? "loading" : p))}
        onWaiting={() => setPhase((p) => (p === "playing" ? "loading" : p))}
        onPlaying={() => setPhase("playing")}
        onPause={() => setPhase((p) => (p === "error" ? p : "paused"))}
        onError={() => setPhase("error")}
      >
        Your browser does not support video.
      </video>
      {phase === "idle" && (
        <div className="recorded-demo-overlay">
          <button
            type="button"
            className="recorded-demo-play"
            onClick={start}
            aria-label={`Play ${name} recorded demo`}
          >
            <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              <path d="M8 5.5v13l11-6.5z" />
            </svg>
            <span>Play demo</span>
          </button>
        </div>
      )}
      <div className="recorded-demo-status" role="status" aria-live="polite">
        {phase === "loading" && <span>Loading recorded demo…</span>}
        {phase === "error" && (
          <>
            <span>This recording could not be played.</span>
            <button type="button" onClick={retry}>
              Try again
            </button>
          </>
        )}
      </div>
    </div>
  );
}
