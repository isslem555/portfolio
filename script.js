/* ============================================================
   PORTFOLIO ISSLEM MEJRI — script.js
   Aurora canvas · Cursor · Loader · Typing · Reveal · Counters
   Filter · Theme · Contact form · Nav · Language Switcher
   ============================================================ */
'use strict';

/* ── TRANSLATIONS ────────────────────────────────────────── */
const TRANSLATIONS = {
  fr: {
    // Nav
    nav_home: 'Accueil',
    nav_about: 'Profil',
    nav_skills: 'Compétences',
    nav_experience: 'Expérience',
    nav_projects: 'Projets',
    nav_certifications: 'Certifications',
    nav_contact: 'Contact',
    // Hero badge
    hero_badge: 'Disponible · Open to Work',
    // Hero title
    hero_title_1: 'Ingénieure',
    hero_title_2: 'Logicielle',
    hero_title_3: '& IA Enthusiast',
    hero_prefix: 'Je suis ',
    hero_desc: 'Diplômée <strong>Mention Très Bien</strong> en Génie Logiciel & Systèmes d\'Information. Je construis des solutions intelligentes à fort impact — du backend Django à l\'analyse ML, en passant par Angular et l\'architecture API.',
    hero_btn_projects: 'Voir mes projets',
    hero_btn_cv: 'Télécharger CV',
    hero_stat_stages: 'Stages',
    hero_stat_projects: 'Projets',
    hero_stat_certif: 'Certif.',
    hero_stat_langues: 'Langues',
    hero_scroll: 'Défiler',
    // Typing words
    typing_words: [
      'développeuse full-stack',
      'passionnée par l\'IA',
      'ingénieure logicielle',
      'orientée Data Science',
      'créatrice de solutions digitales',
      'future leader tech',
    ],
    // About
    label_about: 'À propos',
    about_title: 'Profil',
    about_title_em: 'professionnel',
    about_sub: 'Une développeuse curieuse, rigoureuse et orientée impact.',
    about_p1: 'Diplômée en <strong>Génie Logiciel et Systèmes d\'Information</strong> avec la mention <strong>Très Bien</strong>, j\'ai construit un parcours solide à travers quatre stages en entreprise — de Tunisie Telecom à la Banque STB — et plusieurs projets académiques primés.',
    about_p2: 'Mon approche est résolument full-stack : backend robuste avec <strong>Django & DRF</strong>, frontend réactif avec <strong>Angular</strong>, analyse intelligente avec <strong>Machine Learning</strong>, et intégration d\'APIs REST sécurisées (JWT).',
    about_p3: 'Je cherche à rejoindre une équipe ambitieuse où je peux continuer à apprendre, contribuer, et créer de la valeur réelle — en Tunisie ou à l\'international.',
    about_tag1: '🎓 Mention Très Bien',
    about_tag2: '🏆 1ère · ISI Innovation 2024',
    about_tag3: '🌍 Open to relocate',
    info_loc_title: 'Localisation',
    info_loc_val: 'Tunisie · Open to remote',
    info_edu_title: 'Diplôme',
    info_edu_val: 'Licence GL & SI — ISI Kef · 2026',
    info_obj_title: 'Objectif',
    info_obj_val: 'Stage, emploi junior ou opportunité internationale',
    info_int_title: 'Intérêts',
    info_int_val: 'IA, Data Science, Web, entrepreneuriat tech',
    info_dispo_title: 'Disponibilité',
    info_dispo_val: 'Immédiate',
    // Skills
    label_skills: 'Compétences',
    skills_title: 'Stack',
    skills_title_em: 'technique',
    skills_sub: 'Technologies maîtrisées à travers des projets concrets.',
    skill_d1_title: 'Développement Web',
    skill_d1_desc: 'HTML5, CSS3, JavaScript, TypeScript, Bootstrap, Angular, Laravel, React, Next.js',
    skill_d2_title: 'Backend & APIs',
    skill_d2_desc: 'Python, Django, DRF, Flask, REST APIs, JWT, Celery, Redis, WebSockets',
    skill_d3_title: 'IA & Data Science',
    skill_d3_desc: 'Machine Learning, Random Forest, détection d\'anomalies, scikit-learn, analyse de données',
    skill_d4_title: 'Bases de données',
    skill_d4_desc: 'SQL, PL/SQL, MariaDB, MySQL, SQLite',
    skills_tech_title: 'Technologies',
    skills_tools_title: 'Outils & Environnement',
    // Experience
    label_exp: 'Parcours',
    exp_title: 'Expériences',
    exp_title_em: 'professionnelles',
    exp_sub: 'Quatre stages qui ont forgé mes compétences en conditions réelles.',
    // Projects
    label_proj: 'Réalisations',
    proj_title: 'Projets',
    proj_title_em: 'sélectionnés',
    proj_sub: 'Des solutions concrètes, du code à l\'impact.',
    filter_all: 'Tous',
    filter_ai: 'IA / Data',
    filter_web: 'Web',
    filter_innov: 'Innovation',
    // Certifications
    label_cert: 'Formation continue',
    cert_title: 'Certifications',
    cert_sub: 'Un engagement constant dans l\'apprentissage continu.',
    // Languages section
    label_lang: 'Langues',
    lang_title: 'Communication',
    lang_title_em: 'internationale',
    lang_ar: 'Arabe',
    lang_fr: 'Français',
    lang_en: 'Anglais',
    lang_de: 'Allemand',
    lang_ar_level: 'Maternelle',
    lang_fr_level: 'Courant',
    lang_en_level: 'Courant',
    lang_de_level: 'Notions',
    // Associative
    label_assoc: 'Associatif',
    assoc_title: 'Leadership &',
    assoc_title_em: 'Engagement',
    assoc1_title: 'Cheffe du Département Relations Publiques',
    assoc1_org: 'IDER Association · 2024 – 2025',
    assoc1_desc: 'Gestion des partenariats, sponsors et communication externe.',
    assoc2_title: 'Membre',
    assoc2_org: 'BrainStation New York · 2023 – 2024',
    assoc2_desc: 'Formation internationale en innovation, IA et développement full-stack.',
    assoc3_title: 'Membre',
    assoc3_org: 'Google Developer Student Clubs (GDSC) · 2022 – 2023',
    assoc3_desc: 'Projets collaboratifs en web et IA, design thinking.',
    // Contact
    label_contact: 'Contact',
    contact_title: 'Travaillons',
    contact_title_em: 'ensemble',
    contact_sub: 'Disponible pour un stage, un poste junior ou une collaboration internationale.',
    contact_intro: 'Vous avez un projet, une opportunité ou simplement envie d\'échanger ? N\'hésitez pas à me contacter, je réponds rapidement.',
    contact_email_title: 'Email',
    contact_phone_title: 'Téléphone',
    contact_linkedin_title: 'LinkedIn',
    contact_linkedin_val: 'Voir mon profil professionnel',
    form_name: 'Nom complet',
    form_name_ph: 'Votre nom',
    form_email: 'Email',
    form_email_ph: 'votre@email.com',
    form_subject: 'Sujet',
    form_subject_ph: 'Ex: Opportunité de stage / Collaboration',
    form_message: 'Message',
    form_message_ph: 'Décrivez votre projet ou opportunité...',
    form_submit: 'Envoyer le message',
    form_note: 'Ce formulaire ouvre votre client email. Aucune donnée n\'est stockée.',
    // Footer
    footer_copy: '© 2026 · Tous droits réservés · Conçu avec ❤️',
    footer_top: 'Retour en haut',
    // CV button
    cv_label: 'CV',
  },

  en: {
    nav_home: 'Home',
    nav_about: 'Profile',
    nav_skills: 'Skills',
    nav_experience: 'Experience',
    nav_projects: 'Projects',
    nav_certifications: 'Certifications',
    nav_contact: 'Contact',
    hero_badge: 'Available · Open to Work',
    hero_title_1: 'Software',
    hero_title_2: 'Engineer',
    hero_title_3: '& AI Enthusiast',
    hero_prefix: 'I am a ',
    hero_desc: 'Graduated with <strong>Highest Honors</strong> in Software Engineering & Information Systems. I build intelligent, high-impact solutions — from Django backend to ML analysis, Angular, and API architecture.',
    hero_btn_projects: 'View my projects',
    hero_btn_cv: 'Download CV',
    hero_stat_stages: 'Internships',
    hero_stat_projects: 'Projects',
    hero_stat_certif: 'Certif.',
    hero_stat_langues: 'Languages',
    hero_scroll: 'Scroll',
    typing_words: [
      'full-stack developer',
      'AI enthusiast',
      'software engineer',
      'Data Science oriented',
      'digital solution builder',
      'future tech leader',
    ],
    label_about: 'About',
    about_title: 'Professional',
    about_title_em: 'Profile',
    about_sub: 'A curious, rigorous, impact-driven developer.',
    about_p1: 'Graduated in <strong>Software Engineering & Information Systems</strong> with <strong>Highest Honors</strong>, I built a solid track record through four professional internships — from Tunisie Telecom to STB Bank — and several award-winning academic projects.',
    about_p2: 'My approach is resolutely full-stack: robust backend with <strong>Django & DRF</strong>, reactive frontend with <strong>Angular</strong>, intelligent analysis with <strong>Machine Learning</strong>, and secure REST API integration (JWT).',
    about_p3: 'I aim to join an ambitious team where I can keep learning, contributing, and creating real value — in Tunisia or internationally.',
    about_tag1: '🎓 Highest Honors',
    about_tag2: '🏆 1st Place · ISI Innovation 2024',
    about_tag3: '🌍 Open to relocate',
    info_loc_title: 'Location',
    info_loc_val: 'Tunisia · Open to remote',
    info_edu_title: 'Degree',
    info_edu_val: 'BSc Software Eng. — ISI Kef · 2026',
    info_obj_title: 'Goal',
    info_obj_val: 'Internship, junior role or international opportunity',
    info_int_title: 'Interests',
    info_int_val: 'AI, Data Science, Web, tech entrepreneurship',
    info_dispo_title: 'Availability',
    info_dispo_val: 'Immediate',
    label_skills: 'Skills',
    skills_title: 'Tech',
    skills_title_em: 'Stack',
    skills_sub: 'Technologies mastered through real-world projects.',
    skill_d1_title: 'Web Development',
    skill_d1_desc: 'HTML5, CSS3, JavaScript, TypeScript, Bootstrap, Angular, Laravel, React, Next.js',
    skill_d2_title: 'Backend & APIs',
    skill_d2_desc: 'Python, Django, DRF, Flask, REST APIs, JWT, Celery, Redis, WebSockets',
    skill_d3_title: 'AI & Data Science',
    skill_d3_desc: 'Machine Learning, Random Forest, anomaly detection, scikit-learn, data analysis',
    skill_d4_title: 'Databases',
    skill_d4_desc: 'SQL, PL/SQL, MariaDB, MySQL, SQLite',
    skills_tech_title: 'Technologies',
    skills_tools_title: 'Tools & Environment',
    label_exp: 'Experience',
    exp_title: 'Professional',
    exp_title_em: 'Experience',
    exp_sub: 'Four internships that sharpened my skills in real conditions.',
    label_proj: 'Work',
    proj_title: 'Selected',
    proj_title_em: 'Projects',
    proj_sub: 'Concrete solutions, from code to impact.',
    filter_all: 'All',
    filter_ai: 'AI / Data',
    filter_web: 'Web',
    filter_innov: 'Innovation',
    label_cert: 'Continuous Learning',
    cert_title: 'Certifications',
    cert_sub: 'A constant commitment to continuous learning.',
    label_lang: 'Languages',
    lang_title: 'International',
    lang_title_em: 'Communication',
    lang_ar: 'Arabic',
    lang_fr: 'French',
    lang_en: 'English',
    lang_de: 'German',
    lang_ar_level: 'Native',
    lang_fr_level: 'Fluent',
    lang_en_level: 'Fluent',
    lang_de_level: 'Basic',
    label_assoc: 'Community',
    assoc_title: 'Leadership &',
    assoc_title_em: 'Involvement',
    assoc1_title: 'Head of Public Relations Department',
    assoc1_org: 'IDER Association · 2024 – 2025',
    assoc1_desc: 'Managing partnerships, sponsors and external communications.',
    assoc2_title: 'Member',
    assoc2_org: 'BrainStation New York · 2023 – 2024',
    assoc2_desc: 'International training in innovation, AI and full-stack development.',
    assoc3_title: 'Member',
    assoc3_org: 'Google Developer Student Clubs (GDSC) · 2022 – 2023',
    assoc3_desc: 'Collaborative web and AI projects, design thinking.',
    label_contact: 'Contact',
    contact_title: "Let's work",
    contact_title_em: 'together',
    contact_sub: 'Available for an internship, junior position or international collaboration.',
    contact_intro: 'Have a project, an opportunity or just want to chat? Feel free to reach out — I respond quickly.',
    contact_email_title: 'Email',
    contact_phone_title: 'Phone',
    contact_linkedin_title: 'LinkedIn',
    contact_linkedin_val: 'View my professional profile',
    form_name: 'Full name',
    form_name_ph: 'Your name',
    form_email: 'Email',
    form_email_ph: 'your@email.com',
    form_subject: 'Subject',
    form_subject_ph: 'Ex: Internship opportunity / Collaboration',
    form_message: 'Message',
    form_message_ph: 'Describe your project or opportunity...',
    form_submit: 'Send message',
    form_note: 'This form opens your email client. No data is stored.',
    footer_copy: '© 2026 · All rights reserved · Made with ❤️',
    footer_top: 'Back to top',
    cv_label: 'CV',
  },

  de: {
    nav_home: 'Start',
    nav_about: 'Profil',
    nav_skills: 'Kenntnisse',
    nav_experience: 'Erfahrung',
    nav_projects: 'Projekte',
    nav_certifications: 'Zertifikate',
    nav_contact: 'Kontakt',
    hero_badge: 'Verfügbar · Open to Work',
    hero_title_1: 'Software',
    hero_title_2: 'Ingenieurin',
    hero_title_3: '& KI Enthusiastin',
    hero_prefix: 'Ich bin ',
    hero_desc: 'Abschluss mit <strong>Auszeichnung</strong> in Software Engineering & Informationssystemen. Ich entwickle intelligente, wirkungsvolle Lösungen — vom Django-Backend über ML-Analyse bis hin zu Angular und API-Architektur.',
    hero_btn_projects: 'Meine Projekte',
    hero_btn_cv: 'Lebenslauf herunterladen',
    hero_stat_stages: 'Praktika',
    hero_stat_projects: 'Projekte',
    hero_stat_certif: 'Zertif.',
    hero_stat_langues: 'Sprachen',
    hero_scroll: 'Scrollen',
    typing_words: [
      'Full-Stack-Entwicklerin',
      'KI-begeistert',
      'Software-Ingenieurin',
      'Data-Science-orientiert',
      'digitale Problemlöserin',
      'zukünftige Tech-Leaderin',
    ],
    label_about: 'Über mich',
    about_title: 'Berufliches',
    about_title_em: 'Profil',
    about_sub: 'Eine neugierige, sorgfältige und wirkungsorientierte Entwicklerin.',
    about_p1: 'Abschluss in <strong>Software Engineering & Informationssystemen</strong> mit <strong>Auszeichnung</strong>, mit einem soliden Werdegang durch vier Berufspraktika — von Tunisie Telecom bis zur STB Bank — und mehrere ausgezeichnete akademische Projekte.',
    about_p2: 'Mein Ansatz ist konsequent Full-Stack: robustes Backend mit <strong>Django & DRF</strong>, reaktives Frontend mit <strong>Angular</strong>, intelligente Analyse mit <strong>Machine Learning</strong> und sichere REST-API-Integration (JWT).',
    about_p3: 'Ich möchte einem ambitionierten Team beitreten, in dem ich weiterlernen, beitragen und echten Mehrwert schaffen kann — in Tunesien oder international.',
    about_tag1: '🎓 Auszeichnung',
    about_tag2: '🏆 1. Platz · ISI Innovation 2024',
    about_tag3: '🌍 Umzugsbereit',
    info_loc_title: 'Standort',
    info_loc_val: 'Tunesien · Remote möglich',
    info_edu_title: 'Abschluss',
    info_edu_val: 'BSc Software Eng. — ISI Kef · 2026',
    info_obj_title: 'Ziel',
    info_obj_val: 'Praktikum, Juniorstelle oder internationale Möglichkeit',
    info_int_title: 'Interessen',
    info_int_val: 'KI, Data Science, Web, Tech-Unternehmertum',
    info_dispo_title: 'Verfügbarkeit',
    info_dispo_val: 'Sofort',
    label_skills: 'Kenntnisse',
    skills_title: 'Tech',
    skills_title_em: 'Stack',
    skills_sub: 'Technologien, die durch echte Projekte gemeistert wurden.',
    skill_d1_title: 'Webentwicklung',
    skill_d1_desc: 'HTML5, CSS3, JavaScript, TypeScript, Bootstrap, Angular, Laravel, React, Next.js',
    skill_d2_title: 'Backend & APIs',
    skill_d2_desc: 'Python, Django, DRF, Flask, REST APIs, JWT, Celery, Redis, WebSockets',
    skill_d3_title: 'KI & Data Science',
    skill_d3_desc: 'Machine Learning, Random Forest, Anomalieerkennung, scikit-learn, Datenanalyse',
    skill_d4_title: 'Datenbanken',
    skill_d4_desc: 'SQL, PL/SQL, MariaDB, MySQL, SQLite',
    skills_tech_title: 'Technologien',
    skills_tools_title: 'Werkzeuge & Umgebung',
    label_exp: 'Werdegang',
    exp_title: 'Berufliche',
    exp_title_em: 'Erfahrung',
    exp_sub: 'Vier Praktika, die meine Fähigkeiten unter realen Bedingungen geschärft haben.',
    label_proj: 'Arbeiten',
    proj_title: 'Ausgewählte',
    proj_title_em: 'Projekte',
    proj_sub: 'Konkrete Lösungen, vom Code zur Wirkung.',
    filter_all: 'Alle',
    filter_ai: 'KI / Daten',
    filter_web: 'Web',
    filter_innov: 'Innovation',
    label_cert: 'Weiterbildung',
    cert_title: 'Zertifikate',
    cert_sub: 'Ein kontinuierliches Engagement für lebenslanges Lernen.',
    label_lang: 'Sprachen',
    lang_title: 'Internationale',
    lang_title_em: 'Kommunikation',
    lang_ar: 'Arabisch',
    lang_fr: 'Französisch',
    lang_en: 'Englisch',
    lang_de: 'Deutsch',
    lang_ar_level: 'Muttersprache',
    lang_fr_level: 'Fließend',
    lang_en_level: 'Fließend',
    lang_de_level: 'Grundkenntnisse',
    label_assoc: 'Engagement',
    assoc_title: 'Leadership &',
    assoc_title_em: 'Engagement',
    assoc1_title: 'Leiterin der Abteilung Öffentlichkeitsarbeit',
    assoc1_org: 'IDER Association · 2024 – 2025',
    assoc1_desc: 'Verwaltung von Partnerschaften, Sponsoren und externer Kommunikation.',
    assoc2_title: 'Mitglied',
    assoc2_org: 'BrainStation New York · 2023 – 2024',
    assoc2_desc: 'Internationale Ausbildung in Innovation, KI und Full-Stack-Entwicklung.',
    assoc3_title: 'Mitglied',
    assoc3_org: 'Google Developer Student Clubs (GDSC) · 2022 – 2023',
    assoc3_desc: 'Kollaborative Web- und KI-Projekte, Design Thinking.',
    label_contact: 'Kontakt',
    contact_title: 'Arbeiten wir',
    contact_title_em: 'zusammen',
    contact_sub: 'Verfügbar für ein Praktikum, eine Juniorstelle oder internationale Zusammenarbeit.',
    contact_intro: 'Haben Sie ein Projekt, eine Gelegenheit oder möchten Sie einfach reden? Kontaktieren Sie mich — ich antworte schnell.',
    contact_email_title: 'E-Mail',
    contact_phone_title: 'Telefon',
    contact_linkedin_title: 'LinkedIn',
    contact_linkedin_val: 'Mein Berufsprofil ansehen',
    form_name: 'Vollständiger Name',
    form_name_ph: 'Ihr Name',
    form_email: 'E-Mail',
    form_email_ph: 'ihre@email.com',
    form_subject: 'Betreff',
    form_subject_ph: 'z.B.: Praktikumsangebot / Zusammenarbeit',
    form_message: 'Nachricht',
    form_message_ph: 'Beschreiben Sie Ihr Projekt oder Ihre Möglichkeit...',
    form_submit: 'Nachricht senden',
    form_note: 'Dieses Formular öffnet Ihren E-Mail-Client. Es werden keine Daten gespeichert.',
    footer_copy: '© 2026 · Alle Rechte vorbehalten · Mit ❤️ gestaltet',
    footer_top: 'Nach oben',
    cv_label: 'CV',
  },
};

