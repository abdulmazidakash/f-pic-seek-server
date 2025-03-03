const logger = (req, res, next) => {
    console.log(`✅ [${new Date().toLocaleTimeString()}] ${req.method} ${req.url} from ${req.hostname} (IP: ${req.ip})`);
    next(); // Pass control to the next middleware
};

module.exports = logger;
