// Major Ocean Garbage Patches - Based on scientific research
// These represent the 5 major oceanic gyres where plastic accumulates
const GARBAGE_PATCHES = {
  GREAT_PACIFIC: {
    name: "Great Pacific Garbage Patch",
    center: [32.0, -145.0], // Between Hawaii and California
    intensity: 1.0, // Highest concentration
    radius: 8, // Degrees for heatmap spread
    details: {
      size: "1.6 million km² (twice the size of Texas)",
      mass: "100,000+ tonnes of plastic debris",
      particles: "1.8+ trillion pieces of floating plastic",
      discovery: "Predicted by NOAA in 1988, confirmed by Charles Moore in 1997",
      formation: "North Pacific Subtropical Gyre concentrates debris from Asia and North America",
      composition: "46% fishing nets, rest includes bottles, bags, and microplastics",
      depth: "Extends 3 meters below surface, with microplastics found deeper",
      cleanup: "The Ocean Cleanup project actively removing debris since 2018",
      impact: "Affects 700+ marine species through ingestion and entanglement",
      sources: "Asia (80%), North America (20%) - primarily from rivers and coastal areas"
    },
    learnMore: {
      title: "Great Pacific Garbage Patch - Comprehensive Analysis",
      sections: [
        {
          title: "Scientific Research",
          content: "NCEI Accession 0211008 provides surface plastic debris data from SSV Robert C. Seamans expeditions in the North Pacific Gyre. Research shows the patch contains more plastic than previously estimated, with concentrations reaching 5-10 kg per km² in the densest areas. The debris field exhibits seasonal variations due to wind patterns and ocean currents."
        },
        {
          title: "Ocean Dynamics",
          content: "The North Pacific Subtropical Gyre creates a convergence zone where surface currents meet and slow down, allowing plastic debris to accumulate. The Kuroshio Current from Japan and the California Current from North America feed into this system, transporting debris from coastal areas across the Pacific."
        },
        {
          title: "Composition Analysis",
          content: "Detailed analysis reveals: 46% abandoned fishing gear (ghost nets), 20% plastic bottles and containers, 18% plastic bags and films, 10% microplastics (<5mm), 6% other debris. The majority of identifiable items originate from fishing industry activities rather than land-based sources."
        },
        {
          title: "Ecosystem Impact",
          content: "Over 700 marine species are affected by plastic pollution in this region. Sea turtles mistake plastic bags for jellyfish, seabirds feed plastic to their chicks, and fish ingest microplastics that enter the food chain at the base level, bioaccumulating in larger predators."
        },
        {
          title: "Cleanup Technology",
          content: "The Ocean Cleanup's System 03 uses a 2.5km long floating barrier to collect plastic while allowing marine life to pass underneath. As of 2024, they have removed over 200,000 kg of plastic from the patch. The collected plastic is recycled into consumer products to fund continued operations."
        },
        {
          title: "Data Sources",
          content: "Research data from NCEI (0211008), The Ocean Cleanup Foundation, NOAA Marine Debris Program, and international research collaborations. Satellite imagery from Sentinel-2 and aerial surveys provide ongoing monitoring of patch dynamics and cleanup effectiveness."
        }
      ]
    }
  },
  NORTH_ATLANTIC: {
    name: "North Atlantic Garbage Patch", 
    center: [35.0, -45.0], // North Atlantic Gyre
    intensity: 0.7,
    radius: 6,
    details: {
      size: "Estimated 200,000+ km² in the Sargasso Sea region",
      mass: "Approximately 3,000-5,000 tonnes of plastic debris",
      particles: "Hundreds of billions of plastic fragments",
      discovery: "First documented in the 1970s, extensively studied since 2010",
      formation: "North Atlantic Subtropical Gyre traps debris from Europe and eastern North America",
      composition: "Microplastics (94%), fishing gear, bottles, and packaging materials",
      depth: "Concentrated in upper 5 meters, with significant subsurface pollution",
      research: "NOAA NCEI Accession 0210008 - EN531 cruise data from 2013",
      impact: "Critical habitat for Sargassum seaweed and associated marine life",
      sources: "Europe (60%), North America (40%) - Gulf Stream transport system"
    },
    learnMore: {
      title: "North Atlantic Garbage Patch - Sargasso Sea Research",
      sections: [
        {
          title: "NCEI Research Data",
          content: "NCEI Accession 0211007 contains surface plastic debris data from SSV Corwith Cramer expeditions in the North Atlantic Subtropical Gyre. The research documents microplastic concentrations averaging 2-4 particles per m³, with higher densities near the Gulf Stream convergence zone."
        },
        {
          title: "Sargassum Ecosystem",
          content: "The Sargasso Sea's floating Sargassum seaweed creates a unique ecosystem that's being disrupted by plastic pollution. Microplastics become entangled in Sargassum mats, affecting the habitat for juvenile sea turtles, fish, and invertebrates that depend on this floating forest."
        },
        {
          title: "Gulf Stream Transport",
          content: "The Gulf Stream acts as a conveyor belt, transporting plastic debris from the US East Coast and Caribbean into the North Atlantic Gyre. Debris can travel from New York to the Sargasso Sea in just 2-3 months, where it becomes trapped in the gyre's circulation."
        },
        {
          title: "Microplastic Research",
          content: "Studies show 94% of plastic in this patch consists of microplastics smaller than 5mm. These particles are particularly dangerous as they're easily ingested by small marine organisms and enter the food web at the base level, bioaccumulating in larger predators."
        },
        {
          title: "Marine Life Impact",
          content: "The Sargasso Sea is a critical nursery habitat for endangered species including loggerhead and green sea turtles, American and European eels, and various seabirds. Plastic pollution threatens these species through ingestion, entanglement, and habitat degradation."
        },
        {
          title: "Monitoring Programs",
          content: "Ongoing research through NCEI accessions 0210008 and 0211007, Bermuda Institute of Ocean Sciences, and international collaborations. Sentinel-2 satellite data and MARIDA (Marine Debris Archive) provide continuous monitoring of debris distribution and density."
        }
      ]
    }
  },
  SOUTH_PACIFIC: {
    name: "South Pacific Garbage Patch",
    center: [-35.0, -105.0], // South Pacific Gyre
    intensity: 0.6,
    radius: 7,
    details: {
      size: "Estimated 1+ million km² across the South Pacific Gyre",
      mass: "Thousands of tonnes, less studied than northern patches",
      particles: "Billions of plastic fragments, high microplastic density",
      discovery: "Confirmed by 5 Gyres Institute expeditions in 2011-2012",
      formation: "South Pacific Subtropical Gyre collects debris from South America and Oceania",
      composition: "Predominantly microplastics, fishing debris, and consumer waste",
      depth: "Surface accumulation with deep-water microplastic distribution",
      research: "Limited studies due to remote location, ongoing monitoring needed",
      impact: "Affects Southern Ocean marine ecosystems and migratory species",
      sources: "South America (50%), Oceania (30%), Asia (20%) via ocean currents"
    },
    learnMore: {
      title: "South Pacific Garbage Patch - Remote Ocean Research",
      sections: [
        {
          title: " 5 Gyres Research",
          content: "The 5 Gyres Institute conducted groundbreaking expeditions in 2011-2012 that confirmed the existence of this remote garbage patch. Their research revealed microplastic concentrations comparable to the North Pacific, with unique characteristics due to the Southern Ocean's mixing patterns."
        },
        {
          title: "Southern Ocean Dynamics",
          content: "The South Pacific Subtropical Gyre operates differently from northern gyres due to the Antarctic Circumpolar Current influence. This creates a more dispersed but extensive accumulation zone that extends deeper into the water column than other patches."
        },
        {
          title: "Unique Ecosystem Impacts",
          content: "This patch affects unique Southern Hemisphere species including various penguin colonies, southern albatrosses, and Antarctic fur seals. The remote location means wildlife has had less exposure to plastics historically, making current impacts more severe."
        },
        {
          title: "Research Challenges",
          content: "The remote location and harsh weather conditions make this the least studied garbage patch. Most data comes from opportunistic sampling during research voyages, satellite observations, and modeling based on ocean current patterns."
        }
      ]
    }
  },
  SOUTH_ATLANTIC: {
    name: "South Atlantic Garbage Patch",
    center: [-35.0, -10.0], // South Atlantic Gyre
    intensity: 0.5,
    radius: 5,
    details: {
      size: "Smaller but significant accumulation zone, ~600,000 km²",
      mass: "Estimated 1,000-2,000 tonnes of floating plastic",
      particles: "Tens of billions of plastic pieces, growing annually",
      discovery: "Identified by 5 Gyres Institute in 2011, confirmed by multiple studies",
      formation: "South Atlantic Subtropical Gyre concentrates debris from Africa and South America",
      composition: "Mixed plastic types, significant fishing gear and packaging waste",
      depth: "Surface layer concentration with vertical mixing to 10+ meters",
      research: "Ongoing studies by Brazilian and South African research institutions",
      impact: "Affects Cape fur seals, penguins, and Atlantic marine food chains",
      sources: "Africa (45%), South America (35%), Europe (20%) via Atlantic currents"
    },
    learnMore: {
      title: "South Atlantic Garbage Patch - African Coast Research",
      sections: [
        {
          title: "🌍 African Coastal Impact",
          content: "This patch receives significant plastic input from African rivers and coastal areas. The Benguela Current system transports debris from the west African coast, while the Brazil Current brings waste from South American sources, creating a convergence zone off the Cape of Good Hope."
        },
        {
          title: "🦭 Marine Wildlife Effects",
          content: "Cape fur seals, African penguins, and various seabirds are particularly affected by this patch. The area is a critical feeding ground for these species, and plastic ingestion has been documented in stomach contents of stranded animals along the South African coast."
        },
        {
          title: "🔬 Research Collaboration",
          content: "Brazilian and South African research institutions collaborate on monitoring this patch. Studies focus on microplastic distribution, seasonal variations, and the role of the Agulhas Current in transporting debris between the Indian and Atlantic Oceans."
        },
        {
          title: "📈 Growing Concern",
          content: "Despite being smaller than other patches, this accumulation zone is growing rapidly due to increased plastic production in Africa and South America. The lack of comprehensive waste management infrastructure in source regions contributes to continued growth."
        }
      ]
    }
  },
  INDIAN_OCEAN: {
    name: "Indian Ocean Garbage Patch",
    center: [-35.0, 100.0], // Indian Ocean Gyre
    intensity: 0.6,
    radius: 6,
    details: {
      size: "Estimated 2+ million km², potentially largest by area",
      mass: "Significant accumulation, exact tonnage under study",
      particles: "Trillions of plastic fragments, high concentration of microplastics",
      discovery: "Confirmed by 5 Gyres Institute in 2010, ongoing research",
      formation: "Indian Ocean Subtropical Gyre collects debris from Asia, Africa, and Australia",
      composition: "Asian plastic waste (70%), microplastics, and marine debris",
      depth: "Extensive vertical distribution due to monsoon mixing",
      research: "Limited access, recent studies show alarming growth rates",
      impact: "Threatens Indian Ocean marine biodiversity hotspots",
      sources: "Asia (60%), Africa (25%), Australia (15%) - major river systems"
    },
    learnMore: {
      title: "Indian Ocean Garbage Patch - Asian Pollution Hub",
      sections: [
        {
          title: "🌏 Asian River Systems",
          content: "The Indian Ocean receives massive plastic inputs from Asian river systems, particularly the Ganges, Brahmaputra, Indus, and Mekong rivers. These waterways transport an estimated 60% of the patch's plastic content, making this the most river-influenced garbage patch globally."
        },
        {
          title: "🌊 Monsoon Mixing",
          content: "The Indian Ocean's unique monsoon system creates extensive vertical mixing, distributing microplastics throughout the water column more than other patches. This makes cleanup more challenging but also affects a broader range of marine life from surface to deep-water species."
        },
        {
          title: "🐠 Biodiversity Hotspots",
          content: "This patch threatens some of the world's most biodiverse marine ecosystems, including coral reefs around the Maldives, Seychelles, and Mauritius. The high concentration of microplastics affects coral polyps, reef fish, and the entire marine food web."
        },
        {
          title: "📊 Rapid Growth",
          content: "Recent studies show this patch is growing faster than any other, driven by rapid industrialization in Asia and inadequate waste management infrastructure. Satellite data indicates a 300% increase in plastic density over the past decade."
        },
        {
          title: "🔬 Research Gaps",
          content: "Limited research access due to political boundaries and remote locations means this patch is the least understood. Most data comes from MARIDA satellite observations and opportunistic sampling during commercial shipping routes."
        }
      ]
    }
  }
};

