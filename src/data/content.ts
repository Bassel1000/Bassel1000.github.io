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
  title: "Autonomous Fire-Detection & Suppression Robot",
  subtitle: "Graduation Project — King Salman International University",
  repo: "https://github.com/Bassel1000/phoenix_robot",
  description:
    "An intelligent mobile robot that autonomously finds fire and helps put it out. Phoenix splits its brain across three nodes — a stationary Vision Node, a Web Command Center, and a Raspberry Pi 4 edge node — communicating over a self-hosted MQTT broker so the mission keeps running even with no internet.",
  stats: [
    { value: "3", label: "Node split architecture" },
    { value: "0.3 m", label: "Safe-stop distance from flame" },
    { value: "24 V", label: "Water suppression pump" },
    { value: "100%", label: "Offline-capable, local MQTT" },
  ],
  highlights: [
    {
      title: "Sees fire, understands scenes",
      text: "Custom-trained PyTorch flame-detection model with an HSV fallback for small candle flames, plus Keras models for human and fall detection.",
    },
    {
      title: "Knows exactly where the fire is",
      text: "ArUco marker-based pose estimation with a solvePnP transformation matrix converts pixels into real-time fire distance with a safe stopping offset.",
    },
    {
      title: "Navigates on its own",
      text: "ROS 2 Nav2 stack with SLAM Toolbox mapping and laser-scan odometry (rf2o), validated in Gazebo simulation before hardware deployment.",
    },
    {
      title: "Built to survive the real world",
      text: "Migrated from HiveMQ Cloud to a self-hosted Mosquitto broker — cutting latency and removing any dependence on internet connectivity for alerts and fail-safes.",
    },
    {
      title: "Precision hardware control",
      text: "BTS7960 motor drivers with smooth velocity interpolation, and dual MG996R nozzle servos driven by pigpio DMA-backed hardware PWM for jitter-free motion.",
    },
    {
      title: "Operator in the loop",
      text: "Web-based command center for live monitoring, manual drive override, pan/tilt nozzle control, and a hold-to-spray interface for the 24 V pump relay.",
    },
  ],
  stack: [
    "Python", "ROS 2", "PyTorch", "OpenCV", "Nav2", "SLAM Toolbox", "MQTT",
    "Raspberry Pi 4", "ArUco", "Gazebo", "pigpio", "Keras",
  ],
  mission: [
    { step: "01", title: "Detect", text: "Vision Node spots flame and projects it to 3D coordinates via ArUco references." },
    { step: "02", title: "Navigate", text: "Target dispatched over MQTT to Nav2 — the robot drives autonomously to the fire." },
    { step: "03", title: "Arrive", text: "Navigation halts and locks at a 30 cm safe distance from the flame." },
    { step: "04", title: "Suppress", text: "Operator aims the servo nozzle and holds-to-spray the pump to extinguish the fire." },
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
    name: "NexaPlay",
    tagline: "Game launcher & store",
    description:
      "A Steam/Epic-style gaming launcher and store built in Java — browse, launch, and manage a game library from one desktop app.",
    tags: ["Java", "Desktop App"],
    repo: "https://github.com/Bassel1000/NexaPlay",
    category: "Software",
    language: "Java",
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
