import fs from 'fs';
import path from 'path';

function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-');
}

function normalizeHex(hex) {
  let clean = hex.trim().toUpperCase();
  if (!clean.startsWith('#')) clean = '#' + clean;
  if (clean.length === 4) {
    clean = '#' + clean[1] + clean[1] + clean[2] + clean[2] + clean[3] + clean[3];
  }
  return clean;
}

function isValidHex(hex) {
  return /^#[0-9A-F]{6}$/i.test(normalizeHex(hex));
}

// 1. Read existing 480 presets
const existingFile = path.resolve('src/lib/presets/presets.ts');
const fileContent = fs.readFileSync(existingFile, 'utf8');
const jsonStart = fileContent.indexOf('export const PRESET_PALETTES: PalettePreset[] = [');
const arrayStr = fileContent.slice(jsonStart + 'export const PRESET_PALETTES: PalettePreset[] = '.length).trim().replace(/;$/, '');
const existingPresets = JSON.parse(arrayStr).slice(0, 480);

// Resolve any duplicate combinations in baseline 480
for (const p of existingPresets) {
  if (p.name === 'Midcentury Teal') {
    p.colors = ['#264653', '#2A9D8F', '#E76245', '#E9C46A', '#F4A261'];
  }
}

console.log(`Loaded ${existingPresets.length} baseline presets from presets.ts`);

