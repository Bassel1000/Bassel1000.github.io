import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Eye,
  Cpu,
  MonitorSmartphone,
  ArrowRight,
  ArrowLeftRight,
  Layers,
  Zap,
} from "lucide-react";

export function PhoenixSystemArchitecture() {
  const [activeView, setActiveView] = useState<"architecture" | "hardware">("architecture");
  const [selectedNode, setSelectedNode] = useState<number>(1); // 0: Vision, 1: Edge, 2: HUD

  const nodes = [
    {
      id: 0,
      title: "1. AI Vision Node",
      badge: "Stationary Base Station",
      role: "Overhead AI Hazard Perception",
      icon: Eye,
      color: "from-amber-500/20 to-orange-500/20 text-amber-500 border-amber-500/30",
      accent: "text-amber-500 dark:text-amber-400",
      items: [
        "TP-Link Tapo C200 1080p surveillance stream",
        "PyTorch Flame CNN: deep learning fire classifier",
        "Keras Life Detection: human presence & fallen casualty recognition",
        "ArUco 3D solvePnP: projects pixel coords to metric ground coordinates (X, Y)",
      ],
      output: "Publishes target metrics to MQTT topic: ambers/robot/navigation/target",
    },
    {
      id: 1,
      title: "2. Robot Edge Node",
      badge: "Raspberry Pi 4 (Edge Compute)",
      role: "ROS 2 Autonomous Navigation & Actuation",
      icon: Cpu,
      color: "from-orange-500/20 to-red-500/20 text-orange-500 border-orange-500/30",
      accent: "text-orange-500 dark:text-orange-400",
      items: [
        "ROS 2 Nav2: dynamic path planning with obstacle avoidance",
        "SLAM Toolbox: online asynchronous arena mapping",
        "rf2o laser odometry: planar scan odometry that eliminates wheel slip",
        "Local Mosquitto MQTT broker: 100% offline edge communication",
        "Hardware Drivers: BTS7960 motors, 2-DOF pan-tilt servos & 24V pump relay",
      ],
      output: "Enforces 0.30m safe thermal standoff lock shielding robot hardware",
    },
    {
      id: 2,
      title: "3. Operator HUD",
      badge: "Web Command Center",
      role: "Zero-Latency Tactical Telemetry & Override",
      icon: MonitorSmartphone,
      color: "from-sky-500/20 to-blue-500/20 text-sky-500 border-sky-500/30",
      accent: "text-sky-500 dark:text-sky-400",
      items: [
        "Zero-install client running in modern desktop/mobile browsers",
        "MQTT over WebSockets (ws://<PI_IP>:9001/mqtt) on local Wi-Fi",
        "Dual-stream tactical HUD: overhead surveillance feed + forward robot FPV",
        "Tactile controls: virtual D-Pad driving & hold-to-spray safety interlock",
      ],
      output: "Instant switching between full Autonomous Mode and Manual Override",
    },
  ];

  const hardwareComponents = [
    {
      title: "Okdo LD06 TOF LiDAR",
      category: "Sensing",
      spec: "360° scan, 12m radius, 4500Hz",
      desc: "Feeds rf2o planar odometry and Nav2 costmaps to navigate around obstacles and map the environment.",
    },
    {
      title: "24V High-Pressure Pump",
      category: "Suppression",
      spec: "Self-priming diaphragm pump",
      desc: "Optically isolated relay driver triggered via hold-to-spray interlock to deliver targeted suppression spray.",
    },
    {
      title: "2-DOF Pan-Tilt Turret",
      category: "Actuation",
      spec: "360° pan + 180° tilt gimballing",
      desc: "Driven by dual high-torque servos with DMA-backed hardware PWM (pigpio) to eliminate jitter and detach when idle.",
    },
    {
      title: "4-Wheel Skid-Steer Drive",
      category: "Locomotion",
      spec: "4x 12V High-Torque DC Motors (300 RPM)",
      desc: "Powered by 2x BTS7960 (43A) H-bridges with velocity interpolation, stabilized by rf2o planar laser odometry.",
    },
    {
      title: "Raspberry Pi 4 Model B",
      category: "Edge Compute",
      spec: "Quad-Core ARM Cortex-A72 @ 1.5GHz",
      desc: "Runs ROS 2 Humble/Jazzy, Nav2, SLAM Toolbox, hardware GPIO drivers, and the local Mosquitto MQTT broker.",
    },
    {
      title: "ArUco Ground Reference Marker",
      category: "Vision Localization",
      spec: "Planar PnP fiducial calibration",
      desc: "Allows the overhead AI vision node to solve Perspective-n-Point geometry and compute millimeter metric offsets.",
    },
  ];

  return (
    <div className="mt-14 w-full">
      {/* Section Header with View Switcher */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
        <div>
          <span className="font-mono2 text-xs uppercase tracking-wider text-amber-600 dark:text-amber-400 font-semibold">
            // System Architecture & Anatomy
          </span>
          <h3 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-100 mt-1">
            How Phoenix Works
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1 max-w-xl">
            A distributed 3-node topology bridging off-board AI vision, on-board ROS 2 autonomous navigation, and human-in-the-loop tactical control.
          </p>
        </div>

        {/* View Switcher Toggle */}
        <div className="inline-flex p-1 rounded-2xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/70 self-start sm:self-auto">
          <button
            onClick={() => setActiveView("architecture")}
            className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all ${
              activeView === "architecture"
                ? "bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 shadow-sm"
                : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200"
            }`}
          >
            <Layers size={14} /> 3-Node Architecture
          </button>
          <button
            onClick={() => setActiveView("hardware")}
            className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all ${
              activeView === "hardware"
                ? "bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 shadow-sm"
                : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200"
            }`}
          >
            <Zap size={14} /> Hardware Anatomy
          </button>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {activeView === "architecture" ? (
          <motion.div
            key="architecture"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
            className="space-y-6"
          >
            {/* Visual Communication Pipeline Flow */}
            <div className="hidden lg:grid grid-cols-12 gap-2 items-center p-3 rounded-2xl bg-slate-100/80 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 text-center font-mono2 text-xs text-slate-600 dark:text-slate-400">
              <div className="col-span-3 font-semibold text-amber-600 dark:text-amber-400">
                AI Vision Node (Base Station)
              </div>
              <div className="col-span-1 flex items-center justify-center text-amber-500">
                <ArrowRight size={18} className="animate-pulse" />
              </div>
              <div className="col-span-4 font-semibold text-orange-600 dark:text-orange-400">
                Robot Edge (ROS 2 + MQTT Broker)
              </div>
              <div className="col-span-1 flex items-center justify-center text-sky-500">
                <ArrowLeftRight size={18} className="animate-pulse" />
              </div>
              <div className="col-span-3 font-semibold text-sky-600 dark:text-sky-400">
                Operator Web Command Center
              </div>
            </div>

            {/* 3 Node Cards */}
            <div className="grid md:grid-cols-3 gap-4">
              {nodes.map((node) => {
                const Icon = node.icon;
                const isSelected = selectedNode === node.id;
                return (
                  <div
                    key={node.id}
                    onClick={() => setSelectedNode(node.id)}
                    className={`card-dark rounded-2xl p-5 sm:p-6 transition-all cursor-pointer flex flex-col justify-between border ${
                      isSelected
                        ? "border-amber-500/60 dark:border-amber-500/50 shadow-lg shadow-amber-500/10 ring-1 ring-amber-500/30"
                        : "hover:border-slate-300 dark:hover:border-slate-700"
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${node.color} border flex items-center justify-center`}>
                          <Icon size={20} />
                        </div>
                        <span className="font-mono2 text-[10px] px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 font-medium">
                          {node.badge}
                        </span>
                      </div>

                      <h4 className="font-display font-bold text-lg text-slate-900 dark:text-slate-100">
                        {node.title}
                      </h4>
                      <p className={`text-xs font-medium mt-0.5 ${node.accent}`}>
                        {node.role}
                      </p>

                      <ul className="mt-4 space-y-2 text-xs text-slate-600 dark:text-slate-400">
                        {node.items.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2 leading-relaxed">
                            <span className="text-amber-500 dark:text-amber-400 mt-0.5">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-5 pt-3.5 border-t border-slate-200 dark:border-slate-800/80">
                      <p className="font-mono2 text-[11px] text-slate-500 dark:text-slate-400 leading-tight">
                        <strong className="text-slate-700 dark:text-slate-300">Action:</strong> {node.output}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="hardware"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
            className="space-y-6"
          >
            {/* Robot Image & Callouts Container */}
            <div className="grid lg:grid-cols-12 gap-6 items-center card-dark rounded-3xl p-5 sm:p-7">
              {/* Photo */}
              <div className="lg:col-span-5 rounded-2xl overflow-hidden bg-slate-950 border border-slate-200 dark:border-slate-800 shadow-md">
                <img
                  src="/Phoenix_Overview.png"
                  alt="Phoenix Robot Physical System Overview"
                  className="w-full h-auto object-cover"
                />
                <div className="p-3 bg-slate-900/90 text-center font-mono2 text-[11px] text-slate-400 border-t border-slate-800">
                  Phoenix Robot Physical Build — Hardware Architecture
                </div>
              </div>

              {/* Hardware Specifications Grid */}
              <div className="lg:col-span-7 grid sm:grid-cols-2 gap-3">
                {hardwareComponents.map((c) => (
                  <div
                    key={c.title}
                    className="p-3.5 rounded-xl bg-slate-50/80 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800/80"
                  >
                    <div className="flex items-center justify-between text-[11px] font-mono2 mb-1">
                      <span className="text-amber-600 dark:text-amber-400 font-semibold">{c.title}</span>
                      <span className="text-slate-400 dark:text-slate-500">{c.category}</span>
                    </div>
                    <div className="text-xs font-medium text-slate-700 dark:text-slate-300">
                      {c.spec}
                    </div>
                    <p className="mt-1 text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed">
                      {c.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
