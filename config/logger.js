const winston = require('winston');

// Create a Winston logger instance
const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  transports: [
    new winston.transports.File({ filename: 'logs/error.log', level: 'error' }),
    new winston.transports.Console(),
  ],
});

// Replace console.log statements with Winston logging
const originalConsoleLog = console.log;
console.log = (message) => {
  logger.info(message);
};

module.exports = logger;