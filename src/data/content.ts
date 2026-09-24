export const links = {
  github: "https://github.com/Bassel1000",
  kaggle: "https://www.kaggle.com/basselashraf",
  credly: "https://www.credly.com/users/bassel-el-bahnasy",
  linkedin: "https://www.linkedin.com/in/bassel-elbahnasy/",
  upwork: "https://www.upwork.com/freelancers/~0122a3fbdc5d874f7d",
};

export const emails = [
  { address: "basselashraftmd@gmail.com", primary: true },
  { address: "basselelbahnasy@outlook.com", primary: false },
  { address: "basselelbahnasy@tutamail.com", primary: false },
  { address: "basselelbahnasy@proton.me", primary: false },
];

export const phoenix = {
  name: "Phoenix",
  title: "Autonomous AI Fire-Seeking, Hazard Assessment & Precision Suppression Mobile Robot",
  subtitle: "Graduation Capstone Project — King Salman International University (KSIU)",
  repo: "https://github.com/Bassel1000/phoenix_robot",
  videoSrc: "/Phoenix_Demo.mp4",
  videoPoster: "/Phoenix_Overview.png",
  description:
    "An enterprise-grade autonomous emergency response robot engineered to detect, locate, and suppress indoor fire hazards while conducting real-time search-and-rescue casualty assessment. Phoenix operates across mission-critical datacenters and high-bay logistics warehouses with a distributed 3-node edge architecture, local MQTT telemetry bus, slip-resistant planar laser odometry, and an operator cybernetic command HUD.",
  stats: [
    { value: "3-Node", label: "Distributed Edge Architecture" },
    { value: "0.30 m", label: "Thermal Standoff Safe Lock" },
    { value: "2-DOF", label: "Pan-Tilt Suppression Turret" },
    { value: "rf2o", label: "Planar Laser Odometry (Zero Slip)" },
    { value: "94%+", label: "Neural Casualty Assessment" },
    { value: "0 ms", label: "Offline Local Mosquitto Latency" },
  ],
  videoChapters: [
    { time: 0, tag: "0:00", title: "Datacenter Patrol", desc: "Autonomous Nav2 cold-aisle traversal at 0.35 m/s" },
    { time: 8, tag: "0:08", title: "Casualty Detection", desc: "Neural recognition flags fallen technician (94% confidence)" },
    { time: 17, tag: "0:17", title: "Obstacle Avoidance", desc: "Dynamic costmap replanning around crash cart obstruction" },
    { time: 26, tag: "0:26", title: "Precision Suppression", desc: "30cm thermal standoff lock & 24V pump water jet" },
    { time: 34, tag: "0:34", title: "Warehouse Logistics", desc: "RF2O laser odometry overcoming skid-steer wheel slip" },
    { time: 43, tag: "0:43", title: "Cybernetic HUD", desc: "Zero-latency WebSockets telemetry & mission clear confirmation" },
  ],
  highlights: [
    {
      title: "AI Fire & Flame Perception",
      text: "Custom PyTorch deep learning classifier resistant to smoke and light shifts, paired with micro-flame HSV chromatic segmentation to isolate small ignition sources.",
    },
    {
      title: "Search & Rescue Life Detection",
      text: "Real-time Keras neural models continuously evaluating personnel presence and identifying fallen casualties (FALLEN 94%) to elevate HUD emergency priority.",
    },
    {
      title: "Millimeter ArUco PnP 3D Ground Projection",
      text: "Perspective-n-Point geometry transforms camera pixel centroids into millimeter-accurate arena metric coordinates dispatched over ambers/robot/navigation/target.",
    },
    {
      title: "Slip-Free Nav2 & SLAM Dynamic Mapping",
      text: "Continuous planar laser scan odometry (rf2o) eliminates 4-wheel skid-steer slip, coupled with SLAM Toolbox asynchronous mapping and dynamic Nav2 obstacle avoidance.",
    },
    {
      title: "2-DOF Aiming Gimbal & 24V Suppression",
      text: "Precision 360° horizontal pan and 180° vertical tilt gimbal with idle detachment to eliminate jitter, driving a 24V diaphragm pump with a hold-to-spray safety interlock.",
    },
    {
      title: "Cybernetic Web Command Center HUD",
      text: "Zero-latency MQTT over WebSockets console with side-by-side surveillance + robot FPV streams, live telemetry gauges, radar minimap, and instant manual override.",
    },
  ],
  stack: [
    "ROS 2 (Humble / Jazzy)", "Nav2 Stack", "SLAM Toolbox", "rf2o Laser Odometry",
    "PyTorch Flame CNN", "TensorFlow / Keras", "OpenCV", "Gazebo Harmonic",
    "Paho MQTT", "WebSockets HUD", "Raspberry Pi 4", "Okdo LD06 TOF LiDAR",
    "BTS7960 Drivers", "pigpio PWM", "Flask", "Tailwind CSS",
  ],
  mission: [
    { step: "01", title: "AI Hazard Detection", text: "Overhead Tapo vision node identifies flame centroids and surveys arena for fallen casualties." },
    { step: "02", title: "Metric PnP Projection", text: "Perspective-n-Point solver transforms pixel coordinates into millimeter-accurate arena metric coordinates." },
    { step: "03", title: "Target Dispatch", text: "Target dispatched over MQTT to robot edge, arming Nav2 autonomous planner with obstacle avoidance." },
    { step: "04", title: "Slip-Compensated Nav", text: "Nav2 guides the chassis with rf2o planar laser scan odometry, overcoming skid-steer wheel slip." },
    { step: "05", title: "0.30m Standoff Lock", text: "Hardware automatically halts and locks at a safe 30 cm standoff distance to protect edge electronics." },
    { step: "06", title: "Precision Extinguish", text: "Cybernetic Web HUD directs 2-DOF pan-tilt turret and triggers 24V pump to extinguish the fire root." },
  ],
};

