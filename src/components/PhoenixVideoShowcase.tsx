import { phoenix } from "@/data/content";

export function PhoenixVideoShowcase() {
  return (
    <div className="mt-12 w-full rounded-3xl card-dark p-3.5 sm:p-6 backdrop-blur-xl relative overflow-hidden">
      {/* Header bar */}
      <div className="flex items-center justify-between gap-3 pb-3 sm:pb-4 border-b border-slate-200 dark:border-slate-800/80 px-1 sm:px-2">
        <div className="flex items-center gap-2.5">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
          <span className="font-mono2 text-xs text-amber-600 dark:text-amber-400 font-semibold tracking-wider uppercase">
            // Demonstration Video
          </span>
          <span className="text-slate-400 dark:text-slate-500 text-xs hidden sm:inline">
            · Gazebo Harmonic & Web Command Center HUD
          </span>
        </div>
        <span className="font-mono2 text-[11px] text-slate-500 dark:text-slate-400">
          1080p 60fps
        </span>
      </div>

      {/* Clean Native Video Player */}
      <div className="mt-3.5 sm:mt-4 rounded-2xl overflow-hidden bg-black border border-slate-200 dark:border-slate-800 shadow-md">
        <video
          src={phoenix.videoSrc || "/Phoenix_Demo.mp4"}
          poster={phoenix.videoPoster || "/Phoenix_Overview.png"}
          playsInline
          controls
          preload="metadata"
          className="w-full aspect-video object-cover"
        />
      </div>

      {/* Caption note */}
      <p className="mt-3.5 px-1 sm:px-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
        Full mission demonstration showcasing split-screen Gazebo 3D simulation, real-time Web Command Center telemetry, and forward robot camera tracking.
      </p>
    </div>
  );
}
