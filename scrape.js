const https = require('https');

const queries = ['Courthouse', 'Gavel', 'Soldier', 'Family', 'Real_estate', 'Handcuffs', 'Judge', 'Military', 'Divorce', 'Property'];

async function getImages() {
  for (const q of queries) {
    const url = `https://en.wikipedia.org/w/api.php?action=query&titles=${q}&prop=pageimages&format=json&pithumbsize=800`;
    await new Promise(resolve => {
      https.get(url, { headers: { 'User-Agent': 'Bot' } }, res => {
        let data = '';
        res.on('data', c => data += c);
        res.on('end', () => {
          try {
            const pages = JSON.parse(data).query.pages;
            const page = Object.values(pages)[0];
            if (page.thumbnail) {
              console.log(`${q}: ${page.thumbnail.source}`);
            }
          } catch (e) {}
          resolve();
        });
      });
    });
  }
}
getImages();
