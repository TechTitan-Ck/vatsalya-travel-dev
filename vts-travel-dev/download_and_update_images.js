const fs = require('fs');
const path = require('path');
const https = require('https');

const sleep = ms => new Promise(r => setTimeout(r, ms));

const targetFile = path.join(__dirname, 'app', 'components', 'CategoriesOverlay.jsx');
const destDir = path.join(__dirname, 'public', 'images', 'destinations');

// Ensure destination directory exists
if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

// 17 destinations that already have premium AI images generated and copied
const AI_MAPPED_IMAGES = {
  "Kashmir Paradise": "/images/destinations/kashmir_paradise_1781400555245.png",
  "Kerala God's Own Country": "/images/destinations/kerala_gods_own_country_1781400571738.png",
  "Rajasthan Royal Tour": "/images/destinations/rajasthan_royal_tour_1781400589901.png",
  "Andaman Islands": "/images/destinations/andaman_islands_1781400607128.png",
  "North East Delights": "/images/destinations/north_east_delights_1781400624954.png",
  "European Highlights": "/images/destinations/european_highlights_1781400639705.png",
  "Dubai Glamour": "/images/destinations/dubai_glamour_1781400656516.png",
  "Southeast Asia Explorer": "/images/destinations/southeast_asia_explorer_1781400674121.png",
  "USA East Coast": "/images/destinations/usa_east_coast_1781400690675.png",
  "Australia & New Zealand": "/images/destinations/australia_new_zealand_1781400725360.png",
  "Maldives Romance": "/images/destinations/maldives_romance_1781400798242.png",
  "Santorini Dream": "/images/destinations/santorini_dream_1781400814713.png",
  "Mauritius Escape": "/images/destinations/mauritius_escape_1781400832534.png",
  "Bali Love Spell": "/images/destinations/bali_love_spell_1781400849535.png",
  "Swiss Alps Honeymoon": "/images/destinations/swiss_alps_honeymoon_1781400866221.png",
  "Char Dham Yatra": "/images/destinations/char_dham_yatra_1781400883905.png",
  "Kashi & Ayodhya Darshan": "/images/destinations/kashi_ayodhya_darshan_1781400900579.png"
};

// Search overrides to get the absolute best/most iconic article images on Wikipedia
const SEARCH_OVERRIDES = {
  "Mata Vaishno Devi": "Vaishno Devi",
  "Golden Temple & Wagah": "Harmandir Sahib",
  "Everest Base Camp Trek": "Everest Base Camp",
  "Leh Ladakh Bike Expedition": "Ladakh",
  "Spiti Valley Circuit": "Spiti Valley",
  "Rishikesh Rafting & Camping": "Rishikesh",
  "Scuba Diving Andaman": "Havelock Island",
  "Masai Mara Safari, Kenya": "Maasai Mara",
  "Ranthambore Tiger Safari": "Ranthambore National Park",
  "Kaziranga Rhino Tour": "Kaziranga National Park",
  "Bandhavgarh & Kanha": "Bandhavgarh National Park",
  "Manali Wonderland": "Manali, Himachal Pradesh",
  "Shimla & Kufri": "Shimla",
  "Darjeeling & Gangtok": "Darjeeling",
  "Ooty & Coonoor": "Ooty",
  "Munnar Tea Estates": "Munnar",
  "Goa Vibes": "Goa",
  "Maldives Luxury": "Maldives",
  "Phuket & Krabi": "Phuket",
  "Andaman Coastal": "Andaman Islands",
  "Seychelles Retreat": "Seychelles",
  "Golden Triangle Tour": "Taj Mahal",
  "Hampi Ruins": "Hampi",
  "Egypt Pyramids": "Giza Pyramids",
  "Rome & Florence": "Colosseum",
  "Ajanta & Ellora": "Ajanta Caves",
  "Singapore to Malaysia": "Singapore",
  "Mumbai to Goa Cruise": "Cruise ship",
  "Mediterranean Voyage": "Mediterranean Sea",
  "Alaska Glacier Cruise": "Glacier Bay National Park",
  "Nile River Cruise": "Nile",
  "Rishikesh Yoga Retreat": "Rishikesh",
  "Kerala Ayurveda": "Ayurveda",
  "Bali Healing & Spa": "Bali",
  "Auroville Zen": "Auroville",
  "Himalayan Vipassana": "Dharamshala",
  "Lonavala & Khandala": "Lonavala",
  "Coorg Coffee Trails": "Coorg",
  "Pondicherry French Vibe": "Pondicherry",
  "Mussoorie Quick Break": "Mussoorie",
  "Vietnam & Cambodia": "Angkor Wat",
  "Kasol & Tosh": "Kasol",
  "Eurotrip Backpacking": "Europe",
  "Meghalaya Backpacking": "Shillong",
  "Gokarna Beach Trail": "Gokarna",
  "Goa Leadership Summit": "Goa",
  "Dubai Team Reward": "Dubai",
  "Bangkok Corporate": "Bangkok",
  "Kyoto Zen Retreat": "Kyoto",
  "Burj Al Arab Dubai": "Burj Al Arab",
  "Private Island Maldives": "Maldives",
  "Swiss Chalet Retreat": "Swiss Alps",
  "French Riviera Yacht": "French Riviera",
  "Build Your Own Adventure": "Backpacking",
  "Personal Travel Concierge": "Concierge",
  "Surprise Destination": "Adventure travel",
  "Destination Weddings": "Wedding",
  "Special Needs Travel": "Accessible tourism"
};