// Additional high-concentration areas based on ocean currents and coastal pollution
const SECONDARY_POLLUTION_ZONES = {
  // Major river outflows and coastal pollution hotspots
  YANGTZE_OUTFLOW: [31.0, 122.0], // East China Sea
  GANGES_OUTFLOW: [21.5, 89.0], // Bay of Bengal
  MEKONG_OUTFLOW: [10.5, 107.0], // South China Sea
  MEDITERRANEAN_EAST: [35.0, 30.0], // Eastern Mediterranean
  CARIBBEAN: [15.0, -70.0], // Caribbean Sea
  GULF_MEXICO: [25.0, -90.0], // Gulf of Mexico
  NORTH_SEA: [56.0, 3.0], // North Sea pollution
  JAVA_SEA: [-6.0, 110.0], // Indonesian archipelago
  CORAL_TRIANGLE: [0.0, 125.0], // Southeast Asian seas
  KUROSHIO_CURRENT: [35.0, 140.0] // Japan current system
};

// Major ocean currents that transport plastic debris - Complete Gyre Systems
const OCEAN_CURRENTS = {
  // North Pacific Gyre (Complete Circle)
  NORTH_PACIFIC_GYRE: {
    name: "North Pacific Subtropical Gyre",
    path: [
      // Kuroshio Current (Western Boundary)
      [20.0, 120.0], [25.0, 125.0], [30.0, 130.0], [35.0, 140.0], [40.0, 150.0], [42.0, 155.0],
      // North Pacific Current (Northern Boundary)
      [42.0, 160.0], [42.0, 170.0], [42.0, 180.0], [42.0, -170.0], [42.0, -160.0], [42.0, -150.0], [40.0, -140.0], [38.0, -130.0],
      // California Current (Eastern Boundary)
      [36.0, -125.0], [34.0, -122.0], [30.0, -120.0], [26.0, -118.0], [22.0, -115.0], [18.0, -112.0],
      // North Equatorial Current (Southern Boundary)
      [15.0, -110.0], [15.0, -120.0], [15.0, -130.0], [15.0, -140.0], [15.0, -150.0], [15.0, -160.0], [15.0, -170.0], [15.0, 180.0], [15.0, 170.0], [15.0, 160.0], [15.0, 150.0], [15.0, 140.0], [15.0, 130.0], [18.0, 125.0], [20.0, 120.0]
    ],
    strength: 0.8,
    direction: "clockwise circulation",
    plasticTransport: "Very High - forms Great Pacific Garbage Patch",
    dataSource: "NOAA Global Drifter Program, OSCAR Surface Current"
  },

  // North Atlantic Gyre (Complete Circle)
  NORTH_ATLANTIC_GYRE: {
    name: "North Atlantic Subtropical Gyre",
    path: [
      // Gulf Stream (Western Boundary)
      [25.0, -80.0], [30.0, -75.0], [35.0, -70.0], [40.0, -65.0], [45.0, -50.0], [50.0, -40.0],
      // North Atlantic Drift (Northern Boundary)
      [52.0, -35.0], [54.0, -25.0], [56.0, -15.0], [58.0, -5.0], [58.0, 5.0], [56.0, 15.0],
      // Canary Current (Eastern Boundary)
      [50.0, 20.0], [45.0, 15.0], [40.0, 10.0], [35.0, 5.0], [30.0, 0.0], [25.0, -5.0], [20.0, -10.0], [15.0, -15.0],
      // North Equatorial Current (Southern Boundary)
      [12.0, -20.0], [10.0, -30.0], [10.0, -40.0], [12.0, -50.0], [15.0, -60.0], [20.0, -70.0], [25.0, -80.0]
    ],
    strength: 0.9,
    direction: "clockwise circulation",
    plasticTransport: "Very High - forms North Atlantic Garbage Patch",
    dataSource: "NOAA Global Drifter Program, Ireland Surface Current"
  },

  // South Pacific Gyre (Complete Circle)
  SOUTH_PACIFIC_GYRE: {
    name: "South Pacific Subtropical Gyre",
    path: [
      // East Australian Current (Western Boundary)
      [-10.0, 155.0], [-15.0, 153.0], [-20.0, 152.0], [-25.0, 151.0], [-30.0, 150.0], [-35.0, 148.0], [-40.0, 145.0], [-45.0, 140.0],
      // Antarctic Circumpolar Current influence (Southern Boundary)
      [-45.0, 130.0], [-45.0, 120.0], [-45.0, 110.0], [-45.0, 100.0], [-45.0, 90.0], [-45.0, 80.0], [-45.0, 70.0], [-45.0, 60.0], [-45.0, 50.0], [-45.0, 40.0], [-45.0, 30.0], [-45.0, 20.0], [-45.0, 10.0], [-45.0, 0.0], [-45.0, -10.0], [-45.0, -20.0], [-45.0, -30.0], [-45.0, -40.0], [-45.0, -50.0], [-45.0, -60.0], [-45.0, -70.0], [-45.0, -80.0], [-45.0, -90.0], [-40.0, -100.0],
      // Peru Current (Eastern Boundary)
      [-35.0, -105.0], [-30.0, -110.0], [-25.0, -112.0], [-20.0, -115.0], [-15.0, -118.0], [-10.0, -120.0], [-5.0, -125.0],
      // South Equatorial Current (Northern Boundary)
      [-8.0, -130.0], [-8.0, -140.0], [-8.0, -150.0], [-8.0, -160.0], [-8.0, -170.0], [-8.0, 180.0], [-8.0, 170.0], [-8.0, 160.0], [-10.0, 155.0]
    ],
    strength: 0.7,
    direction: "counterclockwise circulation",
    plasticTransport: "High - forms South Pacific Garbage Patch",
    dataSource: "OSCAR Surface Current, NOAA GDP AWS"
  },

  // South Atlantic Gyre (Complete Circle)
  SOUTH_ATLANTIC_GYRE: {
    name: "South Atlantic Subtropical Gyre",
    path: [
      // Brazil Current (Western Boundary)
      [-5.0, -35.0], [-10.0, -37.0], [-15.0, -39.0], [-20.0, -40.0], [-25.0, -42.0], [-30.0, -45.0], [-35.0, -48.0], [-40.0, -50.0],
      // South Atlantic Current (Southern Boundary)
      [-42.0, -45.0], [-42.0, -35.0], [-42.0, -25.0], [-42.0, -15.0], [-42.0, -5.0], [-42.0, 5.0], [-40.0, 15.0],
      // Benguela Current (Eastern Boundary)
      [-35.0, 18.0], [-30.0, 16.0], [-25.0, 14.0], [-20.0, 12.0], [-15.0, 10.0], [-10.0, 8.0], [-5.0, 5.0],
      // South Equatorial Current (Northern Boundary)
      [-8.0, 0.0], [-8.0, -10.0], [-8.0, -20.0], [-8.0, -30.0], [-5.0, -35.0]
    ],
    strength: 0.6,
    direction: "counterclockwise circulation",
    plasticTransport: "Moderate - forms South Atlantic Garbage Patch",
    dataSource: "OSCAR Surface Current, NOAA Drifter Data"
  },

  // Indian Ocean Gyre (Complete Circle)
  INDIAN_OCEAN_GYRE: {
    name: "Indian Ocean Subtropical Gyre",
    path: [
      // Agulhas Current (Western Boundary)
      [-10.0, 50.0], [-15.0, 48.0], [-20.0, 45.0], [-25.0, 42.0], [-30.0, 38.0], [-35.0, 35.0], [-40.0, 30.0], [-42.0, 25.0],
      // South Indian Current (Southern Boundary)
      [-42.0, 35.0], [-42.0, 45.0], [-42.0, 55.0], [-42.0, 65.0], [-42.0, 75.0], [-42.0, 85.0], [-42.0, 95.0], [-42.0, 105.0], [-40.0, 115.0],
      // West Australian Current (Eastern Boundary)
      [-35.0, 118.0], [-30.0, 116.0], [-25.0, 114.0], [-20.0, 112.0], [-15.0, 110.0], [-10.0, 108.0], [-5.0, 105.0],
      // South Equatorial Current (Northern Boundary)
      [-8.0, 100.0], [-8.0, 90.0], [-8.0, 80.0], [-8.0, 70.0], [-8.0, 60.0], [-10.0, 50.0]
    ],
    strength: 0.7,
    direction: "counterclockwise circulation",
    plasticTransport: "High - forms Indian Ocean Garbage Patch",
    dataSource: "OSCAR L4 Ocean Current, NOAA GDP AWS"
  },

  // Antarctic Circumpolar Current (Complete Circle)
  ANTARCTIC_CIRCUMPOLAR: {
    name: "Antarctic Circumpolar Current",
    path: [
      [-60.0, -180.0], [-60.0, -150.0], [-60.0, -120.0], [-60.0, -90.0], [-60.0, -60.0], [-60.0, -30.0], [-60.0, 0.0], [-60.0, 30.0], [-60.0, 60.0], [-60.0, 90.0], [-60.0, 120.0], [-60.0, 150.0], [-60.0, 180.0]
    ],
    strength: 1.0,
    direction: "eastward circulation",
    plasticTransport: "Moderate - connects all southern ocean basins",
    dataSource: "NOAA Global Drifter Program, OSCAR"
  },

  // Arctic Gyre Systems
  BEAUFORT_GYRE: {
    name: "Beaufort Gyre",
    path: [
      [75.0, -150.0], [78.0, -130.0], [80.0, -110.0], [82.0, -90.0], [82.0, -70.0], [80.0, -50.0], [78.0, -30.0], [75.0, -10.0], [72.0, 10.0], [70.0, 30.0], [68.0, 50.0], [70.0, 70.0], [72.0, 90.0], [75.0, 110.0], [78.0, 130.0], [80.0, 150.0], [78.0, 170.0], [75.0, -170.0], [75.0, -150.0]
    ],
    strength: 0.5,
    direction: "clockwise circulation",
    plasticTransport: "Low - Arctic plastic accumulation",
    dataSource: "NOAA Global Drifter Program"
  }
};

