const fs = require('fs');
const yaml = require('js-yaml');

// Load configuration properties from YAML file
const configFile = 'config.yaml';
const configFileContent = fs.readFileSync(configFile, 'utf8');
const configProperties = yaml.safeLoad(configFileContent);

// Merge environment variables with configuration properties
const config = {
  ...process.env,
  ...configProperties,
};

module.exports = config;