export type Lang = "nl" | "en";

export const translations = {
  nav: {
    interests: { nl: "Interessegebieden", en: "Focus Areas" },
    why: { nl: "Waarom deze minor?", en: "Why This Minor?" },
    practical: { nl: "Praktisch", en: "Practical Info" },
    experiences: { nl: "Ervaringen", en: "Experiences" },
    cta: { nl: "Meer weten?", en: "Learn more?" },
    contact: { nl: "Contact", en: "Contact" },
  },
  hero: {
    title1: { nl: "Combineer ", en: "Combine " },
    title2: { nl: ", Engineering, ", en: ", Engineering, " },
    title3: { nl: " & Business.", en: " & Business." },
    subtitle: {
      nl: "Vergeet de standaard minor-vakjes. In deze minor stap je uit je eigen wereld. Je wordt niet alleen beter in je vak, maar ontdekt vooral hoe jouw skills passen bij die van tech, design en business.",
      en: "Forget standard electives. In this minor you step outside your comfort zone. You don't just improve your own skills — you discover how they connect with tech, design and business.",
    },
    ctaPrimary: { nl: "Meer weten?", en: "Learn more?" },
    ctaSecondary: { nl: "Ontdek de interessegebieden", en: "Discover the focus areas" },
    imgAlt: { nl: "Studenten werken samen", en: "Students working together" },
    scrollLabel: { nl: "Scroll naar beneden", en: "Scroll down" },
  },
  pillars: {
    heading: { nl: "De Vier Interessegebieden", en: "Four Focus Areas" },
    sub: {
      nl: "In deze minor leer je samenwerken op het snijvlak van vier werelden",
      en: "In this minor you learn to collaborate at the intersection of four worlds",
    },
    items: [
      {
        title: { nl: "ICT", en: "ICT" },
        description: {
          nl: "Zet AI in om data-gedreven apps te bouwen met conversational interfaces. Leer ook de basis van cybersecurity.",
          en: "Use AI to build data-driven apps with conversational interfaces. Also learn the basics of cybersecurity.",
        },
      },
      {
        title: { nl: "Design", en: "Design" },
        description: {
          nl: "Vorm de ultieme gebruikerservaring. Leer design thinking, prototyping en visual design.",
          en: "Shape the ultimate user experience. Learn design thinking, prototyping and visual design.",
        },
      },
      {
        title: { nl: "Engineering", en: "Engineering" },
        description: {
          nl: "Breng je ontwerpen tot leven. Werk met hardware, elektronica en robotica.",
          en: "Bring your designs to life. Work with hardware, electronics and robotics.",
        },
      },
      {
        title: { nl: "Business", en: "Business" },
        description: {
          nl: "Maak je concepten winstgevend. Ontwikkel business modellen en pitch je startup.",
          en: "Make your concepts profitable. Develop business models and pitch your startup.",
        },
      },
    ],
  },
  why: {
    label: { nl: "Voordelen", en: "Benefits" },
    heading: { nl: "Waarom deze minor?", en: "Why this minor?" },
    items: [
      {
        title: { nl: "Geen Tentamens", en: "No Exams" },
        description: {
          nl: "Wordt beoordeeld op projectwerk, presentaties en portfolio — niet op multiple choice.",
          en: "You're assessed on project work, presentations and portfolio — not multiple choice.",
        },
      },
      {
        title: { nl: "Echte Klanten", en: "Real Clients" },
        description: {
          nl: "Werk aan opdrachten van echte bedrijven en organisaties met concrete impact.",
          en: "Work on assignments from real companies and organisations with concrete impact.",
        },
      },
      {
        title: { nl: "Multidisciplinair", en: "Multidisciplinary" },
        description: {
          nl: "Combineer vaardigheden uit ICT, Design, Engineering en Business in één team.",
          en: "Combine skills from ICT, Design, Engineering and Business in one team.",
        },
      },
      {
        title: { nl: "Kickstart Carrière", en: "Kickstart Your Career" },
        description: {
          nl: "Na de minor stromen studenten door naar (afstudeer)stages bij onze opdrachtgevers — met een portfolio vol echte projecten.",
          en: "After the minor, students move on to internships and graduation projects at our partners — with a portfolio of real projects.",
        },
      },
    ],
  },
  practical: {
    label: { nl: "Praktisch", en: "Practical" },
    heading: { nl: "Op een rij", en: "At a Glance" },
    items: [
      { label: { nl: "Omvang", en: "Credits" }, value: { nl: "30 EC", en: "30 ECTS" } },
      { label: { nl: "Periode", en: "Period" }, value: { nl: "Voor- en najaar", en: "Spring & Fall" } },
      { label: { nl: "Vorm", en: "Format" }, value: { nl: "Voltijd", en: "Full-time" } },
      {
        label: { nl: "Locatie", en: "Location" },
        value: {
          nl: "Op locatie bij een bedrijf of organisatie",
          en: "On-site at a company or organisation",
        },
        sub: { nl: "Zie projecten voor meer info", en: "See projects for more info" },
      },
      {
        label: { nl: "Toelating", en: "Admission" },
        value: {
          nl: "3e jaars studenten techniek, design of innovatie",
          en: "3rd year students in technology, design or innovation",
        },
      },
      {
        label: { nl: "Internationaal", en: "International" },
        value: {
          nl: "Engels als voertaal, internationaal gezelschap",
          en: "English as working language, international cohort",
        },
        sub: {
          nl: "Erasmus-studenten welkom · Toetsing voor NL-studenten in het Nederlands",
          en: "Erasmus students welcome · Assessment for NL students in Dutch",
        },
      },
    ],
  },
  testimonials: {
    label: { nl: "Ervaringen", en: "Experiences" },
    heading: { nl: "Wat studenten zeggen", en: "What students say" },
    items: [
      {
        quote: {
          nl: "De beste minor die ik heb gedaan. Je leert zoveel meer dan in een gewone minor omdat je écht bouwt aan projecten voor echte klanten.",
          en: "The best minor I've done. You learn so much more than in a regular minor because you actually build projects for real clients.",
        },
        name: "Lisa van Dijk",
        study: "HBO-ICT",
      },
      {
        quote: {
          nl: "Eindelijk een minor waar je niet de hele dag in een boek zit. Hands-on werken met nieuwe technologieën en een super team.",
          en: "Finally a minor where you're not stuck in a book all day. Hands-on work with new technologies and a great team.",
        },
        name: "Tom Bakker",
        study: { nl: "Technische Bedrijfskunde", en: "Industrial Engineering & Management" },
      },
      {
        quote: {
          nl: "Als design-student leerde ik hier samenwerken met developers en business-studenten. Dat had ik nergens anders kunnen doen.",
          en: "As a design student I learned to collaborate with developers and business students here. I couldn't have done that anywhere else.",
        },
        name: "Priya Sharma",
        study: "Communication & Multimedia Design",
      },
    ],
  },
  contact: {
    label: { nl: "Contact", en: "Contact" },
    heading: { nl: "Klaar om de stap te zetten?", en: "Ready to take the leap?" },
    description: {
      nl: "Heb je vragen over de minor, wil je meer informatie of ben je al overtuigd? Vul het formulier in en we nemen zo snel mogelijk contact met je op.",
      en: "Got questions about the minor, need more info, or already convinced? Fill in the form and we'll get back to you as soon as possible.",
    },
    emailLabel: { nl: "E-mail *", en: "Email *" },
    emailPlaceholder: { nl: "je@email.com", en: "your@email.com" },
    questionLabel: { nl: "Je vraag (optioneel)", en: "Your question (optional)" },
    questionPlaceholder: { nl: "Waar ben je benieuwd naar?", en: "What are you curious about?" },
    submit: { nl: "Verstuur", en: "Submit" },
    successTitle: { nl: "Bedankt!", en: "Thank you!" },
    successDescription: {
      nl: "We nemen zo snel mogelijk contact met je op.",
      en: "We'll get back to you as soon as possible.",
    },
    emailError: { nl: "Ongeldig e-mailadres", en: "Invalid email address" },
    maxError: { nl: "Max 255 tekens", en: "Max 255 characters" },
    maxQuestionError: { nl: "Max 1000 tekens", en: "Max 1000 characters" },
  },
  projects: {
    heading: { nl: "Projecten Portfolio", en: "Project Portfolio" },
    sub: {
      nl: "Ontdek de projecten die studenten hebben uitgevoerd bij echte opdrachtgevers.",
      en: "Discover the projects students have completed for real clients.",
    },
    back: { nl: "Terug naar home", en: "Back to home" },
    all: { nl: "Alles", en: "All" },
    readMore: { nl: "Lees meer", en: "Read more" },
    problemLabel: { nl: "Probleem", en: "Problem" },
    goalsLabel: { nl: "Doelen", en: "Goals" },
    resultsLabel: { nl: "Resultaten", en: "Results" },
    conclusionLabel: { nl: "Conclusie", en: "Conclusion" },
    noResults: { nl: "Geen projecten gevonden voor dit interessegebied.", en: "No projects found for this focus area." },
  },
  nav2: {
    projects: { nl: "Projecten", en: "Projects" },
  },
  footer: {
    rights: {
      nl: "Alle rechten voorbehouden.",
      en: "All rights reserved.",
    },
  },
  cookie: {
    message: {
      nl: "Deze website gebruikt alleen functionele cookies voor een optimale ervaring. Geen tracking, geen advertenties.",
      en: "This website only uses functional cookies for an optimal experience. No tracking, no ads.",
    },
    accept: { nl: "Akkoord", en: "Accept" },
  },
  privacy: {
    title: { nl: "Privacyverklaring", en: "Privacy Statement" },
    sections: [
      {
        heading: { nl: "Welke gegevens verzamelen wij?", en: "What data do we collect?" },
        text: {
          nl: "Wanneer je het contactformulier invult, verzamelen wij je e-mailadres en eventueel je vraag. We gebruiken geen tracking cookies of analysetools van derden.",
          en: "When you fill in the contact form, we collect your email address and optionally your question. We do not use tracking cookies or third-party analytics.",
        },
      },
      {
        heading: { nl: "Waarvoor gebruiken wij je gegevens?", en: "How do we use your data?" },
        text: {
          nl: "Je gegevens worden uitsluitend gebruikt om je vraag te beantwoorden en je te informeren over de minor Emerging Technologies Playground.",
          en: "Your data is only used to answer your question and inform you about the Emerging Technologies Playground minor.",
        },
      },
      {
        heading: { nl: "Delen met derden", en: "Sharing with third parties" },
        text: {
          nl: "Wij delen je gegevens niet met derden, tenzij dit noodzakelijk is voor de uitvoering van onze dienstverlening of wettelijk verplicht is.",
          en: "We do not share your data with third parties unless required for our services or by law.",
        },
      },
      {
        heading: { nl: "Bewaartermijn", en: "Retention period" },
        text: {
          nl: "Je gegevens worden niet langer bewaard dan noodzakelijk voor het doel waarvoor ze zijn verzameld.",
          en: "Your data is not stored longer than necessary for the purpose it was collected.",
        },
      },
      {
        heading: { nl: "Je rechten", en: "Your rights" },
        text: {
          nl: "Je hebt het recht om je gegevens in te zien, te corrigeren of te laten verwijderen. Neem hiervoor contact op via het contactformulier.",
          en: "You have the right to view, correct, or delete your data. Contact us through the contact form.",
        },
      },
    ],
  },
} as const;

export type Translations = typeof translations;
