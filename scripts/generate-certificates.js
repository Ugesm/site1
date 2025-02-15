const devcert = require('devcert');
const fs = require('fs');
const path = require('path');

async function generateCertificates() {
  try {
    const credentials = await devcert.certificateFor('localhost');
    
    const certsDir = path.join(__dirname, '..', 'certificates');
    if (!fs.existsSync(certsDir)) {
      fs.mkdirSync(certsDir);
    }

    fs.writeFileSync(path.join(certsDir, 'localhost-key.pem'), credentials.key);
    fs.writeFileSync(path.join(certsDir, 'localhost.pem'), credentials.cert);
    
    console.log('Certificats SSL générés avec succès !');
  } catch (error) {
    console.error('Erreur lors de la génération des certificats:', error);
  }
}

generateCertificates();