let currentLang = localStorage.getItem('im-lang') || 'fr';
let typingWords = TRANSLATIONS[currentLang].typing_words;

/* ── APPLY TRANSLATIONS ──────────────────────────────────── */
function applyTranslations(lang) {
  const t = TRANSLATIONS[lang];
  if (!t) return;
  currentLang = lang;
  localStorage.setItem('im-lang', lang);
  typingWords = t.typing_words;

  // Update lang buttons
  document.querySelectorAll('.lang-switch-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  // Helper
  const set = (sel, html, attr = 'innerHTML') => {
    const el = document.querySelector(sel);
    if (el) el[attr] = html;
  };
  const setAll = (sel, html) => {
    document.querySelectorAll(sel).forEach(el => el.innerHTML = html);
  };

  // Nav links
  set('[data-i18n="nav_home"]', t.nav_home);
  set('[data-i18n="nav_about"]', t.nav_about);
  set('[data-i18n="nav_skills"]', t.nav_skills);
  set('[data-i18n="nav_experience"]', t.nav_experience);
  set('[data-i18n="nav_projects"]', t.nav_projects);
  set('[data-i18n="nav_certifications"]', t.nav_certifications);
  set('[data-i18n="nav_contact"]', t.nav_contact);

  // Hero
  set('[data-i18n="hero_badge"]', t.hero_badge);
  set('[data-i18n="hero_title_1"]', t.hero_title_1);
  set('[data-i18n="hero_title_2"]', t.hero_title_2);
  set('[data-i18n="hero_title_3"]', t.hero_title_3);
  set('[data-i18n="hero_prefix"]', t.hero_prefix);
  set('[data-i18n="hero_desc"]', t.hero_desc);
  set('[data-i18n="hero_btn_projects"]', t.hero_btn_projects);
  set('[data-i18n="hero_btn_cv"]', t.hero_btn_cv);
  set('[data-i18n="hero_stat_stages"]', t.hero_stat_stages);
  set('[data-i18n="hero_stat_projects"]', t.hero_stat_projects);
  set('[data-i18n="hero_stat_certif"]', t.hero_stat_certif);
  set('[data-i18n="hero_stat_langues"]', t.hero_stat_langues);
  set('[data-i18n="hero_scroll"]', t.hero_scroll);
  set('[data-i18n="cv_label"]', t.cv_label);

  // About
  set('[data-i18n="label_about"]', t.label_about);
  set('[data-i18n="about_title"]', t.about_title);
  set('[data-i18n="about_title_em"]', t.about_title_em);
  set('[data-i18n="about_sub"]', t.about_sub);
  set('[data-i18n="about_p1"]', t.about_p1);
  set('[data-i18n="about_p2"]', t.about_p2);
  set('[data-i18n="about_p3"]', t.about_p3);
  set('[data-i18n="about_tag1"]', t.about_tag1);
  set('[data-i18n="about_tag2"]', t.about_tag2);
  set('[data-i18n="about_tag3"]', t.about_tag3);
  set('[data-i18n="info_loc_title"]', t.info_loc_title);
  set('[data-i18n="info_loc_val"]', t.info_loc_val);
  set('[data-i18n="info_edu_title"]', t.info_edu_title);
  set('[data-i18n="info_edu_val"]', t.info_edu_val);
  set('[data-i18n="info_obj_title"]', t.info_obj_title);
  set('[data-i18n="info_obj_val"]', t.info_obj_val);
  set('[data-i18n="info_int_title"]', t.info_int_title);
  set('[data-i18n="info_int_val"]', t.info_int_val);
  set('[data-i18n="info_dispo_title"]', t.info_dispo_title);
  set('[data-i18n="info_dispo_val"]', t.info_dispo_val);

  // Skills
  set('[data-i18n="label_skills"]', t.label_skills);
  set('[data-i18n="skills_title"]', t.skills_title);
  set('[data-i18n="skills_title_em"]', t.skills_title_em);
  set('[data-i18n="skills_sub"]', t.skills_sub);
  set('[data-i18n="skill_d1_title"]', t.skill_d1_title);
  set('[data-i18n="skill_d1_desc"]', t.skill_d1_desc);
  set('[data-i18n="skill_d2_title"]', t.skill_d2_title);
  set('[data-i18n="skill_d2_desc"]', t.skill_d2_desc);
  set('[data-i18n="skill_d3_title"]', t.skill_d3_title);
  set('[data-i18n="skill_d3_desc"]', t.skill_d3_desc);
  set('[data-i18n="skill_d4_title"]', t.skill_d4_title);
  set('[data-i18n="skill_d4_desc"]', t.skill_d4_desc);
  set('[data-i18n="skills_tech_title"]', t.skills_tech_title);
  set('[data-i18n="skills_tools_title"]', t.skills_tools_title);

  // Experience
  set('[data-i18n="label_exp"]', t.label_exp);
  set('[data-i18n="exp_title"]', t.exp_title);
  set('[data-i18n="exp_title_em"]', t.exp_title_em);
  set('[data-i18n="exp_sub"]', t.exp_sub);

  // Projects
  set('[data-i18n="label_proj"]', t.label_proj);
  set('[data-i18n="proj_title"]', t.proj_title);
  set('[data-i18n="proj_title_em"]', t.proj_title_em);
  set('[data-i18n="proj_sub"]', t.proj_sub);
  set('[data-i18n="filter_all"]', t.filter_all);
  set('[data-i18n="filter_ai"]', t.filter_ai);
  set('[data-i18n="filter_web"]', t.filter_web);
  set('[data-i18n="filter_innov"]', t.filter_innov);

  // Certifications
  set('[data-i18n="label_cert"]', t.label_cert);
  set('[data-i18n="cert_title"]', t.cert_title);
  set('[data-i18n="cert_sub"]', t.cert_sub);

  // Languages
  set('[data-i18n="label_lang"]', t.label_lang);
  set('[data-i18n="lang_title"]', t.lang_title);
  set('[data-i18n="lang_title_em"]', t.lang_title_em);
  set('[data-i18n="lang_ar"]', t.lang_ar);
  set('[data-i18n="lang_fr"]', t.lang_fr);
  set('[data-i18n="lang_en"]', t.lang_en);
  set('[data-i18n="lang_de"]', t.lang_de);
  set('[data-i18n="lang_ar_level"]', t.lang_ar_level);
  set('[data-i18n="lang_fr_level"]', t.lang_fr_level);
  set('[data-i18n="lang_en_level"]', t.lang_en_level);
  set('[data-i18n="lang_de_level"]', t.lang_de_level);

  // Associative
  set('[data-i18n="label_assoc"]', t.label_assoc);
  set('[data-i18n="assoc_title"]', t.assoc_title);
  set('[data-i18n="assoc_title_em"]', t.assoc_title_em);
  set('[data-i18n="assoc1_title"]', t.assoc1_title);
  set('[data-i18n="assoc1_org"]', t.assoc1_org);
  set('[data-i18n="assoc1_desc"]', t.assoc1_desc);
  set('[data-i18n="assoc2_title"]', t.assoc2_title);
  set('[data-i18n="assoc2_org"]', t.assoc2_org);
  set('[data-i18n="assoc2_desc"]', t.assoc2_desc);
  set('[data-i18n="assoc3_title"]', t.assoc3_title);
  set('[data-i18n="assoc3_org"]', t.assoc3_org);
  set('[data-i18n="assoc3_desc"]', t.assoc3_desc);

  // Contact
  set('[data-i18n="label_contact"]', t.label_contact);
  set('[data-i18n="contact_title"]', t.contact_title);
  set('[data-i18n="contact_title_em"]', t.contact_title_em);
  set('[data-i18n="contact_sub"]', t.contact_sub);
  set('[data-i18n="contact_intro"]', t.contact_intro);
  set('[data-i18n="contact_email_title"]', t.contact_email_title);
  set('[data-i18n="contact_phone_title"]', t.contact_phone_title);
  set('[data-i18n="contact_linkedin_title"]', t.contact_linkedin_title);
  set('[data-i18n="contact_linkedin_val"]', t.contact_linkedin_val);
  set('[data-i18n="form_name"]', t.form_name);
  set('[data-i18n="form_email_label"]', t.form_email);
  set('[data-i18n="form_subject"]', t.form_subject);
  set('[data-i18n="form_message"]', t.form_message);
  set('[data-i18n="form_submit"]', t.form_submit);
  set('[data-i18n="form_note"]', t.form_note);

  // Placeholders
  const nameInput = document.querySelector('[data-ph="form_name_ph"]');
  if (nameInput) nameInput.placeholder = t.form_name_ph;
  const emailInput = document.querySelector('[data-ph="form_email_ph"]');
  if (emailInput) emailInput.placeholder = t.form_email_ph;
  const subjectInput = document.querySelector('[data-ph="form_subject_ph"]');
  if (subjectInput) subjectInput.placeholder = t.form_subject_ph;
  const msgInput = document.querySelector('[data-ph="form_message_ph"]');
  if (msgInput) msgInput.placeholder = t.form_message_ph;

  // Footer
  set('[data-i18n="footer_copy"]', t.footer_copy);
  set('[data-i18n="footer_top"]', t.footer_top);

  // Restart typing with new words
  restartTyping();
}

/* ── LOADER ─────────────────────────────────────────────── */
window.addEventListener('load', () => {
  const loader = document.getElementById('loader');
  if (!loader) return;
  // Apply saved language immediately
  applyTranslations(currentLang);
  setTimeout(() => {
    loader.classList.add('hidden');
    document.querySelectorAll('.fade-up').forEach((el, i) => {
      setTimeout(() => el.classList.add('in'), i * 80);
    });
    setTimeout(startCounters, 900);
  }, 1900);
});

/* ── AURORA CANVAS ──────────────────────────────────────── */
(function initAurora() {
  const canvas = document.getElementById('aurora');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let W, H, blobs;
  const COLORS_DARK = [
    'rgba(124,58,237,0.18)', 'rgba(0,212,255,0.12)', 'rgba(255,107,157,0.10)',
    'rgba(124,58,237,0.10)', 'rgba(0,212,255,0.08)',
  ];
  const COLORS_LIGHT = [
    'rgba(124,58,237,0.08)', 'rgba(0,212,255,0.06)', 'rgba(255,107,157,0.05)',
    'rgba(124,58,237,0.06)', 'rgba(0,212,255,0.04)',
  ];
  function getColors() {
    return document.body.classList.contains('light') ? COLORS_LIGHT : COLORS_DARK;
  }
  function resize() { W = canvas.width = window.innerWidth; H = canvas.height = window.innerHeight; }
  function createBlobs() {
    blobs = Array.from({ length: 5 }, (_, i) => ({
      x: Math.random() * W, y: Math.random() * H,
      r: Math.random() * 280 + 180,
      vx: (Math.random() - 0.5) * 0.35, vy: (Math.random() - 0.5) * 0.35,
      colorIndex: i,
    }));
  }
  function draw() {
    ctx.clearRect(0, 0, W, H);
    const colors = getColors();
    blobs.forEach(b => {
      b.x += b.vx; b.y += b.vy;
      if (b.x < -b.r) b.x = W + b.r; if (b.x > W + b.r) b.x = -b.r;
      if (b.y < -b.r) b.y = H + b.r; if (b.y > H + b.r) b.y = -b.r;
      const grad = ctx.createRadialGradient(b.x, b.y, 0, b.x, b.y, b.r);
      grad.addColorStop(0, colors[b.colorIndex]);
      grad.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.beginPath(); ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2);
      ctx.fillStyle = grad; ctx.fill();
    });
    requestAnimationFrame(draw);
  }
  resize(); createBlobs(); draw();
  window.addEventListener('resize', resize);
})();

