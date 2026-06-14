const fs = require('fs');
let content = fs.readFileSync('app/components/CategoriesOverlay.jsx', 'utf8');

const mapping = {
  'tirupati_balaji': 'IMAGES.TEMPLE',
  'golden_temple_wagah': 'IMAGES.TEMPLE',
  'everest_base_camp_trek': 'IMAGES.SNOW',
  'leh_ladakh_bike_expedition': 'IMAGES.HILLS',
  'spiti_valley_circuit': 'IMAGES.HILLS',
  'rishikesh_rafting_camping': 'IMAGES.LAKE',
  'scuba_diving_andaman': 'IMAGES.BEACH_AERIAL',
  'masai_mara_safari_kenya': 'IMAGES.SAFARI',
  'jim_corbett_national_park': 'IMAGES.TIGER',
  'ranthambore_tiger_safari': 'IMAGES.TIGER',
  'kaziranga_rhino_tour': 'IMAGES.ELEPHANT',
  'bandhavgarh_kanha': 'IMAGES.WILDLIFE',
  'manali_wonderland': 'IMAGES.SNOW',
  'shimla_kufri': 'IMAGES.SNOW',
  'darjeeling_gangtok': 'IMAGES.HILLS',
  'ooty_coonoor': 'IMAGES.HILLS',
  'munnar_tea_estates': 'IMAGES.HILLS',
  'goa_vibes': 'IMAGES.BEACH',
  'maldives_luxury': 'IMAGES.MALDIVES',
  'phuket_krabi': 'IMAGES.BEACH_AERIAL',
  'andaman_coastal': 'IMAGES.BEACH_SUNSET',
  'seychelles_retreat': 'IMAGES.BEACH',
  'golden_triangle_tour': 'IMAGES.TAJ_MAHAL',
  'hampi_ruins': 'IMAGES.FORT',
  'egypt_pyramids': 'IMAGES.DESERT',
  'rome_florence': 'IMAGES.PARIS',
  'ajanta_ellora': 'IMAGES.FORT',
  'singapore_to_malaysia': 'IMAGES.CRUISE',
  'mumbai_to_goa_cruise': 'IMAGES.CRUISE',
  'mediterranean_voyage': 'IMAGES.CRUISE',
  'alaska_glacier_cruise': 'IMAGES.SNOW',
  'nile_river_cruise': 'IMAGES.CRUISE',
  'rishikesh_yoga_retreat': 'IMAGES.YOGA',
  'kerala_ayurveda': 'IMAGES.KERALA',
  'bali_healing_spa': 'IMAGES.BALI',
  'auroville_zen': 'IMAGES.YOGA',
  'himalayan_vipassana': 'IMAGES.YOGA',
  'lonavala_khandala': 'IMAGES.HILLS',
  'coorg_coffee_trails': 'IMAGES.HILLS',
  'pondicherry_french_vibe': 'IMAGES.BEACH',
  'mahabaleshwar': 'IMAGES.HILLS',
  'mussoorie_quick_break': 'IMAGES.HILLS',
  'vietnam_cambodia': 'IMAGES.THAI',
  'kasol_tosh': 'IMAGES.TREK',
  'eurotrip_backpacking': 'IMAGES.PARIS',
  'meghalaya_backpacking': 'IMAGES.TREK',
  'gokarna_beach_trail': 'IMAGES.BEACH',
  'goa_leadership_summit': 'IMAGES.BEACH',
  'dubai_team_reward': 'IMAGES.DUBAI',
  'ramoji_film_city': 'IMAGES.PALACE',
  'bangkok_corporate': 'IMAGES.THAI',
  'kyoto_zen_retreat': 'IMAGES.YOGA',
  'burj_al_arab_dubai': 'IMAGES.DUBAI',
  'private_island_maldives': 'IMAGES.MALDIVES',
  'french_riviera_yacht': 'IMAGES.CRUISE',
  'personal_travel_concierge': 'IMAGES.DUBAI',
  'surprise_destination': 'IMAGES.LAKE',
  'destination_weddings': 'IMAGES.PALACE',
  'special_needs_travel': 'IMAGES.LAKE'
};

for (const [key, val] of Object.entries(mapping)) {
  const regex = new RegExp('"/images/destinations/' + key + '\\\\.jpg"', 'g');
  content = content.replace(regex, val);
}

fs.writeFileSync('app/components/CategoriesOverlay.jsx', content, 'utf8');
console.log('Replaced .jpg paths with IMAGES constants.');