// Land-based plastic waste infrastructure and pollution sources
const LAND_WASTE_FACILITIES = {
  // Major waste treatment centers and pollution sources
  SHANGHAI_TREATMENT: {
    name: "Shanghai Waste Treatment Complex",
    location: [31.2304, 121.4737],
    type: "treatment_center",
    details: {
      capacity: "15,000 tonnes/day municipal waste processing",
      technology: "Incineration with energy recovery, recycling facilities",
      leakage: "Estimated 2-3% plastic leakage to Yangtze River system",
      impact: "Serves 24+ million people, major source of East China Sea pollution",
      status: "Operational since 2019, expansion planned for 2025",
      dataSource: "OECD Plastic Leakage Database, Figshare River Emissions"
    }
  },
  JAKARTA_LANDFILL: {
    name: "Bantar Gebang Landfill",
    location: [-6.3373, 107.0048],
    type: "landfill",
    details: {
      capacity: "World's largest landfill - 110 hectares, 40+ million tonnes",
      technology: "Open dumping, limited waste separation",
      leakage: "High plastic leakage during monsoons to Java Sea",
      impact: "Serves Jakarta metro (30+ million people), major marine pollution source",
      status: "Critical overflow conditions, urgent modernization needed",
      dataSource: "Dryad Macroplastic Inventory, Zenodo MPW Dataset"
    }
  },
  MANILA_RIVER_OUTFALL: {
    name: "Pasig River Waste Outfall",
    location: [14.5995, 120.9842],
    type: "river_outfall",
    details: {
      capacity: "Receives waste from 13+ million people in Metro Manila",
      technology: "Limited treatment, direct river discharge",
      leakage: "One of world's top 10 plastic-polluting rivers",
      impact: "Transports 63,700+ tonnes plastic annually to Philippine Sea",
      status: "Rehabilitation efforts ongoing, slow progress",
      dataSource: "Figshare River Emissions, Our World in Data Rivers/Lakes"
    }
  },
  DHAKA_TREATMENT: {
    name: "Dhaka Waste Management System",
    location: [23.8103, 90.4125],
    type: "treatment_center",
    details: {
      capacity: "5,000 tonnes/day for 22+ million people (severely inadequate)",
      technology: "Basic sorting, limited recycling, open burning",
      leakage: "Massive plastic leakage to Buriganga River → Bay of Bengal",
      impact: "Major contributor to Indian Ocean Garbage Patch",
      status: "Infrastructure development projects underway",
      dataSource: "OECD Plastic Leakage, Zenodo MPW Rivers"
    }
  },
  LAGOS_COASTAL: {
    name: "Lagos Coastal Waste Zone",
    location: [6.5244, 3.3792],
    type: "coastal_pollution",
    details: {
      capacity: "Informal waste management for 15+ million people",
      technology: "Beach dumping, informal recycling, burning",
      leakage: "Direct coastal plastic pollution to Gulf of Guinea",
      impact: "Contributes to South Atlantic Garbage Patch formation",
      status: "Government initiatives for formal waste management",
      dataSource: "Dryad Macroplastic Inventory, OECD Data"
    }
  },
  SAO_PAULO_RECYCLING: {
    name: "São Paulo Recycling Complex",
    location: [-23.5505, -46.6333],
    type: "recycling_center",
    details: {
      capacity: "3,000 tonnes/day recycling for 22+ million people",
      technology: "Advanced sorting, plastic-to-fuel conversion",
      leakage: "Low leakage rate, model for South America",
      impact: "Reduces plastic flow to Tietê River → Atlantic Ocean",
      status: "Expansion planned, technology transfer to other cities",
      dataSource: "OECD Plastic Leakage, Our World in Data"
    }
  },
  MUMBAI_CREEK: {
    name: "Mumbai Creek Pollution Source",
    location: [19.0760, 72.8777],
    type: "river_outfall",
    details: {
      capacity: "Receives waste from 20+ million people in Mumbai metro",
      technology: "Overwhelmed sewage treatment, plastic overflow",
      leakage: "Major plastic contributor to Arabian Sea",
      impact: "Feeds into Indian Ocean Garbage Patch via monsoon currents",
      status: "Swachh Bharat mission improvements ongoing",
      dataSource: "Figshare River Emissions, Zenodo MPW Dataset"
    }
  },
  CAIRO_NILE: {
    name: "Cairo Nile Waste System",
    location: [30.0444, 31.2357],
    type: "river_outfall",
    details: {
      capacity: "Serves Greater Cairo (20+ million people)",
      technology: "Basic treatment, significant plastic overflow to Nile",
      leakage: "Plastic transport via Nile to Mediterranean Sea",
      impact: "Contributes to Eastern Mediterranean pollution hotspot",
      status: "New treatment plants under construction",
      dataSource: "OECD Plastic Leakage, Our World in Data Rivers/Lakes"
    }
  },
  HAMBURG_FACILITY: {
    name: "Hamburg Waste-to-Energy Plant",
    location: [53.5511, 9.9937],
    type: "treatment_center",
    details: {
      capacity: "320,000 tonnes/year advanced waste processing",
      technology: "State-of-the-art incineration, 99%+ capture rate",
      leakage: "Minimal plastic leakage, model European facility",
      impact: "Prevents plastic pollution to North Sea",
      status: "Operational excellence, technology export leader",
      dataSource: "OECD Plastic Leakage Database"
    }
  },
  TOKYO_BAY_SYSTEM: {
    name: "Tokyo Bay Waste Management",
    location: [35.6762, 139.6503],
    type: "treatment_center",
    details: {
      capacity: "Advanced processing for 37+ million people (Greater Tokyo)",
      technology: "Integrated recycling, incineration, zero-waste-to-landfill",
      leakage: "World's lowest per-capita plastic leakage rate",
      impact: "Minimal contribution to North Pacific pollution",
      status: "Continuous improvement, disaster-resilient systems",
      dataSource: "OECD Plastic Leakage, Figshare River Emissions"
    }
  }
};

// Leaflet map instance (set later)
let map;

// Layer management
let currentLayer = 'heatmap';
let heatmapLayer = null;
let facilitiesMarkers = [];
let currentMarkers = [];
let currentPolylines = [];

const statusEl = document.getElementById('status');
const statusTextEl = document.getElementById('status-text');
const statusDotEl = document.getElementById('status-dot');

// Multiple data sources for comprehensive ocean plastic visualization
const DATA_SOURCES = {
  // Our World in Data - Accumulated plastic waste in oceans
  ACCUMULATED_WASTE: 'https://ourworldindata.org/grapher/plastic-waste-accumulated-in-oceans.csv?tab=table',
  // Our World in Data - Per capita ocean plastic waste
  PER_CAPITA_WASTE: 'https://ourworldindata.org/grapher/per-capita-ocean-plastic-waste.csv?tab=table',
  // KAPSARC - Share of global plastic waste by region (2019)
  REGIONAL_SHARE: 'https://datasource.kapsarc.org/api/records/1.0/search/?dataset=share-of-global-plastic-waste-emitted-to-the-ocean-2019&format=json&rows=1000',
  // NCEI Surface plastic debris databases
  NORTH_PACIFIC_DEBRIS: 'https://www.ncei.noaa.gov/archive/accession/0211008',
  NORTH_ATLANTIC_DEBRIS: 'https://www.ncei.noaa.gov/archive/accession/0211007',
  // GitHub Marine Debris datasets
  FLOATING_DEBRIS_GITHUB: 'https://github.com/miguelmendesduarte/Floating-Marine-Debris-Data',
  // Zenodo Marine Debris Archives
  MARIDA_ZENODO: 'https://zenodo.org/records/5151941',
  MADOS_ZENODO: 'https://doi.org/10.5281/zenodo.10664073',
  // Land-based plastic waste sources
  OECD_PLASTIC_LEAKAGE: 'https://data-explorer.oecd.org/vis?df%5Bag%5D=OECD&df%5Bds%5D=DisseminateArchiveDMZ&df%5Bid%5D=DF_PLASTIC_LEAKAGE_5&dq=.ACCUMULATED_STOCK_IN_OCEANS&lo=5&lom=LASTNPERIODS&tenant=archive&to%5BTIME_PERIOD%5D=false&vw=tb',
  OWID_RIVERS_LAKES: 'https://ourworldindata.org/grapher/plastic-waste-accumulated-rivers-lakes.csv',
  DRYAD_MACROPLASTIC: 'https://datadryad.org/dataset/doi%3A10.5061/dryad.8cz8w9gxb',
  FIGSHARE_RIVER_EMISSIONS: 'https://figshare.com/articles/dataset/River_plastic_emissions_to_the_world_s_oceans/4725541',
  ZENODO_MPW_RIVERS: 'https://doi.org/10.5281/zenodo.6894684',
  // Ocean current databases for plastic transport modeling
  NOAA_GLOBAL_DRIFTER: 'https://doi.org/10.25921/x46c-3620',
  NOAA_GDP_AWS: 'https://registry.opendata.aws/noaa-oar-hourly-gdp/',
  IRELAND_SURFACE_CURRENT: 'https://data.gov.ie/dataset/north-east-atlantic-real-time-total-surface-current',
  OSCAR_SURFACE_CURRENT: 'https://podaac.jpl.nasa.gov/dataset/OSCAR_L4_OC_third-deg'
};

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

// High-quality dark ocean-themed baselayer
L.tileLayer(
  'https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}',
  {
    attribution:
      '&copy; <a href="https://www.esri.com/">Esri</a>, HERE, Garmin, FAO, NOAA, USGS',
    maxZoom: 8,
    minZoom: 2,
    noWrap: true
  }
).addTo(map);

L.control
  .zoom({
    position: 'topright'
  })
  .addTo(map);

// Add zoom event listener to update label visibility
map.on('zoomend', updateLabelVisibility);

// Enhanced data loading with multiple real-world sources
async function loadRealWorldData() {
  const datasets = {};
  
  try {
    setStatus('Loading real-world ocean plastic data from multiple sources…');
    
    // Load Our World in Data - Accumulated waste
    try {
      const accumulatedResponse = await fetch(DATA_SOURCES.ACCUMULATED_WASTE);
      if (accumulatedResponse.ok) {
        datasets.accumulated = await accumulatedResponse.text();
        setStatus('Loaded accumulated waste data…');
      }
    } catch (e) {
      console.warn('Could not load accumulated waste data:', e);
    }
    
    // Load Our World in Data - Per capita waste
    try {
      const perCapitaResponse = await fetch(DATA_SOURCES.PER_CAPITA_WASTE);
      if (perCapitaResponse.ok) {
        datasets.perCapita = await perCapitaResponse.text();
        setStatus('Loaded per capita waste data…');
      }
    } catch (e) {
      console.warn('Could not load per capita waste data:', e);
    }
    
    // Load KAPSARC regional data
    try {
      const regionalResponse = await fetch(DATA_SOURCES.REGIONAL_SHARE);
      if (regionalResponse.ok) {
        datasets.regional = await regionalResponse.json();
        setStatus('Loaded regional share data…');
      }
    } catch (e) {
      console.warn('Could not load regional share data:', e);
    }
    
    return datasets;
  } catch (error) {
    console.error('Error loading real-world data:', error);
    return {};
  }
}

// Process CSV data into usable format
function processCSVData(csvText, valueColumn = -1) {
  if (!csvText) return {};
  
  const rows = csvText.trim().split(/\r?\n/);
  const header = rows[0].split(',');
  const codeIdx = header.indexOf('Code');
  const yearIdx = header.indexOf('Year');
  const valueIdx = valueColumn === -1 ? header.length - 1 : valueColumn;
  
  const latestByCode = {};
  
  for (let i = 1; i < rows.length; i++) {
    const cols = rows[i].split(',');
    if (cols.length < 3) continue;
    
    const code = cols[codeIdx];
    const year = parseInt(cols[yearIdx], 10);
    const value = parseFloat(cols[valueIdx]);
    
    if (!code || isNaN(year) || isNaN(value)) continue;
    
    const prev = latestByCode[code];
    if (!prev || year > prev.year) {
      latestByCode[code] = { year, value, code };
    }
  }
  
  return latestByCode;
}