/* ── CUSTOM CURSOR ──────────────────────────────────────── */
(function initCursor() {
  const cursor = document.getElementById('cursor');
  const trail  = document.getElementById('cursorTrail');
  if (!cursor || !trail) return;
  let mx = -100, my = -100, tx = -100, ty = -100;
  document.addEventListener('mousemove', e => {
    mx = e.clientX; my = e.clientY;
    cursor.style.left = mx + 'px'; cursor.style.top = my + 'px';
  });
  function followTrail() {
    tx += (mx - tx) * 0.12; ty += (my - ty) * 0.12;
    trail.style.left = tx + 'px'; trail.style.top = ty + 'px';
    requestAnimationFrame(followTrail);
  }
  followTrail();
  document.querySelectorAll('a, button, .project-card, .cert-card, .skill-domain, .filter-btn, .tool-tag, .lang-switch-btn').forEach(el => {
    el.addEventListener('mouseenter', () => {
      cursor.style.width = '20px'; cursor.style.height = '20px';
      trail.style.width = '50px'; trail.style.height = '50px';
      trail.style.borderColor = 'rgba(0,212,255,0.6)';
    });
    el.addEventListener('mouseleave', () => {
      cursor.style.width = '12px'; cursor.style.height = '12px';
      trail.style.width = '36px'; trail.style.height = '36px';
      trail.style.borderColor = 'rgba(124,58,237,0.5)';
    });
  });
  document.addEventListener('mouseleave', () => { cursor.style.opacity = '0'; trail.style.opacity = '0'; });
  document.addEventListener('mouseenter', () => { cursor.style.opacity = '1'; trail.style.opacity = '0.5'; });
})();

