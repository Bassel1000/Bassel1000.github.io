import { useState, useEffect, useRef, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Play,
  Pause,
  RotateCcw,
  Activity,
  Cpu,
  Navigation,
  Crosshair,
  Flame,
  Droplets,
  Radio,
  Layers,
  Sliders,
  Gauge,
  Eye,
  Terminal,
} from "lucide-react";

type ActiveTab = "telemetry" | "architecture" | "radar";

export function PhoenixDynamicsGraph() {
  const [activeTab, setActiveTab] = useState<ActiveTab>("telemetry");

  return (
    <div className="mt-16 w-full rounded-3xl border border-amber-500/25 bg-slate-900/85 dark:bg-slate-950/90 text-slate-100 p-5 sm:p-8 backdrop-blur-xl shadow-2xl relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="pointer-events-none absolute -top-24 -left-24 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl" />

      {/* Header with Title & Navigation Tabs */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-800/80">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-mono2 text-xs uppercase tracking-widest text-amber-400/90 font-semibold">
              Live Mission Dynamics & Telemetry
            </span>
          </div>
          <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-white mt-1">
            Phoenix Cybernetic System Dynamics
          </h3>
          <p className="text-sm text-slate-400 mt-1 max-w-xl">
            Interactive analytical telemetry, distributed 3-node bus topology, and 2-DOF standoff targeting kinematics.
          </p>
        </div>

        {/* Tab Controls */}
        <div className="inline-flex p-1 rounded-2xl bg-slate-800/80 border border-slate-700/60 self-start md:self-auto">
          <button
            onClick={() => setActiveTab("telemetry")}
            className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
              activeTab === "telemetry"
                ? "bg-gradient-to-r from-amber-500 to-orange-600 text-white shadow-lg shadow-orange-500/25"
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            <Activity size={15} /> Kinematics Telemetry
          </button>
          <button
            onClick={() => setActiveTab("architecture")}
            className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
              activeTab === "architecture"
                ? "bg-gradient-to-r from-amber-500 to-orange-600 text-white shadow-lg shadow-orange-500/25"
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            <Layers size={15} /> 3-Node Topology
          </button>
          <button
            onClick={() => setActiveTab("radar")}
            className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
              activeTab === "radar"
                ? "bg-gradient-to-r from-amber-500 to-orange-600 text-white shadow-lg shadow-orange-500/25"
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            <Crosshair size={15} /> Standoff & 2-DOF Turret
          </button>
        </div>
      </div>

      {/* Tab Panels */}
      <div className="pt-6">
        <AnimatePresence mode="wait">
          {activeTab === "telemetry" && (
            <motion.div
              key="telemetry"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
            >
              <TelemetryPanel />
            </motion.div>
          )}

          {activeTab === "architecture" && (
            <motion.div
              key="architecture"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
            >
              <ArchitectureTopologyPanel />
            </motion.div>
          )}

          {activeTab === "radar" && (
            <motion.div
              key="radar"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
            >
              <RadarTurretPanel />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

/* ═════════════════════════════════════════════════════════════════════════════
   TAB 1: KINEMATICS TELEMETRY CURVES & REAL-TIME MISSION DYNAMICS
   ═════════════════════════════════════════════════════════════════════════════ */
function TelemetryPanel() {
  const [time, setTime] = useState<number>(28); // Mission timestamp (0 to 50s)
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [activeSignal, setActiveSignal] = useState<"all" | "distance" | "velocity" | "ai" | "pump">("all");
  const animRef = useRef<number | null>(null);
  const lastTimestampRef = useRef<number>(0);

  // Playback animation loop
  useEffect(() => {
    if (!isPlaying) {
      if (animRef.current) cancelAnimationFrame(animRef.current);
      return;
    }

    const step = (timestamp: number) => {
      if (!lastTimestampRef.current) lastTimestampRef.current = timestamp;
      const delta = (timestamp - lastTimestampRef.current) / 1000;
      lastTimestampRef.current = timestamp;

      setTime((prev) => {
        const next = prev + delta * 3.5; // Smooth progression
        if (next >= 50) {
          setIsPlaying(false);
          return 50;
        }
        return next;
      });

      animRef.current = requestAnimationFrame(step);
    };

    lastTimestampRef.current = performance.now();
    animRef.current = requestAnimationFrame(step);

    return () => {
      if (animRef.current) cancelAnimationFrame(animRef.current);
    };
  }, [isPlaying]);

  // Compute telemetry values from current timestamp (0 to 50s)
  const telemetry = useMemo(() => {
    const t = time;

    // 1. Distance to fire (m): starts at 4.5m, decreases to 0.30m at 26s, stays at 0.30m
    let distance = 4.5;
    if (t < 8) {
      distance = 4.5 - (t / 8) * 1.3; // 4.5 -> 3.2
    } else if (t < 17) {
      distance = 3.2 - ((t - 8) / 9) * 0.8; // 3.2 -> 2.4
    } else if (t < 26) {
      distance = 2.4 - ((t - 17) / 9) * 2.1; // 2.4 -> 0.30m
    } else if (t < 34) {
      distance = 0.3; // Standoff lock enforced!
    } else {
      distance = 0.3 + ((t - 34) / 16) * 3.5; // Retreat / Warehouse patrol
    }

    // 2. Linear Velocity (m/s)
    let velocity = 0.35;
    if (t < 8) {
      velocity = 0.35 + Math.sin(t * 1.2) * 0.02;
    } else if (t < 12) {
      velocity = 0.32; // Slight slowdown upon casualty sight
    } else if (t >= 17 && t < 22) {
      velocity = 0.22; // Nav2 obstacle replanning around crash cart
    } else if (t >= 26 && t <= 34) {
      velocity = 0.0; // Complete Standoff Lock Stop
    } else if (t > 34) {
      velocity = 0.38 + Math.sin(t) * 0.02; // High-bay warehouse traverse
    }

    // 3. AI Flame Confidence (%)
    let flameConf = 0;
    if (t >= 6 && t < 12) {
      flameConf = ((t - 6) / 6) * 88;
    } else if (t >= 12 && t < 28) {
      flameConf = 92 + Math.sin(t * 2) * 4;
    } else if (t >= 28 && t <= 34) {
      flameConf = Math.max(0, 95 - ((t - 28) / 6) * 95); // Extinguishing!
    } else {
      flameConf = 0;
    }

    // 4. Casualty Fallen AI (%)
    let fallenConf = 0;
    if (t >= 7 && t <= 20) {
      fallenConf = Math.min(94.2, 70 + (t - 7) * 4);
    } else if (t > 20 && t <= 25) {
      fallenConf = Math.max(0, 94.2 - (t - 20) * 18);
    }

    // 5. 24V Diaphragm Pump Pressure (PSI / Active State)
    let pumpActive = false;
    let pumpPressure = 0;
    if (t >= 26.5 && t <= 33.5) {
      pumpActive = true;
      pumpPressure = 85 + Math.sin(t * 5) * 5;
    }

    // 6. Mission Stage Name & Color
    let stageName = "Datacenter Cold-Aisle Patrol";
    let stageBadge = "bg-sky-500/20 text-sky-400 border-sky-500/30";
    if (t >= 8 && t < 17) {
      stageName = "Casualty Identified (FALLEN 94%)";
      stageBadge = "bg-purple-500/20 text-purple-400 border-purple-500/30";
    } else if (t >= 17 && t < 26) {
      stageName = "Nav2 Dynamic Costmap Replanning";
      stageBadge = "bg-amber-500/20 text-amber-400 border-amber-500/30";
    } else if (t >= 26 && t <= 34) {
      stageName = "30cm Standoff Lock & 24V Water Jet";
      stageBadge = "bg-rose-500/20 text-rose-400 border-rose-500/30 animate-pulse";
    } else if (t > 34 && t < 44) {
      stageName = "Warehouse RF2O Laser Odometry";
      stageBadge = "bg-teal-500/20 text-teal-400 border-teal-500/30";
    } else if (t >= 44) {
      stageName = "Incident Closed — System Nominal";
      stageBadge = "bg-emerald-500/20 text-emerald-400 border-emerald-500/30";
    }

    return {
      distance: Math.max(0.3, distance),
      velocity: Math.max(0, velocity),
      flameConf: Math.round(flameConf),
      fallenConf: Math.round(fallenConf),
      pumpActive,
      pumpPressure: Math.round(pumpPressure),
      stageName,
      stageBadge,
    };
  }, [time]);

  // Generate continuous SVG paths for the 50s duration
  const svgWidth = 800;
  const svgHeight = 240;
  const paddingX = 40;
  const paddingY = 25;

  const pointsCount = 100;
  const dataPoints = useMemo(() => {
    const pts = [];
    for (let i = 0; i <= pointsCount; i++) {
      const simT = (i / pointsCount) * 50;

      // Distance (range: 0 to 5m -> mapped to height)
      let d = 4.5;
      if (simT < 8) d = 4.5 - (simT / 8) * 1.3;
      else if (simT < 17) d = 3.2 - ((simT - 8) / 9) * 0.8;
      else if (simT < 26) d = 2.4 - ((simT - 17) / 9) * 2.1;
      else if (simT < 34) d = 0.3;
      else d = 0.3 + ((simT - 34) / 16) * 3.5;

      // Velocity (range: 0 to 0.45 m/s)
      let v = 0.35;
      if (simT < 8) v = 0.35;
      else if (simT < 17) v = 0.32;
      else if (simT < 26) v = 0.22;
      else if (simT <= 34) v = 0.0;
      else v = 0.38;

      // AI Flame (range: 0 to 100%)
      let fc = 0;
      if (simT >= 6 && simT < 12) fc = ((simT - 6) / 6) * 88;
      else if (simT >= 12 && simT < 28) fc = 94;
      else if (simT >= 28 && simT <= 34) fc = Math.max(0, 94 - ((simT - 28) / 6) * 94);

      // Pump (range: 0 to 100 PSI)
      let pp = simT >= 26.5 && simT <= 33.5 ? 85 : 0;

      pts.push({ simT, d, v, fc, pp });
    }
    return pts;
  }, []);

  // Helper to map (t, val) to SVG (x, y)
  const mapX = (t: number) => paddingX + (t / 50) * (svgWidth - paddingX * 2);
  const mapYDistance = (d: number) =>
    paddingY + (1 - Math.min(5, d) / 5) * (svgHeight - paddingY * 2);
  const mapYVelocity = (v: number) =>
    paddingY + (1 - Math.min(0.5, v) / 0.5) * (svgHeight - paddingY * 2);
  const mapYPercent = (pct: number) =>
    paddingY + (1 - pct / 100) * (svgHeight - paddingY * 2);

  // SVG Paths
  const distancePath = dataPoints
    .map((p, i) => `${i === 0 ? "M" : "L"} ${mapX(p.simT)} ${mapYDistance(p.d)}`)
    .join(" ");

  const velocityPath = dataPoints
    .map((p, i) => `${i === 0 ? "M" : "L"} ${mapX(p.simT)} ${mapYVelocity(p.v)}`)
    .join(" ");

  const flamePath = dataPoints
    .map((p, i) => `${i === 0 ? "M" : "L"} ${mapX(p.simT)} ${mapYPercent(p.fc)}`)
    .join(" ");

  const pumpPath = dataPoints
    .map((p, i) => `${i === 0 ? "M" : "L"} ${mapX(p.simT)} ${mapYPercent(p.pp)}`)
    .join(" ");

  const currentX = mapX(time);

  return (
    <div className="space-y-6">
      {/* Real-time Telemetry Digital Gauges Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {/* Gauge 1: Distance to Flame */}
        <div
          onClick={() => setActiveSignal("distance")}
          className={`p-4 rounded-2xl border transition-all cursor-pointer ${
            activeSignal === "distance" || activeSignal === "all"
              ? "bg-slate-800/80 border-amber-500/40 shadow-lg shadow-amber-500/10"
              : "bg-slate-900/40 border-slate-800 opacity-60"
          }`}
        >
          <div className="flex items-center justify-between text-xs text-amber-400 font-mono2">
            <span className="flex items-center gap-1.5">
              <Navigation size={13} /> DISTANCE (m)
            </span>
            {telemetry.distance <= 0.35 && (
              <span className="text-[10px] px-1.5 py-0.5 rounded bg-rose-500/20 text-rose-300 font-bold animate-pulse">
                STANDOFF LOCK
              </span>
            )}
          </div>
          <div className="mt-2 text-2xl sm:text-3xl font-bold font-mono2 text-white">
            {telemetry.distance.toFixed(2)}
            <span className="text-sm font-normal text-slate-400 ml-1">m</span>
          </div>
          <div className="mt-2 text-[11px] text-slate-400 flex items-center justify-between">
            <span>Standoff Limit: 0.30m</span>
            <span className={telemetry.distance <= 0.35 ? "text-rose-400 font-semibold" : "text-emerald-400"}>
              {telemetry.distance <= 0.35 ? "LOCKED" : "APPROACH"}
            </span>
          </div>
        </div>

        {/* Gauge 2: Linear Velocity */}
        <div
          onClick={() => setActiveSignal("velocity")}
          className={`p-4 rounded-2xl border transition-all cursor-pointer ${
            activeSignal === "velocity" || activeSignal === "all"
              ? "bg-slate-800/80 border-sky-500/40 shadow-lg shadow-sky-500/10"
              : "bg-slate-900/40 border-slate-800 opacity-60"
          }`}
        >
          <div className="flex items-center justify-between text-xs text-sky-400 font-mono2">
            <span className="flex items-center gap-1.5">
              <Gauge size={13} /> VELOCITY (v)
            </span>
            <span className="text-[10px] px-1.5 py-0.5 rounded bg-sky-500/20 text-sky-300">RF2O ODIM</span>
          </div>
          <div className="mt-2 text-2xl sm:text-3xl font-bold font-mono2 text-white">
            {telemetry.velocity.toFixed(2)}
            <span className="text-sm font-normal text-slate-400 ml-1">m/s</span>
          </div>
          <div className="mt-2 text-[11px] text-slate-400 flex items-center justify-between">
            <span>Slip Comp: 100%</span>
            <span className="text-sky-300 font-mono2">BTS7960</span>
          </div>
        </div>

        {/* Gauge 3: AI Confidence */}
        <div
          onClick={() => setActiveSignal("ai")}
          className={`p-4 rounded-2xl border transition-all cursor-pointer ${
            activeSignal === "ai" || activeSignal === "all"
              ? "bg-slate-800/80 border-orange-500/40 shadow-lg shadow-orange-500/10"
              : "bg-slate-900/40 border-slate-800 opacity-60"
          }`}
        >
          <div className="flex items-center justify-between text-xs text-orange-400 font-mono2">
            <span className="flex items-center gap-1.5">
              <Flame size={13} /> AI FLAME CONF
            </span>
            <span className="text-[10px] px-1.5 py-0.5 rounded bg-orange-500/20 text-orange-300">PyTorch</span>
          </div>
          <div className="mt-2 text-2xl sm:text-3xl font-bold font-mono2 text-white">
            {telemetry.flameConf}
            <span className="text-sm font-normal text-slate-400 ml-1">%</span>
          </div>
          <div className="mt-2 text-[11px] text-slate-400 flex items-center justify-between">
            <span>Casualty: {telemetry.fallenConf}%</span>
            <span className={telemetry.fallenConf > 80 ? "text-purple-400 font-semibold" : "text-slate-400"}>
              {telemetry.fallenConf > 80 ? "TECH-4 FALLEN" : "CLEAR"}
            </span>
          </div>
        </div>

        {/* Gauge 4: 24V Diaphragm Pump */}
        <div
          onClick={() => setActiveSignal("pump")}
          className={`p-4 rounded-2xl border transition-all cursor-pointer ${
            activeSignal === "pump" || activeSignal === "all"
              ? "bg-slate-800/80 border-cyan-500/40 shadow-lg shadow-cyan-500/10"
              : "bg-slate-900/40 border-slate-800 opacity-60"
          }`}
        >
          <div className="flex items-center justify-between text-xs text-cyan-400 font-mono2">
            <span className="flex items-center gap-1.5">
              <Droplets size={13} /> PUMP RELAY (24V)
            </span>
            <span
              className={`text-[10px] px-1.5 py-0.5 rounded font-bold ${
                telemetry.pumpActive
                  ? "bg-cyan-500 text-slate-950 animate-pulse"
                  : "bg-slate-700 text-slate-300"
              }`}
            >
              {telemetry.pumpActive ? "SPRAY ACTIVE" : "STANDBY"}
            </span>
          </div>
          <div className="mt-2 text-2xl sm:text-3xl font-bold font-mono2 text-white">
            {telemetry.pumpPressure}
            <span className="text-sm font-normal text-slate-400 ml-1">PSI</span>
          </div>
          <div className="mt-2 text-[11px] text-slate-400 flex items-center justify-between">
            <span>Safety Interlock: Hold</span>
            <span className={telemetry.pumpActive ? "text-cyan-400 font-semibold" : "text-slate-500"}>
              {telemetry.pumpActive ? "JET DISCHARGE" : "ISOLATED"}
            </span>
          </div>
        </div>
      </div>

      {/* SVG Interactive Multi-Signal Dynamic Graph */}
      <div className="relative rounded-2xl bg-slate-950/90 border border-slate-800 p-4 overflow-hidden">
        {/* Header HUD overlay */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-2 font-mono2 text-xs">
          <div className="flex items-center gap-2">
            <span className="text-slate-400">MISSION SCENARIO:</span>
            <span className={`px-2.5 py-1 rounded-full border text-[11px] font-semibold ${telemetry.stageBadge}`}>
              {telemetry.stageName}
            </span>
          </div>
          <div className="flex items-center gap-4 text-slate-400 text-[11px]">
            <span className="flex items-center gap-1.5">
              <span className="w-2.5 h-1 rounded bg-amber-400 inline-block" /> Distance
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2.5 h-1 rounded bg-sky-400 inline-block" /> Speed (v)
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2.5 h-1 rounded bg-orange-500 inline-block" /> Flame AI %
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2.5 h-1 rounded bg-cyan-400 inline-block" /> Pump PSI
            </span>
          </div>
        </div>

        {/* SVG Drawing Canvas */}
        <div className="w-full overflow-x-auto">
          <svg
            viewBox={`0 0 ${svgWidth} ${svgHeight}`}
            className="w-full h-48 sm:h-60 select-none"
          >
            <defs>
              <linearGradient id="distGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.0" />
              </linearGradient>
              <linearGradient id="pumpGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.35" />
                <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.0" />
              </linearGradient>
            </defs>

            {/* Grid Lines */}
            {[0, 25, 50, 75, 100].map((pct) => {
              const y = paddingY + (pct / 100) * (svgHeight - paddingY * 2);
              return (
                <line
                  key={pct}
                  x1={paddingX}
                  y1={y}
                  x2={svgWidth - paddingX}
                  y2={y}
                  stroke="#334155"
                  strokeWidth="0.8"
                  strokeDasharray="4 4"
                  opacity="0.35"
                />
              );
            })}

            {/* Vertical Time Markers */}
            {[0, 10, 20, 30, 40, 50].map((sec) => {
              const x = mapX(sec);
              return (
                <g key={sec}>
                  <line
                    x1={x}
                    y1={paddingY}
                    x2={x}
                    y2={svgHeight - paddingY}
                    stroke="#334155"
                    strokeWidth="0.8"
                    strokeDasharray="2 4"
                    opacity="0.4"
                  />
                  <text
                    x={x}
                    y={svgHeight - 8}
                    fill="#64748b"
                    fontSize="10"
                    textAnchor="middle"
                    fontFamily="monospace"
                  >
                    {sec}s
                  </text>
                </g>
              );
            })}

            {/* Safe Standoff 0.30m Reference Threshold Line */}
            <g>
              <line
                x1={paddingX}
                y1={mapYDistance(0.3)}
                x2={svgWidth - paddingX}
                y2={mapYDistance(0.3)}
                stroke="#ef4444"
                strokeWidth="1.5"
                strokeDasharray="3 3"
                opacity="0.8"
              />
              <text
                x={svgWidth - paddingX - 6}
                y={mapYDistance(0.3) - 6}
                fill="#f87171"
                fontSize="9"
                textAnchor="end"
                fontFamily="monospace"
                fontWeight="bold"
              >
                0.30m SAFE STANDOFF LOCK
              </text>
            </g>

            {/* Distance Curve */}
            {(activeSignal === "all" || activeSignal === "distance") && (
              <path
                d={distancePath}
                fill="none"
                stroke="#f59e0b"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
            )}

            {/* Velocity Curve */}
            {(activeSignal === "all" || activeSignal === "velocity") && (
              <path
                d={velocityPath}
                fill="none"
                stroke="#38bdf8"
                strokeWidth="2"
                strokeLinecap="round"
                strokeDasharray="5 2"
              />
            )}

            {/* Flame Confidence Curve */}
            {(activeSignal === "all" || activeSignal === "ai") && (
              <path
                d={flamePath}
                fill="none"
                stroke="#f97316"
                strokeWidth="2.2"
                strokeLinecap="round"
              />
            )}

            {/* Pump Pressure Curve */}
            {(activeSignal === "all" || activeSignal === "pump") && (
              <path
                d={pumpPath}
                fill="none"
                stroke="#22d3ee"
                strokeWidth="2.2"
                strokeLinecap="round"
              />
            )}

            {/* Active Time Vertical Cursor Line */}
            <line
              x1={currentX}
              y1={paddingY - 5}
              x2={currentX}
              y2={svgHeight - paddingY + 5}
              stroke="#ffffff"
              strokeWidth="2"
              strokeDasharray="none"
              className="drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]"
            />

            {/* Current Target Head Marker on Distance curve */}
            <circle
              cx={currentX}
              cy={mapYDistance(telemetry.distance)}
              r="5"
              fill="#f59e0b"
              stroke="#ffffff"
              strokeWidth="2"
              className="drop-shadow-[0_0_10px_rgba(245,158,11,1)]"
            />
          </svg>
        </div>

        {/* Scrub Slider & Playback Controls Bar */}
        <div className="mt-4 pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                if (time >= 50) setTime(0);
                setIsPlaying(!isPlaying);
              }}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-semibold text-xs sm:text-sm transition-colors shadow-lg shadow-amber-500/20"
            >
              {isPlaying ? <Pause size={15} /> : <Play size={15} />}
              {isPlaying ? "Pause Stream" : "Simulate Telemetry"}
            </button>

            <button
              onClick={() => {
                setIsPlaying(false);
                setTime(0);
              }}
              className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
              title="Reset Timeline to 0s"
            >
              <RotateCcw size={15} />
            </button>

            <span className="font-mono2 text-xs text-slate-400">
              T + <strong className="text-white">{time.toFixed(1)}s</strong> / 50.0s
            </span>
          </div>

          {/* Scrubber slider */}
          <div className="flex items-center gap-3 w-full sm:w-64">
            <span className="font-mono2 text-[11px] text-slate-500">0s</span>
            <input
              type="range"
              min="0"
              max="50"
              step="0.1"
              value={time}
              onChange={(e) => {
                setIsPlaying(false);
                setTime(parseFloat(e.target.value));
              }}
              className="w-full accent-amber-500 bg-slate-700 rounded-lg cursor-pointer h-1.5"
            />
            <span className="font-mono2 text-[11px] text-slate-500">50s</span>
          </div>

          {/* Quick Chapter Selector Badges */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto pb-1 sm:pb-0">
            {[
              { label: "Patrol", t: 4 },
              { label: "Casualty", t: 11 },
              { label: "Avoidance", t: 20 },
              { label: "Suppress", t: 29 },
              { label: "Logistics", t: 38 },
            ].map((c) => (
              <button
                key={c.label}
                onClick={() => {
                  setIsPlaying(false);
                  setTime(c.t);
                }}
                className={`px-2.5 py-1 rounded-lg font-mono2 text-[10px] transition-all border ${
                  Math.abs(time - c.t) < 4
                    ? "bg-amber-500/20 text-amber-300 border-amber-500/40"
                    : "bg-slate-800/60 text-slate-400 border-slate-700/60 hover:text-slate-200"
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ═════════════════════════════════════════════════════════════════════════════
   TAB 2: DISTRIBUTED 3-NODE ARCHITECTURE FLOW & DATA BUS DYNAMICS
   ═════════════════════════════════════════════════════════════════════════════ */
function ArchitectureTopologyPanel() {
  const [selectedNode, setSelectedNode] = useState<"vision" | "edge" | "hud">("edge");

  return (
    <div className="space-y-6">
      {/* 3 Interactive Node Blocks */}
      <div className="grid md:grid-cols-3 gap-4">
        {/* Node 1: Vision Base Station */}
        <div
          onClick={() => setSelectedNode("vision")}
          className={`relative p-5 rounded-2xl border transition-all cursor-pointer ${
            selectedNode === "vision"
              ? "bg-slate-800/90 border-amber-500/60 shadow-xl shadow-amber-500/10"
              : "bg-slate-900/60 border-slate-800 hover:border-slate-700"
          }`}
        >
          <div className="flex items-center justify-between">
            <div className="w-10 h-10 rounded-xl bg-orange-500/20 border border-orange-500/30 flex items-center justify-center text-orange-400">
              <Eye size={20} />
            </div>
            <span className="font-mono2 text-[10px] px-2 py-0.5 rounded bg-orange-500/20 text-orange-300 border border-orange-500/30 font-semibold">
              BASE STATION
            </span>
          </div>
          <h4 className="mt-3 font-display font-bold text-lg text-white">AI Vision Engine</h4>
          <p className="mt-1 text-xs text-slate-400 leading-relaxed">
            Overhead Tapo C200 camera stream processed by PyTorch Flame CNN & Keras Fallen Life Detector.
          </p>
          <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-[11px] font-mono2 text-slate-400">
            <span>Flask Port 5000</span>
            <span className="text-orange-400">solvePnP 3D</span>
          </div>
        </div>

        {/* Node 2: Robot Edge Node */}
        <div
          onClick={() => setSelectedNode("edge")}
          className={`relative p-5 rounded-2xl border transition-all cursor-pointer ${
            selectedNode === "edge"
              ? "bg-slate-800/90 border-amber-500/60 shadow-xl shadow-amber-500/10"
              : "bg-slate-900/60 border-slate-800 hover:border-slate-700"
          }`}
        >
          <div className="flex items-center justify-between">
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-400">
              <Cpu size={20} />
            </div>
            <span className="font-mono2 text-[10px] px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30 font-semibold">
              ROBOT EDGE (RPi 4)
            </span>
          </div>
          <h4 className="mt-3 font-display font-bold text-lg text-white">ROS 2 Navigation Stack</h4>
          <p className="mt-1 text-xs text-slate-400 leading-relaxed">
            Nav2 path planner, SLAM Toolbox async mapping, rf2o laser odometry, and local Mosquitto MQTT broker.
          </p>
          <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-[11px] font-mono2 text-slate-400">
            <span>MQTT 1883 / 9001</span>
            <span className="text-amber-400">rf2o TOF LiDAR</span>
          </div>
        </div>

        {/* Node 3: Cybernetic Operator HUD */}
        <div
          onClick={() => setSelectedNode("hud")}
          className={`relative p-5 rounded-2xl border transition-all cursor-pointer ${
            selectedNode === "hud"
              ? "bg-slate-800/90 border-amber-500/60 shadow-xl shadow-amber-500/10"
              : "bg-slate-900/60 border-slate-800 hover:border-slate-700"
          }`}
        >
          <div className="flex items-center justify-between">
            <div className="w-10 h-10 rounded-xl bg-sky-500/20 border border-sky-500/30 flex items-center justify-center text-sky-400">
              <Radio size={20} />
            </div>
            <span className="font-mono2 text-[10px] px-2 py-0.5 rounded bg-sky-500/20 text-sky-300 border border-sky-500/30 font-semibold">
              WEB HUD CLIENT
            </span>
          </div>
          <h4 className="mt-3 font-display font-bold text-lg text-white">Tactical Command Center</h4>
          <p className="mt-1 text-xs text-slate-400 leading-relaxed">
            Zero-install browser HUD with dual tactical video, virtual D-Pad override, and hold-to-spray interlock.
          </p>
          <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-[11px] font-mono2 text-slate-400">
            <span>WebSocket Live</span>
            <span className="text-sky-400">Dual Stream HUD</span>
          </div>
        </div>
      </div>

      {/* Animated Data Bus Topology Diagram */}
      <div className="p-6 rounded-2xl bg-slate-950/80 border border-slate-800 relative">
        <h4 className="font-mono2 text-xs uppercase tracking-widest text-slate-400 mb-4 flex items-center gap-2">
          <Terminal size={14} className="text-amber-400" /> Distributed Message Bus & Topic Graph
        </h4>

        {/* Flow Representation */}
        <div className="grid md:grid-cols-3 gap-6 relative">
          {/* Connector lines & animated pulses */}
          <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800 space-y-2.5">
            <div className="text-xs font-mono2 text-orange-400 font-semibold flex items-center gap-1.5">
              <Eye size={13} /> VISION OUTFLOW
            </div>
            <div className="text-[11px] font-mono2 bg-slate-950 p-2 rounded border border-slate-800 text-slate-300">
              <code>ambers/robot/navigation/target</code>
              <p className="text-[10px] text-slate-500 mt-1">Payload: &#123; x: 2.14, y: 1.05, unit: "m" &#125;</p>
            </div>
            <div className="text-[11px] font-mono2 bg-slate-950 p-2 rounded border border-slate-800 text-slate-300">
              <code>ambers/vision/casualty_alert</code>
              <p className="text-[10px] text-slate-500 mt-1">Status: FALLEN (94% confidence)</p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800 space-y-2.5">
            <div className="text-xs font-mono2 text-amber-400 font-semibold flex items-center gap-1.5">
              <Cpu size={13} /> ROBOT EDGE BUS
            </div>
            <div className="text-[11px] font-mono2 bg-slate-950 p-2 rounded border border-slate-800 text-slate-300">
              <code>ambers/robot/telemetry</code>
              <p className="text-[10px] text-slate-500 mt-1">Hz: 20Hz | /odom + /scan + Battery %</p>
            </div>
            <div className="text-[11px] font-mono2 bg-slate-950 p-2 rounded border border-slate-800 text-slate-300">
              <code>ambers/robot/actuators/pump</code>
              <p className="text-[10px] text-slate-500 mt-1">Command: HOLD_TRIGGER (24V relay)</p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800 space-y-2.5">
            <div className="text-xs font-mono2 text-sky-400 font-semibold flex items-center gap-1.5">
              <Radio size={13} /> HUD TACTICAL INFLOW
            </div>
            <div className="text-[11px] font-mono2 bg-slate-950 p-2 rounded border border-slate-800 text-slate-300">
              <code>ws://&lt;PI_IP&gt;:9001/mqtt</code>
              <p className="text-[10px] text-slate-500 mt-1">Subscribed: telemetry, alerts, mode</p>
            </div>
            <div className="text-[11px] font-mono2 bg-slate-950 p-2 rounded border border-slate-800 text-slate-300">
              <code>ambers/robot/manual/cmd_vel</code>
              <p className="text-[10px] text-slate-500 mt-1">D-Pad manual override joystick vector</p>
            </div>
          </div>
        </div>

        {/* Deep Node Details Panel */}
        <div className="mt-5 p-4 rounded-xl bg-slate-900/90 border border-slate-700/60">
          <div className="flex items-center justify-between text-xs font-mono2 text-amber-400 font-semibold mb-2">
            <span>SELECTED ARCHITECTURE NODE: {selectedNode.toUpperCase()}</span>
            <span className="text-slate-400 text-[11px]">Click a card above to inspect</span>
          </div>

          {selectedNode === "vision" && (
            <div className="text-xs text-slate-300 space-y-1.5 leading-relaxed">
              <p>
                <strong>AI Vision Pipeline:</strong> Overhead surveillance camera stream fed through a custom PyTorch Flame CNN and Keras Life Detection neural network.
              </p>
              <p>
                <strong>3D Spatial Transformer:</strong> Computes the Perspective-n-Point (solvePnP) transformation matrix using arena ArUco ground reference markers, projecting pixel coordinates into metric coordinates for navigation dispatch.
              </p>
            </div>
          )}

          {selectedNode === "edge" && (
            <div className="text-xs text-slate-300 space-y-1.5 leading-relaxed">
              <p>
                <strong>Edge ROS 2 Stack:</strong> Raspberry Pi 4 running ROS 2 Humble/Jazzy, Nav2 autonomous navigation, and SLAM Toolbox online asynchronous mapping.
              </p>
              <p>
                <strong>Slip-Free Odometry:</strong> Planar laser odometry (rf2o) calculated from Okdo LD06 TOF LiDAR scans at 12m radius, eliminating the wheel slip inherent to 4WD skid-steer chassis.
              </p>
            </div>
          )}

          {selectedNode === "hud" && (
            <div className="text-xs text-slate-300 space-y-1.5 leading-relaxed">
              <p>
                <strong>Cybernetic Operator Console:</strong> Lightweight browser HUD connecting directly via MQTT over WebSockets. Operates seamlessly on local Wi-Fi without needing an internet connection.
              </p>
              <p>
                <strong>Human-in-the-Loop Safety:</strong> Dual video feeds (surveillance AI + robot FPV), virtual joystick D-Pad for manual override, and a tactile hold-to-spray interlock to ensure targeted suppression.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

/* ═════════════════════════════════════════════════════════════════════════════
   TAB 3: STANDOFF RADAR & 2-DOF TURRET AIMING SIMULATOR
   ═════════════════════════════════════════════════════════════════════════════ */
function RadarTurretPanel() {
  const [azimuth, setAzimuth] = useState<number>(32); // degrees (-180 to 180)
  const [elevation, setElevation] = useState<number>(18); // degrees (0 to 60)
  const [isSpraying, setIsSpraying] = useState<boolean>(false);
  const [fireHealth, setFireHealth] = useState<number>(100);

  // Target flame position relative to robot (angle: ~30 deg, safe lock distance: 0.30m)
  const targetAngle = 30;

  // Spray extinguishing loop
  useEffect(() => {
    if (!isSpraying) return;

    const interval = setInterval(() => {
      // Check if azimuth is aligned within 15 degrees of target
      const angleDiff = Math.abs(azimuth - targetAngle);
      if (angleDiff <= 15) {
        setFireHealth((prev) => Math.max(0, prev - 4));
      }
    }, 100);

    return () => clearInterval(interval);
  }, [isSpraying, azimuth]);

  return (
    <div className="grid lg:grid-cols-12 gap-6 items-center">
      {/* Interactive Radar & Gimbal Viewport */}
      <div className="lg:col-span-7 flex flex-col items-center justify-center p-6 rounded-2xl bg-slate-950 border border-slate-800 relative overflow-hidden">
        {/* Radar concentric range circles */}
        <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full border border-slate-800 flex items-center justify-center">
          {/* 3.0m Outer ring */}
          <div className="absolute inset-0 rounded-full border border-slate-800/80" />
          <span className="absolute top-1 text-[9px] font-mono2 text-slate-600">3.0m</span>

          {/* 1.5m Middle ring */}
          <div className="absolute w-44 h-44 sm:w-56 sm:h-56 rounded-full border border-slate-800/80" />
          <span className="absolute top-10 sm:top-12 text-[9px] font-mono2 text-slate-600">1.5m</span>

          {/* 0.30m SAFE STANDOFF PERIMETER (Highlighted Amber / Red) */}
          <div className="absolute w-20 h-20 sm:w-24 sm:h-24 rounded-full border-2 border-dashed border-rose-500/70 bg-rose-500/10 animate-pulse" />
          <span className="absolute top-24 sm:top-28 text-[8px] font-mono2 text-rose-400 font-bold">
            0.30m LOCK
          </span>

          {/* Radar sweeping scan line */}
          <motion.div
            className="absolute inset-0 rounded-full origin-center pointer-events-none"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
            style={{
              background:
                "conic-gradient(from 0deg at 50% 50%, rgba(245, 158, 11, 0.25) 0deg, transparent 60deg, transparent 360deg)",
            }}
          />

          {/* Target Flame Beacon on Radar */}
          <motion.div
            className="absolute z-10 flex flex-col items-center"
            style={{
              transform: `translate(${Math.cos((targetAngle - 90) * (Math.PI / 180)) * 48}px, ${
                Math.sin((targetAngle - 90) * (Math.PI / 180)) * 48
              }px)`,
            }}
            animate={fireHealth > 0 ? { scale: [1, 1.2, 1] } : { scale: 0 }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <div className="w-4 h-4 rounded-full bg-orange-500 shadow-[0_0_12px_rgba(249,115,22,1)] flex items-center justify-center text-[10px]">
              🔥
            </div>
            <span className="text-[9px] font-mono2 text-orange-400 font-bold whitespace-nowrap mt-0.5">
              {fireHealth > 0 ? `${fireHealth}% FLAME` : "NEUTRALIZED"}
            </span>
          </motion.div>

          {/* Turret Aiming Line & Water Jet */}
          <div
            className="absolute w-1 h-36 origin-bottom z-20 pointer-events-none"
            style={{
              bottom: "50%",
              transform: `rotate(${azimuth}deg)`,
              transformOrigin: "bottom center",
            }}
          >
            {/* Turret Barrel */}
            <div className="w-1.5 h-10 bg-amber-400 rounded-full mx-auto shadow-[0_0_8px_rgba(245,158,11,0.8)]" />

            {/* Spray Water Jet Stream when active */}
            {isSpraying && (
              <motion.div
                className="w-3 bg-gradient-to-t from-cyan-400 to-sky-200 rounded-full mx-auto opacity-90 shadow-[0_0_16px_rgba(34,211,238,1)]"
                initial={{ height: 0 }}
                animate={{ height: ["40px", "85px", "75px"] }}
                transition={{ repeat: Infinity, duration: 0.3 }}
              />
            )}
          </div>

          {/* Robot Chassis Center Marker */}
          <div className="relative z-30 w-7 h-7 rounded-lg bg-amber-500 border-2 border-slate-950 flex items-center justify-center shadow-lg shadow-amber-500/50">
            <span className="text-[10px] font-bold text-slate-950">🤖</span>
          </div>
        </div>

        {/* Live Standoff Distance Indicator */}
        <div className="mt-4 flex items-center gap-3 font-mono2 text-xs">
          <span className="px-2 py-0.5 rounded bg-rose-500/20 text-rose-300 border border-rose-500/30">
            THERMAL LOCK: 0.30m
          </span>
          <span className="text-slate-400">
            Turret Yaw: <strong className="text-amber-400">{azimuth}°</strong>
          </span>
          <span className="text-slate-400">
            Pitch: <strong className="text-sky-400">{elevation}°</strong>
          </span>
        </div>
      </div>

      {/* Turret Gimbal Controls & Safety Interlock */}
      <div className="lg:col-span-5 space-y-4">
        <div>
          <span className="font-mono2 text-xs text-amber-400 font-semibold uppercase tracking-wider">
            2-DOF Suppression Actuators
          </span>
          <h4 className="font-display text-xl font-bold text-white mt-1">
            Precision Gimbal Aiming & 24V Pump
          </h4>
          <p className="text-xs text-slate-400 mt-1 leading-relaxed">
            Continuously aims 360° horizontal pan (GPIO 19) and 180° vertical tilt (GPIO 13) driven by pigpio DMA hardware PWM.
          </p>
        </div>

        {/* Azimuth Yaw Slider */}
        <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
          <div className="flex items-center justify-between text-xs font-mono2">
            <span className="text-slate-400 flex items-center gap-1.5">
              <Sliders size={13} className="text-amber-400" /> Turret Yaw (Pan)
            </span>
            <span className="text-amber-400 font-bold">{azimuth}°</span>
          </div>
          <input
            type="range"
            min="-180"
            max="180"
            value={azimuth}
            onChange={(e) => setAzimuth(parseInt(e.target.value))}
            className="w-full accent-amber-500 bg-slate-700 rounded-lg cursor-pointer h-1.5"
          />
          <div className="flex justify-between text-[10px] font-mono2 text-slate-500">
            <span>-180° Left</span>
            <span>0° FWD</span>
            <span>+180° Right</span>
          </div>
        </div>

        {/* Elevation Pitch Slider */}
        <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
          <div className="flex items-center justify-between text-xs font-mono2">
            <span className="text-slate-400 flex items-center gap-1.5">
              <Sliders size={13} className="text-sky-400" /> Turret Pitch (Tilt)
            </span>
            <span className="text-sky-400 font-bold">{elevation}°</span>
          </div>
          <input
            type="range"
            min="0"
            max="60"
            value={elevation}
            onChange={(e) => setElevation(parseInt(e.target.value))}
            className="w-full accent-sky-400 bg-slate-700 rounded-lg cursor-pointer h-1.5"
          />
          <div className="flex justify-between text-[10px] font-mono2 text-slate-500">
            <span>0° Level</span>
            <span>30° Mid</span>
            <span>60° High</span>
          </div>
        </div>

        {/* Auto-Lock & Hold-to-Spray Controls */}
        <div className="flex flex-col gap-2.5 pt-2">
          <button
            onClick={() => {
              setAzimuth(targetAngle);
              setElevation(15);
            }}
            className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl border border-amber-500/40 bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 font-mono2 text-xs font-semibold transition-all shadow-sm"
          >
            <Crosshair size={14} /> AUTO-LOCK FLAME TARGET (30°)
          </button>

          {/* Tactile Hold-to-Spray Button */}
          <button
            onMouseDown={() => setIsSpraying(true)}
            onMouseUp={() => setIsSpraying(false)}
            onMouseLeave={() => setIsSpraying(false)}
            onTouchStart={() => setIsSpraying(true)}
            onTouchEnd={() => setIsSpraying(false)}
            className={`w-full flex items-center justify-center gap-2.5 py-3.5 rounded-xl font-display font-bold text-sm transition-all select-none shadow-lg ${
              isSpraying
                ? "bg-cyan-400 text-slate-950 shadow-cyan-400/40 scale-[0.98]"
                : "bg-gradient-to-r from-orange-500 to-rose-600 text-white hover:from-orange-600 hover:to-rose-700 shadow-orange-500/20"
            }`}
          >
            <Droplets size={17} className={isSpraying ? "animate-bounce" : ""} />
            {isSpraying ? "DISCHARGING 24V WATER JET..." : "HOLD TO SPRAY (SAFETY INTERLOCK)"}
          </button>

          {fireHealth === 0 && (
            <div className="p-2.5 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 font-mono2 text-xs text-center font-semibold">
              ✓ HAZARD NEUTRALIZED — ALL CLEAR
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
