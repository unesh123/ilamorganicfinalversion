const fs = require('fs');
let c = fs.readFileSync('src/data/products.js', 'utf8');

const imageMap = {
    'honey-local.jpg': '/products/honey.jpg',
    'khareko-ghiu.jpg': '/products/ghee.jpg',
    'chauri-ghee.jpg': '/products/ghee.jpg',
    'local-cow-ghee.jpg': '/products/ghee.jpg',
    'ghee-1ltr.jpg': '/products/ghee.jpg',
    'chauri-nahuni-ghee.jpg': '/products/ghee.jpg',
    'green-tea.jpg': '/products/tea.jpg',
    'black-tea.jpg': '/products/tea.jpg',
    'churpi-200g.jpg': '/products/churpi.jpg',
    'churpi-500g.jpg': '/products/churpi.jpg',
    'churpi-small.jpg': '/products/churpi.jpg',
    'chauri-churpi.jpg': '/products/churpi.jpg',
    'sisno-powder.jpg': '/products/powder.jpg',
    'local-besar.jpg': '/products/powder.jpg',
};

for (const [key, val] of Object.entries(imageMap)) {
    c = c.replace(new RegExp('https://www.ilamorganic.com.np/storage/products/' + key, 'g'), val);
}

// Notice pdfs
c = c.replace('https://www.ilamorganic.com.np/noticspdf/Akabare1.jpg', '/products/powder.jpg');
c = c.replace('https://www.ilamorganic.com.np/noticspdf/kagati%201.jpg', '/products/powder.jpg');

fs.writeFileSync('src/data/products.js', c);
console.log("Images updated successfully.");