/* ── HEADER SCROLL ──────────────────────────────────────── */
(function initHeader() {
  const header = document.getElementById('header');
  if (!header) return;
  const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 40);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
})();

/* ── MOBILE NAV ─────────────────────────────────────────── */
(function initMobileNav() {
  const hamburger = document.getElementById('hamburger');
  const navMenu   = document.getElementById('navMenu');
  if (!hamburger || !navMenu) return;
  hamburger.addEventListener('click', () => {
    const isOpen = navMenu.classList.toggle('open');
    hamburger.classList.toggle('open', isOpen);
    hamburger.setAttribute('aria-expanded', isOpen);
  });
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('open');
      hamburger.classList.remove('open');
    });
  });
  document.addEventListener('click', e => {
    if (!navMenu.contains(e.target) && !hamburger.contains(e.target)) {
      navMenu.classList.remove('open');
      hamburger.classList.remove('open');
    }
  });
})();

/* ── ACTIVE NAV ON SCROLL ───────────────────────────────── */
(function initActiveNav() {
  const navLinks = document.querySelectorAll('.nav-link[href^="#"]');
  const sections = [];
  navLinks.forEach(link => {
    const id = link.getAttribute('href').slice(1);
    const el = document.getElementById(id);
    if (el) sections.push({ el, link });
  });
  const onScroll = () => {
    const scrollY = window.pageYOffset + 120;
    let current = sections[0];
    sections.forEach(({ el, link }) => { if (el.offsetTop <= scrollY) current = { el, link }; });
    navLinks.forEach(l => l.classList.remove('active'));
    if (current) current.link.classList.add('active');
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
})();

/* ── THEME TOGGLE ───────────────────────────────────────── */
(function initTheme() {
  const btn = document.getElementById('themeToggle');
  if (!btn) return;
  const saved = localStorage.getItem('im-theme') || 'dark';
  setTheme(saved);
  btn.addEventListener('click', () => {
    setTheme(document.body.classList.contains('dark') ? 'light' : 'dark');
  });
  function setTheme(theme) {
    document.body.classList.remove('dark', 'light');
    document.body.classList.add(theme);
    localStorage.setItem('im-theme', theme);
    const icon = document.getElementById('themeIcon');
    if (!icon) return;
    icon.innerHTML = theme === 'dark'
      ? '<circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>'
      : '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>';
  }
})();

/* ── LANGUAGE SWITCHER ──────────────────────────────────── */
(function initLangSwitcher() {
  document.querySelectorAll('.lang-switch-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.dataset.lang;
      if (lang && lang !== currentLang) {
        applyTranslations(lang);
      }
    });
  });
})();