export type Project = {
  name: string;
  tagline: string;
  description: string;
  tags: string[];
  repo: string;
  category: "Machine Learning" | "Hardware" | "Data Engineering" | "Systems" | "Software";
  language: string;
  highlight?: string;
};

export const projects: Project[] = [
  {
    name: "CRYSTALS-Kyber NTT Accelerator",
    tagline: "Post-quantum cryptography in hardware",
    description:
      "FPGA implementation of a Number Theoretic Transform accelerator for NIST's ML-KEM post-quantum standard. Custom Cooley-Tukey butterfly engine, dual-port RAM, and an FSM controller in Verilog — simulation-verified in ModelSim.",
    tags: ["Verilog", "FPGA", "Cryptography", "ModelSim"],
    repo: "https://github.com/Bassel1000/FPGA-Implementation-of-Post-Quantum-Cryptography-CRYSTALS-Kyber-NTT-Accelerator",
    category: "Hardware",
    language: "Verilog",
    highlight: "NIST ML-KEM standard",
  },
  {
    name: "AnimalCLEF 2026",
    tagline: "Wildlife re-identification — Kaggle",
    description:
      "Auto-tuned DBSCAN clustering with test-time augmentation for animal re-identification. Grid-searched per-species eps via Adjusted Rand Index, with MiewID and MegaDescriptor feature extractors on lynx, salamanders, sea turtles, and horned lizards.",
    tags: ["PyTorch", "DBSCAN", "Computer Vision", "Kaggle"],
    repo: "https://github.com/Bassel1000/AnimalCLEF-2026-Auto-Tuned-DBSCAN-with-Test-Time-Augmentation",
    category: "Machine Learning",
    language: "Jupyter Notebook",
  },
  {
    name: "E-Commerce Data Engineering",
    tagline: "End-to-end Azure pipeline — DEPI",
    description:
      "Full data engineering pipeline on Microsoft Azure: Data Factory ETL into Azure SQL, advanced SQL analytics, Power BI dashboards, and ML sales-trend prediction — surfacing market, product, and pricing insights from real transaction data.",
    tags: ["Azure Data Factory", "SQL", "Power BI", "scikit-learn"],
    repo: "https://github.com/Bassel1000/E-Commerce-Data-Engineering-Project",
    category: "Data Engineering",
    language: "Jupyter Notebook",
  },
  {
    name: "Melting Point Prediction",
    tagline: "Molecular property regression — Kaggle",
    description:
      "Predicting melting points of organic molecules with a stacking ensemble of XGBoost, LightGBM, Random Forest, and Ridge — hyperparameters optimized with Optuna against MAE.",
    tags: ["XGBoost", "LightGBM", "Optuna", "Ensemble"],
    repo: "https://github.com/Bassel1000/Melting-Point-Prediction-Challenge",
    category: "Machine Learning",
    language: "Jupyter Notebook",
  },
  {
    name: "Heart Disease Prediction",
    tagline: "Kaggle Playground S6E2",
    description:
      "Binary classification on 630K patient records using LightGBM with stratified 5-fold CV and multi-seed averaging across 25 models — final validation ROC AUC of 0.9555.",
    tags: ["LightGBM", "Cross-validation", "Healthcare"],
    repo: "https://github.com/Bassel1000/Predicting-Heart-Disease-s6e2",
    category: "Machine Learning",
    language: "Jupyter Notebook",
    highlight: "ROC AUC 0.9555",
  },
  {
    name: "Parallel Image Convolution",
    tagline: "High-performance computing in C++",
    description:
      "Gaussian blur convolution accelerated with a hybrid OpenMP + MPI approach — shared-memory multi-threading inside each process, distributed chunking with halo exchange across processes. 75% faster than serial on an i5-10300H.",
    tags: ["C++", "OpenMP", "MPI", "HPC"],
    repo: "https://github.com/Bassel1000/Parallel-Image-Convolution",
    category: "Systems",
    language: "C++",
    highlight: "75% faster than serial",
  },
  {
    name: "Super Mario Bros RL",
    tagline: "Reinforcement learning agent",
    description:
      "Training a PPO agent to play Super Mario Bros using stable-baselines3, Gym, and nes_py — with TensorBoard tracking of the learning progress.",
    tags: ["PPO", "Reinforcement Learning", "PyTorch", "Gym"],
    repo: "https://github.com/Bassel1000/Super-Mario-Bros-Reinforcement-Learning",
    category: "Machine Learning",
    language: "Jupyter Notebook",
  },
  {
    name: "Automaton Simulator",
    tagline: "DFA & NFA visualizer",
    description:
      "Graphical PyQt5 application to build, visualize, and test deterministic and nondeterministic finite automata — with NetworkX and Matplotlib diagram generation.",
    tags: ["Python", "PyQt5", "Automata Theory"],
    repo: "https://github.com/Bassel1000/automaton-simulator",
    category: "Software",
    language: "Python",
  },
  {
    name: "Ankhvault",
    tagline: "Desktop gaming launcher & store",
    description:
      "A next-generation desktop gaming launcher and store built with Rust, Tauri 2.0, and React CSS Glassmorphism — featuring AES-256 binary database encryption, x402 Web3 payment protocol, and 95% developer revenue split.",
    tags: ["Rust", "Tauri 2.0", "React", "Desktop App"],
    repo: "https://github.com/Duat-Studio/Ankhvault",
    category: "Software",
    language: "Rust",
  },
];

