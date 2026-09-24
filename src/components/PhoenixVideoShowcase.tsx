import { useRef, useState } from "react";
import { ExternalLink, Sparkles } from "lucide-react";
import { phoenix } from "@/data/content";

export function PhoenixVideoShowcase() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [activeChapterIndex, setActiveChapterIndex] = useState<number>(0);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [duration, setDuration] = useState<number>(50);

  const seekToChapter = (chapterTime: number, index: number) => {
    if (!videoRef.current) return;
    videoRef.current.currentTime = chapterTime;
    videoRef.current.play();
    setIsPlaying(true);
    setActiveChapterIndex(index);
  };

  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    const curr = videoRef.current.currentTime;
    setCurrentTime(curr);

    // Update active chapter based on time
    if (phoenix.videoChapters) {
      for (let i = phoenix.videoChapters.length - 1; i >= 0; i--) {
        if (curr >= phoenix.videoChapters[i].time) {
          setActiveChapterIndex(i);
          break;
        }
      }
    }
  };

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m}:${s < 10 ? "0" : ""}${s}`;
  };

  return (
    <div className="mt-14 w-full rounded-3xl border border-amber-500/30 bg-slate-950 text-slate-100 p-4 sm:p-7 backdrop-blur-xl shadow-2xl relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-tr from-amber-500/10 via-transparent to-orange-500/10 blur-2xl" />

      {/* Header Bar */}
      <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-800">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-rose-500/15 border border-rose-500/30 text-rose-400 font-mono2 text-xs">
            <span className={`w-2 h-2 rounded-full bg-rose-500 ${isPlaying ? "animate-ping" : ""}`} />
            <span className="font-semibold tracking-wider uppercase">
              {isPlaying ? "PLAYING LIVE // 1080P 60FPS" : "DEMO VIDEO // 1080P 60FPS"}
            </span>
          </div>
          <span className="font-mono2 text-xs text-slate-400 hidden sm:inline">
            Mission-Critical Datacenter & Warehouse Scenarios
          </span>
        </div>

        <div className="flex items-center gap-3">
          <a
            href={phoenix.videoSrc || "/Phoenix_Demo.mp4"}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-700/70 text-xs font-mono2 text-slate-300 hover:text-amber-400 hover:border-amber-500/40 transition-colors"
          >
            <ExternalLink size={13} /> Fullscreen Stream
          </a>
        </div>
      </div>

      {/* Main Video Screen Container */}
      <div className="relative z-10 mt-4 rounded-2xl overflow-hidden bg-black border border-slate-800 shadow-inner group">
        <video
          ref={videoRef}
          src={phoenix.videoSrc || "/Phoenix_Demo.mp4"}
          poster={phoenix.videoPoster || "/Phoenix_Overview.png"}
          playsInline
          controls
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          onTimeUpdate={handleTimeUpdate}
          onLoadedMetadata={() => {
            if (videoRef.current) setDuration(videoRef.current.duration || 50);
          }}
          className="w-full aspect-video object-cover"
        />
      </div>

      {/* Interactive Chapter Jump Navigation Bar */}
      {phoenix.videoChapters && (
        <div className="relative z-10 mt-5">
          <div className="flex items-center justify-between mb-2">
            <span className="font-mono2 text-xs text-amber-400/90 font-semibold uppercase tracking-wider flex items-center gap-1.5">
              <Sparkles size={13} /> Mission Key Sequence (Click to jump):
            </span>
            <span className="font-mono2 text-[11px] text-slate-400">
              {formatTime(currentTime)} / {formatTime(duration)}
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
            {phoenix.videoChapters.map((chapter, idx) => {
              const isActive = activeChapterIndex === idx;
              return (
                <button
                  key={chapter.tag}
                  onClick={() => seekToChapter(chapter.time, idx)}
                  className={`text-left p-2.5 rounded-xl border transition-all ${
                    isActive
                      ? "bg-amber-500/20 border-amber-500/50 text-white shadow-lg shadow-amber-500/10"
                      : "bg-slate-900/60 border-slate-800 hover:border-slate-700 text-slate-400 hover:text-slate-200"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono2 text-[10px] font-bold text-amber-400">
                      {chapter.tag}
                    </span>
                    {isActive && (
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                    )}
                  </div>
                  <div className="mt-1 font-display font-semibold text-xs text-slate-200 line-clamp-1">
                    {chapter.title}
                  </div>
                  <div className="mt-0.5 text-[10px] text-slate-500 line-clamp-1">
                    {chapter.desc}
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Video Context Footnote */}
      <div className="relative z-10 mt-4 pt-4 border-t border-slate-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-slate-400">
        <p className="leading-relaxed">
          🎥 <strong>Multi-Camera Telemetry Recording:</strong> Features Gazebo Harmonic 3D simulation, live OBS 3-viewport layout, Web Command Center gauges, and forward AI neural bounding boxes.
        </p>
        <span className="font-mono2 text-[11px] text-slate-500 whitespace-nowrap">
          Resolution: 1920x1080 @ 60fps
        </span>
      </div>
    </div>
  );
}
