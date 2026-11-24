/**
 * MAIN INTERACTION SCRIPT FOR ARCHIT & AAKRITI WEDDING WEBSITE
 * Incorporating Grand Palace Doors Intro, Background Music, Live Countdown, Day-wise Events, and WhatsApp RSVP.
 */

document.addEventListener('DOMContentLoaded', () => {
  initIntroDoors();
  initCountdown();
  renderDayWiseEvents();
  renderTravel();
  initCalendarLinks();
  initPetalsCanvas();
  initAudioSystem();
  initLightbox();
  initScrollReveal();
  initMobileMenu();
});

/* ==========================================================================
   1. GRAND PALACE DOORS OPENING (INTRO)
   ========================================================================== */
function initIntroDoors() {
  const introEl = document.getElementById('intro');
  const openBtn = document.getElementById('open-invite');
  const replayBtn = document.getElementById('replay-invite');

  if (!introEl || !openBtn) return;

  function openDoors() {
    if (introEl.classList.contains('opening')) return;

    // Trigger Sparkle burst at button
    const rect = openBtn.getBoundingClientRect();
    createSparkles(rect.left + rect.width / 2, rect.top + rect.height / 2, 40);

    // Add opening class
    introEl.classList.add('opening');

    // Trigger audio playback
    if (window.playWeddingMusic) {
      window.playWeddingMusic();
    }

    setTimeout(() => {
      introEl.classList.add('gone');
      introEl.style.display = 'none';
      document.body.classList.add('intro-opened');
    }, 1600);
  }

  openBtn.addEventListener('click', openDoors);

  if (replayBtn) {
    replayBtn.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
      introEl.style.display = 'flex';
      introEl.classList.remove('gone');
      setTimeout(() => {
        introEl.classList.remove('opening');
      }, 50);
    });
  }
}

/* Sparkle particles burst */
function createSparkles(x, y, count = 25) {
  const container = document.body;
  for (let i = 0; i < count; i++) {
    const sparkle = document.createElement('div');
    sparkle.className = 'sparkle-particle';
    const angle = Math.random() * Math.PI * 2;
    const distance = Math.random() * 90 + 30;
    const destX = Math.cos(angle) * distance;
    const destY = Math.sin(angle) * distance;
    const size = Math.random() * 6 + 4;

    sparkle.style.cssText = `
      position: fixed;
      left: ${x}px;
      top: ${y}px;
      width: ${size}px;
      height: ${size}px;
      background: #F3DB9C;
      box-shadow: 0 0 8px #FFD700;
      border-radius: 50%;
      pointer-events: none;
      z-index: 10001;
      transform: translate(-50%, -50%);
      transition: transform 0.9s cubic-bezier(0.2, 0.8, 0.2, 1), opacity 0.9s ease;
    `;

    container.appendChild(sparkle);

    requestAnimationFrame(() => {
      sparkle.style.transform = `translate(calc(-50% + ${destX}px), calc(-50% + ${destY}px)) scale(0)`;
      sparkle.style.opacity = '0';
    });

    setTimeout(() => sparkle.remove(), 1000);
  }
}

/* ==========================================================================
   2. LIVE COUNTDOWN TIMER
   ========================================================================== */
function initCountdown() {
  const targetDate = new Date(WEDDING_CONFIG.weddingDateTime).getTime();
  const daysEl = document.getElementById('count-days');
  const hoursEl = document.getElementById('count-hours');
  const minutesEl = document.getElementById('count-minutes');
  const secondsEl = document.getElementById('count-seconds');

  if (!daysEl) return;

  function update() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance < 0) {
      const container = document.getElementById('countdown-container');
      if (container) {
        container.innerHTML = `
          <div class="text-xl md:text-2xl font-serif text-gold-solid tracking-wider py-4">
            ✨ The Royal Celebrations Have Begun! ✨
          </div>
        `;
      }
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    daysEl.textContent = String(days).padStart(2, '0');
    hoursEl.textContent = String(hours).padStart(2, '0');
    minutesEl.textContent = String(minutes).padStart(2, '0');
    secondsEl.textContent = String(seconds).padStart(2, '0');
  }

  update();
  setInterval(update, 1000);
}