export const moreProjects = [
  { name: "Ultimate AI — Chain-of-Thoughts", repo: "https://github.com/Bassel1000/Ultimate_AI_-_Tech_Challenge-Chain-of-Thoughts" },
  { name: "Northwind SQL Project", repo: "https://github.com/Bassel1000/Northwind-Database-SQL-Project" },
  { name: "Password Manager", repo: "https://github.com/Bassel1000/Password-Manager" },
  { name: "Maze Solver (pyamaze)", repo: "https://github.com/Bassel1000/Maze-Solver-Using-Pyamaze" },
  { name: "Computer Company Database", repo: "https://github.com/Bassel1000/Computer-Company-Database" },
  { name: "Python ↔ MySQL Guide", repo: "https://github.com/Bassel1000/Connecting-Python-with-MySQL" },
];

export const experience = [
  {
    role: "Freelance AI Data Trainer & Annotator",
    org: "Outlier · Alignerr · Telus International · Upwork · Silencio AI",
    period: "Apr 2023 — Present",
    points: [
      "Contribute to large-scale AI model training and evaluation across multiple platforms — reviewing model outputs and labeling data for ML fine-tuning.",
      "Deliver specialized data-collection projects via Upwork and Silencio AI, maintaining strict data-quality and accuracy standards for client deliverables.",
    ],
  },
  {
    role: "Data Engineer Intern",
    org: "Digital Egypt Pioneers Initiative (DEPI)",
    period: "Microsoft Data Engineer Track",
    points: [
      "Developed and managed data pipelines in Azure Data Factory, with ETL workflows loading into Azure SQL Databases.",
      "Applied machine learning algorithms for data insights and predictive modeling.",
      "Led a team of peers through end-to-end data engineering projects, delivered on schedule — earned a leadership certification for team management.",
    ],
  },
  {
    role: "Internship Trainee",
    org: "Commercial International Bank (CIB)",
    period: "Banking & Risk",
    points: [
      "Analyzed ESG frameworks, climate risk, and corporate credit risk to understand sustainable lending practices.",
      "Explored applications of AI, blockchain, and data analytics in financial risk modeling and enterprise resilience.",
    ],
  },
];

