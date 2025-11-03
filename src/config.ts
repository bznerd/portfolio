export const siteConfig = {
  name: "Ben Campbell",
  title: "BS Electrical Engineering @ Georgia Tech",
  description: "Portfolio website of Ben Campbell",
  accentColor: "#9834eb",
  backgroundColor: "#1d1c1f",
  textColor: "#5c586b",
  buttonColor: "#a6a4b0",
  social: {
    email: "bcampbell72@gatech.edu",
    linkedin: "https://www.linkedin.com/in/ben-campbell-5bba36225/",
    github: "https://github.com/bznerd",
  },
  aboutMe:
    "Hi, I’m Ben. I’m an undergrad at Georgia Tech studying electrical engineering with a minor in computer science. I’m in love with everything related to robotics and low-level programming. I've dipped my toes in on just about everything from optimal control to PCB design. I love robotics because it’s all about building elegant systems, and high-level design is where I excel.\n\nCurrently I’m working on building robust hardware and software to control guided high-power rockets with the GNC club at Georgia Tech, and developing multi-robot autonomous systems with the IEEE Hardware Competition team.",
  skills: ["C/C++", "Python", "STM32 MCUs", "Linux", "Altium Designer", "Git", "Docker"],
  projects: [
    {
      id: "traj-opt",
      name: "Double Jointed Arm Traj-Opt",
      description:
        "How do you fix a robotic arm that's slow and fragile? Fix it in code! Using CASAdi and a physics model I generated time-optimal trajectories for a double jointed robotic arm",
      skills: ["CASAdi", "Numerical Optimization", "Physics Sim"],
      p1: "Our 2023 FRC robot was built around a large double jointed arm. The arm was fragile, a little underpowered, and had some non-trivial keep-out zones. To make matters worse we didn’t finish fabrication until shortly before our first competition. To deal with these challenges I implemented a physics simulation of the arm to develop control algorithms and test control logic on. The model for the physics simulation also did double duty as a feed-forward controller with good enough accuracy to perform open loop movements with only a few inches of error.\n\nMy initial approach for controlling the arm was trapezoidal velocity profiles manually strung together to avoid keep out zones. These trajectories were slow and didn’t effectively utilize the available power of the motors. To fix this I used CASAdi, a numerical optimization problem solver with the physics model to generate time-optimal trajectories that obeyed the current limits of the motor and avoided the keep out zones. The optimization solver exploited the inertia of the arm to keep the motors applying full power for larger portions of the trajectory and led to significantly faster and smoother movements of the arm. Due to the heavy computational requirements of generating the trajectories, the trajectories were computed offline and stored as json files on the robot.",
      image1: "/portfolio/traj_opt.gif",
    },
    {
      id: "led-alarm-clock",
      name: "Fixing My Sleep With LEDS (for free)",
      description:
        "Using my roommate's extra LED strip, free parts from the makerspace, and scraps from an E-waste bin, I made an improvised LED driver/alarm clock",
      skills: ["Embedded C", "Electronic Design", "Art of the Bodge"],
      p1: "My sleep schedule is less than optimal. When my roommate had a left over strip of LED lights I figured maybe I could trick my brain into a better sleep schedule by making the LED strip into a sort of alarm clock that would display blue light with gradually increasing brightness before the time I wanted to wake up. In the spirit of keeping it frugal I decided to make my alarm clock with nothing but free parts from the campus makerspace and scraps out of the IEEE Club e-waste bin.\n\nThe makerspace had an astounding total of zero mosfets. Undeterred, I grabbed a few SN754410 H-bridge drivers for controlling brushed DC motors and made do. By tying the direction pins to the appropriate logic level and driving the enable pin with a PWM signal I could use the motor drivers as low side switches for the LED strip. I found an ESP32 and buck converter in the e-waste bin alongside a 24 volt dc power supply. After wiring everything up on some perfboard I had a working (incredibly janky) LED driver without spending a dime.\n\nThe driver is controlled through the bluetooth interface on the ESP32. Commands can be sent from a phone or computer to set the color, turn the strip on and off, and set the alarm schedule. While less efficient than a correctly designed LED driver would be, the motor driver ICs made a good substitute with only a few tens of milliamps of idle current consumption and good dimming performance owing to the fast switching speed of the H-bridge.",
      image1: "/portfolio/led_alarm_clock.png",
    },
    {
      id: "game-of-life",
      name: "Conway's Game of Life",
      description:
        "Conway's Game of Life is a simple cellular automata. In this project I implemented the game in python as an exercise in learning GUI programming and game engine design paradigms",
      skills: ["Python", "tkinter", "numpy"],
      p1: "I created this project as an exercise in learning GUI programming. The simulation is Conway’s Game Of Life (fun fact: he hated that this is what he was known for), a simple cellular automata. My implementation separates the game logic and rendering into two separate threads. This separation keeps the UI responsive even if the game logic bogs down under really high cell counts.\n\nThere are two game logic backends, one with a fixed size grid and another with a dynamic list of living cells. For small patterns the fixed grid implementation runs faster than the dynamic list approach due to the lower overhead of checking for neighboring cells in the matrix instead of searching the list. The dynamic list approach allows an infinite game board and avoids the chrome levels of memory hogging a large fixed grid brings. The code is almost entirely native python with numpy as the only dependency.",
      image1: "/portfolio/game_of_life.gif",
    },
      ],
  experience: [
    {
      company: "AvL Technologies",
      title: "Hardware/Software Engineering Intern",
      dateRange: "May 2025- Jul 2025",
      bullets: [
        "Prototyped a differential GPS based AHRS system with higher accuracy and faster heading acquisition times than commericial options for 80% cheaper",
        "Designed a POE ethernet switch as a drop in replacement for existing systems",
        "Created four scripts and utility programs to eliminate manual data collection and accelerate development cycles",
      ],
    },
    {
      company: "Mu Nirvana",
      title: "Cloud Engineering Intern",
      dateRange: "Jul 2021 - Aug 2024",
      bullets: [
        "Developed solutions for clients in regulated industries such as JP Morgan Chase and the US Air Force",
        "Used a variety of tools including Terraform, Docker, Kubernetes, and AWS to provision cloud infrastructure using declarative patterns to promote maintainability",
        "Improved CI/CD workflows to increase efficiency by as much as 10x",
      ],
    },
  ],
  education: [
    {
      school: "Georgia Institue of Technology",
      degree: "Bachelor of Science in Electrical Engineering",
      dateRange: "2024 - 2028",
      achievements: [
        "Junior by credit hours w/ 4.0 GPA",
	"Guidance Navigation and Control Club software and electrical team member",
        "IEEE SoutheastCon Hardware Competition Lead",
      ],
    },
  ],
};