// Enhanced mapping with country centroids for better ocean representation
const ENHANCED_COUNTRY_CENTROIDS = {
  // Major plastic polluters with ocean-focused coordinates
  CHN: [25.0, 122.0], // East China Sea
  IDN: [-4.0, 120.0], // Indonesian seas
  PHL: [14.0, 124.0], // Philippine Sea
  VNM: [15.0, 112.0], // South China Sea
  LKA: [7.0, 81.0], // Indian Ocean off Sri Lanka
  THA: [9.0, 99.0], // Andaman Sea
  EGY: [31.0, 30.0], // Eastern Mediterranean
  MYS: [4.5, 113.0], // South China Sea
  BGD: [18.0, 90.0], // Bay of Bengal
  BRA: [-10.0, -30.0], // South Atlantic
  USA: [30.0, -75.0], // Atlantic Coast
  IND: [12.0, 74.0], // Arabian Sea
  JPN: [35.0, 142.0], // Western Pacific
  GBR: [52.0, -10.0], // North Atlantic
  TUR: [41.0, 30.0], // Black Sea/Mediterranean
  ITA: [40.0, 14.0], // Mediterranean
  ESP: [38.0, -7.0], // Atlantic
  KOR: [34.0, 128.0], // Korea Strait
  FRA: [46.0, -5.0], // Bay of Biscay
  DEU: [55.0, 6.0], // North Sea
  NLD: [54.0, 4.0], // North Sea
  NOR: [65.0, 5.0], // Norwegian Sea
  RUS: [70.0, 150.0], // Arctic/Pacific
  CAN: [45.0, -55.0], // North Atlantic
  AUS: [-30.0, 155.0], // Tasman Sea
  NZL: [-43.0, 172.0], // Southern Ocean
  ZAF: [-35.0, 20.0], // South Atlantic
  ARG: [-45.0, -60.0], // South Atlantic
  CHL: [-33.0, -75.0], // Pacific
  PER: [-12.0, -80.0], // Pacific
  MEX: [21.0, -96.0], // Gulf of Mexico
  NGA: [4.0, 5.0], // Gulf of Guinea
  MAR: [32.0, -12.0], // Atlantic
  DZA: [35.0, 3.0], // Mediterranean
  PAK: [24.0, 66.0], // Arabian Sea
  IRN: [25.0, 56.0], // Persian Gulf
  SAU: [22.0, 40.0] // Red Sea
};

// Generate enhanced heatmap combining real data with garbage patches
function generateEnhancedHeatmap(realWorldData) {
  const heatPoints = [];
  
  // Add garbage patches (scientific locations)
  Object.values(GARBAGE_PATCHES).forEach(patch => {
    const [centerLat, centerLng] = patch.center;
    const { intensity, radius } = patch;
    
    // Dense center
    for (let i = 0; i < 20; i++) {
      const angle = (i / 20) * 2 * Math.PI;
      const distance = Math.random() * 0.8;
      const lat = centerLat + distance * Math.cos(angle);
      const lng = centerLng + distance * Math.sin(angle);
      heatPoints.push([lat, lng, intensity]);
    }
    
    // Medium ring
    for (let i = 0; i < 30; i++) {
      const angle = Math.random() * 2 * Math.PI;
      const distance = 0.8 + Math.random() * 2.5;
      const lat = centerLat + distance * Math.cos(angle);
      const lng = centerLng + distance * Math.sin(angle);
      heatPoints.push([lat, lng, intensity * 0.6]);
    }
    
    // Outer dispersed area
    for (let i = 0; i < 40; i++) {
      const angle = Math.random() * 2 * Math.PI;
      const distance = 2.5 + Math.random() * (radius - 2.5);
      const lat = centerLat + distance * Math.cos(angle);
      const lng = centerLng + distance * Math.sin(angle);
      const falloffIntensity = intensity * (0.2 + 0.3 * Math.random()) * (1 - distance / radius);
      heatPoints.push([lat, lng, Math.max(0.05, falloffIntensity)]);
    }
  });
  
  // Add real-world data points
  if (realWorldData.accumulated) {
    const accumulatedData = processCSVData(realWorldData.accumulated);
    let maxAccumulated = 0;
    
    Object.values(accumulatedData).forEach(item => {
      if (item.value > maxAccumulated) maxAccumulated = item.value;
    });
    
    Object.values(accumulatedData).forEach(item => {
      const coords = ENHANCED_COUNTRY_CENTROIDS[item.code];
      if (coords && item.value > 0) {
        const [lat, lng] = coords;
        const intensity = Math.min(0.8, Math.max(0.1, item.value / maxAccumulated));
        
        // Add multiple points for better visualization
        for (let i = 0; i < 5; i++) {
          const offsetLat = lat + (Math.random() - 0.5) * 2;
          const offsetLng = lng + (Math.random() - 0.5) * 3;
          heatPoints.push([offsetLat, offsetLng, intensity * 0.7]);
        }
      }
    });
  }
  
  if (realWorldData.perCapita) {
    const perCapitaData = processCSVData(realWorldData.perCapita);
    let maxPerCapita = 0;
    
    Object.values(perCapitaData).forEach(item => {
      if (item.value > maxPerCapita) maxPerCapita = item.value;
    });
    
    Object.values(perCapitaData).forEach(item => {
      const coords = ENHANCED_COUNTRY_CENTROIDS[item.code];
      if (coords && item.value > 0) {
        const [lat, lng] = coords;
        const intensity = Math.min(0.6, Math.max(0.05, item.value / maxPerCapita));
        
        // Add coastal pollution points
        for (let i = 0; i < 3; i++) {
          const offsetLat = lat + (Math.random() - 0.5) * 1.5;
          const offsetLng = lng + (Math.random() - 0.5) * 2;
          heatPoints.push([offsetLat, offsetLng, intensity * 0.5]);
        }
      }
    });
  }
  
  // Add secondary pollution zones
  Object.values(SECONDARY_POLLUTION_ZONES).forEach(([lat, lng]) => {
    for (let i = 0; i < 6; i++) {
      const angle = Math.random() * 2 * Math.PI;
      const distance = Math.random() * 1.2;
      const pointLat = lat + distance * Math.cos(angle);
      const pointLng = lng + distance * Math.sin(angle);
      const intensity = 0.2 + Math.random() * 0.3;
      heatPoints.push([pointLat, pointLng, intensity]);
    }
  });
  
  // Add ocean current connections
  const currentPaths = [
    { start: [40, -160], end: [35, -140], points: 25 },
    { start: [35, -75], end: [45, -40], points: 20 },
    { start: [25, 125], end: [40, 150], points: 15 },
    { start: [-45, -120], end: [-40, -80], points: 22 },
    { start: [-45, 20], end: [-40, 60], points: 18 },
    { start: [-45, 80], end: [-40, 120], points: 18 }
  ];
  
  currentPaths.forEach(path => {
    const [startLat, startLng] = path.start;
    const [endLat, endLng] = path.end;
    
    for (let i = 0; i < path.points; i++) {
      const progress = i / path.points;
      const lat = startLat + (endLat - startLat) * progress + (Math.random() - 0.5) * 2;
      const lng = startLng + (endLng - startLng) * progress + (Math.random() - 0.5) * 4;
      const intensity = 0.1 + Math.random() * 0.2;
      heatPoints.push([lat, lng, intensity]);
    }
  });
  
  return heatPoints;
}

async function loadDataAndRender() {
  try {
    setStatus('Loading real-world ocean plastic databases…');
    
    // Load real-world data from multiple sources
    const realWorldData = await loadRealWorldData();
    
    setStatus('Processing scientific data and generating visualization…');
    
    // Generate enhanced heatmap with real data
    const heatPoints = generateEnhancedHeatmap(realWorldData);
    
    // Create enhanced heatmap layer with click events
    const heat = L.heatLayer(heatPoints, {
      radius: 28,
      blur: 22,
      maxZoom: 6,
      max: 1.0,
      minOpacity: 0.15,
      gradient: {
        0.0: 'rgba(0, 50, 100, 0.1)',     // Deep blue (low concentration)
        0.1: 'rgba(0, 100, 150, 0.3)',    // Blue
        0.2: 'rgba(0, 150, 200, 0.4)',    // Light blue
        0.3: 'rgba(50, 200, 200, 0.5)',   // Cyan
        0.4: 'rgba(100, 220, 150, 0.6)',  // Light green
        0.5: 'rgba(150, 230, 100, 0.7)',  // Green-yellow
        0.6: 'rgba(200, 200, 50, 0.8)',   // Yellow
        0.7: 'rgba(230, 150, 30, 0.85)',  // Orange
        0.8: 'rgba(250, 100, 50, 0.9)',   // Red-orange
        0.9: 'rgba(255, 50, 50, 0.95)',   // Red
        1.0: 'rgba(200, 0, 50, 1.0)'      // Dark red (highest concentration)
      }
    }).addTo(map);
    
    // Add click event to map for heatmap information
    map.on('click', function(e) {
      const lat = e.latlng.lat;
      const lng = e.latlng.lng;
      
      // Find nearby heat points to determine pollution level
      let nearestDistance = Infinity;
      let nearestPoint = null;
      let pollutionLevel = 'Low';
      
      heatPoints.forEach(point => {
        const distance = Math.sqrt(
          Math.pow(lat - point[0], 2) + Math.pow(lng - point[1], 2)
        );
        if (distance < nearestDistance) {
          nearestDistance = distance;
          nearestPoint = point;
        }
      });
      
      if (nearestPoint && nearestDistance < 2) {
        const intensity = nearestPoint[2];
        if (intensity > 0.7) pollutionLevel = 'Very High';
        else if (intensity > 0.5) pollutionLevel = 'High';
        else if (intensity > 0.3) pollutionLevel = 'Medium';
        else if (intensity > 0.1) pollutionLevel = 'Low-Medium';
        
        // Determine region and pollution sources
        const region = getOceanRegion(lat, lng);
        const sources = getPollutionSources(lat, lng);
        const impacts = getEnvironmentalImpacts(region, intensity);
        
        // Create popup with detailed information
        L.popup({
          maxWidth: 350,
          className: 'heatmap-info-popup'
        })
        .setLatLng(e.latlng)
        .setContent(`
          <div class="heatmap-popup">
            <h3>🌊 Ocean Pollution Data</h3>
            <div class="pollution-details">
              <p><strong>📍 Location:</strong> ${lat.toFixed(2)}°${lat > 0 ? 'N' : 'S'}, ${Math.abs(lng).toFixed(2)}°${lng > 0 ? 'E' : 'W'}</p>
              <p><strong>🌊 Region:</strong> ${region}</p>
              <p><strong>📊 Pollution Level:</strong> <span class="level-${pollutionLevel.toLowerCase().replace(/[^a-z]/g, '')}">${pollutionLevel}</span></p>
              <p><strong>🔢 Intensity:</strong> ${(intensity * 100).toFixed(1)}%</p>
              <p><strong>🏭 Primary Sources:</strong> ${sources}</p>
              <p><strong>🐠 Environmental Impact:</strong> ${impacts}</p>
              <p><strong>📚 Data Sources:</strong> NOAA NCEI, Our World in Data, KAPSARC</p>
              <div class="data-note">
                <small>💡 Click on labeled garbage patches for detailed information about major accumulation zones.</small>
              </div>
            </div>
          </div>
        `)
        .openOn(map);
      }
    });

    // Store heatmap layer for later management
    heatmapLayer = heat;

    // Add garbage patch labels (always visible)
    addGarbagePatchLabels();

    // Initialize layer management
    initializeLayerControls();

    // Show only heatmap initially
    showLayer('heatmap');

    // Show data sources used
    const sourcesUsed = [];
    if (realWorldData.accumulated) sourcesUsed.push('OWID Accumulated Waste');
    if (realWorldData.perCapita) sourcesUsed.push('OWID Per Capita');
    if (realWorldData.regional) sourcesUsed.push('KAPSARC Regional');
    
    const statusMessage = sourcesUsed.length > 0 
      ? `Enhanced with real data: ${sourcesUsed.join(', ')}`
      : 'Visualization loaded with scientific garbage patch locations';
    
    setStatus(statusMessage, 'ok');
    setTimeout(() => {
      statusEl.style.opacity = '0.15';
    }, 6000);
    
  } catch (error) {
    console.error(error);
    setStatus('Could not load all data sources — showing enhanced visualization', 'error');
  }
}

