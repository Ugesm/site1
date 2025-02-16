const devcert = require('devcert');
const fs = require('fs');
const path = require('path');

async function generateCertificates() {
  try {
    const ssl = await devcert.certificateFor('localhost');
    
    fs.writeFileSync(
      path.join(__dirname, './certificates/localhost-key.pem'),
      ssl.key
    );
    
    fs.writeFileSync(
      path.join(__dirname, './certificates/localhost.pem'),
      ssl.cert
    );
    
    console.log('Certificates generated successfully!');
  } catch (error) {
    console.error('Error generating certificates:', error);
  }
}

generateCertificates();
