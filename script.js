// Mapping from country ISO code to approximate lat/lng in NEARBY OCEAN / COASTAL WATERS
// These are hand-tuned so the heatmap highlights ocean areas rather than inland centroids.
const COUNTRY_CENTROIDS = {
  // North America & Atlantic
  USA: [30.0, -75.0], // off US East Coast / Gulf Stream
  CAN: [45.0, -55.0], // off Newfoundland
  MEX: [21.0, -96.0], // Gulf of Mexico

  // South America & South Atlantic
  BRA: [-10.0, -30.0], // western South Atlantic
  ARG: [-45.0, -60.0], // South Atlantic off Argentina
  CHL: [-33.0, -75.0], // Pacific off Chile
  COL: [12.0, -75.0], // Caribbean off Colombia
  PER: [-12.0, -80.0], // Pacific off Peru (Humboldt Current)

  // Western Europe & North Atlantic
  GBR: [52.0, -10.0], // North Atlantic west of UK
  IRL: [53.0, -15.0], // Atlantic west of Ireland
  FRA: [46.0, -5.0], // Bay of Biscay
  ESP: [38.0, -7.0], // off Iberian coast
  PRT: [37.0, -15.0], // Atlantic near Portugal
  DEU: [55.0, 6.0], // North Sea
  NLD: [54.0, 4.0], // North Sea
  BEL: [51.5, 2.0], // North Sea
  ITA: [40.0, 14.0], // Tyrrhenian Sea
  GRC: [37.5, 23.5], // Aegean Sea

  // Nordics & Baltic / Arctic
  NOR: [65.0, 5.0], // Norwegian Sea
  SWE: [58.0, 18.0], // Baltic Sea
  FIN: [60.0, 24.0], // Gulf of Finland

  // Eastern Europe & Black Sea
  POL: [54.0, 18.0], // Baltic coast
  TUR: [41.0, 30.0], // Black Sea
  RUS: [70.0, 150.0], // Arctic / North Pacific sector
  UKR: [44.5, 33.0], // Black Sea off Ukraine

  // Africa
  EGY: [31.0, 30.0], // Eastern Mediterranean
  ZAF: [-35.0, 20.0], // off Cape of Good Hope
  NGA: [4.0, 5.0], // Gulf of Guinea
  ETH: [12.0, 45.0], // Gulf of Aden
  DZA: [35.0, 3.0], // Mediterranean off Algeria
  MAR: [32.0, -12.0], // Atlantic off Morocco

  // Middle East
  SAU: [22.0, 40.0], // Red Sea
  IRN: [25.0, 56.0], // Persian Gulf

  // South Asia
  IND: [12.0, 74.0], // Arabian Sea off India
  PAK: [24.0, 66.0], // Arabian Sea off Pakistan
  BGD: [18.0, 90.0], // Bay of Bengal

  // East Asia & Western Pacific
  CHN: [25.0, 122.0], // East China Sea
  JPN: [35.0, 142.0], // Western Pacific off Japan
  KOR: [34.0, 128.0], // Korea Strait

  // Southeast Asia & Indo-Pacific
  IDN: [-4.0, 120.0], // Indonesian seas
  PHL: [14.0, 124.0], // Philippine Sea
  VNM: [15.0, 112.0], // South China Sea
  THA: [9.0, 99.0], // Andaman Sea / Gulf of Thailand
  MYS: [4.5, 113.0], // South China Sea off Malaysia

  // Oceania
  AUS: [-30.0, 155.0], // Tasman / Coral Sea off eastern Australia
  NZL: [-43.0, 172.0] // off New Zealand
};

// Leaflet map instance (set later)
let map;

const statusEl = document.getElementById('status');
const statusTextEl = document.getElementById('status-text');
const statusDotEl = document.getElementById('status-dot');

// Smooth scroll from hero button to map section
const heroCta = document.querySelector('.hero-cta');
const mapSectionEl = document.getElementById('map-section');
const heroEl = document.querySelector('.hero');

if (heroCta && mapSectionEl) {
  heroCta.addEventListener('click', (event) => {
    event.preventDefault();
    mapSectionEl.scrollIntoView({ behavior: 'smooth' });
  });
}

// Fade-in effect for the fixed map background
if (mapSectionEl && 'IntersectionObserver' in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  observer.observe(mapSectionEl);
}