// Standard fallbacks (in case Wikipedia returns nothing)
const FALLBACKS = {
  "default": "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=600&h=400&fit=crop"
};

// Function to fetch JSON from URL
function fetchJson(url) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'VatsalyaTravelDevBot/1.0 (contact@vatsalyatravel.com)' } }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          resolve(JSON.parse(data));
        } catch (e) {
          reject(e);
        }
      });
    }).on('error', reject);
  });
}

// Function to download image and save to local path
function downloadImage(url, localPath) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'VatsalyaTravelDevBot/1.0 (contact@vatsalyatravel.com)' } }, (res) => {
      if (res.statusCode !== 200) {
        reject(new Error(`Failed to download image. Status: ${res.statusCode}`));
        return;
      }
      const fileStream = fs.createWriteStream(localPath);
      res.pipe(fileStream);
      fileStream.on('finish', () => {
        fileStream.close();
        resolve();
      });
      fileStream.on('error', reject);
    }).on('error', reject);
  });
}

// Function to search Wikipedia and get the pageimage thumbnail URL
async function getWikipediaImageUrl(queryName) {
  const searchTerm = SEARCH_OVERRIDES[queryName] || queryName;
  const encodedQuery = encodeURIComponent(searchTerm);
  const url = `https://en.wikipedia.org/w/api.php?action=query&generator=search&gsrsearch=${encodedQuery}&gsrlimit=1&prop=pageimages&format=json&pithumbsize=600`;

  try {
    const data = await fetchJson(url);
    if (data.query && data.query.pages) {
      const pages = data.query.pages;
      const pageId = Object.keys(pages)[0];
      const thumbnail = pages[pageId].thumbnail;
      if (thumbnail && thumbnail.source) {
        return thumbnail.source;
      }
    }
  } catch (e) {
    console.error(`Error searching Wikipedia for "${queryName}":`, e.message);
  }
  return null;
}

// Main processing function
async function run() {
  console.log('Reading CategoriesOverlay.jsx...');
  let content = fs.readFileSync(targetFile, 'utf8');

  // Find the categories block in CategoriesOverlay.jsx
  // We will find all destinations line by line and update their images.
  // The line is typically: { name: "...", places: "...", duration: "...", price: "...", image: ... }
  const regex = /{\s*name:\s*"([^"]+)",\s*places:\s*"([^"]+)",\s*duration:\s*"([^"]+)",\s*price:\s*"([^"]+)",\s*image:\s*([^\s}]+)\s*}/g;
  
  let match;
  const matches = [];
  while ((match = regex.exec(content)) !== null) {
    matches.push({
      fullMatch: match[0],
      name: match[1],
      places: match[2],
      duration: match[3],
      price: match[4],
      image: match[5]
    });
  }

  console.log(`Found ${matches.length} destinations in CategoriesOverlay.jsx.`);

  let updatedCount = 0;
  for (const m of matches) {
    const destName = m.name;
    let newImageUrl = '';

    // Check if it's already mapped to an AI image
    if (AI_MAPPED_IMAGES[destName]) {
      newImageUrl = AI_MAPPED_IMAGES[destName];
      console.log(`[AI Image] Mapping "${destName}" -> ${newImageUrl}`);
    } else {
      // It's a remaining destination, let's download its Wikipedia pageimage locally
      const cleanFileName = destName.toLowerCase().replace(/[^a-z0-9]/g, '_').replace(/_+/g, '_').replace(/^_+|_+$/g, '');
      const localFileName = `${cleanFileName}.jpg`;
      const localFilePath = path.join(destDir, localFileName);
      const relativeLocalUrl = `/images/destinations/${localFileName}`;

      if (fs.existsSync(localFilePath)) {
        // Already downloaded, just map it
        newImageUrl = relativeLocalUrl;
        console.log(`[Cache Hit] Mapped "${destName}" -> ${newImageUrl}`);
      } else {
        // Wait 1 second to avoid rate limits
        await sleep(1000);
        // Query Wikipedia Pageimages
        console.log(`[Wikipedia Query] Fetching image for "${destName}"...`);
        const wpImageUrl = await getWikipediaImageUrl(destName);
        if (wpImageUrl) {
          try {
            await downloadImage(wpImageUrl, localFilePath);
            newImageUrl = relativeLocalUrl;
            console.log(`[Downloaded] Saved "${destName}" to ${localFilePath}`);
          } catch (err) {
            console.error(`[Error] Failed to download image for "${destName}":`, err.message);
            newImageUrl = FALLBACKS.default;
          }
        } else {
          console.warn(`[Warning] No image found for "${destName}", using fallback.`);
          newImageUrl = FALLBACKS.default;
        }
      }
    }

    // Now replace the image string in the JSX content
    const replacementStr = `{ name: "${m.name}", places: "${m.places}", duration: "${m.duration}", price: "${m.price}", image: "${newImageUrl}" }`;
    content = content.replace(m.fullMatch, replacementStr);
    updatedCount++;
  }

  // Double check and replace any outstanding generic Unsplash references in CategoriesOverlay.jsx to clean up the code
  fs.writeFileSync(targetFile, content, 'utf8');
  console.log(`Successfully updated ${updatedCount} destinations in CategoriesOverlay.jsx.`);
}

run().catch(console.error);
