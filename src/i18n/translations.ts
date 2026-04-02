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
      nl: "Vergeet de standaard minor-vakjes. In deze minor stap je uit je eigen wereld. Je groeit niet alleen in je eigen vak — je ontdekt wat er gebeurt als je jouw talent bundelt met dat van anderen.",
      en: "Forget standard electives. In this minor you step outside your comfort zone. You don't just grow in your own field — you discover what happens when you combine your talent with others.",
    },
    ctaEnroll: { nl: "Meld je aan", en: "Enroll now" },
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
          nl: "Begeleid de innovatieve ideeën naar haalbare en realistische producten. Stel de business case op, ontwerp business modellen en pitch je startup.",
          en: "Guide innovative ideas towards feasible and realistic products. Build the business case, design business models and pitch your startup.",
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
  deadline: {
    main: {
      nl: "Schrijf je in vóór 1 mei en start in september!",
      en: "Enroll before May 1st and start in September!",
    },
    late: {
      nl: "Inschrijven tot 1 juli is mogelijk, onder voorbehoud van beschikbare plekken.",
      en: "Late enrollment until July 1st is possible, subject to availability.",
    },
  },
  process: {
    label: { nl: "Werkwijze", en: "Our Process" },
    heading: { nl: "Hoe werken we?", en: "How do we work?" },
    sub: {
      nl: "In 20 weken doorloop je een volledig traject: van onboarding en kennismaking tot oplevering en overdracht, met daartussen 4 intensieve iteraties.",
      en: "In 20 weeks you go through a complete trajectory: from onboarding and introduction to delivery and handover, with 4 intensive iterations in between.",
    },
    iterations: [
      {
        title: { nl: "Onboarding", en: "Onboarding" },
        description: {
          nl: "Je maakt kennis met je team, de opdrachtgever en de werkwijze. Je volgt introductie-workshops en bereidt je voor op het project.",
          en: "You get to know your team, the client and the way of working. You attend introductory workshops and prepare for the project.",
        },
        duration: { nl: "Week 1–2", en: "Week 1–2" },
      },
      {
        title: { nl: "Iteratie 1 — Ontdekken", en: "Iteration 1 — Discover" },
        description: {
          nl: "Je duikt in de opdracht, leert de opdrachtgever kennen en brengt het probleem in kaart. Je voert deskresearch uit, interviewt stakeholders en formuleert de kern van de vraag.",
          en: "You dive into the assignment, get to know the client and map out the problem. You conduct desk research, interview stakeholders and formulate the core question.",
        },
        duration: { nl: "Week 3–6", en: "Week 3–6" },
      },
      {
        title: { nl: "Iteratie 2 — Ideeën & Concepten", en: "Iteration 2 — Ideate & Concept" },
        description: {
          nl: "Op basis van je inzichten genereer je ideeën en werk je deze uit tot concrete concepten. Je maakt eerste prototypes en test ze met gebruikers.",
          en: "Based on your insights you generate ideas and develop them into concrete concepts. You create first prototypes and test them with users.",
        },
        duration: { nl: "Week 7–10", en: "Week 7–10" },
      },
      {
        title: { nl: "Iteratie 3 — Bouwen & Testen", en: "Iteration 3 — Build & Test" },
        description: {
          nl: "Je bouwt een werkend prototype en test dit intensief. Je itereert op basis van feedback van gebruikers en de opdrachtgever.",
          en: "You build a working prototype and test it intensively. You iterate based on feedback from users and the client.",
        },
        duration: { nl: "Week 11–14", en: "Week 11–14" },
      },
      {
        title: { nl: "Iteratie 4 — Opleveren & Presenteren", en: "Iteration 4 — Deliver & Present" },
        description: {
          nl: "Je rondt het project af, documenteert je werk en presenteert de eindoplossing aan de opdrachtgever. Je reflecteert op je leerproces en vult je portfolio aan.",
          en: "You finalize the project, document your work and present the final solution to the client. You reflect on your learning process and complete your portfolio.",
        },
        duration: { nl: "Week 15–18", en: "Week 15–18" },
      },
      {
        title: { nl: "Afronding & Overdracht", en: "Wrap-up & Handover" },
        description: {
          nl: "Je draagt het project over aan de opdrachtgever, rondt de documentatie af en sluit je portfolio af. Tijd voor reflectie en evaluatie.",
          en: "You hand over the project to the client, finalize documentation and complete your portfolio. Time for reflection and evaluation.",
        },
        duration: { nl: "Week 19–20", en: "Week 19–20" },
      },
    ],
  },
  contactPerson: {
    label: { nl: "Contactpersoon", en: "Contact Person" },
    name: "Roland van Gogh",
    role: { nl: "Minorcoördinator", en: "Minor Coordinator" },
    cta: { nl: "Chat via Teams", en: "Chat via Teams" },
  },
  featured: {
    label: { nl: "Uitgelicht", en: "Featured" },
    heading: { nl: "Projecten in de spotlight", en: "Featured Projects" },
    sub: {
      nl: "Een greep uit de projecten die studenten hebben uitgevoerd bij echte opdrachtgevers.",
      en: "A selection of projects students have completed for real clients.",
    },
    viewAll: { nl: "Bekijk alle projecten", en: "View all projects" },
  },
  faq: {
    heading: { nl: "Veelgestelde vragen", en: "Frequently Asked Questions" },
    items: [
      {
        q: { nl: "Kan ik meedoen vanuit elke opleiding?", en: "Can I join from any study program?" },
        a: {
          nl: "De minor staat open voor 3e jaars HBO-studenten met een technische, design- of innovatiegerichte opleiding. Denk aan opleidingen als ICT, CMD, Business Innovation, Industrial Design, Technische Bedrijfskunde, Werktuigbouwkunde, Elektrotechniek of vergelijkbaar.",
          en: "The minor is open to 3rd year university of applied sciences students in technology, design, or innovation programs. Think of programs like ICT, Interaction Design, Business Innovation, Industrial Design, Industrial Engineering, Mechanical Engineering, Electrical Engineering, or similar.",
        },
      },
      {
        q: { nl: "Hoe ziet een typische week eruit?", en: "What does a typical week look like?" },
        a: {
          nl: "Je werkt 3 tot 4 dagen per week in een multidisciplinair team aan een project bij een echte opdrachtgever. De weken bestaan uit teamoverleg, workshops, coaching en hands-on bouwen aan jullie oplossing. De overige 1-2 dagen werk je aan je individuele leerdoelen.",
          en: "You work 3 to 4 days per week in a multidisciplinary team on a project for a real client. Weeks consist of team meetings, workshops, coaching, and hands-on building of your solution. The remaining 1-2 days you work on your individual learning goals.",
        },
      },
      {
        q: { nl: "Kan ik de minor combineren met een bijbaan?", en: "Can I combine the minor with a part-time job?" },
        a: {
          nl: "De minor is voltijd (30 EC) en vrij intensief. Een kleine bijbaan in het weekend is meestal goed te combineren, maar doordeweeks wordt volledige inzet verwacht.",
          en: "The minor is full-time (30 ECTS) and quite intensive. A small weekend job is usually manageable, but full commitment is expected during the week.",
        },
      },
      {
        q: { nl: "Hoe word ik beoordeeld?", en: "How am I assessed?" },
        a: {
          nl: "Je wordt beoordeeld op projectwerk, presentaties en je portfolio — geen tentamens of multiple choice. De nadruk ligt op je bijdrage aan het team en de groei die je doormaakt.",
          en: "You're assessed on project work, presentations, and your portfolio — no exams or multiple choice. The focus is on your contribution to the team and personal growth.",
        },
      },
      {
        q: { nl: "Hoe is de verdeling van de 30 EC?", en: "How are the 30 ECTS distributed?" },
        a: {
          nl: "De minor bestaat uit drie onderdelen: het Multidisciplinair Project (18 EC), Professionele Houding (4 EC) en Keuzevakken (8 EC). Het project vormt de kern, aangevuld met persoonlijke ontwikkeling en verdiepende vakken naar keuze.",
          en: "The minor consists of three parts: the Multidisciplinary Project (18 ECTS), Professional Attitude (4 ECTS), and Elective Courses (8 ECTS). The project is the core, complemented by personal development and elective specialization courses.",
        },
      },
    ],
  },
} as const;

export type Translations = typeof translations;