// Store label markers for zoom control
let labelMarkers = [];

// Add garbage patch labels to the map
function addGarbagePatchLabels() {
  Object.values(GARBAGE_PATCHES).forEach(patch => {
    const [lat, lng] = patch.center;
    
    // Create custom marker for garbage patches - smaller and more subtle
    const marker = L.marker([lat, lng], {
      icon: L.divIcon({
        className: 'garbage-patch-label',
        html: `
          <div class="patch-marker">
            <div class="patch-name">${patch.name}</div>
          </div>
        `,
        iconSize: [120, 20],
        iconAnchor: [60, 10]
      })
    });
    
    // Add detailed popup with specific information and Learn More button
    marker.bindPopup(`
      <div class="patch-popup">
        <h3>${patch.name}</h3>
        <div class="patch-details">
          <p><strong>📍 Location:</strong> ${lat.toFixed(1)}°${lat > 0 ? 'N' : 'S'}, ${Math.abs(lng).toFixed(1)}°${lng > 0 ? 'E' : 'W'}</p>
          <p><strong>📏 Size:</strong> ${patch.details.size}</p>
          <p><strong>⚖️ Mass:</strong> ${patch.details.mass}</p>
          <p><strong>🔬 Particles:</strong> ${patch.details.particles}</p>
          <p><strong>📅 Discovery:</strong> ${patch.details.discovery}</p>
          <p><strong>🌊 Formation:</strong> ${patch.details.formation}</p>
          <p><strong>🧪 Composition:</strong> ${patch.details.composition}</p>
          <p><strong>📊 Sources:</strong> ${patch.details.sources}</p>
          <p><strong>🐠 Impact:</strong> ${patch.details.impact}</p>
          ${patch.details.research ? `<p><strong>🔬 Research:</strong> ${patch.details.research}</p>` : ''}
          ${patch.details.cleanup ? `<p><strong>🧹 Cleanup:</strong> ${patch.details.cleanup}</p>` : ''}
          ${patch.learnMore ? `<div class="learn-more-container"><button class="learn-more-btn" onclick="openLearnMoreModal('${Object.keys(GARBAGE_PATCHES).find(key => GARBAGE_PATCHES[key].name === patch.name)}')">📚 Learn More</button></div>` : ''}
        </div>
      </div>
    `, {
      maxWidth: 400,
      className: 'detailed-patch-popup'
    });
    
    // Store marker for zoom control
    labelMarkers.push(marker);
  });
  
  // Update label visibility based on zoom level
  updateLabelVisibility();
}

// Show/hide labels based on zoom level
function updateLabelVisibility() {
  const currentZoom = map.getZoom();
  const minZoomForLabels = 3; // Show labels when zoomed in to level 3 or higher
  
  labelMarkers.forEach(marker => {
    if (currentZoom >= minZoomForLabels) {
      if (!map.hasLayer(marker)) {
        map.addLayer(marker);
      }
    } else {
      if (map.hasLayer(marker)) {
        map.removeLayer(marker);
      }
    }
  });
}

// Helper functions for heatmap click information
function getOceanRegion(lat, lng) {
  if (lat > 30 && lng > -180 && lng < -120) return 'North Pacific Ocean';
  if (lat > 30 && lng > -80 && lng < 0) return 'North Atlantic Ocean';
  if (lat < -20 && lng > -120 && lng < -70) return 'South Pacific Ocean';
  if (lat < -20 && lng > -40 && lng < 20) return 'South Atlantic Ocean';
  if (lat < -20 && lng > 40 && lng < 120) return 'Indian Ocean';
  if (lat > 0 && lng > 90 && lng < 180) return 'Western Pacific Ocean';
  if (lat > 0 && lng > 0 && lng < 90) return 'Indian Ocean (Northern)';
  if (lat > 60) return 'Arctic Ocean';
  if (lat < -60) return 'Southern Ocean';
  if (lng > -30 && lng < 50 && lat > 30 && lat < 50) return 'Mediterranean Sea';
  if (lng > 40 && lng < 60 && lat > 15 && lat < 30) return 'Arabian Sea';
  if (lng > 80 && lng < 100 && lat > 5 && lat < 25) return 'Bay of Bengal';
  return 'Ocean';
}

function getPollutionSources(lat, lng) {
  const region = getOceanRegion(lat, lng);
  const sources = {
    'North Pacific Ocean': 'Asian rivers (60%), North American coast (25%), fishing industry (15%)',
    'North Atlantic Ocean': 'European rivers (40%), North American coast (35%), shipping (25%)',
    'South Pacific Ocean': 'South American coast (45%), Oceania (30%), Asian currents (25%)',
    'South Atlantic Ocean': 'African rivers (40%), South American coast (35%), shipping (25%)',
    'Indian Ocean': 'Asian rivers (50%), African coast (30%), Australian sources (20%)',
    'Western Pacific Ocean': 'Chinese rivers (45%), Southeast Asian coast (35%), fishing (20%)',
    'Mediterranean Sea': 'European rivers (50%), North African coast (30%), tourism (20%)',
    'Arabian Sea': 'Indian subcontinent (60%), Middle Eastern coast (25%), shipping (15%)',
    'Bay of Bengal': 'Ganges-Brahmaputra system (70%), Indian coast (20%), Myanmar rivers (10%)'
  };
  return sources[region] || 'Mixed coastal and riverine sources, shipping, fishing industry';
}

function getEnvironmentalImpacts(region, intensity) {
  const baseImpacts = [
    'Microplastic ingestion by marine life',
    'Entanglement of marine animals',
    'Habitat degradation',
    'Food chain contamination'
  ];
  
  const regionalImpacts = {
    'North Pacific Ocean': 'Sea turtle nesting disruption, albatross feeding impacts',
    'North Atlantic Ocean': 'Sargassum ecosystem disruption, whale migration interference',
    'Indian Ocean': 'Coral reef degradation, monsoon current pollution transport',
    'Mediterranean Sea': 'Endemic species threat, tourism impact',
    'Arctic Ocean': 'Ice ecosystem contamination, polar bear habitat impact'
  };
  
  let impacts = baseImpacts.join(', ');
  if (regionalImpacts[region]) {
    impacts += `, ${regionalImpacts[region]}`;
  }
  
  if (intensity > 0.7) {
    impacts += ', severe ecosystem disruption';
  } else if (intensity > 0.4) {
    impacts += ', moderate ecosystem stress';
  }
  
  return impacts;
}

// Learn More Modal functionality
function openLearnMoreModal(patchKey) {
  const patch = GARBAGE_PATCHES[patchKey];
  if (!patch || !patch.learnMore) return;
  
  // Create modal overlay
  const modalOverlay = document.createElement('div');
  modalOverlay.className = 'learn-more-modal-overlay';
  modalOverlay.innerHTML = `
    <div class="learn-more-modal">
      <div class="modal-header">
        <h2>${patch.learnMore.title}</h2>
        <button class="modal-close" onclick="closeLearnMoreModal()">&times;</button>
      </div>
      <div class="modal-content">
        ${patch.learnMore.sections.map(section => `
          <div class="modal-section">
            <h3>${section.title}</h3>
            <p>${section.content}</p>
          </div>
        `).join('')}
        <div class="modal-footer">
          <p><strong>📚 Additional Resources:</strong></p>
          <ul>
            <li><a href="${DATA_SOURCES.NORTH_PACIFIC_DEBRIS}" target="_blank">NCEI Surface Plastic Debris Data (North Pacific)</a></li>
            <li><a href="${DATA_SOURCES.NORTH_ATLANTIC_DEBRIS}" target="_blank">NCEI Surface Plastic Debris Data (North Atlantic)</a></li>
            <li><a href="${DATA_SOURCES.MARIDA_ZENODO}" target="_blank">MARIDA Marine Debris Archive</a></li>
            <li><a href="${DATA_SOURCES.FLOATING_DEBRIS_GITHUB}" target="_blank">Floating Marine Debris Dataset</a></li>
          </ul>
        </div>
      </div>
    </div>
  `;
  
  document.body.appendChild(modalOverlay);
  
  // Prevent body scroll when modal is open
  document.body.style.overflow = 'hidden';
}

function closeLearnMoreModal() {
  const modal = document.querySelector('.learn-more-modal-overlay');
  if (modal) {
    modal.remove();
    document.body.style.overflow = 'auto';
  }
}

// Close modal when clicking outside
document.addEventListener('click', function(e) {
  if (e.target.classList.contains('learn-more-modal-overlay')) {
    closeLearnMoreModal();
  }
});

// Close modal with Escape key
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    closeLearnMoreModal();
  }
});

// Add ocean current visualization to the map
function addOceanCurrents() {
  Object.values(OCEAN_CURRENTS).forEach(current => {
    // Create polyline for current path
    const currentLine = L.polyline(current.path, {
      color: getCurrentColor(current.strength),
      weight: Math.max(2, current.strength * 4),
      opacity: 0.7,
      dashArray: current.strength > 0.8 ? null : '10, 5', // Solid for strong currents, dashed for weaker
      className: 'ocean-current-line'
    });
    
    // Add current direction arrows
    const arrowSpacing = Math.max(2, Math.floor(current.path.length / 4));
    for (let i = 0; i < current.path.length - 1; i += arrowSpacing) {
      const [lat1, lng1] = current.path[i];
      const [lat2, lng2] = current.path[i + 1];
      
      // Calculate arrow position (midpoint)
      const arrowLat = (lat1 + lat2) / 2;
      const arrowLng = (lng1 + lng2) / 2;
      
      // Calculate arrow rotation based on direction
      const angle = Math.atan2(lat2 - lat1, lng2 - lng1) * 180 / Math.PI;
      
      const arrowMarker = L.marker([arrowLat, arrowLng], {
        icon: L.divIcon({
          className: 'current-arrow',
          html: `<div class="arrow-icon" style="transform: rotate(${angle + 90}deg);">➤</div>`,
          iconSize: [16, 16],
          iconAnchor: [8, 8]
        })
      });
      
      arrowMarker.addTo(map);
    }
    
    // Add popup with current information
    currentLine.bindPopup(`
      <div class="current-popup">
        <h3>🌊 ${current.name}</h3>
        <div class="current-details">
          <p><strong>💨 Direction:</strong> ${current.direction}</p>
          <p><strong>⚡ Strength:</strong> ${getStrengthLabel(current.strength)}</p>
          <p><strong>🗑️ Plastic Transport:</strong> ${current.plasticTransport}</p>
          <p><strong>📊 Data Source:</strong> ${current.dataSource}</p>
          <div class="current-note">
            <small>💡 Ocean currents are major pathways for plastic debris transport across ocean basins.</small>
          </div>
        </div>
      </div>
    `, {
      maxWidth: 350,
      className: 'ocean-current-popup'
    });
    
    currentLine.addTo(map);
  });
}