/* ── TYPING EFFECT ──────────────────────────────────────── */
let typingTimer = null;
let typingWordIdx = 0;
let typingCharIdx = 0;
let typingDeleting = false;

function restartTyping() {
  if (typingTimer) clearTimeout(typingTimer);
  typingWordIdx = 0; typingCharIdx = 0; typingDeleting = false;
  const el = document.getElementById('typedText');
  if (el) el.textContent = '';
  tick();
}

function tick() {
  const el = document.getElementById('typedText');
  if (!el) return;
  const words = typingWords;
  const word = words[typingWordIdx % words.length];
  if (typingDeleting) {
    el.textContent = word.slice(0, --typingCharIdx);
  } else {
    el.textContent = word.slice(0, ++typingCharIdx);
  }
  let delay = typingDeleting ? 45 : 85;
  if (!typingDeleting && typingCharIdx === word.length) { delay = 1400; typingDeleting = true; }
  else if (typingDeleting && typingCharIdx === 0) { typingDeleting = false; typingWordIdx = (typingWordIdx + 1) % words.length; delay = 280; }
  typingTimer = setTimeout(tick, delay);
}

(function initTyping() {
  setTimeout(tick, 2200);
})();

/* ── SCROLL REVEAL ──────────────────────────────────────── */
(function initReveal() {
  const els = document.querySelectorAll('.reveal');
  if (!els.length) return;
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  els.forEach(el => io.observe(el));
})();

