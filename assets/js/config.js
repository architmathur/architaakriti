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
      babaji: "Late Gopal Sharan Mathur (Babaji)",
      nanaNani: "Late Satish Chandra Mathur & Late Savitri Mathur (Nana & Nani)"
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
  weddingDateTime: "2026-12-26T10:30:00+05:30",
  displayDate: "26th & 27th December 2026",
  dateRange: "26th & 27th December 2026",
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
    youtubeId: "-99Z8E1pOrs",
    start: 0,
    title: "Ishq Tera Tadpave (Oh Ho Ho Ho) · Sukhbir"
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
      dayTitle: "Day 1 · Saturday, 26th December 2026",
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
      dayTitle: "Day 2 · Sunday, 27th December 2026",
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

  // Wedding Venue Information (matching romitayushi.in reference)
  venues: [
    {
      id: "tanya",
      name: "Tanya Resort",
      address: "Delhi-Jaipur Highway / Bypass, Alwar, Rajasthan 301001",
      note: "All celebrations will take place at the resort.",
      events: "Lagan · Tel Madha / Haldi Bhaat · Engagement & Sangeet · Shubh Vivah",
      map: "https://maps.google.com/?q=Tanya+Resort+Alwar+Rajasthan",
      mapEmbed: "https://maps.google.com/maps?q=Tanya+Resort+Alwar+Rajasthan&z=14&output=embed"
    }
  ],

  // Travel & Accommodation (3-Column Layout from reference site)
  travel: [
    {
      title: "Getting here",
      icon: "plane",
      items: [
        ["By air", "Jaipur (JAI) and Delhi (DEL) are the nearest airports, each roughly 2.5 to 3 hours from Alwar by road via the Delhi-Mumbai Expressway."],
        ["By rail", "Alwar Junction (AWR) is well connected with regular Shatabdi & Vande Bharat Express on the Delhi–Jaipur line, a short drive from the resort."],
        ["Pickups", "Please let the Mathur & Nagpal families know your travel plans and we'll gladly assist with your arrival pickups."]
      ]
    },
    {
      title: "Where to stay",
      icon: "hotel",
      items: [
        ["Tanya Resort", "Comfortable room accommodations have been arranged at the venue for our esteemed guests."],
        ["Hospitality Desk", "Our family helpdesk team is on-site at the resort lobby to warmly welcome you and assist throughout your stay."]
      ]
    },
    {
      title: "Good to know",
      icon: "guide",
      items: [
        ["Late-December weather", "Pleasant sunny winter days (~22°C) and crisp, chilly evenings (~8°C–12°C). Carry a warm jacket or shawl for the evening Sangeet."],
        ["Getting around", "Every celebration is hosted right at Tanya Resort, so there is no hassle of traveling between ceremonies!"]
      ]
    }
  ]
};