// Helper function to get current color based on strength
function getCurrentColor(strength) {
  if (strength >= 0.9) return '#ff4444'; // Strong - Red
  if (strength >= 0.7) return '#ff8800'; // Moderate-Strong - Orange  
  if (strength >= 0.5) return '#ffcc00'; // Moderate - Yellow
  return '#88ccff'; // Weak - Light Blue
}

// Helper function to get strength label
function getStrengthLabel(strength) {
  if (strength >= 0.9) return 'Very Strong';
  if (strength >= 0.7) return 'Strong';
  if (strength >= 0.5) return 'Moderate';
  return 'Weak';
}

// Add land-based waste facility markers to the map
function addLandWasteFacilities() {
  Object.values(LAND_WASTE_FACILITIES).forEach(facility => {
    const [lat, lng] = facility.location;
    
    // Choose icon based on facility type
    const getIcon = (type) => {
      switch(type) {
        case 'treatment_center': return '🏭';
        case 'landfill': return '🗑️';
        case 'river_outfall': return '🌊';
        case 'coastal_pollution': return '🏖️';
        case 'recycling_center': return '♻️';
        default: return '🏭';
      }
    };
    
    // Create custom marker for land facilities
    const marker = L.marker([lat, lng], {
      icon: L.divIcon({
        className: 'land-facility-marker',
        html: `
          <div class="facility-icon">
            ${getIcon(facility.type)}
          </div>
        `,
        iconSize: [24, 24],
        iconAnchor: [12, 12]
      })
    });
    
    // Add detailed popup with facility information
    marker.bindPopup(`
      <div class="facility-popup">
        <h3>${getIcon(facility.type)} ${facility.name}</h3>
        <div class="facility-details">
          <p><strong>📍 Location:</strong> ${lat.toFixed(2)}°${lat > 0 ? 'N' : 'S'}, ${Math.abs(lng).toFixed(2)}°${lng > 0 ? 'E' : 'W'}</p>
          <p><strong>🏭 Type:</strong> ${facility.type.replace('_', ' ').replace(/\b\w/g, l => l.toUpperCase())}</p>
          <p><strong>⚡ Capacity:</strong> ${facility.details.capacity}</p>
          <p><strong>🔧 Technology:</strong> ${facility.details.technology}</p>
          <p><strong>💧 Leakage:</strong> ${facility.details.leakage}</p>
          <p><strong>🌍 Impact:</strong> ${facility.details.impact}</p>
          <p><strong>📊 Status:</strong> ${facility.details.status}</p>
          <p><strong>📚 Data Source:</strong> ${facility.details.dataSource}</p>
          <div class="data-note">
            <small>💡 Land-based facilities are major sources of ocean plastic pollution through rivers and coastal discharge.</small>
          </div>
        </div>
      </div>
    `, {
      maxWidth: 400,
      className: 'land-facility-popup'
    });
    
    // Add to map
    marker.addTo(map);
  });
}

// Layer Management Functions
function initializeLayerControls() {
  const buttons = document.querySelectorAll('.option-btn');
  
  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const layer = button.dataset.layer;
      
      // Update active button
      buttons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
      
      // Switch to selected layer
      currentLayer = layer;
      showLayer(layer);
    });
  });
}

function showLayer(layerType) {
  // Clear all current layers
  clearAllLayers();
  
  switch(layerType) {
    case 'heatmap':
      showHeatmapLayer();
      break;
    case 'facilities':
      showFacilitiesLayer();
      break;
    case 'currents':
      showCurrentsLayer();
      break;
  }
}

function clearAllLayers() {
  // Remove heatmap
  if (heatmapLayer && map.hasLayer(heatmapLayer)) {
    map.removeLayer(heatmapLayer);
  }
  
  // Remove facility markers
  facilitiesMarkers.forEach(marker => {
    if (map.hasLayer(marker)) {
      map.removeLayer(marker);
    }
  });
  
  // Remove current markers and polylines
  currentMarkers.forEach(marker => {
    if (map.hasLayer(marker)) {
      map.removeLayer(marker);
    }
  });
  
  currentPolylines.forEach(polyline => {
    if (map.hasLayer(polyline)) {
      map.removeLayer(polyline);
    }
  });
}

function showHeatmapLayer() {
  if (heatmapLayer) {
    heatmapLayer.addTo(map);
  }
}

function showFacilitiesLayer() {
  // Clear existing facilities
  facilitiesMarkers = [];
  
  Object.values(LAND_WASTE_FACILITIES).forEach(facility => {
    const [lat, lng] = facility.location;
    
    // Choose icon based on facility type
    const getIcon = (type) => {
      switch(type) {
        case 'treatment_center': return '🏭';
        case 'landfill': return '🗑️';
        case 'river_outfall': return '🌊';
        case 'coastal_pollution': return '🏖️';
        case 'recycling_center': return '♻️';
        default: return '🏭';
      }
    };
    
    // Create custom marker for land facilities
    const marker = L.marker([lat, lng], {
      icon: L.divIcon({
        className: 'land-facility-marker',
        html: `
          <div class="facility-icon">
            ${getIcon(facility.type)}
          </div>
        `,
        iconSize: [24, 24],
        iconAnchor: [12, 12]
      })
    });
    
    // Add detailed popup with facility information
    marker.bindPopup(`
      <div class="facility-popup">
        <h3>${getIcon(facility.type)} ${facility.name}</h3>
        <div class="facility-details">
          <p><strong>📍 Location:</strong> ${lat.toFixed(2)}°${lat > 0 ? 'N' : 'S'}, ${Math.abs(lng).toFixed(2)}°${lng > 0 ? 'E' : 'W'}</p>
          <p><strong>🏭 Type:</strong> ${facility.type.replace('_', ' ').replace(/\b\w/g, l => l.toUpperCase())}</p>
          <p><strong>⚡ Capacity:</strong> ${facility.details.capacity}</p>
          <p><strong>🔧 Technology:</strong> ${facility.details.technology}</p>
          <p><strong>💧 Leakage:</strong> ${facility.details.leakage}</p>
          <p><strong>🌍 Impact:</strong> ${facility.details.impact}</p>
          <p><strong>📊 Status:</strong> ${facility.details.status}</p>
          <p><strong>📚 Data Source:</strong> ${facility.details.dataSource}</p>
          <div class="data-note">
            <small>💡 Land-based facilities are major sources of ocean plastic pollution through rivers and coastal discharge.</small>
          </div>
        </div>
      </div>
    `, {
      maxWidth: 400,
      className: 'land-facility-popup'
    });
    
    // Add to map and store reference
    marker.addTo(map);
    facilitiesMarkers.push(marker);
  });
}

function showCurrentsLayer() {
  // Clear existing currents
  currentMarkers = [];
  currentPolylines = [];
  
  Object.values(OCEAN_CURRENTS).forEach(current => {
    // Create polyline for current path
    const currentLine = L.polyline(current.path, {
      color: getCurrentColor(current.strength),
      weight: Math.max(2, current.strength * 4),
      opacity: 0.7,
      dashArray: current.strength > 0.8 ? null : '10, 5', // Solid for strong currents, dashed for weaker
      className: 'ocean-current-line'
    });
    
    // Add current direction arrows
    const arrowSpacing = Math.max(2, Math.floor(current.path.length / 4));
    for (let i = 0; i < current.path.length - 1; i += arrowSpacing) {
      const [lat1, lng1] = current.path[i];
      const [lat2, lng2] = current.path[i + 1];
      
      // Calculate arrow position (midpoint)
      const arrowLat = (lat1 + lat2) / 2;
      const arrowLng = (lng1 + lng2) / 2;
      
      // Calculate arrow rotation based on direction
      const angle = Math.atan2(lat2 - lat1, lng2 - lng1) * 180 / Math.PI;
      
      const arrowMarker = L.marker([arrowLat, arrowLng], {
        icon: L.divIcon({
          className: 'current-arrow',
          html: `<div class="arrow-icon" style="transform: rotate(${angle + 90}deg);">➤</div>`,
          iconSize: [16, 16],
          iconAnchor: [8, 8]
        })
      });
      
      arrowMarker.addTo(map);
      currentMarkers.push(arrowMarker);
    }
    
    // Add popup with current information
    currentLine.bindPopup(`
      <div class="current-popup">
        <h3>🌊 ${current.name}</h3>
        <div class="current-details">
          <p><strong>💨 Direction:</strong> ${current.direction}</p>
          <p><strong>⚡ Strength:</strong> ${getStrengthLabel(current.strength)}</p>
          <p><strong>🗑️ Plastic Transport:</strong> ${current.plasticTransport}</p>
          <p><strong>📊 Data Source:</strong> ${current.dataSource}</p>
          <div class="current-note">
            <small>💡 Ocean currents are major pathways for plastic debris transport across ocean basins.</small>
          </div>
        </div>
      </div>
    `, {
      maxWidth: 350,
      className: 'ocean-current-popup'
    });
    
    currentLine.addTo(map);
    currentPolylines.push(currentLine);
  });
}

// Helper function to get current color based on strength
function getCurrentColor(strength) {
  if (strength >= 0.9) return '#ff4444'; // Strong - Red
  if (strength >= 0.7) return '#ff8800'; // Moderate-Strong - Orange  
  if (strength >= 0.5) return '#ffcc00'; // Moderate - Yellow
  return '#88ccff'; // Weak - Light Blue
}

// Helper function to get strength label
function getStrengthLabel(strength) {
  if (strength >= 0.9) return 'Very Strong';
  if (strength >= 0.7) return 'Strong';
  if (strength >= 0.5) return 'Moderate';
  return 'Weak';
}