/* ── COUNTERS ───────────────────────────────────────────── */
function startCounters() {
  document.querySelectorAll('.counter').forEach(el => {
    const target = +el.dataset.target;
    let val = 0;
    const step = Math.ceil(target / 40);
    const timer = setInterval(() => {
      val = Math.min(val + step, target);
      el.textContent = val;
      if (val >= target) clearInterval(timer);
    }, 40);
  });
}

/* ── PROJECTS FILTER ────────────────────────────────────── */
(function initFilter() {
  const btns  = document.querySelectorAll('.filter-btn');
  const cards = document.querySelectorAll('.project-card');
  if (!btns.length) return;
  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      btns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;
      cards.forEach(card => {
        const cats = card.dataset.category || '';
        const show = filter === 'all' || cats.includes(filter);
        if (show) {
          card.style.display = '';
          card.style.opacity = '0';
          card.style.transform = 'translateY(16px)';
          requestAnimationFrame(() => requestAnimationFrame(() => {
            card.style.transition = 'opacity 0.35s ease, transform 0.35s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }));
        } else {
          card.style.transition = 'opacity 0.25s ease, transform 0.25s ease';
          card.style.opacity = '0';
          card.style.transform = 'translateY(10px)';
          setTimeout(() => { card.style.display = 'none'; }, 260);
        }
      });
    });
  });
})();

