export interface Review {
  name: string;
  country: string;
  study: string;
  fields: string[];
  project: string;
  stars: number;
  quote: string;
}

export const reviews: Review[] = [
  // Healthy Workplace Monitoring System
  { name: "Sarah Mitchell", country: "USA", study: "Mechanical Engineering", fields: ["Engineering"], project: "Healthy Workplace Monitoring System", stars: 4, quote: "This project was very enjoyable and it was cool being able to apply what I've previously learned and create a device that will help Van Beek with their employee's safety." },
  { name: "Lukas Weber", country: "Germany", study: "Electrical Engineering", fields: ["Business", "Engineering"], project: "Healthy Workplace Monitoring System", stars: 5, quote: "Taking part in this project was extremely motivating for me. I really enjoyed working closely with such a committed and skilled team, where everyone was eager to share knowledge and support each other." },
  { name: "Daan de Vries", country: "Netherlands", study: "Electrical Engineering", fields: ["Engineering"], project: "Healthy Workplace Monitoring System", stars: 5, quote: "Collaborating with teammates from diverse disciplines made this project fun and interesting. Combining our different perspectives and strengths allowed us to overcome challenges and produce a result we're all proud of." },
  { name: "Niels Jansen", country: "Netherlands", study: "Computer Science", fields: ["ICT"], project: "Healthy Workplace Monitoring System", stars: 4, quote: "Working on this project with people from different engineering backgrounds made it really interesting. Everyone contributed their own unique skills, and bringing all of that together into a single project was a great experience." },
  { name: "Bram Hendriks", country: "Netherlands", study: "Electrical Engineering", fields: ["Engineering"], project: "Healthy Workplace Monitoring System", stars: 5, quote: "During this project I was able to put my knowledge and experience to the test. It was great working in this team of various disciplines. Together we were able to deliver an awesome result!" },

  // Or a c.l.e. - Streetcred
  { name: "James Crawford", country: "Scotland", study: "Construction Surveying", fields: ["Engineering"], project: "Or a c.l.e. - Streetcred", stars: 5, quote: "It was a completely new experience for me, as I had never worked on a project like this before or studied in a different country. Working together turned the project into a meaningful learning experience." },
  { name: "Ruben Smit", country: "Netherlands", study: "Communication & Multimedia Design", fields: ["Design"], project: "Or a c.l.e. - Streetcred", stars: 4, quote: "Working in a group with people from different cultures and backgrounds was especially valuable. Being able to cooperate with people from different cultures is an important skill." },
  { name: "María García", country: "Spain", study: "Business Administration & Data Science", fields: ["Business", "ICT"], project: "Or a c.l.e. - Streetcred", stars: 5, quote: "I really enjoyed doing this work and I met new people who brought many positive things to my experience. I'm taking away a great deal of learning and a wonderful experience working with them." },
  { name: "Jesse Vermeer", country: "Netherlands", study: "Communication & Multimedia Design", fields: ["Design"], project: "Or a c.l.e. - Streetcred", stars: 5, quote: "What made the project particularly special was the opportunity to work for a real client. The trust and guidance encouraged me to approach design from a new perspective and helped me grow as a designer." },

  // Designing a VR room
  { name: "Carlos López", country: "Spain", study: "Business Administration & Data Science", fields: ["Business", "ICT"], project: "Designing a VR room", stars: 4, quote: "This project has taught me that working in a group is very important and enriching, since being able to share and work with other people who think differently than you opens your mind." },
  { name: "Floor van den Berg", country: "Netherlands", study: "Communication & Multimedia Design", fields: ["Design"], project: "Designing a VR room", stars: 4, quote: "Working on this project was a nice way to see what it's actually like to work for a company. I also learned a lot from being in a multicultural group." },
  { name: "Alejandro Ruiz", country: "Spain", study: "Business & Technology", fields: ["Business", "Engineering"], project: "Designing a VR room", stars: 5, quote: "Being in a new environment was refreshing and motivating, and it pushed me to step out of my comfort zone. The project was a positive learning experience that allowed me to grow both personally and academically." },
  { name: "Lisa Bakker", country: "Netherlands", study: "Business IT & Management", fields: ["Business", "ICT"], project: "Designing a VR room", stars: 3, quote: "My experience with this project was very educational, but also challenging. I learned a lot about myself and that depending on others is not always easy for me." },

  // AI against Litter
  { name: "Pablo Martín", country: "Spain", study: "Business & Technology", fields: ["Business", "Engineering"], project: "AI against Litter", stars: 4, quote: "This experience showed me that a successful project is not about doing everything, but about choosing priorities, adapting to challenges, and working well as a team." },
  { name: "Miguel Santos", country: "Portugal", study: "Computer Engineering", fields: ["ICT", "Engineering"], project: "AI against Litter", stars: 5, quote: "I gained hands-on experience in combining hardware, artificial intelligence, and app design. The project highlighted the challenges of building a functional prototype." },
  { name: "Thijs Mulder", country: "Netherlands", study: "Communication & Multimedia Design", fields: ["Design"], project: "AI against Litter", stars: 4, quote: "This project has taught me to work with other types of studies and cultures and that how we as designers work and think is completely different from how others do." },
  { name: "Wouter Dekker", country: "Netherlands", study: "Software Engineering", fields: ["ICT"], project: "AI against Litter", stars: 4, quote: "Working on the project has taught me to work better in a group, it has also shown me how to work better systematically." },

  // Interactive Light object
  { name: "Eva Willems", country: "Netherlands", study: "Technical Computer Science", fields: ["ICT"], project: "Interactive Light Object", stars: 5, quote: "I've learned a lot during this minor about myself, mainly that I should be more confident. It was really interesting to step out of the Computer Science Engineering bubble to work with other specialities and nationalities!" },
  { name: "Stijn van Dijk", country: "Netherlands", study: "Software Engineering", fields: ["ICT"], project: "Interactive Light Object", stars: 4, quote: "It has been great working in a team with such different expertise's and learning from each other." },
  { name: "Emily Thompson", country: "USA", study: "Electrical Engineering", fields: ["Engineering"], project: "Interactive Light Object", stars: 4, quote: "Engineering at the Innovationlab stretched my creative limits and encouraged a unique style of creating." },
  { name: "Iris Meijer", country: "Netherlands", study: "Mechanical Engineering", fields: ["Engineering"], project: "Interactive Light Object", stars: 5, quote: "Stepping outside my comfort zone through Design Thinking and creating an LED wall with an amazing team made this project both challenging and incredibly fun." },
  { name: "Lucía Fernández", country: "Spain", study: "Industrial Design", fields: ["Design", "Engineering"], project: "Interactive Light Object", stars: 5, quote: "Loved working in such a transdisciplinary environment with amazing people to learn from and become friends with!" },

  // BESS subsystems
  { name: "Thomas Visser", country: "Netherlands", study: "Electrical Engineering", fields: ["Engineering"], project: "BESS Subsystems", stars: 4, quote: "Interessante view gekregen op de toekomst van het net en DC power in de EU." },
  { name: "Rick Bos", country: "Netherlands", study: "Electrical Engineering", fields: ["Engineering"], project: "BESS Subsystems", stars: 5, quote: "Een leerzaam project waarin ik van dichtbij heb mogen ervaren wat er komt kijken bij het ontwerpen van een industrieel Battery Energy Storage System." },
  { name: "Mikko Laine", country: "Finland", study: "Software Engineering", fields: ["ICT"], project: "BESS Subsystems", stars: 4, quote: "In this project, I learned how to develop software with embedded electronics in mind." },
  { name: "Joris Kuipers", country: "Netherlands", study: "Electrical Engineering", fields: ["Engineering"], project: "BESS Subsystems", stars: 4, quote: "Een leerzaam project waarin ik mezelf verder heb kunnen ontwikkelen op gebied van samenwerken in een groot project over een termijn van een half jaar." },
  { name: "Max de Groot", country: "Netherlands", study: "Technische Bedrijfskunde", fields: ["Business", "Engineering"], project: "BESS Subsystems", stars: 5, quote: "Dit project heeft mij geholpen om technisch systeemontwerp te verbinden met marktpositionering en waardecreatie binnen een industriële BESS-context." },

  // Sensorlab 2.0
  { name: "Koen Peters", country: "Netherlands", study: "Software Engineering", fields: ["ICT"], project: "Sensorlab 2.0", stars: 5, quote: "Integrating software and hardware is really fun. Seeing sensor data come to life through physical outputs like the LED cloud and receipt printer made all the technical challenges worthwhile." },
  { name: "Sander Brouwer", country: "Netherlands", study: "Software Engineering", fields: ["ICT"], project: "Sensorlab 2.0", stars: 4, quote: "Working with people from different disciplines pushed me out of my comfort zone. I learned that communication is just as important as technical skills when building something together." },
  { name: "Jiyeon Park", country: "South Korea", study: "Bio Technology", fields: ["ICT", "Business"], project: "Sensorlab 2.0", stars: 5, quote: "Having software developers, designers, and a biotechnology student all working together created a unique dynamic. We each brought completely different skills to the table." },
  { name: "Lars van Leeuwen", country: "Netherlands", study: "Communication & Multimedia Design", fields: ["Design"], project: "Sensorlab 2.0", stars: 4, quote: "This project taught me the value of iterative testing. What seemed simple on paper often revealed unexpected complexities when we tried to integrate everything." },
  { name: "Tim Janssen", country: "Netherlands", study: "Communication & Multimedia Design", fields: ["Design"], project: "Sensorlab 2.0", stars: 4, quote: "Collaborating with a multidisciplinary team helped me see how different educational backgrounds can complement each other. We all brought unique strengths." },
];
