// ─────────────────────────────────────────────────────────────
//  Everything on the site comes from this file.
//  Source: Yara_Al-Mansouri_CV.pdf (8 pages). Numbers are copied,
//  not rounded. The Arabic version lives in cv.ar.js and is merged
//  over this object, so keep the two files the same shape.
// ─────────────────────────────────────────────────────────────

export const cv = {
  name: "Yara Al-Mansouri",
  fullName: "Yara Saud Al-Mansouri, PhD",
  nativeName: "يارا المنصوري",
  initials: "Y.M.",
  title: "Principal Product Engineer",
  roles: ["Principal Product Engineer", "Design Technology Lead", "HCI Researcher"],
  location: "Riyadh, Saudi Arabia",
  timezone: "AST, UTC+3",

  headline: ["Yara Al-Mansouri builds ", "thoughtful", " software in two directions."],
  tagline:
    "Principal product engineer, design technology lead and HCI researcher. I make interfaces that read well in Arabic and in English.",
  stamp: ["Working since", "Jul 2010"],

  summary:
    "Product engineer and designer with 16 years of professional experience building digital products in Saudi Arabia and the United Kingdom, across health tech, fintech, education and mobility. Leads teams from first research to launch while still designing and writing code every week. Has led a team of up to 64 people, shipped more than 40 products used by over 9 million people, co-founded two startups (one acquired) and earned a PhD in Human-Computer Interaction focused on Arabic interfaces.",

  facts: [
    { label: "Currently", value: "Principal Product Engineer, Faseela Ventures" },
    { label: "Based in", value: "Riyadh, Saudi Arabia (AST, UTC+3)" },
    { label: "Known for", value: "Bilingual design systems and Arabic interface research" },
  ],

  about: {
    lead: "Product engineer and designer with 16 years of experience building digital products in Saudi Arabia and the United Kingdom, across health tech, fintech, education and mobility.",
    paragraphs: [
      "I lead teams from first research to launch, and I still design and write code every week. I have led up to 64 people, shipped more than 40 products used by over 9 million people, and co-founded two startups, one of which was acquired.",
      "My PhD in Human-Computer Interaction looked at Arabic interfaces: how type, density and trust change the way people read on a screen. It is the thread through most of what I build, from design systems to code editors.",
    ],
  },

  // Career highlights, straight from the CV
  highlights: [
    { value: "16", label: "Years in the field", note: "Since Jul 2010" },
    { value: "40+", label: "Products shipped", note: "Health, fintech, education, mobility" },
    { value: "9M+", label: "People reached", note: "Across those products" },
    { value: "64", label: "People led", note: "Across 7 squads" },
    { value: "2", label: "Startups co-founded", note: "1 acquired, 1 closed" },
    { value: "2", label: "Patents", note: "1 granted, 1 pending" },
    { value: "31", label: "Talks and keynotes", note: "And 9 publications" },
    { value: "1,400+", label: "Students taught", note: "Over 10 semesters" },
  ],

  contact: {
    email: "yara.almansouri@mail.example",
    phone: "+966 55 000 0000",
    phoneHref: "+966550000000",
    primary: [
      { label: "GitHub", href: "https://github.example/yara-mansouri", text: "github.example/yara-mansouri" },
      { label: "LinkedIn", href: "https://linkedin.example/in/yaramansouri", text: "linkedin.example/in/yaramansouri" },
    ],
    other: [
      { label: "Portfolio", href: "https://yara.example", text: "yara.example" },
      { label: "Dribbble", href: "https://dribbble.example/yaram", text: "dribbble.example/yaram" },
      { label: "Behance", href: "https://behance.example/yaram", text: "behance.example/yaram" },
      { label: "Medium", href: "https://medium.example/@yaram", text: "medium.example/@yaram" },
      { label: "Google Scholar", href: "https://scholar.example/yaram", text: "scholar.example/yaram" },
      { label: "YouTube", href: "https://youtube.example/@YaraBuilds", text: "youtube.example/@YaraBuilds" },
    ],
  },

  // Put the PDF in /public and write its file name here
  cvFile: "Yara_Al-Mansouri_CV.pdf",

  // Used by the "career at a glance" chart. Decimal years: 2023.67 is Sep 2023.
  timeline: [
    { key: "faseela", label: "Faseela", from: 2023.67, to: 2026.9, kind: "work" },
    { key: "zayna", label: "Zayna", from: 2017.5, to: 2023.67, kind: "work" },
    { key: "qalam", label: "Qalam Learn", from: 2019.08, to: 2022.9, kind: "work" },
    { key: "rafeeq", label: "Rafeeq", from: 2015.25, to: 2016.99, kind: "work" },
    { key: "brightwell", label: "Brightwell", from: 2012.75, to: 2015.2, kind: "work" },
    { key: "mirqab", label: "Mirqab", from: 2010.5, to: 2011.67, kind: "work" },
    { key: "freelance", label: "Freelance", from: 2008.67, to: 2010.5, kind: "work" },
    { key: "phd", label: "PhD", from: 2018.67, to: 2022.55, kind: "study" },
    { key: "msc", label: "MSc", from: 2011.67, to: 2012.7, kind: "study" },
    { key: "bsc", label: "BSc", from: 2006.67, to: 2010.5, kind: "study" },
  ],

  // Grouped by employer; roles inside are newest first.
  experience: [
    {
      company: "Faseela Ventures",
      place: "Riyadh, Saudi Arabia",
      period: "Sep 2023 – Present",
      roles: [
        {
          title: "Principal Product Engineer & Design Technology Lead",
          period: "Sep 2023 – Present",
          points: [
            "Set the front-end and design-system direction for 9 product teams across payments, savings and rewards in a fintech super-app with 4.2 million users.",
            "Built Mizan, the company’s bilingual design system: 180 components adopted by all 9 teams, cutting UI build time by 38%.",
            "Led the rebuild of the web app in Next.js and TypeScript, reducing Largest Contentful Paint from 4.8 s to 1.6 s.",
            "Introduced accessibility reviews for every release, raising screens that meet WCAG 2.2 AA from 41% to 96%.",
            "Designed the Savings Goals feature from research in 5 cities; 610,000 users opened a goal in its first 6 months.",
          ],
          tech: ["Next.js", "TypeScript", "Tailwind CSS", "React Native", "GraphQL", "AWS"],
        },
      ],
    },
    {
      company: "Zayna Health Tech",
      place: "Riyadh, Saudi Arabia",
      period: "Jul 2017 – Aug 2023",
      roles: [
        {
          title: "Director of Product Engineering",
          period: "Mar 2021 – Aug 2023",
          points: [
            "Led 64 people across 7 squads (engineering, design, quality and data) with an annual budget of SAR 21 million.",
            "Launched the telemedicine platform at national scale, delivering 3.1 million consultations in 2022.",
            "Cut the app crash rate from 2.4% to 0.3% and raised the app-store rating from 3.6 to 4.7.",
            "Took the platform through two health-data security audits with zero major findings.",
          ],
          tech: ["React", "React Native", "Node.js", "PostgreSQL", "Google Cloud", "Kubernetes"],
        },
        {
          title: "Engineering Manager, Patient Apps",
          period: "Jan 2019 – Feb 2021",
          points: [
            "Grew the patient apps team from 6 to 22 people; hired and mentored 4 team leads.",
            "Shipped appointment booking used by 1.8 million patients across 140 clinics.",
            "Shortened the release cycle from 6 weeks to 1 week with CI/CD and feature flags.",
          ],
        },
        {
          title: "Senior Front-End Engineer",
          period: "Jul 2017 – Dec 2018",
          points: [
            "Rebuilt the clinic dashboard in React, cutting doctors’ average task time by 27%.",
            "Created the first shared component library, which later grew into the Zayna design system.",
          ],
        },
      ],
    },
    {
      company: "Qalam Learn",
      place: "Riyadh, Saudi Arabia",
      period: "Feb 2019 – Nov 2022",
      roles: [
        {
          title: "Co-founder (part-time)",
          period: "Feb 2019 – Nov 2022",
          points: [
            "Co-founded an Arabic-first coding education platform that reached 230,000 learners in 14 countries.",
            "Designed and built its interactive code editor, which explains errors in plain Arabic.",
            "Grew the team to 9 people and led product until the company was acquired by Mirqab Group in Nov 2022.",
          ],
          tech: ["Vue", "TypeScript", "Monaco Editor", "Firebase"],
        },
      ],
    },
    {
      company: "",
      place: "Riyadh, Saudi Arabia",
      period: "Jan 2017 – Jun 2017",
      earlier: true,
      roles: [
        {
          title: "Career Break",
          period: "Jan 2017 – Jun 2017",
          points: [
            "Family relocation and volunteering.",
            "Taught a 12-week web development course to 45 adult learners with the Code for Community initiative.",
          ],
        },
      ],
    },
    {
      company: "Rafeeq Rides",
      place: "Riyadh, Saudi Arabia",
      period: "Apr 2015 – Dec 2016",
      earlier: true,
      roles: [
        {
          title: "Co-founder & Chief Technology Officer",
          period: "Apr 2015 – Dec 2016",
          points: [
            "Built a ride-sharing app for university students: 26,000 sign-ups and 140,000 rides in 20 months.",
            "Raised SAR 3.5 million in seed funding and led a team of 11.",
            "Closed the company in Dec 2016 after a market change and wrote a public post-mortem read by 80,000 people.",
          ],
          tech: ["React Native", "Node.js", "MongoDB", "Google Maps APIs"],
        },
      ],
    },
    {
      company: "Brightwell Studio",
      place: "London, United Kingdom",
      period: "Oct 2012 – Mar 2015",
      earlier: true,
      roles: [
        {
          title: "Senior UX Engineer",
          period: "Jun 2014 – Mar 2015",
          points: [
            "Led the studio’s first Arabic, right-to-left project, for a Gulf travel client.",
            "Mentored 3 junior designers and ran the studio’s monthly front-end guild.",
          ],
        },
        {
          title: "UX Engineer",
          period: "Oct 2012 – May 2014",
          points: [
            "Designed and built responsive websites for 14 clients in retail, banking and the public sector.",
            "Delivered 2 projects that won industry awards (see Awards).",
          ],
        },
      ],
    },
    {
      company: "University of Northbridge, Interaction Lab",
      place: "Northbridge, United Kingdom",
      period: "Jan 2012 – Sep 2012",
      earlier: true,
      roles: [
        {
          title: "Research Assistant (part-time)",
          period: "Jan 2012 – Sep 2012",
          points: [
            "Ran 30 usability sessions for a study on bilingual navigation menus and co-authored a technical report.",
          ],
        },
      ],
    },
    {
      company: "Mirqab Digital Agency",
      place: "Riyadh, Saudi Arabia",
      period: "Jul 2010 – Aug 2011",
      earlier: true,
      roles: [
        {
          title: "Junior Web Developer",
          period: "Jul 2010 – Aug 2011",
          points: [
            "Built more than 20 websites in HTML, CSS, jQuery and PHP for local businesses and event organizers.",
          ],
        },
      ],
    },
    {
      company: "Self-employed",
      place: "Riyadh, Saudi Arabia",
      period: "Sep 2008 – Jun 2010",
      earlier: true,
      roles: [
        {
          title: "Freelance Graphic and Web Designer (part-time)",
          period: "Sep 2008 – Jun 2010",
          points: ["Designed logos, printed material and websites for 35 clients while at university."],
        },
      ],
    },
  ],

  education: [
    {
      degree: "PhD in Human-Computer Interaction",
      school: "Eastmoor Institute of Technology",
      place: "Part-time, remote",
      period: "Sep 2018 – Jul 2022",
      points: [
        "Thesis: “Adaptive Typography for Arabic Interfaces: Readability, Density and Trust”",
        "Best Doctoral Thesis in HCI, 2022",
      ],
    },
    {
      degree: "Executive Certificate in Technology Leadership",
      school: "Eastmoor Business School",
      place: "Online",
      period: "Jan 2021 – Jun 2021",
      points: ["6-month program completed while working full-time"],
    },
    {
      degree: "MSc in Interaction Design, with Distinction",
      school: "University of Northbridge",
      place: "Northbridge, United Kingdom",
      period: "Sep 2011 – Sep 2012",
      points: ["Dissertation: “Bilingual Navigation Menus on Small Screens”", "Full scholarship"],
    },
    {
      degree: "BSc in Computer Science, First Class Honours",
      school: "Najd Valley University",
      place: "Riyadh, Saudi Arabia",
      period: "Sep 2006 – Jun 2010",
      points: [
        "GPA: 4.81 / 5.00",
        "Exchange semester: Lindenhall University, Germany, Feb 2009 – Jul 2009",
        "Best Graduation Project, 2010",
      ],
    },
  ],

  // Each project gets its own page at /projects/<slug>.
  projects: [
    {
      slug: "mizan",
      name: "Mizan Design System",
      accent: "System",
      kind: "Design system",
      group: "product",
      art: "mizan",
      org: "Faseela Ventures",
      period: "Oct 2023 – Jun 2025",
      years: "2023–25",
      role: "Lead designer and engineer",
      team: "Team of 6",
      summary: "A bilingual design system of 180 components that nine product teams build on.",
      problem:
        "9 product teams built the same interface parts in different ways, with 4 button styles and 11 shades of green.",
      action:
        "Audited 1,300 screens, defined design tokens, and built and documented the components in Figma and code.",
      result: "180 components, 38% faster UI build time, and 96% of screens meeting WCAG 2.2 AA.",
      metrics: [
        { value: "180", label: "components" },
        { value: "38%", label: "faster UI build time" },
        { value: "96%", label: "of screens meet WCAG 2.2 AA" },
        { value: "1,300", label: "screens audited" },
      ],
      tech: ["React", "TypeScript", "Tailwind CSS", "Storybook", "Figma tokens"],
    },
    {
      slug: "telemedicine",
      name: "National Telemedicine Platform",
      accent: "Platform",
      kind: "Health tech",
      group: "product",
      art: "telemedicine",
      org: "Zayna Health Tech",
      period: "May 2021 – Dec 2022",
      years: "2021–22",
      role: "Product engineering lead",
      team: "Team of 31",
      summary: "Redesigned the patient queue, doctor console and video layer of a national platform.",
      problem: "Patients waited an average of 22 minutes for a video consultation, and 1 in 5 calls dropped.",
      action: "Led the redesign of the patient queue, the doctor console and the video layer.",
      result:
        "3.1 million consultations in 2022; average wait fell from 22 to 6 minutes and dropped calls from 20% to 3%.",
      metrics: [
        { value: "3.1M", label: "consultations in 2022" },
        { value: "22 → 6", label: "minutes of average wait" },
        { value: "20% → 3%", label: "dropped calls" },
      ],
      tech: ["React", "React Native", "WebRTC", "Node.js", "Google Cloud"],
    },
    {
      slug: "savings-goals",
      name: "Savings Goals",
      accent: "Goals",
      kind: "Fintech",
      group: "product",
      art: "savings",
      org: "Faseela Ventures",
      period: "Jan 2024 – Aug 2024",
      years: "2024",
      role: "Research and design lead",
      team: "Team of 8",
      summary: "A goal-setting flow shaped by 48 interviews that 610,000 people used in six months.",
      problem: "70% of users had never saved money inside the app.",
      action: "Ran 48 interviews in 5 cities, tested 3 prototypes and designed the final goal-setting flow.",
      result:
        "610,000 goals opened in 6 months, with an average of SAR 2,300 saved per goal; won Best Fintech Experience 2024.",
      metrics: [
        { value: "610,000", label: "goals opened in 6 months" },
        { value: "SAR 2,300", label: "average saved per goal" },
        { value: "48", label: "interviews in 5 cities" },
      ],
      tech: ["React Native", "GraphQL", "Figma"],
    },
    {
      slug: "qalam-editor",
      name: "Qalam Learn Code Editor",
      accent: "Editor",
      kind: "Education",
      group: "startup",
      art: "qalam",
      org: "Qalam Learn",
      period: "Feb 2019 – Apr 2021",
      years: "2019–21",
      role: "Co-founder, design and front-end",
      team: "Team of 4",
      summary: "A browser code editor that explains errors in plain Arabic and suggests the next step.",
      problem: "Learners quit when English error messages stopped their code.",
      action: "Built a browser code editor that explains errors in plain Arabic and suggests the next step.",
      result: "Course completion rose from 18% to 46%.",
      metrics: [
        { value: "18% → 46%", label: "course completion" },
        { value: "230,000", label: "learners on the platform" },
        { value: "14", label: "countries" },
      ],
      tech: ["Vue", "TypeScript", "Monaco Editor", "Firebase"],
    },
    {
      slug: "khatt",
      name: "Khatt Adaptive Typography Engine",
      accent: "Engine",
      kind: "PhD research",
      group: "research",
      art: "khatt",
      demo: "khatt",
      org: "Eastmoor Institute of Technology",
      period: "Sep 2019 – Jul 2022",
      years: "2019–22",
      role: "Researcher and sole developer",
      team: "Solo",
      summary: "An engine that adapts Arabic type size, spacing and line length to the reader and the screen.",
      problem: "Arabic text on screens is often too small, too dense and hard to scan.",
      action:
        "Built an engine that adjusts Arabic font size, spacing and line length to the reader and the screen, then tested it with 312 participants.",
      result:
        "Reading speed rose by 19% and errors fell by 31%; the method was granted a patent in Jun 2024.",
      metrics: [
        { value: "+19%", label: "reading speed" },
        { value: "−31%", label: "reading errors" },
        { value: "312", label: "participants" },
        { value: "Patent", label: "granted Jun 2024" },
      ],
      tech: ["TypeScript", "Canvas API", "Python"],
    },
    {
      slug: "hirfa-ui",
      name: "Hirfa UI",
      accent: "UI",
      kind: "Open source",
      group: "research",
      art: "hirfa",
      org: "Open source",
      period: "Mar 2020 – Present",
      years: "2020–now",
      role: "Founder and lead maintainer",
      team: "210 contributors",
      link: { label: "github.example/yara-mansouri", href: "https://github.example/yara-mansouri" },
      summary: "A right-to-left-first React component library with 95 components and 210 contributors.",
      problem: "Popular component libraries handled right-to-left layouts poorly.",
      action:
        "Designed and built 95 components with mirrored layouts, Arabic typography presets and full keyboard support.",
      result:
        "9,800 GitHub stars and 1.2 million npm downloads a year; won the Open Source Impact Award 2022.",
      metrics: [
        { value: "9,800", label: "GitHub stars" },
        { value: "1.2M", label: "npm downloads a year" },
        { value: "95", label: "components" },
        { value: "210", label: "contributors" },
      ],
      tech: ["React", "TypeScript", "CSS logical properties", "Storybook"],
    },
    {
      slug: "dalil",
      name: "Dalil Accessibility Toolkit",
      accent: "Toolkit",
      kind: "Side project",
      group: "research",
      art: "dalil",
      org: "Side project",
      period: "Jan 2022 – Sep 2022",
      years: "2022",
      role: "Designer and developer",
      team: "Solo",
      summary: "A browser extension that flags 42 accessibility issues specific to Arabic pages.",
      problem: "Accessibility checkers missed issues specific to Arabic and right-to-left pages.",
      action:
        "Built a browser extension that flags 42 Arabic-specific accessibility issues and explains how to fix each one.",
      result: "Used by 3,400 developers in 22 countries.",
      metrics: [
        { value: "42", label: "Arabic-specific issues flagged" },
        { value: "3,400", label: "developers" },
        { value: "22", label: "countries" },
      ],
      tech: ["JavaScript", "Chrome Extensions API", "axe-core"],
    },
    {
      slug: "rafeeq-rides",
      name: "Rafeeq Rides Matching App",
      accent: "App",
      kind: "Mobility",
      group: "startup",
      art: "rafeeq",
      org: "Rafeeq Rides",
      period: "Apr 2015 – Dec 2016",
      years: "2015–16",
      role: "Co-founder and CTO",
      team: "Team of 11",
      summary: "Ride matching for university students, paired by campus, timetable and route.",
      problem: "University students had few safe and affordable ways to commute.",
      action: "Designed the matching system that paired riders by campus, timetable and route.",
      result: "26,000 sign-ups and 140,000 rides before the company closed in Dec 2016.",
      metrics: [
        { value: "26,000", label: "sign-ups" },
        { value: "140,000", label: "rides" },
        { value: "20", label: "months in service" },
      ],
      tech: ["React Native", "Node.js", "MongoDB", "Google Maps APIs"],
    },
  ],

  skills: [
    {
      group: "Product Design",
      tier: "expert",
      level: "Expert",
      years: 18,
      items: ["Figma", "Design systems", "Prototyping", "Motion design", "Information architecture"],
    },
    {
      group: "Front-End Engineering",
      tier: "expert",
      level: "Expert",
      years: 16,
      items: ["TypeScript", "JavaScript", "React", "Next.js", "Vue", "Tailwind CSS", "Web Components"],
    },
    {
      group: "User Research",
      tier: "expert",
      level: "Expert",
      years: 14,
      items: ["Interviews", "Usability testing", "Diary studies", "A/B testing", "Eye-tracking"],
    },
    {
      group: "Accessibility",
      tier: "expert",
      level: "Expert",
      years: 11,
      items: ["WCAG 2.2 AA", "ARIA", "Screen-reader testing", "Arabic right-to-left accessibility"],
    },
    {
      group: "Back-End and APIs",
      tier: "advanced",
      level: "Advanced",
      years: 10,
      items: ["Node.js", "NestJS", "GraphQL", "REST", "PostgreSQL", "Redis"],
    },
    {
      group: "Leadership",
      tier: "expert",
      level: "Expert",
      years: 9,
      items: ["Hiring", "Organization design", "OKRs", "Budgeting", "Stakeholder management", "Mentoring"],
    },
    { group: "Mobile", tier: "advanced", level: "Advanced", years: 8, items: ["React Native", "Flutter", "Swift (basic)"] },
    {
      group: "Cloud and DevOps",
      tier: "advanced",
      level: "Advanced",
      years: 7,
      items: ["AWS", "Google Cloud", "Docker", "Kubernetes", "Terraform", "GitHub Actions"],
    },
    {
      group: "Security and Compliance",
      tier: "intermediate",
      level: "Intermediate",
      years: 6,
      items: ["Secure development lifecycle", "PCI DSS", "Health-data privacy", "Threat modelling"],
    },
    {
      group: "Data and AI",
      tier: "intermediate",
      level: "Intermediate",
      years: 5,
      items: ["Python", "SQL", "Data visualization", "Recommendation systems", "AI product features"],
    },
  ],

  awards: [
    { title: "Design Technology Leader of the Year", issuer: "Gulf Design Week Awards", year: "2025", detail: "For the Mizan Design System" },
    { title: "Best Fintech Experience", issuer: "Arab Fintech Excellence Awards", year: "2024", detail: "For Savings Goals" },
    { title: "Top 40 Under 40 in Saudi Tech", issuer: "Riyadh Tech Review", year: "2023", detail: "For career achievement" },
    { title: "Best Doctoral Thesis in HCI", issuer: "Eastmoor Institute of Technology", year: "2022", detail: "For the PhD thesis" },
    { title: "Open Source Impact Award", issuer: "Arab Open Source Foundation", year: "2022", detail: "For Hirfa UI" },
    { title: "Digital Health Innovation Award", issuer: "Middle East Health Informatics Board", year: "2021", detail: "For the telemedicine platform" },
    { title: "Women in Tech Leadership Award", issuer: "Saudi Women in Design Network", year: "2020", detail: "For leadership at Zayna Health Tech" },
    { title: "Silver, Responsive Design category", issuer: "London Web Craft Awards", year: "2014", detail: "For a retail client website at Brightwell Studio" },
    { title: "Rising Star in UX", issuer: "UK Interaction Design Guild", year: "2013", detail: "For a public-sector client website at Brightwell Studio" },
    { title: "Best Graduation Project", issuer: "Najd Valley University", year: "2010", detail: "For an Arabic speech-to-text note-taking app" },
  ],

  patents: [
    {
      title: "Method for adaptive Arabic text rendering based on reading context",
      number: "Patent No. SA 11223",
      state: "granted",
      status: "Granted",
      date: "Jun 2024",
    },
    {
      title: "System for bilingual component theming in design systems",
      number: "Application No. SA 2025-0417",
      state: "pending",
      status: "Pending",
      date: "Filed Mar 2025",
    },
  ],

  // Selected 6 of 9. Full list on Google Scholar.
  publications: [
    {
      authors: "Al-Mansouri, Y., & Marsh, H.",
      year: "2022",
      title: "Adaptive typography for Arabic interfaces: A study with 312 readers",
      venue: "Journal of Human-Centred Computing, 14(3), 211–238.",
    },
    {
      authors: "Al-Mansouri, Y.",
      year: "2021",
      title: "Trust signals in Arabic health apps",
      venue: "Proceedings of the International Conference on Arabic Interfaces (ICAI 2021), 45–56.",
    },
    {
      authors: "Al-Mansouri, Y., Rahman, S., & Okafor, T.",
      year: "2020",
      title: "Right-to-left design systems at scale",
      venue: "Proceedings of DesignOps Summit Asia 2020, 12–19.",
    },
    {
      authors: "Al-Mansouri, Y., & Marsh, H.",
      year: "2020",
      title: "Measuring reading comfort on small screens",
      venue: "ICAI 2020 Workshop on Arabic Typography, 8–13.",
    },
    {
      authors: "Al-Mansouri, Y.",
      year: "2019",
      title: "Teaching front-end development in Arabic: Lessons from 50,000 learners",
      venue: "Gulf Journal of Computing Education, 7(1), 33–49.",
    },
    {
      authors: "Hart, L., & Al-Mansouri, Y.",
      year: "2012",
      title: "Bilingual navigation menus on small screens",
      venue: "Northbridge Interaction Lab Technical Report NIL-TR-2012-07.",
    },
  ],
  publicationsNote: "Selected 6 of 9",
  publicationsLink: { label: "scholar.example/yaram", href: "https://scholar.example/yaram" },

  // Selected 8 of 31
  talks: [
    { type: "Keynote", title: "Design systems that speak two languages", event: "Najd Developer Days 2025", place: "Riyadh", year: "2025" },
    { type: "Talk", title: "Accessibility is a product decision", event: "Gulf Design Week 2025", place: "Dubai", year: "2025" },
    { type: "Panel", title: "Building trust in fintech UX", event: "Gulf Fintech Builders Forum 2024", place: "Riyadh", year: "2024" },
    { type: "Talk", title: "Scaling a team from 6 to 64", event: "Engineering Leadership Week 2023", place: "Cairo", year: "2023" },
    { type: "Talk", title: "What my PhD taught me about Arabic type", event: "Typography Majlis 2022", place: "Jeddah", year: "2022" },
    { type: "Keynote", title: "Telemedicine at national scale", event: "Digital Health Middle East Summit 2021", place: "Online", year: "2021" },
    { type: "Talk", title: "Why our startup failed", event: "Founders Night Riyadh 2016", place: "Riyadh", year: "2016" },
    { type: "Talk", title: "Responsive design for right-to-left", event: "Frontend Horizons London 2014", place: "London", year: "2014" },
  ],
  talksNote: "Selected 8 of 31",

  media: [
    { type: "Cover story", title: "The engineer who designs in two directions", where: "Riyadh Tech Review", year: "Mar 2023" },
    { type: "Podcast guest", title: "From startup failure to Principal Engineer", where: "Build in Arabic, Episode 42", year: "Jun 2024" },
    {
      type: "YouTube",
      title: "Yara Builds",
      where: "86 tutorials on design systems and right-to-left front-end · 48,000 subscribers",
      year: "2020 – Present",
      href: "https://youtube.example/@YaraBuilds",
    },
    {
      type: "Article",
      title: "Accessibility debt in fintech",
      where: "Medium · Read 120,000 times",
      year: "Nov 2023",
      href: "https://medium.example/@yaram",
    },
  ],

  community: [
    {
      role: "Adjunct Lecturer (part-time)",
      org: "College of Computing, Najd Valley University",
      period: "Sep 2019 – Jun 2024",
      detail: "Taught Human-Computer Interaction, Front-End Development and Design Systems to 1,400 students over 10 semesters.",
    },
    {
      role: "Advisory Board Member",
      org: "Saudi Women in Design Network",
      period: "Mar 2022 – Present",
      detail: "Runs the annual mentorship program for 60 early-career designers.",
    },
    {
      role: "Technical Advisor",
      org: "2 early-stage health-tech startups",
      period: "Feb 2024 – Present",
      detail: "Advises on product strategy, hiring and architecture.",
    },
    {
      role: "Mentor",
      org: "Najd Valley Startup Accelerator",
      period: "Jan 2020 – Present",
      detail: "Mentored 25 startups across 6 cohorts.",
    },
    {
      role: "Hackathon Judge",
      org: "Various organizers",
      period: "Jan 2018 – Present",
      detail: "Judged 12 hackathons in Riyadh, Jeddah and Dubai.",
    },
    {
      role: "Volunteer Instructor",
      org: "Code for Community, Riyadh",
      period: "Jan 2017 – Jun 2017",
      detail: "Taught a 12-week web development course to 45 adult learners.",
    },
  ],

  // earned 19, 1 in progress
  certifications: [
    { name: "Certified Security Architecture Professional (CSAP)", issuer: "Global Cyber Assurance Council", year: "In progress", status: "progress", note: "Exam booked for Dec 2026" },
    { name: "Certified Cloud Solutions Architect – Professional", issuer: "Cloud Architecture Guild", year: "2025", status: "active", id: "CAG-CSA-25-0912" },
    { name: "Certified Design Leader", issuer: "Arabian Design Council", year: "2025", status: "active", id: "ADC-CDL-25-0044" },
    { name: "Multi-Cloud Platform Architect", issuer: "Halcyon Cloud Institute", year: "2024", status: "active", id: "HLC-MPA-24-3307" },
    { name: "Certified Container Application Developer", issuer: "Open Container Academy", year: "2024", status: "active", id: "OCA-CAD-24-1185" },
    { name: "Open Banking Product Specialist", issuer: "Gulf FinTech Academy", year: "2024", status: "active", id: "GFA-OBP-24-0219" },
    { name: "Certified Project Leadership Professional", issuer: "International Project Leadership Society", year: "2023", status: "active", id: "IPLS-CPL-23-5560" },
    { name: "Certified Accessibility Specialist", issuer: "Inclusive Interfaces Council", year: "2023", status: "active", id: "IIC-CAS-23-0471" },
    { name: "Applied Data Visualization Certificate", issuer: "Riyadh Data Institute", year: "2023", status: "lifetime", id: "RDI-ADV-23-0118" },
    { name: "UX Research and Interaction Design Certificate", issuer: "Meridian UX Institute", year: "2022", status: "lifetime", id: "MUI-UXR-22-8842" },
    { name: "Enterprise Architecture Practitioner", issuer: "Global Enterprise Architecture Forum", year: "2022", status: "active", id: "GEAF-EAP-22-0193" },
    { name: "Certified Agile Product Owner", issuer: "Agile Practice Council", year: "2022", status: "expired", expired: "2024", id: "APC-APO-22-6620" },
    { name: "Professional Scrum Facilitator, Level 1", issuer: "Agile Delivery Institute", year: "2021", status: "lifetime", id: "ADI-PSF-21-4410" },
    { name: "Cloud Application Developer – Associate", issuer: "Skyline Developer Program", year: "2021", status: "expired", expired: "2023", id: "SDP-CAD-21-2075" },
    { name: "IT Service Management Foundation", issuer: "Service Excellence Board", year: "2020", status: "lifetime", id: "SEB-ITSM-20-9931" },
    { name: "Health Data Privacy Practitioner", issuer: "Middle East Health Informatics Board", year: "2020", status: "active", id: "MEHIB-HDP-20-0306" },
    { name: "Lean Six Sigma Green Belt", issuer: "Institute for Process Excellence", year: "2019", status: "lifetime", id: "IPE-LSS-19-1402" },
    { name: "Security Fundamentals Professional", issuer: "Cyber Readiness Academy", year: "2019", status: "expired", expired: "2022", id: "CRA-SFP-19-7718" },
    { name: "Usability Analysis Professional", issuer: "Usability Practice Institute", year: "2016", status: "lifetime", id: "UPI-UAP-16-0268" },
    { name: "Advanced Motion Design for Interfaces", issuer: "London School of Interface Craft", year: "2014", status: "lifetime", id: "LSIC-MD-14-0052" },
  ],

  // level: 0–6 for the little tick scale (A1 = 1 … C2/native = 6)
  languages: [
    { name: "Arabic", level: "Native", score: 6 },
    { name: "English", level: "Fluent (C2), IELTS 8.5", score: 6 },
    { name: "French", level: "Upper intermediate (B2), DELF B2", score: 4 },
    { name: "German", level: "Elementary (A2), from the exchange semester", score: 2 },
    { name: "Turkish", level: "Beginner (A1), currently learning", score: 1 },
  ],

  interests: [
    { value: "2", label: "group exhibitions", text: "Arabic calligraphy, with work shown in 2 group exhibitions" },
    { value: "3", label: "half marathons", text: "Long-distance running: 3 half marathons" },
    { value: "1,850", label: "online chess rating", text: "Chess, with an online rating of 1,850" },
    { value: "Film", label: "cameras, restored", text: "Restoring old film cameras" },
  ],
};