/* ==========================================================================
   3. RENDER DAY-WISE WEDDING CELEBRATIONS
   ========================================================================== */
function renderDayWiseEvents() {
  const container = document.getElementById('events-days-container');
  if (!container || !WEDDING_CONFIG.eventDays) return;

  container.innerHTML = WEDDING_CONFIG.eventDays.map((dayGroup, dayIdx) => `
    <div class="ev-day ev-day--${dayIdx + 1} reveal">
      <!-- Ornate Day Head -->
      <h3 class="ev-day__head" data-reveal>
        <span class="ev-day__num">Day ${dayIdx + 1}</span>
        <span class="ev-day__date">${dayGroup.dayTitle.replace(/^Day \d+ · /, '')}</span>
      </h3>

      <!-- Alternating Palace Timeline -->
      <div class="timeline">
        ${dayGroup.events.map((evt, evtIdx) => `
          <article class="ev ev--${evt.id} reveal" style="--row: ${evtIdx + 1}">
            <span class="ev__dot" aria-hidden="true"></span>
            <div class="ev__icon" aria-hidden="true">
              <img src="${evt.icon}" alt="${evt.name}" />
            </div>
            <div class="ev__body">
              <h3>${evt.name}</h3>
              <p class="ev__tag">${evt.tagline}</p>
              <p class="ev__when">${dayIdx === 0 ? 'Saturday, 26 Dec 2026' : 'Sunday, 27 Dec 2026'}<span class="sep"></span>${evt.time}</p>
              <p class="ev__venue">${evt.venue}, ${evt.address}</p>
            </div>
          </article>
        `).join('')}
      </div>
    </div>
  `).join('');
}

/* ==========================================================================
   4. RENDER LOVE STORY
   ========================================================================== */
function renderStory() {
  const container = document.getElementById('story-timeline');
  if (!container || !WEDDING_CONFIG.story) return;

  container.innerHTML = WEDDING_CONFIG.story.map((item, index) => {
    const isEven = index % 2 === 0;
    return `
      <div class="relative flex flex-col md:flex-row items-center mb-12 md:mb-16 reveal">
        <!-- Center Dot on Desktop -->
        <div class="hidden md:flex absolute left-1/2 -translate-x-1/2 w-8 h-8 rounded-full border-2 border-amber-400 bg-red-950 items-center justify-center z-10 shadow-lg">
          <div class="w-3 h-3 rounded-full bg-amber-300"></div>
        </div>

        <!-- Left Column -->
        <div class="w-full md:w-1/2 ${isEven ? 'md:pr-12 md:text-right' : 'md:order-2 md:pl-12 md:text-left'} text-center mb-4 md:mb-0">
          <span class="font-caps text-amber-400 text-lg md:text-xl font-bold tracking-widest block mb-1">${item.year}</span>
          <h4 class="font-serif text-xl md:text-2xl text-amber-200 mb-2">${item.title}</h4>
          <p class="text-xs sm:text-sm text-stone-300/85 leading-relaxed">${item.desc}</p>
        </div>

        <!-- Right Column Spacer -->
        <div class="w-full md:w-1/2 ${isEven ? 'md:pl-12' : 'md:order-1 md:pr-12'}"></div>
      </div>
    `;
  }).join('');
}

/* ==========================================================================
   5. RENDER GALLERY
   ========================================================================== */
function renderGallery() {
  const container = document.getElementById('gallery-grid');
  if (!container || !WEDDING_CONFIG.gallery) return;

  container.innerHTML = WEDDING_CONFIG.gallery.map((item, index) => `
    <div class="gallery-card reveal"
         onclick="openLightbox('${item.img}', '${item.caption.replace(/'/g, "\\'")}', '${item.desc.replace(/'/g, "\\'")}')"
         style="transition-delay: ${index * 80}ms">
      <div class="gallery-card__img-wrap">
        <img src="${item.img}" alt="${item.caption}" class="gallery-card__img" />
      </div>
      <div class="gallery-card__overlay">
        <h5 class="gallery-card__caption">${item.caption}</h5>
        <p class="gallery-card__desc">${item.desc}</p>
        <span class="gallery-card__zoom">Tap to Zoom</span>
      </div>
    </div>
  `).join('');
}