const POPULAR_CITIES = [
  { name: "Tokyo", country: "Japan", lat: 35.6762, lng: 139.6503, flag: "🇯🇵" },
  { name: "Delhi", country: "India", lat: 28.7041, lng: 77.1025, flag: "🇮🇳" },
  { name: "Shanghai", country: "China", lat: 31.2304, lng: 121.4737, flag: "🇨🇳" },
  { name: "São Paulo", country: "Brazil", lat: -23.5505, lng: -46.6333, flag: "🇧🇷" },
  { name: "Mexico City", country: "Mexico", lat: 19.4326, lng: -99.1332, flag: "🇲🇽" },
  { name: "Cairo", country: "Egypt", lat: 30.0444, lng: 31.2357, flag: "🇪🇬" },
  { name: "Mumbai", country: "India", lat: 19.0760, lng: 72.8777, flag: "🇮🇳" },
  { name: "Beijing", country: "China", lat: 39.9042, lng: 116.4074, flag: "🇨🇳" },
  { name: "Dhaka", country: "Bangladesh", lat: 23.8103, lng: 90.4125, flag: "🇧🇩" },
  { name: "Osaka", country: "Japan", lat: 34.6937, lng: 135.5023, flag: "🇯🇵" },
  { name: "New York", country: "United States", lat: 40.7128, lng: -74.0060, flag: "🇺🇸" },
  { name: "Karachi", country: "Pakistan", lat: 24.8607, lng: 67.0011, flag: "🇵🇰" },
  { name: "Buenos Aires", country: "Argentina", lat: -34.6118, lng: -58.3960, flag: "🇦🇷" },
  { name: "Chongqing", country: "China", lat: 29.4316, lng: 106.9123, flag: "🇨🇳" },
  { name: "Istanbul", country: "Turkey", lat: 41.0082, lng: 28.9784, flag: "🇹🇷" },
  { name: "Kolkata", country: "India", lat: 22.5726, lng: 88.3639, flag: "🇮🇳" },
  { name: "Manila", country: "Philippines", lat: 14.5995, lng: 120.9842, flag: "🇵🇭" },
  { name: "Lagos", country: "Nigeria", lat: 6.5244, lng: 3.3792, flag: "🇳🇬" },
  { name: "Rio de Janeiro", country: "Brazil", lat: -22.9068, lng: -43.1729, flag: "🇧🇷" },
  { name: "Tianjin", country: "China", lat: 39.3434, lng: 117.3616, flag: "🇨🇳" },
  { name: "Kinshasa", country: "DR Congo", lat: -4.4419, lng: 15.2663, flag: "🇨🇩" },
  { name: "Guangzhou", country: "China", lat: 23.1291, lng: 113.2644, flag: "🇨🇳" },
  { name: "Los Angeles", country: "United States", lat: 34.0522, lng: -118.2437, flag: "🇺🇸" },
  { name: "Moscow", country: "Russia", lat: 55.7558, lng: 37.6173, flag: "🇷🇺" },
  { name: "Shenzhen", country: "China", lat: 22.5431, lng: 114.0579, flag: "🇨🇳" },
  { name: "Lahore", country: "Pakistan", lat: 31.4504, lng: 74.3587, flag: "🇵🇰" },
  { name: "Bangalore", country: "India", lat: 12.9716, lng: 77.5946, flag: "🇮🇳" },
  { name: "Paris", country: "France", lat: 48.8566, lng: 2.3522, flag: "🇫🇷" },
  { name: "Bogotá", country: "Colombia", lat: 4.7110, lng: -74.0721, flag: "🇨🇴" },
  { name: "Jakarta", country: "Indonesia", lat: -6.2088, lng: 106.8456, flag: "🇮🇩" },
  { name: "Chennai", country: "India", lat: 13.0827, lng: 80.2707, flag: "🇮🇳" },
  { name: "Lima", country: "Peru", lat: -12.0464, lng: -77.0428, flag: "🇵🇪" },
  { name: "Bangkok", country: "Thailand", lat: 13.7563, lng: 100.5018, flag: "🇹🇭" },
  { name: "Seoul", country: "South Korea", lat: 37.5665, lng: 126.9780, flag: "🇰🇷" },
  { name: "Nagoya", country: "Japan", lat: 35.1815, lng: 136.9066, flag: "🇯🇵" },
  { name: "Hyderabad", country: "India", lat: 17.3850, lng: 78.4867, flag: "🇮🇳" },
  { name: "London", country: "United Kingdom", lat: 51.5074, lng: -0.1278, flag: "🇬🇧" },
  { name: "Tehran", country: "Iran", lat: 35.6892, lng: 51.3890, flag: "🇮🇷" },
  { name: "Chicago", country: "United States", lat: 41.8781, lng: -87.6298, flag: "🇺🇸" },
  { name: "Chengdu", country: "China", lat: 30.5728, lng: 104.0668, flag: "🇨🇳" },
  { name: "Nanjing", country: "China", lat: 32.0603, lng: 118.7969, flag: "🇨🇳" },
  { name: "Wuhan", country: "China", lat: 30.5928, lng: 114.3055, flag: "🇨🇳" },
  { name: "Ho Chi Minh City", country: "Vietnam", lat: 10.8231, lng: 106.6297, flag: "🇻🇳" },
  { name: "Luanda", country: "Angola", lat: -8.8390, lng: 13.2894, flag: "🇦🇴" },
  { name: "Ahmedabad", country: "India", lat: 23.0225, lng: 72.5714, flag: "🇮🇳" },
  { name: "Kuala Lumpur", country: "Malaysia", lat: 3.1390, lng: 101.6869, flag: "🇲🇾" },
  { name: "Xi'an", country: "China", lat: 34.3416, lng: 108.9398, flag: "🇨🇳" },
  { name: "Hong Kong", country: "Hong Kong", lat: 22.3193, lng: 114.1694, flag: "🇭🇰" },
  { name: "Dongguan", country: "China", lat: 23.0489, lng: 113.7447, flag: "🇨🇳" },
  { name: "Hangzhou", country: "China", lat: 30.2741, lng: 120.1551, flag: "🇨🇳" },
  { name: "Foshan", country: "China", lat: 23.0218, lng: 113.1219, flag: "🇨🇳" },
  { name: "Shenyang", country: "China", lat: 41.8057, lng: 123.4315, flag: "🇨🇳" },
  { name: "Riyadh", country: "Saudi Arabia", lat: 24.7136, lng: 46.6753, flag: "🇸🇦" },
  { name: "Baghdad", country: "Iraq", lat: 33.3152, lng: 44.3661, flag: "🇮🇶" },
  { name: "Santiago", country: "Chile", lat: -33.4489, lng: -70.6693, flag: "🇨🇱" },
  { name: "Surat", country: "India", lat: 21.1702, lng: 72.8311, flag: "🇮🇳" },
  { name: "Madrid", country: "Spain", lat: 40.4168, lng: -3.7038, flag: "🇪🇸" },
  { name: "Suzhou", country: "China", lat: 31.2989, lng: 120.5853, flag: "🇨🇳" },
  { name: "Pune", country: "India", lat: 18.5204, lng: 73.8567, flag: "🇮🇳" },
  { name: "Harbin", country: "China", lat: 45.8038, lng: 126.5349, flag: "🇨🇳" },
  { name: "Houston", country: "United States", lat: 29.7604, lng: -95.3698, flag: "🇺🇸" },
  { name: "Dallas", country: "United States", lat: 32.7767, lng: -96.7970, flag: "🇺🇸" },
  { name: "Toronto", country: "Canada", lat: 43.6532, lng: -79.3832, flag: "🇨🇦" },
  { name: "Dar es Salaam", country: "Tanzania", lat: -6.7924, lng: 39.2083, flag: "🇹🇿" },
  { name: "Miami", country: "United States", lat: 25.7617, lng: -80.1918, flag: "🇺🇸" },
  { name: "Belo Horizonte", country: "Brazil", lat: -19.9167, lng: -43.9345, flag: "🇧🇷" },
  { name: "Singapore", country: "Singapore", lat: 1.3521, lng: 103.8198, flag: "🇸🇬" },
  { name: "Philadelphia", country: "United States", lat: 39.9526, lng: -75.1652, flag: "🇺🇸" },
  { name: "Phoenix", country: "United States", lat: 33.4484, lng: -112.0740, flag: "🇺🇸" },
  { name: "San Antonio", country: "United States", lat: 29.4241, lng: -98.4936, flag: "🇺🇸" },
  { name: "San Diego", country: "United States", lat: 32.7157, lng: -117.1611, flag: "🇺🇸" },
  { name: "Johannesburg", country: "South Africa", lat: -26.2041, lng: 28.0473, flag: "🇿🇦" },
  { name: "Alexandria", country: "Egypt", lat: 31.2001, lng: 29.9187, flag: "🇪🇬" },
  { name: "Ankara", country: "Turkey", lat: 39.9334, lng: 32.8597, flag: "🇹🇷" },
  { name: "Berlin", country: "Germany", lat: 52.5200, lng: 13.4050, flag: "🇩🇪" },
  { name: "Sydney", country: "Australia", lat: -33.8688, lng: 151.2093, flag: "🇦🇺" },
  { name: "Melbourne", country: "Australia", lat: -37.8136, lng: 144.9631, flag: "🇦🇺" },
  { name: "Abidjan", country: "Ivory Coast", lat: 5.3600, lng: -4.0083, flag: "🇨🇮" },
  { name: "Kano", country: "Nigeria", lat: 12.0022, lng: 8.5920, flag: "🇳🇬" },
  { name: "Brasília", country: "Brazil", lat: -15.8267, lng: -47.9218, flag: "🇧🇷" },
  { name: "Jaipur", country: "India", lat: 26.9124, lng: 75.7873, flag: "🇮🇳" },
  { name: "Khartoum", country: "Sudan", lat: 15.5007, lng: 32.5599, flag: "🇸🇩" },
  { name: "Yokohama", country: "Japan", lat: 35.4437, lng: 139.6380, flag: "🇯🇵" },
  { name: "Casablanca", country: "Morocco", lat: 33.5731, lng: -7.5898, flag: "🇲🇦" },
  { name: "Izmir", country: "Turkey", lat: 38.4192, lng: 27.1287, flag: "🇹🇷" },
  { name: "Tashkent", country: "Uzbekistan", lat: 41.2995, lng: 69.2401, flag: "🇺🇿" },
  { name: "Fortaleza", country: "Brazil", lat: -3.7172, lng: -38.5433, flag: "🇧🇷" },
  { name: "Salvador", country: "Brazil", lat: -12.9714, lng: -38.5014, flag: "🇧🇷" },
  { name: "Rome", country: "Italy", lat: 41.9028, lng: 12.4964, flag: "🇮🇹" },
  { name: "Kyiv", country: "Ukraine", lat: 50.4501, lng: 30.5234, flag: "🇺🇦" },
  { name: "Lucknow", country: "India", lat: 26.8467, lng: 80.9462, flag: "🇮🇳" },
  { name: "Kanpur", country: "India", lat: 26.4499, lng: 80.3319, flag: "🇮🇳" },
  { name: "Surabaya", country: "Indonesia", lat: -7.2575, lng: 112.7521, flag: "🇮🇩" },
  { name: "Ilorin", country: "Nigeria", lat: 8.5000, lng: 4.5500, flag: "🇳🇬" },
  { name: "Faisalabad", country: "Pakistan", lat: 31.4504, lng: 73.1350, flag: "🇵🇰" },
  { name: "Izmir", country: "Turkey", lat: 38.4237, lng: 27.1428, flag: "🇹🇷" },
  { name: "Recife", country: "Brazil", lat: -8.0476, lng: -34.8770, flag: "🇧🇷" },
  { name: "Porto Alegre", country: "Brazil", lat: -30.0346, lng: -51.2177, flag: "🇧🇷" },
  { name: "Fez", country: "Morocco", lat: 34.0181, lng: -5.0078, flag: "🇲🇦" },
  { name: "Kumasi", country: "Ghana", lat: 6.6885, lng: -1.6244, flag: "🇬🇭" },
  { name: "Benin City", country: "Nigeria", lat: 6.3350, lng: 5.6037, flag: "🇳🇬" },
  { name: "Maiduguri", country: "Nigeria", lat: 11.8311, lng: 13.1511, flag: "🇳🇬" },
  { name: "Zaria", country: "Nigeria", lat: 11.0804, lng: 7.7076, flag: "🇳🇬" },
  { name: "Aba", country: "Nigeria", lat: 5.1066, lng: 7.3667, flag: "🇳🇬" },
  { name: "Jos", country: "Nigeria", lat: 9.9285, lng: 8.8921, flag: "🇳🇬" },
  { name: "Ilorin", country: "Nigeria", lat: 8.4966, lng: 4.5426, flag: "🇳🇬" },
  { name: "Oyo", country: "Nigeria", lat: 7.8500, lng: 3.9333, flag: "🇳🇬" },
  { name: "Enugu", country: "Nigeria", lat: 6.4474, lng: 7.4981, flag: "🇳🇬" },
  { name: "Abeokuta", country: "Nigeria", lat: 7.1475, lng: 3.3619, flag: "🇳🇬" }
];