/* ── CONTACT FORM ───────────────────────────────────────── */
(function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;
  form.addEventListener('submit', e => {
    e.preventDefault();
    const fd = new FormData(form);
    const name    = fd.get('name')    || '';
    const email   = fd.get('email')   || '';
    const subject = fd.get('subject') || 'Contact via portfolio';
    const message = fd.get('message') || '';
    const sub  = encodeURIComponent(`[Portfolio] ${subject} — ${name}`);
    const body = encodeURIComponent(`Bonjour Isslem,\n\n${message}\n\n---\nNom : ${name}\nEmail : ${email}`);
    window.location.href = `mailto:isslemmejri274@gmail.com?subject=${sub}&body=${body}`;
    const btn = form.querySelector('.btn-submit');
    if (btn) {
      const orig = btn.innerHTML;
      btn.innerHTML = '<span>✓</span>';
      btn.style.background = 'linear-gradient(135deg,#10B981,#059669)';
      setTimeout(() => { btn.innerHTML = orig; btn.style.background = ''; form.reset(); }, 3000);
    }
  });
})();

/* ── SMOOTH SCROLL ──────────────────────────────────────── */
(function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const id = a.getAttribute('href').slice(1);
      const target = document.getElementById(id);
      if (!target) return;
      e.preventDefault();
      window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - 88, behavior: 'smooth' });
    });
  });
})();

