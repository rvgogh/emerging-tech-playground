export type T = { nl: string; en: string };

export interface Project {
  title: string;
  client: string;
  clientUrl?: string;
  year: number;
  semester: T;
  fields: string[];
  video?: string;
  image?: string;
  images?: string[];
  context: T;
  problem: T;
  goals: T;
  results: T;
  conclusion: T;
  recommendation: T;
}

export const projects: Project[] = [
  {
    title: "Healthy Workplace Monitoring System",
    client: "Van Beek",
    clientUrl: "https://www.van-beek.nl/",
    image: "/images/van-beek.jpg",
    year: 2025,
    semester: { nl: "najaar", en: "fall" },
    fields: ["Engineering", "ICT", "Business"],
    context: {
      nl: "Van Beek opereert in zowel kantoor- als productieomgevingen waar factoren als temperatuur, luchtkwaliteit, geluid en emissies de gezondheid en het comfort van medewerkers kunnen beïnvloeden. Deze omstandigheden worden momenteel niet via één geïntegreerd systeem gemonitord.",
      en: "Van Beek operates in both office and production environments where factors such as temperature, air quality, noise, and emissions can impact employee health and comfort. These conditions are not currently monitored through a single, integrated system.",
    },
    problem: {
      nl: "Medewerkers worden blootgesteld aan omgevingsfactoren zoals temperatuurveranderingen, CO₂-opbouw, lasdampen, geluid en zwevende deeltjes. Deze omstandigheden worden niet continu of systematisch gemonitord.",
      en: "Employees are exposed to environmental factors such as temperature changes, CO₂ buildup, welding fumes, noise, and airborne particles. These conditions are not continuously or systematically monitored.",
    },
    goals: {
      nl: "Een Healthy Workplace Monitoring System ontwikkelen dat continu belangrijke omgevingsparameters meet en realtime data toont voor proactieve verbeteringen van de werkplekomstandigheden.",
      en: "Develop a Healthy Workplace Monitoring System that continuously measures key environmental parameters and displays real-time data for proactive workplace health improvements.",
    },
    results: {
      nl: "Een werkend prototype dat temperatuur, luchtvochtigheid, luchtkwaliteit, lichtintensiteit, geluidsniveaus en koolmonoxide meet. Succesvolle integratie met een realtime dashboard met groene, gele en rode gezondheidszones.",
      en: "A working prototype measuring temperature, humidity, air quality, light intensity, noise levels, and carbon monoxide. Successful integration with a real-time dashboard using green, yellow, and red health zones.",
    },
    conclusion: {
      nl: "Het project heeft succesvol een functioneel prototype opgeleverd dat betrouwbaar omgevingsdata verzamelt en in realtime weergeeft, als sterke basis voor verdere ontwikkeling.",
      en: "The project successfully delivered a functional prototype that reliably collects and displays environmental data in real time, serving as a strong foundation for further development.",
    },
    recommendation: {
      nl: "Langdurige veldtests uitvoeren, professionele kalibratie, verbeterd behuizingsontwerp, integratie met gebouwbeheersystemen verkennen en geautomatiseerde waarschuwingen implementeren.",
      en: "Conduct long-term field testing, perform professional calibration, improve enclosure design, explore integration with building management systems, and implement automated alerts.",
    },
  },
  {
    title: "Or a c.l.e. - Streetcred",
    client: "Openbaring ruimte (Matthijs Bosman)",
    clientUrl: "https://www.openbaringruimte.nl/",
    image: "/images/street-cred.png",
    year: 2025,
    semester: { nl: "najaar", en: "fall" },
    fields: ["Design", "ICT", "Engineering"],
    context: {
      nl: "De Spoorzone kampt met uitdagingen rondom sociale verbinding, veiligheid en een gevoel van verbondenheid. StreetCred onderzoekt hoe technologie mensen in de openbare ruimte ten goede kan komen via motivatie en vrijwillige deelname.",
      en: "The Spoorzone district faces challenges related to social connection, safety, and a sense of belonging. StreetCred explores how technology can benefit people in public space through motivation and voluntary participation.",
    },
    problem: {
      nl: "De Spoorzone mist uitnodigende, inclusieve openbare ruimtes die positieve sociale interactie, gedeelde verantwoordelijkheid en een gevoel van identiteit stimuleren.",
      en: "The Spoorzone lacks inviting, inclusive public spaces that encourage positive social interaction, shared responsibility, and a sense of identity.",
    },
    goals: {
      nl: "Een fysieke interactieve installatie creëren die mensen uitnodigt om te verkennen en interacteren, positief sociaal gedrag en een sterker gevoel van verbondenheid in de openbare ruimte stimulerend.",
      en: "Create a physical interactive installation that invites people to explore and interact, stimulating positive social behaviour and a stronger sense of belonging in public space.",
    },
    results: {
      nl: "Een voltooide interactieve orakel-automaat voor kinderen die verantwoordelijk gedrag aanmoedigt door het verzamelen van zwerfafval om te zetten in een speelse, belonende activiteit met een score- en level-systeem.",
      en: "A completed interactive oracle vending machine for children that encourages responsible behaviour by turning litter collection into a playful, rewarding activity with a scoring and levelling system.",
    },
    conclusion: {
      nl: "StreetCred laat zien hoe een speelse, interactieve installatie momenten van verbinding kan creëren in de openbare ruimte, vooral onder kinderen.",
      en: "StreetCred demonstrates how a playful, interactive installation can create moments of connection in public space, especially among children.",
    },
    recommendation: {
      nl: "Een weerbestendige versie ontwikkelen voor permanente buitenplaatsing, een digitaal beloningssysteem implementeren en samenwerkingen met lokale organisaties verkennen.",
      en: "Develop a weatherproof version for permanent outdoor placement, implement a digital rewards system, and explore partnerships with local organizations.",
    },
  },
  {
    title: "Designing a VR Room",
    client: "Regina Coeli",
    clientUrl: "https://www.reginacoeli.nl/",
    video: "/videos/regina-coeli.mp4",
    year: 2025,
    semester: { nl: "najaar", en: "fall" },
    fields: ["Design", "Business"],
    context: {
      nl: "Regina Coeli is een taalinstituut dat bekend staat om intensieve en gepersonaliseerde taalprogramma's. Zij zien Virtual Reality als een manier om het leren te versterken, maar missen een speciale VR-ruimte.",
      en: "Regina Coeli is a language institute known for intensive and personalized language programs. They see Virtual Reality as a way to strengthen learning but lack a dedicated VR space.",
    },
    problem: {
      nl: "VR-lessen worden momenteel gegeven in normale klaslokalen, waarbij docenten elke keer meubilair moeten verplaatsen en de veiligheid moeten controleren. Dit maakt VR minder aantrekkelijk in gebruik en beperkt de adoptie.",
      en: "VR lessons are currently given in normal classrooms, requiring teachers to rearrange furniture and check safety each time. This makes VR less attractive to use and limits adoption.",
    },
    goals: {
      nl: "Een permanente Innovation & Immersion Room ontwerpen voor VR-leren die veilig, comfortabel, gebruiksvriendelijk is en VR een vast onderdeel maakt van het lesprogramma.",
      en: "Design a permanent Innovation & Immersion Room for VR learning that is safe, comfortable, easy to use, and makes VR a regular part of the learning program.",
    },
    results: {
      nl: "Een ontwerp met drie kleine VR-ruimtes die privacy, comfort en flexibiliteit bieden, elk met verstelbare bureaus, grote schermen en een computer. Een centrale opslagruimte voor VR-headsetbeheer.",
      en: "A design with three small VR rooms offering privacy, comfort, and flexibility, each with adjustable desks, large screens, and a computer. A central storage room for VR headset management.",
    },
    conclusion: {
      nl: "Het definitieve ontwerp combineert bruikbaarheid, veiligheid en innovatie binnen het beschikbare budget en biedt een praktische oplossing voor het integreren van VR in taalonderwijs.",
      en: "The final design combines usability, safety, and innovation within the available budget, offering a practical solution for integrating VR into language education.",
    },
    recommendation: {
      nl: "Een permanente VR-coördinator aanstellen, verplichte VR-training voor docenten implementeren, standaard lesformaten maken en jaarlijks nieuwe technologieën evalueren.",
      en: "Appoint a permanent VR coordinator, implement mandatory VR training for teachers, create standard lesson formats, and review new technologies annually.",
    },
  },
  {
    title: "AI against Litter",
    client: "Avans lectoraat Applied responsible AI",
    clientUrl: "https://www.avans.nl/onderzoek/perspectief-in-gezondheid/applied-responsible-artificial-intelligence",
    year: 2025,
    semester: { nl: "najaar", en: "fall" },
    fields: ["Design", "ICT", "Engineering", "Business"],
    video: "/videos/ai-against-litter.mp4",
    context: {
      nl: "Zwerfafval in de openbare ruimte is een aanhoudend probleem. Vrijwilligers ervaren moeilijkheden zoals gebrek aan motivatie en handmatige afvalregistratie. Gemeenten missen gestructureerde data over zwerfafvalpatronen.",
      en: "Litter in public spaces is an ongoing problem. Volunteers face difficulties such as lack of motivation and manual waste registration. Municipalities lack structured data about litter patterns.",
    },
    problem: {
      nl: "Het verzamelen van zwerfafval door vrijwilligers is vaak inefficiënt en demotiverend door handmatige dataregistratie en gebrek aan feedback, wat een kloof creëert tussen vrijwilligersinzet en datagedreven beleid.",
      en: "Litter collection by volunteers is often inefficient and demotivating due to manual data registration and lack of feedback, creating a gap between volunteer effort and data-driven policy making.",
    },
    goals: {
      nl: "Een slim zwerfafvalverzamelsysteem ontwerpen en ontwikkelen dat vrijwilligers ondersteunt, automatisch afval detecteert en classificeert met AI, en data beschikbaar stelt via een mobiele applicatie.",
      en: "Design and develop a smart litter collection system that supports volunteers, automatically detects and classifies litter using AI, and provides data through a mobile application.",
    },
    results: {
      nl: "Een werkend prototype dat een camera-uitgeruste afvalgrijper combineert met Raspberry Pi, een AI-model voor afvalherkenning en een mobiele applicatie voor dataopslag en -beoordeling.",
      en: "A working prototype combining a camera-equipped litter picker with Raspberry Pi, an AI model for litter recognition, and a mobile application for data storage and review.",
    },
    conclusion: {
      nl: "Het project toont aan dat het mogelijk is om hardware, AI en een mobiele applicatie te combineren tot een systeem dat vrijwilligersgebaseerde afvalverzameling ondersteunt, met duidelijk potentieel voor impact in de praktijk.",
      en: "The project shows it is possible to combine hardware, AI, and a mobile application into a system that supports volunteer-based litter collection, with clear potential for real-world impact.",
    },
    recommendation: {
      nl: "Uitgebreide gebruikerstests uitvoeren tijdens echte opruimacties, het AI-model verbeteren met meer diverse data, een backendserver met dashboard implementeren en pilotsamenwerkingen ontwikkelen.",
      en: "Conduct extensive user testing during real clean-up events, improve the AI model with more diverse data, implement a backend server with dashboard, and develop pilot partnerships.",
    },
  },
  {
    title: "Interactive Light Object",
    client: "Innovatielab",
    clientUrl: "https://www.ik-db.nl/",
    year: 2025,
    semester: { nl: "najaar", en: "fall" },
    fields: ["Design", "ICT", "Engineering"],
    video: "/videos/interactive-light-object.mp4",
    context: {
      nl: "Het Innovatie Kwartier Den Bosch wil technologie, creativiteit en ondernemerschap combineren. Er is behoefte om de innovatieve identiteit van het gebied zichtbaarder te maken voor bewoners en bezoekers.",
      en: "The Innovatie Kwartier Den Bosch aims to combine technology, creativity, and entrepreneurship. There is a need to make the area's innovative identity more visible to residents and visitors.",
    },
    problem: {
      nl: "Het bewustzijn over het Innovatie Kwartier onder bewoners en bezoekers blijft beperkt. Het Innovation Lab functioneert als een gesloten ruimte met lage participatie en beperkt begrip vanuit de gemeenschap.",
      en: "Awareness of the Innovatie Kwartier among residents and visitors remains limited. The Innovation Lab functions as a closed space with low participation and limited community understanding.",
    },
    goals: {
      nl: "Interactieve lichtobjecten ontwerpen die sensordata vertalen naar zintuiglijke ervaringen door kunst en technologie, nieuwsgierigheid opwekkend en mensen verbindend met de activiteiten van het Innovation Lab.",
      en: "Design interactive light objects that translate sensor data into sensory experiences through art and technology, sparking curiosity and connecting people to the Innovation Lab's activities.",
    },
    results: {
      nl: "Een interactieve LED-wandinstallatie die reageert op omgevingssensordata, dynamische visuele patronen creërend die de activiteit in het gebouw weerspiegelen en voorbijgangers betrekken.",
      en: "An interactive LED wall installation that responds to environmental sensor data, creating dynamic visual patterns that reflect building activity and engage passers-by.",
    },
    conclusion: {
      nl: "Het project heeft succesvol een brug gecreëerd tussen de interne activiteiten van het Innovation Lab en de buitenwereld via een boeiende, technologiegedreven kunstinstallatie.",
      en: "The project successfully created a bridge between the Innovation Lab's internal activities and the outside world through an engaging, technology-driven art installation.",
    },
    recommendation: {
      nl: "Het verlichtingssysteem permanent in het gebouw integreren, een custom PCB ontwerpen, uitgebreide tests uitvoeren en aanvullende sensordatavisualisaties verkennen.",
      en: "Integrate the lighting system permanently into the building, design a custom PCB, conduct extensive testing, and explore additional sensor data visualizations.",
    },
  },
  {
    title: "BESS Subsystems",
    client: "TE Connectivity",
    clientUrl: "https://www.te.com/",
    image: "/images/te-connectivity.jpg",
    images: ["/images/te-connectivity.jpg", "/images/bess-1.jpg", "/images/bess-2.jpg", "/images/bess-3.jpg"],
    year: 2025,
    semester: { nl: "najaar", en: "fall" },
    fields: ["Engineering", "Business"],
    context: {
      nl: "Nieuwe technologieën geven aan dat het elektriciteitsnet mogelijk niet in staat is om toenemende elektrische belastingen in de toekomst aan te kunnen. Battery Energy Storage Systems bieden een alternatieve oplossing.",
      en: "New technologies indicate that the electricity grid may not be able to handle increasing electrical loads in the future. Battery Energy Storage Systems offer an alternative solution.",
    },
    problem: {
      nl: "Batterijen (LFP) kunnen niet ongecontroleerd werken — ze moeten altijd binnen hun veilige werkbereik blijven, wat een bewakings- en beschermingssysteem vereist.",
      en: "Batteries (LFP) cannot operate uncontrolled — they must always remain within their safe operating range, requiring a monitoring and protection system.",
    },
    goals: {
      nl: "Een proof of concept realiseren van een compleet Battery Energy Storage System (BESS) met behuizing, data-uitlezing, onderhoudsverlichting, uitgangsvermogen, noodstop en deursensor.",
      en: "Realize a proof of concept of a complete Battery Energy Storage System (BESS) with housing, data readout, maintenance lighting, output power, emergency stop, and door sensor.",
    },
    results: {
      nl: "Een functioneel BESS proof of concept met geïntegreerde subsystemen waaronder monitoring, veiligheidsmechanismen en energiebeheercomponenten.",
      en: "A functional BESS proof of concept with integrated subsystems including monitoring, safety mechanisms, and power management components.",
    },
    conclusion: {
      nl: "Er is uitgebreide kennis opgedaan over het ontwikkelen van een industrieel batterijsysteem, gedocumenteerd in onderzoeksrapporten voor TE Connectivity om op voort te bouwen.",
      en: "Extensive knowledge was gained about developing an industrial battery system, documented in research reports for TE Connectivity to build upon.",
    },
    recommendation: {
      nl: "Het huidige BMS vervangen door een custom ontwerp voor meer flexibiliteit, alle verbindingen opnieuw bedraden en batterijen herbouwen met spot- of laserlassen met nikkelstrips.",
      en: "Replace the current BMS with a custom design for better flexibility, rewire all connections, and rebuild batteries using spot or laser welding with nickel strips.",
    },
  },
  {
    title: "Sensorlab 2.0",
    client: "Innovatielab",
    clientUrl: "https://www.ik-db.nl/",
    image: "/images/sensorlab.jpg",
    images: ["/images/sensorlab.jpg", "/images/sensorlab-1.jpg", "/images/sensorlab-2.jpg", "/images/sensorlab-3.jpg", "/images/sensorlab-4.jpg", "/images/sensorlab-5.jpg"],
    year: 2025,
    semester: { nl: "najaar", en: "fall" },
    fields: ["Design", "ICT", "Engineering", "Business"],
    context: {
      nl: "Het Innovation Lab had eerder een sensorinfrastructuur door het hele gebouw geïmplementeerd om diverse metingen te verzamelen, waaronder temperatuur, CO2-niveaus en bureaubezettingsdata.",
      en: "The Innovation Lab previously implemented a sensor infrastructure throughout the building to collect various metrics including temperature, CO2 levels, and desk occupancy data.",
    },
    problem: {
      nl: "Hoewel sensordata continu werd verzameld, bleef deze onderbenut zonder bruikbare inzichten of praktische toepassingen die uit de informatie werden afgeleid.",
      en: "While sensor data was being collected continuously, it remained underutilized with no actionable insights or practical applications being derived from the information.",
    },
    goals: {
      nl: "De ervaring en samenwerking binnen het Innovation Lab-ecosysteem verbeteren door betekenisvolle toepassingen te creëren voor de verzamelde sensordata.",
      en: "Enhance the experience and collaboration within the Innovation Lab ecosystem by creating meaningful applications for the collected sensor data.",
    },
    results: {
      nl: "Twee interactieve installaties: een wolkvormige LED-strip display en een bonprintersysteem dat taaksuggesties genereert op basis van realtime sensormetingen en omgevingsdata.",
      en: "Two interactive installations: a cloud-shaped LED strip display and a receipt printer system that generates task suggestions based on real-time sensor metrics and environmental data.",
    },
    conclusion: {
      nl: "Het project heeft succesvol praktische toepassingen voor sensordata gedemonstreerd, hoewel volledige systeemintegratie uitdagender bleek dan aanvankelijk verwacht.",
      en: "The project successfully demonstrated practical applications for sensor data, though full system integration proved more challenging than initially anticipated.",
    },
    recommendation: {
      nl: "Het verlichtingssysteem permanent integreren, een custom PCB ontwerpen, uitgebreidere tests uitvoeren en een robuust taakverificatiesysteem implementeren.",
      en: "Integrate the lighting system permanently, design a custom PCB, conduct more extensive testing, and implement a robust task completion verification system.",
    },
  },
];