export const education = {
  degree: "Bachelor of Computer Engineering",
  school: "King Salman International University (KSIU)",
  detail: "Class of 2026 · GPA 3.513 / 4.0",
  location: "Hadayek October, Giza, Egypt",
};

export const specializations = [
  {
    name: "Google Data Analytics Professional Certificate",
    issuer: "Google",
    detail: "8 courses — data cleaning, SQL, R, dashboards, capstone case study",
  },
  {
    name: "Google Advanced Data Analytics Specialization",
    issuer: "Google",
    detail: "7 courses — statistics, regression, ML, predictive modeling, capstone",
  },
  {
    name: "Microsoft Data Engineer Track",
    issuer: "Digital Egypt Pioneers Initiative",
    detail: "Azure Data Factory, SQL Server, Python — plus leadership certification",
  },
];

export const certifications = [
  { name: "Claude Code in Action", issuer: "Anthropic", date: "2026" },
  { name: "AI Fluency: Framework & Foundations", issuer: "Anthropic", date: "2026" },
  { name: "Network Security", issuer: "ISC2", date: "2026" },
  { name: "Robotic Mapping & Trajectory Generation", issuer: "Univ. of Colorado Boulder", date: "2026" },
  { name: "Hardware Security", issuer: "Univ. of Maryland", date: "2025" },
  { name: "IoT Devices", issuer: "Univ. of Illinois Urbana-Champaign", date: "2025" },
  { name: "Accelerated Computing with CUDA Python", issuer: "NVIDIA", date: "2025" },
  { name: "Parallel Programming", issuer: "EPFL", date: "2025" },
  { name: "AI Fundamentals with Capstone", issuer: "IBM", date: "2025" },
  { name: "Ethical Hacking Fundamentals", issuer: "LearnKartS", date: "2025" },
  { name: "Modern Robotics: Robot Dynamics", issuer: "Northwestern Univ.", date: "2024" },
  { name: "Modern Robotics: Robot Kinematics", issuer: "Northwestern Univ.", date: "2024" },
  { name: "Cryptography", issuer: "Univ. of Maryland", date: "2024" },
  { name: "Introduction to Cybersecurity", issuer: "Cisco", date: "2024" },
];

export const training = [
  { name: "Embedded Systems Workshop", detail: "60-hour intensive — C/Embedded C, computer architecture, microcontroller interfacing, RTOS" },
  { name: "Huawei Data Communication", detail: "HCIA-equivalent — TCP/IP, routing, switching, VLANs, subnetting on Huawei eNSP" },
  { name: "Siemens PLC Training", detail: "Two Siemens-certified courses — S7-1200 programming in TIA Portal, ladder logic" },
  { name: "Electronics Factory Training", detail: "PCB design principles, SMT, soldering, and quality control" },
];

export const skillGroups = [
  {
    title: "Data Science & Analytics",
    skills: ["Machine Learning", "Predictive Modeling", "Statistical Analysis", "XGBoost", "LightGBM", "scikit-learn", "Data Cleaning", "Tableau", "Power BI"],
  },
  {
    title: "Robotics & Embedded",
    skills: ["ROS 2", "Nav2", "SLAM Toolbox", "OpenCV", "Gazebo", "MQTT", "Embedded C", "RTOS", "pigpio / GPIO"],
  },
  {
    title: "Programming Languages",
    skills: ["Python (incl. CUDA)", "C++", "Java", "SQL", "R", "Verilog"],
  },
  {
    title: "Cybersecurity & Infrastructure",
    skills: ["Network Security", "Threat Detection", "Ethical Hacking", "Azure", "SQL Server", "Jupyter", "VS Code"],
  },
];

export const competitions = ["ICPC — International Collegiate Programming Contest"];