// 2. Define 28 distinct, human-named, aesthetically tailored palettes for each of the 20 categories
const NEW_PRESETS_BY_CAT = {
  Pastel: [
    { name: 'Lemon Chiffon', colors: ['#FFF9DB', '#FFF3BF', '#FFE066', '#FFD43B', '#F8F9FA'] },
    { name: 'Sugar Almond', colors: ['#F3E9DC', '#EBD2B4', '#DFBCA0', '#C2A385', '#FFFDF9'] },
    { name: 'Dusty Periwinkle', colors: ['#E6E6FA', '#D4D4F7', '#B8B8F0', '#9D9DE0', '#F8F8FF'] },
    { name: 'Marshmallow Melt', colors: ['#FFF0F5', '#FFE4E1', '#FFD1DC', '#FFB7C5', '#FFFFFF'] },
    { name: 'Buttercream Frosting', colors: ['#FEFEE2', '#FCF6BD', '#F7E785', '#E9D66B', '#FDFFF5'] },
    { name: 'Iced Lavender', colors: ['#F3E8FF', '#E9D5FF', '#D8B4FE', '#C084FC', '#FAF5FF'] },
    { name: 'Pale Apricot', colors: ['#FFE8D6', '#FFD7BA', '#FEC89A', '#F7B267', '#FFF5EB'] },
    { name: 'Mint Sorbet', colors: ['#E8F5E9', '#C8E6C9', '#A5D6A7', '#81C784', '#F1F8E9'] },
    { name: 'Petal Pink', colors: ['#FCE4EC', '#F8BBD0', '#F48FB1', '#F06292', '#FFF0F5'] },
    { name: 'Sweet Dewdrop', colors: ['#E0F7FA', '#B2EBF2', '#80DEEA', '#4DD0E1', '#F0FCFD'] },
    { name: 'Lilac Macaroon', colors: ['#EDE7F6', '#D1C4E9', '#B39DDB', '#9575CD', '#F7F4FB'] },
    { name: 'Peach Gelato', colors: ['#FFF3E0', '#FFE0B2', '#FFCC80', '#FFB74D', '#FFFBF5'] },
    { name: 'Morning Mist Pastel', colors: ['#ECEFF1', '#CFD8DC', '#B0BEC5', '#90A4AE', '#F5F7F8'] },
    { name: 'Strawberry Milk', colors: ['#FEEBF1', '#FCD5E3', '#F9ADC6', '#F57FA6', '#FFFFFF'] },
    { name: 'Vanilla Bean Cream', colors: ['#FFFBEA', '#FEF3C7', '#FDE68A', '#FCD34D', '#FFFDF5'] },
    { name: 'Whisper Blue', colors: ['#F0F9FF', '#E0F2FE', '#BAE6FD', '#7DD3FC', '#F8FCFF'] },
    { name: 'Sunlit Primrose', colors: ['#FEF9C3', '#FEF08A', '#FDE047', '#EAB308', '#FFFEF0'] },
    { name: 'Muted Daisy', colors: ['#FEFCE8', '#FEF9C3', '#E2E8F0', '#CBD5E1', '#94A3B8'] },
    { name: 'Rose Quartz Tint', colors: ['#FDF2F8', '#FCE7F3', '#FBCFE8', '#F472B6', '#FFF8FB'] },
    { name: 'Soft Clementine', colors: ['#FFF7ED', '#FFEDD5', '#FED7AA', '#FB923C', '#FFFCF8'] },
    { name: 'Powdered Thyme', colors: ['#F2FBF7', '#DCF5E9', '#BAEDD3', '#82D8AE', '#FBFEFC'] },
    { name: 'Milk Glass', colors: ['#F8FAFC', '#F1F5F9', '#E2E8F0', '#CBD5E1', '#FFFFFF'] },
    { name: 'Glazed Porcelain', colors: ['#F4FBFB', '#E1F5F5', '#C0EBEB', '#92D7D7', '#FAFEFE'] },
    { name: 'Spun Sugar', colors: ['#FFF1F2', '#FFE4E6', '#FECDD3', '#FDA4AF', '#FFFFFF'] },
    { name: 'Honeycomb Cream', colors: ['#FEFCE8', '#FEF08A', '#FACC15', '#CA8A04', '#FFFDF0'] },
    { name: 'Peach Bellini', colors: ['#FFF5EB', '#FEE2CA', '#FDC79B', '#F89658', '#FFFAF4'] },
    { name: 'Lavender Cream', colors: ['#FAF5FF', '#F3E8FF', '#E9D5FF', '#C084FC', '#FCFAFF'] },
    { name: 'Cloudberry Pastel', colors: ['#FFF8F1', '#FEE7D1', '#FDCFA7', '#F89235', '#FFFCFA'] },
  ],

  Ocean: [
    { name: 'Turquoise Cove', colors: ['#0A2E36', '#145A68', '#228B9F', '#3EC5DB', '#E0F9FD'] },
    { name: 'Emerald Wave', colors: ['#062822', '#0D4D42', '#187D6C', '#2CD2B5', '#E6FAF6'] },
    { name: 'Sapphire Horizon', colors: ['#0A1931', '#15325B', '#235293', '#4380D3', '#EAF2FB'] },
    { name: 'Oceanic Trench', colors: ['#040D1A', '#0B1E38', '#14355F', '#225899', '#DBE8F5'] },
    { name: 'Sunlit Shallows', colors: ['#0F3843', '#1F6B7E', '#36A7C3', '#72D7ED', '#EBFBFE'] },
    { name: 'Coastal Cliff', colors: ['#1C2826', '#354A46', '#597872', '#8DAEB5', '#EAF2F2'] },
    { name: 'Deep Navy Trench', colors: ['#030914', '#08172E', '#102A4E', '#1D457B', '#CBDDF3'] },
    { name: 'Sea Anemone', colors: ['#1A0C24', '#381B4E', '#64328A', '#9B58CC', '#F4EBFA'] },
    { name: 'Driftwood Coast', colors: ['#2B2A27', '#4A4742', '#736F68', '#A8A49C', '#F2F1EE'] },
    { name: 'Salt Spray Drift', colors: ['#102B33', '#1F4E5B', '#347C90', '#63B7CE', '#E8F6FA'] },
    { name: 'Azure Abyss', colors: ['#051329', '#0D2952', '#184583', '#2C6EC7', '#E3EEFB'] },
    { name: 'Sea Salt Blue', colors: ['#132B38', '#244D62', '#3D7A99', '#6EB0D1', '#E7F4FA'] },
    { name: 'Pelagic Drift', colors: ['#08202E', '#123D54', '#206588', '#3DA3D5', '#E3F4FC'] },
    { name: 'Blue Marlin', colors: ['#061726', '#0F304E', '#1D5382', '#3689CD', '#DCECF7'] },
    { name: 'Coral Reef Lagoon', colors: ['#0C2B30', '#18515A', '#298694', '#47C2D4', '#E2F8FB'] },
    { name: 'Tidal Eddy', colors: ['#0B2533', '#16435B', '#276E93', '#49A8DA', '#E5F4FC'] },
    { name: 'Arctic Floe', colors: ['#112530', '#204254', '#376882', '#64A2C3', '#E9F3F8'] },
    { name: 'Bay of Biscay', colors: ['#0D1F2D', '#1A3A54', '#2C5E85', '#4B91C4', '#E1EEF6'] },
    { name: 'Mariana Blue', colors: ['#020A14', '#071A30', '#0F335B', '#1B5A9D', '#D1E4FA'] },
    { name: 'Sargasso Green', colors: ['#0F2B1D', '#1E4E36', '#327F59', '#54BA88', '#E5F7EE'] },
    { name: 'Windward Coast', colors: ['#0E2633', '#1B475E', '#2D7599', '#52B1DF', '#E5F5FD'] },
    { name: 'Harbor Mist Drift', colors: ['#1A2C35', '#2E4C5A', '#497488', '#77A7BF', '#ECF4F8'] },
    { name: 'Oceanic Blue Ridge', colors: ['#091D31', '#14385E', '#225B94', '#3B8CDC', '#E0EEFB'] },
    { name: 'Seafoam Horizon', colors: ['#0E302B', '#1C564E', '#308A7E', '#56C7B8', '#E6FAF7'] },
    { name: 'Neptune Crown', colors: ['#07192C', '#103357', '#1E5891', '#378EDD', '#DFEFFC'] },
    { name: 'Poseidon Deep', colors: ['#041221', '#0B2644', '#154475', '#2670BD', '#D7E9FC'] },
    { name: 'Baltic Coast Line', colors: ['#16242B', '#293F4A', '#436474', '#6D99AF', '#EBF2F6'] },
    { name: 'Indigo Wave Break', colors: ['#0E162E', '#1B2A54', '#2E4585', '#4C6EC4', '#E8EDF9'] },
  ],

  Nature: [
    { name: 'Pine Needle Glade', colors: ['#122416', '#214228', '#366941', '#5A9F6B', '#E4F4E8'] },
    { name: 'Magnolia Branch', colors: ['#2E2620', '#54463B', '#846F5F', '#BDAB9C', '#F6F3F0'] },
    { name: 'Clover Patch', colors: ['#142B18', '#244D2B', '#3B7A46', '#61BA71', '#E7F8EB'] },
    { name: 'Spring Willow', colors: ['#1C2E1A', '#324F2F', '#527D4D', '#84B87D', '#EFF7ED'] },
    { name: 'Juniper Berry', colors: ['#17242B', '#273E49', '#3E6171', '#6696AD', '#ECF4F7'] },
    { name: 'Mountain Fern', colors: ['#132918', '#22482B', '#387346', '#5BB76F', '#E6F8EB'] },
    { name: 'Wild Lavender Bloom', colors: ['#231C2E', '#3D314E', '#614F7A', '#9681B7', '#F3EFF8'] },
    { name: 'Thistle Blossom', colors: ['#2A1D28', '#483345', '#72536E', '#AA84A6', '#F7F1F6'] },
    { name: 'Bluebell Woods', colors: ['#151C30', '#253254', '#3E5183', '#6881C2', '#ECF0FA'] },
    { name: 'Forest Moss Valley', colors: ['#192915', '#2C4725', '#476F3C', '#73AC63', '#EDF6EA'] },
    { name: 'Goldenrod Field', colors: ['#2E2712', '#524521', '#857137', '#C9AE59', '#F9F6EA'] },
    { name: 'Cedar Bark Trunk', colors: ['#2B1E19', '#4C362D', '#79584A', '#B08B7B', '#F5EFEC'] },
    { name: 'Aspen Gold Leaf', colors: ['#2D2513', '#4F4223', '#806B3A', '#C4A65C', '#F8F5EC'] },
    { name: 'Wild Berry Thicket', colors: ['#29151C', '#482532', '#733C50', '#AD637E', '#F7EDF1'] },
    { name: 'Woodland Heather Moor', colors: ['#251A22', '#412F3D', '#674C61', '#9C7B95', '#F5EFF4'] },
    { name: 'Sweet Briar Bush', colors: ['#29181B', '#482B30', '#73464E', '#AD737D', '#F7EFF1'] },
    { name: 'Meadow Grass Plains', colors: ['#1A2C18', '#2F4D2B', '#4C7946', '#7BB873', '#ECF6EB'] },
    { name: 'Sagebrush Valley', colors: ['#1F2B24', '#36493E', '#547061', '#83A593', '#EEF4F0'] },
    { name: 'Evergreen Canopy Ridge', colors: ['#0E2616', '#1A4528', '#2B6F41', '#47A867', '#E2F6E9'] },
    { name: 'Sunlit Foliage Peak', colors: ['#242D14', '#3F4E24', '#647C3B', '#9BBF62', '#F1F7E8'] },
    { name: 'Dewy Moss Stone', colors: ['#182B1B', '#2B4A30', '#44734D', '#6DB07B', '#EAF5EC'] },
    { name: 'Heathered Hillside', colors: ['#251E28', '#403444', '#65546C', '#9A86A3', '#F4EFF6'] },
    { name: 'Cypress Swamp Bayou', colors: ['#16251E', '#273F34', '#3E6152', '#679681', '#EBF3EF'] },
    { name: 'Spring Thaw Brook', colors: ['#16262B', '#263F47', '#3D626E', '#6798A8', '#EAF3F6'] },
    { name: 'Autumn Chaff Wind', colors: ['#2E2519', '#50412D', '#7E6849', '#BAA077', '#F6F2EC'] },
    { name: 'Oak Gall Branch', colors: ['#292019', '#483A2E', '#735E4B', '#AA927B', '#F5F0EB'] },
    { name: 'Wild Orchard Tree', colors: ['#222B18', '#3C4B2C', '#5F7647', '#93B372', '#EFF5E9'] },
    { name: 'Bramble Berry Cane', colors: ['#24131D', '#412234', '#683854', '#9E5B83', '#F5ECF1'] },
  ],

  Sunset: [
    { name: 'Flamingo Sunset', colors: ['#3A131C', '#682233', '#A83B55', '#E66885', '#FCEEF1'] },
    { name: 'Apricot Horizon', colors: ['#331A12', '#5D3021', '#945039', '#D98468', '#FAF0EC'] },
    { name: 'Violet Twilight Skies', colors: ['#21122C', '#3D224F', '#663B82', '#A267C7', '#F3ECF8'] },
    { name: 'Burning Sky Dusk', colors: ['#38110D', '#672118', '#A6382B', '#E86654', '#FBEEEE'] },
    { name: 'Evening Glow Horizon', colors: ['#351A18', '#5E302D', '#96524E', '#D98A86', '#FAF0EF'] },
    { name: 'Sunset Overpass Bridge', colors: ['#2A1828', '#4C2C48', '#794874', '#B675AF', '#F7EEF6'] },
    { name: 'Desert Rose Sunset', colors: ['#301A20', '#55303A', '#86505D', '#C48393', '#F8EEF1'] },
    { name: 'Crimson Dusk Shadow', colors: ['#360F15', '#611D27', '#9C3341', '#E05F71', '#FAEBEF'] },
    { name: 'Peach Skyline Vista', colors: ['#351D16', '#5F3528', '#985945', '#DC8F79', '#FAF1EE'] },
    { name: 'Sunken Sun Flare', colors: ['#391512', '#642822', '#9F443B', '#E2756A', '#FBEFEB'] },
    { name: 'Fiery Mirage Wave', colors: ['#3B140B', '#682616', '#A64127', '#EB6E4E', '#FBEEEC'] },
    { name: 'Sundown Whisper Breeze', colors: ['#2B1B26', '#4C3144', '#79516E', '#B382A6', '#F6EFF4'] },
    { name: 'Sunset Serenade Song', colors: ['#321926', '#582E44', '#8B4D6E', '#C97DA4', '#F8EEF3'] },
    { name: 'Terracotta Sky Ridge', colors: ['#311B15', '#553127', '#875142', '#C68371', '#F7EFEC'] },
    { name: 'Sunset Oasis Spring', colors: ['#2A1926', '#492E43', '#734E6B', '#AA7C9F', '#F5EEF3'] },
    { name: 'Amber Twilight Glow', colors: ['#341E11', '#5C3620', '#925936', '#D58E5E', '#F9F1EB'] },
    { name: 'Pacific Sunset Ocean', colors: ['#35161D', '#5E2935', '#954657', '#D6768B', '#FAEFF1'] },
    { name: 'Lavender Horizon Line', colors: ['#24192F', '#402E53', '#664C83', '#9E7EC4', '#F4EFF9'] },
    { name: 'Orange Sherbet Skyfall', colors: ['#381B10', '#623220', '#9C5539', '#DF8664', '#FAF0EB'] },
    { name: 'Sunset Crest Hill', colors: ['#331821', '#5A2D3C', '#8E4B61', '#CF7C96', '#F9EFF2'] },
    { name: 'Tropic Sundown Bay', colors: ['#381716', '#632C2A', '#9C4B47', '#DF7D79', '#FAEFEB'] },
    { name: 'Autumn Dusk Wood', colors: ['#301C19', '#53332D', '#84554B', '#C1887C', '#F6EFEB'] },
    { name: 'Horizon Radiance Beam', colors: ['#3A1A12', '#643124', '#9E5240', '#E2836E', '#FAEFEC'] },
    { name: 'Evening Flare Star', colors: ['#381419', '#632730', '#9E4250', '#E16F80', '#FAEBEF'] },
    { name: 'Golden Radiance Field', colors: ['#332211', '#593D20', '#8C6436', '#CB985D', '#F8F3EC'] },
    { name: 'Sundown Ember Hearth', colors: ['#361413', '#602825', '#984440', '#D9716C', '#FAEBEB'] },
    { name: 'Sunset Veil Cloud', colors: ['#2B1B2B', '#4B314B', '#765176', '#B082B0', '#F6EFF6'] },
    { name: 'Dusky Quartz Peak', colors: ['#2E1E26', '#4E3543', '#7B576B', '#B488A1', '#F6EFF3'] },
  ],

  Earth: [
    { name: 'Raw Ochre Soil', colors: ['#362512', '#5F4120', '#966733', '#D7974E', '#F9F2EB'] },
    { name: 'Rust Shale Rock', colors: ['#341B16', '#5C3027', '#934E3F', '#D47562', '#FAEFEC'] },
    { name: 'Sandstone Canyon Pass', colors: ['#362217', '#603D2A', '#9A6344', '#DC936B', '#F9EFEB'] },
    { name: 'Desert Mesa Flat', colors: ['#311E16', '#573627', '#8A563F', '#C78163', '#F8EFEB'] },
    { name: 'Weathered Slate Bed', colors: ['#242426', '#3E3E42', '#63636B', '#9494A1', '#F0F0F2'] },
    { name: 'Siltstone Layer', colors: ['#2F261D', '#534434', '#846D54', '#BD9F80', '#F6F2EC'] },
    { name: 'Red Sand Ridge', colors: ['#3A1813', '#662B22', '#A34637', '#E56D5B', '#FCEEEB'] },
    { name: 'Volcanic Ash Cloud', colors: ['#222123', '#3B3A3E', '#5F5E66', '#8F8D99', '#EFEFF2'] },
    { name: 'Umber Wash Tint', colors: ['#2B2117', '#4C3B29', '#7A6042', '#B2916E', '#F5EFE9'] },
    { name: 'Terra Nera Ground', colors: ['#1C1918', '#342F2D', '#554C49', '#827773', '#ECE9E8'] },
    { name: 'Mesa Horizon Edge', colors: ['#341D17', '#5C342A', '#925343', '#D3806E', '#FAF0EC'] },
    { name: 'Desert Monolith Spire', colors: ['#382417', '#623F28', '#9B6440', '#DC9566', '#FAEFEC'] },
    { name: 'Terracotta Hearthstone', colors: ['#351A14', '#5E2F24', '#964C3B', '#D77762', '#FAEFEB'] },
    { name: 'Sepia Shale Stratum', colors: ['#2D231C', '#4F3E32', '#7E6451', '#B59682', '#F6F1EC'] },
    { name: 'Fossil Bed Rock', colors: ['#29241E', '#484036', '#746757', '#A99B8B', '#F4F1EC'] },
    { name: 'Red Clay Basin', colors: ['#361612', '#5F2820', '#984135', '#DC6756', '#FAEFEB'] },
    { name: 'Warm Ochre Quarry', colors: ['#332313', '#5B3F23', '#916438', '#D39659', '#F9F2EB'] },
    { name: 'Earth Crucible Fire', colors: ['#371B11', '#61301F', '#9B4E32', '#DE7957', '#FAEFEC'] },
    { name: 'Clay Quarry Pit', colors: ['#331E18', '#5A352B', '#8F5545', '#CE8271', '#F8EFEC'] },
    { name: 'Dune Crest Wind', colors: ['#37291A', '#61492E', '#9A754A', '#DEB079', '#FAF5EE'] },
    { name: 'Desert Strata Shelf', colors: ['#32211A', '#573A2E', '#8C5E4B', '#C98D78', '#F7EFEA'] },
    { name: 'Sandstone Peak Crag', colors: ['#352319', '#5D3E2C', '#946347', '#D59675', '#F9EFEB'] },
    { name: 'Adobe Hearth Kiln', colors: ['#331C16', '#593227', '#8E5140', '#CE7E6C', '#F8EFEA'] },
    { name: 'Baked Silt Mud', colors: ['#2E221A', '#513D2F', '#81624C', '#BA957E', '#F6F0EC'] },
    { name: 'Loam Field Soil', colors: ['#2B211A', '#4A392D', '#765C4A', '#AB8B75', '#F4EFEB'] },
    { name: 'Ironstone Matrix', colors: ['#341915', '#5C2D26', '#924A40', '#D37265', '#FAECE8'] },
    { name: 'Dry Caliche Layer', colors: ['#2A2722', '#4A453D', '#756E63', '#A8A196', '#F3F1ED'] },
    { name: 'Pumice Valley', colors: ['#272523', '#45423E', '#6E6A64', '#A19D97', '#F1F0ED'] },
  ],

  Minimal: [
    { name: 'Nordic Slate Form', colors: ['#12161A', '#242B33', '#3D4754', '#606E82', '#F0F3F7'] },
    { name: 'Clean Shadow Line', colors: ['#18191A', '#2E3033', '#4A4E54', '#707680', '#F2F4F7'] },
    { name: 'Minimalist Clay Studio', colors: ['#1D1B1A', '#363330', '#56514D', '#827D78', '#F5F3F0'] },
    { name: 'Off-White Form', colors: ['#1A1A1A', '#333333', '#595959', '#8C8C8C', '#FAFAFA'] },
    { name: 'Cool Concrete Studio', colors: ['#161A1D', '#293136', '#434F57', '#697A85', '#F1F5F7'] },
    { name: 'Modernist Line Art', colors: ['#0A0A0A', '#1F1F1F', '#3D3D3D', '#666666', '#FFFFFF'] },
    { name: 'Muted Charcoal Block', colors: ['#14171A', '#262C30', '#404950', '#63707B', '#EFF3F5'] },
    { name: 'Blank Canvas Loft', colors: ['#1A1817', '#33302E', '#54504D', '#827C78', '#F7F5F2'] },
    { name: 'Titanium Gray Edge', colors: ['#151719', '#282C30', '#41484F', '#68717B', '#F0F3F5'] },
    { name: 'Clean Quartz Surface', colors: ['#181A1C', '#2D3035', '#494E56', '#727985', '#F2F5F8'] },
    { name: 'Studio Slate Wall', colors: ['#13181C', '#232C33', '#3B4853', '#5E7282', '#EEF3F7'] },
    { name: 'Gallery White Floor', colors: ['#111111', '#262626', '#474747', '#737373', '#F9F9F9'] },
    { name: 'Raw Gypsum Block', colors: ['#1C1B1A', '#363433', '#575452', '#84807D', '#F6F5F2'] },
    { name: 'Monolith Gray Mass', colors: ['#17181A', '#2A2D30', '#45484D', '#6B7078', '#F1F3F5'] },
    { name: 'Studio Ash Board', colors: ['#1A1A1C', '#303035', '#4E4E56', '#767682', '#F3F3F7'] },
    { name: 'Fine Line Print', colors: ['#0F0F0F', '#242424', '#424242', '#696969', '#FAFAFA'] },
    { name: 'Matte Graphite Bar', colors: ['#121314', '#222528', '#383D42', '#5B626A', '#EFF1F3'] },
    { name: 'Clean Slate Slab', colors: ['#14181B', '#252D33', '#3E4952', '#62727F', '#EFF3F6'] },
    { name: 'Subtle Concrete Floor', colors: ['#191C1E', '#2F3438', '#4B5257', '#737D84', '#F2F5F7'] },
    { name: 'High Contrast Minimalist', colors: ['#050505', '#141414', '#2E2E2E', '#525252', '#FFFFFF'] },
    { name: 'Bone & Zinc Beam', colors: ['#1B1B18', '#33332E', '#52524A', '#7D7D72', '#F5F5ED'] },
    { name: 'Pale Marble Column', colors: ['#181A1B', '#2D3133', '#494E52', '#70777C', '#F2F5F6'] },
    { name: 'Gallery Floor Polish', colors: ['#161616', '#2C2C2C', '#4A4A4A', '#757575', '#F7F7F7'] },
    { name: 'Minimalist Wood Plank', colors: ['#1E1A17', '#36302B', '#574D45', '#84776D', '#F6F2EE'] },
    { name: 'Neutral Grid Form', colors: ['#17191A', '#2B2F30', '#474C4D', '#6E7475', '#F1F3F4'] },
    { name: 'Pure Chalk Mark', colors: ['#141414', '#292929', '#474747', '#707070', '#FCFCFC'] },
    { name: 'Raw Linen Minimalist', colors: ['#1C1A17', '#34302C', '#544F49', '#807973', '#F5F3EF'] },
    { name: 'Studio Form Void', colors: ['#0D0D0E', '#1C1C1F', '#333338', '#57575E', '#F7F7FA'] },
  ],

  Retro: [
    { name: 'Retro Sunburst', colors: ['#2E1805', '#572E09', '#914F13', '#E08028', '#FDF5EC'] },
    { name: 'AM Radio Tuner', colors: ['#281E12', '#4B3822', '#7A5D3B', '#BA9263', '#F7F3EC'] },
    { name: 'Vintage Scooter', colors: ['#0A2624', '#144B48', '#237D78', '#42C4BD', '#EAFBF9'] },
    { name: '70s Avocado Kitchen', colors: ['#1E260D', '#3A4B1A', '#5E792C', '#92BA4B', '#F3F9EA'] },
    { name: 'Pop Art Print Studio', colors: ['#2E060D', '#570C1A', '#941731', '#E83155', '#FCEEF1'] },
    { name: '80s Mall Corridor', colors: ['#1B0A26', '#35144A', '#5B237C', '#9743C7', '#F6EDFA'] },
    { name: 'Record Store Vinyl', colors: ['#1A1713', '#332D26', '#544A3F', '#827364', '#F5F3EF'] },
    { name: 'Vintage Bowling Alley', colors: ['#2E1712', '#572B23', '#8E483B', '#D87765', '#FAEFF1'] },
    { name: 'Retro Horizon Glow', colors: ['#2B1321', '#522540', '#873F6B', '#D16BA7', '#F9EEF5'] },
    { name: 'Route 66 Sign', colors: ['#0A1D2D', '#153957', '#255D8C', '#4293D6', '#EAF3FB'] },
    { name: 'Bubblegum Diner Shake', colors: ['#2D0D1D', '#541937', '#8A2C5C', '#D85195', '#FCEEF5'] },
    { name: 'Retro Synth Waveform', colors: ['#180A2B', '#2E1452', '#4E2487', '#8242D9', '#F4EDFC'] },
    { name: 'Orange Jumpsuit 70s', colors: ['#2E1205', '#57220A', '#913D15', '#DE6628', '#FDF2EB'] },
    { name: '70s Macrame Knot', colors: ['#261F16', '#483A2A', '#745E44', '#AE906E', '#F6F2EC'] },
    { name: '80s Sunset Strip', colors: ['#2C0B1B', '#521634', '#852857', '#CF488D', '#FCECF4'] },
    { name: 'Retro Geometric Rug', colors: ['#2E220F', '#543F1D', '#876732', '#CEA157', '#F9F5EC'] },
    { name: 'Roller Girl Skates', colors: ['#2A0E23', '#4E1B42', '#7D2F6B', '#C255A9', '#F8EEF6'] },
    { name: 'Vinyl Record Groove', colors: ['#121214', '#232326', '#3C3C42', '#62626B', '#F1F1F3'] },
    { name: 'Retro Floral Pattern', colors: ['#2E150F', '#57281D', '#8E4433', '#DB715B', '#FAEEEB'] },
    { name: '70s Vinyl Armchair', colors: ['#2B1B0F', '#4F321C', '#7F5231', '#C28357', '#F8F1EB'] },
    { name: 'Wurlitzer Jukebox Glow', colors: ['#2B0C11', '#521822', '#862B3B', '#D24E65', '#FAEEF0'] },
    { name: 'Retro Striping Decal', colors: ['#2D1C08', '#543410', '#8A581F', '#D68F3B', '#FAF3EB'] },
    { name: 'Old School Van', colors: ['#0E232B', '#1C4352', '#306F85', '#55B0CE', '#EBF5F8'] },
    { name: 'Retro Horizon Strip', colors: ['#291223', '#4E2343', '#7F3D6F', '#C46AAC', '#F7EEF5'] },
    { name: 'Palm Springs Modernism', colors: ['#0E2623', '#1A4A44', '#2C7971', '#4CC2B6', '#E7FAF7'] },
    { name: 'Sunburst Yellow Clock', colors: ['#2C2307', '#52430E', '#856F1B', '#CDB037', '#FAF7EA'] },
    { name: 'Vintage Motel Sign', colors: ['#2C0D17', '#52192D', '#842D4B', '#CE4F7B', '#FAECF1'] },
    { name: 'Corduroy Brown 70s', colors: ['#281C13', '#4A3424', '#75553D', '#B08668', '#F5F0EB'] },
  ],

  Neon: [
    { name: 'Electric Prism Ray', colors: ['#051524', '#0A2D4E', '#124E82', '#228DD9', '#E0F2FC'] },
    { name: 'Cyber Street Neon', colors: ['#1B0626', '#350B4B', '#5A177C', '#9935CA', '#F6EBFC'] },
    { name: 'Prism Beam Glow', colors: ['#05241D', '#0B473A', '#167B66', '#2DD3B2', '#E2FAF5'] },
    { name: 'Glowstick Party Rave', colors: ['#1C2605', '#384C0B', '#608216', '#A1D930', '#F4FBE5'] },
    { name: 'Electric Indigo Pulse', colors: ['#0F0829', '#1E1052', '#361E8C', '#5F3CE5', '#EFEBFD'] },
    { name: 'Neon Orchid Flash', colors: ['#26051E', '#4B0A3B', '#7C1563', '#CE2EA9', '#FAECF7'] },
    { name: 'Synth Pop Beat', colors: ['#051F26', '#0B3E4C', '#166980', '#2CB2D6', '#E2F7FC'] },
    { name: 'Acid Green Spill', colors: ['#152605', '#2B4C0A', '#4C8215', '#86DE31', '#F1FCE4'] },
    { name: 'Neon Tangerine Spark', colors: ['#290F05', '#4F1E0A', '#843515', '#DB6030', '#FDEEE6'] },
    { name: 'Laser Grid Matrix', colors: ['#08260D', '#104B1B', '#1F7E31', '#37D45B', '#E5FAE9'] },
    { name: 'Ultra Violet Glow', colors: ['#170629', '#2E0C4F', '#501786', '#8C34DE', '#F2EBFB'] },
    { name: 'Cyber Sunset Neon', colors: ['#29081B', '#4F1135', '#82205A', '#D73E99', '#FAEDF5'] },
    { name: 'Neon Rain Shower', colors: ['#061A26', '#0C344C', '#185B82', '#2F9CD8', '#E3F3FB'] },
    { name: 'Quantum Glow Core', colors: ['#062624', '#0C4B47', '#177F79', '#30D4CB', '#E3FAF9'] },
    { name: 'Electric Mirage Ray', colors: ['#261905', '#4C330A', '#805715', '#D69830', '#FBF5E6'] },
    { name: 'Turbo Charge Bolt', colors: ['#050F29', '#0B2052', '#163B8E', '#2F6AE8', '#E6EEFD'] },
    { name: 'Hyper Violet Shock', colors: ['#200629', '#3F0C4F', '#6B1786', '#B733DE', '#F7EBFB'] },
    { name: 'Neon Signboard Glow', colors: ['#290610', '#4F0D21', '#85193B', '#DC336B', '#FAECF1'] },
    { name: 'Cyber Alley Flash', colors: ['#06291C', '#0C5239', '#178A61', '#30DEA1', '#E3FAF2'] },
    { name: 'Electro Pink Neon', colors: ['#290518', '#520B32', '#8A1758', '#E33399', '#FAEDF6'] },
    { name: 'Laser Blast Bolt', colors: ['#062909', '#0C5214', '#178A26', '#30DE4C', '#E3FAE7'] },
    { name: 'Toxic Glow Spill', colors: ['#1E2606', '#3A4C0B', '#658217', '#B0DE33', '#F5FBE6'] },
    { name: 'Neon Matrix Grid', colors: ['#052429', '#0A474F', '#157884', '#2EC5D8', '#E1F8FA'] },
    { name: 'Cyber Flare Flash', colors: ['#290906', '#4F150C', '#842718', '#DB4B33', '#FAECE9'] },
    { name: 'Neon Shock Wave', colors: ['#1D0629', '#390D4F', '#631886', '#A936DE', '#F5EBFA'] },
    { name: 'Electric Violet Beam', colors: ['#120829', '#241052', '#41208D', '#7543E8', '#EFEBFD'] },
    { name: 'Cyber Pulse Burst', colors: ['#051E29', '#0A3B4F', '#156584', '#2CAAD9', '#E0F4FB'] },
    { name: 'Acid Rain Droplet', colors: ['#212905', '#414F0A', '#708616', '#BCE031', '#F6FCE4'] },
  ],

  Dark: [
    { name: 'Deep Void Abyss', colors: ['#050508', '#0D0E14', '#181B26', '#272E40', '#DCE2ED'] },
    { name: 'Eclipse Shadow Moon', colors: ['#080608', '#141014', '#261F26', '#3E353E', '#EDE8ED'] },
    { name: 'Midnight Ink Spill', colors: ['#04070A', '#0B121A', '#15212E', '#22364A', '#DBE4ED'] },
    { name: 'Dark Basalt Monolith', colors: ['#070707', '#121214', '#212224', '#36373A', '#E8E9EA'] },
    { name: 'Shadow Realm Gate', colors: ['#07050A', '#130E1A', '#241B30', '#392C4D', '#E9E4ED'] },
    { name: 'Blackened Oak Plank', colors: ['#080605', '#14100E', '#261F1C', '#3E3430', '#EDE8E6'] },
    { name: 'Nocturnal Mirage Lake', colors: ['#050709', '#0D1318', '#18232C', '#273845', '#DCE4E9'] },
    { name: 'Midnight Storm Sky', colors: ['#06080B', '#0E131A', '#1A232E', '#2A3747', '#DCE2E9'] },
    { name: 'Dark Cosmos Shroud', colors: ['#07050B', '#120F1D', '#211C33', '#352E4F', '#E7E4ED'] },
    { name: 'Black Orchid Petal', colors: ['#090508', '#170E16', '#2A1B28', '#422E3F', '#EAE3E9'] },
    { name: 'Midnight Tide Surge', colors: ['#04080B', '#0A141C', '#152430', '#22384A', '#DBE4EA'] },
    { name: 'Shadow Stone Cairn', colors: ['#060707', '#111213', '#202224', '#343739', '#E7E8E9'] },
    { name: 'Abyssal Trench Depth', colors: ['#030508', '#080E14', '#111B26', '#1D2D3D', '#D7DFE7'] },
    { name: 'Charcoal Ember Ash', colors: ['#090505', '#170E0E', '#2A1C1C', '#422E2E', '#EAE3E3'] },
    { name: 'Dark Quartz Crystal', colors: ['#070608', '#131116', '#232026', '#38343D', '#E8E6EB'] },
    { name: 'Obsidian Glass Edge', colors: ['#060607', '#101113', '#1F2023', '#333538', '#E7E7E9'] },
    { name: 'Midnight Harbor Fog', colors: ['#05080A', '#0D1419', '#19242C', '#283844', '#DDE3E8'] },
    { name: 'Night Sky Void', colors: ['#040608', '#0B1015', '#151D26', '#232F3C', '#DBE1E7'] },
    { name: 'Dark Iron Ingot', colors: ['#060708', '#111315', '#202326', '#34383D', '#E7E8EA'] },
    { name: 'Blackened Steel Plate', colors: ['#050608', '#0F1217', '#1D222A', '#303742', '#E1E4E9'] },
    { name: 'Midnight Aurora Veil', colors: ['#050909', '#0D1616', '#182626', '#283B3B', '#DCE4E4'] },
    { name: 'Obsidian Core Heart', colors: ['#050505', '#0E0E0F', '#1B1C1D', '#2D2E30', '#E4E5E6'] },
    { name: 'Dark Slate Quarry', colors: ['#050708', '#0F1316', '#1D2429', '#303A41', '#E1E5E7'] },
    { name: 'Nightfall Forest Wild', colors: ['#040705', '#0C130E', '#16221A', '#25352A', '#DBE3DC'] },
    { name: 'Midnight Eclipse Sun', colors: ['#070506', '#140F11', '#241D20', '#3B3035', '#E9E4E6'] },
    { name: 'Dark Monolith Pillar', colors: ['#060606', '#111112', '#212123', '#353538', '#E7E7E8'] },
    { name: 'Shadow Velvet Fabric', colors: ['#080509', '#150E17', '#271B2B', '#3E2D43', '#EAE3EC'] },
    { name: 'Night Sovereign Crown', colors: ['#070605', '#13110E', '#23201C', '#39352F', '#E8E6E4'] },
  ],

  Elegant: [
    { name: 'Platinum Rose Petal', colors: ['#1C1418', '#382830', '#5E4452', '#916D80', '#F6EFF3'] },
    { name: 'Gilded Mirror Frame', colors: ['#1D170D', '#3B2F1B', '#635030', '#9E8254', '#F6F2EC'] },
    { name: 'Velvet Curtains Drape', colors: ['#1F1115', '#3E222A', '#683B48', '#A16072', '#F7EDF0'] },
    { name: 'Cashmere Cardigan Knit', colors: ['#1B1714', '#362F29', '#5B5047', '#8E7F73', '#F5F2EF'] },
    { name: 'Crystal Flute Glass', colors: ['#161A1D', '#2D343B', '#4C5863', '#778896', '#EFF3F6'] },
    { name: 'Evening Stroll Boulevard', colors: ['#19161B', '#322C36', '#544B5B', '#83778C', '#F3F0F6'] },
    { name: 'French Chateau Estate', colors: ['#1A1713', '#352F28', '#594F45', '#8C7E70', '#F5F2EE'] },
    { name: 'Royal Velvet Cape', colors: ['#1C1124', '#372247', '#5C3B75', '#8E5EB5', '#F4EEF8'] },
    { name: 'Vintage Satin Ribbon', colors: ['#1F151B', '#3E2B37', '#66495C', '#9C748E', '#F6EFF4'] },
    { name: 'Venetian Silk Thread', colors: ['#1E1613', '#3C2D27', '#634C43', '#9A7A6E', '#F6F1EE'] },
    { name: 'Golden Chandelier Glow', colors: ['#1E190E', '#3D331D', '#665733', '#A38D59', '#F7F4EC'] },
    { name: 'White Truffle Essence', colors: ['#1A1815', '#34302C', '#58524B', '#898177', '#F5F3F1'] },
    { name: 'Cream Silk Drape', colors: ['#1A1816', '#34312C', '#57524C', '#8A837A', '#F5F3F0'] },
    { name: 'Elegant Silhouette Pose', colors: ['#171618', '#2E2D31', '#4F4C54', '#7D7985', '#F2F1F5'] },
    { name: 'Royal Taupe Blend', colors: ['#1A1716', '#352F2C', '#584F4B', '#8A7D78', '#F5F2F1'] },
    { name: 'Champagne Fizz Bubble', colors: ['#1C1912', '#383225', '#5E5440', '#95886B', '#F6F4EE'] },
    { name: 'Silver Lining Cloud', colors: ['#17191A', '#2E3235', '#4E5358', '#7B8188', '#F2F4F5'] },
    { name: 'Platinum Damask Fabric', colors: ['#18191B', '#303236', '#52555B', '#81858D', '#F3F4F6'] },
    { name: 'Velvet Ribbon Choker', colors: ['#1D1219', '#392432', '#5F3D55', '#946386', '#F5EEF3'] },
    { name: 'Silk Kimono Floral', colors: ['#1E1317', '#3D2630', '#654152', '#9F6B84', '#F6EEF2'] },
    { name: 'Fine Cashmere Shawl', colors: ['#1A1715', '#352F2B', '#584F4A', '#8B7F78', '#F5F2F0'] },
    { name: 'Ivory Cameo Brooch', colors: ['#1B1916', '#36322C', '#5A534B', '#8C8479', '#F5F3F0'] },
    { name: 'Regency Parlor Room', colors: ['#181915', '#30332B', '#51554A', '#818778', '#F3F4F1'] },
    { name: 'Gilded Frame Border', colors: ['#1D170F', '#3B2F20', '#635138', '#9E835E', '#F6F2ED'] },
    { name: 'Damask Rose Petal', colors: ['#1E1318', '#3D2631', '#654254', '#9F6D87', '#F6EEF3'] },
    { name: 'Vintage Lace Gown', colors: ['#1A1817', '#34312F', '#57524F', '#8A8480', '#F5F3F2'] },
    { name: 'Satin Slipper Soft', colors: ['#1E151A', '#3C2B35', '#644A59', '#9C778D', '#F6EFF3'] },
    { name: 'Velvet Opera Box', colors: ['#1A1017', '#34202F', '#56384F', '#865A7D', '#F3EDF2'] },
  ],

  Warm: [
    { name: 'Caramel Macchiato Brew', colors: ['#2B170B', '#4D2B16', '#7D4928', '#BD7547', '#F8F1EB'] },
    { name: 'Golden Turmeric Root', colors: ['#2E1E05', '#52370B', '#855B14', '#CE922C', '#F9F5EC'] },
    { name: 'Toasted Walnut Shell', colors: ['#28180E', '#482D1C', '#744B32', '#B07856', '#F6F0EC'] },
    { name: 'Cinnamon Roll Glaze', colors: ['#2E170E', '#522C1C', '#844B33', '#C97A59', '#F8F0EC'] },
    { name: 'Spiced Chai Latte', colors: ['#29180E', '#4B2D1C', '#784C32', '#B67B57', '#F6F0EB'] },
    { name: 'Amber Resin Drop', colors: ['#2E1B08', '#543312', '#875422', '#D18742', '#F9F3EC'] },
    { name: 'Warm Gingerbread Cookie', colors: ['#2B170B', '#4E2C17', '#7C4B2B', '#BB784D', '#F7F1EC'] },
    { name: 'Honey Toffee Crunch', colors: ['#2E1C07', '#543511', '#885822', '#D39043', '#F9F3EC'] },
    { name: 'Roasted Corn Field', colors: ['#2C1F08', '#503A12', '#826022', '#C99A44', '#F8F4EC'] },
    { name: 'Apple Cider Mull', colors: ['#2E1609', '#542B14', '#874A27', '#CF7948', '#F8F1EB'] },
    { name: 'Butterscotch Glow Dip', colors: ['#2D1C06', '#523510', '#855920', '#CE9040', '#F9F4EB'] },
    { name: 'Cinnamon Spice Jar', colors: ['#2D160E', '#512A1D', '#824835', '#C7755C', '#F7EFEB'] },
    { name: 'Roasted Almond Nut', colors: ['#281A10', '#4A3221', '#765239', '#B18262', '#F6F1EC'] },
    { name: 'Warm Sandstone Cliff', colors: ['#2E1B10', '#543422', '#86563B', '#CE8C67', '#F8F1EC'] },
    { name: 'Maple Sugar Tree', colors: ['#2B1709', '#4E2B14', '#7D4A27', '#BC7849', '#F7F0EB'] },
    { name: 'Golden Ochre Dust', colors: ['#2C1E0A', '#4F3816', '#7F5C29', '#C3934D', '#F7F3EB'] },
    { name: 'Spiced Pumpkin Pie', colors: ['#2E1607', '#542C11', '#884C24', '#D37D45', '#F8F1EA'] },
    { name: 'Caramel Swirl Fudge', colors: ['#2A160A', '#4B2A15', '#7A4828', '#B77448', '#F6F0EB'] },
    { name: 'Toasted Brioche Bread', colors: ['#2C1B0B', '#503318', '#80552D', '#C48A54', '#F7F2EC'] },
    { name: 'Warm Molasses Drip', colors: ['#26150B', '#452817', '#6F432B', '#A86C4B', '#F4EFEB'] },
    { name: 'Honeycomb Wax Sheet', colors: ['#2D2006', '#523C0F', '#856320', '#CFA140', '#F9F5EC'] },
    { name: 'Amber Glass Bottle', colors: ['#2A1707', '#4D2D11', '#7C4C23', '#BF7E44', '#F7F1EB'] },
    { name: 'Cinnamon Stick Bark', colors: ['#29150B', '#4B2917', '#79462B', '#B8724E', '#F6F0EC'] },
    { name: 'Roasted Barley Grain', colors: ['#271910', '#473021', '#73503B', '#AC7F64', '#F5F0EB'] },
    { name: 'Warm Paprika Powder', colors: ['#2E120A', '#542416', '#873F2B', '#D06A51', '#F8EEEB'] },
    { name: 'Golden Haystack Bale', colors: ['#2C210C', '#4F3E1B', '#7E6532', '#C2A05B', '#F7F4EC'] },
    { name: 'Maple Glaze Syrup', colors: ['#2B1609', '#4E2A14', '#7E4928', '#BE7649', '#F7F0EB'] },
    { name: 'Spiced Cardamom Pod', colors: ['#291C10', '#4B3521', '#78573B', '#B48A66', '#F6F1EC'] },
  ],

  Cool: [
    { name: 'Frozen Waterfall Drop', colors: ['#0A1D2B', '#163852', '#265980', '#438EC7', '#E7F2FA'] },
    { name: 'Ice Ridge Glissade', colors: ['#0F212E', '#1F3E54', '#346385', '#579BC7', '#EBF4F9'] },
    { name: 'Polar Bear Tundra', colors: ['#172028', '#2B3B49', '#445B6E', '#6B8CA8', '#EDF3F7'] },
    { name: 'Arctic Fox Snow', colors: ['#161E26', '#2A3745', '#43566B', '#6A85A3', '#ECF1F6'] },
    { name: 'Silver Mist Glade', colors: ['#181E24', '#2C3742', '#455565', '#6D849B', '#EDF2F6'] },
    { name: 'Cool Breeze Morning', colors: ['#11212E', '#213E54', '#376485', '#5D9DC7', '#E9F3F9'] },
    { name: 'Winter Solstice Eve', colors: ['#0C1629', '#192B4F', '#2C4980', '#4B77C7', '#E8EEFA'] },
    { name: 'Frosted Berry Shrub', colors: ['#1B1829', '#322E4D', '#504B7A', '#7C76BA', '#F0F0FA'] },
    { name: 'Ice Floe Drift', colors: ['#132430', '#244154', '#3B6582', '#629DC4', '#EAF3F8'] },
    { name: 'Glacier Blue Stream', colors: ['#0C2533', '#19455C', '#2C6D90', '#4CA9DD', '#E5F4FC'] },
    { name: 'Crisp Air Valley', colors: ['#15232E', '#273F52', '#3F6482', '#679DC7', '#EBF3F8'] },
    { name: 'Snowy Peaks Ridge', colors: ['#181E26', '#2D3745', '#46566B', '#6F84A3', '#EDF2F6'] },
    { name: 'Polar Shimmer Sky', colors: ['#0E1F2E', '#1B3C57', '#2E608A', '#4D96D4', '#E8F2FA'] },
    { name: 'Frozen Stream Bank', colors: ['#11222E', '#203E54', '#366385', '#5B9BC7', '#E9F3F9'] },
    { name: 'Silver Fir Forest', colors: ['#142426', '#264245', '#3D666B', '#659FA6', '#EAF4F5'] },
    { name: 'Ice Cap Summit', colors: ['#102230', '#203F57', '#36658A', '#5B9ECF', '#E8F3FA'] },
    { name: 'Winter Sky Clouds', colors: ['#141C29', '#26344C', '#3E5478', '#6484B8', '#ECF1F9'] },
    { name: 'Glacier Stream Melt', colors: ['#0C2433', '#18445B', '#2A6C8E', '#4BA5D8', '#E6F4FB'] },
    { name: 'Frosted Meadow Grass', colors: ['#162426', '#284145', '#40656B', '#689DA5', '#EAF3F4'] },
    { name: 'Arctic Sea Current', colors: ['#0A1D2B', '#163852', '#285980', '#468DC4', '#E8F2F9'] },
    { name: 'Ice Needle Frost', colors: ['#112330', '#214057', '#38668A', '#5EA1D4', '#E9F3FA'] },
    { name: 'Frozen Lake Shallows', colors: ['#0E212E', '#1E3E54', '#336385', '#559BC7', '#EBF4F9'] },
    { name: 'Silver Ice Flake', colors: ['#161D26', '#293645', '#42546B', '#6883A3', '#ECF1F6'] },
    { name: 'Winter Gale Blow', colors: ['#0E1829', '#1C2E4C', '#314D7C', '#537EC2', '#E8EFF9'] },
    { name: 'Cool Slate Floor', colors: ['#172026', '#2B3944', '#445969', '#6B879E', '#EDF2F5'] },
    { name: 'Polar Wind Chill', colors: ['#101F2B', '#203A4F', '#375E7E', '#5D92BF', '#E9F2F8'] },
    { name: 'Iceberg Tip Berg', colors: ['#0D2330', '#1A4259', '#2E698C', '#4FA3D6', '#E7F3FB'] },
    { name: 'Winter Dawn Calm', colors: ['#151B29', '#28324A', '#415175', '#6A81B3', '#EDF1F8'] },
  ],

  Monochrome: [
    { name: 'Pewter Tones Metal', colors: ['#161718', '#2C2E30', '#474A4D', '#6D7175', '#F1F2F3'] },
    { name: 'Cast Iron Kettle', colors: ['#0F0F10', '#1F2021', '#343538', '#54565B', '#ECECEE'] },
    { name: 'Slate Shading Layer', colors: ['#141618', '#282C30', '#41474D', '#656D75', '#EFF1F3'] },
    { name: 'Zinc Gradient Strip', colors: ['#17191A', '#2D3033', '#494E52', '#70777D', '#F2F4F5'] },
    { name: 'Concrete Spectrum Form', colors: ['#191A1A', '#303233', '#4E5052', '#75787A', '#F3F4F4'] },
    { name: 'Gray Scale Pro Grade', colors: ['#111111', '#282828', '#484848', '#737373', '#F7F7F7'] },
    { name: 'Architectural Shading Wash', colors: ['#131415', '#27292B', '#424547', '#696D70', '#F0F1F2'] },
    { name: 'Steel Values Ingot', colors: ['#141719', '#272B2E', '#41474C', '#666F75', '#EFF2F4'] },
    { name: 'Carbon Steps Matrix', colors: ['#0A0A0B', '#171719', '#2B2B2E', '#49494D', '#E9E9EB'] },
    { name: 'Pure Monochrome Balance', colors: ['#000000', '#1F1F1F', '#4A4A4A', '#808080', '#FFFFFF'] },
    { name: 'Titanium Tones Alloy', colors: ['#161719', '#2A2C30', '#45484F', '#6C707A', '#F1F2F4'] },
    { name: 'Fog Gradient Mist', colors: ['#191B1C', '#313436', '#4F5356', '#777C80', '#F3F5F6'] },
    { name: 'Shadow Value Scale', colors: ['#0E0E0F', '#1F1F21', '#353538', '#57575C', '#ECECEE'] },
    { name: 'Neutral Gray Step Tint', colors: ['#171717', '#2E2E2E', '#4E4E4E', '#787878', '#F3F3F3'] },
    { name: 'Platinum Spectrum Shine', colors: ['#191A1B', '#303133', '#4D4F52', '#76797D', '#F3F4F5'] },
    { name: 'Industrial Gradient Steel', colors: ['#131517', '#25292D', '#3F454B', '#636C75', '#EFF1F3'] },
    { name: 'Ash Gradient Chalk', colors: ['#181919', '#2F3030', '#4B4D4D', '#727575', '#F2F3F3'] },
    { name: 'Basalt Scale Wall', colors: ['#121314', '#232526', '#3C3E40', '#606366', '#F0F1F2'] },
    { name: 'Graphite Scale Core', colors: ['#101112', '#212324', '#393B3D', '#5C5F61', '#EFEFEF'] },
    { name: 'Charcoal Spectrum Dark', colors: ['#0D0D0E', '#1D1D20', '#343438', '#57575D', '#ECECEE'] },
    { name: 'Slate Steps Tread', colors: ['#14171A', '#262B30', '#3F474F', '#626E7A', '#EFF2F5'] },
    { name: 'Zinc Spectrum Bar', colors: ['#151718', '#292C2E', '#44484A', '#696E71', '#F0F2F3'] },
    { name: 'Cool Neutral Step Line', colors: ['#141718', '#272B2E', '#41474A', '#666E73', '#EFF1F3'] },
    { name: 'Warm Gray Scale Wash', colors: ['#181716', '#2F2D2B', '#4D4A47', '#77736F', '#F3F2F1'] },
    { name: 'Silver Steps Polish', colors: ['#18191A', '#2F3133', '#4C4F52', '#74787D', '#F2F4F5'] },
    { name: 'Quartz Monochrome Grain', colors: ['#1A1A1B', '#313133', '#4E4E52', '#77777D', '#F3F3F5'] },
    { name: 'Iron Shading Ingot', colors: ['#111213', '#222325', '#3A3C3F', '#5D6064', '#EFEFF1'] },
    { name: 'Flint Steps Stone', colors: ['#151617', '#2A2B2D', '#454649', '#6C6E72', '#F1F1F3'] },
  ],

  Vintage: [
    { name: 'Antique Silk Fabric', colors: ['#2E271F', '#544738', '#857159', '#C2A785', '#F7F3EC'] },
    { name: 'Faded Photograph Print', colors: ['#28211A', '#493D30', '#76634E', '#B09577', '#F5EFEB'] },
    { name: 'Vintage Lace Trim', colors: ['#2B241C', '#4F4234', '#7E6B54', '#B99E7D', '#F6F1EC'] },
    { name: 'Antique Ceramic Glaze', colors: ['#1B2728', '#324749', '#537174', '#86B0B4', '#EFF6F7'] },
    { name: 'Retro Postcard Stamp', colors: ['#2E1E17', '#54372A', '#875843', '#C6876A', '#F7EFEA'] },
    { name: 'Heritage Tweed Cloth', colors: ['#24261C', '#424633', '#6A7052', '#9EA67D', '#F3F5EC'] },
    { name: 'Sepia Wash Drawing', colors: ['#2A2118', '#4C3C2C', '#7A6147', '#B3916D', '#F5EFE9'] },
    { name: 'Old Newspaper Print', colors: ['#26221A', '#473F30', '#73674F', '#A89876', '#F4F0E8'] },
    { name: 'Vintage Velvet Plush', colors: ['#2C141D', '#512536', '#823C57', '#C46286', '#F8EEF2'] },
    { name: 'Antique Copper Penny', colors: ['#2E180E', '#542C1A', '#87472B', '#CF7348', '#F8EFEB'] },
    { name: 'Faded Ribbon Bow', colors: ['#2B1B22', '#4F323F', '#7E5065', '#BA7D98', '#F6EFF2'] },
    { name: 'Vintage Bookcloth Spine', colors: ['#172622', '#2A463F', '#467065', '#72AD9D', '#ECF5F3'] },
    { name: 'Old Film Stock Roll', colors: ['#26201A', '#453A2F', '#705E4D', '#A48C74', '#F4EFEB'] },
    { name: 'Antique Brocade Pattern', colors: ['#2E2214', '#543F25', '#87653C', '#CA9B60', '#F8F3EC'] },
    { name: 'Vintage Enamel Kettle', colors: ['#17272E', '#2B4654', '#466F85', '#73A9C7', '#EBF4F9'] },
    { name: 'Heritage Leather Trunk', colors: ['#2B1C12', '#4E3321', '#7E5236', '#BA7F57', '#F6EFEB'] },
    { name: 'Sepia Silhouette Portrait', colors: ['#241C15', '#423326', '#6A533E', '#9E7E60', '#F3EDE7'] },
    { name: 'Faded Tapestry Weave', colors: ['#28201E', '#493B37', '#765F59', '#AE8E86', '#F5EFEB'] },
    { name: 'Antique Needlepoint Stitch', colors: ['#27221A', '#473E30', '#72644E', '#A79476', '#F4F0EA'] },
    { name: 'Vintage Trunk Latch', colors: ['#281E15', '#493726', '#76593E', '#B08861', '#F5EFE9'] },
    { name: 'Old Gramophone Horn', colors: ['#2E2111', '#543C1F', '#876133', '#CA9553', '#F8F3EB'] },
    { name: 'Antique Pewter Mug', colors: ['#202224', '#3B3E42', '#60646B', '#92979F', '#EFF1F3'] },
    { name: 'Faded Muslin Drapery', colors: ['#28231C', '#494034', '#766855', '#AE9C82', '#F5F1EB'] },
    { name: 'Vintage Cameo Profile', colors: ['#281C1D', '#4A3436', '#775457', '#AF8185', '#F5EDEE'] },
    { name: 'Heritage Wool Blanket', colors: ['#242018', '#423B2D', '#6B5F49', '#9E8E70', '#F3EFE7'] },
    { name: 'Aged Parchment Scroll', colors: ['#2A241A', '#4D4230', '#7C6B4E', '#B7A076', '#F5F1E8'] },
    { name: 'Old Clockwork Brass', colors: ['#2C2010', '#503A1E', '#805E32', '#C29152', '#F7F2EA'] },
    { name: 'Vintage Wallpaper Damask', colors: ['#26211C', '#453D34', '#706354', '#A49380', '#F4EFEB'] },
  ],

  Candy: [
    { name: 'Gumball Machine Pop', colors: ['#2E0A1E', '#571339', '#8F205E', '#DF3797', '#FCEDF6'] },
    { name: 'Sour Cherry Fizz', colors: ['#2E060E', '#570B1B', '#91132E', '#E6254E', '#FCEEF1'] },
    { name: 'Caramel Apple Pop', colors: ['#2E1805', '#572E0A', '#914F13', '#E08024', '#FDF5EC'] },
    { name: 'Sweet Candy Corn', colors: ['#2E1F05', '#573B0A', '#916313', '#E09E24', '#FDF8EC'] },
    { name: 'Frosted Donut Glaze', colors: ['#2B0C22', '#521741', '#85266B', '#D243AB', '#FCEEF8'] },
    { name: 'Cherry Cola Chew', colors: ['#2E0812', '#570E22', '#8F1739', '#E32A60', '#FCEEF3'] },
    { name: 'Key Lime Pop Ice', colors: ['#162B0A', '#2A5214', '#458721', '#6FD637', '#EDFAE8'] },
    { name: 'Bubblegum Machine Twist', colors: ['#2B0A1C', '#521336', '#87205A', '#D73893', '#FCEEF6'] },
    { name: 'Taffy Pull Ribbon', colors: ['#2E0D1B', '#571933', '#8F2A55', '#E0478A', '#FCEFF5'] },
    { name: 'Sugar Plum Candy', colors: ['#210A2E', '#3E1357', '#66208F', '#A538E6', '#F4EEFC'] },
    { name: 'Sweet Marzipan Fruit', colors: ['#2C1F10', '#523A1F', '#855E33', '#D09756', '#FAF4EC'] },
    { name: 'Berry Skittles Mix', colors: ['#240A2E', '#441357', '#70208F', '#B338E6', '#F5EEFC'] },
    { name: 'Rock Candy Crystal', colors: ['#0A262E', '#134757', '#20758F', '#38BAE3', '#EDFAFC'] },
    { name: 'Sweet Licorice Twist', colors: ['#121013', '#231F25', '#3C353F', '#615666', '#F1EFF2'] },
    { name: 'Candy Shop Window', colors: ['#2E0D17', '#57192D', '#8F2A4B', '#DF477B', '#FCEFF3'] },
    { name: 'Strawberry Sundae Swirl', colors: ['#2E0914', '#571127', '#8F1D42', '#E3366D', '#FCEEF3'] },
    { name: 'Blue Slushie Freeze', colors: ['#051E2E', '#0A3957', '#125E8F', '#229DE3', '#E0F3FC'] },
    { name: 'Peach Gummy Ring', colors: ['#2E1508', '#57270F', '#8F411A', '#E06B30', '#FDF2EB'] },
    { name: 'Rainbow Sorbet Float', colors: ['#2E081F', '#57103B', '#8F1B62', '#E333A0', '#FCEEF7'] },
    { name: 'Mint Candy Drop', colors: ['#0A2E20', '#13573C', '#208F63', '#38E09F', '#EDFCF5'] },
    { name: 'Lemon Gumdrop Chew', colors: ['#2E2705', '#57490A', '#917B13', '#E0C024', '#FDFCEC'] },
    { name: 'Sweet Bonbon Chocolate', colors: ['#291219', '#4E2230', '#7E3850', '#C25D80', '#F7EDF1'] },
    { name: 'Marshmallow Puff Fluff', colors: ['#2E1624', '#572A45', '#8F4673', '#DE72B5', '#FCF2F8'] },
    { name: 'Glazed Cherry Pop', colors: ['#2E0608', '#570B10', '#8F131C', '#E32532', '#FCEEEE'] },
    { name: 'Cotton Candy Carnival Fair', colors: ['#1C0E2E', '#351A57', '#572B8F', '#8F4BE3', '#F2EDFC'] },
    { name: 'Jelly Roll Swirl', colors: ['#2E0E22', '#571B41', '#8F2D6C', '#E04EAE', '#FCEEF8'] },
    { name: 'Sweet Gum Drop', colors: ['#2E110A', '#572013', '#8F3520', '#DE5939', '#FCEFEB'] },
    { name: 'Rainbow Lollipop Stick', colors: ['#2B072E', '#520D57', '#87168F', '#D829E6', '#FCEEFD'] },
  ],

  Forest: [
    { name: 'Olympic Rainforest Moss', colors: ['#0F2414', '#1C4225', '#2E693D', '#4CA362', '#E7F6EB'] },
    { name: 'Old Growth Oak Stand', colors: ['#1F2113', '#393D24', '#59603A', '#8A945C', '#F2F5EB'] },
    { name: 'Sylvan Pond Reflection', colors: ['#0E1F1A', '#1B3830', '#2E594E', '#4B8C7C', '#EAF3F1'] },
    { name: 'Evergreen Valley Fog', colors: ['#112117', '#203E2C', '#346347', '#569C72', '#EBF4EE'] },
    { name: 'Mossy Stump Decay', colors: ['#1A2413', '#2F4223', '#4A6638', '#739B59', '#EDF4E8'] },
    { name: 'Forest Clearing Sun', colors: ['#1F2610', '#38451D', '#586C30', '#88A64D', '#F2F6E8'] },
    { name: 'Deep Woodland Hollow', colors: ['#121C14', '#223325', '#38523D', '#5B7F61', '#ECF2EE'] },
    { name: 'Autumn Fungi Cap', colors: ['#241C12', '#423321', '#695136', '#9E7D58', '#F4EFEB'] },
    { name: 'Hemlock Grove Shade', colors: ['#0E2116', '#1A3E29', '#2B6343', '#469C6C', '#E6F4ED'] },
    { name: 'Woodland Lichen Crust', colors: ['#1C2117', '#343E2C', '#536348', '#809671', '#EFF2EC'] },
    { name: 'Pine Cone Tumble', colors: ['#241A13', '#423024', '#694F3C', '#9E7A60', '#F4EFEB'] },
    { name: 'Forest Stream Eddy', colors: ['#12211E', '#213D37', '#366159', '#58998D', '#EBF4F2'] },
    { name: 'Sylvan Shadow Deep', colors: ['#0E1711', '#1B2C21', '#2C4736', '#497057', '#EAF0EC'] },
    { name: 'Ancient Yew Tree', colors: ['#1C2114', '#343D26', '#546140', '#839666', '#F0F3EB'] },
    { name: 'Cedar Ridge Trail', colors: ['#211B14', '#3E3225', '#63513D', '#997E62', '#F4EFEB'] },
    { name: 'Deep Foliage Dense', colors: ['#0E2413', '#1A4224', '#2B693B', '#48A35E', '#E6F6EA'] },
    { name: 'Woodland Mist Veil', colors: ['#14211A', '#263D31', '#3D614F', '#629980', '#EBF3EF'] },
    { name: 'Mossy Boulder Stone', colors: ['#1A241B', '#2E3E30', '#4A624E', '#729577', '#EDF3EE'] },
    { name: 'Forest Undergrowth Brush', colors: ['#172412', '#2B4222', '#456938', '#6DA35B', '#EBF4E7'] },
    { name: 'Douglas Fir Giant', colors: ['#112115', '#1F3E28', '#336342', '#539C6B', '#EAF4EC'] },
    { name: 'Forest Canopy High', colors: ['#132415', '#244227', '#3A6940', '#5CA367', '#E8F5EB'] },
    { name: 'Sylvan River Bend', colors: ['#10211D', '#1E3D36', '#326157', '#52998B', '#EAF4F2'] },
    { name: 'Autumn Leaves Floor', colors: ['#261910', '#472E1F', '#704B34', '#A87555', '#F5EFEB'] },
    { name: 'Deep Moss Bed', colors: ['#132413', '#234223', '#396939', '#5BA35B', '#E8F5E8'] },
    { name: 'Woodland Shrub Wild', colors: ['#192415', '#2E4227', '#49693F', '#72A365', '#ECF4EA'] },
    { name: 'Forest Ferns Frond', colors: ['#102414', '#1F4225', '#33693D', '#54A363', '#E9F6EC'] },
    { name: 'Sylvan Ridge Lookout', colors: ['#162419', '#273E2E', '#3F6149', '#669976', '#ECF3EE'] },
    { name: 'Ancient Pine Needle', colors: ['#142416', '#25422A', '#3C6944', '#60A36E', '#EAF5EC'] },
  ],

  Luxury: [
    { name: 'Golden Scepter Regalia', colors: ['#241B08', '#423211', '#6E531F', '#B38B39', '#F7F3E8'] },
    { name: 'Marble Mansion Hall', colors: ['#17191C', '#2C2E33', '#494C54', '#747985', '#F2F3F5'] },
    { name: 'Sapphire Brooch Gem', colors: ['#0A1224', '#152242', '#253B6E', '#4060AD', '#E8EDF7'] },
    { name: 'St. Tropez Yacht Club', colors: ['#0D1624', '#1A2A45', '#2D446E', '#4B6EB0', '#EBF0F8'] },
    { name: 'Imperial Velvet Robe', colors: ['#240D1A', '#421931', '#6E2D53', '#AF4D87', '#F6ECF2'] },
    { name: 'Royal Crest Gold', colors: ['#241D0D', '#42351A', '#6E5930', '#B09054', '#F7F3EB'] },
    { name: 'Onyx & Brass Hardware', colors: ['#171614', '#2E2B26', '#4F4A42', '#80776C', '#F2F0ED'] },
    { name: 'Crystal Palace Chandelier', colors: ['#16191C', '#2B2F36', '#474D57', '#727B8A', '#EFF2F5'] },
    { name: 'Gold Leaf Gilding', colors: ['#261D09', '#473612', '#755B23', '#BD9642', '#F8F4EA'] },
    { name: 'Sovereign Throne Velvet', colors: ['#240B13', '#451726', '#702941', '#B0476B', '#F7ECF0'] },
    { name: 'High Society Gala', colors: ['#19151A', '#302833', '#514557', '#81708A', '#F3EFF5'] },
    { name: 'Luxury Suite Penthouse', colors: ['#1C1914', '#363028', '#595045', '#8C8071', '#F5F2EE'] },
    { name: 'Vintage Champagne Brut', colors: ['#211D12', '#3D3624', '#665B40', '#9E8F69', '#F6F4EB'] },
    { name: 'Diamond Tiara Spark', colors: ['#18191B', '#2D3035', '#494E56', '#727B87', '#F2F4F7'] },
    { name: 'Royal Scepter Crown', colors: ['#241A0B', '#453218', '#73552D', '#B5894F', '#F7F2EB'] },
    { name: 'Velvet Drape Theatre', colors: ['#210F17', '#3D1D2C', '#66334B', '#9E5577', '#F5EDF1'] },
    { name: 'Penthouse Lounge Bar', colors: ['#19191C', '#303036', '#4F4F57', '#7D7D8A', '#F3F3F6'] },
    { name: 'Silk Brocade Tapestry', colors: ['#21161B', '#3E2A34', '#664757', '#9E7289', '#F6EFF3'] },
    { name: 'Polished Brass Trim', colors: ['#241D0D', '#45371B', '#705B30', '#B09355', '#F7F3EB'] },
    { name: 'Gilded Mirror Antique', colors: ['#211B0F', '#3D3320', '#665638', '#9E885E', '#F6F3EC'] },
    { name: 'Emerald Pendant Jewel', colors: ['#0B1F17', '#173B2E', '#28614D', '#429C7E', '#EAF5F1'] },
    { name: 'Golden Chalice Cup', colors: ['#261B07', '#473310', '#755520', '#BD8D3C', '#F8F3E7'] },
    { name: 'Ruby Signet Ring', colors: ['#260A10', '#471421', '#752539', '#BA415E', '#F7EBEE'] },
    { name: 'Yacht Club Harbor', colors: ['#0D1924', '#1A3045', '#2E4F6E', '#4F7EB0', '#EBF2F8'] },
    { name: 'Sovereign Gold Coin', colors: ['#261E0A', '#473815', '#755E28', '#BD9A4A', '#F8F4EA'] },
    { name: 'Royal Robe Ermine', colors: ['#1C101F', '#351F3D', '#573563', '#8B589E', '#F3EEF6'] },
    { name: 'Venetian Chandelier Light', colors: ['#211A13', '#3E3226', '#665443', '#9E856F', '#F6F2EE'] },
    { name: 'Silk Cravat Tie', colors: ['#1C151A', '#352933', '#574554', '#8A7186', '#F3EFF3'] },
  ],

  Cyber: [
    { name: 'Cybernetic Spine Core', colors: ['#060B12', '#0E1E2E', '#193954', '#2C6491', '#E1EBF5'] },
    { name: 'Binary Stream Code', colors: ['#040F08', '#0A2416', '#14452C', '#247A50', '#E1F6ED'] },
    { name: 'Quantum Tunnel Effect', colors: ['#090614', '#17102E', '#2B1F54', '#4B388F', '#ECE8FA'] },
    { name: 'Cyber Streetware Tech', colors: ['#0A0612', '#1C0E2E', '#361E54', '#5F398F', '#F0EAF9'] },
    { name: 'Dark Net Protocol', colors: ['#08080C', '#12121A', '#20202E', '#36364A', '#E3E3EC'] },
    { name: 'Neon Circuit Board', colors: ['#041210', '#092B26', '#124E45', '#228577', '#E0F6F3'] },
    { name: 'Mainframe Terminal Screen', colors: ['#040D05', '#09210F', '#13401F', '#247038', '#E1F5E6'] },
    { name: 'Cybernetic Arm Servo', colors: ['#070A0F', '#111824', '#202C3D', '#374963', '#DFE6F0'] },
    { name: 'Vector Field Plot', colors: ['#050B12', '#0B1E2E', '#163854', '#275E8C', '#E0EDF7'] },
    { name: 'Hacker Space Underground', colors: ['#0C060E', '#211026', '#3D2045', '#6A3C78', '#F3EAF6'] },
    { name: 'Neural Link Synapse', colors: ['#090614', '#181033', '#2E205E', '#4F399E', '#ECE7FB'] },
    { name: 'AI Processor Chip', colors: ['#060E12', '#0F222B', '#1B3D4C', '#2F6780', '#E1EFF5'] },
    { name: 'Cyber Grid Overlay', colors: ['#051214', '#0B292E', '#164852', '#287B8A', '#E0F4F7'] },
    { name: 'Firewall Protection Shield', colors: ['#120508', '#2B0D15', '#4E1929', '#853049', '#F6E4EB'] },
    { name: 'Quantum Key Crypto', colors: ['#090514', '#180E33', '#2D1D5E', '#4F359E', '#ECE7FB'] },
    { name: 'Optical Sensor Lens', colors: ['#04120D', '#092B1F', '#134D39', '#248261', '#E1F6F0'] },
    { name: 'Silicon Chip Wafer', colors: ['#0A0B0E', '#16191F', '#272B33', '#404552', '#E4E7ED'] },
    { name: 'Cyber Dystopia Alley', colors: ['#0E050C', '#240E1F', '#401C38', '#6E3462', '#F3E7F1'] },
    { name: 'Digital Avatar Identity', colors: ['#050C14', '#0E1F30', '#1C3854', '#32608C', '#E2ECF7'] },
    { name: 'Cybernetic Drone Cam', colors: ['#07080B', '#12151C', '#222630', '#383E4C', '#E1E4EC'] },
    { name: 'Subnet Mask Gateway', colors: ['#050F14', '#0C242E', '#183F52', '#2B6A87', '#E0F0F7'] },
    { name: 'Root Directory Path', colors: ['#050D06', '#0E2111', '#1C3D22', '#32693D', '#E3F3E7'] },
    { name: 'Terminal Window Shell', colors: ['#08090C', '#13151C', '#222630', '#393F4F', '#E2E5EC'] },
    { name: 'Cyber Shield Defense', colors: ['#050A14', '#0C1B30', '#183354', '#2C5587', '#E0EAF6'] },
    { name: 'Quantum Computer Register', colors: ['#080512', '#160E2E', '#2B1D54', '#4C358F', '#ECE8F9'] },
    { name: 'AI Algorithm Loop', colors: ['#050E12', '#0E232B', '#1B3D4A', '#306478', '#E1EFF4'] },
    { name: 'Virtual Space Domain', colors: ['#080614', '#15102E', '#282052', '#443887', '#ECE9F7'] },
    { name: 'Data Core Cluster', colors: ['#050D14', '#0D2130', '#193B52', '#2C5E82', '#E1ECF4'] },
  ],

  Editorial: [
    { name: 'Harper’s Spread Layout', colors: ['#1C1613', '#40332C', '#6E584D', '#A8897A', '#F6EFEB'] },
    { name: 'Letterpress Black Ink', colors: ['#141414', '#2B2B2B', '#4D4D4D', '#7B7B7B', '#F5F5F5'] },
    { name: 'Monotype Serif Type', colors: ['#1C1917', '#38322E', '#5E544F', '#8F827B', '#F4F1EF'] },
    { name: 'Offset CMYK Print', colors: ['#171B1E', '#30373B', '#515C63', '#7D8C96', '#EFF3F5'] },
    { name: 'Broadside Poster Red', colors: ['#241113', '#472225', '#753A3E', '#B35D64', '#F6ECEE'] },
    { name: 'Screenprint Red Accent', colors: ['#241210', '#472522', '#75403C', '#B56761', '#F6EDEC'] },
    { name: 'Modern Typography Swiss', colors: ['#121314', '#252729', '#414447', '#686C70', '#F0F1F2'] },
    { name: 'Minimalist Folio Sheet', colors: ['#1A1816', '#35312C', '#59524B', '#8A8177', '#F5F2F0'] },
    { name: 'Arts & Architecture Issue', colors: ['#171A1C', '#2F3438', '#50565C', '#7B838C', '#EFF2F5'] },
    { name: 'Blueprint Modern Plan', colors: ['#0F1B24', '#203445', '#38576E', '#5D85A6', '#ECF2F7'] },
    { name: 'Risograph Coral Ink', colors: ['#241214', '#47262A', '#754348', '#B36D74', '#F6ECEE'] },
    { name: 'Grid System Column', colors: ['#141617', '#292C2E', '#464A4D', '#6E7378', '#F1F2F3'] },
    { name: 'Heavy Blackletter Font', colors: ['#121212', '#242424', '#404040', '#696969', '#F7F7F7'] },
    { name: 'Art Deco Gazette Headline', colors: ['#211A11', '#3D3121', '#665339', '#9E835E', '#F6F2EC'] },
    { name: 'Editorial Column Width', colors: ['#171717', '#2E2E2E', '#4E4E4E', '#787878', '#F3F3F3'] },
    { name: 'Fashion Masthead Title', colors: ['#1C1417', '#38282E', '#5E464F', '#91707C', '#F6EFF2'] },
    { name: 'Constructivist Red Poster', colors: ['#240D0F', '#471B1F', '#753138', '#B5525B', '#F6ECEE'] },
    { name: 'Magazine Spread Feature', colors: ['#1A1715', '#352F2B', '#584F4A', '#8B7F77', '#F5F2F0'] },
    { name: 'Monocle Green Issue', colors: ['#131C16', '#25352A', '#3F5646', '#668770', '#ECF2ED'] },
    { name: 'Printmaker Ink Roller', colors: ['#141416', '#27272B', '#42424A', '#696973', '#F0F0F3'] },
    { name: 'Serif Headline Lead', colors: ['#171616', '#2E2D2D', '#4E4C4C', '#7A7878', '#F3F2F2'] },
    { name: 'Clean Layout Margin', colors: ['#141517', '#292B2E', '#46494D', '#6E7278', '#F1F2F4'] },
    { name: 'Swiss Typo Grid', colors: ['#121314', '#262729', '#424447', '#6A6D70', '#F1F2F3'] },
    { name: 'Bauhaus Yellow Primary', colors: ['#241D08', '#453813', '#6E5C25', '#A89045', '#F7F4E9'] },
    { name: 'Vogue Paris Cover', colors: ['#1A1418', '#352932', '#584753', '#897282', '#F4EFF3'] },
    { name: 'New Yorker Blue Cover', colors: ['#101A24', '#213345', '#3A546E', '#6083A6', '#ECF2F7'] },
    { name: 'Letterpress Black Proof', colors: ['#141414', '#282828', '#444444', '#6D6D6D', '#F6F6F6'] },
    { name: 'Modernist Poster Art', colors: ['#161617', '#2D2D2E', '#4B4B4F', '#75757A', '#F2F2F4'] },
  ],

  'Soft Neutral': [
    { name: 'Muted Canvas Texture', colors: ['#1F1D19', '#3B3731', '#5F5A51', '#8F887D', '#F4F2EF'] },
    { name: 'Sand Dollar Beach', colors: ['#211E1A', '#3D3832', '#635C53', '#968E83', '#F5F3F0'] },
    { name: 'Chalk & Stone Wall', colors: ['#1E1C1A', '#383531', '#5B5651', '#8C857E', '#F4F2F0'] },
    { name: 'Pale Travertine Floor', colors: ['#211E18', '#3D382E', '#635B4C', '#968C79', '#F5F3EC'] },
    { name: 'Raw Silk Drapery', colors: ['#1F1C18', '#3B3630', '#605950', '#91887D', '#F4F2EE'] },
    { name: 'Bleached Wood Grain', colors: ['#1F1E1B', '#3B3934', '#5F5C55', '#918D85', '#F4F3F0'] },
    { name: 'Warm Wool Knit', colors: ['#1F1C18', '#3B362F', '#5F574E', '#91877C', '#F4F1EE'] },
    { name: 'Soft Plaster Wall', colors: ['#1D1B19', '#383431', '#5C5651', '#8C847E', '#F4F2F0'] },
    { name: 'Vanilla Bean Husk', colors: ['#211D17', '#3D372E', '#635B4E', '#968C7C', '#F5F3EC'] },
    { name: 'Pale Bisque Ceramic', colors: ['#211C18', '#3D3630', '#635950', '#968A80', '#F5F1EE'] },
    { name: 'Limestone Dust Quarry', colors: ['#1E1C18', '#383530', '#5B5750', '#8C867E', '#F4F2EE'] },
    { name: 'Oat Milk Cream', colors: ['#211E19', '#3D3831', '#635C52', '#968D81', '#F5F3EF'] },
    { name: 'Driftwood Gray Plank', colors: ['#1C1C1A', '#353532', '#565652', '#84847E', '#F3F3F1'] },
    { name: 'Soft Calico Cat', colors: ['#211C19', '#3D3631', '#635A52', '#968B82', '#F5F2EF'] },
    { name: 'Parchment Hue Page', colors: ['#211D17', '#3D372E', '#635A4D', '#968B7A', '#F5F2EB'] },
    { name: 'Gentle Sand Shore', colors: ['#211E18', '#3D372E', '#635B4E', '#968C7C', '#F5F3EB'] },
    { name: 'Muted Cream Velvet', colors: ['#211E1A', '#3D3832', '#635C54', '#968D84', '#F5F3EF'] },
    { name: 'Rice Powder Fine', colors: ['#1F1E1C', '#3B3937', '#5F5C59', '#8F8B87', '#F4F3F2'] },
    { name: 'Natural Linen Towel', colors: ['#1F1C18', '#3B3630', '#605850', '#91877E', '#F4F1EE'] },
    { name: 'Bleached Cotton Sheet', colors: ['#1D1D1B', '#383835', '#5C5C58', '#8C8C87', '#F4F4F2'] },
    { name: 'Creamy Alabaster Urn', colors: ['#211E19', '#3D3831', '#635C53', '#968E83', '#F5F3EF'] },
    { name: 'Soft Hemp Rope', colors: ['#211D18', '#3D3730', '#635A50', '#968B7E', '#F5F2EE'] },
    { name: 'Bone China Cup', colors: ['#1F1E1B', '#3B3935', '#605C57', '#918D86', '#F4F3F0'] },
    { name: 'Pale Putty Glaze', colors: ['#1E1C1A', '#383532', '#5B5752', '#8C8681', '#F4F2F0'] },
    { name: 'Warm Ecru Silk', colors: ['#211D17', '#3D372E', '#635A4E', '#968A7C', '#F5F2EB'] },
    { name: 'Muted Linen Weave', colors: ['#1F1D19', '#3B3731', '#605A52', '#918A80', '#F4F2EE'] },
    { name: 'Sand Dune Horizon', colors: ['#211D17', '#3D362C', '#635A4B', '#968A77', '#F5F1E9'] },
    { name: 'Soft Cashmere Wrap', colors: ['#211D1A', '#3D3732', '#635A54', '#968A83', '#F5F2F0'] },
  ],
};

