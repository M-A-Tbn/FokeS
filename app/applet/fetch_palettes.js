const https = require('https');

https.get('https://digitalsynopsis.com/design/color-schemes-palettes-combinations/', (res) => {
  let data = '';
  res.on('data', (chunk) => { data += chunk; });
  res.on('end', () => {
    // Look for patterns like "#123456"
    // In that specific article, the hex codes are usually listed under the images.
    // Let's just extract all hex codes and group them by 4 or 5.
    const hexes = data.match(/#[0-9a-fA-F]{6}/g);
    if (hexes) {
      // Deduplicate and filter out common non-palette hexes if needed
      const uniqueHexes = [...new Set(hexes)];
      console.log(JSON.stringify(uniqueHexes.slice(0, 40), null, 2));
    } else {
      console.log("No hex codes found");
    }
  });
}).on('error', (err) => {
  console.error(err);
});
