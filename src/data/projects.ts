export interface Project {
  title: string;
  client: string;
  year: number;
  semester: string;
  fields: string[];
  context: string;
  problem: string;
  goals: string;
  results: string;
  conclusion: string;
  recommendation: string;
}

export const projects: Project[] = [
  {
    title: "Healthy Workplace Monitoring System",
    client: "Van Beek",
    year: 2025,
    semester: "fall",
    fields: ["Engineering", "ICT", "Business"],
    context: "Van Beek operates in both office and production environments where factors such as temperature, air quality, noise, and emissions can impact employee health and comfort. These conditions are not currently monitored through a single, integrated system.",
    problem: "Employees are exposed to environmental factors such as temperature changes, CO₂ buildup, welding fumes, noise, and airborne particles. These conditions are not continuously or systematically monitored.",
    goals: "Develop a Healthy Workplace Monitoring System that continuously measures key environmental parameters and displays real-time data for proactive workplace health improvements.",
    results: "A working prototype measuring temperature, humidity, air quality, light intensity, noise levels, and carbon monoxide. Successful integration with a real-time dashboard using green, yellow, and red health zones.",
    conclusion: "The project successfully delivered a functional prototype that reliably collects and displays environmental data in real time, serving as a strong foundation for further development.",
    recommendation: "Conduct long-term field testing, perform professional calibration, improve enclosure design, explore integration with building management systems, and implement automated alerts.",
  },
  {
    title: "Or a c.l.e. - Streetcred",
    client: "Or a c.l.e.",
    year: 2025,
    semester: "fall",
    fields: ["Design", "ICT", "Engineering"],
    context: "The Spoorzone district faces challenges related to social connection, safety, and a sense of belonging. StreetCred explores how technology can benefit people in public space through motivation and voluntary participation.",
    problem: "The Spoorzone lacks inviting, inclusive public spaces that encourage positive social interaction, shared responsibility, and a sense of identity.",
    goals: "Create a physical interactive installation that invites people to explore and interact, stimulating positive social behaviour and a stronger sense of belonging in public space.",
    results: "A completed interactive oracle vending machine for children that encourages responsible behaviour by turning litter collection into a playful, rewarding activity with a scoring and levelling system.",
    conclusion: "StreetCred demonstrates how a playful, interactive installation can create moments of connection in public space, especially among children.",
    recommendation: "Develop a weatherproof version for permanent outdoor placement, implement a digital rewards system, and explore partnerships with local organizations.",
  },
  {
    title: "Designing a VR Room",
    client: "Regina Coeli",
    year: 2025,
    semester: "fall",
    fields: ["Design", "Business"],
    context: "Regina Coeli is a language institute known for intensive and personalized language programs. They see Virtual Reality as a way to strengthen learning but lack a dedicated VR space.",
    problem: "VR lessons are currently given in normal classrooms, requiring teachers to rearrange furniture and check safety each time. This makes VR less attractive to use and limits adoption.",
    goals: "Design a permanent Innovation & Immersion Room for VR learning that is safe, comfortable, easy to use, and makes VR a regular part of the learning program.",
    results: "A design with three small VR rooms offering privacy, comfort, and flexibility, each with adjustable desks, large screens, and a computer. A central storage room for VR headset management.",
    conclusion: "The final design combines usability, safety, and innovation within the available budget, offering a practical solution for integrating VR into language education.",
    recommendation: "Appoint a permanent VR coordinator, implement mandatory VR training for teachers, create standard lesson formats, and review new technologies annually.",
  },
  {
    title: "AI against Litter",
    client: "Avans Hogeschool",
    year: 2025,
    semester: "fall",
    fields: ["Design", "ICT", "Engineering", "Business"],
    context: "Litter in public spaces is an ongoing problem. Volunteers face difficulties such as lack of motivation and manual waste registration. Municipalities lack structured data about litter patterns.",
    problem: "Litter collection by volunteers is often inefficient and demotivating due to manual data registration and lack of feedback, creating a gap between volunteer effort and data-driven policy making.",
    goals: "Design and develop a smart litter collection system that supports volunteers, automatically detects and classifies litter using AI, and provides data through a mobile application.",
    results: "A working prototype combining a camera-equipped litter picker with Raspberry Pi, an AI model for litter recognition, and a mobile application for data storage and review.",
    conclusion: "The project shows it is possible to combine hardware, AI, and a mobile application into a system that supports volunteer-based litter collection, with clear potential for real-world impact.",
    recommendation: "Conduct extensive user testing during real clean-up events, improve the AI model with more diverse data, implement a backend server with dashboard, and develop pilot partnerships.",
  },
  {
    title: "Interactive Light Object",
    client: "Innovatielab",
    year: 2025,
    semester: "fall",
    fields: ["Design", "ICT", "Engineering"],
    context: "The Innovatie Kwartier Den Bosch aims to combine technology, creativity, and entrepreneurship. There is a need to make the area's innovative identity more visible to residents and visitors.",
    problem: "Awareness of the Innovatie Kwartier among residents and visitors remains limited. The Innovation Lab functions as a closed space with low participation and limited community understanding.",
    goals: "Design interactive light objects that translate sensor data into sensory experiences through art and technology, sparking curiosity and connecting people to the Innovation Lab's activities.",
    results: "An interactive LED wall installation that responds to environmental sensor data, creating dynamic visual patterns that reflect building activity and engage passers-by.",
    conclusion: "The project successfully created a bridge between the Innovation Lab's internal activities and the outside world through an engaging, technology-driven art installation.",
    recommendation: "Integrate the lighting system permanently into the building, design a custom PCB, conduct extensive testing, and explore additional sensor data visualizations.",
  },
  {
    title: "BESS Subsystems",
    client: "TE Connectivity",
    year: 2025,
    semester: "fall",
    fields: ["Engineering", "Business"],
    context: "New technologies indicate that the electricity grid may not be able to handle increasing electrical loads in the future. Battery Energy Storage Systems offer an alternative solution.",
    problem: "Batteries (LFP) cannot operate uncontrolled — they must always remain within their safe operating range, requiring a monitoring and protection system.",
    goals: "Realize a proof of concept of a complete Battery Energy Storage System (BESS) with housing, data readout, maintenance lighting, output power, emergency stop, and door sensor.",
    results: "A functional BESS proof of concept with integrated subsystems including monitoring, safety mechanisms, and power management components.",
    conclusion: "Extensive knowledge was gained about developing an industrial battery system, documented in research reports for TE Connectivity to build upon.",
    recommendation: "Replace the current BMS with a custom design for better flexibility, rewire all connections, and rebuild batteries using spot or laser welding with nickel strips.",
  },
  {
    title: "Sensorlab 2.0",
    client: "Innovatielab",
    year: 2025,
    semester: "fall",
    fields: ["Design", "ICT", "Engineering", "Business"],
    context: "The Innovation Lab previously implemented a sensor infrastructure throughout the building to collect various metrics including temperature, CO2 levels, and desk occupancy data.",
    problem: "While sensor data was being collected continuously, it remained underutilized with no actionable insights or practical applications being derived from the information.",
    goals: "Enhance the experience and collaboration within the Innovation Lab ecosystem by creating meaningful applications for the collected sensor data.",
    results: "Two interactive installations: a cloud-shaped LED strip display and a receipt printer system that generates task suggestions based on real-time sensor metrics and environmental data.",
    conclusion: "The project successfully demonstrated practical applications for sensor data, though full system integration proved more challenging than initially anticipated.",
    recommendation: "Integrate the lighting system permanently, design a custom PCB, conduct more extensive testing, and implement a robust task completion verification system.",
  },
];
