// ============================================================
// Wedding Data — Centralized Configuration
// ============================================================

export const invitationData = {
  // Couple Information
  couple: {
    groomNickname: "Rexi",
    brideNickname: "Julia",
    groomFullName: "Rexi Faza Juliansyah",
    brideFullName: "Juliana Kus Inggardini",
    groomParents: { father: "Bapak Ifdial", mother: "Ibu Lindawati" },
    brideParents: { father: "Bapak Sugito", mother: "Ibu Endang Suningsih" },
    groomIg: "https://www.instagram.com/rexijuliansyah",
    brideIg: "https://www.instagram.com/juliainggardini",
  },

  // Event Details
  event: {
    akad: {
      title: "Akad",
      date: "Sabtu, 11 Juli 2026",
      time: "09:00 - 10:30 WIB",
      venue: "Ponyo® Resto & Wedding",
      address:
        "Aula Atas\nJl. Raya Cinunuk No.186, Cinunuk, Kec. Cileunyi\nKabupaten Bandung, Jawa Barat",
      mapsUrl: "https://maps.google.com/?q=Ponyo+Resto+Cinunuk+Cileunyi",
    },
    resepsi: {
      title: "Resepsi",
      date: "Sabtu, 11 Juli 2026",
      time: "10:30 - 13:30 WIB",
      venue: "Ponyo® Resto & Wedding",
      address:
        "Aula Atas\nJl. Raya Cinunuk No.186, Cinunuk, Kec. Cileunyi\nKabupaten Bandung, Jawa Barat",
      mapsUrl: "https://maps.google.com/?q=Ponyo+Resto+Cinunuk+Cileunyi",
    },
    weddingDate: "2026-07-11T08:00:00+07:00", // ISO format for countdown
  },

  // Love Story Timeline
  story: [
    {
      title: "Awal Cerita",
      description:
        "Kami bertemu dan saling mengenal, mengawali kisah dengan tawa dan obrolan ringan yang perlahan berubah menjadi rasa nyaman.",
    },
    {
      title: "Lamaran",
      description:
        "Dengan niat yang tulus dan disaksikan oleh keluarga tercinta, kami melangkah ke jenjang yang lebih serius untuk saling mengikat janji.",
    },
    {
      title: "Pernikahan",
      description:
        "Bismillah, 11 Juli 2026 kami akan mengikat janji suci disaksikan orang tua dan sahabat, memohon rahmat Allah agar hari-hari setelahnya menjadi ruang belajar untuk saling menguatkan dan mengasihi.",
    },
  ],

  // Gift / Amplop Digital
  gift: {
    banks: [
      {
        name: "BSI",
        accountNumber: "7220510624",
        accountHolder: "JULIANA KUS INGGARDINI",
      },
      {
        name: "BCA",
        accountNumber: "3761381847",
        accountHolder: "REXI FAZA JULIANSYAH",
      },
    ],
    address: {
      name: "Julia / Rexi",
      phone: "081234567890",
      detail:
        "Komplek Cibiru Asri Blok Q No 8 RT.4/RW.17,\nCileunyi, Kabupaten Bandung, Jawa Barat",
    },
  },

  // Gallery (currently missing actual files, we will use placeholders or empty for now, but will set up the structure)
  gallery: [
    { id: 1, alt: "Pre-wedding 1" },
    { id: 2, alt: "Pre-wedding 2" },
    { id: 3, alt: "Pre-wedding 3" },
    { id: 4, alt: "Pre-wedding 4" },
  ],

  // Music
  music: {
    src: `${import.meta.env.BASE_URL}music.mp3`,
  },

  // Meta & Texts
  meta: {
    whatsappNumber: "6281234567890", // Replace with actual if needed
    instagramUrl: "https://www.instagram.com/rexijuliansyah", // Couple's joint IG or main contact
    hashtag: "#AkhirnyaJulianSyahinJulia",
    quranQuote: {
      arabic:
        "وَمِنْ ءَايَٰتِهِۦٓ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَٰجًا لِّتَسْكُنُوٓا۟ إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً ۚ إِنَّ فِى ذَٰلِكَ لَءَايَٰتٍ لِّقَوْمٍ يَتَفَكَّرُونَ",
      text: '"Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan sayang. Sungguh, pada yang demikian itu benar-benar terdapat tanda-tanda (kebesaran Allah) bagi kaum yang berpikir."',
      source: "(QS. Ar-Rum: 21)",
    },
    invitationText:
      "Tanpa mengurangi rasa hormat, kami mengundang Bapak/Ibu/Saudara/i serta kerabat sekalian untuk menghadiri acara pernikahan kami.",
    closingText:
      "Merupakan suatu kehormatan dan kebahagiaan bagi kami, apabila Bapak/Ibu/Saudara/i berkenan hadir dan memberikan doa restu. Atas kehadiran dan doa restunya, kami mengucapkan terima kasih.",
    galleryText:
      "Tidak ada yang spesial dalam cerita kami. Tapi kami sangat spesial untuk satu sama lain. Dan Kami bersyukur, dipertemukan Allah diwaktu terbaik, Kini kami menanti hari istimewa kami.",
    giftText:
      "Doa restu Anda merupakan karunia yang sangat berarti bagi kami. Namun jika memberi adalah ungkapan tanda kasih, Anda dapat memberi kado secara cashless melalui:",
  },
};