// Fade hero out as user scrolls down so the map becomes fully visible
// and enable map scroll-wheel zoom after the hero has been scrolled past.
if (heroEl) {
  let ticking = false;

  const onScroll = () => {
    const vh = window.innerHeight || document.documentElement.clientHeight;
    const y = window.scrollY || window.pageYOffset || 0;
    const progress = Math.min(Math.max(y / vh, 0), 1);
    const opacity = 1 - progress;
    heroEl.style.opacity = opacity.toString();
    heroEl.style.transform = `translateY(${progress * -16}px)`;

    // Toggle scroll-wheel zoom on the map: disabled on hero, enabled once
    // the user has scrolled at least one full screen height.
    if (map) {
      if (progress >= 1) {
        map.scrollWheelZoom.enable();
      } else {
        map.scrollWheelZoom.disable();
      }
    }

    ticking = false;
  };

  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(onScroll);
      ticking = true;
    }
  });
}

function setStatus(message, type = 'loading') {
  statusTextEl.textContent = message;
  if (type === 'ok') {
    statusDotEl.style.background = 'var(--accent)';
    statusDotEl.style.boxShadow = '0 0 10px rgba(0, 224, 255, 0.9)';
  } else if (type === 'error') {
    statusDotEl.style.background = 'var(--danger)';
    statusDotEl.style.boxShadow = '0 0 10px rgba(255, 75, 129, 0.9)';
  } else {
    statusDotEl.style.background = 'var(--accent)';
    statusDotEl.style.boxShadow = '0 0 6px rgba(0, 224, 255, 0.7)';
  }
}

// Initialize map
map = L.map('map', {
  worldCopyJump: true,
  zoomControl: false
}).setView([20, 0], 2.2);

// Disable scroll-wheel zoom initially so the page can scroll normally over the map
map.scrollWheelZoom.disable();

// If there is no hero (e.g. standalone map page), allow scroll zoom by default
if (!heroEl) {
  map.scrollWheelZoom.enable();
}

// Keep the map sized correctly if the window size or zoom changes
window.addEventListener('resize', () => {
  map.invalidateSize();
});

// Dark baselayer (Carto Voyager No Labels)
L.tileLayer(
  'https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_nolabels/{z}/{x}/{y}.png',
  {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
    maxZoom: 6,
    minZoom: 2,
    noWrap: true
  }
).addTo(map);

L.control
  .zoom({
    position: 'topright'
  })
  .addTo(map);

// Our World In Data: plastic waste emitted to the ocean per capita
const DATA_URL =
  'https://ourworldindata.org/grapher/per-capita-ocean-plastic-waste.csv?tab=table';

async function loadDataAndRender() {
  try {
    setStatus('Fetching plastic waste data from Our World In Data…');
    const response = await fetch(DATA_URL);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const csvText = await response.text();

    const rows = csvText.trim().split(/\r?\n/);
    const header = rows[0].split(',');
    const codeIdx = header.indexOf('Code');
    const yearIdx = header.indexOf('Year');
    const valueIdx = header.length - 1; // last column is value

    const latestByCode = {};

    for (let i = 1; i < rows.length; i++) {
      const cols = rows[i].split(',');
      if (cols.length < 4) continue;

      const code = cols[codeIdx];
      const year = parseInt(cols[yearIdx], 10);
      const value = parseFloat(cols[valueIdx]);

      if (!code || isNaN(year) || isNaN(value)) continue;
      if (!COUNTRY_CENTROIDS[code]) continue;

      const prev = latestByCode[code];
      if (!prev || year > prev.year) {
        latestByCode[code] = { year, value };
      }
    }

    const heatPoints = [];
    let maxValue = 0;

    Object.keys(latestByCode).forEach((code) => {
      const { value } = latestByCode[code];
      if (value > maxValue) maxValue = value;
    });

    if (!maxValue) {
      throw new Error('No valid plastic waste data found');
    }

    Object.keys(latestByCode).forEach((code) => {
      const { value } = latestByCode[code];
      const [lat, lng] = COUNTRY_CENTROIDS[code];
      const intensity = Math.min(1, Math.max(0.05, value / maxValue));
      heatPoints.push([lat, lng, intensity]);
    });

    L.heatLayer(heatPoints, {
      radius: 28,
      blur: 18,
      maxZoom: 6,
      minOpacity: 0.35,
      gradient: {
        0.0: '#1a2a3a',
        0.3: '#00e0ff',
        0.6: '#ffb347',
        1.0: '#ff4b81'
      }
    }).addTo(map);

    setStatus('Data loaded & visualization rendered', 'ok');
    setTimeout(() => {
      statusEl.style.opacity = '0.15';
    }, 4500);
  } catch (error) {
    console.error(error);
    setStatus('Could not load live data — showing basemap only', 'error');
  }
}

loadDataAndRender();