/* ==========================================================================
   6. RENDER VENUE & TRAVEL (Matching romitayushi.in/invite)
   ========================================================================== */
function renderTravel() {
  const venuesContainer = document.getElementById('venues');
  const travelContainer = document.getElementById('travel-info');

  if (venuesContainer && WEDDING_CONFIG.venues) {
    venuesContainer.innerHTML = WEDDING_CONFIG.venues.map((venue) => `
      <article class="venue reveal">
        <div class="venue__pic">
          ${venue.mapEmbed ? `
            <iframe src="${venue.mapEmbed}" title="Map to ${venue.name}" loading="lazy" referrerpolicy="no-referrer-when-downgrade" allowfullscreen></iframe>
          ` : `
            <div class="w-full h-full flex items-center justify-center bg-amber-100 text-stone-600 font-serif">Map Preview</div>
          `}
        </div>
        <div class="venue__body">
          <h3 class="venue__name">${venue.name}</h3>
          <p class="venue__events">${venue.events || 'Wedding Celebrations'}</p>
          <p class="venue__addr">${venue.address}</p>
          <p class="venue__note">${venue.note || 'All celebrations will take place at the resort.'}</p>
          <a class="venue__btn" href="${venue.map}" target="_blank" rel="noopener noreferrer">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M12 21s7-6.6 7-12a7 7 0 0 0-14 0c0 5.4 7 12 7 12Z"/><circle cx="12" cy="9" r="2.4"/></svg>
            Get Directions
          </a>
        </div>
      </article>
    `).join('');
  }

  if (travelContainer && WEDDING_CONFIG.travel) {
    const icons = {
      plane: '<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3.5c-.5-.5-2.5 0-4 1.5L13.5 8.5 5.3 6.7c-.8-.2-1.6.1-2.1.7l-.7.7c-.5.5-.4 1.4.2 1.9l4.5 3.5-3.5 3.5-2.1-.4c-.5-.1-1.1.1-1.4.5l-.3.3c-.4.4-.3 1.1.2 1.5l2.8 2.2 2.2 2.8c.4.5 1.1.6 1.5.2l.3-.3c.4-.3.6-.9.5-1.4l-.4-2.1 3.5-3.5 3.5 4.5c.5.6 1.4.7 1.9.2l.7-.7c.6-.5.9-1.3.7-2.1Z"/></svg>',
      hotel: '<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2Z"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01"/><path d="M16 6h.01"/><path d="M12 6h.01"/><path d="M12 10h.01"/><path d="M12 14h.01"/><path d="M16 10h.01"/><path d="M16 14h.01"/><path d="M8 10h.01"/><path d="M8 14h.01"/></svg>',
      guide: '<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/></svg>'
    };

    travelContainer.innerHTML = WEDDING_CONFIG.travel.map((col, idx) => `
      <div class="travel__col reveal" style="transition-delay: ${idx * 100}ms">
        <h3>${icons[col.icon] || ''} ${col.title}</h3>
        <dl>
          ${col.items.map(([term, desc]) => `
            <dt>${term}</dt>
            <dd>${desc}</dd>
          `).join('')}
        </dl>
      </div>
    `).join('');
  }
}

/* ==========================================================================
   7. CALENDAR INTEGRATION
   ========================================================================== */
