import { PalettePreset } from '@/types';

export const PRESET_CATEGORIES = [
  'All',
  'Pastel',
  'Ocean',
  'Nature',
  'Sunset',
  'Earth',
  'Minimal',
  'Retro',
  'Neon',
  'Dark',
  'Elegant',
  'Warm',
  'Cool',
  'Monochrome',
  'Vintage',
  'Candy',
  'Forest',
  'Luxury',
  'Cyber',
  'Editorial',
  'Soft Neutral',
] as const;

export type PresetCategoryName = (typeof PRESET_CATEGORIES)[number];

export const PRESET_PALETTES: PalettePreset[] = [
  {
    "id": "pastel-sorbet-dreams",
    "name": "Sorbet Dreams",
    "category": "Pastel",
    "colors": [
      "#FFCAD4",
      "#B5E2FA",
      "#EDF6F9",
      "#FFD166",
      "#C7F9CC"
    ],
    "tags": [
      "pastel",
      "sorbet dreams"
    ]
  },
  {
    "id": "pastel-lavender-mist",
    "name": "Lavender Mist",
    "category": "Pastel",
    "colors": [
      "#E2D4F0",
      "#C3B1E1",
      "#E8F1F5",
      "#FCEADE",
      "#D8E2DC"
    ],
    "tags": [
      "pastel",
      "lavender mist"
    ]
  },
  {
    "id": "pastel-peachy-sunrise",
    "name": "Peachy Sunrise",
    "category": "Pastel",
    "colors": [
      "#FFE5D9",
      "#FFCAD4",
      "#F4ACB7",
      "#9D8189",
      "#D8E2DC"
    ],
    "tags": [
      "pastel",
      "peachy sunrise"
    ]
  },
  {
    "id": "pastel-mint-macaron",
    "name": "Mint Macaron",
    "category": "Pastel",
    "colors": [
      "#D8F3DC",
      "#B7E4C7",
      "#95D5B2",
      "#74C69D",
      "#EDE0D4"
    ],
    "tags": [
      "pastel",
      "mint macaron"
    ]
  },
  {
    "id": "pastel-cotton-blossom",
    "name": "Cotton Blossom",
    "category": "Pastel",
    "colors": [
      "#FDE2E4",
      "#FFCAD4",
      "#B5E2FA",
      "#C5DEDD",
      "#DFE7FD"
    ],
    "tags": [
      "pastel",
      "cotton blossom"
    ]
  },
  {
    "id": "pastel-vanilla-cloud",
    "name": "Vanilla Cloud",
    "category": "Pastel",
    "colors": [
      "#FFF1E6",
      "#FDE2E4",
      "#FAD2E1",
      "#E2ECE9",
      "#BEE1E6"
    ],
    "tags": [
      "pastel",
      "vanilla cloud"
    ]
  },
  {
    "id": "pastel-quiet-lilac",
    "name": "Quiet Lilac",
    "category": "Pastel",
    "colors": [
      "#E8D7F1",
      "#D3BCC0",
      "#A5668B",
      "#F1DABF",
      "#FBFAF8"
    ],
    "tags": [
      "pastel",
      "quiet lilac"
    ]
  },
  {
    "id": "pastel-almond-breeze",
    "name": "Almond Breeze",
    "category": "Pastel",
    "colors": [
      "#F3E9DC",
      "#C6D8D3",
      "#FDF5DF",
      "#F08080",
      "#F4ACB7"
    ],
    "tags": [
      "pastel",
      "almond breeze"
    ]
  },
  {
    "id": "pastel-powder-sky",
    "name": "Powder Sky",
    "category": "Pastel",
    "colors": [
      "#CAF0F8",
      "#ADE8F4",
      "#90E0EF",
      "#48CAE4",
      "#0096C7"
    ],
    "tags": [
      "pastel",
      "powder sky"
    ]
  },
  {
    "id": "pastel-blush-butter",
    "name": "Blush & Butter",
    "category": "Pastel",
    "colors": [
      "#FFF3B0",
      "#E09F3E",
      "#F4ACB7",
      "#FFE5D9",
      "#FFCAD4"
    ],
    "tags": [
      "pastel",
      "blush & butter"
    ]
  },
  {
    "id": "pastel-chamomile-glow",
    "name": "Chamomile Glow",
    "category": "Pastel",
    "colors": [
      "#FEF9E7",
      "#FADBD8",
      "#D4EFDF",
      "#D6EAF8",
      "#FCF3CF"
    ],
    "tags": [
      "pastel",
      "chamomile glow"
    ]
  },
  {
    "id": "pastel-pale-hydrangea",
    "name": "Pale Hydrangea",
    "category": "Pastel",
    "colors": [
      "#D6EAF8",
      "#E8DAEF",
      "#D4EFDF",
      "#FADBD8",
      "#EAECEE"
    ],
    "tags": [
      "pastel",
      "pale hydrangea"
    ]
  },
  {
    "id": "pastel-rosewater-float",
    "name": "Rosewater Float",
    "category": "Pastel",
    "colors": [
      "#FCE4EC",
      "#F8BBD0",
      "#E1BEE7",
      "#D1C4E9",
      "#F3E5F5"
    ],
    "tags": [
      "pastel",
      "rosewater float"
    ]
  },
  {
    "id": "pastel-morning-linen",
    "name": "Morning Linen",
    "category": "Pastel",
    "colors": [
      "#F9F9F6",
      "#EDE8F5",
      "#CAD2C5",
      "#84A98C",
      "#52796F"
    ],
    "tags": [
      "pastel",
      "morning linen"
    ]
  },
  {
    "id": "pastel-sweet-pistachio",
    "name": "Sweet Pistachio",
    "category": "Pastel",
    "colors": [
      "#E9F5ED",
      "#CCE8D6",
      "#A3D9B5",
      "#85C79E",
      "#F2E8DC"
    ],
    "tags": [
      "pastel",
      "sweet pistachio"
    ]
  },
  {
    "id": "pastel-frosted-berry",
    "name": "Frosted Berry",
    "category": "Pastel",
    "colors": [
      "#F7D6E0",
      "#F2B5D4",
      "#DFB2F4",
      "#C9B1E4",
      "#BCE7FD"
    ],
    "tags": [
      "pastel",
      "frosted berry"
    ]
  },
  {
    "id": "pastel-baby-cashmere",
    "name": "Baby Cashmere",
    "category": "Pastel",
    "colors": [
      "#FAF0E6",
      "#F3E5DC",
      "#E8D5CA",
      "#D1BFA7",
      "#A39281"
    ],
    "tags": [
      "pastel",
      "baby cashmere"
    ]
  },
  {
    "id": "pastel-hazy-meadow",
    "name": "Hazy Meadow",
    "category": "Pastel",
    "colors": [
      "#EBF5DF",
      "#BAD4AA",
      "#D4D4AA",
      "#EDB458",
      "#E8871E"
    ],
    "tags": [
      "pastel",
      "hazy meadow"
    ]
  },
  {
    "id": "pastel-opal-shimmer",
    "name": "Opal Shimmer",
    "category": "Pastel",
    "colors": [
      "#E0FBFC",
      "#C2DFE3",
      "#9DB4C0",
      "#5C6B73",
      "#253237"
    ],
    "tags": [
      "pastel",
      "opal shimmer"
    ]
  },
  {
    "id": "pastel-tender-blossom",
    "name": "Tender Blossom",
    "category": "Pastel",
    "colors": [
      "#FFE3E3",
      "#FFC9C9",
      "#FFA8A8",
      "#E3FAFC",
      "#C5F6FA"
    ],
    "tags": [
      "pastel",
      "tender blossom"
    ]
  },
  {
    "id": "pastel-cream-souffle",
    "name": "Cream Souffle",
    "category": "Pastel",
    "colors": [
      "#FFF8E7",
      "#FCEECB",
      "#F9E4B7",
      "#E8D4A2",
      "#C6B588"
    ],
    "tags": [
      "pastel",
      "cream souffle"
    ]
  },
  {
    "id": "pastel-porcelain-dawn",
    "name": "Porcelain Dawn",
    "category": "Pastel",
    "colors": [
      "#EFF6EE",
      "#FBFBF2",
      "#E5E6E4",
      "#D4D6B9",
      "#B0B293"
    ],
    "tags": [
      "pastel",
      "porcelain dawn"
    ]
  },
  {
    "id": "pastel-mauve-whisper",
    "name": "Mauve Whisper",
    "category": "Pastel",
    "colors": [
      "#E6D7E8",
      "#CBB8CE",
      "#B39AB7",
      "#A082A4",
      "#8E6C93"
    ],
    "tags": [
      "pastel",
      "mauve whisper"
    ]
  },
  {
    "id": "pastel-sunlit-silk",
    "name": "Sunlit Silk",
    "category": "Pastel",
    "colors": [
      "#FFFDF9",
      "#FBF4EB",
      "#F2E3D5",
      "#E0CEBC",
      "#C9B5A0"
    ],
    "tags": [
      "pastel",
      "sunlit silk"
    ]
  },
  {
    "id": "ocean-ice-breeze",
    "name": "Ice Breeze",
    "category": "Ocean",
    "colors": [
      "#A1E3F9",
      "#73D3F5",
      "#3BBEEF",
      "#1EA0D5",
      "#16242E"
    ],
    "tags": [
      "ocean",
      "ice breeze"
    ]
  },
  {
    "id": "ocean-deep-abyss",
    "name": "Deep Abyss",
    "category": "Ocean",
    "colors": [
      "#0A192F",
      "#172A45",
      "#303C55",
      "#64FFDA",
      "#CCD6F6"
    ],
    "tags": [
      "ocean",
      "deep abyss"
    ]
  },
  {
    "id": "ocean-coral-reef-tide",
    "name": "Coral Reef Tide",
    "category": "Ocean",
    "colors": [
      "#0077B6",
      "#0096C7",
      "#48CAE4",
      "#90E0EF",
      "#FFA69E"
    ],
    "tags": [
      "ocean",
      "coral reef tide"
    ]
  },
  {
    "id": "ocean-caribbean-calm",
    "name": "Caribbean Calm",
    "category": "Ocean",
    "colors": [
      "#05668D",
      "#028090",
      "#00A896",
      "#02C39A",
      "#F0F3F4"
    ],
    "tags": [
      "ocean",
      "caribbean calm"
    ]
  },
  {
    "id": "ocean-baltic-depths",
    "name": "Baltic Depths",
    "category": "Ocean",
    "colors": [
      "#0B1B2B",
      "#16324F",
      "#2A628F",
      "#3E92CC",
      "#D8EEFE"
    ],
    "tags": [
      "ocean",
      "baltic depths"
    ]
  },
  {
    "id": "ocean-bermuda-shallows",
    "name": "Bermuda Shallows",
    "category": "Ocean",
    "colors": [
      "#006994",
      "#0099B8",
      "#33CCCC",
      "#66E0E0",
      "#CCF5F5"
    ],
    "tags": [
      "ocean",
      "bermuda shallows"
    ]
  },
  {
    "id": "ocean-pacific-horizon",
    "name": "Pacific Horizon",
    "category": "Ocean",
    "colors": [
      "#1C3144",
      "#007E8A",
      "#3F88C5",
      "#A5C4D4",
      "#EBF2F7"
    ],
    "tags": [
      "ocean",
      "pacific horizon"
    ]
  },
  {
    "id": "ocean-glacial-lagoon",
    "name": "Glacial Lagoon",
    "category": "Ocean",
    "colors": [
      "#D0EFF5",
      "#A2DCE8",
      "#68C3D4",
      "#399AB0",
      "#1C6475"
    ],
    "tags": [
      "ocean",
      "glacial lagoon"
    ]
  },
  {
    "id": "ocean-arctic-fjord",
    "name": "Arctic Fjord",
    "category": "Ocean",
    "colors": [
      "#1A2C38",
      "#2F4F5F",
      "#577B8D",
      "#8FAFC0",
      "#DCE8EE"
    ],
    "tags": [
      "ocean",
      "arctic fjord"
    ]
  },
  {
    "id": "ocean-coastal-spray",
    "name": "Coastal Spray",
    "category": "Ocean",
    "colors": [
      "#E8F4F8",
      "#BDE0E8",
      "#73B6C6",
      "#358296",
      "#1A4D5B"
    ],
    "tags": [
      "ocean",
      "coastal spray"
    ]
  },
  {
    "id": "ocean-poseidon-crest",
    "name": "Poseidon Crest",
    "category": "Ocean",
    "colors": [
      "#03254C",
      "#1167B1",
      "#187BCD",
      "#2A9DF4",
      "#D0E1FD"
    ],
    "tags": [
      "ocean",
      "poseidon crest"
    ]
  },
  {
    "id": "ocean-manta-mariana",
    "name": "Manta Mariana",
    "category": "Ocean",
    "colors": [
      "#020813",
      "#0B1C33",
      "#16355C",
      "#2B5E99",
      "#578DD4"
    ],
    "tags": [
      "ocean",
      "manta mariana"
    ]
  },
  {
    "id": "ocean-tidal-foam",
    "name": "Tidal Foam",
    "category": "Ocean",
    "colors": [
      "#F0F8FA",
      "#CEE6ED",
      "#9CC6D4",
      "#5F99AB",
      "#2F6777"
    ],
    "tags": [
      "ocean",
      "tidal foam"
    ]
  },
  {
    "id": "ocean-turquoise-bay",
    "name": "Turquoise Bay",
    "category": "Ocean",
    "colors": [
      "#00A896",
      "#028090",
      "#05668D",
      "#99E2EC",
      "#E8F7F8"
    ],
    "tags": [
      "ocean",
      "turquoise bay"
    ]
  },
  {
    "id": "ocean-whale-sound",
    "name": "Whale Sound",
    "category": "Ocean",
    "colors": [
      "#12263A",
      "#06BCC1",
      "#C5D86D",
      "#F4D35E",
      "#EBF4F6"
    ],
    "tags": [
      "ocean",
      "whale sound"
    ]
  },
  {
    "id": "ocean-midnight-surf",
    "name": "Midnight Surf",
    "category": "Ocean",
    "colors": [
      "#001B2E",
      "#1D3F58",
      "#537692",
      "#B3C5D7",
      "#EAF0F6"
    ],
    "tags": [
      "ocean",
      "midnight surf"
    ]
  },
  {
    "id": "ocean-aegean-breeze",
    "name": "Aegean Breeze",
    "category": "Ocean",
    "colors": [
      "#005F73",
      "#0A9396",
      "#94D2BD",
      "#E9D8A6",
      "#EE9B00"
    ],
    "tags": [
      "ocean",
      "aegean breeze"
    ]
  },
  {
    "id": "ocean-seabed-drift",
    "name": "Seabed Drift",
    "category": "Ocean",
    "colors": [
      "#143642",
      "#0F8B8D",
      "#EC9A29",
      "#A8201A",
      "#DAD2D8"
    ],
    "tags": [
      "ocean",
      "seabed drift"
    ]
  },
  {
    "id": "ocean-azure-coast",
    "name": "Azure Coast",
    "category": "Ocean",
    "colors": [
      "#014F86",
      "#2A6F97",
      "#468FAF",
      "#61A5C2",
      "#A9D6E5"
    ],
    "tags": [
      "ocean",
      "azure coast"
    ]
  },
  {
    "id": "ocean-caspian-storm",
    "name": "Caspian Storm",
    "category": "Ocean",
    "colors": [
      "#1F3A44",
      "#385F6E",
      "#5B8C9E",
      "#8CB7C7",
      "#CCE2EB"
    ],
    "tags": [
      "ocean",
      "caspian storm"
    ]
  },
  {
    "id": "ocean-reef-pearl",
    "name": "Reef Pearl",
    "category": "Ocean",
    "colors": [
      "#E6F4F1",
      "#B8DFD8",
      "#7EBAB0",
      "#4B8B82",
      "#2A5D56"
    ],
    "tags": [
      "ocean",
      "reef pearl"
    ]
  },
  {
    "id": "ocean-bioluminescent",
    "name": "Bioluminescent",
    "category": "Ocean",
    "colors": [
      "#031926",
      "#468189",
      "#77ACA2",
      "#9DBEBB",
      "#F4E9CD"
    ],
    "tags": [
      "ocean",
      "bioluminescent"
    ]
  },
  {
    "id": "ocean-atlantis-gate",
    "name": "Atlantis Gate",
    "category": "Ocean",
    "colors": [
      "#042940",
      "#005C53",
      "#9FC131",
      "#DBF227",
      "#D6D58E"
    ],
    "tags": [
      "ocean",
      "atlantis gate"
    ]
  },
  {
    "id": "ocean-pelagic-vast",
    "name": "Pelagic Vast",
    "category": "Ocean",
    "colors": [
      "#061E38",
      "#0F3C68",
      "#1F639E",
      "#4B97D2",
      "#97C8F0"
    ],
    "tags": [
      "ocean",
      "pelagic vast"
    ]
  },
  {
    "id": "nature-alpine-meadow",
    "name": "Alpine Meadow",
    "category": "Nature",
    "colors": [
      "#2D5A27",
      "#49843D",
      "#88B04B",
      "#D0E1D4",
      "#E8EDE1"
    ],
    "tags": [
      "nature",
      "alpine meadow"
    ]
  },
  {
    "id": "nature-forest-canopy",
    "name": "Forest Canopy",
    "category": "Nature",
    "colors": [
      "#1B382B",
      "#2C5E43",
      "#528265",
      "#A5B598",
      "#E6EDE5"
    ],
    "tags": [
      "nature",
      "forest canopy"
    ]
  },
  {
    "id": "nature-wild-lavender",
    "name": "Wild Lavender",
    "category": "Nature",
    "colors": [
      "#5E548E",
      "#9F86C0",
      "#BE95C4",
      "#E0B1CB",
      "#859E78"
    ],
    "tags": [
      "nature",
      "wild lavender"
    ]
  },
  {
    "id": "nature-sunlit-willow",
    "name": "Sunlit Willow",
    "category": "Nature",
    "colors": [
      "#7A9A60",
      "#A2B970",
      "#C5D86D",
      "#F1F7ED",
      "#355227"
    ],
    "tags": [
      "nature",
      "sunlit willow"
    ]
  },
  {
    "id": "nature-highland-moss",
    "name": "Highland Moss",
    "category": "Nature",
    "colors": [
      "#3A5A40",
      "#588157",
      "#A3B18A",
      "#DAD7CD",
      "#344E41"
    ],
    "tags": [
      "nature",
      "highland moss"
    ]
  },
  {
    "id": "nature-mountain-spring",
    "name": "Mountain Spring",
    "category": "Nature",
    "colors": [
      "#134074",
      "#1D2D44",
      "#8DA9C4",
      "#EEF4F8",
      "#739E82"
    ],
    "tags": [
      "nature",
      "mountain spring"
    ]
  },
  {
    "id": "nature-lush-rainforest",
    "name": "Lush Rainforest",
    "category": "Nature",
    "colors": [
      "#0B3B24",
      "#1B6A45",
      "#3E9C6C",
      "#85D4A2",
      "#DCF5E5"
    ],
    "tags": [
      "nature",
      "lush rainforest"
    ]
  },
  {
    "id": "nature-sunflower-patch",
    "name": "Sunflower Patch",
    "category": "Nature",
    "colors": [
      "#4E3D28",
      "#D49B2A",
      "#F7B733",
      "#FC4A1A",
      "#6B8E23"
    ],
    "tags": [
      "nature",
      "sunflower patch"
    ]
  },
  {
    "id": "nature-riverbed-stone",
    "name": "Riverbed Stone",
    "category": "Nature",
    "colors": [
      "#3C4A3E",
      "#6B7A6C",
      "#A8B3A7",
      "#D7DDD6",
      "#BFA588"
    ],
    "tags": [
      "nature",
      "riverbed stone"
    ]
  },
  {
    "id": "nature-orchard-morning",
    "name": "Orchard Morning",
    "category": "Nature",
    "colors": [
      "#5B7065",
      "#8C9A86",
      "#C4CCA8",
      "#EDEEC9",
      "#E07A5F"
    ],
    "tags": [
      "nature",
      "orchard morning"
    ]
  },
  {
    "id": "nature-wild-jasmine",
    "name": "Wild Jasmine",
    "category": "Nature",
    "colors": [
      "#3E5641",
      "#658B6F",
      "#A2C4A9",
      "#EAF2EB",
      "#F9F5EC"
    ],
    "tags": [
      "nature",
      "wild jasmine"
    ]
  },
  {
    "id": "nature-valley-mist",
    "name": "Valley Mist",
    "category": "Nature",
    "colors": [
      "#3D5A5B",
      "#607E7E",
      "#8EA6A6",
      "#C8D5D5",
      "#EEF2F2"
    ],
    "tags": [
      "nature",
      "valley mist"
    ]
  },
  {
    "id": "nature-prairie-grass",
    "name": "Prairie Grass",
    "category": "Nature",
    "colors": [
      "#556B2F",
      "#8F9779",
      "#C3B091",
      "#E6DBBF",
      "#8B5A2B"
    ],
    "tags": [
      "nature",
      "prairie grass"
    ]
  },
  {
    "id": "nature-fern-gully",
    "name": "Fern Gully",
    "category": "Nature",
    "colors": [
      "#1E3F20",
      "#2E5D32",
      "#4B8B50",
      "#7BC481",
      "#CEF0D1"
    ],
    "tags": [
      "nature",
      "fern gully"
    ]
  },
  {
    "id": "nature-glade-sunlight",
    "name": "Glade Sunlight",
    "category": "Nature",
    "colors": [
      "#385E38",
      "#5E8C5E",
      "#8EBA8E",
      "#D9ECD9",
      "#F9E79F"
    ],
    "tags": [
      "nature",
      "glade sunlight"
    ]
  },
  {
    "id": "nature-cedar-woodland",
    "name": "Cedar Woodland",
    "category": "Nature",
    "colors": [
      "#283618",
      "#606C38",
      "#DDA15E",
      "#BC6C25",
      "#FEFAE0"
    ],
    "tags": [
      "nature",
      "cedar woodland"
    ]
  },
  {
    "id": "nature-heather-moorland",
    "name": "Heather Moorland",
    "category": "Nature",
    "colors": [
      "#4A3B4E",
      "#775878",
      "#A284A3",
      "#D6C7D6",
      "#607456"
    ],
    "tags": [
      "nature",
      "heather moorland"
    ]
  },
  {
    "id": "nature-bamboo-sanctuary",
    "name": "Bamboo Sanctuary",
    "category": "Nature",
    "colors": [
      "#274730",
      "#487346",
      "#7CA974",
      "#BBD7B3",
      "#EFF7EC"
    ],
    "tags": [
      "nature",
      "bamboo sanctuary"
    ]
  },
  {
    "id": "nature-mushroom-forage",
    "name": "Mushroom Forage",
    "category": "Nature",
    "colors": [
      "#483C32",
      "#7E6B5A",
      "#B5A391",
      "#E0D6CB",
      "#8A9A5B"
    ],
    "tags": [
      "nature",
      "mushroom forage"
    ]
  },
  {
    "id": "nature-wild-thistle",
    "name": "Wild Thistle",
    "category": "Nature",
    "colors": [
      "#4B4453",
      "#845EC2",
      "#D65DB1",
      "#FF6F91",
      "#658968"
    ],
    "tags": [
      "nature",
      "wild thistle"
    ]
  },
  {
    "id": "nature-canyon-stream",
    "name": "Canyon Stream",
    "category": "Nature",
    "colors": [
      "#264653",
      "#2A9D8F",
      "#E9C46A",
      "#F4A261",
      "#E76F51"
    ],
    "tags": [
      "nature",
      "canyon stream"
    ]
  },
  {
    "id": "nature-glacier-flora",
    "name": "Glacier Flora",
    "category": "Nature",
    "colors": [
      "#2C4A52",
      "#537072",
      "#8E9B97",
      "#F4EBDB",
      "#A8C2B8"
    ],
    "tags": [
      "nature",
      "glacier flora"
    ]
  },
  {
    "id": "nature-bramble-berry",
    "name": "Bramble Berry",
    "category": "Nature",
    "colors": [
      "#2E1C2B",
      "#4A1942",
      "#893168",
      "#426A5A",
      "#EAEAEA"
    ],
    "tags": [
      "nature",
      "bramble berry"
    ]
  },
  {
    "id": "nature-morning-dew",
    "name": "Morning Dew",
    "category": "Nature",
    "colors": [
      "#1C3B2B",
      "#3E6B52",
      "#72A385",
      "#B8D8C3",
      "#EAF5EE"
    ],
    "tags": [
      "nature",
      "morning dew"
    ]
  },
  {
    "id": "sunset-golden-twilight",
    "name": "Golden Twilight",
    "category": "Sunset",
    "colors": [
      "#2E1C44",
      "#78286E",
      "#C23E5E",
      "#F37843",
      "#FFC355"
    ],
    "tags": [
      "sunset",
      "golden twilight"
    ]
  },
  {
    "id": "sunset-pacific-sunset",
    "name": "Pacific Sunset",
    "category": "Sunset",
    "colors": [
      "#1D2D50",
      "#133B5C",
      "#6867AC",
      "#CE7777",
      "#E8C4C4"
    ],
    "tags": [
      "sunset",
      "pacific sunset"
    ]
  },
  {
    "id": "sunset-mojave-horizon",
    "name": "Mojave Horizon",
    "category": "Sunset",
    "colors": [
      "#3F1D38",
      "#782A54",
      "#BC4749",
      "#F4845F",
      "#F7BC66"
    ],
    "tags": [
      "sunset",
      "mojave horizon"
    ]
  },
  {
    "id": "sunset-amber-dusk",
    "name": "Amber Dusk",
    "category": "Sunset",
    "colors": [
      "#1F1135",
      "#4C1C5C",
      "#8A2E6E",
      "#CF5552",
      "#F79D65"
    ],
    "tags": [
      "sunset",
      "amber dusk"
    ]
  },
  {
    "id": "sunset-sahara-glow",
    "name": "Sahara Glow",
    "category": "Sunset",
    "colors": [
      "#3A0842",
      "#671353",
      "#A1285E",
      "#E05D58",
      "#F9A26C"
    ],
    "tags": [
      "sunset",
      "sahara glow"
    ]
  },
  {
    "id": "sunset-venice-evening",
    "name": "Venice Evening",
    "category": "Sunset",
    "colors": [
      "#281E32",
      "#5A3250",
      "#964860",
      "#D6726B",
      "#F5AF89"
    ],
    "tags": [
      "sunset",
      "venice evening"
    ]
  },
  {
    "id": "sunset-crimson-sundown",
    "name": "Crimson Sundown",
    "category": "Sunset",
    "colors": [
      "#1A0C1E",
      "#4B1238",
      "#8B1E3F",
      "#C53D3A",
      "#F48C42"
    ],
    "tags": [
      "sunset",
      "crimson sundown"
    ]
  },
  {
    "id": "sunset-himalayan-afterglow",
    "name": "Himalayan Afterglow",
    "category": "Sunset",
    "colors": [
      "#18122B",
      "#393053",
      "#635985",
      "#E68369",
      "#FFDBA4"
    ],
    "tags": [
      "sunset",
      "himalayan afterglow"
    ]
  },
  {
    "id": "sunset-santorini-dusk",
    "name": "Santorini Dusk",
    "category": "Sunset",
    "colors": [
      "#1B263B",
      "#415A77",
      "#E0A96D",
      "#EB6841",
      "#EDC951"
    ],
    "tags": [
      "sunset",
      "santorini dusk"
    ]
  },
  {
    "id": "sunset-flamingo-sky",
    "name": "Flamingo Sky",
    "category": "Sunset",
    "colors": [
      "#341539",
      "#682C62",
      "#AC4B82",
      "#EA7B97",
      "#FDC7B8"
    ],
    "tags": [
      "sunset",
      "flamingo sky"
    ]
  },
  {
    "id": "sunset-desert-mirage",
    "name": "Desert Mirage",
    "category": "Sunset",
    "colors": [
      "#2F1832",
      "#642948",
      "#A24354",
      "#DB6E58",
      "#F3AC6C"
    ],
    "tags": [
      "sunset",
      "desert mirage"
    ]
  },
  {
    "id": "sunset-laguna-horizon",
    "name": "Laguna Horizon",
    "category": "Sunset",
    "colors": [
      "#1F2041",
      "#4B3F72",
      "#FFC857",
      "#119DA4",
      "#19647E"
    ],
    "tags": [
      "sunset",
      "laguna horizon"
    ]
  },
  {
    "id": "sunset-tuscan-sundown",
    "name": "Tuscan Sundown",
    "category": "Sunset",
    "colors": [
      "#3D1B28",
      "#6F2C3F",
      "#A74B4E",
      "#DE7A5A",
      "#F6B676"
    ],
    "tags": [
      "sunset",
      "tuscan sundown"
    ]
  },
  {
    "id": "sunset-sedona-blaze",
    "name": "Sedona Blaze",
    "category": "Sunset",
    "colors": [
      "#2E141F",
      "#5F1F2B",
      "#9D3534",
      "#DC5E38",
      "#FCA557"
    ],
    "tags": [
      "sunset",
      "sedona blaze"
    ]
  },
  {
    "id": "sunset-violet-sunset",
    "name": "Violet Sunset",
    "category": "Sunset",
    "colors": [
      "#1D1128",
      "#3C1642",
      "#6E2554",
      "#AF3E4D",
      "#E2847A"
    ],
    "tags": [
      "sunset",
      "violet sunset"
    ]
  },
  {
    "id": "sunset-tahiti-evening",
    "name": "Tahiti Evening",
    "category": "Sunset",
    "colors": [
      "#181938",
      "#422A5E",
      "#7E3878",
      "#C35478",
      "#F48E74"
    ],
    "tags": [
      "sunset",
      "tahiti evening"
    ]
  },
  {
    "id": "sunset-cape-town-flare",
    "name": "Cape Town Flare",
    "category": "Sunset",
    "colors": [
      "#191825",
      "#4E31AA",
      "#A14EBF",
      "#F765A3",
      "#FFA3BE"
    ],
    "tags": [
      "sunset",
      "cape town flare"
    ]
  },
  {
    "id": "sunset-maui-sunset",
    "name": "Maui Sunset",
    "category": "Sunset",
    "colors": [
      "#211134",
      "#551B5C",
      "#942B6A",
      "#D44D61",
      "#FBA368"
    ],
    "tags": [
      "sunset",
      "maui sunset"
    ]
  },
  {
    "id": "sunset-mesa-shadows",
    "name": "Mesa Shadows",
    "category": "Sunset",
    "colors": [
      "#2D132C",
      "#801336",
      "#C72C41",
      "#EE4540",
      "#F7A072"
    ],
    "tags": [
      "sunset",
      "mesa shadows"
    ]
  },
  {
    "id": "sunset-acapulco-gold",
    "name": "Acapulco Gold",
    "category": "Sunset",
    "colors": [
      "#2A1A4E",
      "#5B2C6F",
      "#9B3B6D",
      "#DC5858",
      "#FBB040"
    ],
    "tags": [
      "sunset",
      "acapulco gold"
    ]
  },
  {
    "id": "sunset-canyon-twilight",
    "name": "Canyon Twilight",
    "category": "Sunset",
    "colors": [
      "#2B1B17",
      "#5E261A",
      "#963D22",
      "#CE6738",
      "#ECA366"
    ],
    "tags": [
      "sunset",
      "canyon twilight"
    ]
  },
  {
    "id": "sunset-firefly-meadow",
    "name": "Firefly Meadow",
    "category": "Sunset",
    "colors": [
      "#1C1D3B",
      "#383E6E",
      "#6B5B95",
      "#FEB236",
      "#FF7B25"
    ],
    "tags": [
      "sunset",
      "firefly meadow"
    ]
  },
  {
    "id": "sunset-key-west-glow",
    "name": "Key West Glow",
    "category": "Sunset",
    "colors": [
      "#1A1423",
      "#372549",
      "#774C60",
      "#B75D69",
      "#EACDC2"
    ],
    "tags": [
      "sunset",
      "key west glow"
    ]
  },
  {
    "id": "sunset-ibiza-solstice",
    "name": "Ibiza Solstice",
    "category": "Sunset",
    "colors": [
      "#2C1654",
      "#5F2272",
      "#A2397B",
      "#E1626C",
      "#F8A87C"
    ],
    "tags": [
      "sunset",
      "ibiza solstice"
    ]
  },
  {
    "id": "earth-terracotta-clay",
    "name": "Terracotta Clay",
    "category": "Earth",
    "colors": [
      "#4A2E18",
      "#8C4623",
      "#C86D3C",
      "#E2A169",
      "#F4DFCB"
    ],
    "tags": [
      "earth",
      "terracotta clay"
    ]
  },
  {
    "id": "earth-desert-sand",
    "name": "Desert Sand",
    "category": "Earth",
    "colors": [
      "#594A38",
      "#8A795D",
      "#B5A886",
      "#D6CEB4",
      "#557B83"
    ],
    "tags": [
      "earth",
      "desert sand"
    ]
  },
  {
    "id": "earth-raw-ochre",
    "name": "Raw Ochre",
    "category": "Earth",
    "colors": [
      "#3D2B1F",
      "#7A5230",
      "#B57C3D",
      "#E0A96D",
      "#F4DEC3"
    ],
    "tags": [
      "earth",
      "raw ochre"
    ]
  },
  {
    "id": "earth-sienna-ridge",
    "name": "Sienna Ridge",
    "category": "Earth",
    "colors": [
      "#3A1F13",
      "#6E3A20",
      "#A85A32",
      "#D68551",
      "#F0B88F"
    ],
    "tags": [
      "earth",
      "sienna ridge"
    ]
  },
  {
    "id": "earth-warm-adobe",
    "name": "Warm Adobe",
    "category": "Earth",
    "colors": [
      "#4E2E1E",
      "#7C4B32",
      "#B0704D",
      "#D99B75",
      "#F5CCA0"
    ],
    "tags": [
      "earth",
      "warm adobe"
    ]
  },
  {
    "id": "earth-river-mud",
    "name": "River Mud",
    "category": "Earth",
    "colors": [
      "#2E251E",
      "#534337",
      "#7D6A5A",
      "#A99684",
      "#D4C7B8"
    ],
    "tags": [
      "earth",
      "river mud"
    ]
  },
  {
    "id": "earth-umber-glaze",
    "name": "Umber Glaze",
    "category": "Earth",
    "colors": [
      "#32221A",
      "#5A3D2E",
      "#875F48",
      "#BA8F72",
      "#E2C4AE"
    ],
    "tags": [
      "earth",
      "umber glaze"
    ]
  },
  {
    "id": "earth-sediment-layer",
    "name": "Sediment Layer",
    "category": "Earth",
    "colors": [
      "#3E3228",
      "#675443",
      "#967F68",
      "#C3B097",
      "#EBE0D0"
    ],
    "tags": [
      "earth",
      "sediment layer"
    ]
  },
  {
    "id": "earth-sandstone-bluff",
    "name": "Sandstone Bluff",
    "category": "Earth",
    "colors": [
      "#4F3829",
      "#7E5A42",
      "#B18663",
      "#DCB491",
      "#F7E3CF"
    ],
    "tags": [
      "earth",
      "sandstone bluff"
    ]
  },
  {
    "id": "earth-cracked-terra",
    "name": "Cracked Terra",
    "category": "Earth",
    "colors": [
      "#3B1E14",
      "#683624",
      "#99533B",
      "#C97A5E",
      "#EBB097"
    ],
    "tags": [
      "earth",
      "cracked terra"
    ]
  },
  {
    "id": "earth-dry-savanna",
    "name": "Dry Savanna",
    "category": "Earth",
    "colors": [
      "#42392E",
      "#6E5F4B",
      "#A08E72",
      "#CEBF9E",
      "#F0E5CB"
    ],
    "tags": [
      "earth",
      "dry savanna"
    ]
  },
  {
    "id": "earth-kalahari-dust",
    "name": "Kalahari Dust",
    "category": "Earth",
    "colors": [
      "#482D20",
      "#784C37",
      "#A97255",
      "#D49D7E",
      "#F5CDB5"
    ],
    "tags": [
      "earth",
      "kalahari dust"
    ]
  },
  {
    "id": "earth-fossil-stone",
    "name": "Fossil Stone",
    "category": "Earth",
    "colors": [
      "#34312D",
      "#5E574E",
      "#8F8577",
      "#C0B7A8",
      "#EBE5DA"
    ],
    "tags": [
      "earth",
      "fossil stone"
    ]
  },
  {
    "id": "earth-lichen-rock",
    "name": "Lichen Rock",
    "category": "Earth",
    "colors": [
      "#2F352E",
      "#525B4F",
      "#7E8A79",
      "#B0BBAA",
      "#DFE6DB"
    ],
    "tags": [
      "earth",
      "lichen rock"
    ]
  },
  {
    "id": "earth-clay-pot",
    "name": "Clay Pot",
    "category": "Earth",
    "colors": [
      "#3E2016",
      "#6C3827",
      "#A0593F",
      "#CE8465",
      "#ECC0A8"
    ],
    "tags": [
      "earth",
      "clay pot"
    ]
  },
  {
    "id": "earth-burnt-bark",
    "name": "Burnt Bark",
    "category": "Earth",
    "colors": [
      "#241913",
      "#473024",
      "#70503D",
      "#A1785E",
      "#CCA88E"
    ],
    "tags": [
      "earth",
      "burnt bark"
    ]
  },
  {
    "id": "earth-dune-crest",
    "name": "Dune Crest",
    "category": "Earth",
    "colors": [
      "#4C3F33",
      "#776452",
      "#A69078",
      "#D1BFA8",
      "#F3EADF"
    ],
    "tags": [
      "earth",
      "dune crest"
    ]
  },
  {
    "id": "earth-peat-bog",
    "name": "Peat Bog",
    "category": "Earth",
    "colors": [
      "#221D18",
      "#3F352C",
      "#645447",
      "#8E7B6C",
      "#BDAC9E"
    ],
    "tags": [
      "earth",
      "peat bog"
    ]
  },
  {
    "id": "earth-rooibos-steep",
    "name": "Rooibos Steep",
    "category": "Earth",
    "colors": [
      "#441F16",
      "#723624",
      "#A65337",
      "#D47E5B",
      "#F1B296"
    ],
    "tags": [
      "earth",
      "rooibos steep"
    ]
  },
  {
    "id": "earth-loam-soil",
    "name": "Loam Soil",
    "category": "Earth",
    "colors": [
      "#271E18",
      "#45352A",
      "#6B5443",
      "#987B64",
      "#C5A992"
    ],
    "tags": [
      "earth",
      "loam soil"
    ]
  },
  {
    "id": "earth-pebble-beach",
    "name": "Pebble Beach",
    "category": "Earth",
    "colors": [
      "#363432",
      "#5B5752",
      "#86817B",
      "#B4AEA6",
      "#E2DDD6"
    ],
    "tags": [
      "earth",
      "pebble beach"
    ]
  },
  {
    "id": "earth-granite-vein",
    "name": "Granite Vein",
    "category": "Earth",
    "colors": [
      "#2C2B2A",
      "#4F4C49",
      "#7B7772",
      "#ABA69F",
      "#DAD5CE"
    ],
    "tags": [
      "earth",
      "granite vein"
    ]
  },
  {
    "id": "earth-tinderbox",
    "name": "Tinderbox",
    "category": "Earth",
    "colors": [
      "#3D2517",
      "#6B422A",
      "#A06642",
      "#D19165",
      "#ECC4A1"
    ],
    "tags": [
      "earth",
      "tinderbox"
    ]
  },
  {
    "id": "earth-earthy-hearth",
    "name": "Earthy Hearth",
    "category": "Earth",
    "colors": [
      "#331E17",
      "#5C3729",
      "#8C5641",
      "#BC7B61",
      "#E5A992"
    ],
    "tags": [
      "earth",
      "earthy hearth"
    ]
  },
  {
    "id": "minimal-slate-balance",
    "name": "Slate Balance",
    "category": "Minimal",
    "colors": [
      "#1E293B",
      "#475569",
      "#94A3B8",
      "#E2E8F0",
      "#F8FAFC"
    ],
    "tags": [
      "minimal",
      "slate balance"
    ]
  },
  {
    "id": "minimal-warm-architecture",
    "name": "Warm Architecture",
    "category": "Minimal",
    "colors": [
      "#292524",
      "#57534E",
      "#A8A29E",
      "#E7E5E4",
      "#FAF8F5"
    ],
    "tags": [
      "minimal",
      "warm architecture"
    ]
  },
  {
    "id": "minimal-zinc-snow",
    "name": "Zinc & Snow",
    "category": "Minimal",
    "colors": [
      "#18181B",
      "#3F3F46",
      "#71717A",
      "#D4D4D8",
      "#FAFAFA"
    ],
    "tags": [
      "minimal",
      "zinc & snow"
    ]
  },
  {
    "id": "minimal-nordic-clean",
    "name": "Nordic Clean",
    "category": "Minimal",
    "colors": [
      "#1A1D20",
      "#3E444A",
      "#727B84",
      "#C4CBD2",
      "#F4F6F8"
    ],
    "tags": [
      "minimal",
      "nordic clean"
    ]
  },
  {
    "id": "minimal-studio-ash",
    "name": "Studio Ash",
    "category": "Minimal",
    "colors": [
      "#212529",
      "#495057",
      "#6C757D",
      "#CED4DA",
      "#F8F9FA"
    ],
    "tags": [
      "minimal",
      "studio ash"
    ]
  },
  {
    "id": "minimal-cool-neutral",
    "name": "Cool Neutral",
    "category": "Minimal",
    "colors": [
      "#111827",
      "#374151",
      "#6B7280",
      "#D1D5DB",
      "#F9FAFB"
    ],
    "tags": [
      "minimal",
      "cool neutral"
    ]
  },
  {
    "id": "minimal-paper-contrast",
    "name": "Paper Contrast",
    "category": "Minimal",
    "colors": [
      "#121212",
      "#333333",
      "#777777",
      "#CCCCCC",
      "#FFFFFF"
    ],
    "tags": [
      "minimal",
      "paper contrast"
    ]
  },
  {
    "id": "minimal-concrete-form",
    "name": "Concrete Form",
    "category": "Minimal",
    "colors": [
      "#2B2D2F",
      "#4A4E51",
      "#798086",
      "#BFC5CA",
      "#EDF0F2"
    ],
    "tags": [
      "minimal",
      "concrete form"
    ]
  },
  {
    "id": "minimal-charcoal-line",
    "name": "Charcoal Line",
    "category": "Minimal",
    "colors": [
      "#16191D",
      "#363C44",
      "#66707E",
      "#ADB7C4",
      "#EEF2F6"
    ],
    "tags": [
      "minimal",
      "charcoal line"
    ]
  },
  {
    "id": "minimal-silent-fog",
    "name": "Silent Fog",
    "category": "Minimal",
    "colors": [
      "#222629",
      "#474B4F",
      "#6B6E70",
      "#86C232",
      "#F1F2F4"
    ],
    "tags": [
      "minimal",
      "silent fog"
    ]
  },
  {
    "id": "minimal-bauhaus-gray",
    "name": "Bauhaus Gray",
    "category": "Minimal",
    "colors": [
      "#1B1C1E",
      "#3A3D40",
      "#6B7075",
      "#AEB4BA",
      "#EFF1F3"
    ],
    "tags": [
      "minimal",
      "bauhaus gray"
    ]
  },
  {
    "id": "minimal-titanium-pure",
    "name": "Titanium Pure",
    "category": "Minimal",
    "colors": [
      "#1C1E21",
      "#40444B",
      "#6D737D",
      "#A9B0BC",
      "#F0F3F7"
    ],
    "tags": [
      "minimal",
      "titanium pure"
    ]
  },
  {
    "id": "minimal-monolith-soft",
    "name": "Monolith Soft",
    "category": "Minimal",
    "colors": [
      "#14171A",
      "#394046",
      "#657786",
      "#AAB8C2",
      "#F5F8FA"
    ],
    "tags": [
      "minimal",
      "monolith soft"
    ]
  },
  {
    "id": "minimal-porcelain-grid",
    "name": "Porcelain Grid",
    "category": "Minimal",
    "colors": [
      "#1F2328",
      "#424A53",
      "#6E7781",
      "#AFB8C1",
      "#F6F8FA"
    ],
    "tags": [
      "minimal",
      "porcelain grid"
    ]
  },
  {
    "id": "minimal-graphite-note",
    "name": "Graphite Note",
    "category": "Minimal",
    "colors": [
      "#202124",
      "#3C4043",
      "#5F6368",
      "#BDC1C6",
      "#F1F3F4"
    ],
    "tags": [
      "minimal",
      "graphite note"
    ]
  },
  {
    "id": "minimal-calm-onyx",
    "name": "Calm Onyx",
    "category": "Minimal",
    "colors": [
      "#191A1C",
      "#373A3E",
      "#646970",
      "#9CA3AF",
      "#F3F4F6"
    ],
    "tags": [
      "minimal",
      "calm onyx"
    ]
  },
  {
    "id": "minimal-minimal-sand",
    "name": "Minimal Sand",
    "category": "Minimal",
    "colors": [
      "#262522",
      "#4B4843",
      "#78736B",
      "#B4AEA4",
      "#F4F2EE"
    ],
    "tags": [
      "minimal",
      "minimal sand"
    ]
  },
  {
    "id": "minimal-pencil-lead",
    "name": "Pencil Lead",
    "category": "Minimal",
    "colors": [
      "#1B1B1C",
      "#39393C",
      "#64646A",
      "#9D9DA6",
      "#E9E9EC"
    ],
    "tags": [
      "minimal",
      "pencil lead"
    ]
  },
  {
    "id": "minimal-whiteboard-fine",
    "name": "Whiteboard Fine",
    "category": "Minimal",
    "colors": [
      "#17191C",
      "#3A3F47",
      "#697280",
      "#A8B2C1",
      "#F4F6F9"
    ],
    "tags": [
      "minimal",
      "whiteboard fine"
    ]
  },
  {
    "id": "minimal-alabaster-base",
    "name": "Alabaster Base",
    "category": "Minimal",
    "colors": [
      "#232426",
      "#484B4F",
      "#797D84",
      "#B6BAC2",
      "#F6F7FA"
    ],
    "tags": [
      "minimal",
      "alabaster base"
    ]
  },
  {
    "id": "minimal-gallery-wall",
    "name": "Gallery Wall",
    "category": "Minimal",
    "colors": [
      "#1E1F21",
      "#424549",
      "#70757C",
      "#A8ADB5",
      "#EEEEF2"
    ],
    "tags": [
      "minimal",
      "gallery wall"
    ]
  },
  {
    "id": "minimal-precision-slate",
    "name": "Precision Slate",
    "category": "Minimal",
    "colors": [
      "#192026",
      "#35424D",
      "#5B6F7F",
      "#97AAB8",
      "#EAF0F4"
    ],
    "tags": [
      "minimal",
      "precision slate"
    ]
  },
  {
    "id": "minimal-veneer-calm",
    "name": "Veneer Calm",
    "category": "Minimal",
    "colors": [
      "#252321",
      "#4D4743",
      "#7F766F",
      "#BAAEA4",
      "#F5EFE9"
    ],
    "tags": [
      "minimal",
      "veneer calm"
    ]
  },
  {
    "id": "minimal-blank-canvas",
    "name": "Blank Canvas",
    "category": "Minimal",
    "colors": [
      "#151618",
      "#383B40",
      "#6A6F78",
      "#A6ACB5",
      "#FCFCFD"
    ],
    "tags": [
      "minimal",
      "blank canvas"
    ]
  },
  {
    "id": "retro-70s-vinyl-cafe",
    "name": "70s Vinyl Cafe",
    "category": "Retro",
    "colors": [
      "#4A2810",
      "#8F3D17",
      "#CF6D17",
      "#E0A838",
      "#5E7461"
    ],
    "tags": [
      "retro",
      "70s vinyl cafe"
    ]
  },
  {
    "id": "retro-vintage-diner",
    "name": "Vintage Diner",
    "category": "Retro",
    "colors": [
      "#B83B5E",
      "#F08A5D",
      "#F9ED69",
      "#6A2C70",
      "#E3FDFD"
    ],
    "tags": [
      "retro",
      "vintage diner"
    ]
  },
  {
    "id": "retro-cassette-tape",
    "name": "Cassette Tape",
    "category": "Retro",
    "colors": [
      "#2B2B2B",
      "#E05A47",
      "#ECA136",
      "#3D8B8B",
      "#F3ECD8"
    ],
    "tags": [
      "retro",
      "cassette tape"
    ]
  },
  {
    "id": "retro-roller-skate",
    "name": "Roller Skate",
    "category": "Retro",
    "colors": [
      "#FF6F59",
      "#254441",
      "#43AA8B",
      "#B2B09B",
      "#EF3054"
    ],
    "tags": [
      "retro",
      "roller skate"
    ]
  },
  {
    "id": "retro-mustard-velvet",
    "name": "Mustard Velvet",
    "category": "Retro",
    "colors": [
      "#3A2618",
      "#69381E",
      "#B37D28",
      "#DCAE42",
      "#EFE0B9"
    ],
    "tags": [
      "retro",
      "mustard velvet"
    ]
  },
  {
    "id": "retro-80s-arcade",
    "name": "80s Arcade",
    "category": "Retro",
    "colors": [
      "#1A102F",
      "#E71D36",
      "#FF9F1C",
      "#2EC4B6",
      "#FDFFFC"
    ],
    "tags": [
      "retro",
      "80s arcade"
    ]
  },
  {
    "id": "retro-motel-neon",
    "name": "Motel Neon",
    "category": "Retro",
    "colors": [
      "#2E1F27",
      "#E83151",
      "#F45B69",
      "#FFE66D",
      "#4F6D7A"
    ],
    "tags": [
      "retro",
      "motel neon"
    ]
  },
  {
    "id": "retro-polaroid-nostalgia",
    "name": "Polaroid Nostalgia",
    "category": "Retro",
    "colors": [
      "#3B322C",
      "#D84A38",
      "#EE8D32",
      "#F7C644",
      "#EAE0D0"
    ],
    "tags": [
      "retro",
      "polaroid nostalgia"
    ]
  },
  {
    "id": "retro-midcentury-teal",
    "name": "Midcentury Teal",
    "category": "Retro",
    "colors": [
      "#264653",
      "#2A9D8F",
      "#E76245",
      "#E9C46A",
      "#F4A261"
    ],
    "tags": [
      "retro",
      "midcentury teal"
    ]
  },
  {
    "id": "retro-pop-soda",
    "name": "Pop Soda",
    "category": "Retro",
    "colors": [
      "#E63946",
      "#F1FAEE",
      "#A8DADC",
      "#457B9D",
      "#1D3557"
    ],
    "tags": [
      "retro",
      "pop soda"
    ]
  },
  {
    "id": "retro-groovy-sunset",
    "name": "Groovy Sunset",
    "category": "Retro",
    "colors": [
      "#3E1F47",
      "#762858",
      "#BA385C",
      "#E46747",
      "#FFA047"
    ],
    "tags": [
      "retro",
      "groovy sunset"
    ]
  },
  {
    "id": "retro-boombox-beat",
    "name": "Boombox Beat",
    "category": "Retro",
    "colors": [
      "#212121",
      "#FF0055",
      "#00E5FF",
      "#FFE600",
      "#F5F5F5"
    ],
    "tags": [
      "retro",
      "boombox beat"
    ]
  },
  {
    "id": "retro-campground-76",
    "name": "Campground 76",
    "category": "Retro",
    "colors": [
      "#2F3E2E",
      "#5D4037",
      "#D48C46",
      "#E9C46A",
      "#EAE6DF"
    ],
    "tags": [
      "retro",
      "campground 76"
    ]
  },
  {
    "id": "retro-drive-in-movie",
    "name": "Drive-In Movie",
    "category": "Retro",
    "colors": [
      "#1C1E24",
      "#8E2800",
      "#B64926",
      "#FFB03B",
      "#FFF0A5"
    ],
    "tags": [
      "retro",
      "drive-in movie"
    ]
  },
  {
    "id": "retro-vintage-bowling",
    "name": "Vintage Bowling",
    "category": "Retro",
    "colors": [
      "#223843",
      "#D77A61",
      "#EFF1F3",
      "#DBD3D8",
      "#D8B4A0"
    ],
    "tags": [
      "retro",
      "vintage bowling"
    ]
  },
  {
    "id": "retro-retro-record",
    "name": "Retro Record",
    "category": "Retro",
    "colors": [
      "#191919",
      "#C83E4D",
      "#F4B860",
      "#4A7C59",
      "#F5EBE6"
    ],
    "tags": [
      "retro",
      "retro record"
    ]
  },
  {
    "id": "retro-orange-peel-72",
    "name": "Orange Peel 72",
    "category": "Retro",
    "colors": [
      "#442208",
      "#8B4513",
      "#D35400",
      "#F39C12",
      "#FDEBD0"
    ],
    "tags": [
      "retro",
      "orange peel 72"
    ]
  },
  {
    "id": "retro-old-comic-book",
    "name": "Old Comic Book",
    "category": "Retro",
    "colors": [
      "#1B1B1E",
      "#DF2935",
      "#E6C229",
      "#0075C4",
      "#F4F4F6"
    ],
    "tags": [
      "retro",
      "old comic book"
    ]
  },
  {
    "id": "retro-velvet-lounge",
    "name": "Velvet Lounge",
    "category": "Retro",
    "colors": [
      "#38182F",
      "#5E2245",
      "#983359",
      "#D15865",
      "#ECC19C"
    ],
    "tags": [
      "retro",
      "velvet lounge"
    ]
  },
  {
    "id": "retro-surfside-64",
    "name": "Surfside 64",
    "category": "Retro",
    "colors": [
      "#0E3854",
      "#2B6E8C",
      "#E47942",
      "#F4B066",
      "#F8E9D2"
    ],
    "tags": [
      "retro",
      "surfside 64"
    ]
  },
  {
    "id": "retro-vintage-radio",
    "name": "Vintage Radio",
    "category": "Retro",
    "colors": [
      "#30241A",
      "#5E412F",
      "#9E6B48",
      "#CE9E6F",
      "#F0DBC5"
    ],
    "tags": [
      "retro",
      "vintage radio"
    ]
  },
  {
    "id": "retro-grandma-floral",
    "name": "Grandma Floral",
    "category": "Retro",
    "colors": [
      "#3C4E3D",
      "#7B9075",
      "#D2919A",
      "#E8C3C8",
      "#FBF2F3"
    ],
    "tags": [
      "retro",
      "grandma floral"
    ]
  },
  {
    "id": "retro-psychedelic-dream",
    "name": "Psychedelic Dream",
    "category": "Retro",
    "colors": [
      "#400036",
      "#9B1D56",
      "#DF405A",
      "#FF7C43",
      "#FFA600"
    ],
    "tags": [
      "retro",
      "psychedelic dream"
    ]
  },
  {
    "id": "retro-woodstock-festival",
    "name": "Woodstock Festival",
    "category": "Retro",
    "colors": [
      "#382414",
      "#7D3C1B",
      "#C9652A",
      "#E3A857",
      "#F2DEC4"
    ],
    "tags": [
      "retro",
      "woodstock festival"
    ]
  },
  {
    "id": "neon-electric-tokyo",
    "name": "Electric Tokyo",
    "category": "Neon",
    "colors": [
      "#0D0221",
      "#0F084B",
      "#26408B",
      "#00F0FF",
      "#FF0055"
    ],
    "tags": [
      "neon",
      "electric tokyo"
    ]
  },
  {
    "id": "neon-synthwave-glow",
    "name": "Synthwave Glow",
    "category": "Neon",
    "colors": [
      "#120136",
      "#035AA6",
      "#40BAD5",
      "#FC3D99",
      "#FFE600"
    ],
    "tags": [
      "neon",
      "synthwave glow"
    ]
  },
  {
    "id": "neon-cyber-laser",
    "name": "Cyber Laser",
    "category": "Neon",
    "colors": [
      "#0A0017",
      "#3F0071",
      "#9900F0",
      "#00F5FF",
      "#FF007F"
    ],
    "tags": [
      "neon",
      "cyber laser"
    ]
  },
  {
    "id": "neon-matrix-pulse",
    "name": "Matrix Pulse",
    "category": "Neon",
    "colors": [
      "#051008",
      "#0A2E16",
      "#107E3E",
      "#20DF6C",
      "#6BFFA4"
    ],
    "tags": [
      "neon",
      "matrix pulse"
    ]
  },
  {
    "id": "neon-neon-coral",
    "name": "Neon Coral",
    "category": "Neon",
    "colors": [
      "#1A051D",
      "#54084F",
      "#A31371",
      "#FF2A85",
      "#FF7300"
    ],
    "tags": [
      "neon",
      "neon coral"
    ]
  },
  {
    "id": "neon-ultra-violet",
    "name": "Ultra Violet",
    "category": "Neon",
    "colors": [
      "#0C0728",
      "#240046",
      "#5A189A",
      "#9D4EDD",
      "#E0AAFF"
    ],
    "tags": [
      "neon",
      "ultra violet"
    ]
  },
  {
    "id": "neon-hyperdrive",
    "name": "Hyperdrive",
    "category": "Neon",
    "colors": [
      "#060B19",
      "#083358",
      "#0D6EFD",
      "#00F7FF",
      "#FFDF00"
    ],
    "tags": [
      "neon",
      "hyperdrive"
    ]
  },
  {
    "id": "neon-acid-rain",
    "name": "Acid Rain",
    "category": "Neon",
    "colors": [
      "#0D130E",
      "#19331C",
      "#327D3B",
      "#76FF03",
      "#CCFF90"
    ],
    "tags": [
      "neon",
      "acid rain"
    ]
  },
  {
    "id": "neon-radical-magenta",
    "name": "Radical Magenta",
    "category": "Neon",
    "colors": [
      "#1E032B",
      "#5A096E",
      "#A81193",
      "#F72585",
      "#7209B7"
    ],
    "tags": [
      "neon",
      "radical magenta"
    ]
  },
  {
    "id": "neon-neon-skyline",
    "name": "Neon Skyline",
    "category": "Neon",
    "colors": [
      "#09091A",
      "#1C1A4E",
      "#4338CA",
      "#06B6D4",
      "#F43F5E"
    ],
    "tags": [
      "neon",
      "neon skyline"
    ]
  },
  {
    "id": "neon-laser-tag",
    "name": "Laser Tag",
    "category": "Neon",
    "colors": [
      "#0B0C10",
      "#1F2833",
      "#C5C6C7",
      "#66FCF1",
      "#45A29E"
    ],
    "tags": [
      "neon",
      "laser tag"
    ]
  },
  {
    "id": "neon-cyberpunk-2099",
    "name": "Cyberpunk 2099",
    "category": "Neon",
    "colors": [
      "#10002B",
      "#240046",
      "#7B2CBF",
      "#FF007F",
      "#FFE600"
    ],
    "tags": [
      "neon",
      "cyberpunk 2099"
    ]
  },
  {
    "id": "neon-plasma-burst",
    "name": "Plasma Burst",
    "category": "Neon",
    "colors": [
      "#120326",
      "#480CA8",
      "#7209B7",
      "#F72585",
      "#4CC9F0"
    ],
    "tags": [
      "neon",
      "plasma burst"
    ]
  },
  {
    "id": "neon-electric-citrus",
    "name": "Electric Citrus",
    "category": "Neon",
    "colors": [
      "#161E00",
      "#3E5402",
      "#86B300",
      "#D4FF00",
      "#00FFD5"
    ],
    "tags": [
      "neon",
      "electric citrus"
    ]
  },
  {
    "id": "neon-vapor-neon",
    "name": "Vapor Neon",
    "category": "Neon",
    "colors": [
      "#11002C",
      "#38006B",
      "#7300B0",
      "#FF00A0",
      "#00E5FF"
    ],
    "tags": [
      "neon",
      "vapor neon"
    ]
  },
  {
    "id": "neon-glowstick-green",
    "name": "Glowstick Green",
    "category": "Neon",
    "colors": [
      "#071908",
      "#0F3E14",
      "#1E8E2D",
      "#39FF14",
      "#A6FF96"
    ],
    "tags": [
      "neon",
      "glowstick green"
    ]
  },
  {
    "id": "neon-nightclub-bass",
    "name": "Nightclub Bass",
    "category": "Neon",
    "colors": [
      "#0E061A",
      "#2D0C54",
      "#78159E",
      "#E021B0",
      "#FF5CE1"
    ],
    "tags": [
      "neon",
      "nightclub bass"
    ]
  },
  {
    "id": "neon-cobalt-flash",
    "name": "Cobalt Flash",
    "category": "Neon",
    "colors": [
      "#000B29",
      "#00257A",
      "#0055FF",
      "#00B4D8",
      "#90E0EF"
    ],
    "tags": [
      "neon",
      "cobalt flash"
    ]
  },
  {
    "id": "neon-neon-amber",
    "name": "Neon Amber",
    "category": "Neon",
    "colors": [
      "#1C0E00",
      "#4A2800",
      "#9E5B00",
      "#FF9500",
      "#FFEA00"
    ],
    "tags": [
      "neon",
      "neon amber"
    ]
  },
  {
    "id": "neon-techno-sunrise",
    "name": "Techno Sunrise",
    "category": "Neon",
    "colors": [
      "#16001E",
      "#4B0066",
      "#A1009B",
      "#FF006E",
      "#FFBE0B"
    ],
    "tags": [
      "neon",
      "techno sunrise"
    ]
  },
  {
    "id": "neon-neon-blizzard",
    "name": "Neon Blizzard",
    "category": "Neon",
    "colors": [
      "#05131E",
      "#0B3353",
      "#1669A5",
      "#29C5F6",
      "#87EAFB"
    ],
    "tags": [
      "neon",
      "neon blizzard"
    ]
  },
  {
    "id": "neon-hot-circuit",
    "name": "Hot Circuit",
    "category": "Neon",
    "colors": [
      "#1A000A",
      "#4A001E",
      "#9E0042",
      "#FF0066",
      "#00FFF2"
    ],
    "tags": [
      "neon",
      "hot circuit"
    ]
  },
  {
    "id": "neon-grid-runner",
    "name": "Grid Runner",
    "category": "Neon",
    "colors": [
      "#0B0B1E",
      "#181B54",
      "#2E38A6",
      "#00F5D4",
      "#7B2CBF"
    ],
    "tags": [
      "neon",
      "grid runner"
    ]
  },
  {
    "id": "neon-radioactive-glow",
    "name": "Radioactive Glow",
    "category": "Neon",
    "colors": [
      "#0B1A00",
      "#254A00",
      "#569E00",
      "#A3FF00",
      "#E5FF80"
    ],
    "tags": [
      "neon",
      "radioactive glow"
    ]
  },
  {
    "id": "dark-obsidian-velvet",
    "name": "Obsidian Velvet",
    "category": "Dark",
    "colors": [
      "#0B0E14",
      "#151922",
      "#222838",
      "#46506B",
      "#A1E3F9"
    ],
    "tags": [
      "dark",
      "obsidian velvet"
    ]
  },
  {
    "id": "dark-charcoal-modern",
    "name": "Charcoal Modern",
    "category": "Dark",
    "colors": [
      "#121212",
      "#1E1E1E",
      "#2D2D2D",
      "#757575",
      "#E0E0E0"
    ],
    "tags": [
      "dark",
      "charcoal modern"
    ]
  },
  {
    "id": "dark-midnight-nebula",
    "name": "Midnight Nebula",
    "category": "Dark",
    "colors": [
      "#0F0E17",
      "#1F1E2E",
      "#2E2B44",
      "#7A73A6",
      "#FFFFFE"
    ],
    "tags": [
      "dark",
      "midnight nebula"
    ]
  },
  {
    "id": "dark-abyssal-void",
    "name": "Abyssal Void",
    "category": "Dark",
    "colors": [
      "#08090C",
      "#12141A",
      "#1E222D",
      "#3D4457",
      "#C8D2E6"
    ],
    "tags": [
      "dark",
      "abyssal void"
    ]
  },
  {
    "id": "dark-deep-space",
    "name": "Deep Space",
    "category": "Dark",
    "colors": [
      "#0A0E17",
      "#131B2E",
      "#202E4C",
      "#415A8A",
      "#89A5D8"
    ],
    "tags": [
      "dark",
      "deep space"
    ]
  },
  {
    "id": "dark-onyx-armor",
    "name": "Onyx Armor",
    "category": "Dark",
    "colors": [
      "#141416",
      "#23262F",
      "#353945",
      "#777E90",
      "#FCFCFD"
    ],
    "tags": [
      "dark",
      "onyx armor"
    ]
  },
  {
    "id": "dark-dark-carbon",
    "name": "Dark Carbon",
    "category": "Dark",
    "colors": [
      "#111315",
      "#1A1D20",
      "#2B3036",
      "#525C67",
      "#A6B0BA"
    ],
    "tags": [
      "dark",
      "dark carbon"
    ]
  },
  {
    "id": "dark-eclipse-shadow",
    "name": "Eclipse Shadow",
    "category": "Dark",
    "colors": [
      "#0D0D11",
      "#1A1A22",
      "#2B2B38",
      "#57576E",
      "#B3B3C8"
    ],
    "tags": [
      "dark",
      "eclipse shadow"
    ]
  },
  {
    "id": "dark-bunker-concrete",
    "name": "Bunker Concrete",
    "category": "Dark",
    "colors": [
      "#18191B",
      "#27292D",
      "#3B3E45",
      "#6B707B",
      "#D2D6DC"
    ],
    "tags": [
      "dark",
      "bunker concrete"
    ]
  },
  {
    "id": "dark-nightwatch-harbor",
    "name": "Nightwatch Harbor",
    "category": "Dark",
    "colors": [
      "#0C131D",
      "#152232",
      "#233851",
      "#45688E",
      "#A0C2E2"
    ],
    "tags": [
      "dark",
      "nightwatch harbor"
    ]
  },
  {
    "id": "dark-shadow-realm",
    "name": "Shadow Realm",
    "category": "Dark",
    "colors": [
      "#100E17",
      "#1D1929",
      "#322B45",
      "#635587",
      "#C4B9E0"
    ],
    "tags": [
      "dark",
      "shadow realm"
    ]
  },
  {
    "id": "dark-gothic-castle",
    "name": "Gothic Castle",
    "category": "Dark",
    "colors": [
      "#141115",
      "#241E26",
      "#3E3442",
      "#706075",
      "#C7B9CC"
    ],
    "tags": [
      "dark",
      "gothic castle"
    ]
  },
  {
    "id": "dark-dark-forest-night",
    "name": "Dark Forest Night",
    "category": "Dark",
    "colors": [
      "#0B1410",
      "#14251E",
      "#223D32",
      "#43705E",
      "#A3D4BF"
    ],
    "tags": [
      "dark",
      "dark forest night"
    ]
  },
  {
    "id": "dark-raven-feather",
    "name": "Raven Feather",
    "category": "Dark",
    "colors": [
      "#131316",
      "#212228",
      "#343640",
      "#606473",
      "#BAC0D2"
    ],
    "tags": [
      "dark",
      "raven feather"
    ]
  },
  {
    "id": "dark-espresso-roast",
    "name": "Espresso Roast",
    "category": "Dark",
    "colors": [
      "#19120F",
      "#2C211C",
      "#46362E",
      "#755E53",
      "#C7B1A5"
    ],
    "tags": [
      "dark",
      "espresso roast"
    ]
  },
  {
    "id": "dark-black-diamond",
    "name": "Black Diamond",
    "category": "Dark",
    "colors": [
      "#0F1115",
      "#1B1E26",
      "#2C323E",
      "#565F73",
      "#B8C2D6"
    ],
    "tags": [
      "dark",
      "black diamond"
    ]
  },
  {
    "id": "dark-dark-monolith",
    "name": "Dark Monolith",
    "category": "Dark",
    "colors": [
      "#111214",
      "#1F2126",
      "#33373E",
      "#5E646E",
      "#C2C8D2"
    ],
    "tags": [
      "dark",
      "dark monolith"
    ]
  },
  {
    "id": "dark-trench-submarine",
    "name": "Trench Submarine",
    "category": "Dark",
    "colors": [
      "#08121A",
      "#0F212E",
      "#1D3B50",
      "#3B6E91",
      "#92BEDB"
    ],
    "tags": [
      "dark",
      "trench submarine"
    ]
  },
  {
    "id": "dark-dark-bronze",
    "name": "Dark Bronze",
    "category": "Dark",
    "colors": [
      "#1A140E",
      "#2E241B",
      "#4D3E30",
      "#7E6953",
      "#CDBBA7"
    ],
    "tags": [
      "dark",
      "dark bronze"
    ]
  },
  {
    "id": "dark-volcanic-ash",
    "name": "Volcanic Ash",
    "category": "Dark",
    "colors": [
      "#161517",
      "#252427",
      "#3C3A40",
      "#6B6871",
      "#C6C3CB"
    ],
    "tags": [
      "dark",
      "volcanic ash"
    ]
  },
  {
    "id": "dark-dark-moss",
    "name": "Dark Moss",
    "category": "Dark",
    "colors": [
      "#111612",
      "#1D271F",
      "#314034",
      "#59705E",
      "#B2C9B8"
    ],
    "tags": [
      "dark",
      "dark moss"
    ]
  },
  {
    "id": "dark-midnight-wine",
    "name": "Midnight Wine",
    "category": "Dark",
    "colors": [
      "#1A0F14",
      "#2C1923",
      "#492B3C",
      "#7F4E6A",
      "#D1A3BD"
    ],
    "tags": [
      "dark",
      "midnight wine"
    ]
  },
  {
    "id": "dark-dark-titanium",
    "name": "Dark Titanium",
    "category": "Dark",
    "colors": [
      "#131518",
      "#20242A",
      "#343B45",
      "#5F6A7B",
      "#BAC3D2"
    ],
    "tags": [
      "dark",
      "dark titanium"
    ]
  },
  {
    "id": "dark-night-sky-starlight",
    "name": "Night Sky Starlight",
    "category": "Dark",
    "colors": [
      "#0A0C16",
      "#121728",
      "#202842",
      "#43517D",
      "#E2E8F0"
    ],
    "tags": [
      "dark",
      "night sky starlight"
    ]
  },
  {
    "id": "elegant-champagne-noir",
    "name": "Champagne & Noir",
    "category": "Elegant",
    "colors": [
      "#1C1917",
      "#44403C",
      "#A89F91",
      "#D4AF37",
      "#F5F2EB"
    ],
    "tags": [
      "elegant",
      "champagne & noir"
    ]
  },
  {
    "id": "elegant-imperial-jade",
    "name": "Imperial Jade",
    "category": "Elegant",
    "colors": [
      "#0A261D",
      "#124536",
      "#227A62",
      "#BFA15F",
      "#F4EDE1"
    ],
    "tags": [
      "elegant",
      "imperial jade"
    ]
  },
  {
    "id": "elegant-royal-velvet",
    "name": "Royal Velvet",
    "category": "Elegant",
    "colors": [
      "#1C1124",
      "#382047",
      "#683B7A",
      "#D4AF37",
      "#F5EEF8"
    ],
    "tags": [
      "elegant",
      "royal velvet"
    ]
  },
  {
    "id": "elegant-bespoke-tweed",
    "name": "Bespoke Tweed",
    "category": "Elegant",
    "colors": [
      "#282624",
      "#4A4540",
      "#7A726A",
      "#BAAFA4",
      "#F4EFEA"
    ],
    "tags": [
      "elegant",
      "bespoke tweed"
    ]
  },
  {
    "id": "elegant-silk-cashmere",
    "name": "Silk Cashmere",
    "category": "Elegant",
    "colors": [
      "#2B2725",
      "#544D49",
      "#8C827B",
      "#C8BFB8",
      "#FAF6F2"
    ],
    "tags": [
      "elegant",
      "silk cashmere"
    ]
  },
  {
    "id": "elegant-tuxedo-classic",
    "name": "Tuxedo Classic",
    "category": "Elegant",
    "colors": [
      "#0B0B0C",
      "#222326",
      "#494B52",
      "#C7C9D1",
      "#FFFFFF"
    ],
    "tags": [
      "elegant",
      "tuxedo classic"
    ]
  },
  {
    "id": "elegant-parisian-salon",
    "name": "Parisian Salon",
    "category": "Elegant",
    "colors": [
      "#251E1E",
      "#564243",
      "#8C6F71",
      "#C4A8AA",
      "#FAF2F3"
    ],
    "tags": [
      "elegant",
      "parisian salon"
    ]
  },
  {
    "id": "elegant-golden-monogram",
    "name": "Golden Monogram",
    "category": "Elegant",
    "colors": [
      "#1E1C18",
      "#403A30",
      "#7C715C",
      "#C9B589",
      "#F9F5EC"
    ],
    "tags": [
      "elegant",
      "golden monogram"
    ]
  },
  {
    "id": "elegant-cognac-leather",
    "name": "Cognac Leather",
    "category": "Elegant",
    "colors": [
      "#2B170E",
      "#542F1E",
      "#874E33",
      "#C7835E",
      "#F3D7C5"
    ],
    "tags": [
      "elegant",
      "cognac leather"
    ]
  },
  {
    "id": "elegant-platinum-sovereign",
    "name": "Platinum Sovereign",
    "category": "Elegant",
    "colors": [
      "#1C1E20",
      "#3D4146",
      "#6E747D",
      "#B5BAC2",
      "#F7F8FA"
    ],
    "tags": [
      "elegant",
      "platinum sovereign"
    ]
  },
  {
    "id": "elegant-onyx-brass",
    "name": "Onyx & Brass",
    "category": "Elegant",
    "colors": [
      "#141414",
      "#2C2B28",
      "#635F55",
      "#B8A67B",
      "#F3EEE3"
    ],
    "tags": [
      "elegant",
      "onyx & brass"
    ]
  },
  {
    "id": "elegant-burgundy-manor",
    "name": "Burgundy Manor",
    "category": "Elegant",
    "colors": [
      "#2B0C15",
      "#4E1B29",
      "#7F3145",
      "#C28392",
      "#F6EAEF"
    ],
    "tags": [
      "elegant",
      "burgundy manor"
    ]
  },
  {
    "id": "elegant-veronese-green",
    "name": "Veronese Green",
    "category": "Elegant",
    "colors": [
      "#11241C",
      "#244839",
      "#427860",
      "#A3C8B5",
      "#EDF5F0"
    ],
    "tags": [
      "elegant",
      "veronese green"
    ]
  },
  {
    "id": "elegant-pearl-essence",
    "name": "Pearl Essence",
    "category": "Elegant",
    "colors": [
      "#232126",
      "#48444E",
      "#7A7482",
      "#BCB6C4",
      "#F7F5FA"
    ],
    "tags": [
      "elegant",
      "pearl essence"
    ]
  },
  {
    "id": "elegant-marble-heritage",
    "name": "Marble Heritage",
    "category": "Elegant",
    "colors": [
      "#1F2022",
      "#414448",
      "#737980",
      "#BAC0C7",
      "#F5F6F8"
    ],
    "tags": [
      "elegant",
      "marble heritage"
    ]
  },
  {
    "id": "elegant-rich-damask",
    "name": "Rich Damask",
    "category": "Elegant",
    "colors": [
      "#2E131E",
      "#542538",
      "#8C435F",
      "#CE8AA2",
      "#F7E6ED"
    ],
    "tags": [
      "elegant",
      "rich damask"
    ]
  },
  {
    "id": "elegant-artisan-bronze",
    "name": "Artisan Bronze",
    "category": "Elegant",
    "colors": [
      "#261D17",
      "#4E3A2F",
      "#836553",
      "#C09E88",
      "#F5E9E0"
    ],
    "tags": [
      "elegant",
      "artisan bronze"
    ]
  },
  {
    "id": "elegant-midnight-sapphire",
    "name": "Midnight Sapphire",
    "category": "Elegant",
    "colors": [
      "#0A1325",
      "#16284D",
      "#2B4B8A",
      "#8CA8E0",
      "#EEF3FD"
    ],
    "tags": [
      "elegant",
      "midnight sapphire"
    ]
  },
  {
    "id": "elegant-boutique-rose",
    "name": "Boutique Rose",
    "category": "Elegant",
    "colors": [
      "#26191B",
      "#4F3539",
      "#825B61",
      "#BF939A",
      "#F7ECEE"
    ],
    "tags": [
      "elegant",
      "boutique rose"
    ]
  },
  {
    "id": "elegant-windsor-navy",
    "name": "Windsor Navy",
    "category": "Elegant",
    "colors": [
      "#0C1626",
      "#1A2E4C",
      "#325687",
      "#7DA2D6",
      "#E9F0FA"
    ],
    "tags": [
      "elegant",
      "windsor navy"
    ]
  },
  {
    "id": "elegant-linen-gold",
    "name": "Linen & Gold",
    "category": "Elegant",
    "colors": [
      "#2A2722",
      "#524C43",
      "#887E71",
      "#C5B287",
      "#FAF7F0"
    ],
    "tags": [
      "elegant",
      "linen & gold"
    ]
  },
  {
    "id": "elegant-venetian-brocade",
    "name": "Venetian Brocade",
    "category": "Elegant",
    "colors": [
      "#241520",
      "#4A2B42",
      "#7E4C71",
      "#C18BB3",
      "#F6EAF2"
    ],
    "tags": [
      "elegant",
      "venetian brocade"
    ]
  },
  {
    "id": "elegant-heirloom-silver",
    "name": "Heirloom Silver",
    "category": "Elegant",
    "colors": [
      "#1A1C1E",
      "#363A3E",
      "#60666D",
      "#A1A8B2",
      "#EFF1F4"
    ],
    "tags": [
      "elegant",
      "heirloom silver"
    ]
  },
  {
    "id": "elegant-monaco-harbor",
    "name": "Monaco Harbor",
    "category": "Elegant",
    "colors": [
      "#141D2B",
      "#273852",
      "#48638A",
      "#A3B9DC",
      "#F0F4FA"
    ],
    "tags": [
      "elegant",
      "monaco harbor"
    ]
  },
  {
    "id": "warm-amber-hearth",
    "name": "Amber Hearth",
    "category": "Warm",
    "colors": [
      "#441C00",
      "#7E3B09",
      "#BC6016",
      "#E8923E",
      "#F9D49C"
    ],
    "tags": [
      "warm",
      "amber hearth"
    ]
  },
  {
    "id": "warm-terracotta-sun",
    "name": "Terracotta Sun",
    "category": "Warm",
    "colors": [
      "#421A16",
      "#76342D",
      "#B3574B",
      "#DF877B",
      "#F7CCC5"
    ],
    "tags": [
      "warm",
      "terracotta sun"
    ]
  },
  {
    "id": "warm-spiced-cider",
    "name": "Spiced Cider",
    "category": "Warm",
    "colors": [
      "#3E1F0A",
      "#6F3915",
      "#A65A27",
      "#DC8746",
      "#F6CFA9"
    ],
    "tags": [
      "warm",
      "spiced cider"
    ]
  },
  {
    "id": "warm-honey-comb",
    "name": "Honey Comb",
    "category": "Warm",
    "colors": [
      "#3A2500",
      "#6B4706",
      "#A67317",
      "#DE9E35",
      "#F8E09B"
    ],
    "tags": [
      "warm",
      "honey comb"
    ]
  },
  {
    "id": "warm-rustic-paprika",
    "name": "Rustic Paprika",
    "category": "Warm",
    "colors": [
      "#46130E",
      "#792921",
      "#B7493D",
      "#E2796D",
      "#F9C8C1"
    ],
    "tags": [
      "warm",
      "rustic paprika"
    ]
  },
  {
    "id": "warm-baked-apricot",
    "name": "Baked Apricot",
    "category": "Warm",
    "colors": [
      "#452115",
      "#7A3F2C",
      "#B66B4F",
      "#E49F83",
      "#F9D9CB"
    ],
    "tags": [
      "warm",
      "baked apricot"
    ]
  },
  {
    "id": "warm-golden-ochre",
    "name": "Golden Ochre",
    "category": "Warm",
    "colors": [
      "#3E2F0B",
      "#6D541C",
      "#A48236",
      "#D6B461",
      "#F6E7B6"
    ],
    "tags": [
      "warm",
      "golden ochre"
    ]
  },
  {
    "id": "warm-cinnamon-bark",
    "name": "Cinnamon Bark",
    "category": "Warm",
    "colors": [
      "#351C15",
      "#60352A",
      "#935545",
      "#C6806F",
      "#EEC0B4"
    ],
    "tags": [
      "warm",
      "cinnamon bark"
    ]
  },
  {
    "id": "warm-nutmeg-blend",
    "name": "Nutmeg Blend",
    "category": "Warm",
    "colors": [
      "#3D251C",
      "#6C4435",
      "#A16C59",
      "#CE9A86",
      "#F3D2C4"
    ],
    "tags": [
      "warm",
      "nutmeg blend"
    ]
  },
  {
    "id": "warm-caramel-glaze",
    "name": "Caramel Glaze",
    "category": "Warm",
    "colors": [
      "#39200E",
      "#673D1E",
      "#9E6436",
      "#D2945D",
      "#F4D2B0"
    ],
    "tags": [
      "warm",
      "caramel glaze"
    ]
  },
  {
    "id": "warm-tuscan-sun",
    "name": "Tuscan Sun",
    "category": "Warm",
    "colors": [
      "#44260D",
      "#79481E",
      "#B3733A",
      "#E3A867",
      "#F9DCB4"
    ],
    "tags": [
      "warm",
      "tuscan sun"
    ]
  },
  {
    "id": "warm-autumn-ember",
    "name": "Autumn Ember",
    "category": "Warm",
    "colors": [
      "#441611",
      "#782D24",
      "#B45143",
      "#DF8173",
      "#F7C9C1"
    ],
    "tags": [
      "warm",
      "autumn ember"
    ]
  },
  {
    "id": "warm-toasted-almond",
    "name": "Toasted Almond",
    "category": "Warm",
    "colors": [
      "#3A2820",
      "#664A3D",
      "#9B7462",
      "#C9A593",
      "#F2DDD2"
    ],
    "tags": [
      "warm",
      "toasted almond"
    ]
  },
  {
    "id": "warm-ginger-tea",
    "name": "Ginger Tea",
    "category": "Warm",
    "colors": [
      "#40240F",
      "#704322",
      "#A66B3F",
      "#D79E70",
      "#F6D5B8"
    ],
    "tags": [
      "warm",
      "ginger tea"
    ]
  },
  {
    "id": "warm-molten-copper",
    "name": "Molten Copper",
    "category": "Warm",
    "colors": [
      "#3F1D13",
      "#6F3726",
      "#A65C45",
      "#D58B71",
      "#F5C8B7"
    ],
    "tags": [
      "warm",
      "molten copper"
    ]
  },
  {
    "id": "warm-warm-saffron",
    "name": "Warm Saffron",
    "category": "Warm",
    "colors": [
      "#422900",
      "#744C09",
      "#B17A1B",
      "#E5B147",
      "#F9E6A7"
    ],
    "tags": [
      "warm",
      "warm saffron"
    ]
  },
  {
    "id": "warm-mulled-wine",
    "name": "Mulled Wine",
    "category": "Warm",
    "colors": [
      "#3A0E1A",
      "#661F32",
      "#9B3953",
      "#CE657F",
      "#F3B4C4"
    ],
    "tags": [
      "warm",
      "mulled wine"
    ]
  },
  {
    "id": "warm-toffee-crunch",
    "name": "Toffee Crunch",
    "category": "Warm",
    "colors": [
      "#392316",
      "#64412D",
      "#98684C",
      "#CB9778",
      "#F1D4BF"
    ],
    "tags": [
      "warm",
      "toffee crunch"
    ]
  },
  {
    "id": "warm-papaya-nectar",
    "name": "Papaya Nectar",
    "category": "Warm",
    "colors": [
      "#481E15",
      "#7F392B",
      "#BB604D",
      "#E98F7D",
      "#FBD0C6"
    ],
    "tags": [
      "warm",
      "papaya nectar"
    ]
  },
  {
    "id": "warm-campfire-coal",
    "name": "Campfire Coal",
    "category": "Warm",
    "colors": [
      "#351710",
      "#5F2D21",
      "#934F3F",
      "#C77C6C",
      "#F0B9AC"
    ],
    "tags": [
      "warm",
      "campfire coal"
    ]
  },
  {
    "id": "warm-golden-hay",
    "name": "Golden Hay",
    "category": "Warm",
    "colors": [
      "#3B3012",
      "#695727",
      "#9E8645",
      "#D0B974",
      "#F4E7B9"
    ],
    "tags": [
      "warm",
      "golden hay"
    ]
  },
  {
    "id": "warm-warm-terracotta",
    "name": "Warm Terracotta",
    "category": "Warm",
    "colors": [
      "#411E16",
      "#72392D",
      "#AC5D4D",
      "#DD8A7A",
      "#F7C8BD"
    ],
    "tags": [
      "warm",
      "warm terracotta"
    ]
  },
  {
    "id": "warm-rust-ochre",
    "name": "Rust & Ochre",
    "category": "Warm",
    "colors": [
      "#3C2012",
      "#6A3E26",
      "#A16644",
      "#D2956E",
      "#F3D1B7"
    ],
    "tags": [
      "warm",
      "rust & ochre"
    ]
  },
  {
    "id": "warm-fireside-hearth",
    "name": "Fireside Hearth",
    "category": "Warm",
    "colors": [
      "#3B1A12",
      "#673224",
      "#9B5442",
      "#CB816E",
      "#F1BCAC"
    ],
    "tags": [
      "warm",
      "fireside hearth"
    ]
  },
  {
    "id": "cool-nordic-frost",
    "name": "Nordic Frost",
    "category": "Cool",
    "colors": [
      "#162534",
      "#2B455D",
      "#4E708E",
      "#89A9C8",
      "#DDEAF6"
    ],
    "tags": [
      "cool",
      "nordic frost"
    ]
  },
  {
    "id": "cool-glacial-ice",
    "name": "Glacial Ice",
    "category": "Cool",
    "colors": [
      "#10222B",
      "#22404F",
      "#406C82",
      "#76A6BF",
      "#D6ECF7"
    ],
    "tags": [
      "cool",
      "glacial ice"
    ]
  },
  {
    "id": "cool-steel-shiver",
    "name": "Steel Shiver",
    "category": "Cool",
    "colors": [
      "#1C2329",
      "#35414C",
      "#586A7B",
      "#8FA4B7",
      "#DEE7F0"
    ],
    "tags": [
      "cool",
      "steel shiver"
    ]
  },
  {
    "id": "cool-winter-pine",
    "name": "Winter Pine",
    "category": "Cool",
    "colors": [
      "#122320",
      "#24433E",
      "#427068",
      "#76A89F",
      "#D3EAE5"
    ],
    "tags": [
      "cool",
      "winter pine"
    ]
  },
  {
    "id": "cool-alpine-breeze",
    "name": "Alpine Breeze",
    "category": "Cool",
    "colors": [
      "#152431",
      "#284157",
      "#486C8D",
      "#80A5C9",
      "#D9E6F5"
    ],
    "tags": [
      "cool",
      "alpine breeze"
    ]
  },
  {
    "id": "cool-arctic-willow",
    "name": "Arctic Willow",
    "category": "Cool",
    "colors": [
      "#172322",
      "#2A3F3D",
      "#486B67",
      "#7DA39E",
      "#D9EBE8"
    ],
    "tags": [
      "cool",
      "arctic willow"
    ]
  },
  {
    "id": "cool-polar-blue",
    "name": "Polar Blue",
    "category": "Cool",
    "colors": [
      "#0E2130",
      "#1C3C54",
      "#346487",
      "#649BC2",
      "#CFE5F5"
    ],
    "tags": [
      "cool",
      "polar blue"
    ]
  },
  {
    "id": "cool-silver-spruce",
    "name": "Silver Spruce",
    "category": "Cool",
    "colors": [
      "#15201E",
      "#283B37",
      "#46635D",
      "#7B9F97",
      "#D5E6E2"
    ],
    "tags": [
      "cool",
      "silver spruce"
    ]
  },
  {
    "id": "cool-icefall-shimmer",
    "name": "Icefall Shimmer",
    "category": "Cool",
    "colors": [
      "#112530",
      "#204255",
      "#3A6F8E",
      "#6EA7CA",
      "#D5EEFA"
    ],
    "tags": [
      "cool",
      "icefall shimmer"
    ]
  },
  {
    "id": "cool-cool-slate",
    "name": "Cool Slate",
    "category": "Cool",
    "colors": [
      "#1A2228",
      "#31404B",
      "#536879",
      "#89A2B6",
      "#DFE9F1"
    ],
    "tags": [
      "cool",
      "cool slate"
    ]
  },
  {
    "id": "cool-himalayan-snow",
    "name": "Himalayan Snow",
    "category": "Cool",
    "colors": [
      "#15202B",
      "#283B4F",
      "#496684",
      "#82A3C4",
      "#DAE7F4"
    ],
    "tags": [
      "cool",
      "himalayan snow"
    ]
  },
  {
    "id": "cool-glacier-stream",
    "name": "Glacier Stream",
    "category": "Cool",
    "colors": [
      "#0E242B",
      "#1E444E",
      "#3A7281",
      "#6FAABA",
      "#D2EFF6"
    ],
    "tags": [
      "cool",
      "glacier stream"
    ]
  },
  {
    "id": "cool-morning-frost",
    "name": "Morning Frost",
    "category": "Cool",
    "colors": [
      "#17242E",
      "#2B4254",
      "#4D6F8B",
      "#84A7C7",
      "#DCE8F4"
    ],
    "tags": [
      "cool",
      "morning frost"
    ]
  },
  {
    "id": "cool-frostbite-peak",
    "name": "Frostbite Peak",
    "category": "Cool",
    "colors": [
      "#13212D",
      "#243C50",
      "#416584",
      "#789FC4",
      "#D8E7F6"
    ],
    "tags": [
      "cool",
      "frostbite peak"
    ]
  },
  {
    "id": "cool-cyan-chill",
    "name": "Cyan Chill",
    "category": "Cool",
    "colors": [
      "#0C232A",
      "#19424E",
      "#2F6E80",
      "#5BA6B9",
      "#CAEEF5"
    ],
    "tags": [
      "cool",
      "cyan chill"
    ]
  },
  {
    "id": "cool-deep-blizzard",
    "name": "Deep Blizzard",
    "category": "Cool",
    "colors": [
      "#142232",
      "#263D58",
      "#44668E",
      "#7AA0CE",
      "#D7E5F7"
    ],
    "tags": [
      "cool",
      "deep blizzard"
    ]
  },
  {
    "id": "cool-hailstone",
    "name": "Hailstone",
    "category": "Cool",
    "colors": [
      "#182329",
      "#2E414C",
      "#506B7B",
      "#87A4B7",
      "#DDE7F0"
    ],
    "tags": [
      "cool",
      "hailstone"
    ]
  },
  {
    "id": "cool-cool-mint-dew",
    "name": "Cool Mint Dew",
    "category": "Cool",
    "colors": [
      "#112521",
      "#21443D",
      "#3B7267",
      "#6FAAA0",
      "#D3ECE7"
    ],
    "tags": [
      "cool",
      "cool mint dew"
    ]
  },
  {
    "id": "cool-fjord-shadow",
    "name": "Fjord Shadow",
    "category": "Cool",
    "colors": [
      "#102028",
      "#203A48",
      "#3B637A",
      "#6F9BB5",
      "#D3E6F2"
    ],
    "tags": [
      "cool",
      "fjord shadow"
    ]
  },
  {
    "id": "cool-borealis-chill",
    "name": "Borealis Chill",
    "category": "Cool",
    "colors": [
      "#0F2424",
      "#1E4343",
      "#397070",
      "#6CA8A8",
      "#D0EDED"
    ],
    "tags": [
      "cool",
      "borealis chill"
    ]
  },
  {
    "id": "cool-frosty-meadow",
    "name": "Frosty Meadow",
    "category": "Cool",
    "colors": [
      "#14221F",
      "#27403B",
      "#476E65",
      "#7CA89E",
      "#D6EAE5"
    ],
    "tags": [
      "cool",
      "frosty meadow"
    ]
  },
  {
    "id": "cool-icelandic-stone",
    "name": "Icelandic Stone",
    "category": "Cool",
    "colors": [
      "#1A2226",
      "#303E46",
      "#526571",
      "#889DAA",
      "#DEE7EC"
    ],
    "tags": [
      "cool",
      "icelandic stone"
    ]
  },
  {
    "id": "cool-cool-mistral",
    "name": "Cool Mistral",
    "category": "Cool",
    "colors": [
      "#162330",
      "#293E54",
      "#496B8E",
      "#80A4CB",
      "#D9E6F5"
    ],
    "tags": [
      "cool",
      "cool mistral"
    ]
  },
  {
    "id": "cool-subzero-tide",
    "name": "Subzero Tide",
    "category": "Cool",
    "colors": [
      "#0E222D",
      "#1D3F51",
      "#386A85",
      "#6A9EBD",
      "#D1E6F3"
    ],
    "tags": [
      "cool",
      "subzero tide"
    ]
  },
  {
    "id": "monochrome-pure-ink-wash",
    "name": "Pure Ink Wash",
    "category": "Monochrome",
    "colors": [
      "#0F0F0F",
      "#333333",
      "#666666",
      "#B3B3B3",
      "#F5F5F5"
    ],
    "tags": [
      "monochrome",
      "pure ink wash"
    ]
  },
  {
    "id": "monochrome-slate-monochrome",
    "name": "Slate Monochrome",
    "category": "Monochrome",
    "colors": [
      "#0F172A",
      "#1E293B",
      "#475569",
      "#94A3B8",
      "#F1F5F9"
    ],
    "tags": [
      "monochrome",
      "slate monochrome"
    ]
  },
  {
    "id": "monochrome-onyx-monochrome",
    "name": "Onyx Monochrome",
    "category": "Monochrome",
    "colors": [
      "#121212",
      "#282828",
      "#545454",
      "#9E9E9E",
      "#FAFAFA"
    ],
    "tags": [
      "monochrome",
      "onyx monochrome"
    ]
  },
  {
    "id": "monochrome-zinc-tone",
    "name": "Zinc Tone",
    "category": "Monochrome",
    "colors": [
      "#18181B",
      "#27272A",
      "#52525B",
      "#A1A1AA",
      "#F4F4F5"
    ],
    "tags": [
      "monochrome",
      "zinc tone"
    ]
  },
  {
    "id": "monochrome-charcoal-wash",
    "name": "Charcoal Wash",
    "category": "Monochrome",
    "colors": [
      "#14171A",
      "#292F36",
      "#525E6B",
      "#99A5B3",
      "#F2F5F8"
    ],
    "tags": [
      "monochrome",
      "charcoal wash"
    ]
  },
  {
    "id": "monochrome-neutral-gray",
    "name": "Neutral Gray",
    "category": "Monochrome",
    "colors": [
      "#171717",
      "#262626",
      "#525252",
      "#A3A3A3",
      "#F5F5F5"
    ],
    "tags": [
      "monochrome",
      "neutral gray"
    ]
  },
  {
    "id": "monochrome-warm-charcoal",
    "name": "Warm Charcoal",
    "category": "Monochrome",
    "colors": [
      "#1C1917",
      "#292524",
      "#57534E",
      "#A8A29E",
      "#F5F5F4"
    ],
    "tags": [
      "monochrome",
      "warm charcoal"
    ]
  },
  {
    "id": "monochrome-cool-gray-scale",
    "name": "Cool Gray Scale",
    "category": "Monochrome",
    "colors": [
      "#111827",
      "#1F2937",
      "#4B5563",
      "#9CA3AF",
      "#F3F4F6"
    ],
    "tags": [
      "monochrome",
      "cool gray scale"
    ]
  },
  {
    "id": "monochrome-graphite-range",
    "name": "Graphite Range",
    "category": "Monochrome",
    "colors": [
      "#131316",
      "#26262C",
      "#545462",
      "#9D9DAE",
      "#F3F3F7"
    ],
    "tags": [
      "monochrome",
      "graphite range"
    ]
  },
  {
    "id": "monochrome-architectural-gray",
    "name": "Architectural Gray",
    "category": "Monochrome",
    "colors": [
      "#1A1C1E",
      "#303337",
      "#5E646C",
      "#A4ABB5",
      "#EFF2F6"
    ],
    "tags": [
      "monochrome",
      "architectural gray"
    ]
  },
  {
    "id": "monochrome-silver-monochrome",
    "name": "Silver Monochrome",
    "category": "Monochrome",
    "colors": [
      "#16181B",
      "#2C3035",
      "#575E68",
      "#9DA6B2",
      "#F1F4F8"
    ],
    "tags": [
      "monochrome",
      "silver monochrome"
    ]
  },
  {
    "id": "monochrome-iron-shading",
    "name": "Iron Shading",
    "category": "Monochrome",
    "colors": [
      "#151719",
      "#2A2E32",
      "#565D64",
      "#9BA3AC",
      "#F0F3F6"
    ],
    "tags": [
      "monochrome",
      "iron shading"
    ]
  },
  {
    "id": "monochrome-jet-stone",
    "name": "Jet Stone",
    "category": "Monochrome",
    "colors": [
      "#111113",
      "#242529",
      "#50535C",
      "#9699A3",
      "#F0F1F4"
    ],
    "tags": [
      "monochrome",
      "jet stone"
    ]
  },
  {
    "id": "monochrome-ash-linen",
    "name": "Ash & Linen",
    "category": "Monochrome",
    "colors": [
      "#181716",
      "#2F2D2B",
      "#5D5A56",
      "#A39F99",
      "#F4F2EE"
    ],
    "tags": [
      "monochrome",
      "ash & linen"
    ]
  },
  {
    "id": "monochrome-steel-gradient",
    "name": "Steel Gradient",
    "category": "Monochrome",
    "colors": [
      "#14191E",
      "#28313A",
      "#536372",
      "#95A5B6",
      "#F0F4F8"
    ],
    "tags": [
      "monochrome",
      "steel gradient"
    ]
  },
  {
    "id": "monochrome-lead-pencil",
    "name": "Lead Pencil",
    "category": "Monochrome",
    "colors": [
      "#161616",
      "#2D2D2D",
      "#5E5E5E",
      "#A7A7A7",
      "#F7F7F7"
    ],
    "tags": [
      "monochrome",
      "lead pencil"
    ]
  },
  {
    "id": "monochrome-obsidian-tone",
    "name": "Obsidian Tone",
    "category": "Monochrome",
    "colors": [
      "#0D0F12",
      "#1B2026",
      "#3D4653",
      "#7F8E9F",
      "#EBF0F5"
    ],
    "tags": [
      "monochrome",
      "obsidian tone"
    ]
  },
  {
    "id": "monochrome-carbon-spectrum",
    "name": "Carbon Spectrum",
    "category": "Monochrome",
    "colors": [
      "#121316",
      "#23262C",
      "#4F5460",
      "#959CA9",
      "#EFF2F6"
    ],
    "tags": [
      "monochrome",
      "carbon spectrum"
    ]
  },
  {
    "id": "monochrome-flint-rock",
    "name": "Flint Rock",
    "category": "Monochrome",
    "colors": [
      "#191817",
      "#312F2D",
      "#615E5A",
      "#A7A39D",
      "#F6F4F1"
    ],
    "tags": [
      "monochrome",
      "flint rock"
    ]
  },
  {
    "id": "monochrome-basalt-step",
    "name": "Basalt Step",
    "category": "Monochrome",
    "colors": [
      "#101214",
      "#212429",
      "#484E57",
      "#8E98A5",
      "#EDF1F5"
    ],
    "tags": [
      "monochrome",
      "basalt step"
    ]
  },
  {
    "id": "monochrome-dark-monotone",
    "name": "Dark Monotone",
    "category": "Monochrome",
    "colors": [
      "#0A0A0A",
      "#1F1F1F",
      "#4D4D4D",
      "#999999",
      "#EEEEEE"
    ],
    "tags": [
      "monochrome",
      "dark monotone"
    ]
  },
  {
    "id": "monochrome-matte-charcoal",
    "name": "Matte Charcoal",
    "category": "Monochrome",
    "colors": [
      "#141517",
      "#27292D",
      "#53575F",
      "#979CA6",
      "#F1F3F6"
    ],
    "tags": [
      "monochrome",
      "matte charcoal"
    ]
  },
  {
    "id": "monochrome-paper-monochrome",
    "name": "Paper Monochrome",
    "category": "Monochrome",
    "colors": [
      "#1A1A1A",
      "#333333",
      "#666666",
      "#CCCCCC",
      "#FFFFFF"
    ],
    "tags": [
      "monochrome",
      "paper monochrome"
    ]
  },
  {
    "id": "monochrome-titanium-scale",
    "name": "Titanium Scale",
    "category": "Monochrome",
    "colors": [
      "#12151A",
      "#242932",
      "#4D5666",
      "#909BAE",
      "#EEF2F8"
    ],
    "tags": [
      "monochrome",
      "titanium scale"
    ]
  },
  {
    "id": "vintage-apothecary-label",
    "name": "Apothecary Label",
    "category": "Vintage",
    "colors": [
      "#2F241D",
      "#5E4839",
      "#9C7A5E",
      "#D4B99B",
      "#F5ECE1"
    ],
    "tags": [
      "vintage",
      "apothecary label"
    ]
  },
  {
    "id": "vintage-old-manuscript",
    "name": "Old Manuscript",
    "category": "Vintage",
    "colors": [
      "#35261B",
      "#684B34",
      "#A88059",
      "#D9B98C",
      "#F7EBD2"
    ],
    "tags": [
      "vintage",
      "old manuscript"
    ]
  },
  {
    "id": "vintage-sepia-photograph",
    "name": "Sepia Photograph",
    "category": "Vintage",
    "colors": [
      "#2C1E14",
      "#593E2B",
      "#926949",
      "#CCA17A",
      "#F2DCC4"
    ],
    "tags": [
      "vintage",
      "sepia photograph"
    ]
  },
  {
    "id": "vintage-vintage-postcard",
    "name": "Vintage Postcard",
    "category": "Vintage",
    "colors": [
      "#3B2A20",
      "#705341",
      "#AC886E",
      "#DFC4AF",
      "#F8EFE6"
    ],
    "tags": [
      "vintage",
      "vintage postcard"
    ]
  },
  {
    "id": "vintage-antique-brass",
    "name": "Antique Brass",
    "category": "Vintage",
    "colors": [
      "#382C18",
      "#685430",
      "#A38753",
      "#D5BD86",
      "#F6EECD"
    ],
    "tags": [
      "vintage",
      "antique brass"
    ]
  },
  {
    "id": "vintage-faded-botanical",
    "name": "Faded Botanical",
    "category": "Vintage",
    "colors": [
      "#2E3628",
      "#54614A",
      "#879777",
      "#C2CEB4",
      "#EEF4E8"
    ],
    "tags": [
      "vintage",
      "faded botanical"
    ]
  },
  {
    "id": "vintage-classic-leather",
    "name": "Classic Leather",
    "category": "Vintage",
    "colors": [
      "#301A10",
      "#5B3321",
      "#94583B",
      "#CA8F6F",
      "#F0C9B1"
    ],
    "tags": [
      "vintage",
      "classic leather"
    ]
  },
  {
    "id": "vintage-vintage-wallpaper",
    "name": "Vintage Wallpaper",
    "category": "Vintage",
    "colors": [
      "#3D2E36",
      "#6D5663",
      "#A58B99",
      "#D7C4CD",
      "#F7F0F3"
    ],
    "tags": [
      "vintage",
      "vintage wallpaper"
    ]
  },
  {
    "id": "vintage-old-library",
    "name": "Old Library",
    "category": "Vintage",
    "colors": [
      "#261D17",
      "#4E3A2F",
      "#846755",
      "#C0A38E",
      "#F0E5DC"
    ],
    "tags": [
      "vintage",
      "old library"
    ]
  },
  {
    "id": "vintage-weathered-map",
    "name": "Weathered Map",
    "category": "Vintage",
    "colors": [
      "#3A3022",
      "#6C5D45",
      "#A59272",
      "#D7C7A8",
      "#F6EED9"
    ],
    "tags": [
      "vintage",
      "weathered map"
    ]
  },
  {
    "id": "vintage-faded-tapestry",
    "name": "Faded Tapestry",
    "category": "Vintage",
    "colors": [
      "#382830",
      "#664C58",
      "#9E7E8E",
      "#D2BBC6",
      "#F5ECF0"
    ],
    "tags": [
      "vintage",
      "faded tapestry"
    ]
  },
  {
    "id": "vintage-antique-rose",
    "name": "Antique Rose",
    "category": "Vintage",
    "colors": [
      "#3E272B",
      "#714B52",
      "#AC7B83",
      "#DCB0B7",
      "#F8E7E9"
    ],
    "tags": [
      "vintage",
      "antique rose"
    ]
  },
  {
    "id": "vintage-vintage-typewriter",
    "name": "Vintage Typewriter",
    "category": "Vintage",
    "colors": [
      "#212224",
      "#42454A",
      "#747982",
      "#B3B8C2",
      "#F1F3F6"
    ],
    "tags": [
      "vintage",
      "vintage typewriter"
    ]
  },
  {
    "id": "vintage-old-newspaper",
    "name": "Old Newspaper",
    "category": "Vintage",
    "colors": [
      "#2A2723",
      "#524D46",
      "#878074",
      "#C3BDB2",
      "#F3EFE7"
    ],
    "tags": [
      "vintage",
      "old newspaper"
    ]
  },
  {
    "id": "vintage-victorian-parlor",
    "name": "Victorian Parlor",
    "category": "Vintage",
    "colors": [
      "#341B22",
      "#5F333E",
      "#975767",
      "#CD92A0",
      "#F3D2DB"
    ],
    "tags": [
      "vintage",
      "victorian parlor"
    ]
  },
  {
    "id": "vintage-antique-parchment",
    "name": "Antique Parchment",
    "category": "Vintage",
    "colors": [
      "#342B1F",
      "#64543E",
      "#9E886A",
      "#D4C1A3",
      "#F6EEDD"
    ],
    "tags": [
      "vintage",
      "antique parchment"
    ]
  },
  {
    "id": "vintage-faded-denim",
    "name": "Faded Denim",
    "category": "Vintage",
    "colors": [
      "#232F3D",
      "#44566E",
      "#7288A6",
      "#B0C2D8",
      "#EAF0F8"
    ],
    "tags": [
      "vintage",
      "faded denim"
    ]
  },
  {
    "id": "vintage-rustic-copper",
    "name": "Rustic Copper",
    "category": "Vintage",
    "colors": [
      "#3D1E16",
      "#6E3A2C",
      "#A8624E",
      "#DC9784",
      "#F6D2C7"
    ],
    "tags": [
      "vintage",
      "rustic copper"
    ]
  },
  {
    "id": "vintage-old-vinyl-record",
    "name": "Old Vinyl Record",
    "category": "Vintage",
    "colors": [
      "#1C1A1A",
      "#3C3737",
      "#6B6262",
      "#A99F9F",
      "#EDE7E7"
    ],
    "tags": [
      "vintage",
      "old vinyl record"
    ]
  },
  {
    "id": "vintage-heritage-quilt",
    "name": "Heritage Quilt",
    "category": "Vintage",
    "colors": [
      "#3A242B",
      "#6C4550",
      "#A67380",
      "#D8ABB6",
      "#F7E7EC"
    ],
    "tags": [
      "vintage",
      "heritage quilt"
    ]
  },
  {
    "id": "vintage-vintage-sage",
    "name": "Vintage Sage",
    "category": "Vintage",
    "colors": [
      "#2A332B",
      "#4F5E51",
      "#809483",
      "#BCCBBB",
      "#EDF3EC"
    ],
    "tags": [
      "vintage",
      "vintage sage"
    ]
  },
  {
    "id": "vintage-aged-ochre",
    "name": "Aged Ochre",
    "category": "Vintage",
    "colors": [
      "#372714",
      "#684B29",
      "#A37947",
      "#D6B07E",
      "#F6E5CC"
    ],
    "tags": [
      "vintage",
      "aged ochre"
    ]
  },
  {
    "id": "vintage-faded-velvet",
    "name": "Faded Velvet",
    "category": "Vintage",
    "colors": [
      "#2D1C28",
      "#54364C",
      "#885D7C",
      "#BE98B3",
      "#EEDCE7"
    ],
    "tags": [
      "vintage",
      "faded velvet"
    ]
  },
  {
    "id": "vintage-vintage-sepia",
    "name": "Vintage Sepia",
    "category": "Vintage",
    "colors": [
      "#302219",
      "#5E4433",
      "#967156",
      "#CEAA8E",
      "#F3E3D4"
    ],
    "tags": [
      "vintage",
      "vintage sepia"
    ]
  },
  {
    "id": "candy-bubblegum-sweet",
    "name": "Bubblegum Sweet",
    "category": "Candy",
    "colors": [
      "#FF598F",
      "#FD8A5E",
      "#E0E300",
      "#01DDDD",
      "#00BFDF"
    ],
    "tags": [
      "candy",
      "bubblegum sweet"
    ]
  },
  {
    "id": "candy-lollipop-swirl",
    "name": "Lollipop Swirl",
    "category": "Candy",
    "colors": [
      "#FF1361",
      "#FFF800",
      "#FF4E50",
      "#F9D423",
      "#24C6DC"
    ],
    "tags": [
      "candy",
      "lollipop swirl"
    ]
  },
  {
    "id": "candy-cotton-candy",
    "name": "Cotton Candy",
    "category": "Candy",
    "colors": [
      "#FF9A8B",
      "#FF6A88",
      "#FF99AC",
      "#FEE140",
      "#FA709A"
    ],
    "tags": [
      "candy",
      "cotton candy"
    ]
  },
  {
    "id": "candy-gummy-bear",
    "name": "Gummy Bear",
    "category": "Candy",
    "colors": [
      "#FF0055",
      "#FF7700",
      "#FFDD00",
      "#00DD77",
      "#0099FF"
    ],
    "tags": [
      "candy",
      "gummy bear"
    ]
  },
  {
    "id": "candy-marshmallow-fluff",
    "name": "Marshmallow Fluff",
    "category": "Candy",
    "colors": [
      "#FFD1DC",
      "#FFE4E1",
      "#E0BBE4",
      "#957DAD",
      "#D291BC"
    ],
    "tags": [
      "candy",
      "marshmallow fluff"
    ]
  },
  {
    "id": "candy-berry-pop",
    "name": "Berry Pop",
    "category": "Candy",
    "colors": [
      "#F72585",
      "#B5179E",
      "#7209B7",
      "#560BAD",
      "#480CA8"
    ],
    "tags": [
      "candy",
      "berry pop"
    ]
  },
  {
    "id": "candy-citrus-drop",
    "name": "Citrus Drop",
    "category": "Candy",
    "colors": [
      "#FF6B6B",
      "#FFD93D",
      "#6BCB77",
      "#4D96FF",
      "#F473B9"
    ],
    "tags": [
      "candy",
      "citrus drop"
    ]
  },
  {
    "id": "candy-taffy-chew",
    "name": "Taffy Chew",
    "category": "Candy",
    "colors": [
      "#FFAAA6",
      "#FF8B94",
      "#FFD3B6",
      "#DCEDC1",
      "#A8E6CF"
    ],
    "tags": [
      "candy",
      "taffy chew"
    ]
  },
  {
    "id": "candy-sour-worm",
    "name": "Sour Worm",
    "category": "Candy",
    "colors": [
      "#FF007F",
      "#FF7F00",
      "#FFFF00",
      "#00FF7F",
      "#007FFF"
    ],
    "tags": [
      "candy",
      "sour worm"
    ]
  },
  {
    "id": "candy-sugar-sprinkles",
    "name": "Sugar Sprinkles",
    "category": "Candy",
    "colors": [
      "#FF6B8B",
      "#FFA07A",
      "#FFD700",
      "#7BED9F",
      "#70A1FF"
    ],
    "tags": [
      "candy",
      "sugar sprinkles"
    ]
  },
  {
    "id": "candy-sweet-glaze",
    "name": "Sweet Glaze",
    "category": "Candy",
    "colors": [
      "#FF9EAA",
      "#FFD0D0",
      "#FFECEC",
      "#C4DFDF",
      "#D2E9E9"
    ],
    "tags": [
      "candy",
      "sweet glaze"
    ]
  },
  {
    "id": "candy-jelly-bean",
    "name": "Jelly Bean",
    "category": "Candy",
    "colors": [
      "#E63946",
      "#F4A261",
      "#E76F51",
      "#2A9D8F",
      "#264653"
    ],
    "tags": [
      "candy",
      "jelly bean"
    ]
  },
  {
    "id": "candy-blueberry-chew",
    "name": "Blueberry Chew",
    "category": "Candy",
    "colors": [
      "#4361EE",
      "#3A0CA3",
      "#7209B7",
      "#F72585",
      "#4CC9F0"
    ],
    "tags": [
      "candy",
      "blueberry chew"
    ]
  },
  {
    "id": "candy-cherry-pop",
    "name": "Cherry Pop",
    "category": "Candy",
    "colors": [
      "#D90429",
      "#EF233C",
      "#FF758F",
      "#FFB3C1",
      "#FFF0F3"
    ],
    "tags": [
      "candy",
      "cherry pop"
    ]
  },
  {
    "id": "candy-lime-sherbet",
    "name": "Lime Sherbet",
    "category": "Candy",
    "colors": [
      "#38B000",
      "#70E000",
      "#9EF01A",
      "#CCFF33",
      "#007200"
    ],
    "tags": [
      "candy",
      "lime sherbet"
    ]
  },
  {
    "id": "candy-grape-soda",
    "name": "Grape Soda",
    "category": "Candy",
    "colors": [
      "#5A189A",
      "#7B2CBF",
      "#9D4EDD",
      "#C77DFF",
      "#E0AAFF"
    ],
    "tags": [
      "candy",
      "grape soda"
    ]
  },
  {
    "id": "candy-watermelon-chew",
    "name": "Watermelon Chew",
    "category": "Candy",
    "colors": [
      "#FF3366",
      "#FF6699",
      "#33CC99",
      "#2E933C",
      "#0F4C5C"
    ],
    "tags": [
      "candy",
      "watermelon chew"
    ]
  },
  {
    "id": "candy-orange-creamsicle",
    "name": "Orange Creamsicle",
    "category": "Candy",
    "colors": [
      "#FF6D00",
      "#FF8500",
      "#FF9E00",
      "#FFAA00",
      "#FFE5B4"
    ],
    "tags": [
      "candy",
      "orange creamsicle"
    ]
  },
  {
    "id": "candy-rainbow-drop",
    "name": "Rainbow Drop",
    "category": "Candy",
    "colors": [
      "#FF0055",
      "#FF5500",
      "#FFCC00",
      "#00CC66",
      "#0099FF"
    ],
    "tags": [
      "candy",
      "rainbow drop"
    ]
  },
  {
    "id": "candy-fondant-pastel",
    "name": "Fondant Pastel",
    "category": "Candy",
    "colors": [
      "#FFC6FF",
      "#BDB2FF",
      "#A0C4FF",
      "#9BF6FF",
      "#CAFFBF"
    ],
    "tags": [
      "candy",
      "fondant pastel"
    ]
  },
  {
    "id": "candy-caramel-chew",
    "name": "Caramel Chew",
    "category": "Candy",
    "colors": [
      "#C86400",
      "#E08000",
      "#FFA000",
      "#FFC800",
      "#FFF0A0"
    ],
    "tags": [
      "candy",
      "caramel chew"
    ]
  },
  {
    "id": "candy-peppermint-swirl",
    "name": "Peppermint Swirl",
    "category": "Candy",
    "colors": [
      "#E63946",
      "#FF6B6B",
      "#FFFFFF",
      "#4ECDC4",
      "#1A535C"
    ],
    "tags": [
      "candy",
      "peppermint swirl"
    ]
  },
  {
    "id": "candy-candy-apple",
    "name": "Candy Apple",
    "category": "Candy",
    "colors": [
      "#BA000D",
      "#F44336",
      "#FF7961",
      "#C6FF00",
      "#F5F5F5"
    ],
    "tags": [
      "candy",
      "candy apple"
    ]
  },
  {
    "id": "candy-fizzy-lemonade",
    "name": "Fizzy Lemonade",
    "category": "Candy",
    "colors": [
      "#FFD600",
      "#FFEA00",
      "#FFFF00",
      "#CCFF00",
      "#00E5FF"
    ],
    "tags": [
      "candy",
      "fizzy lemonade"
    ]
  },
  {
    "id": "forest-evergreen-ridge",
    "name": "Evergreen Ridge",
    "category": "Forest",
    "colors": [
      "#1C3325",
      "#2E5339",
      "#4E7D58",
      "#86AD8D",
      "#D8E8DA"
    ],
    "tags": [
      "forest",
      "evergreen ridge"
    ]
  },
  {
    "id": "forest-pine-needle",
    "name": "Pine Needle",
    "category": "Forest",
    "colors": [
      "#172619",
      "#2A442E",
      "#456B4A",
      "#729A78",
      "#D3E5D6"
    ],
    "tags": [
      "forest",
      "pine needle"
    ]
  },
  {
    "id": "forest-deep-redwood",
    "name": "Deep Redwood",
    "category": "Forest",
    "colors": [
      "#2E1812",
      "#522A1E",
      "#7F4534",
      "#3E5739",
      "#BACDB6"
    ],
    "tags": [
      "forest",
      "deep redwood"
    ]
  },
  {
    "id": "forest-mossy-boulder",
    "name": "Mossy Boulder",
    "category": "Forest",
    "colors": [
      "#283424",
      "#44563E",
      "#6B8361",
      "#A1B797",
      "#E2ECDE"
    ],
    "tags": [
      "forest",
      "mossy boulder"
    ]
  },
  {
    "id": "forest-taiga-fjord",
    "name": "Taiga Fjord",
    "category": "Forest",
    "colors": [
      "#13241C",
      "#234133",
      "#3F6B56",
      "#709E88",
      "#CFE4DB"
    ],
    "tags": [
      "forest",
      "taiga fjord"
    ]
  },
  {
    "id": "forest-misty-fir",
    "name": "Misty Fir",
    "category": "Forest",
    "colors": [
      "#1C2A22",
      "#324A3D",
      "#557563",
      "#89A997",
      "#DDEAE2"
    ],
    "tags": [
      "forest",
      "misty fir"
    ]
  },
  {
    "id": "forest-blackwood-forest",
    "name": "Blackwood Forest",
    "category": "Forest",
    "colors": [
      "#111C15",
      "#213327",
      "#395341",
      "#62856D",
      "#C9DFD1"
    ],
    "tags": [
      "forest",
      "blackwood forest"
    ]
  },
  {
    "id": "forest-woodland-canopy",
    "name": "Woodland Canopy",
    "category": "Forest",
    "colors": [
      "#192E1E",
      "#2D4E34",
      "#4C7A55",
      "#7FA987",
      "#D6E9DB"
    ],
    "tags": [
      "forest",
      "woodland canopy"
    ]
  },
  {
    "id": "forest-highland-spruce",
    "name": "Highland Spruce",
    "category": "Forest",
    "colors": [
      "#1A2F25",
      "#2C4C3E",
      "#497460",
      "#7BA58F",
      "#D6EAE0"
    ],
    "tags": [
      "forest",
      "highland spruce"
    ]
  },
  {
    "id": "forest-cedar-hollow",
    "name": "Cedar Hollow",
    "category": "Forest",
    "colors": [
      "#222B1E",
      "#3D4D36",
      "#657B5B",
      "#9CAD92",
      "#E1ECE0"
    ],
    "tags": [
      "forest",
      "cedar hollow"
    ]
  },
  {
    "id": "forest-birch-grove",
    "name": "Birch Grove",
    "category": "Forest",
    "colors": [
      "#1E2C22",
      "#364B3B",
      "#5A7561",
      "#98B39F",
      "#E8F2EB"
    ],
    "tags": [
      "forest",
      "birch grove"
    ]
  },
  {
    "id": "forest-overgrown-trail",
    "name": "Overgrown Trail",
    "category": "Forest",
    "colors": [
      "#1C3120",
      "#2E5034",
      "#4E7D55",
      "#86B18D",
      "#D9ECD9"
    ],
    "tags": [
      "forest",
      "overgrown trail"
    ]
  },
  {
    "id": "forest-rainy-woodland",
    "name": "Rainy Woodland",
    "category": "Forest",
    "colors": [
      "#162921",
      "#284639",
      "#456F5C",
      "#78A18E",
      "#D4E7DE"
    ],
    "tags": [
      "forest",
      "rainy woodland"
    ]
  },
  {
    "id": "forest-shadowed-pine",
    "name": "Shadowed Pine",
    "category": "Forest",
    "colors": [
      "#131F17",
      "#22382A",
      "#3C5E48",
      "#689274",
      "#CFE3D4"
    ],
    "tags": [
      "forest",
      "shadowed pine"
    ]
  },
  {
    "id": "forest-autumn-woods",
    "name": "Autumn Woods",
    "category": "Forest",
    "colors": [
      "#2E2215",
      "#553E26",
      "#87643E",
      "#3E5A35",
      "#BACFA8"
    ],
    "tags": [
      "forest",
      "autumn woods"
    ]
  },
  {
    "id": "forest-emerald-thicket",
    "name": "Emerald Thicket",
    "category": "Forest",
    "colors": [
      "#152F1D",
      "#254E31",
      "#3F7B4F",
      "#6BB37E",
      "#C8EED2"
    ],
    "tags": [
      "forest",
      "emerald thicket"
    ]
  },
  {
    "id": "forest-lichen-grove",
    "name": "Lichen Grove",
    "category": "Forest",
    "colors": [
      "#202A1F",
      "#394A38",
      "#5E765D",
      "#93AD91",
      "#E1ECE0"
    ],
    "tags": [
      "forest",
      "lichen grove"
    ]
  },
  {
    "id": "forest-woodland-brook",
    "name": "Woodland Brook",
    "category": "Forest",
    "colors": [
      "#142823",
      "#24453D",
      "#3F6E62",
      "#72A396",
      "#CEE6E0"
    ],
    "tags": [
      "forest",
      "woodland brook"
    ]
  },
  {
    "id": "forest-dark-sylvan",
    "name": "Dark Sylvan",
    "category": "Forest",
    "colors": [
      "#121D16",
      "#213527",
      "#395741",
      "#638A6E",
      "#C9DFD0"
    ],
    "tags": [
      "forest",
      "dark sylvan"
    ]
  },
  {
    "id": "forest-boreal-mist",
    "name": "Boreal Mist",
    "category": "Forest",
    "colors": [
      "#182B24",
      "#2C493E",
      "#4B7362",
      "#80A593",
      "#D7EAE0"
    ],
    "tags": [
      "forest",
      "boreal mist"
    ]
  },
  {
    "id": "forest-fern-oak",
    "name": "Fern & Oak",
    "category": "Forest",
    "colors": [
      "#1B2E1C",
      "#2F4E31",
      "#4F7952",
      "#85AD88",
      "#D8EAD9"
    ],
    "tags": [
      "forest",
      "fern & oak"
    ]
  },
  {
    "id": "forest-deep-glade",
    "name": "Deep Glade",
    "category": "Forest",
    "colors": [
      "#142519",
      "#243F2B",
      "#3E6646",
      "#6E9E78",
      "#CCE4D2"
    ],
    "tags": [
      "forest",
      "deep glade"
    ]
  },
  {
    "id": "forest-woodland-hearth",
    "name": "Woodland Hearth",
    "category": "Forest",
    "colors": [
      "#291F18",
      "#4B382B",
      "#7A5E48",
      "#385338",
      "#B7CEB7"
    ],
    "tags": [
      "forest",
      "woodland hearth"
    ]
  },
  {
    "id": "forest-pacific-northwest",
    "name": "Pacific Northwest",
    "category": "Forest",
    "colors": [
      "#162822",
      "#28453B",
      "#456E5F",
      "#78A090",
      "#D6E8E1"
    ],
    "tags": [
      "forest",
      "pacific northwest"
    ]
  },
  {
    "id": "luxury-imperial-gold",
    "name": "Imperial Gold",
    "category": "Luxury",
    "colors": [
      "#1A1713",
      "#383227",
      "#6E614A",
      "#BFA76F",
      "#F4EDE0"
    ],
    "tags": [
      "luxury",
      "imperial gold"
    ]
  },
  {
    "id": "luxury-monaco-night",
    "name": "Monaco Night",
    "category": "Luxury",
    "colors": [
      "#0B101D",
      "#162038",
      "#2C3E6B",
      "#A88D54",
      "#EAE6DF"
    ],
    "tags": [
      "luxury",
      "monaco night"
    ]
  },
  {
    "id": "luxury-black-truffle",
    "name": "Black Truffle",
    "category": "Luxury",
    "colors": [
      "#141312",
      "#2A2724",
      "#4F4A44",
      "#8E857B",
      "#DED8CE"
    ],
    "tags": [
      "luxury",
      "black truffle"
    ]
  },
  {
    "id": "luxury-royal-platinum",
    "name": "Royal Platinum",
    "category": "Luxury",
    "colors": [
      "#18191C",
      "#33363D",
      "#5C616E",
      "#A4ABB8",
      "#F5F7FA"
    ],
    "tags": [
      "luxury",
      "royal platinum"
    ]
  },
  {
    "id": "luxury-caviar-pearls",
    "name": "Caviar & Pearls",
    "category": "Luxury",
    "colors": [
      "#0E0E10",
      "#1C1D21",
      "#373942",
      "#8C8E99",
      "#F0F0F2"
    ],
    "tags": [
      "luxury",
      "caviar & pearls"
    ]
  },
  {
    "id": "luxury-gilded-onyx",
    "name": "Gilded Onyx",
    "category": "Luxury",
    "colors": [
      "#161616",
      "#2E2D2B",
      "#5A564F",
      "#AC9F82",
      "#F2ECE1"
    ],
    "tags": [
      "luxury",
      "gilded onyx"
    ]
  },
  {
    "id": "luxury-haute-couture",
    "name": "Haute Couture",
    "category": "Luxury",
    "colors": [
      "#1F161A",
      "#3F2C33",
      "#6E4D5A",
      "#B48898",
      "#F4E8ED"
    ],
    "tags": [
      "luxury",
      "haute couture"
    ]
  },
  {
    "id": "luxury-private-jet",
    "name": "Private Jet",
    "category": "Luxury",
    "colors": [
      "#171B20",
      "#2E353E",
      "#505C6C",
      "#8C9BAE",
      "#EAF0F6"
    ],
    "tags": [
      "luxury",
      "private jet"
    ]
  },
  {
    "id": "luxury-diamond-pav",
    "name": "Diamond Pavé",
    "category": "Luxury",
    "colors": [
      "#17191C",
      "#32363C",
      "#5B626C",
      "#9CA5B2",
      "#F3F5F8"
    ],
    "tags": [
      "luxury",
      "diamond pavé"
    ]
  },
  {
    "id": "luxury-emerald-tiara",
    "name": "Emerald Tiara",
    "category": "Luxury",
    "colors": [
      "#0D1D16",
      "#1A382B",
      "#2E5F49",
      "#9E864C",
      "#F2ECE0"
    ],
    "tags": [
      "luxury",
      "emerald tiara"
    ]
  },
  {
    "id": "luxury-silk-kimono",
    "name": "Silk Kimono",
    "category": "Luxury",
    "colors": [
      "#22161E",
      "#442C3C",
      "#744A66",
      "#BC86A8",
      "#F6EBF2"
    ],
    "tags": [
      "luxury",
      "silk kimono"
    ]
  },
  {
    "id": "luxury-swiss-chronograph",
    "name": "Swiss Chronograph",
    "category": "Luxury",
    "colors": [
      "#191B1F",
      "#32373E",
      "#58606B",
      "#9BA3AE",
      "#F0F3F6"
    ],
    "tags": [
      "luxury",
      "swiss chronograph"
    ]
  },
  {
    "id": "luxury-amber-reserve",
    "name": "Amber Reserve",
    "category": "Luxury",
    "colors": [
      "#24150A",
      "#492B15",
      "#7E4B24",
      "#C48148",
      "#F5D7B7"
    ],
    "tags": [
      "luxury",
      "amber reserve"
    ]
  },
  {
    "id": "luxury-penthouse-view",
    "name": "Penthouse View",
    "category": "Luxury",
    "colors": [
      "#111621",
      "#212A3D",
      "#3B4A6B",
      "#899CC2",
      "#E8EFF9"
    ],
    "tags": [
      "luxury",
      "penthouse view"
    ]
  },
  {
    "id": "luxury-sovereign-crown",
    "name": "Sovereign Crown",
    "category": "Luxury",
    "colors": [
      "#1F1321",
      "#3D2541",
      "#6C4173",
      "#C79E53",
      "#F6EFE7"
    ],
    "tags": [
      "luxury",
      "sovereign crown"
    ]
  },
  {
    "id": "luxury-venetian-glass",
    "name": "Venetian Glass",
    "category": "Luxury",
    "colors": [
      "#1B181E",
      "#36303C",
      "#5F5569",
      "#A69AAE",
      "#F3EFF6"
    ],
    "tags": [
      "luxury",
      "venetian glass"
    ]
  },
  {
    "id": "luxury-bespoke-suiting",
    "name": "Bespoke Suiting",
    "category": "Luxury",
    "colors": [
      "#1C1E23",
      "#343842",
      "#59606E",
      "#979EA9",
      "#EAECEF"
    ],
    "tags": [
      "luxury",
      "bespoke suiting"
    ]
  },
  {
    "id": "luxury-vintage-ros",
    "name": "Vintage Rosé",
    "category": "Luxury",
    "colors": [
      "#26151B",
      "#4C2B36",
      "#824A5C",
      "#C8869B",
      "#F7E2E8"
    ],
    "tags": [
      "luxury",
      "vintage rosé"
    ]
  },
  {
    "id": "luxury-fine-mahogany",
    "name": "Fine Mahogany",
    "category": "Luxury",
    "colors": [
      "#251511",
      "#4A2A22",
      "#7D473A",
      "#BE7E70",
      "#F1D4CD"
    ],
    "tags": [
      "luxury",
      "fine mahogany"
    ]
  },
  {
    "id": "luxury-yacht-deck",
    "name": "Yacht Deck",
    "category": "Luxury",
    "colors": [
      "#182333",
      "#2C3E5A",
      "#4F6F9E",
      "#A3BADA",
      "#F0F4FA"
    ],
    "tags": [
      "luxury",
      "yacht deck"
    ]
  },
  {
    "id": "luxury-belgian-linen",
    "name": "Belgian Linen",
    "category": "Luxury",
    "colors": [
      "#211F1C",
      "#423E38",
      "#736C62",
      "#B5AC9E",
      "#F4F0E8"
    ],
    "tags": [
      "luxury",
      "belgian linen"
    ]
  },
  {
    "id": "luxury-golden-filigree",
    "name": "Golden Filigree",
    "category": "Luxury",
    "colors": [
      "#201C15",
      "#41382A",
      "#74644B",
      "#BFA97E",
      "#F6EFE2"
    ],
    "tags": [
      "luxury",
      "golden filigree"
    ]
  },
  {
    "id": "luxury-black-orchid",
    "name": "Black Orchid",
    "category": "Luxury",
    "colors": [
      "#16111D",
      "#2C223A",
      "#4F3D67",
      "#8E73B0",
      "#EAE3F3"
    ],
    "tags": [
      "luxury",
      "black orchid"
    ]
  },
  {
    "id": "luxury-opulent-palace",
    "name": "Opulent Palace",
    "category": "Luxury",
    "colors": [
      "#1E1610",
      "#3D2D20",
      "#6B5039",
      "#B8966E",
      "#F5EADC"
    ],
    "tags": [
      "luxury",
      "opulent palace"
    ]
  },
  {
    "id": "cyber-glitch-runner",
    "name": "Glitch Runner",
    "category": "Cyber",
    "colors": [
      "#0A0612",
      "#220042",
      "#7000FF",
      "#00FFE5",
      "#FF0077"
    ],
    "tags": [
      "cyber",
      "glitch runner"
    ]
  },
  {
    "id": "cyber-neural-net",
    "name": "Neural Net",
    "category": "Cyber",
    "colors": [
      "#080E1A",
      "#0F2744",
      "#1E5A96",
      "#00F0FF",
      "#76E5FC"
    ],
    "tags": [
      "cyber",
      "neural net"
    ]
  },
  {
    "id": "cyber-data-breach",
    "name": "Data Breach",
    "category": "Cyber",
    "colors": [
      "#100508",
      "#2D0A13",
      "#681329",
      "#FF003C",
      "#00F0FF"
    ],
    "tags": [
      "cyber",
      "data breach"
    ]
  },
  {
    "id": "cyber-cyber-matrix",
    "name": "Cyber Matrix",
    "category": "Cyber",
    "colors": [
      "#040D06",
      "#092612",
      "#125C2B",
      "#00FF66",
      "#80FFAA"
    ],
    "tags": [
      "cyber",
      "cyber matrix"
    ]
  },
  {
    "id": "cyber-quantum-core",
    "name": "Quantum Core",
    "category": "Cyber",
    "colors": [
      "#070A1E",
      "#101B4B",
      "#1E3799",
      "#00D2D3",
      "#54A0FF"
    ],
    "tags": [
      "cyber",
      "quantum core"
    ]
  },
  {
    "id": "cyber-deep-web",
    "name": "Deep Web",
    "category": "Cyber",
    "colors": [
      "#0A0A0F",
      "#151524",
      "#282847",
      "#4834D4",
      "#686DE0"
    ],
    "tags": [
      "cyber",
      "deep web"
    ]
  },
  {
    "id": "cyber-hacker-terminal",
    "name": "Hacker Terminal",
    "category": "Cyber",
    "colors": [
      "#0C100D",
      "#152417",
      "#224827",
      "#00FF41",
      "#66FF8F"
    ],
    "tags": [
      "cyber",
      "hacker terminal"
    ]
  },
  {
    "id": "cyber-synapse-pulse",
    "name": "Synapse Pulse",
    "category": "Cyber",
    "colors": [
      "#0E0414",
      "#290B38",
      "#5E1B80",
      "#BE2ED6",
      "#00F5FF"
    ],
    "tags": [
      "cyber",
      "synapse pulse"
    ]
  },
  {
    "id": "cyber-optical-fiber",
    "name": "Optical Fiber",
    "category": "Cyber",
    "colors": [
      "#060B14",
      "#0E213D",
      "#1B4D8A",
      "#00A8FF",
      "#00E5FF"
    ],
    "tags": [
      "cyber",
      "optical fiber"
    ]
  },
  {
    "id": "cyber-silicon-valley",
    "name": "Silicon Valley",
    "category": "Cyber",
    "colors": [
      "#0D1117",
      "#161B22",
      "#21262D",
      "#58A6FF",
      "#79C0FF"
    ],
    "tags": [
      "cyber",
      "silicon valley"
    ]
  },
  {
    "id": "cyber-subroutine",
    "name": "Subroutine",
    "category": "Cyber",
    "colors": [
      "#0C0617",
      "#21103C",
      "#4A2382",
      "#9747FF",
      "#00F0FF"
    ],
    "tags": [
      "cyber",
      "subroutine"
    ]
  },
  {
    "id": "cyber-protocol-zero",
    "name": "Protocol Zero",
    "category": "Cyber",
    "colors": [
      "#09090C",
      "#181820",
      "#2F303E",
      "#FF4757",
      "#2ED573"
    ],
    "tags": [
      "cyber",
      "protocol zero"
    ]
  },
  {
    "id": "cyber-ghost-in-shell",
    "name": "Ghost in Shell",
    "category": "Cyber",
    "colors": [
      "#090B13",
      "#161D30",
      "#2E3D63",
      "#00D8D6",
      "#05C46B"
    ],
    "tags": [
      "cyber",
      "ghost in shell"
    ]
  },
  {
    "id": "cyber-overclocked",
    "name": "Overclocked",
    "category": "Cyber",
    "colors": [
      "#140507",
      "#340C13",
      "#7A1728",
      "#FF3838",
      "#FF9F1A"
    ],
    "tags": [
      "cyber",
      "overclocked"
    ]
  },
  {
    "id": "cyber-digital-grid",
    "name": "Digital Grid",
    "category": "Cyber",
    "colors": [
      "#080C14",
      "#101C31",
      "#1D3B68",
      "#18DCFF",
      "#7EFFB2"
    ],
    "tags": [
      "cyber",
      "digital grid"
    ]
  },
  {
    "id": "cyber-dark-crypt",
    "name": "Dark Crypt",
    "category": "Cyber",
    "colors": [
      "#0D0D11",
      "#1A1A22",
      "#30303E",
      "#7D5FFF",
      "#CD84F1"
    ],
    "tags": [
      "cyber",
      "dark crypt"
    ]
  },
  {
    "id": "cyber-plasma-gun",
    "name": "Plasma Gun",
    "category": "Cyber",
    "colors": [
      "#120417",
      "#310A3F",
      "#6D168B",
      "#FF1493",
      "#00FFFF"
    ],
    "tags": [
      "cyber",
      "plasma gun"
    ]
  },
  {
    "id": "cyber-mainframe-alert",
    "name": "Mainframe Alert",
    "category": "Cyber",
    "colors": [
      "#140809",
      "#321013",
      "#681E24",
      "#FF4D4D",
      "#FFA502"
    ],
    "tags": [
      "cyber",
      "mainframe alert"
    ]
  },
  {
    "id": "cyber-vector-space",
    "name": "Vector Space",
    "category": "Cyber",
    "colors": [
      "#090E17",
      "#122238",
      "#21436D",
      "#22A6B3",
      "#7ED6DF"
    ],
    "tags": [
      "cyber",
      "vector space"
    ]
  },
  {
    "id": "cyber-root-access",
    "name": "Root Access",
    "category": "Cyber",
    "colors": [
      "#070F08",
      "#0E2812",
      "#1C5B27",
      "#2ECC71",
      "#A3E4D7"
    ],
    "tags": [
      "cyber",
      "root access"
    ]
  },
  {
    "id": "cyber-ai-construct",
    "name": "AI Construct",
    "category": "Cyber",
    "colors": [
      "#0B0B19",
      "#171738",
      "#2E2E6E",
      "#6C5CE7",
      "#A29BFE"
    ],
    "tags": [
      "cyber",
      "ai construct"
    ]
  },
  {
    "id": "cyber-nanotech",
    "name": "Nanotech",
    "category": "Cyber",
    "colors": [
      "#060F14",
      "#0D2935",
      "#195B72",
      "#00CEC9",
      "#81ECEC"
    ],
    "tags": [
      "cyber",
      "nanotech"
    ]
  },
  {
    "id": "cyber-firewall-breach",
    "name": "Firewall Breach",
    "category": "Cyber",
    "colors": [
      "#17060A",
      "#3A0E18",
      "#7E1B32",
      "#EB2F06",
      "#F6B93B"
    ],
    "tags": [
      "cyber",
      "firewall breach"
    ]
  },
  {
    "id": "cyber-augmented-vision",
    "name": "Augmented Vision",
    "category": "Cyber",
    "colors": [
      "#0C091C",
      "#22194B",
      "#4834D4",
      "#00F0FF",
      "#FF007F"
    ],
    "tags": [
      "cyber",
      "augmented vision"
    ]
  },
  {
    "id": "editorial-bauhaus-print",
    "name": "Bauhaus Print",
    "category": "Editorial",
    "colors": [
      "#1C1D21",
      "#D02B2B",
      "#275296",
      "#E9B824",
      "#F4F4F6"
    ],
    "tags": [
      "editorial",
      "bauhaus print"
    ]
  },
  {
    "id": "editorial-swiss-style",
    "name": "Swiss Style",
    "category": "Editorial",
    "colors": [
      "#000000",
      "#E63946",
      "#457B9D",
      "#A8DADC",
      "#F1FAEE"
    ],
    "tags": [
      "editorial",
      "swiss style"
    ]
  },
  {
    "id": "editorial-vogue-sepia",
    "name": "Vogue Sepia",
    "category": "Editorial",
    "colors": [
      "#1C1613",
      "#42342C",
      "#786052",
      "#BAA291",
      "#F5ECE5"
    ],
    "tags": [
      "editorial",
      "vogue sepia"
    ]
  },
  {
    "id": "editorial-new-yorker-cover",
    "name": "New Yorker Cover",
    "category": "Editorial",
    "colors": [
      "#1D2A44",
      "#3E5C76",
      "#748CAB",
      "#F0EBD8",
      "#D65A31"
    ],
    "tags": [
      "editorial",
      "new yorker cover"
    ]
  },
  {
    "id": "editorial-harper-bizarre",
    "name": "Harper Bizarre",
    "category": "Editorial",
    "colors": [
      "#191216",
      "#3D2A34",
      "#704E5F",
      "#B38B9F",
      "#F4E8EE"
    ],
    "tags": [
      "editorial",
      "harper bizarre"
    ]
  },
  {
    "id": "editorial-monocle-bureau",
    "name": "Monocle Bureau",
    "category": "Editorial",
    "colors": [
      "#1E2224",
      "#3D4448",
      "#6A747B",
      "#A8B2BA",
      "#F3F5F7"
    ],
    "tags": [
      "editorial",
      "monocle bureau"
    ]
  },
  {
    "id": "editorial-kinfolk-clean",
    "name": "Kinfolk Clean",
    "category": "Editorial",
    "colors": [
      "#282623",
      "#514D47",
      "#868076",
      "#C1BBB0",
      "#FAF8F5"
    ],
    "tags": [
      "editorial",
      "kinfolk clean"
    ]
  },
  {
    "id": "editorial-architectural-digest",
    "name": "Architectural Digest",
    "category": "Editorial",
    "colors": [
      "#201E1D",
      "#46403C",
      "#786F68",
      "#B7ADA3",
      "#F5EFEB"
    ],
    "tags": [
      "editorial",
      "architectural digest"
    ]
  },
  {
    "id": "editorial-modern-typography",
    "name": "Modern Typography",
    "category": "Editorial",
    "colors": [
      "#111111",
      "#FF3B30",
      "#007AFF",
      "#8E8E93",
      "#F2F2F7"
    ],
    "tags": [
      "editorial",
      "modern typography"
    ]
  },
  {
    "id": "editorial-cereal-minimal",
    "name": "Cereal Minimal",
    "category": "Editorial",
    "colors": [
      "#232426",
      "#4B4D52",
      "#7D818A",
      "#BAC0CC",
      "#F7F8FA"
    ],
    "tags": [
      "editorial",
      "cereal minimal"
    ]
  },
  {
    "id": "editorial-dwell-modern",
    "name": "Dwell Modern",
    "category": "Editorial",
    "colors": [
      "#242628",
      "#494E52",
      "#798188",
      "#B7BFC7",
      "#EFF2F5"
    ],
    "tags": [
      "editorial",
      "dwell modern"
    ]
  },
  {
    "id": "editorial-national-geographic",
    "name": "National Geographic",
    "category": "Editorial",
    "colors": [
      "#1C1B18",
      "#FFCC00",
      "#2E5B88",
      "#8A6D3B",
      "#F5F4F0"
    ],
    "tags": [
      "editorial",
      "national geographic"
    ]
  },
  {
    "id": "editorial-apartamento-loft",
    "name": "Apartamento Loft",
    "category": "Editorial",
    "colors": [
      "#26221E",
      "#524941",
      "#887B6F",
      "#C5B9AC",
      "#F8F4EE"
    ],
    "tags": [
      "editorial",
      "apartamento loft"
    ]
  },
  {
    "id": "editorial-wired-feature",
    "name": "Wired Feature",
    "category": "Editorial",
    "colors": [
      "#0A0A0A",
      "#FF0055",
      "#00E5FF",
      "#E0E0E0",
      "#FFFFFF"
    ],
    "tags": [
      "editorial",
      "wired feature"
    ]
  },
  {
    "id": "editorial-artforum-journal",
    "name": "Artforum Journal",
    "category": "Editorial",
    "colors": [
      "#171618",
      "#38353A",
      "#66616A",
      "#A39DA8",
      "#F1EEF4"
    ],
    "tags": [
      "editorial",
      "artforum journal"
    ]
  },
  {
    "id": "editorial-wallpaper-magazine",
    "name": "Wallpaper Magazine",
    "category": "Editorial",
    "colors": [
      "#1B1C1E",
      "#3A3D42",
      "#676D76",
      "#A6AFBC",
      "#F2F5F8"
    ],
    "tags": [
      "editorial",
      "wallpaper magazine"
    ]
  },
  {
    "id": "editorial-frame-interior",
    "name": "Frame Interior",
    "category": "Editorial",
    "colors": [
      "#24211F",
      "#4C4641",
      "#7F756E",
      "#BCB1A7",
      "#F5EFE9"
    ],
    "tags": [
      "editorial",
      "frame interior"
    ]
  },
  {
    "id": "editorial-index-book",
    "name": "Index Book",
    "category": "Editorial",
    "colors": [
      "#131416",
      "#2A2C30",
      "#50545C",
      "#8E94A0",
      "#EBEEF2"
    ],
    "tags": [
      "editorial",
      "index book"
    ]
  },
  {
    "id": "editorial-domus-milan",
    "name": "Domus Milan",
    "category": "Editorial",
    "colors": [
      "#201A18",
      "#453733",
      "#775F58",
      "#B59B93",
      "#F4ECE8"
    ],
    "tags": [
      "editorial",
      "domus milan"
    ]
  },
  {
    "id": "editorial-l-officiel-style",
    "name": "L’Officiel Style",
    "category": "Editorial",
    "colors": [
      "#1E161C",
      "#42313E",
      "#74576D",
      "#B596AE",
      "#F5ECF3"
    ],
    "tags": [
      "editorial",
      "l’officiel style"
    ]
  },
  {
    "id": "editorial-esquire-classic",
    "name": "Esquire Classic",
    "category": "Editorial",
    "colors": [
      "#15191E",
      "#2B333D",
      "#4F5D6F",
      "#8C9CB2",
      "#EAF0F6"
    ],
    "tags": [
      "editorial",
      "esquire classic"
    ]
  },
  {
    "id": "editorial-elephant-art",
    "name": "Elephant Art",
    "category": "Editorial",
    "colors": [
      "#1E1C22",
      "#3D3845",
      "#6A6278",
      "#A79EBA",
      "#F2EEF8"
    ],
    "tags": [
      "editorial",
      "elephant art"
    ]
  },
  {
    "id": "editorial-disegno-design",
    "name": "Disegno Design",
    "category": "Editorial",
    "colors": [
      "#1A1C1B",
      "#373A38",
      "#616763",
      "#9CA49F",
      "#EFF2F0"
    ],
    "tags": [
      "editorial",
      "disegno design"
    ]
  },
  {
    "id": "editorial-metropolis-city",
    "name": "Metropolis City",
    "category": "Editorial",
    "colors": [
      "#18191B",
      "#34373C",
      "#5C626B",
      "#969DA8",
      "#EBEFF4"
    ],
    "tags": [
      "editorial",
      "metropolis city"
    ]
  },
  {
    "id": "soft-neutral-desert-linen",
    "name": "Desert Linen",
    "category": "Soft Neutral",
    "colors": [
      "#2C2723",
      "#594F47",
      "#8F8175",
      "#C7B9AC",
      "#FAF4ED"
    ],
    "tags": [
      "soft neutral",
      "desert linen"
    ]
  },
  {
    "id": "soft-neutral-oatmeal-milk",
    "name": "Oatmeal Milk",
    "category": "Soft Neutral",
    "colors": [
      "#2B2825",
      "#55504A",
      "#898278",
      "#C3BDB3",
      "#F8F5EE"
    ],
    "tags": [
      "soft neutral",
      "oatmeal milk"
    ]
  },
  {
    "id": "soft-neutral-warm-cashmere",
    "name": "Warm Cashmere",
    "category": "Soft Neutral",
    "colors": [
      "#2E2926",
      "#5B524D",
      "#91847D",
      "#C9BCB5",
      "#FAF4F0"
    ],
    "tags": [
      "soft neutral",
      "warm cashmere"
    ]
  },
  {
    "id": "soft-neutral-alabaster-stone",
    "name": "Alabaster Stone",
    "category": "Soft Neutral",
    "colors": [
      "#262627",
      "#4E4E50",
      "#808083",
      "#BCBCC0",
      "#F5F5F7"
    ],
    "tags": [
      "soft neutral",
      "alabaster stone"
    ]
  },
  {
    "id": "soft-neutral-tuscan-chalk",
    "name": "Tuscan Chalk",
    "category": "Soft Neutral",
    "colors": [
      "#2C2824",
      "#585149",
      "#8E8377",
      "#C6BCB0",
      "#F7F2EB"
    ],
    "tags": [
      "soft neutral",
      "tuscan chalk"
    ]
  },
  {
    "id": "soft-neutral-ivory-pebble",
    "name": "Ivory Pebble",
    "category": "Soft Neutral",
    "colors": [
      "#282725",
      "#524F4B",
      "#87837D",
      "#C2BEB7",
      "#F6F4EF"
    ],
    "tags": [
      "soft neutral",
      "ivory pebble"
    ]
  },
  {
    "id": "soft-neutral-bone-china",
    "name": "Bone China",
    "category": "Soft Neutral",
    "colors": [
      "#252526",
      "#4D4C4E",
      "#807F83",
      "#BCBBC0",
      "#F6F5F8"
    ],
    "tags": [
      "soft neutral",
      "bone china"
    ]
  },
  {
    "id": "soft-neutral-raw-muslin",
    "name": "Raw Muslin",
    "category": "Soft Neutral",
    "colors": [
      "#2D2924",
      "#5A534A",
      "#908679",
      "#C7BDB1",
      "#F8F3EA"
    ],
    "tags": [
      "soft neutral",
      "raw muslin"
    ]
  },
  {
    "id": "soft-neutral-sand-drift",
    "name": "Sand Drift",
    "category": "Soft Neutral",
    "colors": [
      "#2A2724",
      "#554F49",
      "#8B8279",
      "#C4BCB3",
      "#F7F3EC"
    ],
    "tags": [
      "soft neutral",
      "sand drift"
    ]
  },
  {
    "id": "soft-neutral-birch-bark",
    "name": "Birch Bark",
    "category": "Soft Neutral",
    "colors": [
      "#272728",
      "#505052",
      "#838387",
      "#BEBEC3",
      "#F7F7FA"
    ],
    "tags": [
      "soft neutral",
      "birch bark"
    ]
  },
  {
    "id": "soft-neutral-seashell-white",
    "name": "Seashell White",
    "category": "Soft Neutral",
    "colors": [
      "#2C2726",
      "#59504E",
      "#8F827F",
      "#C7BBB8",
      "#FAF4F3"
    ],
    "tags": [
      "soft neutral",
      "seashell white"
    ]
  },
  {
    "id": "soft-neutral-cotton-seed",
    "name": "Cotton Seed",
    "category": "Soft Neutral",
    "colors": [
      "#292825",
      "#54524B",
      "#89867B",
      "#C3C0B5",
      "#F7F5EE"
    ],
    "tags": [
      "soft neutral",
      "cotton seed"
    ]
  },
  {
    "id": "soft-neutral-fleece-wool",
    "name": "Fleece Wool",
    "category": "Soft Neutral",
    "colors": [
      "#2A2726",
      "#56504D",
      "#8C837F",
      "#C5BCB7",
      "#F6F2EE"
    ],
    "tags": [
      "soft neutral",
      "fleece wool"
    ]
  },
  {
    "id": "soft-neutral-muted-taupe",
    "name": "Muted Taupe",
    "category": "Soft Neutral",
    "colors": [
      "#2E2726",
      "#5C4F4D",
      "#92807D",
      "#C9B8B5",
      "#F8F1F0"
    ],
    "tags": [
      "soft neutral",
      "muted taupe"
    ]
  },
  {
    "id": "soft-neutral-limestone-dust",
    "name": "Limestone Dust",
    "category": "Soft Neutral",
    "colors": [
      "#292827",
      "#53524F",
      "#878581",
      "#C1BFBA",
      "#F5F4F0"
    ],
    "tags": [
      "soft neutral",
      "limestone dust"
    ]
  },
  {
    "id": "soft-neutral-ecru-weave",
    "name": "Ecru Weave",
    "category": "Soft Neutral",
    "colors": [
      "#2C2823",
      "#595147",
      "#8F8374",
      "#C7BCAE",
      "#F8F3EB"
    ],
    "tags": [
      "soft neutral",
      "ecru weave"
    ]
  },
  {
    "id": "soft-neutral-chiffon-whisper",
    "name": "Chiffon Whisper",
    "category": "Soft Neutral",
    "colors": [
      "#2B2727",
      "#575050",
      "#8E8383",
      "#C6BCBC",
      "#F7F3F3"
    ],
    "tags": [
      "soft neutral",
      "chiffon whisper"
    ]
  },
  {
    "id": "soft-neutral-dune-grass",
    "name": "Dune Grass",
    "category": "Soft Neutral",
    "colors": [
      "#292926",
      "#53534C",
      "#88887C",
      "#C2C2B6",
      "#F6F6EE"
    ],
    "tags": [
      "soft neutral",
      "dune grass"
    ]
  },
  {
    "id": "soft-neutral-bleached-wood",
    "name": "Bleached Wood",
    "category": "Soft Neutral",
    "colors": [
      "#2A2826",
      "#56514C",
      "#8B847C",
      "#C4BCB4",
      "#F6F3EE"
    ],
    "tags": [
      "soft neutral",
      "bleached wood"
    ]
  },
  {
    "id": "soft-neutral-silken-thread",
    "name": "Silken Thread",
    "category": "Soft Neutral",
    "colors": [
      "#2B2826",
      "#57514E",
      "#8E8580",
      "#C6BCB7",
      "#F7F2EF"
    ],
    "tags": [
      "soft neutral",
      "silken thread"
    ]
  },
  {
    "id": "soft-neutral-pearl-ash",
    "name": "Pearl Ash",
    "category": "Soft Neutral",
    "colors": [
      "#262628",
      "#4E4E52",
      "#818187",
      "#BCBCC3",
      "#F5F5FA"
    ],
    "tags": [
      "soft neutral",
      "pearl ash"
    ]
  },
  {
    "id": "soft-neutral-flaxen-field",
    "name": "Flaxen Field",
    "category": "Soft Neutral",
    "colors": [
      "#2C2924",
      "#59534A",
      "#8F8678",
      "#C7BEB0",
      "#F8F4EA"
    ],
    "tags": [
      "soft neutral",
      "flaxen field"
    ]
  },
  {
    "id": "soft-neutral-warm-plaster",
    "name": "Warm Plaster",
    "category": "Soft Neutral",
    "colors": [
      "#2C2725",
      "#5A504B",
      "#90827B",
      "#C7B8B1",
      "#FAF2EC"
    ],
    "tags": [
      "soft neutral",
      "warm plaster"
    ]
  },
  {
    "id": "soft-neutral-parchment-light",
    "name": "Parchment Light",
    "category": "Soft Neutral",
    "colors": [
      "#2B2824",
      "#575149",
      "#8D8478",
      "#C5BDB1",
      "#F7F3EB"
    ],
    "tags": [
      "soft neutral",
      "parchment light"
    ]
  },
  {
    "id": "pastel-lemon-chiffon",
    "name": "Lemon Chiffon",
    "category": "Pastel",
    "colors": [
      "#FFF9DB",
      "#FFF3BF",
      "#FFE066",
      "#FFD43B",
      "#F8F9FA"
    ],
    "tags": [
      "pastel",
      "lemon chiffon"
    ]
  },
  {
    "id": "pastel-sugar-almond",
    "name": "Sugar Almond",
    "category": "Pastel",
    "colors": [
      "#F3E9DC",
      "#EBD2B4",
      "#DFBCA0",
      "#C2A385",
      "#FFFDF9"
    ],
    "tags": [
      "pastel",
      "sugar almond"
    ]
  },
  {
    "id": "pastel-dusty-periwinkle",
    "name": "Dusty Periwinkle",
    "category": "Pastel",
    "colors": [
      "#E6E6FA",
      "#D4D4F7",
      "#B8B8F0",
      "#9D9DE0",
      "#F8F8FF"
    ],
    "tags": [
      "pastel",
      "dusty periwinkle"
    ]
  },
  {
    "id": "pastel-marshmallow-melt",
    "name": "Marshmallow Melt",
    "category": "Pastel",
    "colors": [
      "#FFF0F5",
      "#FFE4E1",
      "#FFD1DC",
      "#FFB7C5",
      "#FFFFFF"
    ],
    "tags": [
      "pastel",
      "marshmallow melt"
    ]
  },
  {
    "id": "pastel-buttercream-frosting",
    "name": "Buttercream Frosting",
    "category": "Pastel",
    "colors": [
      "#FEFEE2",
      "#FCF6BD",
      "#F7E785",
      "#E9D66B",
      "#FDFFF5"
    ],
    "tags": [
      "pastel",
      "buttercream frosting"
    ]
  },
  {
    "id": "pastel-iced-lavender",
    "name": "Iced Lavender",
    "category": "Pastel",
    "colors": [
      "#F3E8FF",
      "#E9D5FF",
      "#D8B4FE",
      "#C084FC",
      "#FAF5FF"
    ],
    "tags": [
      "pastel",
      "iced lavender"
    ]
  },
  {
    "id": "pastel-pale-apricot",
    "name": "Pale Apricot",
    "category": "Pastel",
    "colors": [
      "#FFE8D6",
      "#FFD7BA",
      "#FEC89A",
      "#F7B267",
      "#FFF5EB"
    ],
    "tags": [
      "pastel",
      "pale apricot"
    ]
  },
  {
    "id": "pastel-mint-sorbet",
    "name": "Mint Sorbet",
    "category": "Pastel",
    "colors": [
      "#E8F5E9",
      "#C8E6C9",
      "#A5D6A7",
      "#81C784",
      "#F1F8E9"
    ],
    "tags": [
      "pastel",
      "mint sorbet"
    ]
  },
  {
    "id": "pastel-petal-pink",
    "name": "Petal Pink",
    "category": "Pastel",
    "colors": [
      "#FCE4EC",
      "#F8BBD0",
      "#F48FB1",
      "#F06292",
      "#FFF0F5"
    ],
    "tags": [
      "pastel",
      "petal pink"
    ]
  },
  {
    "id": "pastel-sweet-dewdrop",
    "name": "Sweet Dewdrop",
    "category": "Pastel",
    "colors": [
      "#E0F7FA",
      "#B2EBF2",
      "#80DEEA",
      "#4DD0E1",
      "#F0FCFD"
    ],
    "tags": [
      "pastel",
      "sweet dewdrop"
    ]
  },
  {
    "id": "pastel-lilac-macaroon",
    "name": "Lilac Macaroon",
    "category": "Pastel",
    "colors": [
      "#EDE7F6",
      "#D1C4E9",
      "#B39DDB",
      "#9575CD",
      "#F7F4FB"
    ],
    "tags": [
      "pastel",
      "lilac macaroon"
    ]
  },
  {
    "id": "pastel-peach-gelato",
    "name": "Peach Gelato",
    "category": "Pastel",
    "colors": [
      "#FFF3E0",
      "#FFE0B2",
      "#FFCC80",
      "#FFB74D",
      "#FFFBF5"
    ],
    "tags": [
      "pastel",
      "peach gelato"
    ]
  },
  {
    "id": "pastel-morning-mist-pastel",
    "name": "Morning Mist Pastel",
    "category": "Pastel",
    "colors": [
      "#ECEFF1",
      "#CFD8DC",
      "#B0BEC5",
      "#90A4AE",
      "#F5F7F8"
    ],
    "tags": [
      "pastel",
      "morning mist pastel"
    ]
  },
  {
    "id": "pastel-strawberry-milk",
    "name": "Strawberry Milk",
    "category": "Pastel",
    "colors": [
      "#FEEBF1",
      "#FCD5E3",
      "#F9ADC6",
      "#F57FA6",
      "#FFFFFF"
    ],
    "tags": [
      "pastel",
      "strawberry milk"
    ]
  },
  {
    "id": "pastel-vanilla-bean-cream",
    "name": "Vanilla Bean Cream",
    "category": "Pastel",
    "colors": [
      "#FFFBEA",
      "#FEF3C7",
      "#FDE68A",
      "#FCD34D",
      "#FFFDF5"
    ],
    "tags": [
      "pastel",
      "vanilla bean cream"
    ]
  },
  {
    "id": "pastel-whisper-blue",
    "name": "Whisper Blue",
    "category": "Pastel",
    "colors": [
      "#F0F9FF",
      "#E0F2FE",
      "#BAE6FD",
      "#7DD3FC",
      "#F8FCFF"
    ],
    "tags": [
      "pastel",
      "whisper blue"
    ]
  },
  {
    "id": "pastel-sunlit-primrose",
    "name": "Sunlit Primrose",
    "category": "Pastel",
    "colors": [
      "#FEF9C3",
      "#FEF08A",
      "#FDE047",
      "#EAB308",
      "#FFFEF0"
    ],
    "tags": [
      "pastel",
      "sunlit primrose"
    ]
  },
  {
    "id": "pastel-muted-daisy",
    "name": "Muted Daisy",
    "category": "Pastel",
    "colors": [
      "#FEFCE8",
      "#FEF9C3",
      "#E2E8F0",
      "#CBD5E1",
      "#94A3B8"
    ],
    "tags": [
      "pastel",
      "muted daisy"
    ]
  },
  {
    "id": "pastel-rose-quartz-tint",
    "name": "Rose Quartz Tint",
    "category": "Pastel",
    "colors": [
      "#FDF2F8",
      "#FCE7F3",
      "#FBCFE8",
      "#F472B6",
      "#FFF8FB"
    ],
    "tags": [
      "pastel",
      "rose quartz tint"
    ]
  },
  {
    "id": "pastel-soft-clementine",
    "name": "Soft Clementine",
    "category": "Pastel",
    "colors": [
      "#FFF7ED",
      "#FFEDD5",
      "#FED7AA",
      "#FB923C",
      "#FFFCF8"
    ],
    "tags": [
      "pastel",
      "soft clementine"
    ]
  },
  {
    "id": "pastel-powdered-thyme",
    "name": "Powdered Thyme",
    "category": "Pastel",
    "colors": [
      "#F2FBF7",
      "#DCF5E9",
      "#BAEDD3",
      "#82D8AE",
      "#FBFEFC"
    ],
    "tags": [
      "pastel",
      "powdered thyme"
    ]
  },
  {
    "id": "pastel-milk-glass",
    "name": "Milk Glass",
    "category": "Pastel",
    "colors": [
      "#F8FAFC",
      "#F1F5F9",
      "#E2E8F0",
      "#CBD5E1",
      "#FFFFFF"
    ],
    "tags": [
      "pastel",
      "milk glass"
    ]
  },
  {
    "id": "pastel-glazed-porcelain",
    "name": "Glazed Porcelain",
    "category": "Pastel",
    "colors": [
      "#F4FBFB",
      "#E1F5F5",
      "#C0EBEB",
      "#92D7D7",
      "#FAFEFE"
    ],
    "tags": [
      "pastel",
      "glazed porcelain"
    ]
  },
  {
    "id": "pastel-spun-sugar",
    "name": "Spun Sugar",
    "category": "Pastel",
    "colors": [
      "#FFF1F2",
      "#FFE4E6",
      "#FECDD3",
      "#FDA4AF",
      "#FFFFFF"
    ],
    "tags": [
      "pastel",
      "spun sugar"
    ]
  },
  {
    "id": "pastel-honeycomb-cream",
    "name": "Honeycomb Cream",
    "category": "Pastel",
    "colors": [
      "#FEFCE8",
      "#FEF08A",
      "#FACC15",
      "#CA8A04",
      "#FFFDF0"
    ],
    "tags": [
      "pastel",
      "honeycomb cream"
    ]
  },
  {
    "id": "pastel-peach-bellini",
    "name": "Peach Bellini",
    "category": "Pastel",
    "colors": [
      "#FFF5EB",
      "#FEE2CA",
      "#FDC79B",
      "#F89658",
      "#FFFAF4"
    ],
    "tags": [
      "pastel",
      "peach bellini"
    ]
  },
  {
    "id": "pastel-lavender-cream",
    "name": "Lavender Cream",
    "category": "Pastel",
    "colors": [
      "#FAF5FF",
      "#F3E8FF",
      "#E9D5FF",
      "#C084FC",
      "#FCFAFF"
    ],
    "tags": [
      "pastel",
      "lavender cream"
    ]
  },
  {
    "id": "pastel-cloudberry-pastel",
    "name": "Cloudberry Pastel",
    "category": "Pastel",
    "colors": [
      "#FFF8F1",
      "#FEE7D1",
      "#FDCFA7",
      "#F89235",
      "#FFFCFA"
    ],
    "tags": [
      "pastel",
      "cloudberry pastel"
    ]
  },
  {
    "id": "ocean-turquoise-cove",
    "name": "Turquoise Cove",
    "category": "Ocean",
    "colors": [
      "#0A2E36",
      "#145A68",
      "#228B9F",
      "#3EC5DB",
      "#E0F9FD"
    ],
    "tags": [
      "ocean",
      "turquoise cove"
    ]
  },
  {
    "id": "ocean-emerald-wave",
    "name": "Emerald Wave",
    "category": "Ocean",
    "colors": [
      "#062822",
      "#0D4D42",
      "#187D6C",
      "#2CD2B5",
      "#E6FAF6"
    ],
    "tags": [
      "ocean",
      "emerald wave"
    ]
  },
  {
    "id": "ocean-sapphire-horizon",
    "name": "Sapphire Horizon",
    "category": "Ocean",
    "colors": [
      "#0A1931",
      "#15325B",
      "#235293",
      "#4380D3",
      "#EAF2FB"
    ],
    "tags": [
      "ocean",
      "sapphire horizon"
    ]
  },
  {
    "id": "ocean-oceanic-trench",
    "name": "Oceanic Trench",
    "category": "Ocean",
    "colors": [
      "#040D1A",
      "#0B1E38",
      "#14355F",
      "#225899",
      "#DBE8F5"
    ],
    "tags": [
      "ocean",
      "oceanic trench"
    ]
  },
  {
    "id": "ocean-sunlit-shallows",
    "name": "Sunlit Shallows",
    "category": "Ocean",
    "colors": [
      "#0F3843",
      "#1F6B7E",
      "#36A7C3",
      "#72D7ED",
      "#EBFBFE"
    ],
    "tags": [
      "ocean",
      "sunlit shallows"
    ]
  },
  {
    "id": "ocean-coastal-cliff",
    "name": "Coastal Cliff",
    "category": "Ocean",
    "colors": [
      "#1C2826",
      "#354A46",
      "#597872",
      "#8DAEB5",
      "#EAF2F2"
    ],
    "tags": [
      "ocean",
      "coastal cliff"
    ]
  },
  {
    "id": "ocean-deep-navy-trench",
    "name": "Deep Navy Trench",
    "category": "Ocean",
    "colors": [
      "#030914",
      "#08172E",
      "#102A4E",
      "#1D457B",
      "#CBDDF3"
    ],
    "tags": [
      "ocean",
      "deep navy trench"
    ]
  },
  {
    "id": "ocean-sea-anemone",
    "name": "Sea Anemone",
    "category": "Ocean",
    "colors": [
      "#1A0C24",
      "#381B4E",
      "#64328A",
      "#9B58CC",
      "#F4EBFA"
    ],
    "tags": [
      "ocean",
      "sea anemone"
    ]
  },
  {
    "id": "ocean-driftwood-coast",
    "name": "Driftwood Coast",
    "category": "Ocean",
    "colors": [
      "#2B2A27",
      "#4A4742",
      "#736F68",
      "#A8A49C",
      "#F2F1EE"
    ],
    "tags": [
      "ocean",
      "driftwood coast"
    ]
  },
  {
    "id": "ocean-salt-spray-drift",
    "name": "Salt Spray Drift",
    "category": "Ocean",
    "colors": [
      "#102B33",
      "#1F4E5B",
      "#347C90",
      "#63B7CE",
      "#E8F6FA"
    ],
    "tags": [
      "ocean",
      "salt spray drift"
    ]
  },
  {
    "id": "ocean-azure-abyss",
    "name": "Azure Abyss",
    "category": "Ocean",
    "colors": [
      "#051329",
      "#0D2952",
      "#184583",
      "#2C6EC7",
      "#E3EEFB"
    ],
    "tags": [
      "ocean",
      "azure abyss"
    ]
  },
  {
    "id": "ocean-sea-salt-blue",
    "name": "Sea Salt Blue",
    "category": "Ocean",
    "colors": [
      "#132B38",
      "#244D62",
      "#3D7A99",
      "#6EB0D1",
      "#E7F4FA"
    ],
    "tags": [
      "ocean",
      "sea salt blue"
    ]
  },
  {
    "id": "ocean-pelagic-drift",
    "name": "Pelagic Drift",
    "category": "Ocean",
    "colors": [
      "#08202E",
      "#123D54",
      "#206588",
      "#3DA3D5",
      "#E3F4FC"
    ],
    "tags": [
      "ocean",
      "pelagic drift"
    ]
  },
  {
    "id": "ocean-blue-marlin",
    "name": "Blue Marlin",
    "category": "Ocean",
    "colors": [
      "#061726",
      "#0F304E",
      "#1D5382",
      "#3689CD",
      "#DCECF7"
    ],
    "tags": [
      "ocean",
      "blue marlin"
    ]
  },
  {
    "id": "ocean-coral-reef-lagoon",
    "name": "Coral Reef Lagoon",
    "category": "Ocean",
    "colors": [
      "#0C2B30",
      "#18515A",
      "#298694",
      "#47C2D4",
      "#E2F8FB"
    ],
    "tags": [
      "ocean",
      "coral reef lagoon"
    ]
  },
  {
    "id": "ocean-tidal-eddy",
    "name": "Tidal Eddy",
    "category": "Ocean",
    "colors": [
      "#0B2533",
      "#16435B",
      "#276E93",
      "#49A8DA",
      "#E5F4FC"
    ],
    "tags": [
      "ocean",
      "tidal eddy"
    ]
  },
  {
    "id": "ocean-arctic-floe",
    "name": "Arctic Floe",
    "category": "Ocean",
    "colors": [
      "#112530",
      "#204254",
      "#376882",
      "#64A2C3",
      "#E9F3F8"
    ],
    "tags": [
      "ocean",
      "arctic floe"
    ]
  },
  {
    "id": "ocean-bay-of-biscay",
    "name": "Bay of Biscay",
    "category": "Ocean",
    "colors": [
      "#0D1F2D",
      "#1A3A54",
      "#2C5E85",
      "#4B91C4",
      "#E1EEF6"
    ],
    "tags": [
      "ocean",
      "bay of biscay"
    ]
  },
  {
    "id": "ocean-mariana-blue",
    "name": "Mariana Blue",
    "category": "Ocean",
    "colors": [
      "#020A14",
      "#071A30",
      "#0F335B",
      "#1B5A9D",
      "#D1E4FA"
    ],
    "tags": [
      "ocean",
      "mariana blue"
    ]
  },
  {
    "id": "ocean-sargasso-green",
    "name": "Sargasso Green",
    "category": "Ocean",
    "colors": [
      "#0F2B1D",
      "#1E4E36",
      "#327F59",
      "#54BA88",
      "#E5F7EE"
    ],
    "tags": [
      "ocean",
      "sargasso green"
    ]
  },
  {
    "id": "ocean-windward-coast",
    "name": "Windward Coast",
    "category": "Ocean",
    "colors": [
      "#0E2633",
      "#1B475E",
      "#2D7599",
      "#52B1DF",
      "#E5F5FD"
    ],
    "tags": [
      "ocean",
      "windward coast"
    ]
  },
  {
    "id": "ocean-harbor-mist-drift",
    "name": "Harbor Mist Drift",
    "category": "Ocean",
    "colors": [
      "#1A2C35",
      "#2E4C5A",
      "#497488",
      "#77A7BF",
      "#ECF4F8"
    ],
    "tags": [
      "ocean",
      "harbor mist drift"
    ]
  },
  {
    "id": "ocean-oceanic-blue-ridge",
    "name": "Oceanic Blue Ridge",
    "category": "Ocean",
    "colors": [
      "#091D31",
      "#14385E",
      "#225B94",
      "#3B8CDC",
      "#E0EEFB"
    ],
    "tags": [
      "ocean",
      "oceanic blue ridge"
    ]
  },
  {
    "id": "ocean-seafoam-horizon",
    "name": "Seafoam Horizon",
    "category": "Ocean",
    "colors": [
      "#0E302B",
      "#1C564E",
      "#308A7E",
      "#56C7B8",
      "#E6FAF7"
    ],
    "tags": [
      "ocean",
      "seafoam horizon"
    ]
  },
  {
    "id": "ocean-neptune-crown",
    "name": "Neptune Crown",
    "category": "Ocean",
    "colors": [
      "#07192C",
      "#103357",
      "#1E5891",
      "#378EDD",
      "#DFEFFC"
    ],
    "tags": [
      "ocean",
      "neptune crown"
    ]
  },
  {
    "id": "ocean-poseidon-deep",
    "name": "Poseidon Deep",
    "category": "Ocean",
    "colors": [
      "#041221",
      "#0B2644",
      "#154475",
      "#2670BD",
      "#D7E9FC"
    ],
    "tags": [
      "ocean",
      "poseidon deep"
    ]
  },
  {
    "id": "ocean-baltic-coast-line",
    "name": "Baltic Coast Line",
    "category": "Ocean",
    "colors": [
      "#16242B",
      "#293F4A",
      "#436474",
      "#6D99AF",
      "#EBF2F6"
    ],
    "tags": [
      "ocean",
      "baltic coast line"
    ]
  },
  {
    "id": "ocean-indigo-wave-break",
    "name": "Indigo Wave Break",
    "category": "Ocean",
    "colors": [
      "#0E162E",
      "#1B2A54",
      "#2E4585",
      "#4C6EC4",
      "#E8EDF9"
    ],
    "tags": [
      "ocean",
      "indigo wave break"
    ]
  },
  {
    "id": "nature-pine-needle-glade",
    "name": "Pine Needle Glade",
    "category": "Nature",
    "colors": [
      "#122416",
      "#214228",
      "#366941",
      "#5A9F6B",
      "#E4F4E8"
    ],
    "tags": [
      "nature",
      "pine needle glade"
    ]
  },
  {
    "id": "nature-magnolia-branch",
    "name": "Magnolia Branch",
    "category": "Nature",
    "colors": [
      "#2E2620",
      "#54463B",
      "#846F5F",
      "#BDAB9C",
      "#F6F3F0"
    ],
    "tags": [
      "nature",
      "magnolia branch"
    ]
  },
  {
    "id": "nature-clover-patch",
    "name": "Clover Patch",
    "category": "Nature",
    "colors": [
      "#142B18",
      "#244D2B",
      "#3B7A46",
      "#61BA71",
      "#E7F8EB"
    ],
    "tags": [
      "nature",
      "clover patch"
    ]
  },
  {
    "id": "nature-spring-willow",
    "name": "Spring Willow",
    "category": "Nature",
    "colors": [
      "#1C2E1A",
      "#324F2F",
      "#527D4D",
      "#84B87D",
      "#EFF7ED"
    ],
    "tags": [
      "nature",
      "spring willow"
    ]
  },
  {
    "id": "nature-juniper-berry",
    "name": "Juniper Berry",
    "category": "Nature",
    "colors": [
      "#17242B",
      "#273E49",
      "#3E6171",
      "#6696AD",
      "#ECF4F7"
    ],
    "tags": [
      "nature",
      "juniper berry"
    ]
  },
  {
    "id": "nature-mountain-fern",
    "name": "Mountain Fern",
    "category": "Nature",
    "colors": [
      "#132918",
      "#22482B",
      "#387346",
      "#5BB76F",
      "#E6F8EB"
    ],
    "tags": [
      "nature",
      "mountain fern"
    ]
  },
  {
    "id": "nature-wild-lavender-bloom",
    "name": "Wild Lavender Bloom",
    "category": "Nature",
    "colors": [
      "#231C2E",
      "#3D314E",
      "#614F7A",
      "#9681B7",
      "#F3EFF8"
    ],
    "tags": [
      "nature",
      "wild lavender bloom"
    ]
  },
  {
    "id": "nature-thistle-blossom",
    "name": "Thistle Blossom",
    "category": "Nature",
    "colors": [
      "#2A1D28",
      "#483345",
      "#72536E",
      "#AA84A6",
      "#F7F1F6"
    ],
    "tags": [
      "nature",
      "thistle blossom"
    ]
  },
  {
    "id": "nature-bluebell-woods",
    "name": "Bluebell Woods",
    "category": "Nature",
    "colors": [
      "#151C30",
      "#253254",
      "#3E5183",
      "#6881C2",
      "#ECF0FA"
    ],
    "tags": [
      "nature",
      "bluebell woods"
    ]
  },
  {
    "id": "nature-forest-moss-valley",
    "name": "Forest Moss Valley",
    "category": "Nature",
    "colors": [
      "#192915",
      "#2C4725",
      "#476F3C",
      "#73AC63",
      "#EDF6EA"
    ],
    "tags": [
      "nature",
      "forest moss valley"
    ]
  },
  {
    "id": "nature-goldenrod-field",
    "name": "Goldenrod Field",
    "category": "Nature",
    "colors": [
      "#2E2712",
      "#524521",
      "#857137",
      "#C9AE59",
      "#F9F6EA"
    ],
    "tags": [
      "nature",
      "goldenrod field"
    ]
  },
  {
    "id": "nature-cedar-bark-trunk",
    "name": "Cedar Bark Trunk",
    "category": "Nature",
    "colors": [
      "#2B1E19",
      "#4C362D",
      "#79584A",
      "#B08B7B",
      "#F5EFEC"
    ],
    "tags": [
      "nature",
      "cedar bark trunk"
    ]
  },
  {
    "id": "nature-aspen-gold-leaf",
    "name": "Aspen Gold Leaf",
    "category": "Nature",
    "colors": [
      "#2D2513",
      "#4F4223",
      "#806B3A",
      "#C4A65C",
      "#F8F5EC"
    ],
    "tags": [
      "nature",
      "aspen gold leaf"
    ]
  },
  {
    "id": "nature-wild-berry-thicket",
    "name": "Wild Berry Thicket",
    "category": "Nature",
    "colors": [
      "#29151C",
      "#482532",
      "#733C50",
      "#AD637E",
      "#F7EDF1"
    ],
    "tags": [
      "nature",
      "wild berry thicket"
    ]
  },
  {
    "id": "nature-woodland-heather-moor",
    "name": "Woodland Heather Moor",
    "category": "Nature",
    "colors": [
      "#251A22",
      "#412F3D",
      "#674C61",
      "#9C7B95",
      "#F5EFF4"
    ],
    "tags": [
      "nature",
      "woodland heather moor"
    ]
  },
  {
    "id": "nature-sweet-briar-bush",
    "name": "Sweet Briar Bush",
    "category": "Nature",
    "colors": [
      "#29181B",
      "#482B30",
      "#73464E",
      "#AD737D",
      "#F7EFF1"
    ],
    "tags": [
      "nature",
      "sweet briar bush"
    ]
  },
  {
    "id": "nature-meadow-grass-plains",
    "name": "Meadow Grass Plains",
    "category": "Nature",
    "colors": [
      "#1A2C18",
      "#2F4D2B",
      "#4C7946",
      "#7BB873",
      "#ECF6EB"
    ],
    "tags": [
      "nature",
      "meadow grass plains"
    ]
  },
  {
    "id": "nature-sagebrush-valley",
    "name": "Sagebrush Valley",
    "category": "Nature",
    "colors": [
      "#1F2B24",
      "#36493E",
      "#547061",
      "#83A593",
      "#EEF4F0"
    ],
    "tags": [
      "nature",
      "sagebrush valley"
    ]
  },
  {
    "id": "nature-evergreen-canopy-ridge",
    "name": "Evergreen Canopy Ridge",
    "category": "Nature",
    "colors": [
      "#0E2616",
      "#1A4528",
      "#2B6F41",
      "#47A867",
      "#E2F6E9"
    ],
    "tags": [
      "nature",
      "evergreen canopy ridge"
    ]
  },
  {
    "id": "nature-sunlit-foliage-peak",
    "name": "Sunlit Foliage Peak",
    "category": "Nature",
    "colors": [
      "#242D14",
      "#3F4E24",
      "#647C3B",
      "#9BBF62",
      "#F1F7E8"
    ],
    "tags": [
      "nature",
      "sunlit foliage peak"
    ]
  },
  {
    "id": "nature-dewy-moss-stone",
    "name": "Dewy Moss Stone",
    "category": "Nature",
    "colors": [
      "#182B1B",
      "#2B4A30",
      "#44734D",
      "#6DB07B",
      "#EAF5EC"
    ],
    "tags": [
      "nature",
      "dewy moss stone"
    ]
  },
  {
    "id": "nature-heathered-hillside",
    "name": "Heathered Hillside",
    "category": "Nature",
    "colors": [
      "#251E28",
      "#403444",
      "#65546C",
      "#9A86A3",
      "#F4EFF6"
    ],
    "tags": [
      "nature",
      "heathered hillside"
    ]
  },
  {
    "id": "nature-cypress-swamp-bayou",
    "name": "Cypress Swamp Bayou",
    "category": "Nature",
    "colors": [
      "#16251E",
      "#273F34",
      "#3E6152",
      "#679681",
      "#EBF3EF"
    ],
    "tags": [
      "nature",
      "cypress swamp bayou"
    ]
  },
  {
    "id": "nature-spring-thaw-brook",
    "name": "Spring Thaw Brook",
    "category": "Nature",
    "colors": [
      "#16262B",
      "#263F47",
      "#3D626E",
      "#6798A8",
      "#EAF3F6"
    ],
    "tags": [
      "nature",
      "spring thaw brook"
    ]
  },
  {
    "id": "nature-autumn-chaff-wind",
    "name": "Autumn Chaff Wind",
    "category": "Nature",
    "colors": [
      "#2E2519",
      "#50412D",
      "#7E6849",
      "#BAA077",
      "#F6F2EC"
    ],
    "tags": [
      "nature",
      "autumn chaff wind"
    ]
  },
  {
    "id": "nature-oak-gall-branch",
    "name": "Oak Gall Branch",
    "category": "Nature",
    "colors": [
      "#292019",
      "#483A2E",
      "#735E4B",
      "#AA927B",
      "#F5F0EB"
    ],
    "tags": [
      "nature",
      "oak gall branch"
    ]
  },
  {
    "id": "nature-wild-orchard-tree",
    "name": "Wild Orchard Tree",
    "category": "Nature",
    "colors": [
      "#222B18",
      "#3C4B2C",
      "#5F7647",
      "#93B372",
      "#EFF5E9"
    ],
    "tags": [
      "nature",
      "wild orchard tree"
    ]
  },
  {
    "id": "nature-bramble-berry-cane",
    "name": "Bramble Berry Cane",
    "category": "Nature",
    "colors": [
      "#24131D",
      "#412234",
      "#683854",
      "#9E5B83",
      "#F5ECF1"
    ],
    "tags": [
      "nature",
      "bramble berry cane"
    ]
  },
  {
    "id": "sunset-flamingo-sunset",
    "name": "Flamingo Sunset",
    "category": "Sunset",
    "colors": [
      "#3A131C",
      "#682233",
      "#A83B55",
      "#E66885",
      "#FCEEF1"
    ],
    "tags": [
      "sunset",
      "flamingo sunset"
    ]
  },
  {
    "id": "sunset-apricot-horizon",
    "name": "Apricot Horizon",
    "category": "Sunset",
    "colors": [
      "#331A12",
      "#5D3021",
      "#945039",
      "#D98468",
      "#FAF0EC"
    ],
    "tags": [
      "sunset",
      "apricot horizon"
    ]
  },
  {
    "id": "sunset-violet-twilight-skies",
    "name": "Violet Twilight Skies",
    "category": "Sunset",
    "colors": [
      "#21122C",
      "#3D224F",
      "#663B82",
      "#A267C7",
      "#F3ECF8"
    ],
    "tags": [
      "sunset",
      "violet twilight skies"
    ]
  },
  {
    "id": "sunset-burning-sky-dusk",
    "name": "Burning Sky Dusk",
    "category": "Sunset",
    "colors": [
      "#38110D",
      "#672118",
      "#A6382B",
      "#E86654",
      "#FBEEEE"
    ],
    "tags": [
      "sunset",
      "burning sky dusk"
    ]
  },
  {
    "id": "sunset-evening-glow-horizon",
    "name": "Evening Glow Horizon",
    "category": "Sunset",
    "colors": [
      "#351A18",
      "#5E302D",
      "#96524E",
      "#D98A86",
      "#FAF0EF"
    ],
    "tags": [
      "sunset",
      "evening glow horizon"
    ]
  },
  {
    "id": "sunset-sunset-overpass-bridge",
    "name": "Sunset Overpass Bridge",
    "category": "Sunset",
    "colors": [
      "#2A1828",
      "#4C2C48",
      "#794874",
      "#B675AF",
      "#F7EEF6"
    ],
    "tags": [
      "sunset",
      "sunset overpass bridge"
    ]
  },
  {
    "id": "sunset-desert-rose-sunset",
    "name": "Desert Rose Sunset",
    "category": "Sunset",
    "colors": [
      "#301A20",
      "#55303A",
      "#86505D",
      "#C48393",
      "#F8EEF1"
    ],
    "tags": [
      "sunset",
      "desert rose sunset"
    ]
  },
  {
    "id": "sunset-crimson-dusk-shadow",
    "name": "Crimson Dusk Shadow",
    "category": "Sunset",
    "colors": [
      "#360F15",
      "#611D27",
      "#9C3341",
      "#E05F71",
      "#FAEBEF"
    ],
    "tags": [
      "sunset",
      "crimson dusk shadow"
    ]
  },
  {
    "id": "sunset-peach-skyline-vista",
    "name": "Peach Skyline Vista",
    "category": "Sunset",
    "colors": [
      "#351D16",
      "#5F3528",
      "#985945",
      "#DC8F79",
      "#FAF1EE"
    ],
    "tags": [
      "sunset",
      "peach skyline vista"
    ]
  },
  {
    "id": "sunset-sunken-sun-flare",
    "name": "Sunken Sun Flare",
    "category": "Sunset",
    "colors": [
      "#391512",
      "#642822",
      "#9F443B",
      "#E2756A",
      "#FBEFEB"
    ],
    "tags": [
      "sunset",
      "sunken sun flare"
    ]
  },
  {
    "id": "sunset-fiery-mirage-wave",
    "name": "Fiery Mirage Wave",
    "category": "Sunset",
    "colors": [
      "#3B140B",
      "#682616",
      "#A64127",
      "#EB6E4E",
      "#FBEEEC"
    ],
    "tags": [
      "sunset",
      "fiery mirage wave"
    ]
  },
  {
    "id": "sunset-sundown-whisper-breeze",
    "name": "Sundown Whisper Breeze",
    "category": "Sunset",
    "colors": [
      "#2B1B26",
      "#4C3144",
      "#79516E",
      "#B382A6",
      "#F6EFF4"
    ],
    "tags": [
      "sunset",
      "sundown whisper breeze"
    ]
  },
  {
    "id": "sunset-sunset-serenade-song",
    "name": "Sunset Serenade Song",
    "category": "Sunset",
    "colors": [
      "#321926",
      "#582E44",
      "#8B4D6E",
      "#C97DA4",
      "#F8EEF3"
    ],
    "tags": [
      "sunset",
      "sunset serenade song"
    ]
  },
  {
    "id": "sunset-terracotta-sky-ridge",
    "name": "Terracotta Sky Ridge",
    "category": "Sunset",
    "colors": [
      "#311B15",
      "#553127",
      "#875142",
      "#C68371",
      "#F7EFEC"
    ],
    "tags": [
      "sunset",
      "terracotta sky ridge"
    ]
  },
  {
    "id": "sunset-sunset-oasis-spring",
    "name": "Sunset Oasis Spring",
    "category": "Sunset",
    "colors": [
      "#2A1926",
      "#492E43",
      "#734E6B",
      "#AA7C9F",
      "#F5EEF3"
    ],
    "tags": [
      "sunset",
      "sunset oasis spring"
    ]
  },
  {
    "id": "sunset-amber-twilight-glow",
    "name": "Amber Twilight Glow",
    "category": "Sunset",
    "colors": [
      "#341E11",
      "#5C3620",
      "#925936",
      "#D58E5E",
      "#F9F1EB"
    ],
    "tags": [
      "sunset",
      "amber twilight glow"
    ]
  },
  {
    "id": "sunset-pacific-sunset-ocean",
    "name": "Pacific Sunset Ocean",
    "category": "Sunset",
    "colors": [
      "#35161D",
      "#5E2935",
      "#954657",
      "#D6768B",
      "#FAEFF1"
    ],
    "tags": [
      "sunset",
      "pacific sunset ocean"
    ]
  },
  {
    "id": "sunset-lavender-horizon-line",
    "name": "Lavender Horizon Line",
    "category": "Sunset",
    "colors": [
      "#24192F",
      "#402E53",
      "#664C83",
      "#9E7EC4",
      "#F4EFF9"
    ],
    "tags": [
      "sunset",
      "lavender horizon line"
    ]
  },
  {
    "id": "sunset-orange-sherbet-skyfall",
    "name": "Orange Sherbet Skyfall",
    "category": "Sunset",
    "colors": [
      "#381B10",
      "#623220",
      "#9C5539",
      "#DF8664",
      "#FAF0EB"
    ],
    "tags": [
      "sunset",
      "orange sherbet skyfall"
    ]
  },
  {
    "id": "sunset-sunset-crest-hill",
    "name": "Sunset Crest Hill",
    "category": "Sunset",
    "colors": [
      "#331821",
      "#5A2D3C",
      "#8E4B61",
      "#CF7C96",
      "#F9EFF2"
    ],
    "tags": [
      "sunset",
      "sunset crest hill"
    ]
  },
  {
    "id": "sunset-tropic-sundown-bay",
    "name": "Tropic Sundown Bay",
    "category": "Sunset",
    "colors": [
      "#381716",
      "#632C2A",
      "#9C4B47",
      "#DF7D79",
      "#FAEFEB"
    ],
    "tags": [
      "sunset",
      "tropic sundown bay"
    ]
  },
  {
    "id": "sunset-autumn-dusk-wood",
    "name": "Autumn Dusk Wood",
    "category": "Sunset",
    "colors": [
      "#301C19",
      "#53332D",
      "#84554B",
      "#C1887C",
      "#F6EFEB"
    ],
    "tags": [
      "sunset",
      "autumn dusk wood"
    ]
  },
  {
    "id": "sunset-horizon-radiance-beam",
    "name": "Horizon Radiance Beam",
    "category": "Sunset",
    "colors": [
      "#3A1A12",
      "#643124",
      "#9E5240",
      "#E2836E",
      "#FAEFEC"
    ],
    "tags": [
      "sunset",
      "horizon radiance beam"
    ]
  },
  {
    "id": "sunset-evening-flare-star",
    "name": "Evening Flare Star",
    "category": "Sunset",
    "colors": [
      "#381419",
      "#632730",
      "#9E4250",
      "#E16F80",
      "#FAEBEF"
    ],
    "tags": [
      "sunset",
      "evening flare star"
    ]
  },
  {
    "id": "sunset-golden-radiance-field",
    "name": "Golden Radiance Field",
    "category": "Sunset",
    "colors": [
      "#332211",
      "#593D20",
      "#8C6436",
      "#CB985D",
      "#F8F3EC"
    ],
    "tags": [
      "sunset",
      "golden radiance field"
    ]
  },
  {
    "id": "sunset-sundown-ember-hearth",
    "name": "Sundown Ember Hearth",
    "category": "Sunset",
    "colors": [
      "#361413",
      "#602825",
      "#984440",
      "#D9716C",
      "#FAEBEB"
    ],
    "tags": [
      "sunset",
      "sundown ember hearth"
    ]
  },
  {
    "id": "sunset-sunset-veil-cloud",
    "name": "Sunset Veil Cloud",
    "category": "Sunset",
    "colors": [
      "#2B1B2B",
      "#4B314B",
      "#765176",
      "#B082B0",
      "#F6EFF6"
    ],
    "tags": [
      "sunset",
      "sunset veil cloud"
    ]
  },
  {
    "id": "sunset-dusky-quartz-peak",
    "name": "Dusky Quartz Peak",
    "category": "Sunset",
    "colors": [
      "#2E1E26",
      "#4E3543",
      "#7B576B",
      "#B488A1",
      "#F6EFF3"
    ],
    "tags": [
      "sunset",
      "dusky quartz peak"
    ]
  },
  {
    "id": "earth-raw-ochre-soil",
    "name": "Raw Ochre Soil",
    "category": "Earth",
    "colors": [
      "#362512",
      "#5F4120",
      "#966733",
      "#D7974E",
      "#F9F2EB"
    ],
    "tags": [
      "earth",
      "raw ochre soil"
    ]
  },
  {
    "id": "earth-rust-shale-rock",
    "name": "Rust Shale Rock",
    "category": "Earth",
    "colors": [
      "#341B16",
      "#5C3027",
      "#934E3F",
      "#D47562",
      "#FAEFEC"
    ],
    "tags": [
      "earth",
      "rust shale rock"
    ]
  },
  {
    "id": "earth-sandstone-canyon-pass",
    "name": "Sandstone Canyon Pass",
    "category": "Earth",
    "colors": [
      "#362217",
      "#603D2A",
      "#9A6344",
      "#DC936B",
      "#F9EFEB"
    ],
    "tags": [
      "earth",
      "sandstone canyon pass"
    ]
  },
  {
    "id": "earth-desert-mesa-flat",
    "name": "Desert Mesa Flat",
    "category": "Earth",
    "colors": [
      "#311E16",
      "#573627",
      "#8A563F",
      "#C78163",
      "#F8EFEB"
    ],
    "tags": [
      "earth",
      "desert mesa flat"
    ]
  },
  {
    "id": "earth-weathered-slate-bed",
    "name": "Weathered Slate Bed",
    "category": "Earth",
    "colors": [
      "#242426",
      "#3E3E42",
      "#63636B",
      "#9494A1",
      "#F0F0F2"
    ],
    "tags": [
      "earth",
      "weathered slate bed"
    ]
  },
  {
    "id": "earth-siltstone-layer",
    "name": "Siltstone Layer",
    "category": "Earth",
    "colors": [
      "#2F261D",
      "#534434",
      "#846D54",
      "#BD9F80",
      "#F6F2EC"
    ],
    "tags": [
      "earth",
      "siltstone layer"
    ]
  },
  {
    "id": "earth-red-sand-ridge",
    "name": "Red Sand Ridge",
    "category": "Earth",
    "colors": [
      "#3A1813",
      "#662B22",
      "#A34637",
      "#E56D5B",
      "#FCEEEB"
    ],
    "tags": [
      "earth",
      "red sand ridge"
    ]
  },
  {
    "id": "earth-volcanic-ash-cloud",
    "name": "Volcanic Ash Cloud",
    "category": "Earth",
    "colors": [
      "#222123",
      "#3B3A3E",
      "#5F5E66",
      "#8F8D99",
      "#EFEFF2"
    ],
    "tags": [
      "earth",
      "volcanic ash cloud"
    ]
  },
  {
    "id": "earth-umber-wash-tint",
    "name": "Umber Wash Tint",
    "category": "Earth",
    "colors": [
      "#2B2117",
      "#4C3B29",
      "#7A6042",
      "#B2916E",
      "#F5EFE9"
    ],
    "tags": [
      "earth",
      "umber wash tint"
    ]
  },
  {
    "id": "earth-terra-nera-ground",
    "name": "Terra Nera Ground",
    "category": "Earth",
    "colors": [
      "#1C1918",
      "#342F2D",
      "#554C49",
      "#827773",
      "#ECE9E8"
    ],
    "tags": [
      "earth",
      "terra nera ground"
    ]
  },
  {
    "id": "earth-mesa-horizon-edge",
    "name": "Mesa Horizon Edge",
    "category": "Earth",
    "colors": [
      "#341D17",
      "#5C342A",
      "#925343",
      "#D3806E",
      "#FAF0EC"
    ],
    "tags": [
      "earth",
      "mesa horizon edge"
    ]
  },
  {
    "id": "earth-desert-monolith-spire",
    "name": "Desert Monolith Spire",
    "category": "Earth",
    "colors": [
      "#382417",
      "#623F28",
      "#9B6440",
      "#DC9566",
      "#FAEFEC"
    ],
    "tags": [
      "earth",
      "desert monolith spire"
    ]
  },
  {
    "id": "earth-terracotta-hearthstone",
    "name": "Terracotta Hearthstone",
    "category": "Earth",
    "colors": [
      "#351A14",
      "#5E2F24",
      "#964C3B",
      "#D77762",
      "#FAEFEB"
    ],
    "tags": [
      "earth",
      "terracotta hearthstone"
    ]
  },
  {
    "id": "earth-sepia-shale-stratum",
    "name": "Sepia Shale Stratum",
    "category": "Earth",
    "colors": [
      "#2D231C",
      "#4F3E32",
      "#7E6451",
      "#B59682",
      "#F6F1EC"
    ],
    "tags": [
      "earth",
      "sepia shale stratum"
    ]
  },
  {
    "id": "earth-fossil-bed-rock",
    "name": "Fossil Bed Rock",
    "category": "Earth",
    "colors": [
      "#29241E",
      "#484036",
      "#746757",
      "#A99B8B",
      "#F4F1EC"
    ],
    "tags": [
      "earth",
      "fossil bed rock"
    ]
  },
  {
    "id": "earth-red-clay-basin",
    "name": "Red Clay Basin",
    "category": "Earth",
    "colors": [
      "#361612",
      "#5F2820",
      "#984135",
      "#DC6756",
      "#FAEFEB"
    ],
    "tags": [
      "earth",
      "red clay basin"
    ]
  },
  {
    "id": "earth-warm-ochre-quarry",
    "name": "Warm Ochre Quarry",
    "category": "Earth",
    "colors": [
      "#332313",
      "#5B3F23",
      "#916438",
      "#D39659",
      "#F9F2EB"
    ],
    "tags": [
      "earth",
      "warm ochre quarry"
    ]
  },
  {
    "id": "earth-earth-crucible-fire",
    "name": "Earth Crucible Fire",
    "category": "Earth",
    "colors": [
      "#371B11",
      "#61301F",
      "#9B4E32",
      "#DE7957",
      "#FAEFEC"
    ],
    "tags": [
      "earth",
      "earth crucible fire"
    ]
  },
  {
    "id": "earth-clay-quarry-pit",
    "name": "Clay Quarry Pit",
    "category": "Earth",
    "colors": [
      "#331E18",
      "#5A352B",
      "#8F5545",
      "#CE8271",
      "#F8EFEC"
    ],
    "tags": [
      "earth",
      "clay quarry pit"
    ]
  },
  {
    "id": "earth-dune-crest-wind",
    "name": "Dune Crest Wind",
    "category": "Earth",
    "colors": [
      "#37291A",
      "#61492E",
      "#9A754A",
      "#DEB079",
      "#FAF5EE"
    ],
    "tags": [
      "earth",
      "dune crest wind"
    ]
  },
  {
    "id": "earth-desert-strata-shelf",
    "name": "Desert Strata Shelf",
    "category": "Earth",
    "colors": [
      "#32211A",
      "#573A2E",
      "#8C5E4B",
      "#C98D78",
      "#F7EFEA"
    ],
    "tags": [
      "earth",
      "desert strata shelf"
    ]
  },
  {
    "id": "earth-sandstone-peak-crag",
    "name": "Sandstone Peak Crag",
    "category": "Earth",
    "colors": [
      "#352319",
      "#5D3E2C",
      "#946347",
      "#D59675",
      "#F9EFEB"
    ],
    "tags": [
      "earth",
      "sandstone peak crag"
    ]
  },
  {
    "id": "earth-adobe-hearth-kiln",
    "name": "Adobe Hearth Kiln",
    "category": "Earth",
    "colors": [
      "#331C16",
      "#593227",
      "#8E5140",
      "#CE7E6C",
      "#F8EFEA"
    ],
    "tags": [
      "earth",
      "adobe hearth kiln"
    ]
  },
  {
    "id": "earth-baked-silt-mud",
    "name": "Baked Silt Mud",
    "category": "Earth",
    "colors": [
      "#2E221A",
      "#513D2F",
      "#81624C",
      "#BA957E",
      "#F6F0EC"
    ],
    "tags": [
      "earth",
      "baked silt mud"
    ]
  },
  {
    "id": "earth-loam-field-soil",
    "name": "Loam Field Soil",
    "category": "Earth",
    "colors": [
      "#2B211A",
      "#4A392D",
      "#765C4A",
      "#AB8B75",
      "#F4EFEB"
    ],
    "tags": [
      "earth",
      "loam field soil"
    ]
  },
  {
    "id": "earth-ironstone-matrix",
    "name": "Ironstone Matrix",
    "category": "Earth",
    "colors": [
      "#341915",
      "#5C2D26",
      "#924A40",
      "#D37265",
      "#FAECE8"
    ],
    "tags": [
      "earth",
      "ironstone matrix"
    ]
  },
  {
    "id": "earth-dry-caliche-layer",
    "name": "Dry Caliche Layer",
    "category": "Earth",
    "colors": [
      "#2A2722",
      "#4A453D",
      "#756E63",
      "#A8A196",
      "#F3F1ED"
    ],
    "tags": [
      "earth",
      "dry caliche layer"
    ]
  },
  {
    "id": "earth-pumice-valley",
    "name": "Pumice Valley",
    "category": "Earth",
    "colors": [
      "#272523",
      "#45423E",
      "#6E6A64",
      "#A19D97",
      "#F1F0ED"
    ],
    "tags": [
      "earth",
      "pumice valley"
    ]
  },
  {
    "id": "minimal-nordic-slate-form",
    "name": "Nordic Slate Form",
    "category": "Minimal",
    "colors": [
      "#12161A",
      "#242B33",
      "#3D4754",
      "#606E82",
      "#F0F3F7"
    ],
    "tags": [
      "minimal",
      "nordic slate form"
    ]
  },
  {
    "id": "minimal-clean-shadow-line",
    "name": "Clean Shadow Line",
    "category": "Minimal",
    "colors": [
      "#18191A",
      "#2E3033",
      "#4A4E54",
      "#707680",
      "#F2F4F7"
    ],
    "tags": [
      "minimal",
      "clean shadow line"
    ]
  },
  {
    "id": "minimal-minimalist-clay-studio",
    "name": "Minimalist Clay Studio",
    "category": "Minimal",
    "colors": [
      "#1D1B1A",
      "#363330",
      "#56514D",
      "#827D78",
      "#F5F3F0"
    ],
    "tags": [
      "minimal",
      "minimalist clay studio"
    ]
  },
  {
    "id": "minimal-off-white-form",
    "name": "Off-White Form",
    "category": "Minimal",
    "colors": [
      "#1A1A1A",
      "#333333",
      "#595959",
      "#8C8C8C",
      "#FAFAFA"
    ],
    "tags": [
      "minimal",
      "off-white form"
    ]
  },
  {
    "id": "minimal-cool-concrete-studio",
    "name": "Cool Concrete Studio",
    "category": "Minimal",
    "colors": [
      "#161A1D",
      "#293136",
      "#434F57",
      "#697A85",
      "#F1F5F7"
    ],
    "tags": [
      "minimal",
      "cool concrete studio"
    ]
  },
  {
    "id": "minimal-modernist-line-art",
    "name": "Modernist Line Art",
    "category": "Minimal",
    "colors": [
      "#0A0A0A",
      "#1F1F1F",
      "#3D3D3D",
      "#666666",
      "#FFFFFF"
    ],
    "tags": [
      "minimal",
      "modernist line art"
    ]
  },
  {
    "id": "minimal-muted-charcoal-block",
    "name": "Muted Charcoal Block",
    "category": "Minimal",
    "colors": [
      "#14171A",
      "#262C30",
      "#404950",
      "#63707B",
      "#EFF3F5"
    ],
    "tags": [
      "minimal",
      "muted charcoal block"
    ]
  },
  {
    "id": "minimal-blank-canvas-loft",
    "name": "Blank Canvas Loft",
    "category": "Minimal",
    "colors": [
      "#1A1817",
      "#33302E",
      "#54504D",
      "#827C78",
      "#F7F5F2"
    ],
    "tags": [
      "minimal",
      "blank canvas loft"
    ]
  },
  {
    "id": "minimal-titanium-gray-edge",
    "name": "Titanium Gray Edge",
    "category": "Minimal",
    "colors": [
      "#151719",
      "#282C30",
      "#41484F",
      "#68717B",
      "#F0F3F5"
    ],
    "tags": [
      "minimal",
      "titanium gray edge"
    ]
  },
  {
    "id": "minimal-clean-quartz-surface",
    "name": "Clean Quartz Surface",
    "category": "Minimal",
    "colors": [
      "#181A1C",
      "#2D3035",
      "#494E56",
      "#727985",
      "#F2F5F8"
    ],
    "tags": [
      "minimal",
      "clean quartz surface"
    ]
  },
  {
    "id": "minimal-studio-slate-wall",
    "name": "Studio Slate Wall",
    "category": "Minimal",
    "colors": [
      "#13181C",
      "#232C33",
      "#3B4853",
      "#5E7282",
      "#EEF3F7"
    ],
    "tags": [
      "minimal",
      "studio slate wall"
    ]
  },
  {
    "id": "minimal-gallery-white-floor",
    "name": "Gallery White Floor",
    "category": "Minimal",
    "colors": [
      "#111111",
      "#262626",
      "#474747",
      "#737373",
      "#F9F9F9"
    ],
    "tags": [
      "minimal",
      "gallery white floor"
    ]
  },
  {
    "id": "minimal-raw-gypsum-block",
    "name": "Raw Gypsum Block",
    "category": "Minimal",
    "colors": [
      "#1C1B1A",
      "#363433",
      "#575452",
      "#84807D",
      "#F6F5F2"
    ],
    "tags": [
      "minimal",
      "raw gypsum block"
    ]
  },
  {
    "id": "minimal-monolith-gray-mass",
    "name": "Monolith Gray Mass",
    "category": "Minimal",
    "colors": [
      "#17181A",
      "#2A2D30",
      "#45484D",
      "#6B7078",
      "#F1F3F5"
    ],
    "tags": [
      "minimal",
      "monolith gray mass"
    ]
  },
  {
    "id": "minimal-studio-ash-board",
    "name": "Studio Ash Board",
    "category": "Minimal",
    "colors": [
      "#1A1A1C",
      "#303035",
      "#4E4E56",
      "#767682",
      "#F3F3F7"
    ],
    "tags": [
      "minimal",
      "studio ash board"
    ]
  },
  {
    "id": "minimal-fine-line-print",
    "name": "Fine Line Print",
    "category": "Minimal",
    "colors": [
      "#0F0F0F",
      "#242424",
      "#424242",
      "#696969",
      "#FAFAFA"
    ],
    "tags": [
      "minimal",
      "fine line print"
    ]
  },
  {
    "id": "minimal-matte-graphite-bar",
    "name": "Matte Graphite Bar",
    "category": "Minimal",
    "colors": [
      "#121314",
      "#222528",
      "#383D42",
      "#5B626A",
      "#EFF1F3"
    ],
    "tags": [
      "minimal",
      "matte graphite bar"
    ]
  },
  {
    "id": "minimal-clean-slate-slab",
    "name": "Clean Slate Slab",
    "category": "Minimal",
    "colors": [
      "#14181B",
      "#252D33",
      "#3E4952",
      "#62727F",
      "#EFF3F6"
    ],
    "tags": [
      "minimal",
      "clean slate slab"
    ]
  },
  {
    "id": "minimal-subtle-concrete-floor",
    "name": "Subtle Concrete Floor",
    "category": "Minimal",
    "colors": [
      "#191C1E",
      "#2F3438",
      "#4B5257",
      "#737D84",
      "#F2F5F7"
    ],
    "tags": [
      "minimal",
      "subtle concrete floor"
    ]
  },
  {
    "id": "minimal-high-contrast-minimalist",
    "name": "High Contrast Minimalist",
    "category": "Minimal",
    "colors": [
      "#050505",
      "#141414",
      "#2E2E2E",
      "#525252",
      "#FFFFFF"
    ],
    "tags": [
      "minimal",
      "high contrast minimalist"
    ]
  },
  {
    "id": "minimal-bone-zinc-beam",
    "name": "Bone & Zinc Beam",
    "category": "Minimal",
    "colors": [
      "#1B1B18",
      "#33332E",
      "#52524A",
      "#7D7D72",
      "#F5F5ED"
    ],
    "tags": [
      "minimal",
      "bone & zinc beam"
    ]
  },
  {
    "id": "minimal-pale-marble-column",
    "name": "Pale Marble Column",
    "category": "Minimal",
    "colors": [
      "#181A1B",
      "#2D3133",
      "#494E52",
      "#70777C",
      "#F2F5F6"
    ],
    "tags": [
      "minimal",
      "pale marble column"
    ]
  },
  {
    "id": "minimal-gallery-floor-polish",
    "name": "Gallery Floor Polish",
    "category": "Minimal",
    "colors": [
      "#161616",
      "#2C2C2C",
      "#4A4A4A",
      "#757575",
      "#F7F7F7"
    ],
    "tags": [
      "minimal",
      "gallery floor polish"
    ]
  },
  {
    "id": "minimal-minimalist-wood-plank",
    "name": "Minimalist Wood Plank",
    "category": "Minimal",
    "colors": [
      "#1E1A17",
      "#36302B",
      "#574D45",
      "#84776D",
      "#F6F2EE"
    ],
    "tags": [
      "minimal",
      "minimalist wood plank"
    ]
  },
  {
    "id": "minimal-neutral-grid-form",
    "name": "Neutral Grid Form",
    "category": "Minimal",
    "colors": [
      "#17191A",
      "#2B2F30",
      "#474C4D",
      "#6E7475",
      "#F1F3F4"
    ],
    "tags": [
      "minimal",
      "neutral grid form"
    ]
  },
  {
    "id": "minimal-pure-chalk-mark",
    "name": "Pure Chalk Mark",
    "category": "Minimal",
    "colors": [
      "#141414",
      "#292929",
      "#474747",
      "#707070",
      "#FCFCFC"
    ],
    "tags": [
      "minimal",
      "pure chalk mark"
    ]
  },
  {
    "id": "minimal-raw-linen-minimalist",
    "name": "Raw Linen Minimalist",
    "category": "Minimal",
    "colors": [
      "#1C1A17",
      "#34302C",
      "#544F49",
      "#807973",
      "#F5F3EF"
    ],
    "tags": [
      "minimal",
      "raw linen minimalist"
    ]
  },
  {
    "id": "minimal-studio-form-void",
    "name": "Studio Form Void",
    "category": "Minimal",
    "colors": [
      "#0D0D0E",
      "#1C1C1F",
      "#333338",
      "#57575E",
      "#F7F7FA"
    ],
    "tags": [
      "minimal",
      "studio form void"
    ]
  },
  {
    "id": "retro-retro-sunburst",
    "name": "Retro Sunburst",
    "category": "Retro",
    "colors": [
      "#2E1805",
      "#572E09",
      "#914F13",
      "#E08028",
      "#FDF5EC"
    ],
    "tags": [
      "retro",
      "retro sunburst"
    ]
  },
  {
    "id": "retro-am-radio-tuner",
    "name": "AM Radio Tuner",
    "category": "Retro",
    "colors": [
      "#281E12",
      "#4B3822",
      "#7A5D3B",
      "#BA9263",
      "#F7F3EC"
    ],
    "tags": [
      "retro",
      "am radio tuner"
    ]
  },
  {
    "id": "retro-vintage-scooter",
    "name": "Vintage Scooter",
    "category": "Retro",
    "colors": [
      "#0A2624",
      "#144B48",
      "#237D78",
      "#42C4BD",
      "#EAFBF9"
    ],
    "tags": [
      "retro",
      "vintage scooter"
    ]
  },
  {
    "id": "retro-70s-avocado-kitchen",
    "name": "70s Avocado Kitchen",
    "category": "Retro",
    "colors": [
      "#1E260D",
      "#3A4B1A",
      "#5E792C",
      "#92BA4B",
      "#F3F9EA"
    ],
    "tags": [
      "retro",
      "70s avocado kitchen"
    ]
  },
  {
    "id": "retro-pop-art-print-studio",
    "name": "Pop Art Print Studio",
    "category": "Retro",
    "colors": [
      "#2E060D",
      "#570C1A",
      "#941731",
      "#E83155",
      "#FCEEF1"
    ],
    "tags": [
      "retro",
      "pop art print studio"
    ]
  },
  {
    "id": "retro-80s-mall-corridor",
    "name": "80s Mall Corridor",
    "category": "Retro",
    "colors": [
      "#1B0A26",
      "#35144A",
      "#5B237C",
      "#9743C7",
      "#F6EDFA"
    ],
    "tags": [
      "retro",
      "80s mall corridor"
    ]
  },
  {
    "id": "retro-record-store-vinyl",
    "name": "Record Store Vinyl",
    "category": "Retro",
    "colors": [
      "#1A1713",
      "#332D26",
      "#544A3F",
      "#827364",
      "#F5F3EF"
    ],
    "tags": [
      "retro",
      "record store vinyl"
    ]
  },
  {
    "id": "retro-vintage-bowling-alley",
    "name": "Vintage Bowling Alley",
    "category": "Retro",
    "colors": [
      "#2E1712",
      "#572B23",
      "#8E483B",
      "#D87765",
      "#FAEFF1"
    ],
    "tags": [
      "retro",
      "vintage bowling alley"
    ]
  },
  {
    "id": "retro-retro-horizon-glow",
    "name": "Retro Horizon Glow",
    "category": "Retro",
    "colors": [
      "#2B1321",
      "#522540",
      "#873F6B",
      "#D16BA7",
      "#F9EEF5"
    ],
    "tags": [
      "retro",
      "retro horizon glow"
    ]
  },
  {
    "id": "retro-route-66-sign",
    "name": "Route 66 Sign",
    "category": "Retro",
    "colors": [
      "#0A1D2D",
      "#153957",
      "#255D8C",
      "#4293D6",
      "#EAF3FB"
    ],
    "tags": [
      "retro",
      "route 66 sign"
    ]
  },
  {
    "id": "retro-bubblegum-diner-shake",
    "name": "Bubblegum Diner Shake",
    "category": "Retro",
    "colors": [
      "#2D0D1D",
      "#541937",
      "#8A2C5C",
      "#D85195",
      "#FCEEF5"
    ],
    "tags": [
      "retro",
      "bubblegum diner shake"
    ]
  },
  {
    "id": "retro-retro-synth-waveform",
    "name": "Retro Synth Waveform",
    "category": "Retro",
    "colors": [
      "#180A2B",
      "#2E1452",
      "#4E2487",
      "#8242D9",
      "#F4EDFC"
    ],
    "tags": [
      "retro",
      "retro synth waveform"
    ]
  },
  {
    "id": "retro-orange-jumpsuit-70s",
    "name": "Orange Jumpsuit 70s",
    "category": "Retro",
    "colors": [
      "#2E1205",
      "#57220A",
      "#913D15",
      "#DE6628",
      "#FDF2EB"
    ],
    "tags": [
      "retro",
      "orange jumpsuit 70s"
    ]
  },
  {
    "id": "retro-70s-macrame-knot",
    "name": "70s Macrame Knot",
    "category": "Retro",
    "colors": [
      "#261F16",
      "#483A2A",
      "#745E44",
      "#AE906E",
      "#F6F2EC"
    ],
    "tags": [
      "retro",
      "70s macrame knot"
    ]
  },
  {
    "id": "retro-80s-sunset-strip",
    "name": "80s Sunset Strip",
    "category": "Retro",
    "colors": [
      "#2C0B1B",
      "#521634",
      "#852857",
      "#CF488D",
      "#FCECF4"
    ],
    "tags": [
      "retro",
      "80s sunset strip"
    ]
  },
  {
    "id": "retro-retro-geometric-rug",
    "name": "Retro Geometric Rug",
    "category": "Retro",
    "colors": [
      "#2E220F",
      "#543F1D",
      "#876732",
      "#CEA157",
      "#F9F5EC"
    ],
    "tags": [
      "retro",
      "retro geometric rug"
    ]
  },
  {
    "id": "retro-roller-girl-skates",
    "name": "Roller Girl Skates",
    "category": "Retro",
    "colors": [
      "#2A0E23",
      "#4E1B42",
      "#7D2F6B",
      "#C255A9",
      "#F8EEF6"
    ],
    "tags": [
      "retro",
      "roller girl skates"
    ]
  },
  {
    "id": "retro-vinyl-record-groove",
    "name": "Vinyl Record Groove",
    "category": "Retro",
    "colors": [
      "#121214",
      "#232326",
      "#3C3C42",
      "#62626B",
      "#F1F1F3"
    ],
    "tags": [
      "retro",
      "vinyl record groove"
    ]
  },
  {
    "id": "retro-retro-floral-pattern",
    "name": "Retro Floral Pattern",
    "category": "Retro",
    "colors": [
      "#2E150F",
      "#57281D",
      "#8E4433",
      "#DB715B",
      "#FAEEEB"
    ],
    "tags": [
      "retro",
      "retro floral pattern"
    ]
  },
  {
    "id": "retro-70s-vinyl-armchair",
    "name": "70s Vinyl Armchair",
    "category": "Retro",
    "colors": [
      "#2B1B0F",
      "#4F321C",
      "#7F5231",
      "#C28357",
      "#F8F1EB"
    ],
    "tags": [
      "retro",
      "70s vinyl armchair"
    ]
  },
  {
    "id": "retro-wurlitzer-jukebox-glow",
    "name": "Wurlitzer Jukebox Glow",
    "category": "Retro",
    "colors": [
      "#2B0C11",
      "#521822",
      "#862B3B",
      "#D24E65",
      "#FAEEF0"
    ],
    "tags": [
      "retro",
      "wurlitzer jukebox glow"
    ]
  },
  {
    "id": "retro-retro-striping-decal",
    "name": "Retro Striping Decal",
    "category": "Retro",
    "colors": [
      "#2D1C08",
      "#543410",
      "#8A581F",
      "#D68F3B",
      "#FAF3EB"
    ],
    "tags": [
      "retro",
      "retro striping decal"
    ]
  },
  {
    "id": "retro-old-school-van",
    "name": "Old School Van",
    "category": "Retro",
    "colors": [
      "#0E232B",
      "#1C4352",
      "#306F85",
      "#55B0CE",
      "#EBF5F8"
    ],
    "tags": [
      "retro",
      "old school van"
    ]
  },
  {
    "id": "retro-retro-horizon-strip",
    "name": "Retro Horizon Strip",
    "category": "Retro",
    "colors": [
      "#291223",
      "#4E2343",
      "#7F3D6F",
      "#C46AAC",
      "#F7EEF5"
    ],
    "tags": [
      "retro",
      "retro horizon strip"
    ]
  },
  {
    "id": "retro-palm-springs-modernism",
    "name": "Palm Springs Modernism",
    "category": "Retro",
    "colors": [
      "#0E2623",
      "#1A4A44",
      "#2C7971",
      "#4CC2B6",
      "#E7FAF7"
    ],
    "tags": [
      "retro",
      "palm springs modernism"
    ]
  },
  {
    "id": "retro-sunburst-yellow-clock",
    "name": "Sunburst Yellow Clock",
    "category": "Retro",
    "colors": [
      "#2C2307",
      "#52430E",
      "#856F1B",
      "#CDB037",
      "#FAF7EA"
    ],
    "tags": [
      "retro",
      "sunburst yellow clock"
    ]
  },
  {
    "id": "retro-vintage-motel-sign",
    "name": "Vintage Motel Sign",
    "category": "Retro",
    "colors": [
      "#2C0D17",
      "#52192D",
      "#842D4B",
      "#CE4F7B",
      "#FAECF1"
    ],
    "tags": [
      "retro",
      "vintage motel sign"
    ]
  },
  {
    "id": "retro-corduroy-brown-70s",
    "name": "Corduroy Brown 70s",
    "category": "Retro",
    "colors": [
      "#281C13",
      "#4A3424",
      "#75553D",
      "#B08668",
      "#F5F0EB"
    ],
    "tags": [
      "retro",
      "corduroy brown 70s"
    ]
  },
  {
    "id": "neon-electric-prism-ray",
    "name": "Electric Prism Ray",
    "category": "Neon",
    "colors": [
      "#051524",
      "#0A2D4E",
      "#124E82",
      "#228DD9",
      "#E0F2FC"
    ],
    "tags": [
      "neon",
      "electric prism ray"
    ]
  },
  {
    "id": "neon-cyber-street-neon",
    "name": "Cyber Street Neon",
    "category": "Neon",
    "colors": [
      "#1B0626",
      "#350B4B",
      "#5A177C",
      "#9935CA",
      "#F6EBFC"
    ],
    "tags": [
      "neon",
      "cyber street neon"
    ]
  },
  {
    "id": "neon-prism-beam-glow",
    "name": "Prism Beam Glow",
    "category": "Neon",
    "colors": [
      "#05241D",
      "#0B473A",
      "#167B66",
      "#2DD3B2",
      "#E2FAF5"
    ],
    "tags": [
      "neon",
      "prism beam glow"
    ]
  },
  {
    "id": "neon-glowstick-party-rave",
    "name": "Glowstick Party Rave",
    "category": "Neon",
    "colors": [
      "#1C2605",
      "#384C0B",
      "#608216",
      "#A1D930",
      "#F4FBE5"
    ],
    "tags": [
      "neon",
      "glowstick party rave"
    ]
  },
  {
    "id": "neon-electric-indigo-pulse",
    "name": "Electric Indigo Pulse",
    "category": "Neon",
    "colors": [
      "#0F0829",
      "#1E1052",
      "#361E8C",
      "#5F3CE5",
      "#EFEBFD"
    ],
    "tags": [
      "neon",
      "electric indigo pulse"
    ]
  },
  {
    "id": "neon-neon-orchid-flash",
    "name": "Neon Orchid Flash",
    "category": "Neon",
    "colors": [
      "#26051E",
      "#4B0A3B",
      "#7C1563",
      "#CE2EA9",
      "#FAECF7"
    ],
    "tags": [
      "neon",
      "neon orchid flash"
    ]
  },
  {
    "id": "neon-synth-pop-beat",
    "name": "Synth Pop Beat",
    "category": "Neon",
    "colors": [
      "#051F26",
      "#0B3E4C",
      "#166980",
      "#2CB2D6",
      "#E2F7FC"
    ],
    "tags": [
      "neon",
      "synth pop beat"
    ]
  },
  {
    "id": "neon-acid-green-spill",
    "name": "Acid Green Spill",
    "category": "Neon",
    "colors": [
      "#152605",
      "#2B4C0A",
      "#4C8215",
      "#86DE31",
      "#F1FCE4"
    ],
    "tags": [
      "neon",
      "acid green spill"
    ]
  },
  {
    "id": "neon-neon-tangerine-spark",
    "name": "Neon Tangerine Spark",
    "category": "Neon",
    "colors": [
      "#290F05",
      "#4F1E0A",
      "#843515",
      "#DB6030",
      "#FDEEE6"
    ],
    "tags": [
      "neon",
      "neon tangerine spark"
    ]
  },
  {
    "id": "neon-laser-grid-matrix",
    "name": "Laser Grid Matrix",
    "category": "Neon",
    "colors": [
      "#08260D",
      "#104B1B",
      "#1F7E31",
      "#37D45B",
      "#E5FAE9"
    ],
    "tags": [
      "neon",
      "laser grid matrix"
    ]
  },
  {
    "id": "neon-ultra-violet-glow",
    "name": "Ultra Violet Glow",
    "category": "Neon",
    "colors": [
      "#170629",
      "#2E0C4F",
      "#501786",
      "#8C34DE",
      "#F2EBFB"
    ],
    "tags": [
      "neon",
      "ultra violet glow"
    ]
  },
  {
    "id": "neon-cyber-sunset-neon",
    "name": "Cyber Sunset Neon",
    "category": "Neon",
    "colors": [
      "#29081B",
      "#4F1135",
      "#82205A",
      "#D73E99",
      "#FAEDF5"
    ],
    "tags": [
      "neon",
      "cyber sunset neon"
    ]
  },
  {
    "id": "neon-neon-rain-shower",
    "name": "Neon Rain Shower",
    "category": "Neon",
    "colors": [
      "#061A26",
      "#0C344C",
      "#185B82",
      "#2F9CD8",
      "#E3F3FB"
    ],
    "tags": [
      "neon",
      "neon rain shower"
    ]
  },
  {
    "id": "neon-quantum-glow-core",
    "name": "Quantum Glow Core",
    "category": "Neon",
    "colors": [
      "#062624",
      "#0C4B47",
      "#177F79",
      "#30D4CB",
      "#E3FAF9"
    ],
    "tags": [
      "neon",
      "quantum glow core"
    ]
  },
  {
    "id": "neon-electric-mirage-ray",
    "name": "Electric Mirage Ray",
    "category": "Neon",
    "colors": [
      "#261905",
      "#4C330A",
      "#805715",
      "#D69830",
      "#FBF5E6"
    ],
    "tags": [
      "neon",
      "electric mirage ray"
    ]
  },
  {
    "id": "neon-turbo-charge-bolt",
    "name": "Turbo Charge Bolt",
    "category": "Neon",
    "colors": [
      "#050F29",
      "#0B2052",
      "#163B8E",
      "#2F6AE8",
      "#E6EEFD"
    ],
    "tags": [
      "neon",
      "turbo charge bolt"
    ]
  },
  {
    "id": "neon-hyper-violet-shock",
    "name": "Hyper Violet Shock",
    "category": "Neon",
    "colors": [
      "#200629",
      "#3F0C4F",
      "#6B1786",
      "#B733DE",
      "#F7EBFB"
    ],
    "tags": [
      "neon",
      "hyper violet shock"
    ]
  },
  {
    "id": "neon-neon-signboard-glow",
    "name": "Neon Signboard Glow",
    "category": "Neon",
    "colors": [
      "#290610",
      "#4F0D21",
      "#85193B",
      "#DC336B",
      "#FAECF1"
    ],
    "tags": [
      "neon",
      "neon signboard glow"
    ]
  },
  {
    "id": "neon-cyber-alley-flash",
    "name": "Cyber Alley Flash",
    "category": "Neon",
    "colors": [
      "#06291C",
      "#0C5239",
      "#178A61",
      "#30DEA1",
      "#E3FAF2"
    ],
    "tags": [
      "neon",
      "cyber alley flash"
    ]
  },
  {
    "id": "neon-electro-pink-neon",
    "name": "Electro Pink Neon",
    "category": "Neon",
    "colors": [
      "#290518",
      "#520B32",
      "#8A1758",
      "#E33399",
      "#FAEDF6"
    ],
    "tags": [
      "neon",
      "electro pink neon"
    ]
  },
  {
    "id": "neon-laser-blast-bolt",
    "name": "Laser Blast Bolt",
    "category": "Neon",
    "colors": [
      "#062909",
      "#0C5214",
      "#178A26",
      "#30DE4C",
      "#E3FAE7"
    ],
    "tags": [
      "neon",
      "laser blast bolt"
    ]
  },
  {
    "id": "neon-toxic-glow-spill",
    "name": "Toxic Glow Spill",
    "category": "Neon",
    "colors": [
      "#1E2606",
      "#3A4C0B",
      "#658217",
      "#B0DE33",
      "#F5FBE6"
    ],
    "tags": [
      "neon",
      "toxic glow spill"
    ]
  },
  {
    "id": "neon-neon-matrix-grid",
    "name": "Neon Matrix Grid",
    "category": "Neon",
    "colors": [
      "#052429",
      "#0A474F",
      "#157884",
      "#2EC5D8",
      "#E1F8FA"
    ],
    "tags": [
      "neon",
      "neon matrix grid"
    ]
  },
  {
    "id": "neon-cyber-flare-flash",
    "name": "Cyber Flare Flash",
    "category": "Neon",
    "colors": [
      "#290906",
      "#4F150C",
      "#842718",
      "#DB4B33",
      "#FAECE9"
    ],
    "tags": [
      "neon",
      "cyber flare flash"
    ]
  },
  {
    "id": "neon-neon-shock-wave",
    "name": "Neon Shock Wave",
    "category": "Neon",
    "colors": [
      "#1D0629",
      "#390D4F",
      "#631886",
      "#A936DE",
      "#F5EBFA"
    ],
    "tags": [
      "neon",
      "neon shock wave"
    ]
  },
  {
    "id": "neon-electric-violet-beam",
    "name": "Electric Violet Beam",
    "category": "Neon",
    "colors": [
      "#120829",
      "#241052",
      "#41208D",
      "#7543E8",
      "#EFEBFD"
    ],
    "tags": [
      "neon",
      "electric violet beam"
    ]
  },
  {
    "id": "neon-cyber-pulse-burst",
    "name": "Cyber Pulse Burst",
    "category": "Neon",
    "colors": [
      "#051E29",
      "#0A3B4F",
      "#156584",
      "#2CAAD9",
      "#E0F4FB"
    ],
    "tags": [
      "neon",
      "cyber pulse burst"
    ]
  },
  {
    "id": "neon-acid-rain-droplet",
    "name": "Acid Rain Droplet",
    "category": "Neon",
    "colors": [
      "#212905",
      "#414F0A",
      "#708616",
      "#BCE031",
      "#F6FCE4"
    ],
    "tags": [
      "neon",
      "acid rain droplet"
    ]
  },
  {
    "id": "dark-deep-void-abyss",
    "name": "Deep Void Abyss",
    "category": "Dark",
    "colors": [
      "#050508",
      "#0D0E14",
      "#181B26",
      "#272E40",
      "#DCE2ED"
    ],
    "tags": [
      "dark",
      "deep void abyss"
    ]
  },
  {
    "id": "dark-eclipse-shadow-moon",
    "name": "Eclipse Shadow Moon",
    "category": "Dark",
    "colors": [
      "#080608",
      "#141014",
      "#261F26",
      "#3E353E",
      "#EDE8ED"
    ],
    "tags": [
      "dark",
      "eclipse shadow moon"
    ]
  },
  {
    "id": "dark-midnight-ink-spill",
    "name": "Midnight Ink Spill",
    "category": "Dark",
    "colors": [
      "#04070A",
      "#0B121A",
      "#15212E",
      "#22364A",
      "#DBE4ED"
    ],
    "tags": [
      "dark",
      "midnight ink spill"
    ]
  },
  {
    "id": "dark-dark-basalt-monolith",
    "name": "Dark Basalt Monolith",
    "category": "Dark",
    "colors": [
      "#070707",
      "#121214",
      "#212224",
      "#36373A",
      "#E8E9EA"
    ],
    "tags": [
      "dark",
      "dark basalt monolith"
    ]
  },
  {
    "id": "dark-shadow-realm-gate",
    "name": "Shadow Realm Gate",
    "category": "Dark",
    "colors": [
      "#07050A",
      "#130E1A",
      "#241B30",
      "#392C4D",
      "#E9E4ED"
    ],
    "tags": [
      "dark",
      "shadow realm gate"
    ]
  },
  {
    "id": "dark-blackened-oak-plank",
    "name": "Blackened Oak Plank",
    "category": "Dark",
    "colors": [
      "#080605",
      "#14100E",
      "#261F1C",
      "#3E3430",
      "#EDE8E6"
    ],
    "tags": [
      "dark",
      "blackened oak plank"
    ]
  },
  {
    "id": "dark-nocturnal-mirage-lake",
    "name": "Nocturnal Mirage Lake",
    "category": "Dark",
    "colors": [
      "#050709",
      "#0D1318",
      "#18232C",
      "#273845",
      "#DCE4E9"
    ],
    "tags": [
      "dark",
      "nocturnal mirage lake"
    ]
  },
  {
    "id": "dark-midnight-storm-sky",
    "name": "Midnight Storm Sky",
    "category": "Dark",
    "colors": [
      "#06080B",
      "#0E131A",
      "#1A232E",
      "#2A3747",
      "#DCE2E9"
    ],
    "tags": [
      "dark",
      "midnight storm sky"
    ]
  },
  {
    "id": "dark-dark-cosmos-shroud",
    "name": "Dark Cosmos Shroud",
    "category": "Dark",
    "colors": [
      "#07050B",
      "#120F1D",
      "#211C33",
      "#352E4F",
      "#E7E4ED"
    ],
    "tags": [
      "dark",
      "dark cosmos shroud"
    ]
  },
  {
    "id": "dark-black-orchid-petal",
    "name": "Black Orchid Petal",
    "category": "Dark",
    "colors": [
      "#090508",
      "#170E16",
      "#2A1B28",
      "#422E3F",
      "#EAE3E9"
    ],
    "tags": [
      "dark",
      "black orchid petal"
    ]
  },
  {
    "id": "dark-midnight-tide-surge",
    "name": "Midnight Tide Surge",
    "category": "Dark",
    "colors": [
      "#04080B",
      "#0A141C",
      "#152430",
      "#22384A",
      "#DBE4EA"
    ],
    "tags": [
      "dark",
      "midnight tide surge"
    ]
  },
  {
    "id": "dark-shadow-stone-cairn",
    "name": "Shadow Stone Cairn",
    "category": "Dark",
    "colors": [
      "#060707",
      "#111213",
      "#202224",
      "#343739",
      "#E7E8E9"
    ],
    "tags": [
      "dark",
      "shadow stone cairn"
    ]
  },
  {
    "id": "dark-abyssal-trench-depth",
    "name": "Abyssal Trench Depth",
    "category": "Dark",
    "colors": [
      "#030508",
      "#080E14",
      "#111B26",
      "#1D2D3D",
      "#D7DFE7"
    ],
    "tags": [
      "dark",
      "abyssal trench depth"
    ]
  },
  {
    "id": "dark-charcoal-ember-ash",
    "name": "Charcoal Ember Ash",
    "category": "Dark",
    "colors": [
      "#090505",
      "#170E0E",
      "#2A1C1C",
      "#422E2E",
      "#EAE3E3"
    ],
    "tags": [
      "dark",
      "charcoal ember ash"
    ]
  },
  {
    "id": "dark-dark-quartz-crystal",
    "name": "Dark Quartz Crystal",
    "category": "Dark",
    "colors": [
      "#070608",
      "#131116",
      "#232026",
      "#38343D",
      "#E8E6EB"
    ],
    "tags": [
      "dark",
      "dark quartz crystal"
    ]
  },
  {
    "id": "dark-obsidian-glass-edge",
    "name": "Obsidian Glass Edge",
    "category": "Dark",
    "colors": [
      "#060607",
      "#101113",
      "#1F2023",
      "#333538",
      "#E7E7E9"
    ],
    "tags": [
      "dark",
      "obsidian glass edge"
    ]
  },
  {
    "id": "dark-midnight-harbor-fog",
    "name": "Midnight Harbor Fog",
    "category": "Dark",
    "colors": [
      "#05080A",
      "#0D1419",
      "#19242C",
      "#283844",
      "#DDE3E8"
    ],
    "tags": [
      "dark",
      "midnight harbor fog"
    ]
  },
  {
    "id": "dark-night-sky-void",
    "name": "Night Sky Void",
    "category": "Dark",
    "colors": [
      "#040608",
      "#0B1015",
      "#151D26",
      "#232F3C",
      "#DBE1E7"
    ],
    "tags": [
      "dark",
      "night sky void"
    ]
  },
  {
    "id": "dark-dark-iron-ingot",
    "name": "Dark Iron Ingot",
    "category": "Dark",
    "colors": [
      "#060708",
      "#111315",
      "#202326",
      "#34383D",
      "#E7E8EA"
    ],
    "tags": [
      "dark",
      "dark iron ingot"
    ]
  },
  {
    "id": "dark-blackened-steel-plate",
    "name": "Blackened Steel Plate",
    "category": "Dark",
    "colors": [
      "#050608",
      "#0F1217",
      "#1D222A",
      "#303742",
      "#E1E4E9"
    ],
    "tags": [
      "dark",
      "blackened steel plate"
    ]
  },
  {
    "id": "dark-midnight-aurora-veil",
    "name": "Midnight Aurora Veil",
    "category": "Dark",
    "colors": [
      "#050909",
      "#0D1616",
      "#182626",
      "#283B3B",
      "#DCE4E4"
    ],
    "tags": [
      "dark",
      "midnight aurora veil"
    ]
  },
  {
    "id": "dark-obsidian-core-heart",
    "name": "Obsidian Core Heart",
    "category": "Dark",
    "colors": [
      "#050505",
      "#0E0E0F",
      "#1B1C1D",
      "#2D2E30",
      "#E4E5E6"
    ],
    "tags": [
      "dark",
      "obsidian core heart"
    ]
  },
  {
    "id": "dark-dark-slate-quarry",
    "name": "Dark Slate Quarry",
    "category": "Dark",
    "colors": [
      "#050708",
      "#0F1316",
      "#1D2429",
      "#303A41",
      "#E1E5E7"
    ],
    "tags": [
      "dark",
      "dark slate quarry"
    ]
  },
  {
    "id": "dark-nightfall-forest-wild",
    "name": "Nightfall Forest Wild",
    "category": "Dark",
    "colors": [
      "#040705",
      "#0C130E",
      "#16221A",
      "#25352A",
      "#DBE3DC"
    ],
    "tags": [
      "dark",
      "nightfall forest wild"
    ]
  },
  {
    "id": "dark-midnight-eclipse-sun",
    "name": "Midnight Eclipse Sun",
    "category": "Dark",
    "colors": [
      "#070506",
      "#140F11",
      "#241D20",
      "#3B3035",
      "#E9E4E6"
    ],
    "tags": [
      "dark",
      "midnight eclipse sun"
    ]
  },
  {
    "id": "dark-dark-monolith-pillar",
    "name": "Dark Monolith Pillar",
    "category": "Dark",
    "colors": [
      "#060606",
      "#111112",
      "#212123",
      "#353538",
      "#E7E7E8"
    ],
    "tags": [
      "dark",
      "dark monolith pillar"
    ]
  },
  {
    "id": "dark-shadow-velvet-fabric",
    "name": "Shadow Velvet Fabric",
    "category": "Dark",
    "colors": [
      "#080509",
      "#150E17",
      "#271B2B",
      "#3E2D43",
      "#EAE3EC"
    ],
    "tags": [
      "dark",
      "shadow velvet fabric"
    ]
  },
  {
    "id": "dark-night-sovereign-crown",
    "name": "Night Sovereign Crown",
    "category": "Dark",
    "colors": [
      "#070605",
      "#13110E",
      "#23201C",
      "#39352F",
      "#E8E6E4"
    ],
    "tags": [
      "dark",
      "night sovereign crown"
    ]
  },
  {
    "id": "elegant-platinum-rose-petal",
    "name": "Platinum Rose Petal",
    "category": "Elegant",
    "colors": [
      "#1C1418",
      "#382830",
      "#5E4452",
      "#916D80",
      "#F6EFF3"
    ],
    "tags": [
      "elegant",
      "platinum rose petal"
    ]
  },
  {
    "id": "elegant-gilded-mirror-frame",
    "name": "Gilded Mirror Frame",
    "category": "Elegant",
    "colors": [
      "#1D170D",
      "#3B2F1B",
      "#635030",
      "#9E8254",
      "#F6F2EC"
    ],
    "tags": [
      "elegant",
      "gilded mirror frame"
    ]
  },
  {
    "id": "elegant-velvet-curtains-drape",
    "name": "Velvet Curtains Drape",
    "category": "Elegant",
    "colors": [
      "#1F1115",
      "#3E222A",
      "#683B48",
      "#A16072",
      "#F7EDF0"
    ],
    "tags": [
      "elegant",
      "velvet curtains drape"
    ]
  },
  {
    "id": "elegant-cashmere-cardigan-knit",
    "name": "Cashmere Cardigan Knit",
    "category": "Elegant",
    "colors": [
      "#1B1714",
      "#362F29",
      "#5B5047",
      "#8E7F73",
      "#F5F2EF"
    ],
    "tags": [
      "elegant",
      "cashmere cardigan knit"
    ]
  },
  {
    "id": "elegant-crystal-flute-glass",
    "name": "Crystal Flute Glass",
    "category": "Elegant",
    "colors": [
      "#161A1D",
      "#2D343B",
      "#4C5863",
      "#778896",
      "#EFF3F6"
    ],
    "tags": [
      "elegant",
      "crystal flute glass"
    ]
  },
  {
    "id": "elegant-evening-stroll-boulevard",
    "name": "Evening Stroll Boulevard",
    "category": "Elegant",
    "colors": [
      "#19161B",
      "#322C36",
      "#544B5B",
      "#83778C",
      "#F3F0F6"
    ],
    "tags": [
      "elegant",
      "evening stroll boulevard"
    ]
  },
  {
    "id": "elegant-french-chateau-estate",
    "name": "French Chateau Estate",
    "category": "Elegant",
    "colors": [
      "#1A1713",
      "#352F28",
      "#594F45",
      "#8C7E70",
      "#F5F2EE"
    ],
    "tags": [
      "elegant",
      "french chateau estate"
    ]
  },
  {
    "id": "elegant-royal-velvet-cape",
    "name": "Royal Velvet Cape",
    "category": "Elegant",
    "colors": [
      "#1C1124",
      "#372247",
      "#5C3B75",
      "#8E5EB5",
      "#F4EEF8"
    ],
    "tags": [
      "elegant",
      "royal velvet cape"
    ]
  },
  {
    "id": "elegant-vintage-satin-ribbon",
    "name": "Vintage Satin Ribbon",
    "category": "Elegant",
    "colors": [
      "#1F151B",
      "#3E2B37",
      "#66495C",
      "#9C748E",
      "#F6EFF4"
    ],
    "tags": [
      "elegant",
      "vintage satin ribbon"
    ]
  },
  {
    "id": "elegant-venetian-silk-thread",
    "name": "Venetian Silk Thread",
    "category": "Elegant",
    "colors": [
      "#1E1613",
      "#3C2D27",
      "#634C43",
      "#9A7A6E",
      "#F6F1EE"
    ],
    "tags": [
      "elegant",
      "venetian silk thread"
    ]
  },
  {
    "id": "elegant-golden-chandelier-glow",
    "name": "Golden Chandelier Glow",
    "category": "Elegant",
    "colors": [
      "#1E190E",
      "#3D331D",
      "#665733",
      "#A38D59",
      "#F7F4EC"
    ],
    "tags": [
      "elegant",
      "golden chandelier glow"
    ]
  },
  {
    "id": "elegant-white-truffle-essence",
    "name": "White Truffle Essence",
    "category": "Elegant",
    "colors": [
      "#1A1815",
      "#34302C",
      "#58524B",
      "#898177",
      "#F5F3F1"
    ],
    "tags": [
      "elegant",
      "white truffle essence"
    ]
  },
  {
    "id": "elegant-cream-silk-drape",
    "name": "Cream Silk Drape",
    "category": "Elegant",
    "colors": [
      "#1A1816",
      "#34312C",
      "#57524C",
      "#8A837A",
      "#F5F3F0"
    ],
    "tags": [
      "elegant",
      "cream silk drape"
    ]
  },
  {
    "id": "elegant-elegant-silhouette-pose",
    "name": "Elegant Silhouette Pose",
    "category": "Elegant",
    "colors": [
      "#171618",
      "#2E2D31",
      "#4F4C54",
      "#7D7985",
      "#F2F1F5"
    ],
    "tags": [
      "elegant",
      "elegant silhouette pose"
    ]
  },
  {
    "id": "elegant-royal-taupe-blend",
    "name": "Royal Taupe Blend",
    "category": "Elegant",
    "colors": [
      "#1A1716",
      "#352F2C",
      "#584F4B",
      "#8A7D78",
      "#F5F2F1"
    ],
    "tags": [
      "elegant",
      "royal taupe blend"
    ]
  },
  {
    "id": "elegant-champagne-fizz-bubble",
    "name": "Champagne Fizz Bubble",
    "category": "Elegant",
    "colors": [
      "#1C1912",
      "#383225",
      "#5E5440",
      "#95886B",
      "#F6F4EE"
    ],
    "tags": [
      "elegant",
      "champagne fizz bubble"
    ]
  },
  {
    "id": "elegant-silver-lining-cloud",
    "name": "Silver Lining Cloud",
    "category": "Elegant",
    "colors": [
      "#17191A",
      "#2E3235",
      "#4E5358",
      "#7B8188",
      "#F2F4F5"
    ],
    "tags": [
      "elegant",
      "silver lining cloud"
    ]
  },
  {
    "id": "elegant-platinum-damask-fabric",
    "name": "Platinum Damask Fabric",
    "category": "Elegant",
    "colors": [
      "#18191B",
      "#303236",
      "#52555B",
      "#81858D",
      "#F3F4F6"
    ],
    "tags": [
      "elegant",
      "platinum damask fabric"
    ]
  },
  {
    "id": "elegant-velvet-ribbon-choker",
    "name": "Velvet Ribbon Choker",
    "category": "Elegant",
    "colors": [
      "#1D1219",
      "#392432",
      "#5F3D55",
      "#946386",
      "#F5EEF3"
    ],
    "tags": [
      "elegant",
      "velvet ribbon choker"
    ]
  },
  {
    "id": "elegant-silk-kimono-floral",
    "name": "Silk Kimono Floral",
    "category": "Elegant",
    "colors": [
      "#1E1317",
      "#3D2630",
      "#654152",
      "#9F6B84",
      "#F6EEF2"
    ],
    "tags": [
      "elegant",
      "silk kimono floral"
    ]
  },
  {
    "id": "elegant-fine-cashmere-shawl",
    "name": "Fine Cashmere Shawl",
    "category": "Elegant",
    "colors": [
      "#1A1715",
      "#352F2B",
      "#584F4A",
      "#8B7F78",
      "#F5F2F0"
    ],
    "tags": [
      "elegant",
      "fine cashmere shawl"
    ]
  },
  {
    "id": "elegant-ivory-cameo-brooch",
    "name": "Ivory Cameo Brooch",
    "category": "Elegant",
    "colors": [
      "#1B1916",
      "#36322C",
      "#5A534B",
      "#8C8479",
      "#F5F3F0"
    ],
    "tags": [
      "elegant",
      "ivory cameo brooch"
    ]
  },
  {
    "id": "elegant-regency-parlor-room",
    "name": "Regency Parlor Room",
    "category": "Elegant",
    "colors": [
      "#181915",
      "#30332B",
      "#51554A",
      "#818778",
      "#F3F4F1"
    ],
    "tags": [
      "elegant",
      "regency parlor room"
    ]
  },
  {
    "id": "elegant-gilded-frame-border",
    "name": "Gilded Frame Border",
    "category": "Elegant",
    "colors": [
      "#1D170F",
      "#3B2F20",
      "#635138",
      "#9E835E",
      "#F6F2ED"
    ],
    "tags": [
      "elegant",
      "gilded frame border"
    ]
  },
  {
    "id": "elegant-damask-rose-petal",
    "name": "Damask Rose Petal",
    "category": "Elegant",
    "colors": [
      "#1E1318",
      "#3D2631",
      "#654254",
      "#9F6D87",
      "#F6EEF3"
    ],
    "tags": [
      "elegant",
      "damask rose petal"
    ]
  },
  {
    "id": "elegant-vintage-lace-gown",
    "name": "Vintage Lace Gown",
    "category": "Elegant",
    "colors": [
      "#1A1817",
      "#34312F",
      "#57524F",
      "#8A8480",
      "#F5F3F2"
    ],
    "tags": [
      "elegant",
      "vintage lace gown"
    ]
  },
  {
    "id": "elegant-satin-slipper-soft",
    "name": "Satin Slipper Soft",
    "category": "Elegant",
    "colors": [
      "#1E151A",
      "#3C2B35",
      "#644A59",
      "#9C778D",
      "#F6EFF3"
    ],
    "tags": [
      "elegant",
      "satin slipper soft"
    ]
  },
  {
    "id": "elegant-velvet-opera-box",
    "name": "Velvet Opera Box",
    "category": "Elegant",
    "colors": [
      "#1A1017",
      "#34202F",
      "#56384F",
      "#865A7D",
      "#F3EDF2"
    ],
    "tags": [
      "elegant",
      "velvet opera box"
    ]
  },
  {
    "id": "warm-caramel-macchiato-brew",
    "name": "Caramel Macchiato Brew",
    "category": "Warm",
    "colors": [
      "#2B170B",
      "#4D2B16",
      "#7D4928",
      "#BD7547",
      "#F8F1EB"
    ],
    "tags": [
      "warm",
      "caramel macchiato brew"
    ]
  },
  {
    "id": "warm-golden-turmeric-root",
    "name": "Golden Turmeric Root",
    "category": "Warm",
    "colors": [
      "#2E1E05",
      "#52370B",
      "#855B14",
      "#CE922C",
      "#F9F5EC"
    ],
    "tags": [
      "warm",
      "golden turmeric root"
    ]
  },
  {
    "id": "warm-toasted-walnut-shell",
    "name": "Toasted Walnut Shell",
    "category": "Warm",
    "colors": [
      "#28180E",
      "#482D1C",
      "#744B32",
      "#B07856",
      "#F6F0EC"
    ],
    "tags": [
      "warm",
      "toasted walnut shell"
    ]
  },
  {
    "id": "warm-cinnamon-roll-glaze",
    "name": "Cinnamon Roll Glaze",
    "category": "Warm",
    "colors": [
      "#2E170E",
      "#522C1C",
      "#844B33",
      "#C97A59",
      "#F8F0EC"
    ],
    "tags": [
      "warm",
      "cinnamon roll glaze"
    ]
  },
  {
    "id": "warm-spiced-chai-latte",
    "name": "Spiced Chai Latte",
    "category": "Warm",
    "colors": [
      "#29180E",
      "#4B2D1C",
      "#784C32",
      "#B67B57",
      "#F6F0EB"
    ],
    "tags": [
      "warm",
      "spiced chai latte"
    ]
  },
  {
    "id": "warm-amber-resin-drop",
    "name": "Amber Resin Drop",
    "category": "Warm",
    "colors": [
      "#2E1B08",
      "#543312",
      "#875422",
      "#D18742",
      "#F9F3EC"
    ],
    "tags": [
      "warm",
      "amber resin drop"
    ]
  },
  {
    "id": "warm-warm-gingerbread-cookie",
    "name": "Warm Gingerbread Cookie",
    "category": "Warm",
    "colors": [
      "#2B170B",
      "#4E2C17",
      "#7C4B2B",
      "#BB784D",
      "#F7F1EC"
    ],
    "tags": [
      "warm",
      "warm gingerbread cookie"
    ]
  },
  {
    "id": "warm-honey-toffee-crunch",
    "name": "Honey Toffee Crunch",
    "category": "Warm",
    "colors": [
      "#2E1C07",
      "#543511",
      "#885822",
      "#D39043",
      "#F9F3EC"
    ],
    "tags": [
      "warm",
      "honey toffee crunch"
    ]
  },
  {
    "id": "warm-roasted-corn-field",
    "name": "Roasted Corn Field",
    "category": "Warm",
    "colors": [
      "#2C1F08",
      "#503A12",
      "#826022",
      "#C99A44",
      "#F8F4EC"
    ],
    "tags": [
      "warm",
      "roasted corn field"
    ]
  },
  {
    "id": "warm-apple-cider-mull",
    "name": "Apple Cider Mull",
    "category": "Warm",
    "colors": [
      "#2E1609",
      "#542B14",
      "#874A27",
      "#CF7948",
      "#F8F1EB"
    ],
    "tags": [
      "warm",
      "apple cider mull"
    ]
  },
  {
    "id": "warm-butterscotch-glow-dip",
    "name": "Butterscotch Glow Dip",
    "category": "Warm",
    "colors": [
      "#2D1C06",
      "#523510",
      "#855920",
      "#CE9040",
      "#F9F4EB"
    ],
    "tags": [
      "warm",
      "butterscotch glow dip"
    ]
  },
  {
    "id": "warm-cinnamon-spice-jar",
    "name": "Cinnamon Spice Jar",
    "category": "Warm",
    "colors": [
      "#2D160E",
      "#512A1D",
      "#824835",
      "#C7755C",
      "#F7EFEB"
    ],
    "tags": [
      "warm",
      "cinnamon spice jar"
    ]
  },
  {
    "id": "warm-roasted-almond-nut",
    "name": "Roasted Almond Nut",
    "category": "Warm",
    "colors": [
      "#281A10",
      "#4A3221",
      "#765239",
      "#B18262",
      "#F6F1EC"
    ],
    "tags": [
      "warm",
      "roasted almond nut"
    ]
  },
  {
    "id": "warm-warm-sandstone-cliff",
    "name": "Warm Sandstone Cliff",
    "category": "Warm",
    "colors": [
      "#2E1B10",
      "#543422",
      "#86563B",
      "#CE8C67",
      "#F8F1EC"
    ],
    "tags": [
      "warm",
      "warm sandstone cliff"
    ]
  },
  {
    "id": "warm-maple-sugar-tree",
    "name": "Maple Sugar Tree",
    "category": "Warm",
    "colors": [
      "#2B1709",
      "#4E2B14",
      "#7D4A27",
      "#BC7849",
      "#F7F0EB"
    ],
    "tags": [
      "warm",
      "maple sugar tree"
    ]
  },
  {
    "id": "warm-golden-ochre-dust",
    "name": "Golden Ochre Dust",
    "category": "Warm",
    "colors": [
      "#2C1E0A",
      "#4F3816",
      "#7F5C29",
      "#C3934D",
      "#F7F3EB"
    ],
    "tags": [
      "warm",
      "golden ochre dust"
    ]
  },
  {
    "id": "warm-spiced-pumpkin-pie",
    "name": "Spiced Pumpkin Pie",
    "category": "Warm",
    "colors": [
      "#2E1607",
      "#542C11",
      "#884C24",
      "#D37D45",
      "#F8F1EA"
    ],
    "tags": [
      "warm",
      "spiced pumpkin pie"
    ]
  },
  {
    "id": "warm-caramel-swirl-fudge",
    "name": "Caramel Swirl Fudge",
    "category": "Warm",
    "colors": [
      "#2A160A",
      "#4B2A15",
      "#7A4828",
      "#B77448",
      "#F6F0EB"
    ],
    "tags": [
      "warm",
      "caramel swirl fudge"
    ]
  },
  {
    "id": "warm-toasted-brioche-bread",
    "name": "Toasted Brioche Bread",
    "category": "Warm",
    "colors": [
      "#2C1B0B",
      "#503318",
      "#80552D",
      "#C48A54",
      "#F7F2EC"
    ],
    "tags": [
      "warm",
      "toasted brioche bread"
    ]
  },
  {
    "id": "warm-warm-molasses-drip",
    "name": "Warm Molasses Drip",
    "category": "Warm",
    "colors": [
      "#26150B",
      "#452817",
      "#6F432B",
      "#A86C4B",
      "#F4EFEB"
    ],
    "tags": [
      "warm",
      "warm molasses drip"
    ]
  },
  {
    "id": "warm-honeycomb-wax-sheet",
    "name": "Honeycomb Wax Sheet",
    "category": "Warm",
    "colors": [
      "#2D2006",
      "#523C0F",
      "#856320",
      "#CFA140",
      "#F9F5EC"
    ],
    "tags": [
      "warm",
      "honeycomb wax sheet"
    ]
  },
  {
    "id": "warm-amber-glass-bottle",
    "name": "Amber Glass Bottle",
    "category": "Warm",
    "colors": [
      "#2A1707",
      "#4D2D11",
      "#7C4C23",
      "#BF7E44",
      "#F7F1EB"
    ],
    "tags": [
      "warm",
      "amber glass bottle"
    ]
  },
  {
    "id": "warm-cinnamon-stick-bark",
    "name": "Cinnamon Stick Bark",
    "category": "Warm",
    "colors": [
      "#29150B",
      "#4B2917",
      "#79462B",
      "#B8724E",
      "#F6F0EC"
    ],
    "tags": [
      "warm",
      "cinnamon stick bark"
    ]
  },
  {
    "id": "warm-roasted-barley-grain",
    "name": "Roasted Barley Grain",
    "category": "Warm",
    "colors": [
      "#271910",
      "#473021",
      "#73503B",
      "#AC7F64",
      "#F5F0EB"
    ],
    "tags": [
      "warm",
      "roasted barley grain"
    ]
  },
  {
    "id": "warm-warm-paprika-powder",
    "name": "Warm Paprika Powder",
    "category": "Warm",
    "colors": [
      "#2E120A",
      "#542416",
      "#873F2B",
      "#D06A51",
      "#F8EEEB"
    ],
    "tags": [
      "warm",
      "warm paprika powder"
    ]
  },
  {
    "id": "warm-golden-haystack-bale",
    "name": "Golden Haystack Bale",
    "category": "Warm",
    "colors": [
      "#2C210C",
      "#4F3E1B",
      "#7E6532",
      "#C2A05B",
      "#F7F4EC"
    ],
    "tags": [
      "warm",
      "golden haystack bale"
    ]
  },
  {
    "id": "warm-maple-glaze-syrup",
    "name": "Maple Glaze Syrup",
    "category": "Warm",
    "colors": [
      "#2B1609",
      "#4E2A14",
      "#7E4928",
      "#BE7649",
      "#F7F0EB"
    ],
    "tags": [
      "warm",
      "maple glaze syrup"
    ]
  },
  {
    "id": "warm-spiced-cardamom-pod",
    "name": "Spiced Cardamom Pod",
    "category": "Warm",
    "colors": [
      "#291C10",
      "#4B3521",
      "#78573B",
      "#B48A66",
      "#F6F1EC"
    ],
    "tags": [
      "warm",
      "spiced cardamom pod"
    ]
  },
  {
    "id": "cool-frozen-waterfall-drop",
    "name": "Frozen Waterfall Drop",
    "category": "Cool",
    "colors": [
      "#0A1D2B",
      "#163852",
      "#265980",
      "#438EC7",
      "#E7F2FA"
    ],
    "tags": [
      "cool",
      "frozen waterfall drop"
    ]
  },
  {
    "id": "cool-ice-ridge-glissade",
    "name": "Ice Ridge Glissade",
    "category": "Cool",
    "colors": [
      "#0F212E",
      "#1F3E54",
      "#346385",
      "#579BC7",
      "#EBF4F9"
    ],
    "tags": [
      "cool",
      "ice ridge glissade"
    ]
  },
  {
    "id": "cool-polar-bear-tundra",
    "name": "Polar Bear Tundra",
    "category": "Cool",
    "colors": [
      "#172028",
      "#2B3B49",
      "#445B6E",
      "#6B8CA8",
      "#EDF3F7"
    ],
    "tags": [
      "cool",
      "polar bear tundra"
    ]
  },
  {
    "id": "cool-arctic-fox-snow",
    "name": "Arctic Fox Snow",
    "category": "Cool",
    "colors": [
      "#161E26",
      "#2A3745",
      "#43566B",
      "#6A85A3",
      "#ECF1F6"
    ],
    "tags": [
      "cool",
      "arctic fox snow"
    ]
  },
  {
    "id": "cool-silver-mist-glade",
    "name": "Silver Mist Glade",
    "category": "Cool",
    "colors": [
      "#181E24",
      "#2C3742",
      "#455565",
      "#6D849B",
      "#EDF2F6"
    ],
    "tags": [
      "cool",
      "silver mist glade"
    ]
  },
  {
    "id": "cool-cool-breeze-morning",
    "name": "Cool Breeze Morning",
    "category": "Cool",
    "colors": [
      "#11212E",
      "#213E54",
      "#376485",
      "#5D9DC7",
      "#E9F3F9"
    ],
    "tags": [
      "cool",
      "cool breeze morning"
    ]
  },
  {
    "id": "cool-winter-solstice-eve",
    "name": "Winter Solstice Eve",
    "category": "Cool",
    "colors": [
      "#0C1629",
      "#192B4F",
      "#2C4980",
      "#4B77C7",
      "#E8EEFA"
    ],
    "tags": [
      "cool",
      "winter solstice eve"
    ]
  },
  {
    "id": "cool-frosted-berry-shrub",
    "name": "Frosted Berry Shrub",
    "category": "Cool",
    "colors": [
      "#1B1829",
      "#322E4D",
      "#504B7A",
      "#7C76BA",
      "#F0F0FA"
    ],
    "tags": [
      "cool",
      "frosted berry shrub"
    ]
  },
  {
    "id": "cool-ice-floe-drift",
    "name": "Ice Floe Drift",
    "category": "Cool",
    "colors": [
      "#132430",
      "#244154",
      "#3B6582",
      "#629DC4",
      "#EAF3F8"
    ],
    "tags": [
      "cool",
      "ice floe drift"
    ]
  },
  {
    "id": "cool-glacier-blue-stream",
    "name": "Glacier Blue Stream",
    "category": "Cool",
    "colors": [
      "#0C2533",
      "#19455C",
      "#2C6D90",
      "#4CA9DD",
      "#E5F4FC"
    ],
    "tags": [
      "cool",
      "glacier blue stream"
    ]
  },
  {
    "id": "cool-crisp-air-valley",
    "name": "Crisp Air Valley",
    "category": "Cool",
    "colors": [
      "#15232E",
      "#273F52",
      "#3F6482",
      "#679DC7",
      "#EBF3F8"
    ],
    "tags": [
      "cool",
      "crisp air valley"
    ]
  },
  {
    "id": "cool-snowy-peaks-ridge",
    "name": "Snowy Peaks Ridge",
    "category": "Cool",
    "colors": [
      "#181E26",
      "#2D3745",
      "#46566B",
      "#6F84A3",
      "#EDF2F6"
    ],
    "tags": [
      "cool",
      "snowy peaks ridge"
    ]
  },
  {
    "id": "cool-polar-shimmer-sky",
    "name": "Polar Shimmer Sky",
    "category": "Cool",
    "colors": [
      "#0E1F2E",
      "#1B3C57",
      "#2E608A",
      "#4D96D4",
      "#E8F2FA"
    ],
    "tags": [
      "cool",
      "polar shimmer sky"
    ]
  },
  {
    "id": "cool-frozen-stream-bank",
    "name": "Frozen Stream Bank",
    "category": "Cool",
    "colors": [
      "#11222E",
      "#203E54",
      "#366385",
      "#5B9BC7",
      "#E9F3F9"
    ],
    "tags": [
      "cool",
      "frozen stream bank"
    ]
  },
  {
    "id": "cool-silver-fir-forest",
    "name": "Silver Fir Forest",
    "category": "Cool",
    "colors": [
      "#142426",
      "#264245",
      "#3D666B",
      "#659FA6",
      "#EAF4F5"
    ],
    "tags": [
      "cool",
      "silver fir forest"
    ]
  },
  {
    "id": "cool-ice-cap-summit",
    "name": "Ice Cap Summit",
    "category": "Cool",
    "colors": [
      "#102230",
      "#203F57",
      "#36658A",
      "#5B9ECF",
      "#E8F3FA"
    ],
    "tags": [
      "cool",
      "ice cap summit"
    ]
  },
  {
    "id": "cool-winter-sky-clouds",
    "name": "Winter Sky Clouds",
    "category": "Cool",
    "colors": [
      "#141C29",
      "#26344C",
      "#3E5478",
      "#6484B8",
      "#ECF1F9"
    ],
    "tags": [
      "cool",
      "winter sky clouds"
    ]
  },
  {
    "id": "cool-glacier-stream-melt",
    "name": "Glacier Stream Melt",
    "category": "Cool",
    "colors": [
      "#0C2433",
      "#18445B",
      "#2A6C8E",
      "#4BA5D8",
      "#E6F4FB"
    ],
    "tags": [
      "cool",
      "glacier stream melt"
    ]
  },
  {
    "id": "cool-frosted-meadow-grass",
    "name": "Frosted Meadow Grass",
    "category": "Cool",
    "colors": [
      "#162426",
      "#284145",
      "#40656B",
      "#689DA5",
      "#EAF3F4"
    ],
    "tags": [
      "cool",
      "frosted meadow grass"
    ]
  },
  {
    "id": "cool-arctic-sea-current",
    "name": "Arctic Sea Current",
    "category": "Cool",
    "colors": [
      "#0A1D2B",
      "#163852",
      "#285980",
      "#468DC4",
      "#E8F2F9"
    ],
    "tags": [
      "cool",
      "arctic sea current"
    ]
  },
  {
    "id": "cool-ice-needle-frost",
    "name": "Ice Needle Frost",
    "category": "Cool",
    "colors": [
      "#112330",
      "#214057",
      "#38668A",
      "#5EA1D4",
      "#E9F3FA"
    ],
    "tags": [
      "cool",
      "ice needle frost"
    ]
  },
  {
    "id": "cool-frozen-lake-shallows",
    "name": "Frozen Lake Shallows",
    "category": "Cool",
    "colors": [
      "#0E212E",
      "#1E3E54",
      "#336385",
      "#559BC7",
      "#EBF4F9"
    ],
    "tags": [
      "cool",
      "frozen lake shallows"
    ]
  },
  {
    "id": "cool-silver-ice-flake",
    "name": "Silver Ice Flake",
    "category": "Cool",
    "colors": [
      "#161D26",
      "#293645",
      "#42546B",
      "#6883A3",
      "#ECF1F6"
    ],
    "tags": [
      "cool",
      "silver ice flake"
    ]
  },
  {
    "id": "cool-winter-gale-blow",
    "name": "Winter Gale Blow",
    "category": "Cool",
    "colors": [
      "#0E1829",
      "#1C2E4C",
      "#314D7C",
      "#537EC2",
      "#E8EFF9"
    ],
    "tags": [
      "cool",
      "winter gale blow"
    ]
  },
  {
    "id": "cool-cool-slate-floor",
    "name": "Cool Slate Floor",
    "category": "Cool",
    "colors": [
      "#172026",
      "#2B3944",
      "#445969",
      "#6B879E",
      "#EDF2F5"
    ],
    "tags": [
      "cool",
      "cool slate floor"
    ]
  },
  {
    "id": "cool-polar-wind-chill",
    "name": "Polar Wind Chill",
    "category": "Cool",
    "colors": [
      "#101F2B",
      "#203A4F",
      "#375E7E",
      "#5D92BF",
      "#E9F2F8"
    ],
    "tags": [
      "cool",
      "polar wind chill"
    ]
  },
  {
    "id": "cool-iceberg-tip-berg",
    "name": "Iceberg Tip Berg",
    "category": "Cool",
    "colors": [
      "#0D2330",
      "#1A4259",
      "#2E698C",
      "#4FA3D6",
      "#E7F3FB"
    ],
    "tags": [
      "cool",
      "iceberg tip berg"
    ]
  },
  {
    "id": "cool-winter-dawn-calm",
    "name": "Winter Dawn Calm",
    "category": "Cool",
    "colors": [
      "#151B29",
      "#28324A",
      "#415175",
      "#6A81B3",
      "#EDF1F8"
    ],
    "tags": [
      "cool",
      "winter dawn calm"
    ]
  },
  {
    "id": "monochrome-pewter-tones-metal",
    "name": "Pewter Tones Metal",
    "category": "Monochrome",
    "colors": [
      "#161718",
      "#2C2E30",
      "#474A4D",
      "#6D7175",
      "#F1F2F3"
    ],
    "tags": [
      "monochrome",
      "pewter tones metal"
    ]
  },
  {
    "id": "monochrome-cast-iron-kettle",
    "name": "Cast Iron Kettle",
    "category": "Monochrome",
    "colors": [
      "#0F0F10",
      "#1F2021",
      "#343538",
      "#54565B",
      "#ECECEE"
    ],
    "tags": [
      "monochrome",
      "cast iron kettle"
    ]
  },
  {
    "id": "monochrome-slate-shading-layer",
    "name": "Slate Shading Layer",
    "category": "Monochrome",
    "colors": [
      "#141618",
      "#282C30",
      "#41474D",
      "#656D75",
      "#EFF1F3"
    ],
    "tags": [
      "monochrome",
      "slate shading layer"
    ]
  },
  {
    "id": "monochrome-zinc-gradient-strip",
    "name": "Zinc Gradient Strip",
    "category": "Monochrome",
    "colors": [
      "#17191A",
      "#2D3033",
      "#494E52",
      "#70777D",
      "#F2F4F5"
    ],
    "tags": [
      "monochrome",
      "zinc gradient strip"
    ]
  },
  {
    "id": "monochrome-concrete-spectrum-form",
    "name": "Concrete Spectrum Form",
    "category": "Monochrome",
    "colors": [
      "#191A1A",
      "#303233",
      "#4E5052",
      "#75787A",
      "#F3F4F4"
    ],
    "tags": [
      "monochrome",
      "concrete spectrum form"
    ]
  },
  {
    "id": "monochrome-gray-scale-pro-grade",
    "name": "Gray Scale Pro Grade",
    "category": "Monochrome",
    "colors": [
      "#111111",
      "#282828",
      "#484848",
      "#737373",
      "#F7F7F7"
    ],
    "tags": [
      "monochrome",
      "gray scale pro grade"
    ]
  },
  {
    "id": "monochrome-architectural-shading-wash",
    "name": "Architectural Shading Wash",
    "category": "Monochrome",
    "colors": [
      "#131415",
      "#27292B",
      "#424547",
      "#696D70",
      "#F0F1F2"
    ],
    "tags": [
      "monochrome",
      "architectural shading wash"
    ]
  },
  {
    "id": "monochrome-steel-values-ingot",
    "name": "Steel Values Ingot",
    "category": "Monochrome",
    "colors": [
      "#141719",
      "#272B2E",
      "#41474C",
      "#666F75",
      "#EFF2F4"
    ],
    "tags": [
      "monochrome",
      "steel values ingot"
    ]
  },
  {
    "id": "monochrome-carbon-steps-matrix",
    "name": "Carbon Steps Matrix",
    "category": "Monochrome",
    "colors": [
      "#0A0A0B",
      "#171719",
      "#2B2B2E",
      "#49494D",
      "#E9E9EB"
    ],
    "tags": [
      "monochrome",
      "carbon steps matrix"
    ]
  },
  {
    "id": "monochrome-pure-monochrome-balance",
    "name": "Pure Monochrome Balance",
    "category": "Monochrome",
    "colors": [
      "#000000",
      "#1F1F1F",
      "#4A4A4A",
      "#808080",
      "#FFFFFF"
    ],
    "tags": [
      "monochrome",
      "pure monochrome balance"
    ]
  },
  {
    "id": "monochrome-titanium-tones-alloy",
    "name": "Titanium Tones Alloy",
    "category": "Monochrome",
    "colors": [
      "#161719",
      "#2A2C30",
      "#45484F",
      "#6C707A",
      "#F1F2F4"
    ],
    "tags": [
      "monochrome",
      "titanium tones alloy"
    ]
  },
  {
    "id": "monochrome-fog-gradient-mist",
    "name": "Fog Gradient Mist",
    "category": "Monochrome",
    "colors": [
      "#191B1C",
      "#313436",
      "#4F5356",
      "#777C80",
      "#F3F5F6"
    ],
    "tags": [
      "monochrome",
      "fog gradient mist"
    ]
  },
  {
    "id": "monochrome-shadow-value-scale",
    "name": "Shadow Value Scale",
    "category": "Monochrome",
    "colors": [
      "#0E0E0F",
      "#1F1F21",
      "#353538",
      "#57575C",
      "#ECECEE"
    ],
    "tags": [
      "monochrome",
      "shadow value scale"
    ]
  },
  {
    "id": "monochrome-neutral-gray-step-tint",
    "name": "Neutral Gray Step Tint",
    "category": "Monochrome",
    "colors": [
      "#171717",
      "#2E2E2E",
      "#4E4E4E",
      "#787878",
      "#F3F3F3"
    ],
    "tags": [
      "monochrome",
      "neutral gray step tint"
    ]
  },
  {
    "id": "monochrome-platinum-spectrum-shine",
    "name": "Platinum Spectrum Shine",
    "category": "Monochrome",
    "colors": [
      "#191A1B",
      "#303133",
      "#4D4F52",
      "#76797D",
      "#F3F4F5"
    ],
    "tags": [
      "monochrome",
      "platinum spectrum shine"
    ]
  },
  {
    "id": "monochrome-industrial-gradient-steel",
    "name": "Industrial Gradient Steel",
    "category": "Monochrome",
    "colors": [
      "#131517",
      "#25292D",
      "#3F454B",
      "#636C75",
      "#EFF1F3"
    ],
    "tags": [
      "monochrome",
      "industrial gradient steel"
    ]
  },
  {
    "id": "monochrome-ash-gradient-chalk",
    "name": "Ash Gradient Chalk",
    "category": "Monochrome",
    "colors": [
      "#181919",
      "#2F3030",
      "#4B4D4D",
      "#727575",
      "#F2F3F3"
    ],
    "tags": [
      "monochrome",
      "ash gradient chalk"
    ]
  },
  {
    "id": "monochrome-basalt-scale-wall",
    "name": "Basalt Scale Wall",
    "category": "Monochrome",
    "colors": [
      "#121314",
      "#232526",
      "#3C3E40",
      "#606366",
      "#F0F1F2"
    ],
    "tags": [
      "monochrome",
      "basalt scale wall"
    ]
  },
  {
    "id": "monochrome-graphite-scale-core",
    "name": "Graphite Scale Core",
    "category": "Monochrome",
    "colors": [
      "#101112",
      "#212324",
      "#393B3D",
      "#5C5F61",
      "#EFEFEF"
    ],
    "tags": [
      "monochrome",
      "graphite scale core"
    ]
  },
  {
    "id": "monochrome-charcoal-spectrum-dark",
    "name": "Charcoal Spectrum Dark",
    "category": "Monochrome",
    "colors": [
      "#0D0D0E",
      "#1D1D20",
      "#343438",
      "#57575D",
      "#ECECEE"
    ],
    "tags": [
      "monochrome",
      "charcoal spectrum dark"
    ]
  },
  {
    "id": "monochrome-slate-steps-tread",
    "name": "Slate Steps Tread",
    "category": "Monochrome",
    "colors": [
      "#14171A",
      "#262B30",
      "#3F474F",
      "#626E7A",
      "#EFF2F5"
    ],
    "tags": [
      "monochrome",
      "slate steps tread"
    ]
  },
  {
    "id": "monochrome-zinc-spectrum-bar",
    "name": "Zinc Spectrum Bar",
    "category": "Monochrome",
    "colors": [
      "#151718",
      "#292C2E",
      "#44484A",
      "#696E71",
      "#F0F2F3"
    ],
    "tags": [
      "monochrome",
      "zinc spectrum bar"
    ]
  },
  {
    "id": "monochrome-cool-neutral-step-line",
    "name": "Cool Neutral Step Line",
    "category": "Monochrome",
    "colors": [
      "#141718",
      "#272B2E",
      "#41474A",
      "#666E73",
      "#EFF1F3"
    ],
    "tags": [
      "monochrome",
      "cool neutral step line"
    ]
  },
  {
    "id": "monochrome-warm-gray-scale-wash",
    "name": "Warm Gray Scale Wash",
    "category": "Monochrome",
    "colors": [
      "#181716",
      "#2F2D2B",
      "#4D4A47",
      "#77736F",
      "#F3F2F1"
    ],
    "tags": [
      "monochrome",
      "warm gray scale wash"
    ]
  },
  {
    "id": "monochrome-silver-steps-polish",
    "name": "Silver Steps Polish",
    "category": "Monochrome",
    "colors": [
      "#18191A",
      "#2F3133",
      "#4C4F52",
      "#74787D",
      "#F2F4F5"
    ],
    "tags": [
      "monochrome",
      "silver steps polish"
    ]
  },
  {
    "id": "monochrome-quartz-monochrome-grain",
    "name": "Quartz Monochrome Grain",
    "category": "Monochrome",
    "colors": [
      "#1A1A1B",
      "#313133",
      "#4E4E52",
      "#77777D",
      "#F3F3F5"
    ],
    "tags": [
      "monochrome",
      "quartz monochrome grain"
    ]
  },
  {
    "id": "monochrome-iron-shading-ingot",
    "name": "Iron Shading Ingot",
    "category": "Monochrome",
    "colors": [
      "#111213",
      "#222325",
      "#3A3C3F",
      "#5D6064",
      "#EFEFF1"
    ],
    "tags": [
      "monochrome",
      "iron shading ingot"
    ]
  },
  {
    "id": "monochrome-flint-steps-stone",
    "name": "Flint Steps Stone",
    "category": "Monochrome",
    "colors": [
      "#151617",
      "#2A2B2D",
      "#454649",
      "#6C6E72",
      "#F1F1F3"
    ],
    "tags": [
      "monochrome",
      "flint steps stone"
    ]
  },
  {
    "id": "vintage-antique-silk-fabric",
    "name": "Antique Silk Fabric",
    "category": "Vintage",
    "colors": [
      "#2E271F",
      "#544738",
      "#857159",
      "#C2A785",
      "#F7F3EC"
    ],
    "tags": [
      "vintage",
      "antique silk fabric"
    ]
  },
  {
    "id": "vintage-faded-photograph-print",
    "name": "Faded Photograph Print",
    "category": "Vintage",
    "colors": [
      "#28211A",
      "#493D30",
      "#76634E",
      "#B09577",
      "#F5EFEB"
    ],
    "tags": [
      "vintage",
      "faded photograph print"
    ]
  },
  {
    "id": "vintage-vintage-lace-trim",
    "name": "Vintage Lace Trim",
    "category": "Vintage",
    "colors": [
      "#2B241C",
      "#4F4234",
      "#7E6B54",
      "#B99E7D",
      "#F6F1EC"
    ],
    "tags": [
      "vintage",
      "vintage lace trim"
    ]
  },
  {
    "id": "vintage-antique-ceramic-glaze",
    "name": "Antique Ceramic Glaze",
    "category": "Vintage",
    "colors": [
      "#1B2728",
      "#324749",
      "#537174",
      "#86B0B4",
      "#EFF6F7"
    ],
    "tags": [
      "vintage",
      "antique ceramic glaze"
    ]
  },
  {
    "id": "vintage-retro-postcard-stamp",
    "name": "Retro Postcard Stamp",
    "category": "Vintage",
    "colors": [
      "#2E1E17",
      "#54372A",
      "#875843",
      "#C6876A",
      "#F7EFEA"
    ],
    "tags": [
      "vintage",
      "retro postcard stamp"
    ]
  },
  {
    "id": "vintage-heritage-tweed-cloth",
    "name": "Heritage Tweed Cloth",
    "category": "Vintage",
    "colors": [
      "#24261C",
      "#424633",
      "#6A7052",
      "#9EA67D",
      "#F3F5EC"
    ],
    "tags": [
      "vintage",
      "heritage tweed cloth"
    ]
  },
  {
    "id": "vintage-sepia-wash-drawing",
    "name": "Sepia Wash Drawing",
    "category": "Vintage",
    "colors": [
      "#2A2118",
      "#4C3C2C",
      "#7A6147",
      "#B3916D",
      "#F5EFE9"
    ],
    "tags": [
      "vintage",
      "sepia wash drawing"
    ]
  },
  {
    "id": "vintage-old-newspaper-print",
    "name": "Old Newspaper Print",
    "category": "Vintage",
    "colors": [
      "#26221A",
      "#473F30",
      "#73674F",
      "#A89876",
      "#F4F0E8"
    ],
    "tags": [
      "vintage",
      "old newspaper print"
    ]
  },
  {
    "id": "vintage-vintage-velvet-plush",
    "name": "Vintage Velvet Plush",
    "category": "Vintage",
    "colors": [
      "#2C141D",
      "#512536",
      "#823C57",
      "#C46286",
      "#F8EEF2"
    ],
    "tags": [
      "vintage",
      "vintage velvet plush"
    ]
  },
  {
    "id": "vintage-antique-copper-penny",
    "name": "Antique Copper Penny",
    "category": "Vintage",
    "colors": [
      "#2E180E",
      "#542C1A",
      "#87472B",
      "#CF7348",
      "#F8EFEB"
    ],
    "tags": [
      "vintage",
      "antique copper penny"
    ]
  },
  {
    "id": "vintage-faded-ribbon-bow",
    "name": "Faded Ribbon Bow",
    "category": "Vintage",
    "colors": [
      "#2B1B22",
      "#4F323F",
      "#7E5065",
      "#BA7D98",
      "#F6EFF2"
    ],
    "tags": [
      "vintage",
      "faded ribbon bow"
    ]
  },
  {
    "id": "vintage-vintage-bookcloth-spine",
    "name": "Vintage Bookcloth Spine",
    "category": "Vintage",
    "colors": [
      "#172622",
      "#2A463F",
      "#467065",
      "#72AD9D",
      "#ECF5F3"
    ],
    "tags": [
      "vintage",
      "vintage bookcloth spine"
    ]
  },
  {
    "id": "vintage-old-film-stock-roll",
    "name": "Old Film Stock Roll",
    "category": "Vintage",
    "colors": [
      "#26201A",
      "#453A2F",
      "#705E4D",
      "#A48C74",
      "#F4EFEB"
    ],
    "tags": [
      "vintage",
      "old film stock roll"
    ]
  },
  {
    "id": "vintage-antique-brocade-pattern",
    "name": "Antique Brocade Pattern",
    "category": "Vintage",
    "colors": [
      "#2E2214",
      "#543F25",
      "#87653C",
      "#CA9B60",
      "#F8F3EC"
    ],
    "tags": [
      "vintage",
      "antique brocade pattern"
    ]
  },
  {
    "id": "vintage-vintage-enamel-kettle",
    "name": "Vintage Enamel Kettle",
    "category": "Vintage",
    "colors": [
      "#17272E",
      "#2B4654",
      "#466F85",
      "#73A9C7",
      "#EBF4F9"
    ],
    "tags": [
      "vintage",
      "vintage enamel kettle"
    ]
  },
  {
    "id": "vintage-heritage-leather-trunk",
    "name": "Heritage Leather Trunk",
    "category": "Vintage",
    "colors": [
      "#2B1C12",
      "#4E3321",
      "#7E5236",
      "#BA7F57",
      "#F6EFEB"
    ],
    "tags": [
      "vintage",
      "heritage leather trunk"
    ]
  },
  {
    "id": "vintage-sepia-silhouette-portrait",
    "name": "Sepia Silhouette Portrait",
    "category": "Vintage",
    "colors": [
      "#241C15",
      "#423326",
      "#6A533E",
      "#9E7E60",
      "#F3EDE7"
    ],
    "tags": [
      "vintage",
      "sepia silhouette portrait"
    ]
  },
  {
    "id": "vintage-faded-tapestry-weave",
    "name": "Faded Tapestry Weave",
    "category": "Vintage",
    "colors": [
      "#28201E",
      "#493B37",
      "#765F59",
      "#AE8E86",
      "#F5EFEB"
    ],
    "tags": [
      "vintage",
      "faded tapestry weave"
    ]
  },
  {
    "id": "vintage-antique-needlepoint-stitch",
    "name": "Antique Needlepoint Stitch",
    "category": "Vintage",
    "colors": [
      "#27221A",
      "#473E30",
      "#72644E",
      "#A79476",
      "#F4F0EA"
    ],
    "tags": [
      "vintage",
      "antique needlepoint stitch"
    ]
  },
  {
    "id": "vintage-vintage-trunk-latch",
    "name": "Vintage Trunk Latch",
    "category": "Vintage",
    "colors": [
      "#281E15",
      "#493726",
      "#76593E",
      "#B08861",
      "#F5EFE9"
    ],
    "tags": [
      "vintage",
      "vintage trunk latch"
    ]
  },
  {
    "id": "vintage-old-gramophone-horn",
    "name": "Old Gramophone Horn",
    "category": "Vintage",
    "colors": [
      "#2E2111",
      "#543C1F",
      "#876133",
      "#CA9553",
      "#F8F3EB"
    ],
    "tags": [
      "vintage",
      "old gramophone horn"
    ]
  },
  {
    "id": "vintage-antique-pewter-mug",
    "name": "Antique Pewter Mug",
    "category": "Vintage",
    "colors": [
      "#202224",
      "#3B3E42",
      "#60646B",
      "#92979F",
      "#EFF1F3"
    ],
    "tags": [
      "vintage",
      "antique pewter mug"
    ]
  },
  {
    "id": "vintage-faded-muslin-drapery",
    "name": "Faded Muslin Drapery",
    "category": "Vintage",
    "colors": [
      "#28231C",
      "#494034",
      "#766855",
      "#AE9C82",
      "#F5F1EB"
    ],
    "tags": [
      "vintage",
      "faded muslin drapery"
    ]
  },
  {
    "id": "vintage-vintage-cameo-profile",
    "name": "Vintage Cameo Profile",
    "category": "Vintage",
    "colors": [
      "#281C1D",
      "#4A3436",
      "#775457",
      "#AF8185",
      "#F5EDEE"
    ],
    "tags": [
      "vintage",
      "vintage cameo profile"
    ]
  },
  {
    "id": "vintage-heritage-wool-blanket",
    "name": "Heritage Wool Blanket",
    "category": "Vintage",
    "colors": [
      "#242018",
      "#423B2D",
      "#6B5F49",
      "#9E8E70",
      "#F3EFE7"
    ],
    "tags": [
      "vintage",
      "heritage wool blanket"
    ]
  },
  {
    "id": "vintage-aged-parchment-scroll",
    "name": "Aged Parchment Scroll",
    "category": "Vintage",
    "colors": [
      "#2A241A",
      "#4D4230",
      "#7C6B4E",
      "#B7A076",
      "#F5F1E8"
    ],
    "tags": [
      "vintage",
      "aged parchment scroll"
    ]
  },
  {
    "id": "vintage-old-clockwork-brass",
    "name": "Old Clockwork Brass",
    "category": "Vintage",
    "colors": [
      "#2C2010",
      "#503A1E",
      "#805E32",
      "#C29152",
      "#F7F2EA"
    ],
    "tags": [
      "vintage",
      "old clockwork brass"
    ]
  },
  {
    "id": "vintage-vintage-wallpaper-damask",
    "name": "Vintage Wallpaper Damask",
    "category": "Vintage",
    "colors": [
      "#26211C",
      "#453D34",
      "#706354",
      "#A49380",
      "#F4EFEB"
    ],
    "tags": [
      "vintage",
      "vintage wallpaper damask"
    ]
  },
  {
    "id": "candy-gumball-machine-pop",
    "name": "Gumball Machine Pop",
    "category": "Candy",
    "colors": [
      "#2E0A1E",
      "#571339",
      "#8F205E",
      "#DF3797",
      "#FCEDF6"
    ],
    "tags": [
      "candy",
      "gumball machine pop"
    ]
  },
  {
    "id": "candy-sour-cherry-fizz",
    "name": "Sour Cherry Fizz",
    "category": "Candy",
    "colors": [
      "#2E060E",
      "#570B1B",
      "#91132E",
      "#E6254E",
      "#FCEEF1"
    ],
    "tags": [
      "candy",
      "sour cherry fizz"
    ]
  },
  {
    "id": "candy-caramel-apple-pop",
    "name": "Caramel Apple Pop",
    "category": "Candy",
    "colors": [
      "#2E1805",
      "#572E0A",
      "#914F13",
      "#E08024",
      "#FDF5EC"
    ],
    "tags": [
      "candy",
      "caramel apple pop"
    ]
  },
  {
    "id": "candy-sweet-candy-corn",
    "name": "Sweet Candy Corn",
    "category": "Candy",
    "colors": [
      "#2E1F05",
      "#573B0A",
      "#916313",
      "#E09E24",
      "#FDF8EC"
    ],
    "tags": [
      "candy",
      "sweet candy corn"
    ]
  },
  {
    "id": "candy-frosted-donut-glaze",
    "name": "Frosted Donut Glaze",
    "category": "Candy",
    "colors": [
      "#2B0C22",
      "#521741",
      "#85266B",
      "#D243AB",
      "#FCEEF8"
    ],
    "tags": [
      "candy",
      "frosted donut glaze"
    ]
  },
  {
    "id": "candy-cherry-cola-chew",
    "name": "Cherry Cola Chew",
    "category": "Candy",
    "colors": [
      "#2E0812",
      "#570E22",
      "#8F1739",
      "#E32A60",
      "#FCEEF3"
    ],
    "tags": [
      "candy",
      "cherry cola chew"
    ]
  },
  {
    "id": "candy-key-lime-pop-ice",
    "name": "Key Lime Pop Ice",
    "category": "Candy",
    "colors": [
      "#162B0A",
      "#2A5214",
      "#458721",
      "#6FD637",
      "#EDFAE8"
    ],
    "tags": [
      "candy",
      "key lime pop ice"
    ]
  },
  {
    "id": "candy-bubblegum-machine-twist",
    "name": "Bubblegum Machine Twist",
    "category": "Candy",
    "colors": [
      "#2B0A1C",
      "#521336",
      "#87205A",
      "#D73893",
      "#FCEEF6"
    ],
    "tags": [
      "candy",
      "bubblegum machine twist"
    ]
  },
  {
    "id": "candy-taffy-pull-ribbon",
    "name": "Taffy Pull Ribbon",
    "category": "Candy",
    "colors": [
      "#2E0D1B",
      "#571933",
      "#8F2A55",
      "#E0478A",
      "#FCEFF5"
    ],
    "tags": [
      "candy",
      "taffy pull ribbon"
    ]
  },
  {
    "id": "candy-sugar-plum-candy",
    "name": "Sugar Plum Candy",
    "category": "Candy",
    "colors": [
      "#210A2E",
      "#3E1357",
      "#66208F",
      "#A538E6",
      "#F4EEFC"
    ],
    "tags": [
      "candy",
      "sugar plum candy"
    ]
  },
  {
    "id": "candy-sweet-marzipan-fruit",
    "name": "Sweet Marzipan Fruit",
    "category": "Candy",
    "colors": [
      "#2C1F10",
      "#523A1F",
      "#855E33",
      "#D09756",
      "#FAF4EC"
    ],
    "tags": [
      "candy",
      "sweet marzipan fruit"
    ]
  },
  {
    "id": "candy-berry-skittles-mix",
    "name": "Berry Skittles Mix",
    "category": "Candy",
    "colors": [
      "#240A2E",
      "#441357",
      "#70208F",
      "#B338E6",
      "#F5EEFC"
    ],
    "tags": [
      "candy",
      "berry skittles mix"
    ]
  },
  {
    "id": "candy-rock-candy-crystal",
    "name": "Rock Candy Crystal",
    "category": "Candy",
    "colors": [
      "#0A262E",
      "#134757",
      "#20758F",
      "#38BAE3",
      "#EDFAFC"
    ],
    "tags": [
      "candy",
      "rock candy crystal"
    ]
  },
  {
    "id": "candy-sweet-licorice-twist",
    "name": "Sweet Licorice Twist",
    "category": "Candy",
    "colors": [
      "#121013",
      "#231F25",
      "#3C353F",
      "#615666",
      "#F1EFF2"
    ],
    "tags": [
      "candy",
      "sweet licorice twist"
    ]
  },
  {
    "id": "candy-candy-shop-window",
    "name": "Candy Shop Window",
    "category": "Candy",
    "colors": [
      "#2E0D17",
      "#57192D",
      "#8F2A4B",
      "#DF477B",
      "#FCEFF3"
    ],
    "tags": [
      "candy",
      "candy shop window"
    ]
  },
  {
    "id": "candy-strawberry-sundae-swirl",
    "name": "Strawberry Sundae Swirl",
    "category": "Candy",
    "colors": [
      "#2E0914",
      "#571127",
      "#8F1D42",
      "#E3366D",
      "#FCEEF3"
    ],
    "tags": [
      "candy",
      "strawberry sundae swirl"
    ]
  },
  {
    "id": "candy-blue-slushie-freeze",
    "name": "Blue Slushie Freeze",
    "category": "Candy",
    "colors": [
      "#051E2E",
      "#0A3957",
      "#125E8F",
      "#229DE3",
      "#E0F3FC"
    ],
    "tags": [
      "candy",
      "blue slushie freeze"
    ]
  },
  {
    "id": "candy-peach-gummy-ring",
    "name": "Peach Gummy Ring",
    "category": "Candy",
    "colors": [
      "#2E1508",
      "#57270F",
      "#8F411A",
      "#E06B30",
      "#FDF2EB"
    ],
    "tags": [
      "candy",
      "peach gummy ring"
    ]
  },
  {
    "id": "candy-rainbow-sorbet-float",
    "name": "Rainbow Sorbet Float",
    "category": "Candy",
    "colors": [
      "#2E081F",
      "#57103B",
      "#8F1B62",
      "#E333A0",
      "#FCEEF7"
    ],
    "tags": [
      "candy",
      "rainbow sorbet float"
    ]
  },
  {
    "id": "candy-mint-candy-drop",
    "name": "Mint Candy Drop",
    "category": "Candy",
    "colors": [
      "#0A2E20",
      "#13573C",
      "#208F63",
      "#38E09F",
      "#EDFCF5"
    ],
    "tags": [
      "candy",
      "mint candy drop"
    ]
  },
  {
    "id": "candy-lemon-gumdrop-chew",
    "name": "Lemon Gumdrop Chew",
    "category": "Candy",
    "colors": [
      "#2E2705",
      "#57490A",
      "#917B13",
      "#E0C024",
      "#FDFCEC"
    ],
    "tags": [
      "candy",
      "lemon gumdrop chew"
    ]
  },
  {
    "id": "candy-sweet-bonbon-chocolate",
    "name": "Sweet Bonbon Chocolate",
    "category": "Candy",
    "colors": [
      "#291219",
      "#4E2230",
      "#7E3850",
      "#C25D80",
      "#F7EDF1"
    ],
    "tags": [
      "candy",
      "sweet bonbon chocolate"
    ]
  },
  {
    "id": "candy-marshmallow-puff-fluff",
    "name": "Marshmallow Puff Fluff",
    "category": "Candy",
    "colors": [
      "#2E1624",
      "#572A45",
      "#8F4673",
      "#DE72B5",
      "#FCF2F8"
    ],
    "tags": [
      "candy",
      "marshmallow puff fluff"
    ]
  },
  {
    "id": "candy-glazed-cherry-pop",
    "name": "Glazed Cherry Pop",
    "category": "Candy",
    "colors": [
      "#2E0608",
      "#570B10",
      "#8F131C",
      "#E32532",
      "#FCEEEE"
    ],
    "tags": [
      "candy",
      "glazed cherry pop"
    ]
  },
  {
    "id": "candy-cotton-candy-carnival-fair",
    "name": "Cotton Candy Carnival Fair",
    "category": "Candy",
    "colors": [
      "#1C0E2E",
      "#351A57",
      "#572B8F",
      "#8F4BE3",
      "#F2EDFC"
    ],
    "tags": [
      "candy",
      "cotton candy carnival fair"
    ]
  },
  {
    "id": "candy-jelly-roll-swirl",
    "name": "Jelly Roll Swirl",
    "category": "Candy",
    "colors": [
      "#2E0E22",
      "#571B41",
      "#8F2D6C",
      "#E04EAE",
      "#FCEEF8"
    ],
    "tags": [
      "candy",
      "jelly roll swirl"
    ]
  },
  {
    "id": "candy-sweet-gum-drop",
    "name": "Sweet Gum Drop",
    "category": "Candy",
    "colors": [
      "#2E110A",
      "#572013",
      "#8F3520",
      "#DE5939",
      "#FCEFEB"
    ],
    "tags": [
      "candy",
      "sweet gum drop"
    ]
  },
  {
    "id": "candy-rainbow-lollipop-stick",
    "name": "Rainbow Lollipop Stick",
    "category": "Candy",
    "colors": [
      "#2B072E",
      "#520D57",
      "#87168F",
      "#D829E6",
      "#FCEEFD"
    ],
    "tags": [
      "candy",
      "rainbow lollipop stick"
    ]
  },
  {
    "id": "forest-olympic-rainforest-moss",
    "name": "Olympic Rainforest Moss",
    "category": "Forest",
    "colors": [
      "#0F2414",
      "#1C4225",
      "#2E693D",
      "#4CA362",
      "#E7F6EB"
    ],
    "tags": [
      "forest",
      "olympic rainforest moss"
    ]
  },
  {
    "id": "forest-old-growth-oak-stand",
    "name": "Old Growth Oak Stand",
    "category": "Forest",
    "colors": [
      "#1F2113",
      "#393D24",
      "#59603A",
      "#8A945C",
      "#F2F5EB"
    ],
    "tags": [
      "forest",
      "old growth oak stand"
    ]
  },
  {
    "id": "forest-sylvan-pond-reflection",
    "name": "Sylvan Pond Reflection",
    "category": "Forest",
    "colors": [
      "#0E1F1A",
      "#1B3830",
      "#2E594E",
      "#4B8C7C",
      "#EAF3F1"
    ],
    "tags": [
      "forest",
      "sylvan pond reflection"
    ]
  },
  {
    "id": "forest-evergreen-valley-fog",
    "name": "Evergreen Valley Fog",
    "category": "Forest",
    "colors": [
      "#112117",
      "#203E2C",
      "#346347",
      "#569C72",
      "#EBF4EE"
    ],
    "tags": [
      "forest",
      "evergreen valley fog"
    ]
  },
  {
    "id": "forest-mossy-stump-decay",
    "name": "Mossy Stump Decay",
    "category": "Forest",
    "colors": [
      "#1A2413",
      "#2F4223",
      "#4A6638",
      "#739B59",
      "#EDF4E8"
    ],
    "tags": [
      "forest",
      "mossy stump decay"
    ]
  },
  {
    "id": "forest-forest-clearing-sun",
    "name": "Forest Clearing Sun",
    "category": "Forest",
    "colors": [
      "#1F2610",
      "#38451D",
      "#586C30",
      "#88A64D",
      "#F2F6E8"
    ],
    "tags": [
      "forest",
      "forest clearing sun"
    ]
  },
  {
    "id": "forest-deep-woodland-hollow",
    "name": "Deep Woodland Hollow",
    "category": "Forest",
    "colors": [
      "#121C14",
      "#223325",
      "#38523D",
      "#5B7F61",
      "#ECF2EE"
    ],
    "tags": [
      "forest",
      "deep woodland hollow"
    ]
  },
  {
    "id": "forest-autumn-fungi-cap",
    "name": "Autumn Fungi Cap",
    "category": "Forest",
    "colors": [
      "#241C12",
      "#423321",
      "#695136",
      "#9E7D58",
      "#F4EFEB"
    ],
    "tags": [
      "forest",
      "autumn fungi cap"
    ]
  },
  {
    "id": "forest-hemlock-grove-shade",
    "name": "Hemlock Grove Shade",
    "category": "Forest",
    "colors": [
      "#0E2116",
      "#1A3E29",
      "#2B6343",
      "#469C6C",
      "#E6F4ED"
    ],
    "tags": [
      "forest",
      "hemlock grove shade"
    ]
  },
  {
    "id": "forest-woodland-lichen-crust",
    "name": "Woodland Lichen Crust",
    "category": "Forest",
    "colors": [
      "#1C2117",
      "#343E2C",
      "#536348",
      "#809671",
      "#EFF2EC"
    ],
    "tags": [
      "forest",
      "woodland lichen crust"
    ]
  },
  {
    "id": "forest-pine-cone-tumble",
    "name": "Pine Cone Tumble",
    "category": "Forest",
    "colors": [
      "#241A13",
      "#423024",
      "#694F3C",
      "#9E7A60",
      "#F4EFEB"
    ],
    "tags": [
      "forest",
      "pine cone tumble"
    ]
  },
  {
    "id": "forest-forest-stream-eddy",
    "name": "Forest Stream Eddy",
    "category": "Forest",
    "colors": [
      "#12211E",
      "#213D37",
      "#366159",
      "#58998D",
      "#EBF4F2"
    ],
    "tags": [
      "forest",
      "forest stream eddy"
    ]
  },
  {
    "id": "forest-sylvan-shadow-deep",
    "name": "Sylvan Shadow Deep",
    "category": "Forest",
    "colors": [
      "#0E1711",
      "#1B2C21",
      "#2C4736",
      "#497057",
      "#EAF0EC"
    ],
    "tags": [
      "forest",
      "sylvan shadow deep"
    ]
  },
  {
    "id": "forest-ancient-yew-tree",
    "name": "Ancient Yew Tree",
    "category": "Forest",
    "colors": [
      "#1C2114",
      "#343D26",
      "#546140",
      "#839666",
      "#F0F3EB"
    ],
    "tags": [
      "forest",
      "ancient yew tree"
    ]
  },
  {
    "id": "forest-cedar-ridge-trail",
    "name": "Cedar Ridge Trail",
    "category": "Forest",
    "colors": [
      "#211B14",
      "#3E3225",
      "#63513D",
      "#997E62",
      "#F4EFEB"
    ],
    "tags": [
      "forest",
      "cedar ridge trail"
    ]
  },
  {
    "id": "forest-deep-foliage-dense",
    "name": "Deep Foliage Dense",
    "category": "Forest",
    "colors": [
      "#0E2413",
      "#1A4224",
      "#2B693B",
      "#48A35E",
      "#E6F6EA"
    ],
    "tags": [
      "forest",
      "deep foliage dense"
    ]
  },
  {
    "id": "forest-woodland-mist-veil",
    "name": "Woodland Mist Veil",
    "category": "Forest",
    "colors": [
      "#14211A",
      "#263D31",
      "#3D614F",
      "#629980",
      "#EBF3EF"
    ],
    "tags": [
      "forest",
      "woodland mist veil"
    ]
  },
  {
    "id": "forest-mossy-boulder-stone",
    "name": "Mossy Boulder Stone",
    "category": "Forest",
    "colors": [
      "#1A241B",
      "#2E3E30",
      "#4A624E",
      "#729577",
      "#EDF3EE"
    ],
    "tags": [
      "forest",
      "mossy boulder stone"
    ]
  },
  {
    "id": "forest-forest-undergrowth-brush",
    "name": "Forest Undergrowth Brush",
    "category": "Forest",
    "colors": [
      "#172412",
      "#2B4222",
      "#456938",
      "#6DA35B",
      "#EBF4E7"
    ],
    "tags": [
      "forest",
      "forest undergrowth brush"
    ]
  },
  {
    "id": "forest-douglas-fir-giant",
    "name": "Douglas Fir Giant",
    "category": "Forest",
    "colors": [
      "#112115",
      "#1F3E28",
      "#336342",
      "#539C6B",
      "#EAF4EC"
    ],
    "tags": [
      "forest",
      "douglas fir giant"
    ]
  },
  {
    "id": "forest-forest-canopy-high",
    "name": "Forest Canopy High",
    "category": "Forest",
    "colors": [
      "#132415",
      "#244227",
      "#3A6940",
      "#5CA367",
      "#E8F5EB"
    ],
    "tags": [
      "forest",
      "forest canopy high"
    ]
  },
  {
    "id": "forest-sylvan-river-bend",
    "name": "Sylvan River Bend",
    "category": "Forest",
    "colors": [
      "#10211D",
      "#1E3D36",
      "#326157",
      "#52998B",
      "#EAF4F2"
    ],
    "tags": [
      "forest",
      "sylvan river bend"
    ]
  },
  {
    "id": "forest-autumn-leaves-floor",
    "name": "Autumn Leaves Floor",
    "category": "Forest",
    "colors": [
      "#261910",
      "#472E1F",
      "#704B34",
      "#A87555",
      "#F5EFEB"
    ],
    "tags": [
      "forest",
      "autumn leaves floor"
    ]
  },
  {
    "id": "forest-deep-moss-bed",
    "name": "Deep Moss Bed",
    "category": "Forest",
    "colors": [
      "#132413",
      "#234223",
      "#396939",
      "#5BA35B",
      "#E8F5E8"
    ],
    "tags": [
      "forest",
      "deep moss bed"
    ]
  },
  {
    "id": "forest-woodland-shrub-wild",
    "name": "Woodland Shrub Wild",
    "category": "Forest",
    "colors": [
      "#192415",
      "#2E4227",
      "#49693F",
      "#72A365",
      "#ECF4EA"
    ],
    "tags": [
      "forest",
      "woodland shrub wild"
    ]
  },
  {
    "id": "forest-forest-ferns-frond",
    "name": "Forest Ferns Frond",
    "category": "Forest",
    "colors": [
      "#102414",
      "#1F4225",
      "#33693D",
      "#54A363",
      "#E9F6EC"
    ],
    "tags": [
      "forest",
      "forest ferns frond"
    ]
  },
  {
    "id": "forest-sylvan-ridge-lookout",
    "name": "Sylvan Ridge Lookout",
    "category": "Forest",
    "colors": [
      "#162419",
      "#273E2E",
      "#3F6149",
      "#669976",
      "#ECF3EE"
    ],
    "tags": [
      "forest",
      "sylvan ridge lookout"
    ]
  },
  {
    "id": "forest-ancient-pine-needle",
    "name": "Ancient Pine Needle",
    "category": "Forest",
    "colors": [
      "#142416",
      "#25422A",
      "#3C6944",
      "#60A36E",
      "#EAF5EC"
    ],
    "tags": [
      "forest",
      "ancient pine needle"
    ]
  },
  {
    "id": "luxury-golden-scepter-regalia",
    "name": "Golden Scepter Regalia",
    "category": "Luxury",
    "colors": [
      "#241B08",
      "#423211",
      "#6E531F",
      "#B38B39",
      "#F7F3E8"
    ],
    "tags": [
      "luxury",
      "golden scepter regalia"
    ]
  },
  {
    "id": "luxury-marble-mansion-hall",
    "name": "Marble Mansion Hall",
    "category": "Luxury",
    "colors": [
      "#17191C",
      "#2C2E33",
      "#494C54",
      "#747985",
      "#F2F3F5"
    ],
    "tags": [
      "luxury",
      "marble mansion hall"
    ]
  },
  {
    "id": "luxury-sapphire-brooch-gem",
    "name": "Sapphire Brooch Gem",
    "category": "Luxury",
    "colors": [
      "#0A1224",
      "#152242",
      "#253B6E",
      "#4060AD",
      "#E8EDF7"
    ],
    "tags": [
      "luxury",
      "sapphire brooch gem"
    ]
  },
  {
    "id": "luxury-st-tropez-yacht-club",
    "name": "St. Tropez Yacht Club",
    "category": "Luxury",
    "colors": [
      "#0D1624",
      "#1A2A45",
      "#2D446E",
      "#4B6EB0",
      "#EBF0F8"
    ],
    "tags": [
      "luxury",
      "st. tropez yacht club"
    ]
  },
  {
    "id": "luxury-imperial-velvet-robe",
    "name": "Imperial Velvet Robe",
    "category": "Luxury",
    "colors": [
      "#240D1A",
      "#421931",
      "#6E2D53",
      "#AF4D87",
      "#F6ECF2"
    ],
    "tags": [
      "luxury",
      "imperial velvet robe"
    ]
  },
  {
    "id": "luxury-royal-crest-gold",
    "name": "Royal Crest Gold",
    "category": "Luxury",
    "colors": [
      "#241D0D",
      "#42351A",
      "#6E5930",
      "#B09054",
      "#F7F3EB"
    ],
    "tags": [
      "luxury",
      "royal crest gold"
    ]
  },
  {
    "id": "luxury-onyx-brass-hardware",
    "name": "Onyx & Brass Hardware",
    "category": "Luxury",
    "colors": [
      "#171614",
      "#2E2B26",
      "#4F4A42",
      "#80776C",
      "#F2F0ED"
    ],
    "tags": [
      "luxury",
      "onyx & brass hardware"
    ]
  },
  {
    "id": "luxury-crystal-palace-chandelier",
    "name": "Crystal Palace Chandelier",
    "category": "Luxury",
    "colors": [
      "#16191C",
      "#2B2F36",
      "#474D57",
      "#727B8A",
      "#EFF2F5"
    ],
    "tags": [
      "luxury",
      "crystal palace chandelier"
    ]
  },
  {
    "id": "luxury-gold-leaf-gilding",
    "name": "Gold Leaf Gilding",
    "category": "Luxury",
    "colors": [
      "#261D09",
      "#473612",
      "#755B23",
      "#BD9642",
      "#F8F4EA"
    ],
    "tags": [
      "luxury",
      "gold leaf gilding"
    ]
  },
  {
    "id": "luxury-sovereign-throne-velvet",
    "name": "Sovereign Throne Velvet",
    "category": "Luxury",
    "colors": [
      "#240B13",
      "#451726",
      "#702941",
      "#B0476B",
      "#F7ECF0"
    ],
    "tags": [
      "luxury",
      "sovereign throne velvet"
    ]
  },
  {
    "id": "luxury-high-society-gala",
    "name": "High Society Gala",
    "category": "Luxury",
    "colors": [
      "#19151A",
      "#302833",
      "#514557",
      "#81708A",
      "#F3EFF5"
    ],
    "tags": [
      "luxury",
      "high society gala"
    ]
  },
  {
    "id": "luxury-luxury-suite-penthouse",
    "name": "Luxury Suite Penthouse",
    "category": "Luxury",
    "colors": [
      "#1C1914",
      "#363028",
      "#595045",
      "#8C8071",
      "#F5F2EE"
    ],
    "tags": [
      "luxury",
      "luxury suite penthouse"
    ]
  },
  {
    "id": "luxury-vintage-champagne-brut",
    "name": "Vintage Champagne Brut",
    "category": "Luxury",
    "colors": [
      "#211D12",
      "#3D3624",
      "#665B40",
      "#9E8F69",
      "#F6F4EB"
    ],
    "tags": [
      "luxury",
      "vintage champagne brut"
    ]
  },
  {
    "id": "luxury-diamond-tiara-spark",
    "name": "Diamond Tiara Spark",
    "category": "Luxury",
    "colors": [
      "#18191B",
      "#2D3035",
      "#494E56",
      "#727B87",
      "#F2F4F7"
    ],
    "tags": [
      "luxury",
      "diamond tiara spark"
    ]
  },
  {
    "id": "luxury-royal-scepter-crown",
    "name": "Royal Scepter Crown",
    "category": "Luxury",
    "colors": [
      "#241A0B",
      "#453218",
      "#73552D",
      "#B5894F",
      "#F7F2EB"
    ],
    "tags": [
      "luxury",
      "royal scepter crown"
    ]
  },
  {
    "id": "luxury-velvet-drape-theatre",
    "name": "Velvet Drape Theatre",
    "category": "Luxury",
    "colors": [
      "#210F17",
      "#3D1D2C",
      "#66334B",
      "#9E5577",
      "#F5EDF1"
    ],
    "tags": [
      "luxury",
      "velvet drape theatre"
    ]
  },
  {
    "id": "luxury-penthouse-lounge-bar",
    "name": "Penthouse Lounge Bar",
    "category": "Luxury",
    "colors": [
      "#19191C",
      "#303036",
      "#4F4F57",
      "#7D7D8A",
      "#F3F3F6"
    ],
    "tags": [
      "luxury",
      "penthouse lounge bar"
    ]
  },
  {
    "id": "luxury-silk-brocade-tapestry",
    "name": "Silk Brocade Tapestry",
    "category": "Luxury",
    "colors": [
      "#21161B",
      "#3E2A34",
      "#664757",
      "#9E7289",
      "#F6EFF3"
    ],
    "tags": [
      "luxury",
      "silk brocade tapestry"
    ]
  },
  {
    "id": "luxury-polished-brass-trim",
    "name": "Polished Brass Trim",
    "category": "Luxury",
    "colors": [
      "#241D0D",
      "#45371B",
      "#705B30",
      "#B09355",
      "#F7F3EB"
    ],
    "tags": [
      "luxury",
      "polished brass trim"
    ]
  },
  {
    "id": "luxury-gilded-mirror-antique",
    "name": "Gilded Mirror Antique",
    "category": "Luxury",
    "colors": [
      "#211B0F",
      "#3D3320",
      "#665638",
      "#9E885E",
      "#F6F3EC"
    ],
    "tags": [
      "luxury",
      "gilded mirror antique"
    ]
  },
  {
    "id": "luxury-emerald-pendant-jewel",
    "name": "Emerald Pendant Jewel",
    "category": "Luxury",
    "colors": [
      "#0B1F17",
      "#173B2E",
      "#28614D",
      "#429C7E",
      "#EAF5F1"
    ],
    "tags": [
      "luxury",
      "emerald pendant jewel"
    ]
  },
  {
    "id": "luxury-golden-chalice-cup",
    "name": "Golden Chalice Cup",
    "category": "Luxury",
    "colors": [
      "#261B07",
      "#473310",
      "#755520",
      "#BD8D3C",
      "#F8F3E7"
    ],
    "tags": [
      "luxury",
      "golden chalice cup"
    ]
  },
  {
    "id": "luxury-ruby-signet-ring",
    "name": "Ruby Signet Ring",
    "category": "Luxury",
    "colors": [
      "#260A10",
      "#471421",
      "#752539",
      "#BA415E",
      "#F7EBEE"
    ],
    "tags": [
      "luxury",
      "ruby signet ring"
    ]
  },
  {
    "id": "luxury-yacht-club-harbor",
    "name": "Yacht Club Harbor",
    "category": "Luxury",
    "colors": [
      "#0D1924",
      "#1A3045",
      "#2E4F6E",
      "#4F7EB0",
      "#EBF2F8"
    ],
    "tags": [
      "luxury",
      "yacht club harbor"
    ]
  },
  {
    "id": "luxury-sovereign-gold-coin",
    "name": "Sovereign Gold Coin",
    "category": "Luxury",
    "colors": [
      "#261E0A",
      "#473815",
      "#755E28",
      "#BD9A4A",
      "#F8F4EA"
    ],
    "tags": [
      "luxury",
      "sovereign gold coin"
    ]
  },
  {
    "id": "luxury-royal-robe-ermine",
    "name": "Royal Robe Ermine",
    "category": "Luxury",
    "colors": [
      "#1C101F",
      "#351F3D",
      "#573563",
      "#8B589E",
      "#F3EEF6"
    ],
    "tags": [
      "luxury",
      "royal robe ermine"
    ]
  },
  {
    "id": "luxury-venetian-chandelier-light",
    "name": "Venetian Chandelier Light",
    "category": "Luxury",
    "colors": [
      "#211A13",
      "#3E3226",
      "#665443",
      "#9E856F",
      "#F6F2EE"
    ],
    "tags": [
      "luxury",
      "venetian chandelier light"
    ]
  },
  {
    "id": "luxury-silk-cravat-tie",
    "name": "Silk Cravat Tie",
    "category": "Luxury",
    "colors": [
      "#1C151A",
      "#352933",
      "#574554",
      "#8A7186",
      "#F3EFF3"
    ],
    "tags": [
      "luxury",
      "silk cravat tie"
    ]
  },
  {
    "id": "cyber-cybernetic-spine-core",
    "name": "Cybernetic Spine Core",
    "category": "Cyber",
    "colors": [
      "#060B12",
      "#0E1E2E",
      "#193954",
      "#2C6491",
      "#E1EBF5"
    ],
    "tags": [
      "cyber",
      "cybernetic spine core"
    ]
  },
  {
    "id": "cyber-binary-stream-code",
    "name": "Binary Stream Code",
    "category": "Cyber",
    "colors": [
      "#040F08",
      "#0A2416",
      "#14452C",
      "#247A50",
      "#E1F6ED"
    ],
    "tags": [
      "cyber",
      "binary stream code"
    ]
  },
  {
    "id": "cyber-quantum-tunnel-effect",
    "name": "Quantum Tunnel Effect",
    "category": "Cyber",
    "colors": [
      "#090614",
      "#17102E",
      "#2B1F54",
      "#4B388F",
      "#ECE8FA"
    ],
    "tags": [
      "cyber",
      "quantum tunnel effect"
    ]
  },
  {
    "id": "cyber-cyber-streetware-tech",
    "name": "Cyber Streetware Tech",
    "category": "Cyber",
    "colors": [
      "#0A0612",
      "#1C0E2E",
      "#361E54",
      "#5F398F",
      "#F0EAF9"
    ],
    "tags": [
      "cyber",
      "cyber streetware tech"
    ]
  },
  {
    "id": "cyber-dark-net-protocol",
    "name": "Dark Net Protocol",
    "category": "Cyber",
    "colors": [
      "#08080C",
      "#12121A",
      "#20202E",
      "#36364A",
      "#E3E3EC"
    ],
    "tags": [
      "cyber",
      "dark net protocol"
    ]
  },
  {
    "id": "cyber-neon-circuit-board",
    "name": "Neon Circuit Board",
    "category": "Cyber",
    "colors": [
      "#041210",
      "#092B26",
      "#124E45",
      "#228577",
      "#E0F6F3"
    ],
    "tags": [
      "cyber",
      "neon circuit board"
    ]
  },
  {
    "id": "cyber-mainframe-terminal-screen",
    "name": "Mainframe Terminal Screen",
    "category": "Cyber",
    "colors": [
      "#040D05",
      "#09210F",
      "#13401F",
      "#247038",
      "#E1F5E6"
    ],
    "tags": [
      "cyber",
      "mainframe terminal screen"
    ]
  },
  {
    "id": "cyber-cybernetic-arm-servo",
    "name": "Cybernetic Arm Servo",
    "category": "Cyber",
    "colors": [
      "#070A0F",
      "#111824",
      "#202C3D",
      "#374963",
      "#DFE6F0"
    ],
    "tags": [
      "cyber",
      "cybernetic arm servo"
    ]
  },
  {
    "id": "cyber-vector-field-plot",
    "name": "Vector Field Plot",
    "category": "Cyber",
    "colors": [
      "#050B12",
      "#0B1E2E",
      "#163854",
      "#275E8C",
      "#E0EDF7"
    ],
    "tags": [
      "cyber",
      "vector field plot"
    ]
  },
  {
    "id": "cyber-hacker-space-underground",
    "name": "Hacker Space Underground",
    "category": "Cyber",
    "colors": [
      "#0C060E",
      "#211026",
      "#3D2045",
      "#6A3C78",
      "#F3EAF6"
    ],
    "tags": [
      "cyber",
      "hacker space underground"
    ]
  },
  {
    "id": "cyber-neural-link-synapse",
    "name": "Neural Link Synapse",
    "category": "Cyber",
    "colors": [
      "#090614",
      "#181033",
      "#2E205E",
      "#4F399E",
      "#ECE7FB"
    ],
    "tags": [
      "cyber",
      "neural link synapse"
    ]
  },
  {
    "id": "cyber-ai-processor-chip",
    "name": "AI Processor Chip",
    "category": "Cyber",
    "colors": [
      "#060E12",
      "#0F222B",
      "#1B3D4C",
      "#2F6780",
      "#E1EFF5"
    ],
    "tags": [
      "cyber",
      "ai processor chip"
    ]
  },
  {
    "id": "cyber-cyber-grid-overlay",
    "name": "Cyber Grid Overlay",
    "category": "Cyber",
    "colors": [
      "#051214",
      "#0B292E",
      "#164852",
      "#287B8A",
      "#E0F4F7"
    ],
    "tags": [
      "cyber",
      "cyber grid overlay"
    ]
  },
  {
    "id": "cyber-firewall-protection-shield",
    "name": "Firewall Protection Shield",
    "category": "Cyber",
    "colors": [
      "#120508",
      "#2B0D15",
      "#4E1929",
      "#853049",
      "#F6E4EB"
    ],
    "tags": [
      "cyber",
      "firewall protection shield"
    ]
  },
  {
    "id": "cyber-quantum-key-crypto",
    "name": "Quantum Key Crypto",
    "category": "Cyber",
    "colors": [
      "#090514",
      "#180E33",
      "#2D1D5E",
      "#4F359E",
      "#ECE7FB"
    ],
    "tags": [
      "cyber",
      "quantum key crypto"
    ]
  },
  {
    "id": "cyber-optical-sensor-lens",
    "name": "Optical Sensor Lens",
    "category": "Cyber",
    "colors": [
      "#04120D",
      "#092B1F",
      "#134D39",
      "#248261",
      "#E1F6F0"
    ],
    "tags": [
      "cyber",
      "optical sensor lens"
    ]
  },
  {
    "id": "cyber-silicon-chip-wafer",
    "name": "Silicon Chip Wafer",
    "category": "Cyber",
    "colors": [
      "#0A0B0E",
      "#16191F",
      "#272B33",
      "#404552",
      "#E4E7ED"
    ],
    "tags": [
      "cyber",
      "silicon chip wafer"
    ]
  },
  {
    "id": "cyber-cyber-dystopia-alley",
    "name": "Cyber Dystopia Alley",
    "category": "Cyber",
    "colors": [
      "#0E050C",
      "#240E1F",
      "#401C38",
      "#6E3462",
      "#F3E7F1"
    ],
    "tags": [
      "cyber",
      "cyber dystopia alley"
    ]
  },
  {
    "id": "cyber-digital-avatar-identity",
    "name": "Digital Avatar Identity",
    "category": "Cyber",
    "colors": [
      "#050C14",
      "#0E1F30",
      "#1C3854",
      "#32608C",
      "#E2ECF7"
    ],
    "tags": [
      "cyber",
      "digital avatar identity"
    ]
  },
  {
    "id": "cyber-cybernetic-drone-cam",
    "name": "Cybernetic Drone Cam",
    "category": "Cyber",
    "colors": [
      "#07080B",
      "#12151C",
      "#222630",
      "#383E4C",
      "#E1E4EC"
    ],
    "tags": [
      "cyber",
      "cybernetic drone cam"
    ]
  },
  {
    "id": "cyber-subnet-mask-gateway",
    "name": "Subnet Mask Gateway",
    "category": "Cyber",
    "colors": [
      "#050F14",
      "#0C242E",
      "#183F52",
      "#2B6A87",
      "#E0F0F7"
    ],
    "tags": [
      "cyber",
      "subnet mask gateway"
    ]
  },
  {
    "id": "cyber-root-directory-path",
    "name": "Root Directory Path",
    "category": "Cyber",
    "colors": [
      "#050D06",
      "#0E2111",
      "#1C3D22",
      "#32693D",
      "#E3F3E7"
    ],
    "tags": [
      "cyber",
      "root directory path"
    ]
  },
  {
    "id": "cyber-terminal-window-shell",
    "name": "Terminal Window Shell",
    "category": "Cyber",
    "colors": [
      "#08090C",
      "#13151C",
      "#222630",
      "#393F4F",
      "#E2E5EC"
    ],
    "tags": [
      "cyber",
      "terminal window shell"
    ]
  },
  {
    "id": "cyber-cyber-shield-defense",
    "name": "Cyber Shield Defense",
    "category": "Cyber",
    "colors": [
      "#050A14",
      "#0C1B30",
      "#183354",
      "#2C5587",
      "#E0EAF6"
    ],
    "tags": [
      "cyber",
      "cyber shield defense"
    ]
  },
  {
    "id": "cyber-quantum-computer-register",
    "name": "Quantum Computer Register",
    "category": "Cyber",
    "colors": [
      "#080512",
      "#160E2E",
      "#2B1D54",
      "#4C358F",
      "#ECE8F9"
    ],
    "tags": [
      "cyber",
      "quantum computer register"
    ]
  },
  {
    "id": "cyber-ai-algorithm-loop",
    "name": "AI Algorithm Loop",
    "category": "Cyber",
    "colors": [
      "#050E12",
      "#0E232B",
      "#1B3D4A",
      "#306478",
      "#E1EFF4"
    ],
    "tags": [
      "cyber",
      "ai algorithm loop"
    ]
  },
  {
    "id": "cyber-virtual-space-domain",
    "name": "Virtual Space Domain",
    "category": "Cyber",
    "colors": [
      "#080614",
      "#15102E",
      "#282052",
      "#443887",
      "#ECE9F7"
    ],
    "tags": [
      "cyber",
      "virtual space domain"
    ]
  },
  {
    "id": "cyber-data-core-cluster",
    "name": "Data Core Cluster",
    "category": "Cyber",
    "colors": [
      "#050D14",
      "#0D2130",
      "#193B52",
      "#2C5E82",
      "#E1ECF4"
    ],
    "tags": [
      "cyber",
      "data core cluster"
    ]
  },
  {
    "id": "editorial-harpers-spread-layout",
    "name": "Harper’s Spread Layout",
    "category": "Editorial",
    "colors": [
      "#1C1613",
      "#40332C",
      "#6E584D",
      "#A8897A",
      "#F6EFEB"
    ],
    "tags": [
      "editorial",
      "harper’s spread layout"
    ]
  },
  {
    "id": "editorial-letterpress-black-ink",
    "name": "Letterpress Black Ink",
    "category": "Editorial",
    "colors": [
      "#141414",
      "#2B2B2B",
      "#4D4D4D",
      "#7B7B7B",
      "#F5F5F5"
    ],
    "tags": [
      "editorial",
      "letterpress black ink"
    ]
  },
  {
    "id": "editorial-monotype-serif-type",
    "name": "Monotype Serif Type",
    "category": "Editorial",
    "colors": [
      "#1C1917",
      "#38322E",
      "#5E544F",
      "#8F827B",
      "#F4F1EF"
    ],
    "tags": [
      "editorial",
      "monotype serif type"
    ]
  },
  {
    "id": "editorial-offset-cmyk-print",
    "name": "Offset CMYK Print",
    "category": "Editorial",
    "colors": [
      "#171B1E",
      "#30373B",
      "#515C63",
      "#7D8C96",
      "#EFF3F5"
    ],
    "tags": [
      "editorial",
      "offset cmyk print"
    ]
  },
  {
    "id": "editorial-broadside-poster-red",
    "name": "Broadside Poster Red",
    "category": "Editorial",
    "colors": [
      "#241113",
      "#472225",
      "#753A3E",
      "#B35D64",
      "#F6ECEE"
    ],
    "tags": [
      "editorial",
      "broadside poster red"
    ]
  },
  {
    "id": "editorial-screenprint-red-accent",
    "name": "Screenprint Red Accent",
    "category": "Editorial",
    "colors": [
      "#241210",
      "#472522",
      "#75403C",
      "#B56761",
      "#F6EDEC"
    ],
    "tags": [
      "editorial",
      "screenprint red accent"
    ]
  },
  {
    "id": "editorial-modern-typography-swiss",
    "name": "Modern Typography Swiss",
    "category": "Editorial",
    "colors": [
      "#121314",
      "#252729",
      "#414447",
      "#686C70",
      "#F0F1F2"
    ],
    "tags": [
      "editorial",
      "modern typography swiss"
    ]
  },
  {
    "id": "editorial-minimalist-folio-sheet",
    "name": "Minimalist Folio Sheet",
    "category": "Editorial",
    "colors": [
      "#1A1816",
      "#35312C",
      "#59524B",
      "#8A8177",
      "#F5F2F0"
    ],
    "tags": [
      "editorial",
      "minimalist folio sheet"
    ]
  },
  {
    "id": "editorial-arts-architecture-issue",
    "name": "Arts & Architecture Issue",
    "category": "Editorial",
    "colors": [
      "#171A1C",
      "#2F3438",
      "#50565C",
      "#7B838C",
      "#EFF2F5"
    ],
    "tags": [
      "editorial",
      "arts & architecture issue"
    ]
  },
  {
    "id": "editorial-blueprint-modern-plan",
    "name": "Blueprint Modern Plan",
    "category": "Editorial",
    "colors": [
      "#0F1B24",
      "#203445",
      "#38576E",
      "#5D85A6",
      "#ECF2F7"
    ],
    "tags": [
      "editorial",
      "blueprint modern plan"
    ]
  },
  {
    "id": "editorial-risograph-coral-ink",
    "name": "Risograph Coral Ink",
    "category": "Editorial",
    "colors": [
      "#241214",
      "#47262A",
      "#754348",
      "#B36D74",
      "#F6ECEE"
    ],
    "tags": [
      "editorial",
      "risograph coral ink"
    ]
  },
  {
    "id": "editorial-grid-system-column",
    "name": "Grid System Column",
    "category": "Editorial",
    "colors": [
      "#141617",
      "#292C2E",
      "#464A4D",
      "#6E7378",
      "#F1F2F3"
    ],
    "tags": [
      "editorial",
      "grid system column"
    ]
  },
  {
    "id": "editorial-heavy-blackletter-font",
    "name": "Heavy Blackletter Font",
    "category": "Editorial",
    "colors": [
      "#121212",
      "#242424",
      "#404040",
      "#696969",
      "#F7F7F7"
    ],
    "tags": [
      "editorial",
      "heavy blackletter font"
    ]
  },
  {
    "id": "editorial-art-deco-gazette-headline",
    "name": "Art Deco Gazette Headline",
    "category": "Editorial",
    "colors": [
      "#211A11",
      "#3D3121",
      "#665339",
      "#9E835E",
      "#F6F2EC"
    ],
    "tags": [
      "editorial",
      "art deco gazette headline"
    ]
  },
  {
    "id": "editorial-editorial-column-width",
    "name": "Editorial Column Width",
    "category": "Editorial",
    "colors": [
      "#171717",
      "#2E2E2E",
      "#4E4E4E",
      "#787878",
      "#F3F3FF"
    ],
    "tags": [
      "editorial",
      "editorial column width"
    ]
  },
  {
    "id": "editorial-fashion-masthead-title",
    "name": "Fashion Masthead Title",
    "category": "Editorial",
    "colors": [
      "#1C1417",
      "#38282E",
      "#5E464F",
      "#91707C",
      "#F6EFF2"
    ],
    "tags": [
      "editorial",
      "fashion masthead title"
    ]
  },
  {
    "id": "editorial-constructivist-red-poster",
    "name": "Constructivist Red Poster",
    "category": "Editorial",
    "colors": [
      "#240D0F",
      "#471B1F",
      "#753138",
      "#B5525B",
      "#F6ECEE"
    ],
    "tags": [
      "editorial",
      "constructivist red poster"
    ]
  },
  {
    "id": "editorial-magazine-spread-feature",
    "name": "Magazine Spread Feature",
    "category": "Editorial",
    "colors": [
      "#1A1715",
      "#352F2B",
      "#584F4A",
      "#8B7F77",
      "#F5F2F0"
    ],
    "tags": [
      "editorial",
      "magazine spread feature"
    ]
  },
  {
    "id": "editorial-monocle-green-issue",
    "name": "Monocle Green Issue",
    "category": "Editorial",
    "colors": [
      "#131C16",
      "#25352A",
      "#3F5646",
      "#668770",
      "#ECF2ED"
    ],
    "tags": [
      "editorial",
      "monocle green issue"
    ]
  },
  {
    "id": "editorial-printmaker-ink-roller",
    "name": "Printmaker Ink Roller",
    "category": "Editorial",
    "colors": [
      "#141416",
      "#27272B",
      "#42424A",
      "#696973",
      "#F0F0F3"
    ],
    "tags": [
      "editorial",
      "printmaker ink roller"
    ]
  },
  {
    "id": "editorial-serif-headline-lead",
    "name": "Serif Headline Lead",
    "category": "Editorial",
    "colors": [
      "#171616",
      "#2E2D2D",
      "#4E4C4C",
      "#7A7878",
      "#F3F2F2"
    ],
    "tags": [
      "editorial",
      "serif headline lead"
    ]
  },
  {
    "id": "editorial-clean-layout-margin",
    "name": "Clean Layout Margin",
    "category": "Editorial",
    "colors": [
      "#141517",
      "#292B2E",
      "#46494D",
      "#6E7278",
      "#F1F2F4"
    ],
    "tags": [
      "editorial",
      "clean layout margin"
    ]
  },
  {
    "id": "editorial-swiss-typo-grid",
    "name": "Swiss Typo Grid",
    "category": "Editorial",
    "colors": [
      "#121314",
      "#262729",
      "#424447",
      "#6A6D70",
      "#F1F2F3"
    ],
    "tags": [
      "editorial",
      "swiss typo grid"
    ]
  },
  {
    "id": "editorial-bauhaus-yellow-primary",
    "name": "Bauhaus Yellow Primary",
    "category": "Editorial",
    "colors": [
      "#241D08",
      "#453813",
      "#6E5C25",
      "#A89045",
      "#F7F4E9"
    ],
    "tags": [
      "editorial",
      "bauhaus yellow primary"
    ]
  },
  {
    "id": "editorial-vogue-paris-cover",
    "name": "Vogue Paris Cover",
    "category": "Editorial",
    "colors": [
      "#1A1418",
      "#352932",
      "#584753",
      "#897282",
      "#F4EFF3"
    ],
    "tags": [
      "editorial",
      "vogue paris cover"
    ]
  },
  {
    "id": "editorial-new-yorker-blue-cover",
    "name": "New Yorker Blue Cover",
    "category": "Editorial",
    "colors": [
      "#101A24",
      "#213345",
      "#3A546E",
      "#6083A6",
      "#ECF2F7"
    ],
    "tags": [
      "editorial",
      "new yorker blue cover"
    ]
  },
  {
    "id": "editorial-letterpress-black-proof",
    "name": "Letterpress Black Proof",
    "category": "Editorial",
    "colors": [
      "#141414",
      "#282828",
      "#444444",
      "#6D6D6D",
      "#F6F6F6"
    ],
    "tags": [
      "editorial",
      "letterpress black proof"
    ]
  },
  {
    "id": "editorial-modernist-poster-art",
    "name": "Modernist Poster Art",
    "category": "Editorial",
    "colors": [
      "#161617",
      "#2D2D2E",
      "#4B4B4F",
      "#75757A",
      "#F2F2F4"
    ],
    "tags": [
      "editorial",
      "modernist poster art"
    ]
  },
  {
    "id": "soft-neutral-muted-canvas-texture",
    "name": "Muted Canvas Texture",
    "category": "Soft Neutral",
    "colors": [
      "#1F1D19",
      "#3B3731",
      "#5F5A51",
      "#8F887D",
      "#F4F2EF"
    ],
    "tags": [
      "soft neutral",
      "muted canvas texture"
    ]
  },
  {
    "id": "soft-neutral-sand-dollar-beach",
    "name": "Sand Dollar Beach",
    "category": "Soft Neutral",
    "colors": [
      "#211E1A",
      "#3D3832",
      "#635C53",
      "#968E83",
      "#F5F3F0"
    ],
    "tags": [
      "soft neutral",
      "sand dollar beach"
    ]
  },
  {
    "id": "soft-neutral-chalk-stone-wall",
    "name": "Chalk & Stone Wall",
    "category": "Soft Neutral",
    "colors": [
      "#1E1C1A",
      "#383531",
      "#5B5651",
      "#8C857E",
      "#F4F2F0"
    ],
    "tags": [
      "soft neutral",
      "chalk & stone wall"
    ]
  },
  {
    "id": "soft-neutral-pale-travertine-floor",
    "name": "Pale Travertine Floor",
    "category": "Soft Neutral",
    "colors": [
      "#211E18",
      "#3D382E",
      "#635B4C",
      "#968C79",
      "#F5F3EC"
    ],
    "tags": [
      "soft neutral",
      "pale travertine floor"
    ]
  },
  {
    "id": "soft-neutral-raw-silk-drapery",
    "name": "Raw Silk Drapery",
    "category": "Soft Neutral",
    "colors": [
      "#1F1C18",
      "#3B3630",
      "#605950",
      "#91887D",
      "#F4F2EE"
    ],
    "tags": [
      "soft neutral",
      "raw silk drapery"
    ]
  },
  {
    "id": "soft-neutral-bleached-wood-grain",
    "name": "Bleached Wood Grain",
    "category": "Soft Neutral",
    "colors": [
      "#1F1E1B",
      "#3B3934",
      "#5F5C55",
      "#918D85",
      "#F4F3F0"
    ],
    "tags": [
      "soft neutral",
      "bleached wood grain"
    ]
  },
  {
    "id": "soft-neutral-warm-wool-knit",
    "name": "Warm Wool Knit",
    "category": "Soft Neutral",
    "colors": [
      "#1F1C18",
      "#3B362F",
      "#5F574E",
      "#91877C",
      "#F4F1EE"
    ],
    "tags": [
      "soft neutral",
      "warm wool knit"
    ]
  },
  {
    "id": "soft-neutral-soft-plaster-wall",
    "name": "Soft Plaster Wall",
    "category": "Soft Neutral",
    "colors": [
      "#1D1B19",
      "#383431",
      "#5C5651",
      "#8C847E",
      "#F4F2F0"
    ],
    "tags": [
      "soft neutral",
      "soft plaster wall"
    ]
  },
  {
    "id": "soft-neutral-vanilla-bean-husk",
    "name": "Vanilla Bean Husk",
    "category": "Soft Neutral",
    "colors": [
      "#211D17",
      "#3D372E",
      "#635B4E",
      "#968C7C",
      "#F5F3EC"
    ],
    "tags": [
      "soft neutral",
      "vanilla bean husk"
    ]
  },
  {
    "id": "soft-neutral-pale-bisque-ceramic",
    "name": "Pale Bisque Ceramic",
    "category": "Soft Neutral",
    "colors": [
      "#211C18",
      "#3D3630",
      "#635950",
      "#968A80",
      "#F5F1EE"
    ],
    "tags": [
      "soft neutral",
      "pale bisque ceramic"
    ]
  },
  {
    "id": "soft-neutral-limestone-dust-quarry",
    "name": "Limestone Dust Quarry",
    "category": "Soft Neutral",
    "colors": [
      "#1E1C18",
      "#383530",
      "#5B5750",
      "#8C867E",
      "#F4F2EE"
    ],
    "tags": [
      "soft neutral",
      "limestone dust quarry"
    ]
  },
  {
    "id": "soft-neutral-oat-milk-cream",
    "name": "Oat Milk Cream",
    "category": "Soft Neutral",
    "colors": [
      "#211E19",
      "#3D3831",
      "#635C52",
      "#968D81",
      "#F5F3EF"
    ],
    "tags": [
      "soft neutral",
      "oat milk cream"
    ]
  },
  {
    "id": "soft-neutral-driftwood-gray-plank",
    "name": "Driftwood Gray Plank",
    "category": "Soft Neutral",
    "colors": [
      "#1C1C1A",
      "#353532",
      "#565652",
      "#84847E",
      "#F3F3F1"
    ],
    "tags": [
      "soft neutral",
      "driftwood gray plank"
    ]
  },
  {
    "id": "soft-neutral-soft-calico-cat",
    "name": "Soft Calico Cat",
    "category": "Soft Neutral",
    "colors": [
      "#211C19",
      "#3D3631",
      "#635A52",
      "#968B82",
      "#F5F2EF"
    ],
    "tags": [
      "soft neutral",
      "soft calico cat"
    ]
  },
  {
    "id": "soft-neutral-parchment-hue-page",
    "name": "Parchment Hue Page",
    "category": "Soft Neutral",
    "colors": [
      "#211D17",
      "#3D372E",
      "#635A4D",
      "#968B7A",
      "#F5F2EB"
    ],
    "tags": [
      "soft neutral",
      "parchment hue page"
    ]
  },
  {
    "id": "soft-neutral-gentle-sand-shore",
    "name": "Gentle Sand Shore",
    "category": "Soft Neutral",
    "colors": [
      "#211E18",
      "#3D372E",
      "#635B4E",
      "#968C7C",
      "#F5F3EB"
    ],
    "tags": [
      "soft neutral",
      "gentle sand shore"
    ]
  },
  {
    "id": "soft-neutral-muted-cream-velvet",
    "name": "Muted Cream Velvet",
    "category": "Soft Neutral",
    "colors": [
      "#211E1A",
      "#3D3832",
      "#635C54",
      "#968D84",
      "#F5F3EF"
    ],
    "tags": [
      "soft neutral",
      "muted cream velvet"
    ]
  },
  {
    "id": "soft-neutral-rice-powder-fine",
    "name": "Rice Powder Fine",
    "category": "Soft Neutral",
    "colors": [
      "#1F1E1C",
      "#3B3937",
      "#5F5C59",
      "#8F8B87",
      "#F4F3F2"
    ],
    "tags": [
      "soft neutral",
      "rice powder fine"
    ]
  },
  {
    "id": "soft-neutral-natural-linen-towel",
    "name": "Natural Linen Towel",
    "category": "Soft Neutral",
    "colors": [
      "#1F1C18",
      "#3B3630",
      "#605850",
      "#91877E",
      "#F4F1EE"
    ],
    "tags": [
      "soft neutral",
      "natural linen towel"
    ]
  },
  {
    "id": "soft-neutral-bleached-cotton-sheet",
    "name": "Bleached Cotton Sheet",
    "category": "Soft Neutral",
    "colors": [
      "#1D1D1B",
      "#383835",
      "#5C5C58",
      "#8C8C87",
      "#F4F4F2"
    ],
    "tags": [
      "soft neutral",
      "bleached cotton sheet"
    ]
  },
  {
    "id": "soft-neutral-creamy-alabaster-urn",
    "name": "Creamy Alabaster Urn",
    "category": "Soft Neutral",
    "colors": [
      "#211E19",
      "#3D3831",
      "#635C53",
      "#968E83",
      "#F5F3EF"
    ],
    "tags": [
      "soft neutral",
      "creamy alabaster urn"
    ]
  },
  {
    "id": "soft-neutral-soft-hemp-rope",
    "name": "Soft Hemp Rope",
    "category": "Soft Neutral",
    "colors": [
      "#211D18",
      "#3D3730",
      "#635A50",
      "#968B7E",
      "#F5F2EE"
    ],
    "tags": [
      "soft neutral",
      "soft hemp rope"
    ]
  },
  {
    "id": "soft-neutral-bone-china-cup",
    "name": "Bone China Cup",
    "category": "Soft Neutral",
    "colors": [
      "#1F1E1B",
      "#3B3935",
      "#605C57",
      "#918D86",
      "#F4F3F0"
    ],
    "tags": [
      "soft neutral",
      "bone china cup"
    ]
  },
  {
    "id": "soft-neutral-pale-putty-glaze",
    "name": "Pale Putty Glaze",
    "category": "Soft Neutral",
    "colors": [
      "#1E1C1A",
      "#383532",
      "#5B5752",
      "#8C8681",
      "#F4F2F0"
    ],
    "tags": [
      "soft neutral",
      "pale putty glaze"
    ]
  },
  {
    "id": "soft-neutral-warm-ecru-silk",
    "name": "Warm Ecru Silk",
    "category": "Soft Neutral",
    "colors": [
      "#211D17",
      "#3D372E",
      "#635A4E",
      "#968A7C",
      "#F5F2EB"
    ],
    "tags": [
      "soft neutral",
      "warm ecru silk"
    ]
  },
  {
    "id": "soft-neutral-muted-linen-weave",
    "name": "Muted Linen Weave",
    "category": "Soft Neutral",
    "colors": [
      "#1F1D19",
      "#3B3731",
      "#605A52",
      "#918A80",
      "#F4F2EE"
    ],
    "tags": [
      "soft neutral",
      "muted linen weave"
    ]
  },
  {
    "id": "soft-neutral-sand-dune-horizon",
    "name": "Sand Dune Horizon",
    "category": "Soft Neutral",
    "colors": [
      "#211D17",
      "#3D362C",
      "#635A4B",
      "#968A77",
      "#F5F1E9"
    ],
    "tags": [
      "soft neutral",
      "sand dune horizon"
    ]
  },
  {
    "id": "soft-neutral-soft-cashmere-wrap",
    "name": "Soft Cashmere Wrap",
    "category": "Soft Neutral",
    "colors": [
      "#211D1A",
      "#3D3732",
      "#635A54",
      "#968A83",
      "#F5F2F0"
    ],
    "tags": [
      "soft neutral",
      "soft cashmere wrap"
    ]
  }
];
