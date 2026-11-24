/**
 * WEDDING CONFIGURATION - ARCHIT & AAKRITI
 * Easily customize couple names, dates, venues, and event details here.
 */
const WEDDING_CONFIG = {
  // Couple Information
  groom: {
    firstName: "Archit",
    fullName: "Archit Mathur",
    parents: "Smt. Poonam Mathur & Sh. Atulya Mathur",
    dadi: "Smt. Laxmi Mathur",
    heavenlyBlessings: {
      babaji: "Gopal Sharan Mathur (Babaji)",
      nanaNani: "Satish Chandra Mathur & Savitri Mathur (Nana & Nani)"
    }
  },
  bride: {
    firstName: "Aakriti",
    fullName: "Aakriti Nagpal",
    parents: "Smt. Kanchan Nagpal & Sh. Arvind Nagpal"
  },
  families: "Mathur & Nagpal Families",
  hashtag: "#ArchitKiAakriti",

  // Main Wedding Date for Countdown (ISO 8601 format)
  weddingDateTime: "2026-12-27T19:00:00+05:30",
  displayDate: "DECEMBER 27, 2026",
  dateRange: "26 – 27 December 2026",
  city: "Alwar, Rajasthan",
  primaryVenue: "Tanya Resort, Alwar",

  // Sanskrit Invocations
  mantras: [
    "॥ श्री गणेशाय नमः ॥",
    "॥ ॐ वक्रतुण्ड महाकाय सूर्यकोटि समप्रभ ॥",
    "॥ निर्विघ्नं कुरु मे देव सर्वकार्येषु सर्वदा ॥"
  ],

  // Background Music (YouTube or fallback MP3 / Synth)
  song: {
    youtubeId: "-GZ-eEozdIg",
    start: 5,
    title: "Wedding Melody · Instrumental Celebration"
  },

  // Google Calendar Event
  googleCalendar: {
    title: "Wedding of Archit & Aakriti",
    details: "We warmly invite you to bless and celebrate the wedding of Archit & Aakriti at Tanya Resort, Alwar!",
    location: "Tanya Resort, Alwar, Rajasthan",
    start: "20261227T180000",
    end: "20261228T020000"
  },

  // Day-wise Wedding Celebrations
  eventDays: [
    {
      dayTitle: "Day 1 · Saturday, 26 December 2026",
      subtitle: "Auspicious Beginnings, Traditional Rituals & Sangeet",
      events: [
        {
          id: "lagan",
          name: "Lagan",
          tagline: "The sacred traditional ritual and auspicious wedding invitation ceremony",
          time: "10:30 AM",
          venue: "Tanya Resort",
          address: "Alwar, Rajasthan",
          dressCode: "Traditional Ethnic Wear",
          icon: "assets/images/events/wedding.svg",
          mapsLink: "https://maps.google.com/?q=Tanya+Resort+Alwar+Rajasthan"
        },
        {
          id: "tel-madha-bhaat",
          name: "Tel Madha / Haldi Bhaat",
          tagline: "Auspicious oil & haldi ceremony with joyous Bhaat traditions welcoming the maternal uncle",
          time: "12:00 Noon Onwards",
          venue: "Tanya Resort",
          address: "Alwar, Rajasthan",
          dressCode: "Festive Yellows & Traditional Attire",
          icon: "assets/images/events/haldi.svg",
          mapsLink: "https://maps.google.com/?q=Tanya+Resort+Alwar+Rajasthan"
        },
        {
          id: "engagement-sangeet",
          name: "Engagement & Sangeet",
          tagline: "The ring ceremony followed by an evening of music, dance & celebrations",
          time: "06:00 PM Onwards",
          venue: "Grand Lawn & Ballroom",
          address: "Tanya Resort, Alwar",
          dressCode: "Indo-Western Glamour & Evening Finery",
          icon: "assets/images/events/sangeet.svg",
          mapsLink: "https://maps.google.com/?q=Tanya+Resort+Alwar+Rajasthan"
        }
      ]
    },
    {
      dayTitle: "Day 2 · Sunday, 27 December 2026",
      subtitle: "The Auspicious Wedding Day & Sacred Vows",
      badge: "The Wedding Day",
      events: [
        {
          id: "wedding",
          name: "Shubh Vivah (Varmala & Phere)",
          tagline: "The sacred vows around the holy agni, united for seven lifetimes",
          time: "Varmala: 02:00 PM | Phere to follow",
          venue: "Tanya Resort",
          address: "Alwar, Rajasthan",
          dressCode: "Traditional Regal Attire (Maroon, Ivory & Gold)",
          icon: "assets/images/events/wedding.svg",
          mapsLink: "https://maps.google.com/?q=Tanya+Resort+Alwar+Rajasthan"
        }
      ]
    }
  ],

  // Gallery Photos
  gallery: [
    {
      img: "assets/images/gallery-1.svg",
      caption: "The First Glance",
      desc: "Where our journey quietly began"
    },
    {
      img: "assets/images/gallery-2.svg",
      caption: "Coffee & Sunsets",
      desc: "Countless hours that felt like minutes"
    },
    {
      img: "assets/images/gallery-3.svg",
      caption: "The Proposal",
      desc: "A heartfelt question, an eternal yes"
    },
    {
      img: "assets/images/gallery-4.svg",
      caption: "Hand in Hand",
      desc: "Ready to walk through every chapter together"
    },
    {
      img: "assets/images/gallery-5.svg",
      caption: "Laughter & Smiles",
      desc: "Finding home in each other's eyes"
    },
    {
      img: "assets/images/gallery-6.svg",
      caption: "Forever & Always",
      desc: "Two souls bound by love and destiny"
    }
  ],

  // Travel & Accommodation FAQ
  travel: [
    {
      title: "Wedding Venue",
      desc: "Tanya Resort, Alwar, Rajasthan. Nestled in the serene Aravalli hills, conveniently accessible from Delhi and Jaipur."
    },
    {
      title: "Nearest Airport",
      desc: "Delhi IGI Airport (DEL) & Jaipur Airport (JAI) are both approximately 2.5 to 3 hours drive via the Delhi-Mumbai Expressway."
    },
    {
      title: "Railway Connectivity",
      desc: "Alwar Junction (AWR) is well connected with direct Vande Bharat Express, Shatabdi Express, and major trains."
    },
    {
      title: "Guest Accommodation & Hospitality",
      desc: "Comfortable room accommodations have been arranged at Tanya Resort for our esteemed guests. Our helpdesk team is on-site to assist you."
    }
  ]
};