function initCalendarLinks() {
  const btn = document.getElementById('btn-add-calendar');
  if (!btn) return;

  const cal = WEDDING_CONFIG.googleCalendar;
  const gcalUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(cal.title)}&dates=${cal.start}/${cal.end}&details=${encodeURIComponent(cal.details)}&location=${encodeURIComponent(cal.location)}`;

  btn.href = gcalUrl;
}

/* ==========================================================================
   8. WHATSAPP RSVP
   ========================================================================== */
function initRSVP() {
  const form = document.getElementById('rsvp-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('rsvp-name').value.trim();
    const phone = document.getElementById('rsvp-phone').value.trim();
    const attendance = document.querySelector('input[name="attendance"]:checked')?.value || 'Attending';
    const guestCount = document.getElementById('rsvp-count').value;
    const message = document.getElementById('rsvp-message').value.trim();

    const selectedEvents = Array.from(document.querySelectorAll('input[name="events"]:checked'))
      .map(cb => cb.value)
      .join(', ');

    if (!name) {
      alert('Please enter your name.');
      return;
    }

    // Prepare WhatsApp Message
    const text = `*Namaste Archit & Aakriti!* ✨\n\n*Wedding RSVP Confirmation:*\n• *Name:* ${name}\n• *Phone:* ${phone || 'N/A'}\n• *Attendance:* ${attendance}\n• *Number of Guests:* ${guestCount}\n• *Functions:* ${selectedEvents || 'All Celebrations'}\n${message ? `• *Wishes / Message:* "${message}"` : ''}\n\nCan't wait to celebrate with you in Jaipur! 🥂`;

    const cleanNumber = WEDDING_CONFIG.whatsappNumber.replace(/[^0-9]/g, '');
    const waUrl = `https://wa.me/${cleanNumber}?text=${encodeURIComponent(text)}`;

    window.open(waUrl, '_blank');

    const rsvpStatus = document.getElementById('rsvp-status');
    if (rsvpStatus) {
      rsvpStatus.classList.remove('hidden');
      rsvpStatus.innerHTML = `
        <div class="p-4 rounded border border-green-500/40 bg-green-950/60 text-green-200 text-sm text-center">
          ✨ Thank you, ${name}! Your RSVP has been forwarded to WhatsApp. We look forward to celebrating with you!
        </div>
      `;
    }
  });
}

/* ==========================================================================
   9. MUSIC PLAYER (YOUTUBE API & SYNTH FALLBACK)
   ========================================================================== */
function initAudioSystem() {
  const btn = document.getElementById('audio-toggle');
  let isPlaying = false;
  let ytPlayer = null;
  let isYtReady = false;

  // Background audio / synth fallback
  let localAudio = new Audio('assets/audio/wedding-music.mp3');
  localAudio.loop = true;

  let audioCtx = null;
  let synthOscs = [];

  function startAmbientSynth() {
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      audioCtx = new AudioContext();
      const freqs = [146.83, 220.00, 293.66]; // D3, A3, D4
      freqs.forEach((freq) => {
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
        gain.gain.setValueAtTime(0.02, audioCtx.currentTime);
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.start();
        synthOscs.push({ osc, gain });
      });
    } catch (_) {}
  }

  function stopAmbientSynth() {
    synthOscs.forEach(item => {
      try { item.osc.stop(); } catch (_) {}
    });
    synthOscs = [];
    if (audioCtx && audioCtx.state !== 'closed') {
      audioCtx.close();
      audioCtx = null;
    }
  }

  // Set up YouTube Iframe
  if (WEDDING_CONFIG.song && WEDDING_CONFIG.song.youtubeId) {
    const hiddenDiv = document.createElement('div');
    hiddenDiv.id = 'yt-player-container';
    hiddenDiv.style.cssText = 'position:fixed;left:-9999px;top:0;width:10px;height:10px;opacity:0;pointer-events:none;';
    hiddenDiv.innerHTML = '<div id="yt-player"></div>';
    document.body.appendChild(hiddenDiv);

    window.onYouTubeIframeAPIReady = () => {
      ytPlayer = new YT.Player('yt-player', {
        height: '200',
        width: '200',
        videoId: WEDDING_CONFIG.song.youtubeId,
        playerVars: {
          autoplay: 0,
          controls: 0,
          loop: 1,
          playlist: WEDDING_CONFIG.song.youtubeId,
          start: WEDDING_CONFIG.song.start || 0,
          playsinline: 1
        },
        events: {
          onReady: () => {
            isYtReady = true;
          }
        }
      });
    };

    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    document.head.appendChild(tag);
  }

  function play() {
    isPlaying = true;
    if (btn) btn.classList.add('sound-playing');

    if (isYtReady && ytPlayer && ytPlayer.playVideo) {
      try {
        ytPlayer.unMute();
        ytPlayer.setVolume(75);
        ytPlayer.playVideo();
        return;
      } catch (_) {}
    }

    localAudio.play().catch(() => {
      startAmbientSynth();
    });
  }

  function pause() {
    isPlaying = false;
    if (btn) btn.classList.remove('sound-playing');

    if (isYtReady && ytPlayer && ytPlayer.pauseVideo) {
      try { ytPlayer.pauseVideo(); } catch (_) {}
    }
    localAudio.pause();
    stopAmbientSynth();
  }

  window.playWeddingMusic = play;
  window.pauseWeddingMusic = pause;

  if (btn) {
    btn.addEventListener('click', () => {
      if (isPlaying) {
        pause();
      } else {
        play();
      }
    });
  }
}

