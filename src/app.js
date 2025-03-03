require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const logger = require('./middleware/logger'); // Ensure this file exists
const imageRouter = require('./routes/image.route');
const commentRouter = require('./routes/comment.route');

// Middleware
app.use(cors());
app.use(express.json());
app.use(logger);

// Image Generation Route
app.use('/api/v1/image', imageRouter)
app.use('/api/v1/comment', commentRouter)

// Root Route
app.get('/', (req, res) => {
	res.status(200).json({
		status: 200,
		message: `🚩 Server is running`,
	});
});

module.exports = app;
