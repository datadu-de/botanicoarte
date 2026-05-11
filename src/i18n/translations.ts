export type Locale = 'en' | 'de' | 'es' | 'no' | 'da' | 'sv';

export const translations = {
  en: {
    meta: {
      siteName: 'Arte Botanico',
      tagline: 'Art Studio & Atelier · Mallorca',
      homeTitle: 'Arte Botanico – Art Studio Mallorca',
      homeDescription: 'Painting classes, resin workshops, and pottery on Mallorca. Acrylic & watercolor for children and adults. Book on GetYourGuide.',
      coursesTitle: 'Courses & Workshops – Arte Botanico',
      coursesDescription: 'Explore all painting classes, resin art workshops, and pottery sessions at Arte Botanico Mallorca.',
      galleryTitle: 'Gallery – Arte Botanico',
      contactTitle: 'Contact – Arte Botanico',
    },
    nav: {
      home: 'Home',
      courses: 'Courses',
      gallery: 'Gallery',
      contact: 'Contact',
      bookNow: 'Book Now',
    },
    hero: {
      badge: 'Art Studio · Mallorca',
      headline: 'Discover Your Creative Side in Paradise',
      subheadline: 'Painting classes, resin workshops & pottery in the heart of Mallorca — for curious beginners and seasoned artists alike.',
      cta: 'Explore Courses',
      ctaSecondary: 'Book via GetYourGuide',
    },
    about: {
      subtitle: 'Welcome to Arte Botanico',
      title: 'Where Art Meets the Soul of Mallorca',
      body: 'Arte Botanico is a warm, welcoming atelier nestled on the beautiful island of Mallorca. Founded by artist and passionate teacher, our studio offers a sanctuary where creativity flourishes — surrounded by Mediterranean light, botanical gardens, and the tranquil pace of island life.',
      body2: "Whether you're picking up a brush for the very first time or deepening a lifelong practice, our small-group classes ensure personal attention, a relaxed atmosphere, and the joy of making something beautiful with your hands.",
      stat1Value: '6+',
      stat1Label: 'Course types',
      stat2Value: '4',
      stat2Label: 'Languages',
      stat3Value: '∞',
      stat3Label: 'Creativity',
    },
    courses: {
      subtitle: 'What We Offer',
      title: 'Courses & Workshops',
      intro: 'From first brushstrokes to finished masterpieces — find the right course for you.',
      learnMore: 'Learn More',
      bookNow: 'Book Now',
      allCourses: 'View All Courses',
      items: {
        acrylic: {
          title: 'Acrylic Painting',
          audience: 'Children & Adults',
          description: 'Explore the vibrant world of acrylic painting. Learn layering, texture, and colour mixing in a fun and supportive environment. Suitable for complete beginners and those looking to refine their skills.',
          details: ['All skill levels welcome', 'Materials included', 'Small groups (max 8)', 'Duration: 2–3 hours'],
        },
        watercolor: {
          title: 'Watercolor / Aquarelle',
          audience: 'Children & Adults',
          description: 'Discover the delicate beauty of watercolour. We explore wet-on-wet, gradients, and botanical illustrations — guided by the light and colours of the Mediterranean landscape around us.',
          details: ['All skill levels welcome', 'Materials included', 'Small groups (max 8)', 'Duration: 2–3 hours'],
        },
        resin: {
          title: 'Resin Art Workshop',
          audience: 'Adults only',
          description: 'Create stunning jewellery, trays, and wall art using epoxy resin. Learn colour mixing, mould techniques, and finishing methods in this hands-on workshop. No experience needed.',
          details: ['Adults only (18+)', 'All materials included', 'Take your creation home', 'Duration: 3–4 hours'],
        },
        pottery: {
          title: 'Pottery Workshop',
          audience: 'Adults only',
          description: 'Get your hands in the clay! Learn hand-building techniques including pinching, coiling, and slab construction. Shape, texture, and personalise your own ceramic piece.',
          details: ['Adults only (18+)', 'Clay & tools included', 'Piece fired & ready to collect', 'Duration: 2–3 hours'],
        },
        private: {
          title: 'Private Classes at Home',
          audience: 'All ages',
          description: 'Prefer to learn in the comfort of your own villa or apartment? We come to you! Private painting sessions tailored entirely to your interests, pace, and skill level — anywhere on Mallorca.',
          details: ['Flexible scheduling', 'We bring all materials', 'Fully personalised', 'Min. 2 hours'],
        },
        openStudio: {
          title: 'Open Studio for Residents',
          audience: 'Long-term residents',
          description: 'Living on Mallorca? Join our regular open studio sessions — a relaxed gathering of like-minded people who meet to paint, experiment, and connect. Monthly and weekly memberships available.',
          details: ['Residents only', 'Monthly or weekly plans', 'All levels', 'Communal & social'],
        },
      },
    },
    getyourguide: {
      badge: 'Booking Partner',
      title: 'Book Your Experience on GetYourGuide',
      body: "Our courses are bookable directly through GetYourGuide — the world's leading platform for experiences and activities. Secure, flexible cancellation, and available in your language.",
      cta: 'Find Us on GetYourGuide',
    },
    gallery: {
      subtitle: 'Our Work',
      title: 'A Glimpse Into the Studio',
      intro: 'From the first brushstroke to the finished canvas — moments of creativity from our classes and workshops.',
    },
    contact: {
      subtitle: 'Get in Touch',
      title: "We'd Love to Hear from You",
      intro: 'Questions about courses, private bookings, or residency? Reach out — we usually respond within 24 hours.',
      nameLabel: 'Your Name',
      emailLabel: 'Email Address',
      messageLabel: 'Your Message',
      subjectLabel: 'Subject',
      subjectOptions: {
        general: 'General enquiry',
        booking: 'Course booking',
        private: 'Private class at home',
        resident: 'Resident open studio',
        other: 'Other',
      },
      send: 'Send Message',
      info: {
        location: 'Mallorca, Spain',
        locationDetail: 'Exact address shared upon booking',
        emailLabel: 'Email',
        email: 'hola@artebotanico.com',
        phone: '+34 XXX XXX XXX',
        languages: 'EN · DE · ES · NO · DA · SV',
      },
      successTitle: 'Message Sent!',
      successBody: "Thank you for reaching out. We'll get back to you very soon.",
    },
    footer: {
      tagline: 'Art, light & creativity on the island of Mallorca.',
      nav: 'Navigation',
      follow: 'Follow Us',
      instagram: 'Instagram',
      facebook: 'Facebook',
      rights: '© {year} Arte Botanico. All rights reserved.',
      bookVia: 'Book via GetYourGuide',
    },
  },
  de: {
    meta: {
      siteName: 'Arte Botanico',
      tagline: 'Kunstatelier · Mallorca',
      homeTitle: 'Arte Botanico – Kunststudio Mallorca',
      homeDescription: 'Malkurse, Resin-Workshops und Töpfern auf Mallorca. Acryl & Aquarell für Kinder und Erwachsene. Jetzt auf GetYourGuide buchen.',
      coursesTitle: 'Kurse & Workshops – Arte Botanico',
      coursesDescription: 'Entdecke alle Malkurse, Resin-Workshops und Töpfer-Sessions bei Arte Botanico Mallorca.',
      galleryTitle: 'Galerie – Arte Botanico',
      contactTitle: 'Kontakt – Arte Botanico',
    },
    nav: {
      home: 'Startseite',
      courses: 'Kurse',
      gallery: 'Galerie',
      contact: 'Kontakt',
      bookNow: 'Jetzt buchen',
    },
    hero: {
      badge: 'Kunstatelier · Mallorca',
      headline: 'Entdecke deine kreative Seite im Paradies',
      subheadline: 'Malkurse, Resin-Workshops & Töpfern im Herzen Mallorcas — für neugierige Anfänger und erfahrene Künstler.',
      cta: 'Kurse entdecken',
      ctaSecondary: 'Bei GetYourGuide buchen',
    },
    about: {
      subtitle: 'Willkommen bei Arte Botanico',
      title: 'Wo Kunst die Seele Mallorcas trifft',
      body: 'Arte Botanico ist ein warmes, einladendes Atelier auf der wunderschönen Insel Mallorca. Unser Studio bietet einen Ort, an dem Kreativität aufblüht — umgeben vom mediterranen Licht, botanischen Gärten und dem ruhigen Inselleben.',
      body2: 'Ob du zum ersten Mal einen Pinsel in die Hand nimmst oder eine jahrelange Praxis vertiefst — unsere Kleingruppenklassen bieten persönliche Betreuung, eine entspannte Atmosphäre und die Freude, etwas Schönes mit den eigenen Händen zu schaffen.',
      stat1Value: '6+',
      stat1Label: 'Kursarten',
      stat2Value: '4',
      stat2Label: 'Sprachen',
      stat3Value: '∞',
      stat3Label: 'Kreativität',
    },
    courses: {
      subtitle: 'Unser Angebot',
      title: 'Kurse & Workshops',
      intro: 'Vom ersten Pinselstrich bis zum fertigen Meisterwerk — finde den richtigen Kurs für dich.',
      learnMore: 'Mehr erfahren',
      bookNow: 'Jetzt buchen',
      allCourses: 'Alle Kurse ansehen',
      items: {
        acrylic: {
          title: 'Acrylmalerei',
          audience: 'Kinder & Erwachsene',
          description: 'Tauche ein in die lebendige Welt der Acrylmalerei. Lerne Schichten, Texturen und Farbmischung in einer fröhlichen und unterstützenden Umgebung. Für absolute Anfänger und Fortgeschrittene geeignet.',
          details: ['Alle Levels willkommen', 'Materialien inklusive', 'Kleine Gruppen (max. 8)', 'Dauer: 2–3 Stunden'],
        },
        watercolor: {
          title: 'Aquarellmalerei',
          audience: 'Kinder & Erwachsene',
          description: 'Entdecke die zarte Schönheit des Aquarells. Wir erkunden Nass-in-Nass-Techniken, Farbverläufe und botanische Illustrationen — inspiriert vom Licht und den Farben der mediterranen Landschaft.',
          details: ['Alle Levels willkommen', 'Materialien inklusive', 'Kleine Gruppen (max. 8)', 'Dauer: 2–3 Stunden'],
        },
        resin: {
          title: 'Resin Art Workshop',
          audience: 'Nur für Erwachsene',
          description: 'Erschaffe atemberaubenden Schmuck, Tableware und Wandkunst mit Epoxidharz. Lerne Farbmischung, Formtechniken und Veredelungsmethoden in diesem praktischen Workshop. Keine Erfahrung nötig.',
          details: ['Nur Erwachsene (18+)', 'Alle Materialien inklusive', 'Eigenes Werk mitnehmen', 'Dauer: 3–4 Stunden'],
        },
        pottery: {
          title: 'Töpfer-Workshop',
          audience: 'Nur für Erwachsene',
          description: 'Hände in den Ton! Lerne Handaufbautechniken wie Aufwulsten, Drücken und Plattenaufbau. Forme, texturiere und personalisiere dein eigenes Keramikstück.',
          details: ['Nur Erwachsene (18+)', 'Ton & Werkzeug inklusive', 'Stück wird gebrannt & abholbereit', 'Dauer: 2–3 Stunden'],
        },
        private: {
          title: 'Private Kurse bei dir zu Hause',
          audience: 'Alle Altersgruppen',
          description: 'Lieber in der Ruhe deiner eigenen Villa oder Ferienwohnung lernen? Wir kommen zu dir! Private Malsessions ganz nach deinen Interessen, deinem Tempo und deinem Niveau — überall auf Mallorca.',
          details: ['Flexible Terminplanung', 'Alle Materialien dabei', 'Vollständig personalisiert', 'Mind. 2 Stunden'],
        },
        openStudio: {
          title: 'Offenes Atelier für Residenten',
          audience: 'Langfristige Bewohner',
          description: 'Du lebst auf Mallorca? Komm zu unseren regelmäßigen Open-Studio-Sessions — ein entspanntes Treffen von Gleichgesinnten, die zusammen malen, experimentieren und sich austauschen. Monats- und Wochenmitgliedschaften verfügbar.',
          details: ['Nur für Residenten', 'Monats- oder Wochenpläne', 'Alle Levels', 'Gemeinschaftlich & sozial'],
        },
      },
    },
    getyourguide: {
      badge: 'Buchungspartner',
      title: 'Jetzt auf GetYourGuide buchen',
      body: 'Unsere Kurse sind direkt über GetYourGuide buchbar — die weltweit führende Plattform für Erlebnisse und Aktivitäten. Sicher, mit flexibler Stornierung und in deiner Sprache verfügbar.',
      cta: 'Uns auf GetYourGuide finden',
    },
    gallery: {
      subtitle: 'Unsere Arbeiten',
      title: 'Ein Blick ins Atelier',
      intro: 'Vom ersten Pinselstrich bis zur fertigen Leinwand — kreative Momente aus unseren Kursen und Workshops.',
    },
    contact: {
      subtitle: 'Kontakt aufnehmen',
      title: 'Wir freuen uns von dir zu hören',
      intro: 'Fragen zu Kursen, privaten Buchungen oder Mitgliedschaft? Schreib uns — wir antworten in der Regel innerhalb von 24 Stunden.',
      nameLabel: 'Dein Name',
      emailLabel: 'E-Mail-Adresse',
      messageLabel: 'Deine Nachricht',
      subjectLabel: 'Betreff',
      subjectOptions: {
        general: 'Allgemeine Anfrage',
        booking: 'Kursbuchung',
        private: 'Privatkurs zu Hause',
        resident: 'Offenes Atelier für Residenten',
        other: 'Sonstiges',
      },
      send: 'Nachricht senden',
      info: {
        location: 'Mallorca, Spanien',
        locationDetail: 'Genaue Adresse nach Buchung',
        emailLabel: 'E-Mail',
        email: 'hola@artebotanico.com',
        phone: '+34 XXX XXX XXX',
        languages: 'EN · DE · ES · NO · DA · SV',
      },
      successTitle: 'Nachricht gesendet!',
      successBody: 'Vielen Dank für deine Nachricht. Wir melden uns sehr bald bei dir.',
    },
    footer: {
      tagline: 'Kunst, Licht & Kreativität auf der Insel Mallorca.',
      nav: 'Navigation',
      follow: 'Folge uns',
      instagram: 'Instagram',
      facebook: 'Facebook',
      rights: '© {year} Arte Botanico. Alle Rechte vorbehalten.',
      bookVia: 'Über GetYourGuide buchen',
    },
  },
} as const;

export type TranslationKeys = typeof translations.en;

export function t(locale: string): TranslationKeys {
  const lang = locale as Locale;
  return (translations[lang] ?? translations.en) as TranslationKeys;
}

export function getLocaleFromUrl(url: URL): Locale {
  const [, lang] = url.pathname.split('/');
  if (lang in translations) return lang as Locale;
  return 'en';
}

export function useTranslations(locale: Locale) {
  return t(locale);
}
