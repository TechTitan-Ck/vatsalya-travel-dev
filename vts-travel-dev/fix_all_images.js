const fs = require('fs');

let content = fs.readFileSync('app/components/CategoriesOverlay.jsx', 'utf8');

const mapping = {
  // Pilgrimage
  '"/images/destinations/tirupati_balaji.jpg"': '"/images/destinations/kashi_ayodhya_darshan_1781400900579.png"',
  'IMAGES.TEMPLE': '"/images/destinations/char_dham_yatra_1781400883905.png"', // Mata Vaishno Devi
  '"/images/destinations/golden_temple_wagah.jpg"': '"/images/destinations/kashi_ayodhya_darshan_1781400900579.png"',

  // Adventure
  '"/images/destinations/everest_base_camp_trek.jpg"': '"/images/destinations/swiss_alps_honeymoon_1781400866221.png"',
  '"/images/destinations/leh_ladakh_bike_expedition.jpg"': '"/images/destinations/kashmir_paradise_1781400555245.png"',
  '"/images/destinations/spiti_valley_circuit.jpg"': '"/images/destinations/manali.png"',
  '"/images/destinations/rishikesh_rafting_camping.jpg"': '"/images/destinations/north_east_delights_1781400624954.png"',
  '"/images/destinations/scuba_diving_andaman.jpg"': '"/images/destinations/andaman_islands_1781400607128.png"',

  // Wildlife
  '"/images/destinations/masai_mara_safari_kenya.jpg"': '"/images/destinations/rajasthan_royal_tour_1781400589901.png"',
  '"/images/destinations/jim_corbett_national_park.jpg"': '"/images/destinations/meghalaya.png"',
  '"/images/destinations/ranthambore_tiger_safari.jpg"': '"/images/destinations/rajasthan_royal_tour_1781400589901.png"',
  '"/images/destinations/kaziranga_rhino_tour.jpg"': '"/images/destinations/north_east_delights_1781400624954.png"',
  '"/images/destinations/bandhavgarh_kanha.jpg"': '"/images/destinations/meghalaya.png"',

  // Hill Station
  '"/images/destinations/manali_wonderland.jpg"': '"/images/destinations/manali.png"',
  '"/images/destinations/shimla_kufri.jpg"': '"/images/destinations/kashmir_paradise_1781400555245.png"',
  '"/images/destinations/darjeeling_gangtok.jpg"': '"/images/destinations/north_east_delights_1781400624954.png"',
  '"/images/destinations/ooty_coonoor.jpg"': '"/images/destinations/meghalaya.png"',
  '"/images/destinations/munnar_tea_estates.jpg"': '"/images/destinations/kerala_gods_own_country_1781400571738.png"',

  // Beach
  '"/images/destinations/goa_vibes.jpg"': '"/images/destinations/mauritius_escape_1781400832534.png"',
  '"/images/destinations/maldives_luxury.jpg"': '"/images/destinations/maldives_romance_1781400798242.png"',
  '"/images/destinations/phuket_krabi.jpg"': '"/images/destinations/andaman_islands_1781400607128.png"',
  '"/images/destinations/andaman_coastal.jpg"': '"/images/destinations/andaman_islands_1781400607128.png"',
  '"/images/destinations/seychelles_retreat.jpg"': '"/images/destinations/mauritius_escape_1781400832534.png"',

  // Heritage
  '"/images/destinations/golden_triangle_tour.jpg"': '"/images/destinations/rajasthan_royal_tour_1781400589901.png"',
  '"/images/destinations/hampi_ruins.jpg"': '"/images/destinations/rajasthan_royal_tour_1781400589901.png"',
  '"/images/destinations/egypt_pyramids.jpg"': '"/images/destinations/dubai_glamour_1781400656516.png"',
  '"/images/destinations/rome_florence.jpg"': '"/images/destinations/european_highlights_1781400639705.png"',
  '"/images/destinations/ajanta_ellora.jpg"': '"/images/destinations/kashi_ayodhya_darshan_1781400900579.png"',

  // Cruise
  '"/images/destinations/singapore_to_malaysia.jpg"': '"/images/destinations/australia_new_zealand_1781400725360.png"',
  '"/images/destinations/mumbai_to_goa_cruise.jpg"': '"/images/destinations/mauritius_escape_1781400832534.png"',
  '"/images/destinations/mediterranean_voyage.jpg"': '"/images/destinations/santorini_dream_1781400814713.png"',
  '"/images/destinations/alaska_glacier_cruise.jpg"': '"/images/destinations/swiss_alps_honeymoon_1781400866221.png"',
  '"/images/destinations/nile_river_cruise.jpg"': '"/images/destinations/dubai_glamour_1781400656516.png"',

  // Wellness
  '"/images/destinations/rishikesh_yoga_retreat.jpg"': '"/images/destinations/kashi_ayodhya_darshan_1781400900579.png"',
  '"/images/destinations/kerala_ayurveda.jpg"': '"/images/destinations/kerala_gods_own_country_1781400571738.png"',
  '"/images/destinations/bali_healing_spa.jpg"': '"/images/destinations/bali_love_spell_1781400849535.png"',
  '"/images/destinations/auroville_zen.jpg"': '"/images/destinations/kerala_gods_own_country_1781400571738.png"',
  '"/images/destinations/himalayan_vipassana.jpg"': '"/images/destinations/kashmir_paradise_1781400555245.png"',

  // Weekend Getaways
  '"/images/destinations/lonavala_khandala.jpg"': '"/images/destinations/meghalaya.png"',
  '"/images/destinations/coorg_coffee_trails.jpg"': '"/images/destinations/kerala_gods_own_country_1781400571738.png"',
  '"/images/destinations/pondicherry_french_vibe.jpg"': '"/images/destinations/mauritius_escape_1781400832534.png"',
  '"/images/destinations/mahabaleshwar.jpg"': '"/images/destinations/meghalaya.png"',
  '"/images/destinations/mussoorie_quick_break.jpg"': '"/images/destinations/manali.png"',

  // Solo & Backpacking
  '"/images/destinations/vietnam_cambodia.jpg"': '"/images/destinations/southeast_asia_explorer_1781400674121.png"',
  '"/images/destinations/kasol_tosh.jpg"': '"/images/destinations/manali.png"',
  '"/images/destinations/eurotrip_backpacking.jpg"': '"/images/destinations/european_highlights_1781400639705.png"',
  '"/images/destinations/meghalaya_backpacking.jpg"': '"/images/destinations/meghalaya.png"',
  '"/images/destinations/gokarna_beach_trail.jpg"': '"/images/destinations/mauritius_escape_1781400832534.png"',

  // Corporate & MICE
  '"/images/destinations/goa_leadership_summit.jpg"': '"/images/destinations/mauritius_escape_1781400832534.png"',
  '"/images/destinations/dubai_team_reward.jpg"': '"/images/destinations/dubai_glamour_1781400656516.png"',
  '"/images/destinations/ramoji_film_city.jpg"': '"/images/destinations/rajasthan_royal_tour_1781400589901.png"',
  '"/images/destinations/bangkok_corporate.jpg"': '"/images/destinations/southeast_asia_explorer_1781400674121.png"',
  '"/images/destinations/kyoto_zen_retreat.jpg"': '"/images/destinations/southeast_asia_explorer_1781400674121.png"',

  // Luxury Experiences
  '"/images/destinations/burj_al_arab_dubai.jpg"': '"/images/destinations/dubai_glamour_1781400656516.png"',
  'IMAGES.PALACE': '"/images/destinations/rajasthan_royal_tour_1781400589901.png"', // Palace on Wheels
  '"/images/destinations/private_island_maldives.jpg"': '"/images/destinations/maldives_romance_1781400798242.png"',
  'IMAGES.SNOW': '"/images/destinations/swiss_alps_honeymoon_1781400866221.png"', // Swiss Chalet
  '"/images/destinations/french_riviera_yacht.jpg"': '"/images/destinations/santorini_dream_1781400814713.png"',

  // Customized
  'IMAGES.TREK': '"/images/destinations/meghalaya.png"', // Build Your Own Adventure
  '"/images/destinations/personal_travel_concierge.jpg"': '"/images/destinations/dubai_glamour_1781400656516.png"',
  '"/images/destinations/surprise_destination.jpg"': '"/images/destinations/andaman_islands_1781400607128.png"',
  '"/images/destinations/destination_weddings.jpg"': '"/images/destinations/rajasthan_royal_tour_1781400589901.png"',
  '"/images/destinations/special_needs_travel.jpg"': '"/images/destinations/kerala_gods_own_country_1781400571738.png"',
};

for (const [key, val] of Object.entries(mapping)) {
  content = content.split(key).join(val);
}

fs.writeFileSync('app/components/CategoriesOverlay.jsx', content, 'utf8');
console.log('Categories overlay images updated successfully.');