/* ── TILT EFFECT ────────────────────────────────────────── */
(function initTilt() {
  const cards = document.querySelectorAll('.project-card, .cert-card');
  cards.forEach(card => {
    card.addEventListener('mousemove', e => {
      const rect = card.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width  - 0.5) * 10;
      const y = ((e.clientY - rect.top)  / rect.height - 0.5) * -10;
      card.style.transform = `perspective(800px) rotateY(${x}deg) rotateX(${y}deg) translateY(-6px)`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = ''; card.style.transition = 'transform 0.5s ease';
    });
    card.addEventListener('mouseenter', () => { card.style.transition = 'transform 0.15s ease'; });
  });
})();

/* ── PARALLAX HERO ──────────────────────────────────────── */
(function initParallax() {
  const orb = document.querySelector('.profile-orb');
  if (!orb) return;
  document.addEventListener('mousemove', e => {
    const x = (e.clientX / window.innerWidth  - 0.5) * 18;
    const y = (e.clientY / window.innerHeight - 0.5) * 18;
    orb.style.transform = `translate(${x}px, ${y}px)`;
    orb.style.transition = 'transform 0.6s ease';
  });
})();

/* ── GLITCH / HUE SHIFT ─────────────────────────────────── */
(function initGlitch() {
  const accentLine = document.querySelector('.title-accent');
  if (!accentLine) return;
  let hue = 260;
  setInterval(() => {
    hue = hue > 300 ? 200 : hue + 0.4;
    accentLine.style.backgroundImage = `linear-gradient(135deg, hsl(${hue},80%,55%), #00D4FF)`;
    accentLine.style.webkitBackgroundClip = 'text';
    accentLine.style.backgroundClip = 'text';
  }, 40);
})();

/* ── SCROLL PROGRESS BAR ─────────────────────────────────── */
(function initScrollProgress() {
  const bar = document.createElement('div');
  bar.style.cssText = `position:fixed;top:0;left:0;height:2px;width:0%;background:linear-gradient(90deg,#7C3AED,#00D4FF,#FF6B9D);z-index:9999;transition:width 0.1s linear;pointer-events:none;`;
  document.body.appendChild(bar);
  window.addEventListener('scroll', () => {
    const total = document.documentElement.scrollHeight - window.innerHeight;
    bar.style.width = (total > 0 ? (window.scrollY / total) * 100 : 0) + '%';
  }, { passive: true });
})();

/* ── CHIP HOVER ─────────────────────────────────────────── */
(function initChips() {
  document.querySelectorAll('.chip').forEach(chip => {
    chip.addEventListener('mouseenter', () => {
      chip.style.transform = 'scale(1.12)';
      chip.style.boxShadow = '0 8px 28px rgba(124,58,237,0.4)';
      chip.style.zIndex = '20';
    });
    chip.addEventListener('mouseleave', () => {
      chip.style.transform = '';
      chip.style.boxShadow = '';
      chip.style.zIndex = '10';
    });
  });
})();

/* ── LANG BAR ANIMATION ─────────────────────────────────── */
(function initLangBars() {
  const fills = document.querySelectorAll('.lang-bar-fill');
  if (!fills.length) return;
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.style.animation = 'bar-grow 1.5s cubic-bezier(0.16,1,0.3,1) forwards';
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.3 });
  fills.forEach(f => io.observe(f));
})();