let searchTimeout;
let selectedIndex = -1;

// OpenRouter API Configuration - loaded from external config.js file
const OPENROUTER_CONFIG = {
  apiKey: window.CONFIG?.OPENROUTER_API_KEY || 'YOUR_OPENROUTER_API_KEY',
  baseUrl: 'https://openrouter.ai/api/v1/chat/completions',
  model: 'anthropic/claude-3.5-sonnet' // Using Claude 3.5 Sonnet for high-quality responses
};

// OpenRouter API Functions
async function generateCityOceanWasteInfo(cityName, country, lat, lng) {
  // Check if API key is configured
  if (!OPENROUTER_CONFIG.apiKey || OPENROUTER_CONFIG.apiKey === 'YOUR_OPENROUTER_API_KEY') {
    return {
      success: false,
      content: `
        <div class="ai-info-section">
          <h4>🤖 AI Ocean Waste Information</h4>
          <p class="ai-summary">API key required for ${cityName} recommendations</p>
          <button class="learn-more-btn" onclick="showAIModal('${cityName}', 'Please configure your OpenRouter API key in config.js to get personalized ocean waste recommendations.')">
            📖 Learn More
          </button>
        </div>
      `
    };
  }

  try {
    const prompt = `You are an expert marine environmental scientist. Provide specific, actionable information about ocean plastic waste and pollution for ${cityName}, ${country} (coordinates: ${lat.toFixed(4)}°, ${lng.toFixed(4)}°).

Please provide:
1. Local ocean pollution challenges specific to this city/region
2. 3-4 concrete actions residents can take to help reduce ocean plastic waste
3. Local organizations or initiatives working on ocean cleanup
4. Specific environmental impacts on nearby marine ecosystems

Keep the response concise (under 300 words), factual, and actionable. Use bullet points where appropriate. Focus on practical solutions and local context.`;

    const response = await fetch(OPENROUTER_CONFIG.baseUrl, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${OPENROUTER_CONFIG.apiKey}`,
        'Content-Type': 'application/json',
        'HTTP-Referer': window.location.origin,
        'X-Title': 'TrashGenius Ocean Waste Assistant'
      },
      body: JSON.stringify({
        model: OPENROUTER_CONFIG.model,
        messages: [
          {
            role: 'user',
            content: prompt
          }
        ],
        max_tokens: 500,
        temperature: 0.7
      })
    });

    if (!response.ok) {
      throw new Error(`API request failed: ${response.status}`);
    }

    const data = await response.json();
    const aiContent = data.choices?.[0]?.message?.content;

    if (!aiContent) {
      throw new Error('No content received from API');
    }

    return {
      success: true,
      content: `
        <div class="ai-info-section">
          <h4>🤖 AI Ocean Waste Information</h4>
          <p class="ai-summary">Personalized recommendations available for ${cityName}</p>
          <button class="learn-more-btn" onclick="showAIModal('${cityName}', \`${aiContent.replace(/`/g, '\\`').replace(/\n/g, '\\n')}\`)">
            📖 Learn More
          </button>
        </div>
      `,
      fullContent: aiContent
    };

  } catch (error) {
    console.error('OpenRouter API Error:', error);
    return {
      success: false,
      content: `
        <div class="ai-info-section">
          <h4>🤖 AI Ocean Waste Information</h4>
          <p class="ai-summary">Error generating recommendations for ${cityName}</p>
          <button class="learn-more-btn" onclick="showAIModal('${cityName}', 'Unable to generate AI content. Please check your API key and internet connection.')">
            📖 Learn More
          </button>
        </div>
      `
    };
  }
}

function initializeCitySearch() {
  const searchInput = document.getElementById('city-search-input');
  const searchDropdown = document.getElementById('search-dropdown');
  
  // ... (rest of the code remains the same)

  // Input event listener for real-time search
  searchInput.addEventListener('input', (e) => {
    const query = e.target.value.trim();
    selectedIndex = -1;
    
    if (searchTimeout) {
      clearTimeout(searchTimeout);
    }
    
    searchTimeout = setTimeout(() => {
      if (query.length >= 1) {
        showSearchResults(query);
      } else {
        hideSearchResults();
      }
    }, 150);
  });

  // Keyboard navigation
  searchInput.addEventListener('keydown', (e) => {
    const items = searchDropdown.querySelectorAll('.dropdown-item');
    
    switch(e.key) {
      case 'ArrowDown':
        e.preventDefault();
        selectedIndex = Math.min(selectedIndex + 1, items.length - 1);
        updateSelection(items);
        break;
      case 'ArrowUp':
        e.preventDefault();
        selectedIndex = Math.max(selectedIndex - 1, -1);
        updateSelection(items);
        break;
      case 'Enter':
        e.preventDefault();
        if (selectedIndex >= 0 && items[selectedIndex]) {
          selectCity(items[selectedIndex]);
        }
        break;
      case 'Escape':
        hideSearchResults();
        searchInput.blur();
        break;
    }
  });

  // Hide dropdown when clicking outside
  document.addEventListener('click', (e) => {
    if (!searchInput.contains(e.target) && !searchDropdown.contains(e.target)) {
      hideSearchResults();
    }
  });

  // Focus event to show recent/popular cities
  searchInput.addEventListener('focus', () => {
    if (searchInput.value.trim() === '') {
      showPopularCities();
    }
  });
}

function showSearchResults(query) {
  const searchDropdown = document.getElementById('search-dropdown');
  const results = searchCities(query);
  
  if (results.length === 0) {
    searchDropdown.innerHTML = '<div class="dropdown-no-results">No cities found</div>';
  } else {
    searchDropdown.innerHTML = results.map((city, index) => `
      <div class="dropdown-item" data-index="${index}" data-lat="${city.lat}" data-lng="${city.lng}" data-name="${city.name}">
        <span class="city-flag">${city.flag}</span>
        <div class="city-info">
          <div class="city-name">${highlightMatch(city.name, query)}</div>
          <div class="city-country">${city.country}</div>
        </div>
      </div>
    `).join('');
  }
  
  // Add click listeners to dropdown items
  searchDropdown.querySelectorAll('.dropdown-item').forEach(item => {
    item.addEventListener('click', () => selectCity(item));
  });
  
  searchDropdown.classList.add('show');
}

function showPopularCities() {
  const searchDropdown = document.getElementById('search-dropdown');
  const popularCities = POPULAR_CITIES.slice(0, 8); // Show top 8 popular cities
  
  searchDropdown.innerHTML = popularCities.map((city, index) => `
    <div class="dropdown-item" data-index="${index}" data-lat="${city.lat}" data-lng="${city.lng}" data-name="${city.name}">
      <span class="city-flag">${city.flag}</span>
      <div class="city-info">
        <div class="city-name">${city.name}</div>
        <div class="city-country">${city.country}</div>
      </div>
    </div>
  `).join('');
  
  // Add click listeners to dropdown items
  searchDropdown.querySelectorAll('.dropdown-item').forEach(item => {
    item.addEventListener('click', () => selectCity(item));
  });
  
  searchDropdown.classList.add('show');
}

function hideSearchResults() {
  const searchDropdown = document.getElementById('search-dropdown');
  searchDropdown.classList.remove('show');
  selectedIndex = -1;
}

function searchCities(query) {
  const lowercaseQuery = query.toLowerCase();
  return POPULAR_CITIES.filter(city => 
    city.name.toLowerCase().includes(lowercaseQuery) ||
    city.country.toLowerCase().includes(lowercaseQuery)
  ).slice(0, 10); // Limit to 10 results
}

function highlightMatch(text, query) {
  if (!query) return text;
  const regex = new RegExp(`(${query})`, 'gi');
  return text.replace(regex, '<strong>$1</strong>');
}

function updateSelection(items) {
  items.forEach((item, index) => {
    if (index === selectedIndex) {
      item.classList.add('highlighted');
      item.scrollIntoView({ block: 'nearest' });
    } else {
      item.classList.remove('highlighted');
    }
  });
}

async function selectCity(item) {
  const lat = parseFloat(item.dataset.lat);
  const lng = parseFloat(item.dataset.lng);
  const name = item.dataset.name;
  const country = item.querySelector('.city-country').textContent;
  const flag = item.querySelector('.city-flag').textContent;
  
  // Update input value
  const searchInput = document.getElementById('city-search-input');
  searchInput.value = name;
  
  // Hide dropdown
  hideSearchResults();
  
  // Animate map to city location
  map.flyTo([lat, lng], 6, {
    duration: 2,
    easeLinearity: 0.1
  });
  
  // Update status to show AI is generating content
  setStatus(`Generating AI ocean waste information for ${name}...`, 'loading');
  
  // Generate AI content for the city
  const aiInfo = await generateCityOceanWasteInfo(name, country, lat, lng);
  
  // Create enhanced popup with AI information
  const popupContent = `
    <div class="city-popup">
      <h3>${flag} ${name}</h3>
      <p><strong>Country:</strong> ${country}</p>
      <p><strong>Coordinates:</strong> ${lat.toFixed(4)}°, ${lng.toFixed(4)}°</p>
      <hr style="margin: 12px 0; border: 1px solid rgba(255,255,255,0.2);">
      ${aiInfo.content}
    </div>
  `;
  
  // Add a temporary marker for the selected city with AI content
  const cityMarker = L.marker([lat, lng])
    .addTo(map)
    .bindPopup(popupContent, {
      maxWidth: 400,
      className: 'ai-enhanced-city-popup'
    })
    .openPopup();
  
  // Remove the marker after 15 seconds (longer due to AI content)
  setTimeout(() => {
    map.removeLayer(cityMarker);
  }, 15000);
  
  // Update status based on AI generation result
  if (aiInfo.success) {
    setStatus(`AI ocean waste information generated for ${name}`, 'ok');
  } else {
    setStatus(`Viewing ${name} - Configure API key for AI insights`, 'ok');
  }
}

// AI Modal Functions
function showAIModal(cityName, content) {
  // Create modal if it doesn't exist
  let modal = document.getElementById('ai-modal');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'ai-modal';
    modal.className = 'ai-modal';
    modal.innerHTML = `
      <div class="ai-modal-content">
        <div class="ai-modal-header">
          <h3 id="ai-modal-title">🤖 AI Ocean Waste Information</h3>
          <button class="ai-modal-close" onclick="closeAIModal()">&times;</button>
        </div>
        <div class="ai-modal-body" id="ai-modal-body">
          <!-- Content will be inserted here -->
        </div>
      </div>
    `;
    document.body.appendChild(modal);
  }

  // Update modal content
  document.getElementById('ai-modal-title').textContent = `🤖 Ocean Waste Info: ${cityName}`;
  document.getElementById('ai-modal-body').innerHTML = content.replace(/\n/g, '<br>');
  
  // Show modal
  modal.style.display = 'flex';
  document.body.style.overflow = 'hidden'; // Prevent background scrolling
}

function closeAIModal() {
  const modal = document.getElementById('ai-modal');
  if (modal) {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto'; // Restore scrolling
  }
}

// Close modal when clicking outside
document.addEventListener('click', (e) => {
  const modal = document.getElementById('ai-modal');
  if (modal && e.target === modal) {
    closeAIModal();
  }
});

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeAIModal();
  }
});

// Initialize search functionality when DOM is ready
document.addEventListener('DOMContentLoaded', initializeCitySearch);

loadDataAndRender();