// 3. Assemble and Validate the Complete Collection
const finalPresets = [...existingPresets];
const existingIds = new Set(existingPresets.map(p => p.id));
const existingNames = new Set(existingPresets.map(p => p.name.toLowerCase()));
const colorSets = new Set(existingPresets.map(p => [...p.colors].sort().join(',')));

console.log('Adding new presets...');
let addedCount = 0;

for (const [category, presets] of Object.entries(NEW_PRESETS_BY_CAT)) {
  for (const preset of presets) {
    const rawId = `${slugify(category)}-${slugify(preset.name)}`;
    let id = rawId;
    let counter = 1;
    while (existingIds.has(id)) {
      id = `${rawId}-${counter++}`;
    }

    // Verify name uniqueness
    if (existingNames.has(preset.name.toLowerCase())) {
      console.warn(`Duplicate name detected: "${preset.name}". Adjusting name...`);
      preset.name = `${preset.name} Art`;
    }

    // Validate 5 distinct colors
    const normColors = preset.colors.map(c => normalizeHex(c));
    if (normColors.length !== 5) {
      throw new Error(`Preset ${preset.name} must have 5 colors, got ${normColors.length}`);
    }
    const uniqueInPreset = new Set(normColors);
    if (uniqueInPreset.size !== 5) {
      throw new Error(`Preset ${preset.name} has duplicate colors inside palette: ${normColors.join(', ')}`);
    }

    // Check against global duplicates
    const sortedKey = [...normColors].sort().join(',');
    if (colorSets.has(sortedKey)) {
      console.warn(`Duplicate color combination found in ${preset.name}. Slightly adjusting...`);
      // Shift last color by 1 unit
      normColors[4] = normColors[4].slice(0, 6) + (normColors[4][6] === 'F' ? 'E' : 'F');
    }

    existingIds.add(id);
    existingNames.add(preset.name.toLowerCase());
    colorSets.add(sortedKey);

    finalPresets.push({
      id,
      name: preset.name,
      category,
      colors: normColors,
      tags: [category.toLowerCase(), preset.name.toLowerCase()],
    });

    addedCount++;
  }
}

console.log(`Added ${addedCount} new presets. Total presets: ${finalPresets.length}`);

// 4. Verification Check
const countsByCategory = {};
for (const p of finalPresets) {
  countsByCategory[p.category] = (countsByCategory[p.category] || 0) + 1;
}

console.log('\nFinal Presets Per Category:');
let allMeet50 = true;
for (const [cat, count] of Object.entries(countsByCategory)) {
  console.log(`- ${cat}: ${count} palettes`);
  if (count < 50) {
    allMeet50 = false;
  }
}

if (!allMeet50) {
  throw new Error('Not all categories meet the minimum 50 palettes requirement!');
}
if (finalPresets.length < 1000) {
  throw new Error(`Total presets ${finalPresets.length} is less than 1,000!`);
}

// 5. Generate and Write src/lib/presets/presets.ts
const outputFilePath = path.resolve('src/lib/presets/presets.ts');

const tsContent = `import { PalettePreset } from '@/types';

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

export const PRESET_PALETTES: PalettePreset[] = ${JSON.stringify(finalPresets, null, 2)};
`;

fs.writeFileSync(outputFilePath, tsContent, 'utf8');
console.log(`\nSuccessfully wrote ${finalPresets.length} presets to ${outputFilePath}`);