/* ==========================================================================
   10. FLOATING ROSE PETALS CANVAS ANIMATION
   ========================================================================== */
function initPetalsCanvas() {
  const canvas = document.getElementById('petals-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let width = canvas.width = window.innerWidth;
  let height = canvas.height = window.innerHeight;

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  const petalsCount = window.innerWidth < 768 ? 16 : 30;
  const petals = [];

  for (let i = 0; i < petalsCount; i++) {
    petals.push({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 9 + 7,
      speedX: (Math.random() - 0.5) * 1.1,
      speedY: Math.random() * 1.1 + 0.5,
      rotation: Math.random() * 360,
      rotSpeed: (Math.random() - 0.5) * 1.4,
      color: Math.random() > 0.4 ? 'rgba(212, 175, 55, ' : 'rgba(217, 83, 79, ',
      opacity: Math.random() * 0.35 + 0.2
    });
  }

  function draw() {
    ctx.clearRect(0, 0, width, height);

    for (let p of petals) {
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate((p.rotation * Math.PI) / 180);
      ctx.fillStyle = p.color + p.opacity + ')';

      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.bezierCurveTo(p.size / 2, -p.size / 2, p.size, -p.size / 4, p.size, 0);
      ctx.bezierCurveTo(p.size, p.size / 4, p.size / 2, p.size / 2, 0, 0);
      ctx.fill();
      ctx.restore();

      p.x += p.speedX;
      p.y += p.speedY;
      p.rotation += p.rotSpeed;

      if (p.y > height + 20) {
        p.y = -20;
        p.x = Math.random() * width;
      }
      if (p.x > width + 20) p.x = -20;
      if (p.x < -20) p.x = width + 20;
    }

    requestAnimationFrame(draw);
  }

  draw();
}

/* ==========================================================================
   11. LIGHTBOX MODAL
   ========================================================================== */
function initLightbox() {
  const modal = document.getElementById('lightbox-modal');
  const closeBtn = document.getElementById('lightbox-close');

  if (!modal || !closeBtn) return;

  closeBtn.addEventListener('click', () => {
    modal.classList.remove('active');
  });

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.remove('active');
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      modal.classList.remove('active');
    }
  });
}

window.openLightbox = function(imgSrc, caption, desc) {
  const modal = document.getElementById('lightbox-modal');
  const modalImg = document.getElementById('lightbox-img');
  const modalCap = document.getElementById('lightbox-caption');
  const modalDesc = document.getElementById('lightbox-desc');

  if (!modal || !modalImg) return;

  modalImg.src = imgSrc;
  modalCap.textContent = caption;
  modalDesc.textContent = desc;

  modal.classList.add('active');
};

/* ==========================================================================
   12. SCROLL REVEAL (INTERSECTION OBSERVER)
   ========================================================================== */
function initScrollReveal() {
  const reveals = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  }, { threshold: 0.1 });

  reveals.forEach(el => observer.observe(el));
}

/* ==========================================================================
   13. MOBILE NAVIGATION MENU
   ========================================================================== */
function initMobileMenu() {
  const toggleBtn = document.getElementById('mobile-menu-toggle');
  const menu = document.getElementById('mobile-menu');
  const links = document.querySelectorAll('.mobile-nav-link');

  if (!toggleBtn || !menu) return;

  toggleBtn.addEventListener('click', () => {
    menu.classList.toggle('hidden');
  });

  links.forEach(link => {
    link.addEventListener('click', () => {
      menu.classList.add('hidden');
    });
  });
}
